import NavBar from "../components/navbar.component";
import "../style/blog.css"

function App() {
  return (
    <div className="App">
      <NavBar />
      <h1 className="title yellow">Liste des articles</h1>
      <div>
        <div className="linkdiv">
          <a className="link" href="/article?id=1">Introduction</a>
        </div>
        <div className="linkdiv">
          <a className="link" href="/article?id=2">Article 1 : Création d'un NFT</a>
        </div>
        <div className="linkdiv">
          <a className="link" href="/article?id=3">Article 2 : Création d’une collection de NFT </a>
        </div>
        <div className="linkdiv">
          <a className="link" href="/article?id=4">Article 3 : Création du site de mint</a>
        </div>
        <div className="linkdiv">
          <a className="link" href="/article?id=5">Article 4 : Création d’un genérateur d’image NFT</a>
        </div>
        <div className="linkdiv">
          <a className="link" href="/article?id=6">Conclusion du stage</a>
        </div>
      </div>
    </div>
  );
}

export default App;
