"use client";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";

export const ContactMeForm = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_kzfdhf8",
        "template_399lawl",
        {
          from_name: form.name,
          to_name: "Janhavi Patil",
          from_email: form.email,
          to_email: "patil.janhavi1207@gmail.com",
          message: `${form.message} \n
          From: ${form.email}`,
        },

        "fZasPYbx09uYCZUEB"
      )
      .then(
        () => {
          setLoading(false);
          toast.success(
            "Message sent successfully! I will get back to you soon. Thank you! 🚀"
          );

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          toast.error("Something went wrong! Please try again later. 🚧");
        }
      );
  };

  return (
    <form
      className="flex flex-col gap-10 w-full"
      ref={formRef}
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={form.name}
        onChange={handleChange}
        className="bg-foreground/10 p-5 
                    focus:outline-none focus:ring-0 focus:ring-opacity-0
                "
      />
      <input
        value={form.email}
        onChange={handleChange}
        type="email"
        name="email"
        placeholder="Email"
        className="bg-foreground/10 p-3 lg:p-5 focus:outline-none focus:ring-0 focus:ring-opacity-0"
      />
      <textarea
        value={form.message}
        onChange={handleChange}
        name="message"
        placeholder="Message"
        className="bg-foreground/10 p-4 focus:outline-none focus:ring-0 focus:ring-opacity-0"
        rows={7}
      />
      <button className="bg-primary p-4 text-black w-full" type="submit">
        {loading ? "Sending..." : "Send"}
      </button>
    </form>
  );
};
