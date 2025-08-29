"use client"

import { footer } from "framer-motion/client"
import React from "react"
import Icons from "./icons"



export default function Footer() {
    return (
        <footer
            id="contact"
            className="bg-gray-800 px-4 lg:px-16 py-24 flex flex-col gap-y-12 lg:gap-y-16 "
        >
            <div className="content-footer flex flex-col gap-y-8 lg:gap-y-12 lg:w-6xl">
                <h2 className="font-fredoka font-bold text-white text-2xl lg:text-5xl lg:w-[750px]">
                    Interested in working together? Let’s connect
                </h2>
                <p className="text-lg lg:text-3xl font-light font-poppins text-white">
                    I’m open to freelance opportunities, collaborations, or just a
                    friendly chat about design and development. Whether you have a
                    project in mind or just want to say hi, feel free to reach out — I’d
                    love to hear from you.
                </p>
                <h2 className="text-white font-fredoka font-bold text-2xl lg:text-5xl">
                    diondaman51@gmail.com
                </h2>
            </div>

            <div className="social-icons">
                <Icons />
            </div>
        </footer >
    )
}