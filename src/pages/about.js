import NavBar from "../components/navbar.component";
import "../style/about.css";
import photo from "../media/photo pro carré.JPG";
import cv from "../media/Drozd_Damien_CV_FullStack.jpg";
import frontend from "../media/frontend.svg";
import backend from "../media/backend.svg";
import blockchain from "../media/bitcoin.svg";
import React, { useState, useEffect } from 'react';


function About() {
  
  const [competencesId, setCompetencesId] = useState(4);

  var tab = [
    <div class="card cardcompetences" >
      <div class="card-body white">
        <h4>- Utilisation d'APIs</h4>
        <h4>- UI/UX design :</h4>
        <div>
        - Outil de design : Figma / Adobe XD <br/>
        - CMS : WordPress / SquareSpace / shopify <br/>
        - Framework CSS : Bootstrap <br/>
        </div>
        <h4>-Frontend Framework :</h4>
        <div>
        - React <br/>
        - Flutter <br/>
        </div>
      </div>
    </div>,
    <div class="card cardcompetences">
      <div class="card-body white">
        <h4>- Framework :</h4>
        <div>
        - backend : Node JS, Django<br/>
        - FrontEnd : ReactJS <br/>
        </div>
        <h4>-Développement Blockchain :</h4>
        <div>
        - Solidity <br/>
        </div>
      </div>
    </div>,
    <div class="card cardcompetences"  >
      <div class="card-body white">
        <h4>- Création d'APIs</h4>
        <h4>- Framework :</h4>
        <div>
        - NodeJS<br/>
        - Django<br/>
        - Symfony<br/>
        </div>
        <h4>- Langages :</h4>
        <div>
        - Golang<br/>
        - PHP<br/>
        </div>
        <h4>- Bases de données :</h4>
        <div>
        - SQL<br/>
        - NoSQL<br/>
        - FireBase<br/>
        </div>
      </div>
    </div>,
    <></>
  ]



  return (
    <div className="App">
      <NavBar />
      <div className="profile">
        <img src={photo} alt="profile picture" width="15%"/>
        <div className="title-text">
          <h1 className="yellow">Damien Drozd</h1>
          <h2 className="white">Developpeur web 3.0</h2>
        </div>
      </div>
      <hr class="solid"></hr>
      <div className="resume white">
        Je suis actuellement en deuxième année de Bachelor Informatique, et je suis à la recherche d’un poste en alternance pour une durée de 3 ans et d’un stage d’une durée minimale de 6 semaines.
        Passionné d’informatique et de nouvelles technologies, de nature curieuse, je passe beaucoup de temps à acquérir de nouvelles connaissances, et à me perfectionner dans divers domaines. J’aime également apprendre en autodidacte, bien que je reste tout à fait polyvalent pour le travail en équipe, et adaptable à toutes situations.
        {competencesId}
      </div>


      

      <div className="competences">
        <div className="card card-skills">
          <div class="card-body skillname" onclick="() => setCompetencesId(1)">
            <h3 className="yellow">FrontEnd</h3>
            <img src={frontend} alt="frontend" width="60%"/> <br/>
            <button type="button" class="btn btn-warning btn-skills" onClick={() => (setCompetencesId(0))}>Voir plus</button>
          </div>
          
        </div>
        <div className="card card-skills">
          <div class="card-body skillname">
            <h3 className="yellow">Blockchain</h3>
            <img src={blockchain} alt="blockchain" width="70%"/> <br/>
            <button type="button" class="btn btn-warning btn-skills" onClick={() => (setCompetencesId(1))}>Voir plus</button>
          </div>
          
        </div>
        <div className="card card-skills">
          <div class="card-body skillname">
            <h3 className="yellow">Backend</h3>
            <img src={backend} alt="backend" width="60%"/> <br/>
            <button type="button" class="btn btn-warning btn-skills" onClick={() => (setCompetencesId(2))}>Voir plus</button>
          </div>
        </div>
      </div>

      {tab[competencesId]}
      <div className="experience">
        <h2 className="titreSecondaire yellow">Expériences</h2>
        <table className="table-bio white">
          <tr className="newLign">
            <th className="date">
              <div> 
                2022<br/>
                Mars - Juillet
              </div>
              <div>
                Paris
              </div>
            </th>
            <th className="right-column">
              <h3>CDD: Nomad Gallery</h3>
              <h4>Développeur Web/solidity</h4>
              <div>
                React/Solidity : Réalisation d’une DAPP en pour déployer des NFTs.<br/>
                Python : génération par script python de metadatas et générateur d’images
                à partir d’assets.<br/>
                Développement du site web / Référencement <br/>
              </div>
            </th>
          </tr>
          <tr className="newLign">
            <th className="date">
              <div> 
                2019<br/>
                Juillet - Aout
              </div>
              <div>
                Massy
              </div>
            </th>
            <th className="right-column">
              <h3>CDI: Burger King</h3>
              <h4>Équipier Polyvallent</h4>
            </th>
          </tr>
        </table>
      </div>


      <div className="experience">
        <h2 className="titreSecondaire yellow">Formation</h2>
        <table className="table-bio white">
          <tr className="newLign">
            <th className="date">
              <div> 
                2020 - 2025
              </div>
              <div>
                Nanterre
              </div>
            </th>
            <th className="right-column">
              <h3>Préparation Mastère Informatique – 3ème année</h3>
              <h4>Paris Ynov Campus</h4>
            </th>
          </tr>
          <tr className="newLign">
            <th className="date">
              <div> 
                2018 - 2019
              </div>
              <div>
                Villebon-Sur Yvette
              </div>
            </th>
            <th className="right-column">
              <h3>Diplôme Baccalauréat Scientifique spécialité Physique Chimie</h3>
              <h4>Lycée Ile De France</h4>
            </th>
          </tr>
        </table>
      </div>

      <div className="technique">
        <h2 className="titreSecondaire yellow">Langues parlées</h2>
        <p className="parag white"> 
          • Français : Langue maternelle <br/>
          • Anglais : Courant <br/>
          • Langue des signes : Bilingue <br/>
        </p>
      </div>

      <div className="technique">
        <h2 className="titreSecondaire yellow">Loisirs</h2>
        <p className="parag white"> 
          • Scoutisme : Scouts Unitaires de France durant 10 ans<br/>
          • Montage de pc : Montage et réparations de plusieurs ordinateurs<br/>
          • Découverte de la Blockchain/trading<br/>
        </p>
      </div>
      <div className="technique white">
        <h2 className="titreSecondaire yellow">CV</h2>
        <div className="profile">
        <img src={cv} width="70%" alt="CV Damien Drozd"/>
        </div>
      </div>


    </div>
  );
}

export default About;
 