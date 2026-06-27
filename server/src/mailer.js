import nodemailer from "nodemailer";

let transporter = null;

function getTransporter() {
  if (transporter) return transporter;

  if (!process.env.SMTP_HOST) {
    console.warn("[mailer] SMTP not configured - notification emails are disabled.");
    return null;
  }

  transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT || 587),
    secure: process.env.SMTP_SECURE === "true",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    }
  });

  return transporter;
}

export async function sendMail({ subject, html, replyTo }) {
  const t = getTransporter();
  const to = process.env.NOTIFY_EMAIL;

  if (!t || !to) {
    console.warn("[mailer] Skipping email - SMTP or NOTIFY_EMAIL not set.");
    return;
  }

  try {
    await t.sendMail({
      from: process.env.SMTP_FROM || `"Semicolon Website" <${process.env.SMTP_USER}>`,
      to,
      subject,
      html,
      replyTo
    });
    console.log(`[mailer] Sent: ${subject}`);
  } catch (err) {
    console.error("[mailer] Failed to send email:", err.message);
  }
}

export function notifyNewContact(lead) {
  return sendMail({
    subject: `New Contact Enquiry from ${lead.name}`,
    replyTo: lead.email,
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${lead.name}</p>
      <p><strong>Email:</strong> ${lead.email}</p>
      <p><strong>Phone:</strong> ${lead.phone || "-"}</p>
      <p><strong>State:</strong> ${lead.state || "-"}</p>
      <p><strong>Subject:</strong> ${lead.subject || "-"}</p>
      <p><strong>Message:</strong><br/>${(lead.message || "").replace(/\n/g, "<br/>")}</p>
      <p style="color:#888;font-size:12px">Submitted ${new Date(lead.createdAt).toLocaleString()}</p>
    `
  });
}

export function notifyNewEnrollment(lead) {
  return sendMail({
    subject: `New Enrollment Application from ${lead.name}`,
    replyTo: lead.email,
    html: `
      <h2>New Enrollment Application</h2>
      <p><strong>Name:</strong> ${lead.name}</p>
      <p><strong>Email:</strong> ${lead.email}</p>
      <p><strong>Phone:</strong> ${lead.phone || "-"}</p>
      <p><strong>Track:</strong> ${lead.track}</p>
      <p><strong>Background:</strong> ${lead.background || "-"}</p>
      <p><strong>Message:</strong><br/>${(lead.message || "").replace(/\n/g, "<br/>")}</p>
      <p style="color:#888;font-size:12px">Submitted ${new Date(lead.createdAt).toLocaleString()}</p>
    `
  });
}