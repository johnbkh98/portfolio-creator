import './HomeWelcomeMessage.css';

import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';
import firstSlideImage from './SlideImages/first.jpg';
import secondSlideImage from './SlideImages/second.png';
import thirdSlideImage from './SlideImages/third.jpg';

function HomeWelcomeMessage() {
  return (
		<Container className='text-center' id='welcome-message'>
			<h5>User Gen Msg: Welcome TO MY Portfolio</h5>
			<div className='justify-content-center carousel-slide mt-5'>
				<Container>
					<Carousel>
						<Carousel.Item>
							<img className="d-block w-100 slide-image" src={firstSlideImage} alt="First slide" />
							<Carousel.Caption>
								<h3>First slide label</h3>
								<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
							</Carousel.Caption>
						</Carousel.Item>

						<Carousel.Item>
							<img className="d-block w-100 slide-image" src={secondSlideImage} alt="Second slide" />
							<Carousel.Caption>
								<h3>Second slide label</h3>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
							</Carousel.Caption>
						</Carousel.Item>

						<Carousel.Item>
							<img className="d-block w-100 slide-image" src={thirdSlideImage} alt="Third slide"  />
							<Carousel.Caption>
								<h3>Third slide label</h3>
								<p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
							</Carousel.Caption>
						</Carousel.Item>
					</Carousel>
				</Container>
			</div>
		</Container>
  );
}

export default HomeWelcomeMessage;