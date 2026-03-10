"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactForm() {
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus("loading");
        setErrorMessage("");

        const formData = new FormData(e.currentTarget);
        formData.append("access_key", "9a687d30-be91-4945-86c5-8b596d2bbd07");

        try {
            const res = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: { Accept: "application/json" },
                body: formData,
            });

            let result: { success: boolean; message?: string };
            try {
                result = await res.json();
            } catch {
                console.error("Web3Forms: response was not JSON. Status:", res.status);
                setErrorMessage(`Server returned an unexpected response (${res.status}). Please try again.`);
                setStatus("error");
                return;
            }

            if (result.success) {
                setStatus("success");
                (e.target as HTMLFormElement).reset();
            } else {
                console.error("Web3Forms error:", result);
                setErrorMessage(result.message || "Submission failed. Please try again.");
                setStatus("error");
            }
        } catch (err) {
            console.error("Web3Forms fetch failed:", err);
            setErrorMessage("Could not reach the server. Please check your connection.");
            setStatus("error");
        }
    };

    if (status === "success") {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-card p-8 rounded-2xl flex flex-col items-center justify-center text-center space-y-4 border border-divider/40 shadow-sm"
            >
                <div className="w-16 h-16 bg-accent/10 text-accent rounded-full flex items-center justify-center mb-2">
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <motion.path
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"
                        />
                    </svg>
                </div>
                <h3 className="text-xl font-medium">Message sent!</h3>
                <p className="text-body max-w-sm">
                    Thank you for reaching out. I'll get back to you as soon as I can.
                </p>
            </motion.div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-full max-w-lg">
            <div>
                <label htmlFor="name" className="sr-only">Name</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="Name"
                    className="w-full bg-card px-6 py-4 rounded-xl border border-divider/50 focus:border-accent focus:ring-1 focus:ring-accent outline-hidden transition-all text-body placeholder:text-[#A0A0A0]"
                />
            </div>
            <div>
                <label htmlFor="email" className="sr-only">Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="Email address"
                    className="w-full bg-card px-6 py-4 rounded-xl border border-divider/50 focus:border-accent focus:ring-1 focus:ring-accent outline-hidden transition-all text-body placeholder:text-[#A0A0A0]"
                />
            </div>
            <div>
                <label htmlFor="message" className="sr-only">Message</label>
                <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="What's on your mind?"
                    className="w-full bg-card px-6 py-4 rounded-xl border border-divider/50 focus:border-accent focus:ring-1 focus:ring-accent outline-hidden transition-all text-body placeholder:text-[#A0A0A0] resize-y"
                />
            </div>

            <button
                type="submit"
                disabled={status === "loading"}
                className="bg-accent text-white hover:bg-accent/90 focus:ring-4 focus:ring-accent/20 px-8 py-4 rounded-full font-medium transition-all shadow-md self-start flex items-center justify-center gap-2 group disabled:opacity-70"
            >
                {status === "loading" ? "Sending..." : "Send it"}
                {status !== "loading" && (
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                )}
            </button>

            {status === "error" && (
                <p className="text-red-500 text-sm mt-2">
                    {errorMessage || "Something went wrong. Please try again."}
                </p>
            )}
        </form>
    );
}
