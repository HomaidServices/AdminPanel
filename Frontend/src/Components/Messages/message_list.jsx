const messages = [
    {
      text: "Hey, how's it going?",
      sender: "John",
      time: "9:15 AM",
    },
    {
      text: "I'm good, thanks! What about you?",
      sender: "Host",
      time: "9:30 AM",
    },
    {
      text: "Just finished my project. It was a long night!",
      sender: "John",
      time: "10:05 AM",
    },
    {
      text: "Wow, that's dedication! Great job!",
      sender: "Host",
      time: "10:15 AM",
    },
    {
      text: "Thanks! I couldn't have done it without coffee!",
      sender: "John",
      time: "10:30 AM",
    },
    {
      text: "Haha, coffee is the secret weapon!",
      sender: "Host",
      time: "10:45 AM",
    },
    {
        text: "Hey, how's it going?",
        sender: "John",
        time: "9:15 AM",
      },
      {
        text: "I'm good, thanks! What about you?",
        sender: "Host",
        time: "9:30 AM",
      },
      {
        text: "Just finished my project. It was a long night!",
        sender: "John",
        time: "10:05 AM",
      },
      {
        text: "Wow, that's dedication! Great job!",
        sender: "Host",
        time: "10:15 AM",
      },
      {
        text: "Thanks! I couldn't have done it without coffee!",
        sender: "John",
        time: "10:30 AM",
      },
      {
        text: "Haha, coffee is the secret weapon!",
        sender: "Host",
        time: "10:45 AM",
      },
  ];

function addmessage(obj){
  messages.push(obj)
  console.log(messages)
}
export default {messages:messages,addmessage:addmessage}