# Deployment Guide: Azure Static Web Apps

This guide provides instructions for deploying the Arc Systems website to Azure Static Web Apps (SWA). We prioritize cost efficiency by utilizing the **Free Tier** and the **Hybrid (SSR/ISR)** deployment model.

## Prerequisites

- An Azure account (Free or Pay-As-You-Go).
- A GitHub repository containing the website code.
- Azure CLI (optional, but recommended for local testing).

## Cost Efficiency: Free Tier

Azure Static Web Apps offers a generous **Free Tier** that is ideal for professional portfolios and small business websites.

| Feature | Free Tier |
| :--- | :--- |
| **Bandwidth** | 100 GB per month |
| **Storage** | 0.5 GB |
| **SSL Certificates** | Included (Free) |
| **Custom Domains** | Supported (Free) |
| **Managed Functions** | Included (for API routes) |

> [!TIP]
> To stay within the free tier, ensure you don't exceed the bandwidth or storage limits. For large assets (high-res videos), consider using a CDN or cloud storage, though for this website, the 100GB limit is likely sufficient.

---

## Deployment Steps

### 1. Create the Static Web App Resource

1.  Log in to the [Azure Portal](https://portal.azure.com).
2.  Click **Create a resource** and search for **Static Web App**.
3.  Fill in the details:
    - **Subscription**: Your Azure subscription.
    - **Resource Group**: Create a new one (e.g., `arc-systems-prod`).
    - **Name**: `arc-systems-website`.
    - **Plan type**: **Free**.
    - **Region**: Choose the one closest to your target audience.
    - **Deployment details**: Select **GitHub**.
4.  Authorize Azure to access your GitHub account and select your repository and branch (`main`).

### 2. Build Details (Next.js Hybrid)

When prompted for build presets:
- **Build Presets**: `Next.js`
- **App location**: `/`
- **Api location**: (Leave blank unless you have a dedicated `/api` folder outside of Next.js)
- **Output location**: `.next` (Next.js manages this automatically)

### 3. Environment Variables (Secret Keys)

Since your website uses **Google Sheets** and **Google Analytics**, you must add these keys to Azure for the production site to work:

1.  Open your **Static Web App** in the Azure Portal.
2.  Go to **Configuration** in the left sidebar.
3.  Add the following **Application settings** (copy values from your `.env.local`):
    - `NEXT_PUBLIC_GOOGLE_SHEETS_URL`
    - `NEXT_PUBLIC_GA_ID` (If using Analytics)
4.  Click **Save**. The app will restart with the new configuration.

### 4. Review and Create

Click **Review + create** and then **Create**. Azure will now set up a GitHub Actions workflow in your repository.

---

## Post-Deployment Configuration

### Custom Domain

1.  In the Azure Portal, go to your Static Web App resource.
2.  Select **Custom domains** from the sidebar.
3.  Add your domain (e.g., `archsystems.tech`).
4.  Follow the instructions to validate ownership (usually via CNAME or TXT records).

### Environment Variables

If your website uses `.env` variables (e.g., for Analytics or Google Sheets):
1.  Go to **Configuration** in the Azure Portal.
2.  Add your secrets as **Application settings**.
3.  Click **Save**.

---

## Local Testing with SWA CLI

To test how the site behaves in the SWA environment locally:

1.  Install the SWA CLI:
    ```bash
    npm install -g @azure/static-web-apps-cli
    ```
2.  Build your Next.js project:
    ```bash
    npm run build
    ```
3.  Start the SWA emulator:
    ```bash
    swa start
    ```

---

## Troubleshooting

### "BadRequest: No matching Static Web App was found or the api key was invalid"
This is the most common error. It means the `AZURE_STATIC_WEB_APPS_API_TOKEN` in your GitHub Secrets does not match the token for the resource in Azure.

1.  Go to the Azure Portal > Your SWA > **Manage deployment token**.
2.  In GitHub > Settings > Secrets > Actions, edit or create a secret named `AZURE_STATIC_WEB_APPS_API_TOKEN`.
3.  Ensure the name in your `.github/workflows/azure-static-web-apps.yml` matches exactly.

### "Could not find build output at .next"
If the build fails with this error, ensure your `output_location` in the YAML workflow is set to `.next`.
- **Next.js**: `.next`
- **Standard HTML**: `build` or `public`

### Multiple Workflow Files
I have consolidated the deployment into a single `.github/workflows/azure-static-web-apps.yml`. 
- **Recommendation**: Delete any other `.yml` files in the `.github/workflows/` directory to avoid redundant builds and confusion.
