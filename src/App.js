import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Email from "./components/Email";
import Support from "./components/Support";
import MusicCard from "./components/MusicCard";
import MusicCard2 from "./components/MusicCard2";
import Privacy from "./components/Privacy";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Nav />
        <div className="content">
          <Switch>
            <Route exact path={"/"}>
              <Hero />
              <MusicCard />
              <MusicCard2 />
              <Support />
              <Email />
            </Route>
            <Route path={"/privacy"}>
              <Privacy />
            </Route>
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
