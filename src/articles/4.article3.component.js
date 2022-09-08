import React  from "react";
import image1 from "../media/image018.jpg";
import image2 from "../media/image019.jpg";
import image3 from "../media/image020.jpg";
import image4 from "../media/image021.jpg";
import image5 from "../media/image022.png";
import image6 from "../media/image023.png";
import image7 from "../media/image024.png";
import image8 from "../media/image025.png";
import image9 from "../media/image026.png";
import image10 from "../media/image027.png";
import gif1 from "../media/Gif2.gif";


export default function Article4() {
    return(
        <>
            <div className="texte">
                <h1 className="title yellow">Article 3 : Création du site de mint </h1>
                <div className="paragraphe">
                    <p>
                        La collection a bien été réalisée et les NFTs de la voiture ont bien été créés. C’est à ce moment que nous affronterons notre plus gros problème : nous n’arrivons pas à créer de l’engouement autour de ce projet. Dans le monde des NFTs, il y a 2 façons de créer de l’enthousiasme et de la valeur autour d’un projet : Le projet contient une base technique qui permet à celui qui achète le NFT de le rentabiliser. On peut prendre l’exemple des jeux Play To Earn qui permettent de gagner de l’argent en jouant à un jeu, le ticket d’entrée du jeu étant le NFT.<br/>
                        L’exemple le plus parlant est axii infinity : ce jeu est un clone de Pokémon basé sur la blockchain. Pour jouer à ce jeu il vous faudra acheter un premier monstre en NFT puis vous pourrez gagner de l’argent en gagnant des combats, il y a donc un intérêt financier à l’acheter. Le jeu rapporte de l’argent et le NFT est rentabilisé. De plus cela permet de financer le jeu.<br/>
                        L’autre manière de créer de l’engouement est de vendre un projet artistique. Le créateur Beeple arrive à vendre des NFTs à plusieurs millions d’euros en étant un artiste connu.<br/>
                        <div className="image">
                            <img src={image1} alt="image1" width="100%"/>
                            <p></p>
                        </div>
                    </p>
                    <p>
                        Pour tenter d’attirer la communauté de l’artiste nous avons pensé à un moyen de la faire de la promo sur ses réseaux sociaux, Samuel m’a emmené faire le tour de Paris pour prendre en photo la voiture dans différents endroits grâce à la réalité augmentée. Au début j’ai pensé à utiliser un filtre Instagram, l’application d’Instagram, spark AR studio est assez simple à utiliser mais le résultat n’était pas celui que j’espérai. Finalement Kevin de l’équipe a découvert qu’avec les derniers iPhones, il est possible d’utiliser des fichiers 3D en réalité augmentée très simplement. Nous avons utilisé cette méthode et nous avons posté les images sur Instagram. <br/>
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
                        Malgré la mise en ligne des photos, l’engouement autour du NFT dans la communauté de Jean Ewen ne prends pas <br/>
                        Le problème du projet Nomad Mercedes et que son créateur Jean Ewen n’est pas suffisamment connu et que sa communauté n’est pas réceptive à la mode des NFTs. <br/>
                        Nous avons donc essayé une nouvelle approche : Attirer les gens de la communauté Crypto. En recherchant les projets qui marchent sur Twitter, j’ai observé de nombreuses personnes qui mettent en places des plateformes de free mint, c’est-à-dire des plateformes ou les NFTs sont gratuits mais les frais de mint (création) sont à la charge de l’acheteur.<br/>
                        Après discussion avec le reste de l’équipe, nous avons pensé que si nous arrivions à créer de l’engouement autour de ces NFTs gratuits, nous pourrions créer une communauté qui seraient intéressés à l’idée de d’acheter nos NFTs. <br/>
                        Dans l’objectif de créer une communauté, j’ai créé un Discord pour nous permettre de donner les informations sur les projets à la communauté.<br/>
                        Ensuite il faut réaliser un site qui va permettre de mint gratuitement les NFTs.<br/>
                        L’avantage avec ce site est que les acheteurs iront eux même faire le mint du NFT, ils nous achètent le NFT au prix convenu et de plus ils payent les frais de mint. Ainsi dans le cas ou aucun NFT n’est vendu, nous n’aurons payé aucuns frais de gaz.<br/>
                        Pour le design, Samuel a imaginé ce logo de Nomad Gallery en feu, c’est ce logo que nous allons mettre à disposition en NFT sur le site de freemint. Pour les metadata j’utilise le générateur réalisé précédemment.<br/>
                        <div className="image">
                            <img src={gif1} alt="gif1" width="50%"/>
                            <p></p>
                        </div>
                    </p>
                    <p>
                        Finalement le smart contract est assez similaire au précedent, j’y ajoute des fonctions utilitaires. <br/>
                        Il faudra simplement appeler la fonction mint() du smart contract a chaque fois qu’un utilisateur souhaite mint un NFT. <br/>
                        Cette fois ci je vais déployer le NFT avec JavaScript en utilisant la bibliothèque HardHat, ça simplifie un peu le processus de Remix. <br/>
                        Il suffit de lancer ce script pour pouvoir déployer le NFT. Ensuite le script nous renvoie l’adresse du contrat. <br/>
                        <div className="image">
                            <img src={image5} alt="image5" width="50%"/>
                            <p></p>
                        </div>
                    </p>
                    <p>
                        Ensuite nous allons commencer à créer le site de mint, pour cela j’ai décidé d’utiliser React couplé avec la bibliothèque etherjs qui permet d’interagir avec un smart contract. <br/>
                        J’aurais pu utiliser un autre Framework pour le site de mint mais j’ai choisi ReactJS. C’est le framework le plus abouti en termes d’utilisation pour le web3 et c’est une technologie que je souhaite découvrir. Je précise que lors de ce projet, c’est la première fois que j’utilise React. C’est une totale découverte pour moi et je décide d’apprendre à utiliser ce framework en autodidacte. C’est assez déroutant pour moi, c’est la première fois que j’utilise réellement un framework FrontEnd. Avant ce projet j’avais du mal à faire une réelle distinction dans l’usage d’un framework frontend et d’un framework backend (nous avions déjà utilisé Symfony et Golang pour réaliser des sites web statiques).<br/>
                        Pour relier le smart contact avec le site, on utilise Etherjs :<br/>
                        En réalité avec React il existe deux bibliothèques pour le web 3, Etherjs et web3.js mais la bibliothèque Ether.js est plus complète, c’est pour cela que nous l’utiliserons. <br/>
                        La première fonction Fetch Data permet de récupérer toutes les informations concernant le smart contract que j’ai déployé précédemment. Elle prend en paramètre l’adresse du NFT et retourne plusieurs valeurs : <br/>
                        -	Le nombre maximum de NFTs pouvant être mint,<br/>
                        -	Le nombre de NFTs ayant été mint<br/>
                        -	L’adresse des metadatas uploadés sur IPFS<br/>
                        Ensuite elle retourne un objet contenant ces trois valeurs dans le hook d’état.<br/>
                        <div className="image">
                            <img src={image6} alt="image6" width="50%"/>
                            <p></p>
                    </div>
                    </p>
                    <p>
                        On affiche toutes ces valeurs dans le code HTML du composant. Le bouton va déclencher la fonction de mint. <br/>
                        <div className="image">
                            <img src={image7} alt="image7" width="50%"/>
                            <p></p>
                        </div>
                    </p>
                    <p>
                        La fonction de mint permet comme son nom l’indique de mint un NFT. Elle va utiliser la bibliothèque Etherjs pour récupérer les informations metamask de l’utilisateur puis lui proposer de mint le NFT, faisant ainsi le lien entre le metamask de l’utilisateur et la fonction mint du smart contract.<br/>
                        <div className="image">
                            <img src={image8} alt="image8" width="50%"/>
                            <p></p>
                        </div>
                    </p>
                    <p>
                        Ensuite j’ai dû trouver un moyen d’héberger le site, si possible gratuitement. J’ai utilisé FireBase pour cela :<br/>
                        Firebase est  un ensemble de services d'hébergement pour n'importe quel type d'application. Ce service permet d’héberger des bases de données en NoSQL gratuitement mais également des sites web. <br/>
                        <div className="image">
                            <img src={image9} alt="image9" width="40%"/>
                            <p></p>
                        </div>
                    </p>
                    <p>
                        Voilà le site de mint est maintenant prêt à être utilisé.  <br/>
                        <div className="image">
                            <img src={image10} alt="image10" width="100%"/>
                            <p></p>
                        </div>
                    </p>
                    <p>
                        <a href="https://nomad-gallery-burning.firebaseapp.com/">FreeMint NFT</a> <br/>
                        Après le lancement du site de mint nous avons essayé de le promouvoir sur différents réseaux sociaux mais rien à faire. Impossible de créer de l’engouement autour du projet. Avec du recul ce fut la partie la plus frustrante du stage, tout le travail était fait mais impossible d’avoir un retour sur investissement. Sans compter le fait que vers la fin du projet, la mode des NFTs a commencé à s’essouffler. Peut-être que si nous étions arrivés plus tôt sur le marché, le projet aurait pu prendre.<br/>
                    </p>
                </div>
            </div>
        </>
    );
}