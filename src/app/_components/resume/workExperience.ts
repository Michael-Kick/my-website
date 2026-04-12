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
			'Developed a cross-platform application to provide a clear, structured overview of project data and milestones for internal use',
			'Key stakeholders were Multiple project managers and my supervisor',
			'Project requirements and the development of new features were discussed in weekly meetings',
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
			'Contributed to the development of the web application Privacysoft',
			'Implemented and expanded Data Access Objects (DAOs) that served as API between the Database and the Backend',
			'Created Unit tests for existing code',
			'Collaborated in a five person team (two backend and three fronted)',
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
			'Developed the user interface of a cross-platform app designed to enhance learning for students and allow parents and teachers to monitor performance',
			'Collaborated with a team consisting of a designer, a backend developer, myself (frontend developer), and another frontend developer.',
			'Requirements and features have been discussed with the professor of the University of the Algarve',
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
			'Contributed to the further development of web applications and the implementation of new features',
			'The web application enables customers to manage their own routers independently',
			' Worked in an Agile Scrum environment with a backend team of two, a frontend team of four (including myself), and key stakeholders including the Product Owner and Scrum Master',
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
			'Assisted in the smooth execution of the monthly payroll process',
			'Contributed to the SAP migration to the next version, including all necessary code changes',
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
			'Working in project-based business, adapting standard warehouse management software to individual customer requirements across the food, fashion, and industrial goods sectors',
			'Involved in on-site deployments, supporting the installation and configuration of the software directly at customer facilities',
			'Using Java for system integration, configuration, and customisation work',
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
			'Researched the structure and architectures of large language models (LLMs) and compared various models based on cost, performance, and speed',
			'Evaluated and compared two approaches, Retrieval Augmented Generation (RAG) and fine-tuning, for a specific use case',
			'Presented a custom chatbot architecture and evaluated its performance',
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
			'Implemented various authentication methods and evaluated them across different use cases',
			'Assessed and compared authentication methods based on security and performance',
			'Analyzed the use case of ambient assisted living in conjunction with a smart grid to evaluate the most suitable authentication methods',
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
