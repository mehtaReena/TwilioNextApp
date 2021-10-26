
import twilio from 'twilio';

export default function sendMessage(req,res) {
  const accountSid = 'AC2d9fb601e69980520399292a0ac3a532';
  const token = 'bcf4c3c3be2d05d8cc4def296ef9cf05';
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