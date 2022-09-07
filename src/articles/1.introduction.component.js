import React, { Component, useState } from "react";
import image1 from "../media/Image1.jpg";
import image2 from "../media/Image2.png";


export default function Article1() {
    return(
        <div>
            <div className="texte">
                <h1 className="title yellow">Contexte de l'entreprise</h1>
                <div className="paragraphe">
                <p>
                    J’ai été contacté par Samuel Dubreuil, un 3D designer afin de l’assister lors de la création de Nomad Gallery. C’est une jeune entreprise qui a pour objectif de digitaliser le travail physique d’artistes en collaborant avec eux. 
                </p>
                <p>Le processus de digitalisation se fait en plusieurs étapes :</p>
                <p>
                -	L’œuvre d’art est refaite en 3D par l’équipe de Nomad Gallery,<br/>
                -	Une collection NFT à partir de cette œuvre est créé.<br/>
                </p>

                </div>
                <div className="paragraphe">
                <p>
                    Le but de cette application est de permettre aux artistes de vendre leurs œuvres en NFT et de gagner de l’argent grâce à cela.Lorsque que je suis arrivé, l’entreprise venait d’être créée et j’étais là pour m’occuper de la partie développement de l’organisation. Je dois préciser que c’est la première fois que j’ai devais travailler sur des NFTs, ou plus généralement sur le développement dans la blockchain. Ainsi j’ai dû apprendre les bases en autodidacte en tant que seul développeur de l’entreprise. L’objectif final du stage est d’arriver à lancer correctement l’entreprise, c’est-à-dire vendre la première collection de NFTs et continuer de créer d’autres collections même après la fin du stage.  
                </p>
                </div>
                <div className="paragraphe">
                <p>
                L’équipe de Nomad Gallery est composée de trois membres :
                </p>
                <p>
                -	Samuel, le fondateur et artiste 3D<br/>
                -	Kevin, Artiste 3D lui aussi<br/>
                -	Ainsi que moi-même le développeur<br/>
                </p>
                </div>
                <div className="paragraphe">
                <p>
                La première mission de Nomad Gallery était de digitaliser la pièce principale de l’exposition de l’artiste Jean Ewen : « On the road of a nomad ».<br/>
                Jean Ewen, est un artiste pluridisciplinaire dont le travail se concentre autour de l'univers de la calligraphie qu’il décline sous plusieurs supports, medium et médias. Mêlant inspirations américaines et françaises. Cela lui permet de construire un cadre et des processus de création, qui ne ressemblent à ceux d’aucun autre artiste

                </p>
                </div>
                <div className="paragraphe">
                <p>
                On The Road of A Nomad est le dernier projet artistique de Jean Ewen.<br/>
                Pendant plus de six mois, Jean Ewen a gravé entièrement à la main une carcasse de Mercedes D240. Il délivre ici sa vision du nomadisme, une définition de la vie d'ici et d'ailleurs. La quête de la construction personnelle.
                Le photographe Louis Camelin accompagné de l'équipe de production cinématographique Sur Les Rails, l'ont suivi tout au long du processus, dans le but d’effectuer un travail documentaire.<br/>
                </p>
                </div>

                <div className="image">
                <img src={image1} alt="image1" width="30%"/>
                <p>Affiche de l'exposition « On the road of a nomad »</p>
                </div>
                <div className="image">
                <img src={image2} alt="image2" width="40%"/>
                <p>Mercedes D240 gravée par Jean Ewen</p>
                </div>

                <div className="paragraphe">
                Ici l’objectif de la mission de Nomad Gallery était de reproduire en 3D la voiture gravée de Jean Ewen, puis de réaliser un NFT de la voiture. J’ai été missionné afin de réaliser la collection de NFTs à partir du fichier 3D réalisé par les artistes 3D. 

                </div>
            </div>
        </div>
    );
}