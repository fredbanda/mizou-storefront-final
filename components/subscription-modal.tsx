"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";

const EmailSubscriptionModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 15000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {isOpen && (
        <div
          className="fixed inset-0 z-[999] grid h-screen w-screen place-items-center bg-black bg-opacity-60 backdrop-blur-sm transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="relative m-4 w-11/12 sm:w-[70%] max-w-lg rounded-lg bg-white shadow-md"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <Image
                src="/banner.png"
                alt="Newsletter Banner"
                className="w-full h-36 object-cover rounded-t-lg"
                width={1200}
                height={360}
              />
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-2 right-2 rounded-full bg-white p-1 shadow-md hover:bg-slate-100"
                aria-label="Close modal"
              >
                <X className="w-5 h-5 text-slate-800" />
              </button>
            </div>

            <div className="p-6">
              <h2 className="text-6xl text-center text-heading3-bold text-slate-500 mb-4">
                Sign up now and get
              </h2>
              <p className="text-slate-800 text-center text-heading1-bold mb-6">
               <span className="text-heading1-bold text-red-500">10%  off</span> your next order!
              </p>
              <form
                onSubmit={async (e: React.FormEvent<HTMLFormElement>) => {
                  e.preventDefault();
                  const formData = new FormData(e.currentTarget); // `e.currentTarget` is the form
                  const email = formData.get("email") as string;

                  const response = await fetch("/api/sendEmail", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ email }),
                  });

                  if (response.ok) {
                    alert("Thank you for subscribing!");
                    setIsOpen(false);
                  } else {
                    alert("There was an issue subscribing. Please try again.");
                  }
                }}
              >
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-slate-700"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="mt-1 block w-full rounded-md py-2 border border-slate-500 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                    placeholder="✉️ Enter your email address"
                  />
                </div>
                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="rounded-md w-full bg-slate-600 py-2 px-4 text-md text-white shadow-md hover:bg-blue-700 focus:ring focus:ring-blue-200"
                  >
                    Continue
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EmailSubscriptionModal;
