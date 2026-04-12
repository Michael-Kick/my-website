import React from 'react';
import WorkElement from "./WorkElement";
import EducationElement from "./EducationElement";
import resumeObj from "./workExperience";


function ResumeList() {
    return (
        <div>

                <div className="flex gap-40 justify-evenly">
                    <div className="flex-1 max-w-96">
                        <h2 className="text-3xl font-semibold mb-10">Professional Experience</h2>
                        {[...resumeObj.work_exp].reverse().map((exp, id: number) =>
                            <WorkElement key={id} resumeElement={exp}/>
                        )}
                    </div>
                    <div className="flex-1 max-w-96">
                        <h2 className="text-3xl font-semibold mb-10">Education</h2>
                        {resumeObj.education.map((edu, id) =>
                            <EducationElement key={id} educationElement={edu}/>
                        )}
                    </div>
                </div>

        </div>
    );
}

export default ResumeList;