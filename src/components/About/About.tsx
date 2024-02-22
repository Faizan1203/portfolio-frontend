import { Container, Row, Col } from 'react-bootstrap';
import Marquee from 'react-fast-marquee';
import './About.css';
import gcp from '../../assets/svg/skills/gcp.svg';
import html from '../../assets/svg/skills/html.svg';
import css from '../../assets/svg/skills/css.svg';
import angular from '../../assets/svg/skills/angular.svg';
import javascript from '../../assets/svg/skills/javascript.svg';
import nextJS from '../../assets/svg/skills/nextJS.svg';
import react from '../../assets/svg/skills/react.svg';
import typescript from '../../assets/svg/skills/typescript.svg';
import bootstrap from '../../assets/svg/skills/bootstrap.svg';
import mongoDB from '../../assets/svg/skills/mongoDB.svg';
import mysql from '../../assets/svg/skills/mysql.svg';
import postgresql from '../../assets/svg/skills/postgresql.svg';
import tailwind from '../../assets/svg/skills/tailwind.svg';
import c from '../../assets/svg/skills/c.svg';
import cplusplus from '../../assets/svg/skills/cplusplus.svg';
import csharp from '../../assets/svg/skills/csharp.svg';
import java from '../../assets/svg/skills/java.svg';
import python from '../../assets/svg/skills/python.svg';
import swift from '../../assets/svg/skills/swift.svg';
import aws from '../../assets/svg/skills/aws.svg';
import django from '../../assets/svg/skills/django.svg';
import git from '../../assets/svg/skills/git.svg';
import materialui from '../../assets/svg/skills/materialui.svg';
import azure from '../../assets/svg/skills/azure.svg';
import figma from '../../assets/svg/skills/figma.svg';
import markdown from '../../assets/svg/skills/markdown.svg';
import canva from '../../assets/svg/skills/canva.svg';
import sqlite from '../../assets/svg/skills/sqlite.svg';

import { useEffect, useState } from 'react';
import Loader from '../Loader/Loader';

function About() {
  const [load, updateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      updateLoad(false);
    }, 200);

    return () => clearTimeout(timer);
  }, []);

  const skillsData = [
    'Angular',
    'React',
    'AWS',
    'Azure',
    'GCP',
    'Git',
    'Django',
    'Python',
    'Swift',
    'Typescript',
    'Java',
    'Javascript',
    'C',
    'Canva',
    'C++',
    'C#',
    'Markdown',
    'MongoDB',
    'NextJs',
    'HTML',
    'SQLite',
    'CSS',
    'MaterialUI',
    'Bootstrap',
    'Tailwind',
    'Figma',
  ];

  const skillsImage = (skill: string) => {
    const skillID = skill.toLowerCase();
    switch (skillID) {
      case 'gcp':
        return gcp;
      case 'html':
        return html;
      case 'css':
        return css;
      case 'angular':
        return angular;
      case 'javascript':
        return javascript;
      case 'nextjs':
        return nextJS;
      case 'react':
        return react;
      case 'typescript':
        return typescript;
      case 'bootstrap':
        return bootstrap;
      case 'mongodb':
        return mongoDB;
      case 'mysql':
        return mysql;
      case 'postgresql':
        return postgresql;
      case 'tailwind':
        return tailwind;
      case 'c':
        return c;
      case 'c++':
        return cplusplus;
      case 'c#':
        return csharp;
      case 'java':
        return java;
      case 'python':
        return python;
      case 'swift':
        return swift;
      case 'aws':
        return aws;
      case 'django':
        return django;
      case 'git':
        return git;
      case 'materialui':
        return materialui;
      case 'azure':
        return azure;
      case 'figma':
        return figma;
      case 'markdown':
        return markdown;
      case 'canva':
        return canva;
      case 'sqlite':
        return sqlite;
      default:
        break;
    }
  };
  return (
    <div className="aboutpagebackground">
      <Loader load={load} />
      <Container>
        <Row>
          <Col md={7}>
            <h2 className="aboutmetext text-center">
               <span>About Me</span>
            </h2>
            <p className="aboutdetails">
              I am a dedicated and passionate computer science and engineering
              student at the University of Waterloo, driven by a deep-rooted
              love for technology and innovation. From a young age, I've been
              captivated by the possibilities of the digital world, inspired by
              iconic figures like Tony Stark. My journey has been a fusion of
              diverse experiences, from crafting robots with Lego Mindstorms to
              studying in the United States, which has shaped both my technical
              skills and communication abilities. Now, as I embark on my
              academic journey at one of Canada's top universities, my goal is
              to push boundaries, solve complex problems, and contribute to the
              ever-evolving landscape of technology. Welcome to my portfolio,
              where you can explore my projects and witness my passion for
              creating meaningful solutions that make a difference.
            </p>
            <div className="skillsContainer">
              <div className="skill--scroll">
                <Marquee
                  gradient={false}
                  speed={60}
                  pauseOnHover={true}
                  delay={0}
                  play={true}
                  direction="left"
                >
                  {skillsData.map((skill, id) => (
                    <div className="skill--box" key={id}>
                      <img
                        className="skill-image"
                        src={skillsImage(skill)}
                        alt={skill}
                      />
                      <p>{skill}</p>
                    </div>
                  ))}
                </Marquee>
              </div>
            </div>
          </Col>
          <Col md={5}>
            <div className="webimage"></div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
