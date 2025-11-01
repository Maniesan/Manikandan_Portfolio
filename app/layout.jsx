import "./globals.css";
import Navbar from "@/components/Navbar";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;
import "./nprogress.css";
import { Analytics } from "@vercel/analytics/react";
import ClientTopProgressBar from "@/components/ClientTopProgressBar";

export const metadata = {
    title: "MANIKANDAN ESWARAN Eswaran | Portfolio",

    description:
		"My name is MANIKANDAN ESWARAN, I'm a MERN Stack Developer with 1.5 years of experience building scalable web applications using MongoDB, Express.js, React.js, and Node.js.",

    author: "MANIKANDAN ESWARAN Eswaran",
    siteUrl: "https://www.MANIKANDAN ESWARANeswaran.com",
    applicationName: "MANIKANDAN ESWARAN Eswaran Portfolio",

    keywords: [
		"MANIKANDAN ESWARAN Eswaran",
		"MERN Stack Developer",
		"Full Stack Developer",
		"React Developer",
		"Node.js Developer",
		"MongoDB",
		"Express.js",
		"Web Developer",
		"Madurai Developer",
		"TITA Technologies",
		"GETHUBSERVICE",
	],

    openGraph: {
		type: "website",
		url: "https://www.MANIKANDAN ESWARANeswaran.com",
		title: "MANIKANDAN ESWARAN Eswaran | MERN Stack Developer",
		site_name: "MANIKANDAN ESWARAN Eswaran Portfolio",
		description: "MERN Stack Developer with 1.5 years of experience building scalable web applications.",
		width: 1200,
		height: 630,
		images: [
			{
				url: "/og-image-rev.png",
				alt: "MANIKANDAN ESWARAN Eswaran Portfolio",
			},
		],
		site_name: "MANIKANDAN ESWARAN Eswaran Portfolio",
	}
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
				<ClientTopProgressBar />
				<Navbar />
				{children}
				<Analytics />
			</body>
		</html>
	);
}
