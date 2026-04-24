import React from 'react';
import {FaJava, FaPython, FaReact, FaVuejs} from "react-icons/fa";
import {TbBrandCSharp, TbBrandXamarin} from "react-icons/tb";
import {BsFiletypeSql} from "react-icons/bs";
import {BiLogoTypescript} from "react-icons/bi";
import { SiLangchain,SiSpringboot,SiSap  } from "react-icons/si";
import { mySkillsData } from '../../_utils/skillData';

// Icon source:
// https://react-icons.github.io/react-icons/

type SkillTagProps = {
    skillKey: number;
}

const skillIcons: { [key: number]: JSX.Element } = {
    1: <FaVuejs/>,
    2: <BiLogoTypescript/>,
    3: <BsFiletypeSql/>,
    4: <FaReact/>,
    5: <FaPython/>,
    6: <TbBrandCSharp/>,
    7: <FaJava/>,
    8: <TbBrandXamarin/>,
    9: <SiLangchain/>,
    10: <SiSpringboot/>,
    11: <SiSap />,
};


function SkillTag(props: SkillTagProps) {

    const skill = mySkillsData.find((el) => el.key == props.skillKey);
    const icon = skill ? skillIcons[skill.key] : null;

    // Expose the brand colors as CSS variables so they only apply on hover,
    // while the default state matches the site's gray/green design palette.
    const brandVars = {
        '--skill-bg': skill?.backgroundColor,
        '--skill-text': skill?.textColor,
    } as React.CSSProperties;

    return (
        <div
            style={brandVars}
            className="group border border-border rounded-2xl flex justify-center w-fit bg-contrastDark hover:bg-[var(--skill-bg)] transition-colors duration-200"
        >
            <div className="flex h-auto items-center mt-0.5 mb-0.5 ms-3 me-1 text-primary group-hover:text-[var(--skill-text)] transition-colors duration-200">
                {icon}
            </div>
            <div className="mt-0.5 mb-0.5 ms-1 me-3 text-secondary group-hover:text-[var(--skill-text)] transition-colors duration-200">
                {skill?.name}
            </div>
        </div>
    );
}

export default SkillTag;
