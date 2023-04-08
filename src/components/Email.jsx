import { useState } from "react";
import img from "../resources/cil-close-up.png"
import PocketBase from 'pocketbase';

const pb = new PocketBase('https://square-potato.pockethost.io');


let Email = () => {
    let [name, setName] = useState("")
    let [email, setEmail] = useState("")
    let [isPending, setIsPending] = useState(false)
    let [submitted, setSubmitted] = useState(false)

    let handleSubmit = async (e) => {
        e.preventDefault();
        setIsPending(true)
        let emailListData = { name, email }
        await pb.collection('sarahhh_states_emails').create(emailListData);
        setName('')
        setEmail('')
        setIsPending(false)
        setSubmitted(true)
    }

    return (
     <div className=" h-screen w-screen bg-gradient-to-br from-primary-purple to-primary-pink flex flex-col items-center justify-center gap-10 pb-10">
        <img src={img} alt="A smiling girl" className="rounded-full h-40 w-40 border-secondary-purple border-2 drop-shadow-xl"/>
        <h2 className=" text-neutral-50 font-extrabold text-4xl drop-shadow-xl">
            Newsletter
        </h2>
        {!submitted && <p className="text-neutral-50 font-bold drop-shadow-xl w-72 text-center">
            Never miss a beat and be the first to know about updates!
        </p>}
        {submitted && <p className="text-neutral-50 font-bold drop-shadow-xl w-72 text-center">
            Thank you for your interest, stay tuned for more information!
        </p>}
        <form className=" bg-gradient-to-br from-primary-gray-dark to-primary-gray-light w-80 h-60 rounded-lg flex flex-col items-center justify-center gap-5 drop-shadow-xl"
            onSubmit={handleSubmit}
        >
            <input className="w-64 h-10 text-neutral-50 font-bold bg-neutral-50 opacity-60 bg-opacity-20 rounded-lg flex items-center p-4 focus:outline-none"
                type="text" 
                name="name"
                required
                maxLength={"30"}
                placeholder={"Name"}
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input className="w-64 h-10 text-neutral-50 font-bold bg-neutral-50 opacity-60 bg-opacity-20 rounded-lg flex items-center p-4 focus:outline-none"
                type="email" 
                name="email"
                required
                maxLength={"30"}
                placeholder={"Email"}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            {!isPending && <button className=" w-64 h-10 text-neutral-50 font-bold bg-gradient-to-r to-primary-purple from-secondary-pink rounded-lg flex justify-center items-center">
                Subscribe
            </button>}
            {isPending && <button className=" w-64 h-10 text-neutral-50 font-bold bg-gradient-to-r to-primary-purple from-secondary-pink rounded-lg flex justify-center items-center">
                Sending...
            </button>}

        </form>
     </div>
    );
  };

export default Email