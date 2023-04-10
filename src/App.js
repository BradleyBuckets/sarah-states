import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Email from "./components/Email";
import Support from "./components/Support";
import MusicCard from "./components/MusicCard";
import MusicCard2 from "./components/MusicCard2";
import Privacy from "./components/Privacy";

function App() {
  return (
    <div className="App">
      <Nav />
      <Hero />
      <MusicCard />
      <MusicCard2 />
      <Support />
      <Email />
      <Footer />
      <Nav />
      <Privacy />
      <Footer />
    </div>
  );
}

export default App;
