import NavBar from "../components/navbar.component";
import Article1 from "../articles/1.introduction.component";
import Article2 from "../articles/2.article1.component";
import Article3 from "../articles/3.article2.component";
import Article4 from "../articles/4.article3.component";
import Article5 from "../articles/5.article4.component";
import Article6 from "../articles/6.conclusion.component";
import React, { useState, useEffect } from 'react';




function Article(){
  const [articleId, setArticleId] = useState(0);
  const [articleTab, setArticleTab] = useState([]);

  useEffect(() => {
    let id = window.location.search.substring(1).split("?");
    setArticleId(id[0].split("=")[1]-1);
    let tab = [<Article1/>, <Article2/>, <Article3/>, <Article4/>, <Article5/>, <Article6/>];
    setArticleTab(tab);
    disableButton();
  }, ([disableButton]));

  function disableButton() {
    if(articleId <= 0 ){
    document.getElementById("precedent").disabled = true;
    } else {
      document.getElementById("precedent").disabled = false;
    }

    if(articleId >= articleTab.length-1 ){
      document.getElementById("suivant").disabled = true;
    } else {  
      document.getElementById("suivant").disabled = false;
    }
  }
  

  return (
    <div className="App">
      <NavBar />
      {articleTab[articleId]}

      <div className="btn-articles">
        <button class="btn btn-warning btn-pages" id="precedent" onClick={() => {
          setArticleId(articleId-1);
          window.location.replace("/article?id="+(articleId));
        }}>Précédent</button>

        <button class="btn btn-warning btn-pages" id="suivant" onClick={() => {
          let id = articleId+2;
          setArticleId(id);
          window.location.replace("/article?id="+(id));
        }}>Suivant</button>
      </div>
    </div>  
  );
}

export default Article;
