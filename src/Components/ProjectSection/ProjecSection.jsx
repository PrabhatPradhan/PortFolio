import { motion } from "framer-motion";
import { GitHub, AttachFile } from "@mui/icons-material";
import "./ProjectSection.css";

import ProjectOneImage from "./../../assets/Img/Gmail Project.png";
import ProjectTwoImage from "./../../assets/Img/gym.png";
import ProjectThreeImage from "./../../assets/Img/phone.png";
import ProjectFourImage from "./../../assets/Img/AgeCal.png";
import ProjectFiveImage from "./../../assets/Img/emoji.png";
import ProjectSixImage from "./../../assets/Img/PassGen.png";
import ProjectSevenImage from "./../../assets/Img/githubFinder.png";
import ProjectImage from "./../../assets/Img/foodimg.png";

// tech icons
import html from "./../../assets/Img/Html.png";
import css from "../../assets/Img/Css.png";
import react from "../../assets/Img/reactBasic.png";
import tailwind from "../../assets/Img/Tailwind.png";
import js from "../../assets/Img/JavaScript.png";
import firebase from "./../../assets/Img/firebase1.png";
const ProjectSection = () => {
  const projects = [
    {
      title: "Food Delivery",
      description:
        "The Food Delivery Clone project is a dynamic web application that replicates the core functionalities and design aesthetics of the renowned e-commerce platform, Amazon. Developed using React.js for frontend, Vite for efficient build process, Tailwind CSS for styling, and Firebase for authentication, the Amazon Clone is a testament to modern web development technologies.",
      link: "https://github.com/PrabhatPradhan/Food-Delivery",
      image: ProjectImage,
      goLive: "https://food-delivery-five-zeta.vercel.app/",
      tech: [react, tailwind, firebase],
    },
    {
      title: "Gmail Clone",
      description:
        "This Gmail clone project demonstrates my ability to develop a web application with modern technologies, focusing on user authentication and email functionality. It showcases my skills in front-end development with HTML, CSS, and JavaScript, as well as my ability to integrate third-party APIs for extended functionality.",
      link: "https://github.com/PrabhatPradhan/Gmail-clone-2",
      image: ProjectOneImage,
      goLive: "https://prabhatpradhan.github.io/Gmail-clone-2/",
      tech: [html, tailwind, js],
    },
    {
      title: "GitHub Finder",
      description:
        "This GitHub Finder project demonstrates my ability to develop a web application with modern technologies, focusing on user authentication and email functionality. It showcases my skills in front-end development with HTML, CSS, and JavaScript, as well as my ability to integrate third-party APIs for extended functionality.",
      link: "https://github.com/PrabhatPradhan/github",
      image: ProjectSevenImage,
      goLive: "https://prabhatpradhan.github.io/github/",
      tech: [html, tailwind, js],
    },
    // {
    //   title: "Gym Website",
    //   description:
    //     "GymFit is a modern, responsive web application designed to provide users with a comprehensive fitness experience. The website showcases a variety of exercises through engaging GIFs, helping users to understand and perform exercises correctly.",
    //   link: "https://github.com/Dhirajbhavsar9900/GYMFIT-REACT",
    //   image: ProjectTwoImage,
    //   goLive: "https://gymfit-opal.vercel.app/",
    //   tech: [html, tailwind, js],
    // },
    {
      title: "Phone Search",
      description:
        "I developed a fully responsive mobile search website using HTML, CSS (Tailwind CSS), and JavaScript. This project demonstrates my skills in front-end web development and my ability to create dynamic, user-friendly interfaces. The website is designed to search for information on a particular website via an API, providing real-time results.",
      link: "https://github.com/Dhirajbhavsar9900/Iphone-web-Weakly-test-4-",
      image: ProjectThreeImage,
      goLive: "https://iphone-web-weakly-test-4.vercel.app/",
      tech: [html, tailwind, js],
    },
    {
      title: "Age Calculator",
      description:
        "I developed a user-friendly Age Calculator using HTML, CSS, Tailwind, and JavaScript. This project demonstrates my skills in front-end development, including responsive design and interactive user interfaces. The Age Calculator allows users to input their birthdate and quickly find out their exact age in years, months, and days.",
      link: "https://github.com/Dhirajbhavsar9900/Age_Calculator",
      image: ProjectFourImage,
      goLive: "https://dhirajbhavsar9900.github.io/Age_Calculator/",
      tech: [html, css, js],
    },
    {
      title: "Emoji Search",
      description:
        "The Emoji Search Website is an interactive web application designed to help users find and copy their favorite emojis quickly and efficiently. This project was built using HTML, CSS, and JavaScript, with a focus on providing a seamless user experience through intuitive design and functionality.",
      link: "https://github.com/PrabhatPradhan/find-emoji",
      image: ProjectFiveImage,
      goLive: "https://prabhatpradhan.github.io/find-emoji/",
      tech: [html, css, js],
    },
    {
      title: "PassGenerator",
      description:
        "I developed a Password Generator website using React and Vite, aiming to provide users with a secure and convenient way to generate strong, random passwords. This project highlights my skills in modern frontend development, including state management, user interface design, and performance optimization with Vite.",
      link: "https://github.com/Dhirajbhavsar9900/Weakly-Test-01",
      image: ProjectSixImage,
      goLive: "https://weakly-test-01.vercel.app/",
      tech: [html, tailwind, js],
    },
  ];

  return (
    <div
      id="project-section"
      className="py-24 px-5 text-center bg-slate-300 from-gray-200 to-gray-300"
    >
      <motion.h2
        className="text-5xl mb-14 font-bold"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        Projects
      </motion.h2>
      <div className="flex flex-wrap justify-center">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="relative m-3 cursor-pointer flex flex-col text-gray-700 bg-black shadow-md bg-clip-border rounded-xl w-96 project-card"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{
              scale: 1.03,
              boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)",
            }}
            whileTap={{ scale: 0.97 }}
          >
            <motion.div
              className="relative h-56 mx-4 mt-5 overflow-hidden rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40"
              whileHover={{ opacity: 0.9 }}
            >
              <img
                src={project.image}
                alt="card-image"
                className="w-full h-full object-cover rounded-xl"
              />
              <motion.div
                className="absolute inset-0 flex justify-center items-center opacity-0 transition-opacity duration-300"
                whileHover={{ opacity: 1 }}
              >
                <div className="absolute inset-0 bg-black opacity-70 rounded-xl"></div>
                <div className="flex gap-12 justify-center mx-2 my-2 space-x-2 z-10">
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                  >
                    <GitHub style={{ fontSize: "45px", fill: "#FFD700" }} />
                  </motion.a>
                  <motion.a
                    href={project.goLive}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                  >
                    <AttachFile style={{ fontSize: "45px", fill: "#FBF9EF" }} />
                  </motion.a>
                </div>
              </motion.div>
            </motion.div>
            <div className="p-6">
              <div className="flex items-center justify-between">
                <h5 className="block my-3 font-Josefin text-2xl font-semibold leading-snug text-white">
                  {project.title}
                </h5>
                <div className="flex gap-2 mb-3">
                  {project.tech.map((item, idx) => (
                    <img
                      src={item}
                      key={idx}
                      className="w-10 h-10"
                      alt="tech-icon"
                    />
                  ))}
                </div>
              </div>
              <div className="flex items-start">
                <p className="block font-sans text-base text-gray-300 leading-relaxed text-left">
                  {project.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProjectSection;
