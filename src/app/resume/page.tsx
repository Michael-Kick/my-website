'use client';
import React from 'react';
import {ResumeElement} from '../_components/ResumeElement';
import resumeObj from "../_components/resume/workExperience";
import { PDFDownloadLink } from '@react-pdf/renderer';
import ResumePDF from './../_components/resume/ResumePDF';

function Resume() {

    // A guard to ensure this only runs on the client
    const isClient = typeof window !== 'undefined';

    return (
        <div className="w-full">
            <div>
                <ResumeElement heading="Work Experience" workElement={[...resumeObj.work_exp].reverse()}/>
                <ResumeElement heading="Education" educationElement={resumeObj.education}/>
            </div>
            <div className="w-full flex justify-center mt-8 mb-8">
                {isClient && (
                    <PDFDownloadLink document={<ResumePDF />} fileName="Michael-Kick-Resume.pdf">
                        {({ blob, url, loading, error }) =>
                            <div className="px-8 py-4 text-lg font-medium text-center text-onPrimary bg-primary rounded-md transition-colors hover:bg-primaryHover">
                                {loading ? 'Loading document...' : 'Download as PDF'}
                            </div>
                        }
                    </PDFDownloadLink>
                )}
            </div>
        </div>
    );
}

export default Resume;
