import React from "react";
import logoImage from "../assets/logo.png";
import payMentMethod from "../assets/paymentMethod.png";
import { HandCoins } from "lucide-react";
import { ArrowRight } from "lucide-react";
import { Instagram } from "lucide-react";
import { Twitter } from "lucide-react";
import { Zap } from 'lucide-react';


export default function Footer() {
  return (
    <div className="bg-purple-600 pt-16 mt-10  ">
      <div className="flex justify-between w-10/12 mx-auto  text-white  p-0.5 space-y-18 ">
        <div className="space-y-4">
          <img
            className=" bg-white h-16 px-5 py-1 rounded-md cursor-pointer"
            src={logoImage}
            alt="logo-image   "
          />
          <p className="font-semibold">
            Take full control of your inventory, billing, and POS <br /> without
            the hassle. Our system helps you track stock <br /> in real-time,
            automate orders, and avoid mistakes, <br /> making your business
            faster, smarter, and more <br /> efficient.
          </p>

          <p className="items-center flex cursor-pointer font-semibold">
            <svg
              xmlns="http://www.w3.org/2000/svg  "
              className="mr-1"
              width="18"
              height="18"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01m-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18l-3.12.82l.83-3.04l-.2-.31a8.26 8.26 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24c2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23m4.52-6.16c-.25-.12-1.47-.72-1.69-.81c-.23-.08-.39-.12-.56.12c-.17.25-.64.81-.78.97c-.14.17-.29.19-.54.06c-.25-.12-1.05-.39-1.99-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.14-.25-.02-.38.11-.51c.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31c-.22.25-.86.85-.86 2.07s.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.23 3.74c.59.26 1.05.41 1.41.52c.59.19 1.13.16 1.56.1c.48-.07 1.47-.6 1.67-1.18c.21-.58.21-1.07.14-1.18s-.22-.16-.47-.28 "
              />
            </svg>
            Free Consultation
          </p>
          <p className="space-y-2">
            <h className=" flex font-semibold">
              <HandCoins className="stroke-1 mr-1" />
              We accept
            </h>
            <img
              className="h-15 w-88 rounded-md"
              src={payMentMethod}
              alt="online-payment-method"
            />
          </p>
        </div>

        <div className=" space-y-4">
          <p className="font-semibold">Quick Links</p>
          <p className="cursor-pointer flex items-center gap-1 group ">
            Home
            <ArrowRight
              size={16}
              className=" transform -rotate-45 transition-transform duration-300 group-hover:rotate-0 mt-1  "
            />
          </p>
          <p className="cursor-pointer flex items-center gap-1 group ">
            Features
            <ArrowRight
              size={16}
              className="transform -rotate-45 transition-transform duration-300 group-hover:rotate-0   "
            />
          </p>
          <p className="cursor-pointer flex items-center gap-1 group ">
            Testimonials{" "}
            <ArrowRight
              size={16}
              className="transform -rotate-45 transition-transform duration-300 group-hover:rotate-0   "
            />
          </p>
          <p className="cursor-pointer flex items-center gap-1 group ">
            Contact{" "}
            <ArrowRight
              size={16}
              className="transform -rotate-45 transition-transform duration-300 group-hover:rotate-0    "
            />
          </p>
          <p className="cursor-pointer flex items-center gap-1 group ">
            Pricing{" "}
            <ArrowRight
              size={16}
              className="transform -rotate-45 transition-transform duration-300 group-hover:rotate-0   "
            />
          </p>
          <p className="cursor-pointer flex items-center gap-1 group ">
            Try Demo{" "}
            <ArrowRight
              size={16}
              className="transform -rotate-45 transition-transform duration-300 group-hover:rotate-0    "
            />
          </p>
        </div>

        <div className=" space-y-4">
          <p className="font-semibold">Other Products</p>
          <p className="cursor-pointer flex items-center gap-1 group ">
            Restronp
            <ArrowRight
              size={16}
              className="transform -rotate-45 transition-transform duration-300 group-hover:rotate-0   "
            />
          </p>
          <p className="cursor-pointer flex items-center gap-1 group ">
            Zylux IT Solution
            <ArrowRight
              size={16}
              className="transform -rotate-45 transition-transform duration-300 group-hover:rotate-0   "
            />
          </p>
          <p className="cursor-pointer flex items-center gap-1 group ">
            Fenzora
            <ArrowRight
              size={16}
              className="transform -rotate-45 transition-transform duration-300 group-hover:rotate-0   "
            />
          </p>
        </div>

        <div className=" space-y-4">
          <p className="font-semibold">Socials</p>

          <p className="cursor-pointer flex items-center gap-1 group  ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M17 2h-3a5 5 0 0 0-5 5v3H6v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"
              />
            </svg>
            Facebook
            <ArrowRight
              size={16}
              className="transform -rotate-45 transition-transform duration-300 group-hover:rotate-0   "
            />
          </p>
          <p className="cursor-pointer flex items-center gap-1 group  ">
            <Instagram size={18} />
            instragram
            <ArrowRight
              size={16}
              className="transform -rotate-45 transition-transform duration-300 group-hover:rotate-0   "
            />
          </p>
          <p className="cursor-pointer flex items-center gap-1 group  ">
            <Twitter size={18} />
            Twitter
            <ArrowRight
              size={16}
              className="transform -rotate-45 transition-transform duration-300 group-hover:rotate-0   "
            />
          </p>
          <p className="cursor-pointer flex items-center gap-1 group  ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
            >
              <g
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2a2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6M2 9h4v12H2z" />
                <circle cx="4" cy="4" r="2" />
              </g>
            </svg>
            LinkedIn
            <ArrowRight
              size={16}
              className="transform -rotate-45 transition-transform duration-300 group-hover:rotate-0   "
            />
          </p>
        </div>

        <div className=" space-y-4 ">
          <p  className="font-semibold">Legal</p>
          <p className="cursor-pointer flex items-center gap-1 group ">Privacy Policy   
             <ArrowRight
              size={16}
              className="transform -rotate-45 transition-transform duration-300 group-hover:rotate-0   "
            /> </p>
          <p className="cursor-pointer flex items-center gap-1 group ">Terms of Service 
             <ArrowRight
              size={16}
              className="transform -rotate-45 transition-transform duration-300 group-hover:rotate-0   "
            /> </p>
          <p className="cursor-pointer flex items-center gap-1 group ">Cookies Policy   
             <ArrowRight
              size={16}
              className="transform -rotate-45 transition-transform duration-300 group-hover:rotate-0   "
            /> </p>
          <p className="cursor-pointer flex items-center gap-1 group ">Terms of Use     
             <ArrowRight
              size={16}
              className="transform -rotate-45 transition-transform duration-300 group-hover:rotate-0   "
            /> </p>
          <p className="cursor-pointer flex items-center gap-1 group ">Refund Policy    
             <ArrowRight
              size={16}
              className="transform -rotate-45 transition-transform duration-300 group-hover:rotate-0   "
            /> </p>
        </div>



      </div>

         
         <div className=" w-10/12 mx-auto  text-white  p-0.5 border-t border-t-gray-500 pt-8 pb-3 ">
          
          <div className="flex justify-between opacity-80 text-sm  font-semibold">
            <p className="">© 2025 stocknp. All rights reserved.</p>
            <p className="flex items-center gap-0.5 ">       <Zap size={16} />
            Powered by <span className="underline cursor-pointer ">Zylux IT Solution </span></p>
          </div>

         </div>
        

    </div>
  );
}
