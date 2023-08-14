import Footer from "./components/Footer";
import About from "./sections/About";
import Header from "./components/layouts/Header";
import MainContainer from "./components/layouts/MainContainer";
import ProjectsContainer from "./components/layouts/ProjectsContainer";
import Contact from "./components/Contact";
import ProjectLoader from "./containers/ProjectLoader";

function App() {
  return (
    <div className="flex min-h-full">
      <div className="w-full">
        <Header>
          <About />
          <Contact />
          <Footer />
        </Header>
        <MainContainer>
          <ProjectsContainer>
            <ProjectLoader />
          </ProjectsContainer>
        </MainContainer>
      </div>
    </div>
  );
}

export default App;
