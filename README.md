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