import crypto from "crypto";

export const generateResetToken = () => {
  const token = crypto.randomBytes(32).toString("hex");
  const hashedToken = crypto.createHash("sha256").update(token).digest("hex");
  const expiry = Date.now() + 15 * 60 * 1000;
  return { token, hashedToken, expiry };
};
