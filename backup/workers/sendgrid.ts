// Cloudflare Workers용 SendGrid 어댑터
// SendGrid 이메일 서비스 (비활성화)
// export async function sendEmail(params: {
//   to: string;
//   from: string;
//   subject: string;
//   html?: string;
//   text?: string;
// }): Promise<boolean> {
//   try {
//     const response = await fetch('https://api.sendgrid.com/v3/mail/send', {
//       method: 'POST',
//       headers: {
//         'Authorization': `Bearer ${process.env.SENDGRID_API_KEY}`,
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         personalizations: [{
//           to: [{ email: params.to }],
//           subject: params.subject,
//         }],
//         from: { email: params.from },
//         content: [
//           {
//             type: 'text/html',
//             value: params.html || params.text || '',
//           },
//         ],
//       }),
//     });

//     return response.ok;
//   } catch (error) {
//     console.error('SendGrid error:', error);
//     return false;
//   }
// }

// 더미 이메일 함수 (기능 비활성화)
export async function sendEmail(params: {
  to: string;
  from: string;
  subject: string;
  html?: string;
  text?: string;
}): Promise<boolean> {
  console.log('Email functionality disabled:', params.subject);
  return false;
}
