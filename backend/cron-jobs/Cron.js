import cron  from"node-cron";
import Payment  from"../models/Payment.js";

// Runs daily at midnight
cron.schedule("0 0 * * *", async () => {
  const now = new Date();
  await Payment.updateMany(
    { status: "paid", expiresAt: { $lt: now } },
    { status: "cancelled" }
  );
  console.log("✅ Expired plans cancelled automatically");
});
