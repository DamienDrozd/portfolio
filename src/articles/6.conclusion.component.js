import React  from "react";
import image1 from "../media/image040.jfif";
import image2 from "../media/image041.jfif";
import image3 from "../media/image042.jfif";
import image4 from "../media/image043.jfif";


export default function Article6() {
    return(
        <>
            <div className="texte">
                <h1 className="title yellow">Conclusion</h1>
                <div className="paragraphe">
                    <p>
                        Pour conclure ce stage, Samuel, mon référent de stage m’a emmené à une exposition ou la voiture était exposée. C’était une bonne conclusion à ce stage que de voir la voiture sur laquelle on avait travaillé durant plusieurs mois en vrai. 
                        <div className="image">
                            <img src={image1} alt="image1" width="50%"/>
                            <p></p>
                        </div>
                        <div className="image">
                            <img src={image2} alt="image2" width="50%"/>
                            <p></p>
                        </div>
                        <div className="image">
                            <img src={image3} alt="image3" width="50%"/>
                            <p></p>
                        </div>
                        <div className="image">
                            <img src={image4} alt="image4" width="50%"/>
                            <p></p>
                        </div>
                    </p>
                    <p>
                        Pour faire un bilan plus général, je suis vraiment heureux d’avoir pu participer à cette aventure avec toute l’équipe, l’ambiance de travail était très bonne.

                    </p>
                    <p>
                        J’ai pu découvrir et apprendre beaucoup de choses : 
                    </p>
                    <p>
                        J’ai pu observer tout le milieu de la blockchain et en comprendre ses enjeux. Beaucoup de personnes sont passionnés par cette technologie. Malheureusement, on retrouve beaucoup de gens qui ne sont la que pour faire du profit, parfois au dépend des autres. J’ai vu beaucoup d’arnaques et de gens mal intentionnés dans ce milieu. 

                    </p>
                    <p>
                        En termes d’apprentissage technique, j’ai pu m’initier au développement dans la blockchain, j’ai appris à utiliser le Solidity et le React. Après avoir découvert ces technologies et avoir appris le fonctionnement et les enjeux de la blockchain, je pense pouvoir affirmer que c’est dans ce domaine que je souhaite m’orienter. Je souhaite me spécialiser dans le développement de la blockchain. Le développement Solidity est un domaine sur lequel je compte me perfectionner dans les années à venir et j’aimerai également réaliser des projets personnels qui utilisent cette technologie.

                    </p>
                    <p>
                        D’un point de vue social, j’ai dû apprendre à réaliser des projets avec d’autres corps de métiers et intégrer leur façon de travailler dans mon processus. Le travail dans une entreprise était une première pour moi, j’en ai découvert l’univers.

                    </p>
                    <p>
                        Le point négatif est que le projet n’a pas pu aboutir. Les NFTs n’ont pas réussis à se vendre et quand nous sommes arrivés à la fin du stage, la mode des NFTs s’est essoufflé. Nous avons alors dû nous faire une raison, faire des NFTs pour les collectionneurs d’art n’est pas forcément à la portée de tous et la principale chose qui intéresse les acheteurs du milieu c’est la spéculation. Le projet aurait peut-être pu aboutir si nous avions eu un spécialiste de la communication dans l’équipe. Je pense que c’est sur ce point que nous aurions pu améliorer l’entreprise. En effet s’occuper nous même de la communication a été une tache fastidieuse et s’est révélée être un échec.

                    </p>
                    <p>
                        Pour finir sur une note positive, je continuerai de travailler avec les artistes de Nomad Gallery sur des projets de sites web et je suis très enthousiaste à l’idée de pouvoir poursuivre notre collaboration.
                    </p>
                </div>
            </div>
        </>
    );
}