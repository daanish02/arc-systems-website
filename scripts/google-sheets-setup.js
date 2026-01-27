/**
 * Google Apps Script for Contact Form → Google Sheets
 * 
 * SETUP INSTRUCTIONS:
 * 
 * 1. Create a new Google Sheet (this will store your form submissions)
 *    - Name it "Arc Systems - Contact Form Submissions"
 * 
 * 2. Add header row with these columns:
 *    Timestamp | Name | Email | Phone | Company | Project Type | Timeline | Description | Referral
 * 
 * 3. Open Google Apps Script:
 *    - In your Google Sheet, click Extensions > Apps Script
 * 
 * 4. Delete any existing code and paste THIS ENTIRE SCRIPT
 * 
 * 5. Deploy as Web App:
 *    - Click "Deploy" > "New deployment"
 *    - Click gear icon > Select "Web app"
 *    - Description: "Contact Form Submission"
 *    - Execute as: Me
 *    - Who has access: Anyone
 *    - Click "Deploy"
 *    - Copy the Web App URL
 * 
 * 6. Add to your .env.local file:
 *    NEXT_PUBLIC_GOOGLE_SHEETS_URL=<paste-your-web-app-url-here>
 * 
 * 7. Test by submitting a form on your website
 */

function doPost(e) {
  try {
    // Get the active spreadsheet
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Parse the incoming data
    const data = JSON.parse(e.postData.contents);
    
    // Format timestamp
    const timestamp = new Date(data.timestamp);
    
    // Append data to sheet
    sheet.appendRow([
      timestamp,
      data.name,
      data.email,
      data.phone,
      data.company,
      data.projectType,
      data.timeline,
      data.description,
      data.referral
    ]);
    
    // Optional: Send email notification to you
    // Uncomment and update email below if you want notifications
    /*
    MailApp.sendEmail({
      to: "hello@arcsystems.tech",
      subject: "New Contact Form Submission",
      body: `
New contact form submission:

Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone}
Company: ${data.company}
Project Type: ${data.projectType}
Timeline: ${data.timeline}
Description: ${data.description}
Referral Source: ${data.referral}

Submitted at: ${timestamp}
      `
    });
    */
    
    return ContentService
      .createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Test function - run this to verify script works
function testScript() {
  const testData = {
    postData: {
      contents: JSON.stringify({
        timestamp: new Date().toISOString(),
        name: "Test User",
        email: "test@example.com",
        phone: "+971501234567",
        company: "Test Company",
        projectType: "AI/ML Development",
        timeline: "2-4 months",
        description: "This is a test submission",
        referral: "Search Engine"
      })
    }
  };
  
  const result = doPost(testData);
  Logger.log(result.getContent());
}
