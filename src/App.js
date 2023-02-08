import logo from "./logo.svg";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Email from "./components/Email";
import Support from "./components/Support";
import MusicCard from "./components/MusicCard";
import MusicCard2 from "./components/MusicCard2";

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
    </div>
  );
}

export default App;
