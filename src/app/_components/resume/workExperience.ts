export interface IWorkDetail {
	companyName: string;
	companyLink: string;
	activity: string;
	projectName: string;
	description: string[];
	start_date: Date;
	end_date: Date;
	country: string;
	city: string;
	skills: number[];
}

const workExp: IWorkDetail[] = [
	{
		companyName: 'Siemens AG',
		companyLink: 'https://www.siemens.com/de/de.html',
		activity: 'App Development',
		projectName: 'Cockpit-Tool Mobile',
		description: [
			'Engineered a cross-platform mobile application that delivered a structured overview of project data and milestones to internal teams',
			'Partnered with multiple project managers and senior leadership to align feature delivery with evolving business requirements',
			'Gathered requirements and scoped new functionality through weekly stakeholder meetings',
		],
		start_date: new Date(2019, 10, 1),
		end_date: new Date(2020, 9, 1),
		country: 'Germany',
		city: 'Amberg',
		skills: [6, 8],
	},
	{
		companyName: 'Projekt 29 GmbH & Co.KG',
		companyLink: 'https://projekt29.de/',
		activity: 'Backend Development',
		projectName: 'Privacysoft',
		description: [
			'Drove backend development of the Privacysoft web application within a cross-functional team of five (three backend, two frontend)',
			'Designed and extended Data Access Objects (DAOs) to provide a reliable interface between the database and backend services',
			'Authored unit tests for existing code, strengthening overall coverage and long-term code reliability',
		],
		start_date: new Date(2021, 5, 1),
		end_date: new Date(2022, 10, 1),
		country: 'Germany',
		city: 'Regensburg',
		skills: [7, 3, 10],
	},
	{
		companyName: 'Universidade do Algarve',
		companyLink: 'https://www.ualg.pt/',
		activity: 'App/Web Development',
		projectName: 'Milage 2+ Design Revision',
		description: [
			'Designed and implemented the user interface of a cross-platform educational application enabling students to learn while allowing parents and teachers to monitor progress',
			'Collaborated within a four-person team (designer, backend developer, and two frontend developers) to deliver a cohesive user experience',
			'Aligned requirements and feature scope directly with the academic project lead at the Universidade do Algarve',
		],
		start_date: new Date(2022, 2, 1),
		end_date: new Date(2022, 8, 1),
		country: 'Portugal',
		city: 'Faro',
		skills: [2, 1],
	},
	{
		companyName: 'INSYS Icom',
		companyLink: 'https://www.insys-icom.com/',
		activity: 'Frontend Development',
		projectName: 'Icom Router Management',
		description: [
			'Advanced the frontend of a customer-facing web application that enables independent management of router infrastructure',
			'Delivered new features and enhancements in close collaboration with backend engineers and product stakeholders',
			'Operated in an Agile Scrum environment alongside a two-person backend team and a four-person frontend team, working closely with the Product Owner and Scrum Master',
		],
		start_date: new Date(2023, 3, 1),
		end_date: new Date(2024, 4, 1),
		country: 'Germany',
		city: 'Regensburg',
		skills: [2, 1],
	},
	{
		companyName: 'Landesamt für Finanzen - Finanz IT',
		companyLink: 'https://www.lff.bayern.de/themen/finanzit-bayern/',
		activity: 'ABAP Development',
		projectName: 'VIVA Bezügeabrechnung',
		description: [
			'Supported the reliable execution of the monthly public-sector payroll process',
			'Contributed to the SAP upgrade to the next major version by implementing and validating the required code adaptations',
		],
		start_date: new Date(2024, 9, 1),
		end_date: new Date(2025, 3, 1),
		country: 'Germany',
		city: 'Regensburg',
		skills: [11],
	},
	{
		companyName: 'TGW Logistics',
		companyLink: 'https://www.tgw-group.com/de',
		activity: 'Java Development',
		projectName: 'Warehouse Management Software Deployment',
		description: [
			'Tailor standard warehouse management software to individual customer requirements across the food, fashion, and industrial goods sectors within a project-based delivery model',
			'Support on-site deployments, covering installation, configuration, and integration of the software at customer facilities',
			'Apply Java to system integration, configuration, and customisation work across diverse client environments',
		],
		start_date: new Date(2025, 3, 1),
		end_date: new Date(),
		country: 'Germany',
		city: 'Regensburg',
		skills: [7, 3],
	},
];

export interface IEducationDetail {
	academicTitle: string;
	university: string;
	uniLink: string;
	thesisTitle: string;
	description: string[];
	start_date: Date;
	end_date: Date;
	country: string;
	city: string;
	skills: number[];
}

const edu: IEducationDetail[] = [
	{
		academicTitle: 'Master of Science Computer Science',
		university: 'OTH Regensburg',
		uniLink: 'https://www.oth-regensburg.de/',
		thesisTitle:
			'Masters Thesis: Created an AI-based Agent for the Customer Support',
		description: [
			'Researched the architectures of large language models (LLMs), benchmarking candidates across cost, performance, and speed',
			'Compared Retrieval Augmented Generation (RAG) and fine-tuning approaches to determine the optimal fit for a defined customer-support use case',
			'Designed a custom chatbot architecture and evaluated its performance against the selected approach',
		],
		start_date: new Date(2021, 10, 1),
		end_date: new Date(2024, 8, 1),
		country: 'Germany',
		city: 'Regensburg',
		skills: [5, 9],
	},
	{
		academicTitle: 'Bachelor of Science Information Systems',
		university: 'OTH Regensburg',
		uniLink: 'https://www.oth-regensburg.de/',
		thesisTitle:
			'Bachelors Thesis: Created an Authentication Architecture for the Smart Grid',
		description: [
			'Implemented multiple authentication methods and evaluated their applicability across distinct use cases',
			'Benchmarked the methods against security and performance criteria to surface the strongest trade-offs',
			'Analyzed the intersection of ambient assisted living and smart grid infrastructure to determine the most suitable authentication strategy',
		],
		start_date: new Date(2017, 10, 1),
		end_date: new Date(2021, 8, 1),
		country: 'Germany',
		city: 'Regensburg',
		skills: [7],
	},
];

const resumeObj = {
	work_exp: workExp,
	education: edu,
};

export default resumeObj;
