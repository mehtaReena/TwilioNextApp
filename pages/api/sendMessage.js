require('dotenv').config();
import twilio from 'twilio';

export default function sendMessage(req,res) {
  const accountSid = process.env.TWILIO_ACCOUNT_SID;
  const token = process.env.TOKEN_SECRET;
  const client = twilio(accountSid, token);
  const { phone, message } = req.body;
  // console.log(phone, message);
  client.messages
    .create({
      body: message,
      from: '+13203473246',
      to: '+916367220544',
    })
    .then((message) =>
      res.json({
        success: true,
      })
    )
    .catch((error) => {
      console.log(error);
      res.json({
        success: false,
      });
    });
}