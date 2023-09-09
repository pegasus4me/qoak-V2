import React from "react";

export default function Search() {
  // appel de la route permettant de prendre les mots entrées dans le input et chercher en temps reel dans la bdd
  // concerne si il y a des communautés qui match avec le mot entré
  return (
    <div className="">
      <input
        type="text"
        className="focus:outline-none"
        placeholder="Search Communities..."
      />
    </div>
  );
}

/**
 * rechercher par keywork = recuper toutes les commuanutés et 
 * des que l'utilisateur ecrtit une lettre j'affiche les commu qui comments 
 * par cette lettre la 
 */