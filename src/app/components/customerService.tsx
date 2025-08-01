"use client";

import { useEffect, useState, useRef } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";

const Lottie = dynamic(() => import("./LottieFiles"), { ssr: false });

export default function ButterflyCS() {
  const [position, setPosition] = useState({ x: 100, y: 100 });
  const [chatVisible, setChatVisible] = useState(false);
  const [messages, setMessages] = useState([
    { from: "bot", text: "Halo! Ada yang bisa saya bantu?" },
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!chatVisible) {
      const moveButterfly = () => {
        const newX = Math.random() * (window.innerWidth - 150);
        const newY = Math.random() * (window.innerHeight - 150);
        setPosition({ x: newX, y: newY });
      };
      const interval = setInterval(moveButterfly, 5000);
      return () => clearInterval(interval);
    }
  }, [chatVisible]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim()) return;
    const response = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: input }),
    });

    const data = await response.json();
    setMessages((prev) => [
      ...prev,
      { from: "user", text: input },
      { from: "bot", text: data.reply },
    ]);
    setInput("");
  };

  return (
    <>
      {/* Overlay to close chat */}
      {chatVisible && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setChatVisible(false)}
        />
      )}

      <motion.div
        animate={
          chatVisible
            ? { x: position.x, y: position.y } // Tidak animasi saat chatVisible true
            : {
                x: position.x,
                y: position.y,
                rotate: [0, 5, -5, 0],
              }
        }
        transition={{ duration: 2, ease: "easeInOut" }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: 50,
          pointerEvents: "none",
        }}
      >
        <div className="relative pointer-events-auto">
          <div
            className="cursor-pointer"
            onClick={(e) => {
              e.stopPropagation(); // Hindari trigger overlay
              setChatVisible((prev) => !prev);
            }}
          >
            <Lottie />
          </div>

          {/* Chat bubble */}
          {chatVisible && (
            <div
              className="absolute -top-48 -right-44 w-72 bg-white rounded-xl shadow-lg border p-3 z-50"
              onClick={(e) => e.stopPropagation()} // Hindari overlay klik
            >
              <div className="flex justify-between items-center text-xs font-semibold text-gray-700 mb-1">
                <span>💬 Butterfly CS</span>
                <button
                  className="text-gray-500 hover:text-red-500"
                  onClick={() => setChatVisible(false)}
                >
                  ✖
                </button>
              </div>

              <div className="h-36 overflow-y-auto space-y-2 text-sm scroll-smooth">
                {messages.map((msg, i) => (
                  <div
                    key={i}
                    className={`px-2 py-1 rounded-md max-w-[90%] ${
                      msg.from === "user"
                        ? "bg-blue-500 text-white text-right self-end ml-auto"
                        : "bg-gray-100 text-gray-950 text-left"
                    }`}
                  >
                    {msg.text}
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>

              <div className="flex gap-1 mt-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                  placeholder="Tulis pesan..."
                  className="flex-1 text-xs text-gray-900 px-2 py-1 border rounded-md placeholder:text-gray-500"
                />
                <button
                  onClick={sendMessage}
                  className="bg-blue-500 text-white px-2 py-1 rounded-md text-xs"
                >
                  Kirim
                </button>
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </>
  );
}
