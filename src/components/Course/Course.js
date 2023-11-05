import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CourseCard from "./CourseCard";
import Particle from "../Particle";
import it510 from "../../Assets/IT510.png";


function Course() {
    return (
        <Container fluid className="course-section">
            <Particle />
            <Container>
                <h1 className="course-heading">
                    My Graduate <strong className="purple">Courses </strong>
                </h1>
                <p style={{ color: "white" }}>
                    Here is a collection of my Graduate Courses and some of the work I produced during my tenure.
                </p>
                <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                    <Col md={4} className="course-card">
                        <CourseCard
                            imgPath={it510}
                            isBlog={false}
                            title=""
                            description=""
                            ghLink=""
                            demoLink=""
                        />
                    </Col>

                </Row>
            </Container>
        </Container>
    );
}

export default Course;