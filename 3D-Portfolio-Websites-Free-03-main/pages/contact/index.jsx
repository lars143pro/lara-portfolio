import { motion } from "framer-motion";
import { BsArrowRight, BsSendCheck } from "react-icons/bs"; // Added success icon
import { fadeIn } from "../../variants";
import { useState } from "react";

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);

    const myForm = event.target;
    const formData = new FormData(myForm);

    // Using Netlify/Vercel standard fetch
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => {
        setIsSuccess(true);
        // Reset form after success
        myForm.reset();
        setTimeout(() => setIsSuccess(false), 5000); // Reset button after 5s
      })
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
  };

  return (
    <div className="h-full bg-primary/30">
      <div className="container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full">
        {/* text & form */}
        <div className="flex flex-col w-full max-w-[700px]">
          {/* text */}
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 text-center mb-8 xl:mb-12"
          >
            Let's <span className="text-accent drop-shadow-[0_0_10px_#00f2ff]">connect.</span>
          </motion.h2>

          {/* form */}
          <motion.form
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex-1 flex flex-col gap-4 xl:gap-6 w-full mx-auto"
            onSubmit={handleSubmit}
            autoComplete="off"
            data-netlify="true"
            name="contact"
          >
            {/* Hidden input for Netlify bot detection */}
            <input type="hidden" name="form-name" value="contact" />

            {/* input group */}
            <div className="flex flex-col md:flex-row gap-4 xl:gap-6 w-full">
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="input focus:border-accent transition-all duration-300"
                disabled={isLoading}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="E-mail"
                className="input focus:border-accent transition-all duration-300"
                disabled={isLoading}
                required
              />
            </div>
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              className="input focus:border-accent transition-all duration-300"
              disabled={isLoading}
              required
            />
            <textarea
              name="message"
              placeholder="Tell me about your project..."
              className="textarea focus:border-accent transition-all duration-300"
              disabled={isLoading}
              required
            />

            {/* BUTTON WITH LOADING/SUCCESS STATES */}
            <button
              type="submit"
              className={`btn rounded-full border border-white/50 max-w-[190px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group relative ${
                isSuccess ? "border-green-400 text-green-400" : ""
              }`}
              disabled={isLoading}
            >
              <span className={`group-hover:-translate-y-[160%] group-hover:opacity-0 transition-all duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
                {isSuccess ? "Message Sent!" : "Let's talk"}
              </span>

              {/* Arrow Icon (Hover State) */}
              {!isSuccess && (
                <BsArrowRight
                  className="-translate-y-[160%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px] text-accent"
                />
              )}
              
              {/* Checkmark Icon (Success State) */}
              {isSuccess && (
                <BsSendCheck className="text-2xl text-green-400 animate-pulse" />
              )}

              {/* Loading Spinner */}
              {isLoading && (
                <div className="absolute w-5 h-5 border-2 border-accent border-t-transparent rounded-full animate-spin"></div>
              )}
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;