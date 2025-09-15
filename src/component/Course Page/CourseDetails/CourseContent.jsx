import * as React from "react";

const contentItems = [
	{
		title: "Understanding Power BI",
		content: "Learn what Power BI is, its components, and how it fits into the world of data analytics. Get an overview of its interface and capabilities.",
	},
	{
		title: "Power BI Services",
		content: "Explore Power BI Service, including publishing, sharing, and collaborating on reports and dashboards in the cloud.",
	},
	{
		title: "Power Bi Workflow",
		content: "Understand the typical workflow in Power BI, from data import to visualization and sharing insights.",
	},
	{
		title: "Visualizing and Analyzing Data",
		content: "Dive into creating charts, graphs, and interactive visuals to analyze your data effectively.",
	},
	{
		title: "Visuals",
		content: "Discover the wide range of visuals available in Power BI and how to customize them for your needs.",
	},
	{
		title: "Advanced Topics",
		content: "Go beyond the basics with DAX formulas, advanced data modeling, and custom visuals.",
	},
	{
		title: "Advanced Topic 2",
		content: "Learn about Power Query, data transformation, and automation techniques.",
	},
	{
		title: "Advanced Topic 3",
		content: "Integrate Power BI with other Microsoft tools and external data sources.",
	},
	{
		title: "Project 1",
		content: "Apply your skills in a guided project to reinforce your learning.",
	},
	{
		title: "Project : Netflix",
		content: "Analyze Netflix data to uncover trends and insights using Power BI.",
	},
	{
		title: "Project 2: Jobs & Salaries in Data Related Careers",
		content: "Work with real-world job and salary data to create impactful dashboards.",
	},
	{
		title: "Project 3: Food & Beverages",
		content: "Visualize and analyze data from the food and beverage industry.",
	},
	{
		title: "Interview Questions",
		content: "Prepare for interviews with a curated list of Power BI questions and answers.",
	},
	{
		title: "Successful completion of course",
		content: "Learn about certification, next steps, and how to showcase your new skills.",
	},
];

function CourseContent() {
	const [openIndex, setOpenIndex] = React.useState(null);

	const handleToggle = (idx) => {
		setOpenIndex(openIndex === idx ? null : idx);
	};

		return (
			<section className="p-8 mt-10 w-full rounded-lg border border-solid border-zinc-800 max-md:px-5 max-md:max-w-full">
				<header>
					<h2 className="text-3xl font-semibold leading-none text-blue-600">
						Course content
					</h2>
				</header>
				<div className="flex flex-col items-start mt-5 w-full text-lg leading-snug text-zinc-400 max-md:max-w-full">
					{contentItems.map((item, index) => (
						<div key={index} className="w-full mb-2">
							<button
								onClick={() => handleToggle(index)}
								className="flex items-center w-full py-1 px-2 rounded-lg transition-colors cursor-pointer focus:outline-none text-zinc-400"
								aria-expanded={openIndex === index}
								aria-controls={`content-${index}`}
							>
								<div className="flex items-center gap-2.5">
									<img
										src="https://api.builder.io/api/v1/image/assets/92dbd61d4c7248e0a6300c516c4d3fc9/d582b0953e4886ffba2ffd8bad3aa9a089950569?placeholderIfAbsent=true"
										className="object-contain shrink-0 w-5 aspect-square"
										alt=""
									/>
									<span className="font-medium">
										{item.title}
									</span>
								</div>
							</button>
							{openIndex === index && (
								<div
									id={`content-${index}`}
									className="pl-12 pr-4 pb-4 text-base text-zinc-400 animate-fade-in"
								>
									{item.content}
								</div>
							)}
						</div>
					))}
				</div>
			</section>
		);
}

export default CourseContent;
