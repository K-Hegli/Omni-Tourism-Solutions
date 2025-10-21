// API route for handling partner scoping form submissions
// This would typically be implemented in your backend server (Express.js, etc.)
// or as a serverless function on Vercel/Netlify

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ 
      error: 'Method not allowed',
      message: 'This endpoint only accepts POST requests' 
    });
  }

  try {
    // Extract form data from request body
    const {
      companyName,
      roleTitle,
      solutionInterest,
      email,
      currentPMS,
      nda
    } = req.body;

    // Validate required fields
    if (!companyName || !roleTitle || !solutionInterest || !email) {
      return res.status(400).json({
        error: 'Validation error',
        message: 'Missing required fields: companyName, roleTitle, solutionInterest, email'
      });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        error: 'Validation error',
        message: 'Invalid email format'
      });
    }

    // Check if solution requires integration and NDA
    const integrationSolutions = [
      'omni-tourops', 
      'omni-reservations', 
      'omni-payments', 
      'omni-connect'
    ];
    
    const requiresIntegration = integrationSolutions.includes(solutionInterest);
    if (requiresIntegration && !nda) {
      return res.status(400).json({
        error: 'Validation error',
        message: 'NDA agreement is required for integration solutions'
      });
    }

    // Create submission record
    const submission = {
      id: `scoping_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      timestamp: new Date().toISOString(),
      companyName: companyName.trim(),
      roleTitle: roleTitle.trim(),
      solutionInterest,
      email: email.trim().toLowerCase(),
      currentPMS: currentPMS ? currentPMS.trim() : '',
      nda: Boolean(nda),
      requiresIntegration,
      source: 'tourism_solutions_page'
    };

    // Log submission to server logs (replace with your logging solution)
    console.log('Scoping form submission:', JSON.stringify(submission, null, 2));

    // Forward to CRM/notification webhook (implement based on your CRM)
    // Example: Send to HubSpot, Salesforce, Pipedrive, etc.
    if (process.env.CRM_WEBHOOK_URL) {
      try {
        const crmResponse = await fetch(process.env.CRM_WEBHOOK_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.CRM_API_KEY || ''}`,
          },
          body: JSON.stringify({
            ...submission,
            leadSource: 'Omni Tourism Solutions',
            tags: ['tourism', 'scoping', solutionInterest],
          }),
        });

        if (!crmResponse.ok) {
          console.warn('CRM webhook failed:', crmResponse.statusText);
        }
      } catch (crmError) {
        console.error('CRM integration error:', crmError);
        // Don't fail the whole request if CRM fails
      }
    }

    // Send notification email (implement based on your email service)
    if (process.env.NOTIFICATION_EMAIL_WEBHOOK) {
      try {
        await fetch(process.env.NOTIFICATION_EMAIL_WEBHOOK, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            to: process.env.SALES_NOTIFICATION_EMAIL || 'sales@omni-solutions.com',
            subject: `New Scoping Request: ${companyName} - ${solutionInterest}`,
            template: 'scoping_notification',
            data: submission
          }),
        });
      } catch (emailError) {
        console.error('Email notification error:', emailError);
        // Don't fail the whole request if email fails
      }
    }

    // Return success response with download and scheduling URLs
    const responseData = {
      success: true,
      submissionId: submission.id,
      playbookUrl: '/assets/Omni-Pilot-Playbook.pdf', // Make sure this file exists in public/assets/
      scheduleUrl: process.env.SCOPING_CALENDAR_URL || 'https://calendly.com/omni-solutions/scoping-call',
      message: 'Your scoping request has been submitted successfully',
      nextSteps: [
        'Download the Pilot Playbook to prepare for your scoping call',
        'Schedule a 20-minute scoping call using the provided link',
        requiresIntegration ? 'Our team will prepare an NDA for technical discussions' : null,
        'You will receive a follow-up email within 24 hours'
      ].filter(Boolean)
    };

    // Return successful response
    res.status(200).json(responseData);

  } catch (error) {
    console.error('Scoping API error:', error);
    
    return res.status(500).json({
      error: 'Internal server error',
      message: 'An unexpected error occurred while processing your request',
      requestId: `req_${Date.now()}`
    });
  }
}

// Environment variables needed:
// - CRM_WEBHOOK_URL: Your CRM system webhook endpoint
// - CRM_API_KEY: API key for CRM authentication
// - NOTIFICATION_EMAIL_WEBHOOK: Email service webhook for notifications
// - SALES_NOTIFICATION_EMAIL: Email address to receive new lead notifications
// - SCOPING_CALENDAR_URL: Calendly or other booking system URL

// Example .env.local file:
// CRM_WEBHOOK_URL=https://api.hubspot.com/crm/v3/objects/contacts
// CRM_API_KEY=your-hubspot-api-key
// NOTIFICATION_EMAIL_WEBHOOK=https://api.sendgrid.com/v3/mail/send
// SALES_NOTIFICATION_EMAIL=sales@omni-solutions.com
// SCOPING_CALENDAR_URL=https://calendly.com/omni-solutions/scoping-call