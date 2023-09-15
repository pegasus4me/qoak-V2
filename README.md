fix skeleton component sur le loading

communauité
    post 
        messages



routage dynamique qui prend en leaf le nom de la communauté creer par l'utilisateur 
    une fois sur la communauté la page.tsx affichera les post liés a cette communautés
        si je clique sur un post j'accede au /[postName] (route dynamique) qui va elle afficcher sur ça page.tsx le post en detal + l'espace commentaire ou les utilisateurs pourront commenter ce post en precision  


middleware check si il est connecte avant d'aller sur les routes /profile , /createCommunity , /createPost et de commenter

route action recuper l'user pour la communauté

CHANGELOG 15/07 => connection avec la creation de communauté
a finir => mise en relation avec les dynamic routes

CHANGELOG 18/7 => connection create a community
- a faire  : composants de la communauté en question ( ilot pour add une description , = seulement le createur peut faire ça, un header et la section input create a post dans cette commu)

CHANGELOG 24/07 +> verifier si la commu existe avant d'afficher du contenu

A FAIRE +++++++++++++++++++
CHANGELOG 28/07 +> ajouté room crée au createdsubreedit au user qui crée la communaiuté
faire la route qui enregistre un user dans la bdd subreddit joined une fois qu'il a cliqué sur le button join 

finalité enregister une creation et un rejoin sur la bdd

prochaine etape -----
creation de post sur chaque communité

CHANGELOG 29 +> comprendr eporquoi mes relations ne s'affichent pas sur mes retours de données

CHANGELOG 01/08 +> ajout createsubredit + join // a FAIRE crer un autre compte et tester si ça marche 
=> passer au post + faire front button join 

add react toast

CHANGELOG +> 8/8 > 
2 - regler ajout autrescommunautés avec ...
3- tester route join avec un autre compte

CHANGELOG => 
Subscriptions a voir

A FAIRE +> CORRIGER SET JOINED SI JE TROUVE LE ID DU SUBREDDIT EN QUESTION DANS LES SUBSCRIPTIONS DE L'USER
FIXER BUG JOIN DES SUBREDDIT SET OU CONNECT , IL FAUT QUE JE PUISSE REJOINDRE DES SUBREDDITS FACILEMENT

16/08
+>> REGLER ROUTE GET CHECK SI IL FOLLOW 


19/08 => page post add lib pour edit text + ajouter des photos + save tout ça a la bdd avec le lien de l'user + le subreddit 
=> add si le user est pas abbo a la commu ne pas avoir les droits de emettre un post

:: ilot info generales sur la communauté a droite

=> 25/08 : finir la page post = {
    faire la date de fab du post, 
    nom,
    nom commu,
    title 
    contenu : envever tags,
}
{
    chercher les post en function de la communauté et loop dessous + infinite scroll aussi 
}



09/09 mettre correctement a jours meme apres re render les votes 

15/09 === terminer redirect sur chaque post avec le subreddit ID + faire la meme chose pour la page user avec seulement ses post 