import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.webp";
import myImg from "../../Assets/avatar.jpg";
import Tilt from "react-parallax-tilt";
import Type from "./Type";
import Home2 from "./Home2";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          {/* Main Intro Section */}
          <Row className="align-items-center" style={{ minHeight: '60vh', marginBottom: '2rem' }}>
            <Col md={6} style={{ textAlign: 'left', paddingBottom: 0 }}>
              <h1 className="heading">Hi There! <span className="wave" role="img" aria-labelledby="wave">👋🏻</span></h1>
              <h1 className="heading-name">
                I'M{' '}
                <strong className="main-name">Vishvachaitanya Wagh</strong>
              </h1>
              <Type />
            </Col>
            <Col md={6} style={{ textAlign: 'center', paddingTop: 40 }}>
              <img src={homeLogo} alt="home pic" className="img-fluid wide-flat-img" />
            </Col>
          </Row>

          {/* LET ME INTRODUCE MYSELF Section */}
          <Row className="align-items-center" style={{ marginBottom: '2rem' }}>
            <Col md={8} className="home-about-description" style={{ paddingTop: 0, marginTop: 0 }}>
              <h1 style={{ fontSize: "2.6em" }}>
                LET ME <span className="purple"> INTRODUCE </span> MYSELF
              </h1>
              <p className="home-about-body">
                I am a relentless problem solver and a passionate coder, obsessed with building powerful digital solutions.<br /><br />
                My expertise spans <i><b className="purple">Java, JavaScript, and Python</b></i>—languages I wield to architect robust, scalable systems.<br /><br />
                I thrive in the world of <i><b className="purple">Web Technologies and Product Engineering</b></i>, and I’m deeply invested in <b className="purple">Machine Learning</b> and <b className="purple">Cybersecurity</b>—fields where innovation meets impact.<br /><br />
                I don’t just code—I engineer. My drive is to create, optimize, and dominate in the tech space, leveraging <b className="purple">Node.js</b> and the latest in <b className="purple">Modern JavaScript Libraries and Frameworks</b> like <b className="purple">React.js</b> and <b className="purple">Next.js</b>.<br /><br />
                Every project is an opportunity to push boundaries, disrupt the ordinary, and deliver excellence. I’m here to build the future—one line of code at a time.
              </p>
              {/* Social Links */}
              <div className="home-about-social">
                <h1>FIND ME ON</h1>
                <p>
                  Feel free to <span className="purple">connect </span>with me
                </p>
                <ul className="home-about-social-links">
                  <li className="social-icons">
                    <a
                      href="https://github.com/vishvawagh"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour home-social-icons"
                    >
                      <AiFillGithub />
                    </a>
                  </li>
                  <li className="social-icons">
                    <a
                      href="https://x.com/vishvawagh453?t=yx-M0Uhzp9C8SwkiMOZMzg&s=09"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour home-social-icons"
                    >
                      <AiOutlineTwitter />
                    </a>
                  </li>
                  <li className="social-icons">
                    <a
                      href="https://www.linkedin.com/in/vishvachaitanya-wagh-892573246/"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour home-social-icons"
                    >
                      <FaLinkedinIn />
                    </a>
                  </li>
                  <li className="social-icons">
                    <a
                      href="https://www.instagram.com/vishvawagh453/"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour home-social-icons"
                    >
                      <AiFillInstagram />
                    </a>
                  </li>
                </ul>
              </div>
            </Col>
            <Col md={4} style={{ textAlign: 'center', marginBottom: '1rem' }}>
              <Tilt>
                <img src={myImg} className="img-fluid wide-flat-img" alt="avatar" style={{ width: '70%', maxWidth: '500px' }} />
              </Tilt>
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Home;
