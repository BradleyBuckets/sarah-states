import { useState } from "react";
import PocketBase from "pocketbase";

const pb = new PocketBase("https://square-potato.pockethost.io");

const Contact = () => {
  let [firstName, setFirstName] = useState("");
  let [lastName, setLastName] = useState("");
  let [phone, setPhone] = useState("");
  let [email, setEmail] = useState("");
  let [message, setMessage] = useState("");
  let [isPending, setIsPending] = useState(false);
  let [submitted, setSubmitted] = useState(false);

  let handleSubmit = async (e) => {
    e.preventDefault();
    setIsPending(true);
    let messageData = { firstName, lastName, phone, email, message };
    await pb.collection("sarahhh_states_contact").create(messageData);
    setFirstName("");
    setLastName("");
    setPhone("");
    setEmail("");
    setMessage("");
    setIsPending(false);
    setSubmitted(true);
  };
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center gap-6 pb-10">
      <h2 className=" text-neutral-50 font-extrabold text-6xl drop-shadow-xl">
        Contact us
      </h2>
      {!submitted && (
        <p className="text-neutral-50 font-bold drop-shadow-xl w-72 text-center">
          We would love to hear from you, please leave us a message
        </p>
      )}
      {submitted && (
        <p className="text-neutral-50 font-bold drop-shadow-xl w-72 text-center">
          Thank you for reaching out, we will get to you shortly
        </p>
      )}
      <form
        className=" bg-gradient-to-br from-primary-gray-dark to-primary-gray-light w-3/4 p-8 rounded-lg flex flex-col items-center justify-center gap-5 drop-shadow-xl"
        onSubmit={handleSubmit}
      >
        <div className=" md:w-11/12 lg:w-5/6 flex flex-col sm:flex-row gap-5">
          <div className="flex flex-col items-center justify-center gap-5 w-full">
            <input
              className="w-full h-10 text-neutral-50 font-bold bg-neutral-50 opacity-60 bg-opacity-20 rounded-lg flex items-center p-4 focus:outline-none"
              type="text"
              name="firstName"
              required
              maxLength={"30"}
              placeholder={"First Name"}
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              className="w-full h-10 text-neutral-50 font-bold bg-neutral-50 opacity-60 bg-opacity-20 rounded-lg flex items-center p-4 focus:outline-none"
              type="text"
              name="lastName"
              required
              maxLength={"30"}
              placeholder={"Last Name"}
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className="flex flex-col items-center justify-center gap-5 w-full">
            <input
              className="w-full h-10 text-neutral-50 font-bold bg-neutral-50 opacity-60 bg-opacity-20 rounded-lg flex items-center p-4 focus:outline-none"
              type="email"
              name="email"
              required
              maxLength={"30"}
              placeholder={"Email"}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="w-full h-10 text-neutral-50 font-bold bg-neutral-50 opacity-60 bg-opacity-20 rounded-lg flex items-center p-4 focus:outline-none"
              type="tel"
              name="phone"
              required
              minLength={"10"}
              maxLength={"10"}
              placeholder={"Phone"}
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
        </div>
        <textarea
          className="w-11/12 md:w-11/12 lg:w-5/6 text-neutral-50 font-bold bg-neutral-50 opacity-60 bg-opacity-20 rounded-lg flex items-center p-4 focus:outline-none"
          name="message"
          cols="30"
          rows="10"
          required
          maxLength={"2000"}
          placeholder={"Please type your message here"}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        {!isPending && (
          <button className="w-11/12 sm:w-64 h-10 text-neutral-50 font-bold bg-gradient-to-r to-primary-purple from-secondary-pink rounded-lg flex justify-center items-center">
            Send Message
          </button>
        )}
        {isPending && (
          <button className=" w-11/12 sm:w-64 h-10 text-neutral-50 font-bold bg-gradient-to-r to-primary-purple from-secondary-pink rounded-lg flex justify-center items-center">
            Sending...
          </button>
        )}
      </form>
    </div>
  );
};

export default Contact;
