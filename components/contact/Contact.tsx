import React from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

const Contact = () => {
  const router = useRouter();

  function sendMail(e: any) {
    e.preventDefault();
    router.push("/");
  }

  return (
    <section className="p-4 text-white my-10">
      <div className="w-full md:w-[60%] mx-auto bg-card p-4 rounded">
        <div className="flex flex-col items-center justify-center">
          <h4 className="text-5xl my-3 font-bold">Contact Us</h4>
          <p className="text-neutral-400">
            Please fill up the form and our support team will get in contact
            with you.
          </p>
          <p className="text-neutral-200">
            You can also contact us live on our chat support system
          </p>
        </div>
        <div className="relative">
          <motion.form
            initial={{
              scale: 0,
              opacity: 0,
            }}
            animate={{
              scale: 1,
              opacity: 1,
              transition: {
                duration: 0.8,
                ease: "easeIn",
              },
            }}
            className="space-y-4 my-5"
          >
            <div className="flex flex-col gap-2">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                className="p-4 rounded bg-neutral-400 text-bg outline-none"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="name">Phone</label>
              <input
                type="tel"
                name="phone"
                id="phone"
                className="p-4 rounded bg-neutral-400 text-bg outline-none"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                className="p-4 rounded bg-neutral-400 text-bg outline-none"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                className="p-4 rounded bg-neutral-400 text-bg outline-none"
              />
            </div>
            <button
              onClick={sendMail}
              className="p-4 bg-teal-400 rounded w-fit px-5 py-3 text-bg hover:bg-teal-600"
            >
              Send
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
