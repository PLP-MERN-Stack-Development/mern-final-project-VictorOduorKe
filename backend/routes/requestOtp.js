import  express from "express";
import  crypto from "crypto";
import  bcrypt from "bcrypt";
import  OTP  from "../models/Otp.js";
import  { sendWelcomeEmail }  from "../utils/emailService.js"; // function to send email
import  {hideConsoleLogInProduction} from "../lib/helper.js"

const router = express.Router();

// ✅ Generate and save OTP (updates if exists)
async function generateAndSaveOTP(email) {
  const otp = crypto.randomInt(100000, 999999).toString();
  const otp_hash = await bcrypt.hash(otp, 10);
  const expires_at = new Date(Date.now() + 10 * 60 * 1000); // 10 min

  const otpDoc = await OTP.findOneAndUpdate(
    { email },
    { otp_hash, expires_at },
    { upsert: true, new: true, setDefaultsOnInsert: true }
  );

  hideConsoleLogInProduction("📦 OTP saved:", otpDoc); // ✅ Debug log
  return otp;
}


// ✅ POST /api/otp - Generate and send OTP
router.post("/otp", async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ error: "Email is required" });
    }

    const otp = await generateAndSaveOTP(email);

    // Send OTP via email (create this function in emailService.js)
    await sendWelcomeEmail(email, otp);

    return res.status(200).json({ message: "OTP sent successfully" });
  } catch (error) {
    hideConsoleLogInProduction("❌ OTP generation failed:", error);
    return res.status(500).json({ error: "Failed to generate OTP" });
  }
});

export default router;
