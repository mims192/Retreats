import express from "express";
import crypto from "crypto";

const app = express();
const port = 4000;

app.use(express.json());

function hmac_rawurlsafe_base64_string(distinct_id, secret) {
  const hash = crypto
    .createHmac("sha256", secret)
    .update(distinct_id)
    .digest("base64url");
  return hash.trimEnd("=");
}

app.post("/hmac", (req, res) => {
  const { distinct_id, secret } = req.body;

  if (!distinct_id || !secret) {
    return res
      .status(400)
      .json({ error: "distinct_id and secret are required" });
  }

  const hmacString = hmac_rawurlsafe_base64_string(distinct_id, secret);
  res.json({ hmac: hmacString });
});

app.listen(port, () => {
  console.log("Server is running on port 4000");
});
