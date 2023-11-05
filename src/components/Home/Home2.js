import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.png";
import Tilt from "react-parallax-tilt";
import {
    AiFillGithub,
    AiOutlineTwitter,
    AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
    return (
        <Container fluid className="home-about-section" id="about">
            <Container>
                <Row>
                    <Col md={8} className="home-about-description">
                        <h1 style={{ fontSize: "2.6em" }}>
                            LET ME <span className="purple"> INTRODUCE </span> MYSELF
                        </h1>
                        <p className="home-about-body">
                            My educational background is diverse, including degrees in <b className="purple">
                            Computer Science and Liberal Arts
                        </b> and training in <b className="purple">
                            Medicinal Bio-Chemistry and Nursing
                        </b>, providing me with a unique perspective for problem-solving.
                            <br />
                            <br />I am proficient in programming classics such as
                            <i>
                                <b className="purple"> Python, C++, JAVA, HTML, and more, </b>  allowing me to create a wide range of SaaS products across many different platforms.
                            </i>
                            <br />
                            <br />
                            My interests include&nbsp;
                            <i>
                                <b className="purple">Astronomy, Video Games focused on Building/Managing Systems</b> and {" "}
                                <b className="purple">
                                    Fantasy Anime.
                                </b>
                            </i>
                            <br />
                            <br />
                            In the future, I plan to combine the skills I have gained with my interests in system management to establish a career in
                            <i>
                                <b className="purple">
                                    {" "}
                                    Project Management.
                                </b>
                            </i>
                        </p>
                    </Col>
                    <Col md={4} className="myAvtar">
                        <Tilt>
                            <img src={myImg} className="img-fluid" alt="avatar" />
                        </Tilt>
                    </Col>
                </Row>
                <Row>
                    <Col md={12} className="home-about-social">
                        <h1>FIND ME ON</h1>
                        <ul className="home-about-social-links">
                            <li className="social-icons">
                                <a
                                    href="https://github.com/williamneilwest"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="icon-colour  home-social-icons"
                                >
                                    <AiFillGithub />
                                </a>
                            </li>
                            <li className="social-icons">
                                <a
                                    href="https://twitter.com/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="icon-colour  home-social-icons"
                                >
                                    <AiOutlineTwitter />
                                </a>
                            </li>
                            <li className="social-icons">
                                <a
                                    href="https://www.linkedin.com/in/wnwest"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="icon-colour  home-social-icons"
                                >
                                    <FaLinkedinIn />
                                </a>
                            </li>
                            <li className="social-icons">
                                <a
                                    href="https://www.instagram.com/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="icon-colour home-social-icons"
                                >
                                    <AiFillInstagram />
                                </a>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}
export default Home2;