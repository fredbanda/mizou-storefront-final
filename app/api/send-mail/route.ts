// /app/api/sendEmail/route.ts
import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (!email) {
      return NextResponse.json({ message: "Email is required" }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      service: "Gmail", // Or your email provider
      auth: {
        user: "your-email@gmail.com", // Replace with your email
        pass: "your-email-password", // Use app password or secure method
      },
    });

    await transporter.sendMail({
      from: '"Mizou" <your-email@gmail.com>', // Sender address
      to: "subscription@mizou.co.za", // Receiver's email address
      subject: "New Email Subscription", // Subject line
      text: `New subscription from: ${email}`, // Plain text body
    });

    return NextResponse.json({ message: "Email sent successfully!" }, { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ message: "Failed to send email", error }, { status: 500 });
  }
}
