"use client";

import React, { useState } from "react";
import { ResumeElement } from "./ResumeElement";
import resumeObj from "./resume/workExperience";
import { PDFDownloadLink } from "@react-pdf/renderer";
import ResumePDF from "./resume/ResumePDF";

export default function CollapsibleResume() {
    const [open, setOpen] = useState(false);

    return (
        <div className="relative bg-contrast border border-border w-full max-w-5xl mx-auto rounded-2xl shadow-md overflow-hidden">
            <button
                onClick={() => setOpen((prev) => !prev)}
                className="w-full flex items-center justify-between px-8 md:px-12 py-6 text-left group"
                aria-expanded={open}
            >
                <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-secondary font-jetbrains mb-1">Career</p>
                    <span className="text-2xl font-bold">Resume</span>
                </div>
                <svg
                    className={`w-6 h-6 text-secondary transition-transform duration-300 ${open ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </button>

            {open && (
                <div className="px-4 pb-8 pt-2">
                    <ResumeElement heading="Work Experience" workElement={[...resumeObj.work_exp].reverse()} />
                    <ResumeElement heading="Education" educationElement={resumeObj.education} />
                    <div className="flex justify-center mt-4">
                        <PDFDownloadLink document={<ResumePDF />} fileName="Michael-Kick-Resume.pdf">
                            {({ loading }) => (
                                <div className="px-8 py-4 text-lg font-medium text-center text-onPrimary bg-primary rounded-md transition-colors hover:bg-primaryHover cursor-pointer">
                                    {loading ? "Loading document..." : "Download as PDF"}
                                </div>
                            )}
                        </PDFDownloadLink>
                    </div>
                </div>
            )}
        </div>
    );
}
