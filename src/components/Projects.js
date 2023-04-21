import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/OnlineVehicleService.png";
import projImg2 from "../assets/img/OnlineCovidVaccination.png";
import projImg3 from "../assets/img/Anime website.png";
import projImg4 from "../assets/img/3Dhouse.png";
import projImg5 from "../assets/img/Lifi.png";
import projImg6 from "../assets/img/3Dhyd.png";
import projImg7 from "../assets/img/Astro.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Online Vehicle Service",
      description: "An online vehicle service project is a web platform where users can book vehicle maintenance and repair services online, with features such as appointment scheduling, service history tracking, and online payments.",
      imgUrl: projImg1,
    },
    {
      title: "Online Covid Vacccination",
      description: "The online Covid vaccination project is a platform that enables eligible individuals to register and schedule vaccinations online. It includes features like eligibility checking, appointment booking, and vaccine information, and aims to improve accessibility and achieve herd immunity.",
      imgUrl: projImg2,
    },
    {
      title: "Online Anime Website",
      description: "An online anime project is a web-based platform that provides streaming access to a wide variety of anime shows and movies. Users can browse the collection, watch their favorite anime series, and discover new titles from the comfort of their own device.",
      imgUrl: projImg3,
    },
    {
      title: "Add Works +",
      description: "Add your project Works",
      imgUrl: projImg7,
    },
    {
      title: "Add Works +",
      description: "Add your project Works",
      imgUrl: projImg7,
    },
    {
      title: "Add Works +",
      description: "Add your project Works",
      imgUrl: projImg7,
    },
  
  
  ];
  const projects1 = [
    {
      title: "3D Model of a House",
      description: "Created using blender",
      imgUrl: projImg4,
    },
    {
      title: "3D Model of Lifi technology",
      description: "Created using blender",
      imgUrl: projImg5,
    },
    {
      title: "3D model of Hydraulic Pump",
      description: "Created using blender",
      imgUrl: projImg6,
    },
    {
      title: "Add Works +",
      description: "Add your 3D Models",
      imgUrl: projImg7,
    },
    {
      title: "Add Works +",
      description: "Add your 3D models",
      imgUrl: projImg7,
    },
    {
      title: "Add Works +",
      description: "Add your 3D models",
      imgUrl: projImg7,
    },
  ];
  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>"As a skilled web developer, I have completed a variety of challenging projects that demonstrate my expertise in web development, front-end and back-end programming, and database management. My projects have included developing responsive websites, creating e-commerce platforms, and building custom web applications,3D modeling and app developments which allowed me to hone my skills in HTML, CSS, JavaScript, React, Blender and other relevant technologies.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <Row>
                        {
                          projects1.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Add your projects</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
