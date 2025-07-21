import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import skin from "../../Assets/Projects/skin.png";
import pblog from "../../Assets/Projects/ambu.jpeg";
import editor from "../../Assets/Projects/editor.png";
import food from "../../Assets/Projects/food.png";
import plant from "../../Assets/Projects/plant.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
       
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={plant}
              isBlog={false}
              title="Medicinal Plant Identification"
              description="Medicinal plant identification using React, Firebase, and machine learning enables users to easily recognize and learn about various medicinal plants. React provides a responsive and interactive user interface for capturing plant images. Firebase handles backend services such as data storage, authentication, and real-time updates. Machine learning models analyze the images to accurately identify the plants, offering users detailed information and potential health benefits"
              ghLink="https://github.com/vishvawagh/Medicinal-Plant-Identification"
              demoLink="https://github.com/vishvawagh/Medicinal-Leaves-Identification/blob/Main/README.md"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pblog}
              isBlog={false}
              title="Ambulance Hiring App"
              description="Developed an Android app using Android Studio, Java, and XML for emergency patient assistance. Created a user-friendly
interface for seamless navigation. Integrated Firebase for secure data storage and real-time updates .Utilized Google APIs
for location-based services to optimize ambulance dispatch times."
              ghLink="https://github.com/vishvawagh/Ambulance-Hiring-App"
              demoLink="https://github.com/user-attachments/assets/c974ccb3-1d5c-47f4-a8a6-beb8a383f7db"   
              ></ProjectCard> 
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={food}
              isBlog={false}
              title="Food Delivery System"
              description="A food delivery system built with React and Appwrite offers a seamless and efficient user experience for ordering meals. React enables dynamic, responsive interfaces for easy menu browsing and order placement. Appwrite provides backend services like authentication, database management, and real-time updates, ensuring secure and reliable order processing. Together, they create a robust platform for both customers and restaurant partners."
              ghLink="https://github.com/vishvawagh/Advanced-Task---Food-delivery-app"
              demoLink="https://github.com/vishvawagh/Advanced-Task---Food-delivery-app/blob/Main/README.md"
            />
          </Col>

        
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Online Editor"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              ghLink="https://github.com/vishvawagh/Intermediate-Task-2--online-code-editor"
              demoLink="https://github.com/vishvawagh/Intermediate-Task-2--online-code-editor/blob/Main/README.md"
              />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={skin}
              isBlog={false}
              title="Skin Disease Classification"
              description="Skin disease classification using machine learning and the VGG19 model enables accurate identification of skin conditions from medical images. The VGG19 model, trained on labeled skin image datasets, enhances diagnostic speed and precision."
              ghLink="https://github.com/vishvawagh/Skin-Disease-Classifiation/tree/Main"
              demoLink="https://github.com/vishvawagh/Skin-Disease-Classifiation/blob/Main/README.md"
              />
          </Col>


        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
