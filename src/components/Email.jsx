import { useState } from "react";
import img from "../resources/cil-close-up.png"


let Email = () => {
    let [name, setName] = useState("")
    let [email, setEmail] = useState("")

    let handleSubmit = (e) => {
        e.preventDefault();
        let emailListData = { name, email }
        console.log(emailListData)
        console.log(JSON.stringify(emailListData))


        // const scriptUrl = "https://script.google.com/macros/s/AKfycbxGuSs9dJYjjWGip_smec3bHwfpU9HsRRf6araSq2ciko-YC8rj0iLNcd5uGuYv3Vlx/exec"

        // fetch(scriptUrl, {method: 'POST', body: JSON.stringify(emailListData)})
        // .then(() => {
        //     console.log("SUCCESSFULLY SUBMITTED")
        // }).catch(err => console.log(err))
        // fetch(scriptUrl, {method: 'POST', body: emailListData})
        // .then(() => {
        //     console.log("SUCCESSFULLY SUBMITTED")
        // }).catch(err => console.log(err))
}

    return (
     <div className=" h-screen w-screen bg-gradient-to-br from-primary-purple to-primary-pink flex flex-col items-center justify-center gap-10 pb-10">
        <img src={img} alt="A smiling girl" className="rounded-full h-40 w-40 border-secondary-purple border-2 drop-shadow-xl"/>
        <h2 className=" text-neutral-50 font-extrabold text-4xl drop-shadow-xl">
            Newsletter
        </h2>
        <p className="text-neutral-50 font-bold drop-shadow-xl w-72 text-center">
            Never miss a beat and be the first to know about updates!
        </p>
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
            <button className=" w-64 h-10 text-neutral-50 font-bold bg-gradient-to-r to-primary-purple from-secondary-pink rounded-lg flex justify-center items-center">
                Subscribe
            </button>

        </form>
     </div>
    );
  };

export default Email