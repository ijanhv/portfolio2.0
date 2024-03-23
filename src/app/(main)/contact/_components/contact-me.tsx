import { Container } from "@/components/common/container";
import { Lines } from "@/components/common/lines";
import React from "react";
import { ContactMeForm } from "./form";
import { Socials } from "./social";

export const ContactMe = () => {
  return (
    <Container>
      <Lines>
        <div className="h-full md:h-screen flex flex-col w-full ">
          <div className="grid grid-cols-1 lg:grid-cols-8 gap-10 lg:gap-0 w-full ">
            <div className="lg:col-span-5 w-full ">
              <ContactMeForm />
            </div>
            <div className=" lg:col-span-1 w-full" />
            <div className="w-full  lg:col-span-2 ">
              <Socials />
            </div>
          </div>
        </div>
      </Lines>
    </Container>
  );
};
