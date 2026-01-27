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

### 3. Review and Create

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

- **Build Failures**: Check the "Actions" tab in your GitHub repository for detailed error logs.
- **Next.js v16+**: Since we are using Next.js 16 (Canary/Latest), ensure the Azure build environment uses the correct Node.js version. You can specify this in `package.json`:
  ```json
  "engines": {
    "node": ">=20.0.0"
  }
  ```
