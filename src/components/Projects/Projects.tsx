import ProjectCard, { ProjectProps } from "./ProjectCard/ProjectCard";
import { Container, Row, Col } from "react-bootstrap";
import recipe from "../../assets/images/recipe.png";
import finance from "../../assets/images/finance.png";
import planner from "../../assets/images/hardnut.png";
import blogger from "../../assets/images/blogger.png";
import ecommerce from "../../assets/images/ecommerce.png";
import "./Projects.css";
import Loader from "../Loader/Loader";
import { useEffect, useState } from "react";

function Projectlist() {
  const ProjectDataArray: ProjectProps[] = [
    {
      imgPath: finance,
      title: "Stock Market Simulator",
      description:
        "Created an interactive stock market simulator that uses APIs to access live stock information in the New York Stock Exchange. Implemented a virtual portfolio that displays detailed statistics of stock purchases and history. This was done using Flask, Python, HTML, CSS, SQL.",
      ghLink: "https://github.com/Faizan1203/Stock-Market-Simulator",
      demoLink: "https://youtu.be/yrsUpW8plHI",
    },
    {
      imgPath: ecommerce,
      title: "Ecommerce",
      description:
        "A website that will allow users to post auctions, place bids, comment on listings, and add listings to a watch list. This was made using Django framework, Python, JavaScript, HTML, CSS, SQL.",
      ghLink: "https://github.com/Faizan1203/E-Commerce",
      demoLink: "https://youtu.be/qF9SPP5sr0g",
    },
    {
      imgPath: recipe,
      title: "Recipe Book",
      description:
        "Developed a single-page application using Angular where users can create various recipes and refer back to them in the future. This was done using Angular, TypeScript, HTML, CSS, Firebase Realtime Database",
      ghLink: "https://github.com/Faizan1203/Angular-Recipe-Book",
      demoLink: "https://youtu.be/nmyKRAyAv_w",
    },
    {
      imgPath: planner,
      title: "Planner",
      description:
        "Developed a website for students to create their goals, plan, study, and achieve them. This was made using Django framework, Python, JavaScript, HTML, CSS, SQL.",
      ghLink: "https://github.com/Faizan1203/HardNut",
      demoLink: "https://youtu.be/HZkOODibc1c",
    },
    {
      imgPath: blogger,
      title: "Blogger",
      description:
        "A website where users can share their knowledge and solve queries by interacting with each other. This was made using Node JS, MongoDB, Express, JavaScript, EJS, CSS.",
      ghLink: "https://github.com/Faizan1203/Blogger",
      demoLink: "https://youtu.be/IEPGRZKLCxo",
    },
  ];

  const [load, updateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      updateLoad(false);
    }, 200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="projectbackground">
      <Loader load={load} />
      <Container fluid className="project-section">
        <Container>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <h2 className="text-center projects-head">Projects</h2>
            <p className="text-center projectspara">
              Explore a curated collection of my hands-on projects, each a
              testament to my problem-solving skills and creativity. From web
              development ventures to innovative coding projects, this portfolio
              showcases my dedication to bringing ideas to life in the digital
              realm. If you want to see a demo of these, then please visit my
              &nbsp;
              <a
                href="https://www.youtube.com/channel/UCOfAJ36-E-s6z6YFsc8DWDQ"
                target="_blank"
                rel="noreferrer"
              >
                Youtube
              </a>{" "}
              &nbsp;channel where I have uploaded the demo of each and every
              project.
            </p>

            {ProjectDataArray.map((project, index) => (
              <Col md={4} className="project-card">
                <ProjectCard key={index} {...project} />
              </Col>
            ))}
          </Row>
        </Container>
      </Container>
    </div>
  );
}
export default Projectlist;
