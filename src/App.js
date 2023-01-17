import './App.css';
import NavigationBar from './Components/NavigationBar/NavigationBar.js';
import HomeWelcomeMessage from './Components/HomeWelcomeMessage/HomeWelcomeMessage.js';
import ProjectCard from './Components/ProjectCard/ProjectCard.js';
import Footer from './Components/Footer/Footer.js';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
			<NavigationBar />
			<HomeWelcomeMessage />
			<ProjectCard />
			
			<Footer/>
    </div>
  );
}

export default App;
