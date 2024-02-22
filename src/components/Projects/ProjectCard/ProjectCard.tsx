import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Col, Row } from 'react-bootstrap';

export interface ProjectProps {
  imgPath: string;
  title: string;
  ghLink: string;
  description: string;
  demoLink: string;
}

function ProjectCard(project: ProjectProps) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={project.imgPath} alt="card-img" />
      <Card.Body
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <Card.Title>{project.title}</Card.Title>
        <Card.Text style={{ textAlign: 'justify' }}>
          {project.description}
        </Card.Text>
        <Row>
          <Col md={6}>
            <Button
              className="viewbtn"
              variant="outline-secondary"
              href={project.ghLink}
              target="_blank"
              rel="noreferrer"
            >
              Github
            </Button>
          </Col>
          {project.demoLink ? (
            <Col md={6}>
              <Button
                className="viewbtn"
                variant="outline-secondary"
                href={project.demoLink}
                target="_blank"
                rel="noreferrer"
              >
                Demo
              </Button>
            </Col>
          ) : (
            ''
          )}
        </Row>
      </Card.Body>
    </Card>
  );
}
export default ProjectCard;
