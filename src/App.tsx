import About from "./sections/About";
import Header from "./components/layouts/Header";
import MainContainer from "./components/layouts/MainContainer";
import Contact from "./components/Contact";
import ProjectLoader from "./containers/ProjectLoader";
import Footer from "./components/layouts/Footer";

function App() {
  return (
    <div className="flex min-h-full">
      <div className="w-full text-navy-900">
        <Header>
          <About />
          <Contact />
        </Header>
        <MainContainer>
          <ProjectLoader />
        </MainContainer>
        <Footer />
      </div>
    </div>
  );
}

export default App;
