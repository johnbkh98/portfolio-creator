import './ProjectCard.css';

import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import firstSlideImage from '.././HomeWelcomeMessage/SlideImages/first.jpg';

function ProjectCard() {
  return (
    <Container>
			<div className='mt-4 mb-6'>
				<Container>
				<Row xs={1} md={2} className="g-4">
      {Array.from({ length: 4 }).map((_, idx) => ( //Lenght of project cards
        <Col>
          <Card>
            <Card.Img variant="top" src={firstSlideImage} />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
				</Container>
			</div>
		</Container>
  );
}

export default ProjectCard;