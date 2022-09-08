import React, { Component, useState } from "react";
import image1 from "../media/image028.png";
import image2 from "../media/image029.png";
import image3 from "../media/image030.png";
import image4 from "../media/image031.png";
import image5 from "../media/image032.png";
import image6 from "../media/image033.png";
import image7 from "../media/image034.png";
import image8 from "../media/image035.png";
import image9 from "../media/image036.png";
import image10 from "../media/image037.png";
import image11 from "../media/image038.png";
import image12 from "../media/image039.png";



export default function Article5() {
    return(
        <>
          <div className="texte">
                <h1 className="title yellow">Article 4 Création d’un genérateur d’image NFT </h1>
                <div className="paragraphe">
                    <p>
                        Après l’échec du site de free mint, nous nous sommes concertés. Le projet a fait perdre beaucoup d’argent à l’entreprise et il n’y a pas eu de retour sur investissement : aucun NFT n’a été vendu. Nous sommes arrivés à la conclusion qu’il fallait changer de modèle économique. Nous avons donc pensé à revoir notre formule. Si un artiste veut collaborer avec nous, alors nous lui fournirons une collection de NFT entière et déployé sur la blockchain mais nous ne nous occuperons pas de la partie vente des NFTs. Cette façon de faire nous permettra alors d’être payé à chaque réalisation peu importe la réussite du projet ou non. De plus, cela va nous permettre de proposer d’autres services plus simples, comme une réalisation de sites web ou bien de la modélisation 3D. Ce genre de services peut être mis en place sur le site web de Nomad Gallery mais également sur Fiverr. Afin de proposer nos services sur ce site, nous avons commencé par créer un compte fiverr puis nous avons réfléchi à toutes les offres que nous pourrions proposer.<br/>
                        -	Création de collection de NFT basée sur un modèle 3D<br/>
                        -	Création d’un site de mint<br/>
                        -	Création et conception d’un fichier 3D<br/>
                        -	Création et déploiement d’une collection de 1000 NFTs uniques<br/>
                    </p>
                    <p>
                        Afin de pouvoir créer le service de collection de NFTs uniques, j’ai dû réaliser un générateur d’images à partir d’assets et la suite adapter le script précédent pour l’upload de NFTs pour l’intégrer dans celui-ci.<br/>
                        Pour cela il faut générer toutes les images puis les metadata à partir de ces images. <br/>
                        La première étape du générateur d’images est de calculer le nombre d’images maximum pouvant être réalisés avec les assets fournis.<br/>
                        Le script boucle sur le nombre d’attributs et calcul le nombre d’assets par attributs. Il suffit de multiplier le nombre d’assets dans chaque attribut et on obtient le nombre maximum d’images.<br/>
                        <div className="image">
                            <img src={image1} alt="image1" width="50%"/>
                            <p></p>
                        </div>
                    </p>
                    <p>
                        Le script va ensuite demander à l’utilisateur le nombres d’images qu’il veut générer puis va lancer la génération.<br/>
                        La création d’images commence par relier aléatoirement les attributs entre eux, les images ne sont pas encore créées mais on ajoute dans un tableau la liste de tous les attributs d’une image stockés dans un dictionnaire Python. Ce tableau servira par la suite à créer les metadata liés aux images. <br/>
                        Deux images identiques ne peuvent être crées, à chaque création d’images il y a une vérification dans le tableau que l’image est bien unique. Si le nombre d’assets est élevé, la probabilité de créer deux images identiques est faible mais si le nombre d’assets est limité alors ça peut être un problème. Il faut donc bien faire attention à ça.<br/>
                        <div className="image">
                            <img src={image2} alt="image2" width="50%"/>
                            <p></p>
                        </div>
                    </p>
                    <p>
                        A partir du tableau et des différents attributs, les images vont être créées. <br/>
                        Le programme boucle alors sur le tableau d’attributs et génère les images une par une. Il va alors chercher le nom des attributs dans les fichiers et fusionner les différents assets entre eux pour créer une image unique<br/>
                        <div className="image">
                            <img src={image3} alt="image3" width="50%"/>
                            <p></p>
                        </div>
                    </p>
                    <p>
                        Une fois les images créées, le programme demande à l’utilisateur s’il souhaite ajouter des metadata aux images précédemment crées. Les images vont alors être uploadés sur IPFS et les metadata vont être générés<br/>
                        <div className="image">
                            <img src={image4} alt="image4" width="20%"/>
                            <p></p>
                        </div>
                    </p>
                    <p>
                        Contrairement aux précédents fichiers de metadata, celui-ci devra contenir les attributs de l’image (dans l’exemple d’un personnage, on peut imaginer ajouter un attribut pour chaque vêtement).<br/>
                        Le programme réutilise alors le tableau d’attributs pour les ajouter dans les metasdata.<br/>
                        Ensuite la génération des fichiers est relativement similaire à celle réalisé dans le générateur précédent, il y a une boucle sur le nombre de NFTs crées et les metadata vont être générés avec tous les attributs sous la forme d’un fichier JSON.<br/>
                        <div className="image">
                            <img src={image5} alt="image5" width="40%"/>
                            <p></p>
                        </div>
                    </p>
                    <p>
                        Le script va upload les métadata sur IPFS, le script est similaire à celui réalisé précédemment dans l’article sur la création de la collection de NFTs. J’intègre donc la partie upload avec NFTstorage du script précédent dans le nouveau script.<br/>
                        <div className="image">
                            <img src={image6} alt="image6" width="50%"/>
                            <p></p>
                        </div>
                    </p>
                    <p>
                        Pour finir je dois recréer un site de mint pour la collection de NFTs. Le processus est identique à celui de l’article sur la création du site de mint. J’adapte donc le smart contract de la DAPP. Il n’y a aucuns paramètres à modifier.<br/>
                        Ensuite pour la DAPP j’ai repris le code précédemment réalisé, puis j’ai revu le design du site pour qu’il colle avec le design de collection NFT.<br/>
                        <div className="image">
                            <img src={image7} alt="image7" width="100%"/>
                            <p></p>
                        </div>
                    </p>
                    <p>
                        Pour le design, j’ai imaginé une webpage utilisant quelques images qui ont été générés afin d’avoir un rendu coloré.<br/>
                        Ensuite il ne reste plus qu’à upload le site sur FireBase comme réalisé précédemment.<br/>
                        Une fois le générateur réalisé, il faut créer le compte Fiverr et mettre des annonces. <br/>
                        <div className="image">
                            <img src={image8} alt="image8" width="100%"/>
                            <p></p>
                        </div>
                    </p>
                    <p>
                        J’en ai également profité pour mettre les artworks réalisés sur le site web. <br/>
                        <div className="image">
                            <img src={image9} alt="image9" width="50%"/>
                            <p></p>
                        </div>
                        <div className="image">
                            <img src={image10} alt="image10" width="50%"/>
                            <p></p>
                        </div>
                        <div className="image">
                            <img src={image11} alt="image11" width="50%"/>
                            <p></p>
                        </div>
                        <div className="image">
                            <img src={image12} alt="image12" width="50%"/>
                            <p></p>
                        </div>
                    </p>
                </div>
            </div>
        </>
    );
}