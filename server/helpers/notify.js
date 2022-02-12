import twilio from "twilio";
const accountSid = "AC738b984c278833aad29daabf9c84b676";
const authtoken = "1d3b7048fc6ba3789014b87b6a657f9d";

async function notification(userName, userPhone, task) {
  try {
    const client = new twilio(accountSid, authtoken);
    await client.messages.create({
      body: `Message! Hey ${userName}, This is a reminder that your task '${task}' is due.`,
      from: "+19206575386",
      to: userPhone,
    });
    console.log("SMS sent");
  } catch (error) {
    console.log(error);
  }
}
export default notification;
