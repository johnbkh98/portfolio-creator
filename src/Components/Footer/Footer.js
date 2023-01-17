import './Footer.css';

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Logo from './Images/first.jpg';
function Footer() {
	return (
		<div className='mt-4'>
			<Navbar bg="dark" variant="dark" >
				<Container className='justify-content-center mb-1'>
					<Navbar.Brand href="#home">
						<img
							alt=""
							src={Logo}
							width="30"
							height="30"
							className="d-inline-block align-top"
						/>{' '}
						Powered By Portfolio Creator
					</Navbar.Brand>
				</Container>
			</Navbar>
		</div>
	);
}
export default Footer;