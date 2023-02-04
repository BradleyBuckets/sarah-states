import logo from "./logo.svg";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Email from "./components/Email";

function App() {
  return (
    <div className="App bg-slate-400">
      <Nav />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <h1 className="text-3xl font-bold underline text-cyan-500">
        Hello world!
      </h1>
      <Email />
      <Footer />
    </div>
  );
}

export default App;
