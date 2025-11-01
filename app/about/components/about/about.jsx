import Image from "next/image";
import Card from "./spotify/card";
import { motion } from "framer-motion";
import Me1 from "@/public/image/me/1739944973393.jpg";
import Me2 from "@/public/image/me/InShot_20241104_124641201.jpg";
import Me3 from "@/public/image/me/IMG_20250901_071537_482.webp";
import Hr from "@/components/Hr";

function Title() {
	return (
		<div className="mt-10 flex flex-col justify-start items-center w-full pl-10 md:pl-32">
			<div className="flex justify-center items-center flex-col my-5 self-start ">
				<Hr variant="long"></Hr>
				<h1 className="text-3xl font-bold mt-3">Who Am I?</h1>
			</div>
		</div>
	);
}

export default function About() {
	return (
		<>
			<Title />
			<div className="relative mx-auto container gap-4 px-10 grid grid-cols-1 md:grid-cols-2 mb-10">
				<div className="flex justify-center items-start flex-col mb-5 ">
					<div className="images relative w-full  aspect-square">
						<div className="absolute top-28 left-10 w-[50%]  aspect-square grayscale hover:grayscale-0 transition-all ease duration-300">
							<motion.div
								initial={{ opacity: 0, scale: 0.5, x: 100 }}
								whileInView={{
									opacity: 1,
									scale: 1,
									x: 0,
								}}
								className="w-full h-full">
								<Image
									src={Me1}
									alt="MANIKANDAN ESWARAN"
									layout="fill"
									objectFit="cover"
									placeholder="blur"
								/>
							</motion.div>
						</div>
						<div className="absolute top-16 right-28 w-[30%]  aspect-square grayscale hover:grayscale-0 transition-all ease duration-300">
							<motion.div
								initial={{
									opacity: 0,
									scale: 0.5,
									x: -100,
								}}
								whileInView={{
									opacity: 1,
									scale: 1,
									x: 0,
								}}
								transition={{ delay: 0.3 }}
								className="w-full h-full">
								<Image
									src={Me2}
									alt="MANIKANDAN ESWARAN"
									layout="fill"
									objectFit="cover"
									placeholder="blur"
								/>
							</motion.div>
						</div>
						<div className="absolute bottom-16 right-20 w-[40%]  aspect-square grayscale hover:grayscale-0 transition-all ease duration-300">
							<motion.div
								initial={{
									opacity: 0,
									scale: 0.5,
									x: -100,
								}}
								whileInView={{
									opacity: 1,
									scale: 1,
									x: 0,
								}}
								transition={{
									delay: 0.5,
								}}
								className="w-full h-full">
								<Image
									src={Me3}
									alt="MANIKANDAN ESWARAN"
									layout="fill"
									objectFit="cover"
									placeholder="blur"
								/>
							</motion.div>
						</div>
					</div>
				</div>
				<motion.div
					className="flex justify-center items-start flex-col mb-5 md:px-10"
					initial={{
						opacity: 0,
						x: 200,
					}}
					whileInView={{
						opacity: 1,
						x: 0,
					}}
					transition={{
						delay: 0.5,

						type: "spring",
					}}>
					<h2 className="text-2xl font-bold tracking-wider mb-3">
						MANIKANDAN ESWARAN ESWARAN
					</h2>
					<p className="text-gray-600 text-justify title text-lg">
						Hey there, I&rsquo;m MANIKANDAN ESWARAN Eswaran, a
						<span className="text-black font-medium">
							{" "}
							passionate MERN Stack Developer
						</span>{" "}
						with 1.5 years of hands-on experience in building scalable web applications.
						I specialize in
						<span className="text-black font-medium">
							{" "}
							MongoDB, Express.js, React.js, and Node.js,
						</span>{" "}
						and I have a strong understanding of RESTful APIs, modern UI/UX practices, 
						and full-stack development workflows. My work focuses on developing 
						responsive, high-performance solutions from design to deployment. 
						In addition to web development, I possess practical experience with 
						<span className="text-black font-medium">
							{" "}
							cloud technologies including Google Cloud Platform (GCP), 
						</span>
						VM management, and cloud storage solutions. I also have a unique background 
						in product design tools such as AutoCAD, SolidWorks, and CATIA V5, enabling 
						me to bridge the gap between development and product design. I believe in 
						being a
						<span className="text-black font-medium"> lifelong learner</span> and 
						continuously improving my skills to deliver the best solutions. 
						Let&rsquo;s connect and build something amazing together!
					</p>
					<Card />
				</motion.div>
			</div>
		</>
	);
}
