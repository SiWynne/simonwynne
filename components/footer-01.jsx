"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import {
  FacebookLogo,
  InstagramLogo,
  LinkedinLogo,
  XLogo,
  YoutubeLogo,
} from "relume-icons";

const useForm = () => {
  const [email, setEmail] = useState("");
  const handleSetEmail = (event) => {
    setEmail(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ email });
  };
  return {
    email,
    handleSetEmail,
    handleSubmit,
  };
};

export function Footer1() {
  const formState = useForm();
  return (
    <footer className="px-[5%] py-12 md:py-18 lg:py-20 scheme-2 badge-alt alternate logo-alt">
      <div className="container">
        <div className="grid grid-cols-1 gap-x-[8vw] gap-y-12 pb-12 md:gap-y-16 md:pb-18 lg:grid-cols-[0.75fr_1fr] lg:gap-y-4 lg:pb-20">
          <div className="flex flex-col">
            <a href="#" className="mb-5 md:mb-6">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/logo-image.svg"
                alt="Logo image"
                className="inline-block"
              />
            </a>
            <p className="mb-5 md:mb-6">
              Stay informed with the latest updates and insights.
            </p>
            <div className="w-full max-w-md">
              <form
                className="mb-3 grid grid-cols-1 gap-x-4 gap-y-3 sm:grid-cols-[1fr_max-content] md:gap-y-4"
                onSubmit={formState.handleSubmit}
              >
                <Input
                  id="email"
                  type="email"
                  placeholder="Your email address"
                  value={formState.email}
                  onChange={formState.handleSetEmail}
                />
                <Button title="Subscribe" variant="secondary" size="sm">
                  Subscribe
                </Button>
              </form>
              <p className="text-tiny">
                By subscribing you agree to our Privacy Policy and consent to
                receive updates.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 items-start gap-y-10 sm:grid-cols-3 sm:gap-x-6 md:gap-x-8 md:gap-y-4">
            <div className="flex flex-col items-start justify-start">
              <h2 className="mb-3 font-semibold md:mb-4">Resources</h2>
              <ul>
                <li className="text-small py-2">
                  <a href="#" className="flex items-center gap-3">
                    <span>Workshops</span>
                  </a>
                </li>
                <li className="text-small py-2">
                  <a href="#" className="flex items-center gap-3">
                    <span>Livestreams</span>
                  </a>
                </li>
                <li className="text-small py-2">
                  <a href="#" className="flex items-center gap-3">
                    <span>Toolkits</span>
                  </a>
                </li>
                <li className="text-small py-2">
                  <a href="#" className="flex items-center gap-3">
                    <span>Playbooks</span>
                  </a>
                </li>
                <li className="text-small py-2">
                  <a href="#" className="flex items-center gap-3">
                    <span>Writing</span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col items-start justify-start">
              <h2 className="mb-3 font-semibold md:mb-4">Articles</h2>
              <ul>
                <li className="text-small py-2">
                  <a href="#" className="flex items-center gap-3">
                    <span>Essays</span>
                  </a>
                </li>
                <li className="text-small py-2">
                  <a href="#" className="flex items-center gap-3">
                    <span>Guides</span>
                  </a>
                </li>
                <li className="text-small py-2">
                  <a href="#" className="flex items-center gap-3">
                    <span>Stories</span>
                  </a>
                </li>
                <li className="text-small py-2">
                  <a href="#" className="flex items-center gap-3">
                    <span>Reflections</span>
                  </a>
                </li>
                <li className="text-small py-2">
                  <a href="#" className="flex items-center gap-3">
                    <span>Connect</span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col items-start justify-start">
              <h2 className="mb-3 font-semibold md:mb-4">Follow</h2>
              <ul className="flex flex-col items-start">
                <li className="text-small py-2">
                  <a href="#" className="flex items-center gap-3">
                    <FacebookLogo className="size-6 text-scheme-text" />
                    <span>Facebook</span>
                  </a>
                </li>
                <li className="text-small py-2">
                  <a href="#" className="flex items-center gap-3">
                    <InstagramLogo className="size-6 text-scheme-text" />
                    <span>Instagram</span>
                  </a>
                </li>
                <li className="text-small py-2">
                  <a href="#" className="flex items-center gap-3">
                    <XLogo className="size-6 p-0.5 text-scheme-text" />
                    <span>X</span>
                  </a>
                </li>
                <li className="text-small py-2">
                  <a href="#" className="flex items-center gap-3">
                    <LinkedinLogo className="size-6 text-scheme-text" />
                    <span>LinkedIn</span>
                  </a>
                </li>
                <li className="text-small py-2">
                  <a href="#" className="flex items-center gap-3">
                    <YoutubeLogo className="size-6 text-scheme-text" />
                    <span>YouTube</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="h-px w-full bg-scheme-border" />
        <div className="text-small flex flex-col-reverse items-start justify-between pt-6 pb-4 md:flex-row md:items-center md:pt-8 md:pb-0">
          <p className="mt-6 md:mt-0">© 2025. All rights reserved.</p>
          <ul className="text-small grid grid-flow-row grid-cols-[max-content] justify-center gap-y-4 md:grid-flow-col md:gap-x-6 md:gap-y-0">
            <li className="underline">
              <a href="#">Privacy Policy</a>
            </li>
            <li className="underline">
              <a href="#">Terms of Service</a>
            </li>
            <li className="underline">
              <a href="#">Cookies Settings</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
