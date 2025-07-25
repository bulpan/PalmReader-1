import * as sgMail from '@sendgrid/mail';

interface EmailParams {
  to: string;
  from: string;
  subject: string;
  text?: string;
  html?: string;
}

export async function sendEmail(params: EmailParams): Promise<boolean> {
  try {
    // Check if API key is available
    const apiKey = process.env.SENDGRID_API_KEY;
    if (!apiKey) {
      console.log('SENDGRID_API_KEY not configured, skipping email send');
      return false;
    }

    sgMail.setApiKey(apiKey);
    
    await sgMail.send({
      to: params.to,
      from: params.from,
      subject: params.subject,
      text: params.text,
      html: params.html,
    });
    
    return true;
  } catch (error) {
    console.error('SendGrid email error:', error);
    return false;
  }
}