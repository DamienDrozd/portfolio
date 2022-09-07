import React, { Component, useState } from "react";
import image1 from "../media/Image3.jpg";
import image2 from "../media/Image4.jpg";
import image3 from "../media/Image5.png";
import image4 from "../media/Image6.png";
import image5 from "../media/Image7.png";
import image6 from "../media/Image8.png";
import image7 from "../media/Image9.png";
import image8 from "../media/Image10.png";
import image9 from "../media/Image11.png";
import image10 from "../media/Image12.png";

export default function Article2() {
    return(
        <>
            <div className="texte">
                <h1 className="title yellow">Article 1 Création d’un NFT :</h1>
                <div className="paragraphe">
                    <p>
                        Pour ma première mission, je devais réaliser la collection de NFT à partir du fichier 3D que l’équipe m’avait fourni.
                    </p>
                    <div className="image">
                        <img src={image1} alt="image1" width="30%"/>
                        <p></p>
                    </div>
                    {/* gif 1 */}

                    <div className="image">
                        <img src={image2} alt="image2" width="30%"/>
                        <p></p>
                    </div>
                </div>
                <div className="paragraphe">
                    <p>
                        Pour réaliser la mission qui m’a été donné je commence par effectuer des recherches pour la création d’un NFT. Je suis tombé sur plusieurs solutions :
                    </p>
                    {/* tableau */}
                    <p>
                        J’ai finalement opté pour la deuxième option qui nous permet d’être plus libre avec la création des NFTs, et également d’automatiser leurs créations, ce que nous verrons dans un second temps.
                    </p>
                </div>
                <div className="paragraphe">
                    <p>
                        Afin de créer un NFT, il faut commencer par réfléchir aux metadata (en français métadonnées).
                    </p>
                    <p>
                        Selon l’université d’Oxford, les métadonnées sont des données qui renseignent sur l’état d’autres données et permettent la compréhension de leur structure. Cela permettra entre autres de savoir comment y accéder ou comment les interpréter. Les métadonnées synthétisent des informations élémentaires sur les données <br/> 
                        Si l’on prend l’exemple d’un document Microsoft Word, les métadonnées sont ; la taille du fichier, sa date de création, le nom de l’auteur, la date des différents changements ou le nombre total de modifications. On peut aussi compter le titre, les étiquettes et les commentaires.<br/>
                        Dans le cadre des NFTs, les métadonnées jouent un rôle très important. En effet les fichier métadonnées résolvent un problème financier et technique : il est impossible d’héberger des fichiers volumineux sur une blockchain. Par exemple un film d’1h30 en 1080p pèse entre 2 et 4 Go. le média Gemini estime qu’héberger 1 Go de data sur la blockchain Ethereum couterait environ 17,500 ETH. A l’heure actuelle, la valeur de ETH est de 1800 $ ça reviendrait à un cout de 31 000 000$ pour 1 Go. <br/>
                        Pour contrer ce problème, le token NFT qui est inscrit dans la Blockchain va être relié directement au fichier metadata réalisé en JSON (JavaScript Object Notation). Ce fichier va pointer vers l’url de l’artwork que l’on souhaite en NFT mais contient également les autres informations du NFT : Par exemple, si on souhaite faire un NFT d’une image, le fichier metadata va contenir l’url de l’image stockée mais également tous les autres paramètres du NFT (son nom, sa description, son créateur…). <br/>
                        Le standard de réalisation des fichier metadata est le format JSON.<br/>
                        Le fichier metadata est stocké à l’intérieur du smart contract sous le paramètre URI (Universal Resource Identifier). On ne peut pas héberger directement le fichier JSON dans la blockchain, les coûts de réalisation du NFT seraient trop élevé. Le paramètre URI pointe alors directement vers l’url du fichier metadata.<br/> 
                        L’achat d’un NFT n’est donc pas l’achat d’un artwork mais plutôt l’achat d’un certificat d’authenticité de cet artwork.<br/>

                    </p>
                    <p> 
                        Voici le fichier que j’ai utilisé pour réaliser les metadata. <br/>
                        <div className="image">
                            <img src={image3} alt="image3" width="30%"/>
                            <p></p>
                        </div>
                        On peut y retrouver les paramètres de notre NFT : <br/>
                        {/* tableau 2 */}
                    </p>
                    <p> 
                        Les metadata ainsi que les medias des NFT sont hébergés hors de la blockchain, sur un service similaire à Google Drive. Pour les NFTs on a tendance à utiliser IPFS est un système distribué de fichiers pair à pair qui ne dépend pas de serveurs centralisés. L’objectif de ce système est de décentraliser la distribution de fichiers. <br/>
                        <div className="image">
                            <img src={image4} alt="image4" width="30%"/>
                            <p></p>
                        </div>
                         Ce système a également pour objectif de résoudre les problèmes de http (Tous les fichiers sont centralisés dans les serveurs et sont vulnérables aux crashs et aux attaques DDOS. Les conséquences de ces vulnérabilités sont les vols de données, les fuites ou bien la perte de ces données). <br/>

                    </p>
                    <p>
                        Pour ajouter des fichiers sur IPFS, il faut télécharger l’application IPFS puis ajouter les fichiers que l’on souhaite dessus. Ensuite il faut récupérer l’adresse des fichiers uploadés et l’ajouter dans les metadata. <br/>
                        <div className="image">
                            <img src={image5} alt="image5" width="30%"/>
                            <p></p>
                        </div>
                        Vous pouvez retrouver plus d’informations à propos d’ipfs <a href="https://cryptoast.fr/interplanetary-file-system-ipfs-reseau-partage-fichiers-web-3/" >ici</a> <br/>
                        
                    </p>
                    <p>
                        Pour pouvoir créer le NFT à partir du smart contract, il faut installer metamask. <br/>
                        Metamask est un wallet (portefeuille) de cryptodevises basé sur la machine virtuelle Ethereum (Ethereum Virtual Machine). Il est donc compatible avec n’importe quelle Blockchain basé sur Ether. Afin d’installer metamask, il suffit de télécharger l’extension sur le navigateur de son choix et de créer un compte.  <br/>
                        Déploiement du smart contract : On utilise L’IDE Remix pour cela : <br/>
                        Remix est un IDE en ligne qui permet de simplement lancer et déployer des applications sur la blockchain. Ici pour tester nous n’allons pas lancer le smart contract sur la blockchain classique mais plutôt sur une blockchain de test. <br/>
                        Un testnet est un réseau alternatif d'une blockchain servant d'environnement bac à sable pour que les développeurs puissent mettre à l'épreuve leur code avant le déploiement sur le mainnet. <br/>
                        Nous allons utiliser la testnet Rinkeby <br/>
                        Pour utiliser la blockchain de test, il faut récupérer des Ethers de test.  <br/>
                        <div className="image">
                            <img src={image6} alt="image6" width="30%"/>
                            <p></p>
                        </div>
                    </p>
                    <p>
                        <a href="https://www.rinkeby.io/#faucet">Site web de Rinkeby</a> <br/>
                        Il suffit d’entrer l’addresse d’un compte metamask sur le site de rinkeby pour avoir accès à des Ethers sur cette Blockchain. Ces tokens n’ont aucune valeur et permettent juste de tester des smart contract avant leur déploiement. <br/>
                        Le token est paramétré lors de la création du smart contract. <br/>
                        Un smart contract est l'équivalent informatique d'un contrat traditionnel. Cependant, à la différence d'un contrat traditionnel, dont l'exécution est régie par un cadre juridique, celle du smart contract ne nécessite l'intervention d'aucun tiers de confiance et est, en tant que protocole, régie par le code informatique. <br/>
                        Le smart contract s'appuie sur la technologie blockchain pour sécuriser, rendre infalsifiables les termes et les conditions de son exécution. <br/>
                        Il faut donc créer le smart contract puis le déployer sur la blockchain. <br/>
                        Etant donné que les NFT utilisent la blockchain Ethereum pour fonctionner, le smart contract doit être rédigé en solidity. <br/>
                        Solidity est un langage de programmation, de type orienté objet, tout comme peuvent l'être le Javascript, le Python ou le C++. Il permet le développement de smart contract sur la blockchain Ethereum. <br/>
                        Pour ce projet j’ai donc dû apprendre les bases de solidity. Il y a un cours gratuit pour solidity très simple à prendre en main, il s’agit de <a href="https://cryptozombies.io/fr/">crypto zombie</a>. J’ai donc appris les bases sur ce site ce qui m’a permis de créer le smart contract du NFT, je me également inspiré des autres contracts de NFT que l’on peut trouver sur internet ou sur le site de Etherscan. En effet la plupart des gens qui réalisent des projet crypto mettent en libre accès leurs smarts contract sur Etherscan.  <br/>
                        Pour notre NFT, nous allons utiliser le token ERC-721. Le token ERC-721 a pour caractéristique le fait d’être unique, c’est ce qui fait la valeur du NFT. De plus ce token est impossible à contrefaire. Il a également la possibilité d’avoir une valeur différente d’un autre token du même smart contract. Cela permet par de créer une collection de NFTs avec plusieurs variantes d’artworks afin de créer de la rareté dans les NFTs par exemple. Cette caractéristique n’existe pas dans le cadre du token ERC-20, c’est pour cela qu’il faut bien choisir le token pour ce type de Projet. <br/>

                    </p>
                    <p>
                        Pour notre smart contract, les deux principales fonctions sont le constructor et la fonction de mint : <br/>
                            -	Le constructor est la partie qui va permettre de créer la collection de NFTs à partir du contract, on y retrouve tous les paramètres du NFT qui vont être entrés lors de la création du déploiement du contrat. <br/>
                            -	La fonction de mint permet de créer des NFT. Le lanceur du contract peut choisir de mint lui-même les NFT ou bien de laisser à l’acheteur  mint et donc de le lui laisser en payer les frais. <br/>
                        <div className="image">
                            <img src={image7} alt="image7" width="30%"/>
                            <p></p>
                        </div>

                    </p>
                    <p>
                        Une fois le contract créé, il faut le compiler sur l’IDE Remix, Remix est un IDE en ligne qui permet de compiler des smarts contracts sur la blochain Ethereum. <br/>
                        Ici on va le compiler sur la blockchain de test .  <br/>
                        <div className="image">
                            <img src={image8} alt="image8" width="30%"/>
                            <p></p>
                        </div>
                    </p>
                    <p>
                        Ensuite il faut déployer les NFTs sur la blockchain en entrant les paramètres du NFT (Le nom de la collection, le lien des fichiers metadatas uploadés sur IPFS et le symbole du NFT). <br/>
                        <div className="image">
                            <img src={image9} alt="image9" width="30%"/>
                            <p></p>
                        </div>
                    </p>
                    <p>
                        Puis il faut valider la transaction sur metamask et voilà, le NFT est déployé. <br/>
                        On peut ensuite visualiser la transaction sur Etherscan et voir le NFT sur le profil OpenSea lié au metamask. <br/>
                        <div className="image">
                            <img src={image10} alt="image10" width="30%"/>
                            <p></p>
                        </div>

                    </p>
                </div>
            </div>
        </>
    );
}