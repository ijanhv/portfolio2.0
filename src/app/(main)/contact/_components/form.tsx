import React from "react";
export const ContactMeForm = () => {
  return (

      <form className="flex flex-col gap-10 w-full">
        <input
          type="text"
          placeholder="Name"
          className="bg-foreground/10 p-5 
                    focus:outline-none focus:ring-0 focus:ring-opacity-0
                "
        />
        <input
          type="email"
          placeholder="Email"
          className="bg-foreground/10 p-3 lg:p-5 focus:outline-none focus:ring-0 focus:ring-opacity-0"
        />
        <textarea
          placeholder="Message"
          className="bg-foreground/10 p-4 focus:outline-none focus:ring-0 focus:ring-opacity-0"
          rows={7}
        />
        <button className="bg-primary p-4 text-black w-full">Send</button>
      </form>

  );
};
