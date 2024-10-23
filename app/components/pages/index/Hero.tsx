"use-client";
import React from "react";
import { cn } from "@/lib/utils";
import { Boxes } from "@/components/ui/background-boxes";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { Navbar } from "../../layout/Navbar";

export default function Hero() {
  return (
    <>
      <Navbar />
      <div className="h-screen w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
        <div className="mx-auto p-4">
          <h1 className="relative z-10 text-lg md:text-8xl  bg-clip-text text-transparent bg-gradient-to-b from-gray-50 to-neutral-800  text-center font-sans font-bold">
            Join the waitlist
          </h1>
          <p></p>
          <p className="text-neutral-400 max-w-lg mx-auto my-2 text-md text-center relative z-10">
            Welcome to MailJet, the best transactional email service on the web. We provide reliable, scalable, and
            customizable email solutions for your business. Whether you&apos;re sending order confirmations, password
            reset emails, or promotional campaigns, MailJet has got you covered.
          </p>
        </div>
        <BackgroundBeams />
      </div>
    </>
  );
}
