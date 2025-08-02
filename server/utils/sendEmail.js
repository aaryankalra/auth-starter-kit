import { MailtrapClient } from "mailtrap";

const TOKEN = process.env.MAILTRAP_TOKEN;
const SENDER = process.env.MAILTRAP_SENDER;

const client = new MailtrapClient({ token: TOKEN });

export const sendVerificationMail = async (email, name, otp) => {
  try {
    await client.send({
      from: {
        email: SENDER,
        name: "MERN Auth",
      },
      to: [{ email: email }],
      subject: "Verify your email",
      text: `Hi ${name}, \n\n Your OTP for email verification is: ${otp} \n\n This code expires in 10 minutes.`,
    });
  } catch (error) {
    console.error("Error in sending verification mail: ", error);
    throw new Error("Failed to send verification mail.");
  }
};
