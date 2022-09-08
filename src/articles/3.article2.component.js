import React, { Component, useState } from "react";
import image1 from "../media/image013.png";
import image2 from "../media/image014.png";
import image3 from "../media/image015.png";
import image4 from "../media/image016.png";
import image5 from "../media/image017.png";


export default function Article3() {
    return(
        <>
        <div className="texte">
            <h1 className="title yellow">Création d’une collection de NFT :</h1>
            <div className="paragraphe">
                <p>
                    Le problème avec la manière de créer des NFT vu dans l’article 1 c’est que dans le cas où nous aurions besoin d’en créer un grand nombre, cela serait trop long et fastidieux. Pour une collection de plus de 100 NFTs c’est irréalisable. J’ai donc décidé d’automatiser la création de ces NFT.
                </p> 
                <p>
                    A partir du précédent projet il faut trouver un moyen d’automatiser la création de plusieurs NFT.<br/>
                    Nous choisirons d’utiliser un script Python qui va générer les metadata des fichiers NFT à partir d’une image et des paramètres choisit par l’utilisateur. <br/>
                    Python est le langage je connais le mieux avec JavaScript, Je l’utilise depuis maintenant 4 ans environ et c’est pour moi le moyen le plus simple et le plus adapté pour réaliser ce genre de projet qui contient de la manipulation de fichiers. Ça me fait gagner beaucoup de temps car je connais maintenant leurs syntaxes par cœur. Je l’ai par exemple utilisé au fil de l’année dernière pour le projet de YDays auquel j’étais inscrit : MyOwme (l’assistant vocal connecté).<br/>
                    Le script commence à générer les metadata sous forme de fichier JSON à partir des paramètres choisis par l’utilisateur. <br/>
                    <div className="image">
                        <img src={image1} alt="image1" width="50%"/>
                        <p></p>
                    </div>
                </p>
                <p>
                    Une fois les fichiers créés j’ajoute au script une partie pour pouvoir upload (télécharger) les fichiers automatiquement sur IPFS. Pour l’upload sur IPFS, j’utilise l’API de NFT Storage qui va se charger de le faire automatiquement.<br/>
                    Plus d’informations sur NFT Storage : <a href="https://nft.storage/">NFT Storage</a> <br/>
                    <div className="image">
                        <img src={image2} alt="image2" width="50%"/>
                        <p></p>
                    </div>

                </p>
                <p>
                    Une fois le script lancé, on peut alors retrouver tous les fichiers uploadés sur IPFS. <br/>
                    <div className="image">
                        <img src={image3} alt="image3" width="10%"/>
                        <p></p>
                    </div>
                    <div className="image">
                        <img src={image4} alt="image4" width="100%"/>
                        <p></p>
                    </div>
                </p>
                <p>
                    En ce qui concerne le smart contract, j’ai repris celui réalisé précédemment qui est également fonctionnel avec ce projet <br/>
                    Je déploie tous les NFT avec Remix comme pour l’exemple précèdent.  <br/>
                    On peut ensuite visualiser la transaction sur Etherscan et voir le NFT sur le profil OpenSea lié au metamask. Avec cette méthode nous avons pu réaliser l’entièreté de la collection de Jean Ewen sur Opensea.  <br/>
                    <div className="image">
                        <img src={image5} alt="image5" width="100%"/>
                        <p></p>
                    </div>
                </p>
                <p>
                    Je suis réellement content de cette partie car j’ai réussi sur le plan technique à créer toute la collection de NFTs en apprenant tous les usages de la création en autodidacte. J’ai également essayé de relier la création des metadata à la création des NFTs automatiquement, mais j’ai réalisé que c’était une mauvaise idée. En cas de problème, on ne peut pas vérifier le contenu des metadata et on pourrait alors perdre des frais de gaz (frais de transaction sur une blockchain). Cette méthode est un peu plus fastidieuse mais on évite les mauvaises surprises. L’autre problème est que l’utilisation des smart contract avec python est beaucoup plus compliqué que je ne le pensais. Il faut utiliser Django, un framework que je n’ai jamais utilisé. J’aurais donc dû apprendre à utiliser Django pour un résultat équivalent. <br/>

                </p>
            </div>
        </div>
        </>
    );
}