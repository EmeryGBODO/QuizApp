

export const quizNodeExpress_facile = [
  {
    id: 1,
    code: false,
    question: "Qu'est-ce que Node.js ?",
    options: [
      "Un framework JavaScript pour le frontend",
      "Un moteur de base de données",
      "Un environnement d'exécution JavaScript côté serveur",
      "Une bibliothèque pour manipuler le DOM"
    ],
    answer: "Un environnement d'exécution JavaScript côté serveur",
    explanation: "Node.js permet d'exécuter du JavaScript en dehors du navigateur, notamment pour créer des serveurs et des applications backend."
  },
  {
    id: 2,
    code: false,
    question: "Quel module Node.js est utilisé pour créer un serveur HTTP ?",
    options: [
      "url",
      "http",
      "fs",
      "net"
    ],
    answer: "http",
    explanation: "Le module 'http' de Node.js permet de créer des serveurs HTTP de manière native, sans dépendances externes."
  },
  {
    id: 3,
    code: false,
    question: "À quoi sert Express.js ?",
    options: [
      "À interroger des bases de données",
      "À créer des interfaces graphiques",
      "À créer des applications web en simplifiant la gestion des routes et middlewares",
      "À compiler du code JavaScript"
    ],
    answer: "À créer des applications web en simplifiant la gestion des routes et middlewares",
    explanation: "Express est un framework minimaliste et flexible pour créer des applications web en Node.js, avec un système de routage puissant."
  },
  {
    id: 4,
    code: true,
    question: "Comment définit-on une route GET en Express ?",
    options: [
      "app.get('/route', callback)",
      "app.route('/route').get(callback)",
      "app.GET('/route', callback)",
      "server.get('/route', callback)"
    ],
    answer: "app.get('/route', callback)",
    explanation: "La méthode `app.get()` d'Express permet de gérer une requête HTTP GET vers une route spécifique."
  },
  {
    id: 5,
    code: true,
    question: "Quel middleware permet de parser les données JSON dans Express ?",
    options: [
      "express.urlencoded()",
      "express.text()",
      "express.json()",
      "bodyParser.text()"
    ],
    answer: "express.json()",
    explanation: "`express.json()` est un middleware intégré d'Express qui permet de parser le corps des requêtes en JSON."
  },
  {
    id: 6,
    code: false,
    question: "Comment gérer une erreur personnalisée dans Express ?",
    options: [
      "En utilisant un middleware avec 2 paramètres",
      "En utilisant try/catch dans chaque route",
      "En ajoutant une fonction avec 4 paramètres : err, req, res, next",
      "Express gère automatiquement toutes les erreurs"
    ],
    answer: "En ajoutant une fonction avec 4 paramètres : err, req, res, next",
    explanation: "Les middlewares de gestion d'erreur dans Express ont 4 arguments. C’est ce qui permet à Express de les reconnaître comme tels."
  },
  {
    id: 7,
    code: false,
    question: "Quel port est généralement utilisé en développement avec Express ?",
    options: [
      "3000",
      "80",
      "443",
      "8080"
    ],
    answer: "3000",
    explanation: "Le port 3000 est une convention largement utilisée en développement local avec Express."
  }
];
// export const quizNodeExpress = [
//   {
//     id: 1,
//     question: "Quelle commande permet d'exécuter un fichier JavaScript avec Node.js ?",
//     options: [
//       "node run file.js",
//       "node file.js",
//       "npm start file.js",
//       "nodejs file.js"
//     ],
//     answer: "node file.js",
//     explanation: "La commande `node file.js` exécute un fichier JavaScript à l'aide de l'environnement Node.js."
//   },
//   {
//     id: 2,
//     question: "Quel type de langage est JavaScript dans Node.js ?",
//     options: [
//       "Langage compilé",
//       "Langage interprété",
//       "Langage statique",
//       "Langage typé"
//     ],
//     answer: "Langage interprété",
//     explanation: "JavaScript est un langage interprété, même dans un environnement serveur comme Node.js."
//   },
//   {
//     id: 3,
//     question: "Quel est l'intérêt principal de Node.js ?",
//     options: [
//       "Manipuler le DOM",
//       "Créer des interfaces graphiques",
//       "Créer des applications serveur non bloquantes",
//       "Styliser des composants HTML"
//     ],
//     answer: "Créer des applications serveur non bloquantes",
//     explanation: "Node.js utilise un modèle événementiel et non bloquant, idéal pour les applications performantes et scalables."
//   },
//   {
//     id: 4,
//     question: "Quel mot-clé permet d’importer un module dans Node.js (CommonJS) ?",
//     options: [
//       "import",
//       "include",
//       "require",
//       "use"
//     ],
//     answer: "require",
//     explanation: "`require` est utilisé pour importer des modules dans l'environnement CommonJS de Node.js."
//   },
//   {
//     id: 5,
//     question: "Comment crée-t-on un serveur de base avec Express.js ?",
//     options: [
//       "express.createServer()",
//       "express.server()",
//       "express() + app.listen()",
//       "http.createServer(express)"
//     ],
//     answer: "express() + app.listen()",
//     explanation: "On initialise Express avec `express()` et on le fait écouter avec `app.listen()`."
//   },
//   {
//     id: 6,
//     question: "Que signifie REST dans une API RESTful ?",
//     options: [
//       "Rapid Execution of Service Tasks",
//       "Representational State Transfer",
//       "Remote Express Secure Transfer",
//       "Runtime Engine Standard Transfer"
//     ],
//     answer: "Representational State Transfer",
//     explanation: "REST est un style d'architecture basé sur la manipulation des ressources via des méthodes HTTP."
//   },
//   {
//     id: 7,
//     question: "Comment définit-on un middleware dans Express ?",
//     options: [
//       "app.middleware(fn)",
//       "app.route(fn)",
//       "app.use(fn)",
//       "app.handle(fn)"
//     ],
//     answer: "app.use(fn)",
//     explanation: "`app.use()` est utilisé pour enregistrer des middlewares dans Express."
//   },
//   {
//     id: 8,
//     question: "Quel module Node.js permet de lire un fichier ?",
//     options: [
//       "os",
//       "path",
//       "fs",
//       "file"
//     ],
//     answer: "fs",
//     explanation: "`fs` (file system) est le module de Node.js pour manipuler les fichiers."
//   },
//   {
//     id: 9,
//     question: "Quelle méthode Express permet de gérer une requête POST ?",
//     options: [
//       "app.send()",
//       "app.post()",
//       "app.push()",
//       "app.getPost()"
//     ],
//     answer: "app.post()",
//     explanation: "`app.post()` permet de définir un gestionnaire pour les requêtes HTTP POST."
//   },
//   {
//     id: 10,
//     question: "Quelle propriété contient les paramètres d'URL dans Express ?",
//     options: [
//       "req.body",
//       "req.query",
//       "req.params",
//       "req.url"
//     ],
//     answer: "req.params",
//     explanation: "`req.params` permet d'accéder aux paramètres définis dans l'URL (par exemple `/user/:id`)."
//   },
//   {
//     id: 11,
//     question: "Comment Express sait qu'un middleware est une erreur ?",
//     options: [
//       "Il utilise la méthode catch()",
//       "Il vérifie s’il y a try/catch",
//       "Il reçoit 4 paramètres dont 'err'",
//       "Il utilise async/await"
//     ],
//     answer: "Il reçoit 4 paramètres dont 'err'",
//     explanation: "Un middleware de gestion d'erreur dans Express reçoit `err, req, res, next`."
//   },
//   {
//     id: 12,
//     question: "Que fait `npm install` sans autre argument ?",
//     options: [
//       "Installe tous les packages listés dans package.json",
//       "Met à jour Node.js",
//       "Crée un fichier package-lock.json",
//       "Désinstalle tous les modules"
//     ],
//     answer: "Installe tous les packages listés dans package.json",
//     explanation: "La commande `npm install` installe toutes les dépendances listées dans le fichier `package.json`."
//   },
//   {
//     id: 13,
//     question: "Comment envoyer une réponse JSON dans Express ?",
//     options: [
//       "res.write(json)",
//       "res.json(data)",
//       "res.sendText(data)",
//       "res.data(json)"
//     ],
//     answer: "res.json(data)",
//     explanation: "`res.json()` est utilisé pour envoyer des objets JSON directement au client."
//   },
//   {
//     id: 14,
//     question: "Quelle méthode Express sert à rediriger vers une autre URL ?",
//     options: [
//       "res.redirect()",
//       "res.route()",
//       "res.forward()",
//       "res.jump()"
//     ],
//     answer: "res.redirect()",
//     explanation: "`res.redirect()` redirige une requête HTTP vers une autre URL."
//   },
//   {
//     id: 15,
//     question: "Quel module permet de gérer les chemins de fichiers dans Node.js ?",
//     options: [
//       "path",
//       "fs",
//       "dir",
//       "url"
//     ],
//     answer: "path",
//     explanation: "`path` est un module natif de Node.js pour gérer et construire des chemins de fichiers."
//   },
//   {
//     id: 16,
//     question: "À quoi sert `next()` dans un middleware Express ?",
//     options: [
//       "À arrêter la requête",
//       "À passer au middleware suivant",
//       "À relancer le serveur",
//       "À envoyer une réponse au client"
//     ],
//     answer: "À passer au middleware suivant",
//     explanation: "`next()` est une fonction qu’on appelle pour passer le contrôle au middleware suivant."
//   },
//   {
//     id: 17,
//     question: "Comment écouter sur le port 3000 avec Express ?",
//     options: [
//       "app.listen(3000)",
//       "app.run(3000)",
//       "express.listen(3000)",
//       "server.listen(3000)"
//     ],
//     answer: "app.listen(3000)",
//     explanation: "`app.listen(port)` démarre le serveur Express sur le port donné."
//   },
//   {
//     id: 18,
//     question: "Comment appelle-t-on une fonction qui intercepte les requêtes avant les routes ?",
//     options: [
//       "Contrôleur",
//       "Routeur",
//       "Handler",
//       "Middleware"
//     ],
//     answer: "Middleware",
//     explanation: "Les middlewares permettent d'intercepter et de modifier les requêtes avant qu'elles n'atteignent les routes."
//   },
//   {
//     id: 19,
//     question: "Quel type d’architecture suit souvent Node.js avec Express ?",
//     options: [
//       "MVC",
//       "MVVM",
//       "Layered OSI",
//       "Monolithique uniquement"
//     ],
//     answer: "MVC",
//     explanation: "L’architecture MVC (Modèle-Vue-Contrôleur) est souvent utilisée avec Express pour structurer les projets."
//   },
//   {
//     id: 20,
//     question: "Quelle commande désinstalle un module avec NPM ?",
//     options: [
//       "npm delete express",
//       "npm remove express",
//       "npm uninstall express",
//       "npm drop express"
//     ],
//     answer: "npm uninstall express",
//     explanation: "La commande `npm uninstall <package>` supprime une dépendance du projet et du fichier package.json."
//   }
// ];

// const quizNodeExpress = [
//   {
//     id: 1,
//     question: "Quel objet global permet d'accéder aux arguments passés en ligne de commande à Node.js ?",
//     options: [
//       "process.args",
//       "global.argv",
//       "process.argv",
//       "node.arguments"
//     ],
//     answer: "process.argv",
//     explanation: "`process.argv` contient les arguments passés au script Node.js via la ligne de commande."
//   },
//   {
//     id: 2,
//     question: "Quel mot-clé permet de rendre un module réutilisable dans Node.js (CommonJS) ?",
//     options: [
//       "export default",
//       "module.exports",
//       "exports.default",
//       "require.export"
//     ],
//     answer: "module.exports",
//     explanation: "`module.exports` permet d'exporter un module dans l’environnement CommonJS de Node.js."
//   },
//   {
//     id: 3,
//     question: "Quel est le rôle du module 'path' dans Node.js ?",
//     options: [
//       "Gérer les connexions réseau",
//       "Créer des routes Express",
//       "Gérer les chemins de fichiers",
//       "Lire les fichiers JSON"
//     ],
//     answer: "Gérer les chemins de fichiers",
//     explanation: "Le module `path` fournit des utilitaires pour manipuler les chemins de fichiers de manière portable."
//   },
//   {
//     id: 4,
//     question: "Quel module permet de créer une application CLI interactive ?",
//     options: [
//       "chalk",
//       "prompt",
//       "inquirer",
//       "axios"
//     ],
//     answer: "inquirer",
//     explanation: "`inquirer` permet de créer des interfaces CLI interactives (questions, menus, etc.)."
//   },
//   {
//     id: 5,
//     question: "Quelle commande permet d'installer un module uniquement pour le développement ?",
//     options: [
//       "npm install <module> --global",
//       "npm install <module> --save-dev",
//       "npm dev-install <module>",
//       "npm install --test-only"
//     ],
//     answer: "npm install <module> --save-dev",
//     explanation: "L’option `--save-dev` enregistre la dépendance dans `devDependencies`."
//   },
//   {
//     id: 6,
//     question: "Comment répondre avec un fichier statique en Express ?",
//     options: [
//       "res.static()",
//       "res.sendFile()",
//       "res.sendHTML()",
//       "res.file()"
//     ],
//     answer: "res.sendFile()",
//     explanation: "`res.sendFile(path)` permet d'envoyer un fichier statique comme réponse."
//   },
//   {
//     id: 7,
//     question: "Comment lire un fichier JSON synchronement dans Node.js ?",
//     options: [
//       "fs.readJsonSync()",
//       "require('fichier.json')",
//       "fs.readFile('fichier.json')",
//       "fs.loadSync()"
//     ],
//     answer: "require('fichier.json')",
//     explanation: "Dans Node.js, on peut charger un fichier JSON directement avec `require()`."
//   },
//   {
//     id: 8,
//     question: "Quelle méthode Express permet de définir plusieurs middlewares pour une route ?",
//     options: [
//       "app.route()",
//       "app.use()",
//       "app.all()",
//       "app.get('/path', mw1, mw2, handler)"
//     ],
//     answer: "app.get('/path', mw1, mw2, handler)",
//     explanation: "Express accepte plusieurs middlewares en paramètres dans une route."
//   },
//   {
//     id: 9,
//     question: "Que retourne la méthode `res.status()` ?",
//     options: [
//       "Un booléen",
//       "Une chaîne",
//       "L'objet réponse (`res`) pour chaînage",
//       "Un code d’erreur"
//     ],
//     answer: "L'objet réponse (`res`) pour chaînage",
//     explanation: "`res.status()` retourne l’objet `res`, permettant de chaîner avec `res.send()` ou `res.json()`."
//   },
//   {
//     id: 10,
//     question: "Quel package est souvent utilisé pour gérer les variables d'environnement ?",
//     options: [
//       "dotenv",
//       "env-handler",
//       "envconfig",
//       "config.js"
//     ],
//     answer: "dotenv",
//     explanation: "`dotenv` charge les variables d’environnement à partir d’un fichier `.env` dans `process.env`."
//   },
//   {
//     id: 11,
//     question: "Quelle méthode est utilisée pour intercepter toutes les requêtes, peu importe la méthode HTTP ?",
//     options: [
//       "app.get('*')",
//       "app.use('*')",
//       "app.all('*')",
//       "app.route('*')"
//     ],
//     answer: "app.all('*')",
//     explanation: "`app.all()` intercepte toutes les méthodes HTTP (GET, POST, etc.) sur une route."
//   },
//   {
//     id: 12,
//     question: "Qu'est-ce que le module 'cluster' permet de faire dans Node.js ?",
//     options: [
//       "Gérer les fichiers en parallèle",
//       "Faire du clustering de base de données",
//       "Créer plusieurs processus Node.js pour mieux utiliser les CPU",
//       "Charger plusieurs routes Express en parallèle"
//     ],
//     answer: "Créer plusieurs processus Node.js pour mieux utiliser les CPU",
//     explanation: "Le module `cluster` permet d’exploiter les cœurs du processeur pour améliorer les performances."
//   },
//   {
//     id: 13,
//     question: "Quel est l'équivalent asynchrone de `fs.readFileSync()` ?",
//     options: [
//       "fs.readFile()",
//       "fs.asyncRead()",
//       "fs.load()",
//       "fs.fetchFile()"
//     ],
//     answer: "fs.readFile()",
//     explanation: "`fs.readFile()` est la version asynchrone de `fs.readFileSync()` et utilise une callback."
//   },
//   {
//     id: 14,
//     question: "Pourquoi utilise-t-on souvent `next()` dans un middleware Express ?",
//     options: [
//       "Pour passer à la route suivante",
//       "Pour déclencher une réponse",
//       "Pour relancer le serveur",
//       "Pour retourner une erreur"
//     ],
//     answer: "Pour passer à la route suivante",
//     explanation: "`next()` permet de passer au middleware ou à la route suivante dans la chaîne."
//   },
//   {
//     id: 15,
//     question: "Quelle est la méthode Express pour gérer une erreur 404 personnalisée ?",
//     options: [
//       "app.notFound()",
//       "app.error404()",
//       "Une route '*' avec res.status(404)",
//       "app.get('404')"
//     ],
//     answer: "Une route '*' avec res.status(404)",
//     explanation: "Une route en fin de chaîne avec `app.use('*', ...)` permet de gérer les 404 manuellement."
//   },
//   {
//     id: 16,
//     question: "Comment lancer automatiquement un projet Node.js pendant le développement ?",
//     options: [
//       "Avec `npm run auto`",
//       "En utilisant `nodemon`",
//       "En important auto-run.js",
//       "En tapant `node index.js` toutes les minutes"
//     ],
//     answer: "En utilisant `nodemon`",
//     explanation: "`nodemon` redémarre automatiquement l'application quand les fichiers changent."
//   },
//   {
//     id: 17,
//     question: "Quel middleware est requis pour parser les données d’un formulaire HTML ?",
//     options: [
//       "express.json()",
//       "express.urlencoded()",
//       "bodyParser.text()",
//       "form.parse()"
//     ],
//     answer: "express.urlencoded()",
//     explanation: "`express.urlencoded()` permet de parser les données encodées en `x-www-form-urlencoded`."
//   },
//   {
//     id: 18,
//     question: "Quelle méthode permet de définir une variable d’environnement temporaire ?",
//     options: [
//       "process.setEnv()",
//       "env.config()",
//       "NODE_ENV=production node app.js",
//       "require('dotenv').env()"
//     ],
//     answer: "NODE_ENV=production node app.js",
//     explanation: "Tu peux définir une variable temporaire en ligne de commande avant `node`."
//   },
//   {
//     id: 19,
//     question: "Quel est le rôle de `package-lock.json` ?",
//     options: [
//       "Verrouiller la version de Node.js",
//       "Suivre les fichiers modifiés",
//       "Garder une trace précise des versions installées",
//       "Définir les scripts de démarrage"
//     ],
//     answer: "Garder une trace précise des versions installées",
//     explanation: "`package-lock.json` garantit que les mêmes versions seront utilisées à l’installation suivante."
//   },
//   {
//     id: 20,
//     question: "Quelle méthode permet de gérer une erreur dans un `try/catch` asynchrone ?",
//     options: [
//       "await.catch()",
//       "try...await...catch",
//       "try { await ... } catch (err) { ... }",
//       "Promise.try()"
//     ],
//     answer: "try { await ... } catch (err) { ... }",
//     explanation: "On peut capturer les erreurs asynchrones avec `try/catch` autour d’un `await`."
//   }
// ];

// const quizNodeExpress = [
//   {
//     id: 1,
//     question: "Quelle balise est utilisée pour écrire du code PHP ?",
//     options: [
//       "<?php ?>",
//       "<php> </php>",
//       "<? ?>",
//       "<script php> </script>"
//     ],
//     answer: "<?php ?>",
//     explanation: "`<?php ?>` est la balise standard pour ouvrir et fermer du code PHP."
//   },
//   {
//     id: 2,
//     question: "Quelle fonction est utilisée pour afficher du texte en PHP ?",
//     options: [
//       "show()",
//       "display()",
//       "echo",
//       "print_r()"
//     ],
//     answer: "echo",
//     explanation: "`echo` est une structure de langage pour afficher des chaînes ou des variables à l'écran."
//   },
//   {
//     id: 3,
//     question: "Quelle est la syntaxe correcte pour déclarer une variable en PHP ?",
//     options: [
//       "let x = 10;",
//       "int x = 10;",
//       "$x = 10;",
//       "x := 10;"
//     ],
//     answer: "$x = 10;",
//     explanation: "Toutes les variables en PHP commencent par un `$`, suivi du nom de la variable."
//   },
//   {
//     id: 4,
//     question: "Quelle fonction PHP permet d’arrêter complètement l’exécution du script ?",
//     options: [
//       "stop()",
//       "exit()",
//       "die()",
//       "break()"
//     ],
//     answer: "die()",
//     explanation: "`die()` (ou `exit()`) termine immédiatement le script PHP en cours."
//   },
//   {
//     id: 5,
//     question: "Quelle superglobale contient les données envoyées par un formulaire en méthode POST ?",
//     options: [
//       "$_POST",
//       "$_FORM",
//       "$_REQUEST",
//       "$_SEND"
//     ],
//     answer: "$_POST",
//     explanation: "`$_POST` est une superglobale contenant toutes les données envoyées via méthode POST."
//   },
//   {
//     id: 6,
//     question: "Comment inclure un fichier externe en PHP ?",
//     options: [
//       "include 'fichier.php';",
//       "import 'fichier.php';",
//       "load('fichier.php');",
//       "use fichier.php;"
//     ],
//     answer: "include 'fichier.php';",
//     explanation: "`include` ou `require` permet d'ajouter le contenu d'un fichier externe dans le script courant."
//   },
//   {
//     id: 7,
//     question: "Quelle est la différence entre `include` et `require` ?",
//     options: [
//       "`require` génère une erreur fatale, `include` une alerte",
//       "Il n'y a aucune différence",
//       "`include` est plus rapide",
//       "`require` ne fonctionne pas en local"
//     ],
//     answer: "`require` génère une erreur fatale, `include` une alerte",
//     explanation: "Si le fichier est introuvable, `include` émet un warning, `require` arrête l'exécution du script."
//   },
//   {
//     id: 8,
//     question: "Quelle fonction permet de vérifier si une variable est définie ?",
//     options: [
//       "isset()",
//       "defined()",
//       "exists()",
//       "issetted()"
//     ],
//     answer: "isset()",
//     explanation: "`isset()` retourne true si la variable est définie et non null."
//   },
//   {
//     id: 9,
//     question: "Comment créer une fonction en PHP ?",
//     options: [
//       "function nom() {}",
//       "fn nom() {}",
//       "def nom() {}",
//       "fonction nom() {}"
//     ],
//     answer: "function nom() {}",
//     explanation: "La syntaxe correcte est `function nom() {}`."
//   },
//   {
//     id: 10,
//     question: "Quelle fonction permet de compter le nombre d’éléments dans un tableau ?",
//     options: [
//       "count()",
//       "sizeof()",
//       "length()",
//       "array_length()"
//     ],
//     answer: "count()",
//     explanation: "`count()` retourne le nombre d’éléments dans un tableau."
//   },
//   {
//     id: 11,
//     question: "Comment accéder à la première valeur d’un tableau `$arr` ?",
//     options: [
//       "$arr[1]",
//       "$arr[0]",
//       "arr[0]",
//       "$arr->first()"
//     ],
//     answer: "$arr[0]",
//     explanation: "En PHP, les tableaux commencent à l’indice 0, donc la première valeur est `$arr[0]`."
//   },
//   {
//     id: 12,
//     question: "Que retourne la fonction `isset($_GET['id'])` si la clé 'id' n'existe pas ?",
//     options: [
//       "true",
//       "false",
//       "0",
//       "null"
//     ],
//     answer: "false",
//     explanation: "`isset()` retourne `false` si la clé n’existe pas ou que sa valeur est `null`."
//   },
//   {
//     id: 13,
//     question: "Quelle est la portée d’une variable déclarée à l’intérieur d’une fonction ?",
//     options: [
//       "Globale",
//       "Locale",
//       "Publique",
//       "Protégée"
//     ],
//     answer: "Locale",
//     explanation: "Les variables déclarées dans une fonction sont accessibles uniquement dans cette fonction."
//   },
//   {
//     id: 14,
//     question: "Quelle structure permet de répéter du code tant qu’une condition est vraie ?",
//     options: [
//       "if",
//       "for",
//       "while",
//       "switch"
//     ],
//     answer: "while",
//     explanation: "`while` est utilisée pour exécuter un bloc de code tant qu’une condition est vraie."
//   },
//   {
//     id: 15,
//     question: "Comment définir une constante en PHP ?",
//     options: [
//       "const PI = 3.14;",
//       "define('PI', 3.14);",
//       "$PI = 3.14;",
//       "constant PI = 3.14;"
//     ],
//     answer: "define('PI', 3.14);",
//     explanation: "`define()` est la fonction classique pour déclarer une constante en PHP natif."
//   },
//   {
//     id: 16,
//     question: "Quelle est la valeur par défaut de `$_SESSION` avant l’appel de `session_start()` ?",
//     options: [
//       "null",
//       "vide",
//       "non défini",
//       "false"
//     ],
//     answer: "non défini",
//     explanation: "`$_SESSION` n’est pas accessible tant que `session_start()` n’a pas été appelé."
//   },
//   {
//     id: 17,
//     question: "Quelle fonction est utilisée pour envoyer un en-tête HTTP en PHP ?",
//     options: [
//       "header()",
//       "setHeader()",
//       "http_header()",
//       "send()"
//     ],
//     answer: "header()",
//     explanation: "`header()` permet d’envoyer des en-têtes HTTP avant tout affichage."
//   },
//   {
//     id: 18,
//     question: "Quelle extension de fichier est utilisée pour un fichier PHP ?",
//     options: [
//       ".ph",
//       ".html",
//       ".php",
//       ".phtml"
//     ],
//     answer: ".php",
//     explanation: "L’extension officielle d’un fichier PHP est `.php`."
//   },
//   {
//     id: 19,
//     question: "Comment vérifier si un fichier existe en PHP ?",
//     options: [
//       "exists('file.txt')",
//       "file_exists('file.txt')",
//       "check_file('file.txt')",
//       "is_file('file.txt')"
//     ],
//     answer: "file_exists('file.txt')",
//     explanation: "`file_exists()` vérifie si un fichier ou un dossier est présent sur le disque."
//   },
//   {
//     id: 20,
//     question: "Comment se nomme l’outil en ligne de commande de PHP pour exécuter un script ?",
//     options: [
//       "php-run",
//       "php",
//       "php_exec",
//       "run-php"
//     ],
//     answer: "php",
//     explanation: "`php` est la commande CLI pour exécuter un script en terminal (ex: `php index.php`)."
//   }
// ];

// export const quizNodeExpress_facile = [
//   {
//     id: 1,
//     question: "Quelle est la sortie de `echo '3' + 2 * '2 chats';` ?",
//     options: ["7", "9", "3 chats2", "Erreur"],
//     answer: "7",
//     explanation: "PHP convertit les chaînes en nombres jusqu'au premier caractère non numérique. Donc '3' + 2 * '2' = 3 + 4 = 7."
//   },
//   {
//     id: 2,
//     question: "Quelle est la portée d’une variable déclarée avec `static` dans une fonction ?",
//     options: ["Globale", "Locale persistante", "Superglobale", "Partagée entre scripts"],
//     answer: "Locale persistante",
//     explanation: "`static` garde la valeur entre plusieurs appels à la fonction, mais reste locale à celle-ci."
//   },
//   {
//     id: 3,
//     question: "Que retourne `empty(0)` en PHP ?",
//     options: ["true", "false", "null", "Erreur"],
//     answer: "true",
//     explanation: "`empty()` retourne `true` pour les valeurs considérées comme vides, y compris 0."
//   },
//   {
//     id: 4,
//     question: "Peut-on utiliser `isset($var['cle'])` si `$var` n’est pas défini ?",
//     options: ["Oui", "Non", "Erreur", "Seulement en PHP 8+"],
//     answer: "Oui",
//     explanation: "`isset()` ne déclenche pas d'erreur si la variable n'existe pas. Elle retournera `false` discrètement."
//   },
//   {
//     id: 5,
//     question: "Quelle est la différence entre `==` et `===` en PHP ?",
//     options: [
//       "Aucune différence",
//       "`==` compare la valeur, `===` compare valeur et type",
//       "`===` est plus rapide",
//       "`==` fait une comparaison logique"
//     ],
//     answer: "`==` compare la valeur, `===` compare valeur et type",
//     explanation: "`==` fait une comparaison avec conversion de type, `===` compare sans conversion."
//   },
//   {
//     id: 6,
//     question: "Quelle est la sortie de `var_dump(null == false)` ?",
//     options: ["bool(true)", "bool(false)", "null", "Erreur"],
//     answer: "bool(true)",
//     explanation: "Piège ! `null == false` retourne `true` car PHP les considère comme équivalents faiblement."
//   },
//   {
//     id: 7,
//     question: "Comment PHP gère-t-il les variables passées par référence ?",
//     options: [
//       "Avec `ref()`",
//       "Avec `*`",
//       "Avec `&`",
//       "Les références ne sont pas supportées"
//     ],
//     answer: "Avec `&`",
//     explanation: "`&` permet de lier une variable à une autre par référence."
//   },
//   {
//     id: 8,
//     question: "Que retourne `isset($a)` après `unset($a)` ?",
//     options: ["true", "false", "null", "Erreur"],
//     answer: "false",
//     explanation: "Après `unset()`, la variable est supprimée. `isset()` retournera donc `false`."
//   },
//   {
//     id: 9,
//     question: "Que retourne `is_nan('NaN')` ?",
//     options: ["true", "false", "NaN", "Erreur"],
//     answer: "false",
//     explanation: "`is_nan()` vérifie une vraie valeur `NaN` mathématique, pas la chaîne 'NaN'."
//   },
//   {
//     id: 10,
//     question: "Quelle est la sortie de `echo true + true + false;` ?",
//     options: ["1", "2", "truefalse", "Erreur"],
//     answer: "2",
//     explanation: "En PHP, `true` = 1 et `false` = 0 lors de l’arithmétique."
//   },
//   {
//     id: 11,
//     question: "Que fait `array_merge(['a'=>1], ['a'=>2])` ?",
//     options: ["Renvoie ['a'=>2]", "Renvoie ['a'=>1, 'a'=>2]", "Erreur", "Fusionne en conservant le 1er"],
//     answer: "Renvoie ['a'=>2]",
//     explanation: "Les clés identiques sont écrasées par celles de droite."
//   },
//   {
//     id: 12,
//     question: "Quelle fonction permet de convertir une chaîne JSON en tableau PHP ?",
//     options: [
//       "json_to_array()",
//       "parse_json()",
//       "json_decode()",
//       "json_parse_array()"
//     ],
//     answer: "json_decode()",
//     explanation: "`json_decode($json, true)` transforme un JSON en tableau associatif PHP."
//   },
//   {
//     id: 13,
//     question: "Quelle méthode permet de tester si une classe hérite d'une autre ?",
//     options: [
//       "inherits()",
//       "instanceof",
//       "extends()",
//       "childOf()"
//     ],
//     answer: "instanceof",
//     explanation: "`instanceof` permet de tester si un objet est issu d’une classe ou d’une classe parent."
//   },
//   {
//     id: 14,
//     question: "Que fait `explode('', 'abc')` ?",
//     options: [
//       "['a','b','c']",
//       "['abc']",
//       "Erreur",
//       "['','a','b','c','']"
//     ],
//     answer: "Erreur",
//     explanation: "`explode()` ne peut pas avoir un séparateur vide. Cela génère une `ValueError` en PHP 8."
//   },
//   {
//     id: 15,
//     question: "Une classe peut-elle hériter de plusieurs classes en PHP ?",
//     options: ["Oui", "Non", "Seulement avec `use`", "En PHP 8+"],
//     answer: "Non",
//     explanation: "PHP ne supporte pas l'héritage multiple. On utilise des traits (`use`) pour cela."
//   },
//   {
//     id: 16,
//     question: "Comment accéder à une constante de classe sans créer d'objet ?",
//     options: [
//       "$obj::CONST",
//       "MyClass::CONST",
//       "MyClass->CONST",
//       "const MyClass"
//     ],
//     answer: "MyClass::CONST",
//     explanation: "On accède à une constante statique avec `::`, sans instancier la classe."
//   },
//   {
//     id: 17,
//     question: "Comment PHP gère-t-il les erreurs fatales en PHP 7+ ?",
//     options: [
//       "Elles plantent toujours le script",
//       "Elles peuvent être catchées avec `Throwable`",
//       "Il faut `try/catch(ErrorException)`",
//       "On ne peut pas les attraper"
//     ],
//     answer: "Elles peuvent être catchées avec `Throwable`",
//     explanation: "Depuis PHP 7, les `Error` peuvent être attrapées via `try/catch(Throwable)`."
//   },
//   {
//     id: 18,
//     question: "Quelle différence entre `include_once` et `require_once` ?",
//     options: [
//       "Aucune",
//       "`require_once` stoppe le script en cas d’erreur",
//       "`include_once` est plus rapide",
//       "`require_once` peut être appelé plusieurs fois"
//     ],
//     answer: "`require_once` stoppe le script en cas d’erreur",
//     explanation: "`require_once` interrompt l’exécution si le fichier est introuvable, contrairement à `include_once`."
//   },
//   {
//     id: 19,
//     question: "Quelle fonction permet de supprimer tous les éléments d’un tableau ?",
//     options: [
//       "unset($tab)",
//       "array_clear()",
//       "$tab = []",
//       "array_reset()"
//     ],
//     answer: "$tab = []",
//     explanation: "`unset($tab)` détruit la variable. `$tab = []` vide le tableau sans le supprimer."
//   },
//   {
//     id: 20,
//     question: "Est-il possible d’utiliser `continue` dans un `switch` ?",
//     options: ["Oui", "Non", "Uniquement dans une boucle", "Oui en PHP 7+"],
//     answer: "Uniquement dans une boucle",
//     explanation: "`continue` dans un `switch` seul produit une erreur ; il faut qu’il soit dans une boucle."
//   },
//   {
//     id: 21,
//     question: "Quelle est la valeur de `gettype([])` ?",
//     options: [
//       "array",
//       "object",
//       "null",
//       "resource"
//     ],
//     answer: "array",
//     explanation: "`gettype([])` retourne `array`, même si le tableau est vide."
//   },
//   {
//     id: 22,
//     question: "Comment savoir si une clé existe dans un tableau, même si sa valeur est `null` ?",
//     options: [
//       "isset()",
//       "array_key_exists()",
//       "in_array()",
//       "key_exists()"
//     ],
//     answer: "array_key_exists()",
//     explanation: "`isset()` retourne false si la valeur est `null`, mais `array_key_exists()` vérifie la présence de la clé."
//   },
//   {
//     id: 23,
//     question: "Quelle est la valeur de `true === 1` en PHP ?",
//     options: [
//       "true",
//       "false",
//       "null",
//       "Erreur"
//     ],
//     answer: "false",
//     explanation: "`===` compare type et valeur. `true` est booléen, `1` est entier → donc false."
//   },
//   {
//     id: 24,
//     question: "Que retourne `strpos('hello', 'l')` ?",
//     options: ["2", "1", "true", "false"],
//     answer: "2",
//     explanation: "`strpos()` retourne la première position (index 0-based) du caractère trouvé."
//   },
//   {
//     id: 25,
//     question: "Peut-on instancier une interface en PHP ?",
//     options: [
//       "Oui",
//       "Non",
//       "Uniquement si elle est abstraite",
//       "En PHP 8+"
//     ],
//     answer: "Non",
//     explanation: "Les interfaces ne peuvent pas être instanciées. Elles doivent être implémentées par des classes."
//   },
//   {
//     id: 26,
//     question: "Quelle est la différence principale entre `public`, `private` et `protected` ?",
//     options: [
//       "`private` est accessible partout, `protected` dans la classe, `public` seulement dans les enfants",
//       "`public` est accessible partout, `private` seulement dans la classe, `protected` dans la classe et ses enfants",
//       "`protected` est plus sécurisé que `private`",
//       "Il n'y a aucune différence réelle"
//     ],
//     answer: "`public` est accessible partout, `private` seulement dans la classe, `protected` dans la classe et ses enfants",
//     explanation: "`private` limite l’accès à la classe elle-même, `protected` autorise l’accès aussi aux classes filles, `public` est accessible partout."
//   },
//   {
//     id: 27,
//     question: "Quelle est la sortie du code suivant : `echo (new class { public function test() { return 1; } })->test();`",
//     options: ["Erreur", "1", "test", "null"],
//     answer: "1",
//     explanation: "C’est une **classe anonyme**. Elle est instanciée immédiatement et la méthode `test()` est appelée."
//   },
//   {
//     id: 28,
//     question: "Que fait `final` devant une classe ?",
//     options: [
//       "Elle ne peut pas contenir d’héritage",
//       "Elle ne peut pas être étendue",
//       "Ses méthodes sont toutes privées",
//       "Elle ne peut pas contenir d’attribut"
//     ],
//     answer: "Elle ne peut pas être étendue",
//     explanation: "Une classe `final` ne peut pas être héritée. On peut toujours l’instancier directement."
//   },
//   {
//     id: 29,
//     question: "Quelle est la différence entre `static` et une propriété d’instance ?",
//     options: [
//       "Aucune, elles sont toutes accessibles avec `->`",
//       "`static` est partagée entre toutes les instances",
//       "Une propriété d’instance est toujours constante",
//       "Une propriété `static` ne peut pas changer de valeur"
//     ],
//     answer: "`static` est partagée entre toutes les instances",
//     explanation: "Une propriété `static` appartient à la classe et non aux objets. Elle est donc partagée."
//   },
//   {
//     id: 30,
//     question: "Quel mot-clé empêche une méthode d’être redéfinie dans une classe enfant ?",
//     options: ["private", "abstract", "final", "sealed"],
//     answer: "final",
//     explanation: "La méthode `final` ne peut pas être surchargée dans une classe qui hérite."
//   },
//   {
//     id: 31,
//     question: "Peut-on accéder à une propriété `private` depuis une autre instance de la même classe ?",
//     options: ["Oui", "Non", "Seulement avec `friend`", "En PHP 8+"],
//     answer: "Oui",
//     explanation: "Une propriété `private` est accessible à toutes les instances **de la même classe**, même si ce n’est pas `$this`."
//   },
//   {
//     id: 32,
//     question: "Que fait une méthode `__destruct()` ?",
//     options: [
//       "Elle initialise l'objet",
//       "Elle nettoie automatiquement les valeurs après instanciation",
//       "Elle est appelée quand l'objet est détruit ou libéré",
//       "Elle transforme l'objet en tableau"
//     ],
//     answer: "Elle est appelée quand l'objet est détruit ou libéré",
//     explanation: "`__destruct()` est appelée automatiquement quand l’objet est libéré (fin de script ou `unset`)."
//   },
//   {
//     id: 33,
//     question: "Quelle est la différence entre `interface` et `abstract class` ?",
//     options: [
//       "Une interface peut contenir du code",
//       "Une classe abstraite peut avoir des propriétés et du code",
//       "Une interface peut être instanciée",
//       "Une classe abstraite ne peut pas être héritée"
//     ],
//     answer: "Une classe abstraite peut avoir des propriétés et du code",
//     explanation: "Les interfaces ne contiennent **aucune implémentation**. Une classe abstraite peut en contenir partiellement."
//   },
//   {
//     id: 34,
//     question: "Comment appeler une méthode statique d’une classe sans créer d'objet ?",
//     options: [
//       "`new Class()->method()`",
//       "`Class::method()`",
//       "`Class->method()`",
//       "`method(Class)`"
//     ],
//     answer: "`Class::method()`",
//     explanation: "La syntaxe `Class::method()` appelle une méthode statique directement."
//   },
//   {
//     id: 35,
//     question: "Quel est le rôle de `__get($prop)` en PHP orienté objet ?",
//     options: [
//       "Accéder à des propriétés privées ou protégées dynamiquement",
//       "Créer un raccourci vers une méthode",
//       "Transformer la valeur d’un tableau",
//       "Lire automatiquement des fichiers externes"
//     ],
//     answer: "Accéder à des propriétés privées ou protégées dynamiquement",
//     explanation: "`__get()` est une méthode magique appelée quand on tente d’accéder à une propriété non accessible normalement."
//   }
// ];

export const quizPhpPoo = [
  {
    id: 1,
    code: false,
    question: "Quelle est la différence principale entre `public`, `private` et `protected` ?",
    options: [
      "`private` est accessible partout, `protected` dans la classe, `public` seulement dans les enfants",
      "`public` est accessible partout, `private` seulement dans la classe, `protected` dans la classe et ses enfants",
      "`protected` est plus sécurisé que `private`",
      "Il n'y a aucune différence réelle"
    ],
    answer: "`public` est accessible partout, `private` seulement dans la classe, `protected` dans la classe et ses enfants",
    explanation: "`private` limite l’accès à la classe elle-même, `protected` autorise l’accès aussi aux classes filles, `public` est accessible partout."
  },
  {
    id: 2,
    question: "Quelle est la sortie du code suivant : `echo (new class { public function test() { return 1; } })->test();`",
    options: ["Erreur", "1", "test", "null"],
    answer: "1",
    explanation: "C’est une **classe anonyme**. Elle est instanciée immédiatement et la méthode `test()` est appelée."
  },
  {
    id: 3,
    question: "Que fait `final` devant une classe ?",
    options: [
      "Elle ne peut pas contenir d’héritage",
      "Elle ne peut pas être étendue",
      "Ses méthodes sont toutes privées",
      "Elle ne peut pas contenir d’attribut"
    ],
    answer: "Elle ne peut pas être étendue",
    explanation: "Une classe `final` ne peut pas être héritée. On peut toujours l’instancier directement."
  },
  {
    id: 4,
    question: "Quelle est la différence entre `static` et une propriété d’instance ?",
    options: [
      "Aucune, elles sont toutes accessibles avec `->`",
      "`static` est partagée entre toutes les instances",
      "Une propriété d’instance est toujours constante",
      "Une propriété `static` ne peut pas changer de valeur"
    ],
    answer: "`static` est partagée entre toutes les instances",
    explanation: "Une propriété `static` appartient à la classe et non aux objets. Elle est donc partagée."
  },
  {
    id: 5,
    question: "Quel mot-clé empêche une méthode d’être redéfinie dans une classe enfant ?",
    options: ["private", "abstract", "final", "sealed"],
    answer: "final",
    explanation: "La méthode `final` ne peut pas être surchargée dans une classe qui hérite."
  },
  {
    id: 6,
    question: "Peut-on accéder à une propriété `private` depuis une autre instance de la même classe ?",
    options: ["Oui", "Non", "Seulement avec `friend`", "En PHP 8+"],
    answer: "Oui",
    explanation: "Une propriété `private` est accessible à toutes les instances **de la même classe**, même si ce n’est pas `$this`."
  },
  {
    id: 7,
    question: "Que fait une méthode `__destruct()` ?",
    options: [
      "Elle initialise l'objet",
      "Elle nettoie automatiquement les valeurs après instanciation",
      "Elle est appelée quand l'objet est détruit ou libéré",
      "Elle transforme l'objet en tableau"
    ],
    answer: "Elle est appelée quand l'objet est détruit ou libéré",
    explanation: "`__destruct()` est appelée automatiquement quand l’objet est libéré (fin de script ou `unset`)."
  },
  {
    id: 8,
    question: "Quelle est la différence entre `interface` et `abstract class` ?",
    options: [
      "Une interface peut contenir du code",
      "Une classe abstraite peut avoir des propriétés et du code",
      "Une interface peut être instanciée",
      "Une classe abstraite ne peut pas être héritée"
    ],
    answer: "Une classe abstraite peut avoir des propriétés et du code",
    explanation: "Les interfaces ne contiennent **aucune implémentation**. Une classe abstraite peut en contenir partiellement."
  },
  {
    id: 9,
    question: "Comment appeler une méthode statique d’une classe sans créer d'objet ?",
    options: [
      "`new Class()->method()`",
      "`Class::method()`",
      "`Class->method()`",
      "`method(Class)`"
    ],
    answer: "`Class::method()`",
    explanation: "La syntaxe `Class::method()` appelle une méthode statique directement."
  },
  {
    id: 10,
    question: "Quel est le rôle de `__get($prop)` en PHP orienté objet ?",
    options: [
      "Accéder à des propriétés privées ou protégées dynamiquement",
      "Créer un raccourci vers une méthode",
      "Transformer la valeur d’un tableau",
      "Lire automatiquement des fichiers externes"
    ],
    answer: "Accéder à des propriétés privées ou protégées dynamiquement",
    explanation: "`__get()` est une méthode magique appelée quand on tente d’accéder à une propriété non accessible normalement."
  }
];

export const quizNodeExpress_Intermediaire = [
  {
    id: 1,
    question: "Quelle méthode magique est invoquée lors de l'accès à une propriété inaccessible d'un objet ?",
    options: ["__get", "__set", "__call", "__isset"],
    answer: "__get",
    explanation: "`__get` est appelée quand on tente d'accéder à une propriété non accessible (inexistante ou non publique)."
  },
  {
    id: 2,
    question: "Quelle est la différence entre une interface et une classe abstraite en PHP ?",
    options: [
      "Une interface peut contenir des propriétés",
      "Une classe abstraite ne peut pas avoir de constructeur",
      "Une interface ne peut contenir que des méthodes sans implémentation",
      "Il n'y a aucune différence"
    ],
    answer: "Une interface ne peut contenir que des méthodes sans implémentation",
    explanation: "Les interfaces ne contiennent que des déclarations de méthodes publiques sans corps."
  },
  {
    id: 3,
    question: "Que permet le mot-clé `final` en PHP ?",
    options: [
      "Empêche une classe d'être instanciée",
      "Empêche une méthode d'être redéfinie ou une classe d'être héritée",
      "Déclare une constante",
      "Définit une variable statique"
    ],
    answer: "Empêche une méthode d'être redéfinie ou une classe d'être héritée",
    explanation: "`final` appliqué à une classe empêche l’héritage, à une méthode empêche la redéfinition."
  },
  {
    id: 4,
    question: "Quel est l'intérêt principal des traits en PHP ?",
    options: [
      "Ils permettent l'héritage multiple",
      "Ils remplacent les interfaces",
      "Ils permettent de créer des objets dynamiquement",
      "Ils définissent des types de données"
    ],
    answer: "Ils permettent l'héritage multiple",
    explanation: "Les traits permettent de partager du code entre classes sans héritage hiérarchique."
  },
  {
    id: 5,
    question: "Quelle méthode magique est invoquée lorsqu’un objet est utilisé comme une chaîne ?",
    options: ["__call", "__get", "__invoke", "__toString"],
    answer: "__toString",
    explanation: "`__toString` est appelée lorsqu’un objet est converti en chaîne, par exemple via `echo $objet`."
  },
  {
    id: 6,
    question: "Quelle est la portée par défaut d'une propriété dans une classe PHP ?",
    options: ["private", "protected", "public", "static"],
    answer: "public",
    explanation: "Si aucune visibilité n’est précisée, PHP assigne `public` par défaut."
  },
  {
    id: 7,
    question: "Qu’est-ce que le late static binding (liaison tardive statique) en PHP ?",
    options: [
      "Une méthode de chargement automatique des classes",
      "Une liaison de méthode à l’exécution basée sur `self`",
      "Utilisation de `static::` pour appeler des méthodes dans un contexte d'héritage",
      "Un moyen d’exécuter du code après destruction de l’objet"
    ],
    answer: "Utilisation de `static::` pour appeler des méthodes dans un contexte d'héritage",
    explanation: "`static::` permet de référencer la classe réellement appelée à l'exécution, contrairement à `self::`."
  },
  {
    id: 8,
    question: "Que se passe-t-il si une classe implémente une interface sans en définir toutes les méthodes ?",
    options: [
      "Une erreur fatale se produit",
      "PHP ignore l’interface",
      "PHP génère un warning",
      "La classe devient abstraite automatiquement"
    ],
    answer: "Une erreur fatale se produit",
    explanation: "Les interfaces doivent être implémentées intégralement, sinon PHP génère une erreur fatale."
  },
  {
    id: 9,
    question: "Comment appelle-t-on une classe instanciée dans une autre classe via le constructeur ?",
    options: ["Aggregation", "Composition", "Héritage", "Clonage"],
    answer: "Composition",
    explanation: "La composition consiste à utiliser un objet comme propriété d’un autre pour former un tout fonctionnel."
  },
  {
    id: 10,
    question: "À quoi sert l’opérateur `instanceof` en PHP ?",
    options: [
      "Comparer deux objets",
      "Tester si une classe hérite d’une interface",
      "Vérifier qu’un objet est d’un type donné",
      "Créer une instance d’une classe dynamiquement"
    ],
    answer: "Vérifier qu’un objet est d’un type donné",
    explanation: "`instanceof` vérifie qu’un objet est une instance d’une classe ou interface donnée."
  },
  {
    id: 11,
    question: "Peut-on instancier une classe abstraite ?",
    options: ["Oui", "Non", "Oui si elle a un constructeur", "Uniquement via une interface"],
    answer: "Non",
    explanation: "Une classe abstraite ne peut être instanciée directement ; elle sert de modèle pour ses enfants."
  },
  {
    id: 12,
    question: "Qu’est-ce que le polymorphisme en PHP ?",
    options: [
      "La surcharge des fonctions",
      "L'utilisation de plusieurs classes avec la même interface",
      "L'encapsulation des objets",
      "La duplication des objets"
    ],
    answer: "L'utilisation de plusieurs classes avec la même interface",
    explanation: "Le polymorphisme permet d’utiliser différents objets via une même interface ou classe de base."
  },
  {
    id: 13,
    question: "Quel mot-clé permet d'accéder à la classe parente ?",
    options: ["base", "super", "parent", "static"],
    answer: "parent",
    explanation: "`parent::` permet d’appeler une méthode ou un constructeur de la classe parente."
  },
  {
    id: 14,
    question: "Quelle méthode magique est appelée lors de la sérialisation d’un objet ?",
    options: ["__sleep", "__wakeup", "__serialize", "__destruct"],
    answer: "__sleep",
    explanation: "`__sleep` est invoquée juste avant la sérialisation pour définir quelles propriétés seront sauvegardées."
  },
  {
    id: 15,
    question: "Quelle est la différence entre `static` et `self` ?",
    options: [
      "`static` est dynamique, `self` est statique",
      "`self` utilise le late binding",
      "Il n'y a aucune différence",
      "`self` accède toujours au parent"
    ],
    answer: "`static` est dynamique, `self` est statique",
    explanation: "`static::` respecte la classe réelle à l’exécution (late binding), `self::` est lié à la classe définie."
  },
  {
    id: 16,
    question: "Quelle est la bonne syntaxe pour utiliser un trait dans une classe ?",
    options: ["use MonTrait();", "include MonTrait;", "trait MonTrait;", "use MonTrait;"],
    answer: "use MonTrait;",
    explanation: "Pour inclure un trait dans une classe, on utilise le mot-clé `use`."
  },
  {
    id: 17,
    question: "Les propriétés statiques appartiennent :",
    options: [
      "À chaque instance séparément",
      "À la classe et sont partagées",
      "Seulement aux classes abstraites",
      "Uniquement aux interfaces"
    ],
    answer: "À la classe et sont partagées",
    explanation: "Les propriétés statiques sont partagées entre toutes les instances et accessibles via la classe."
  },
  {
    id: 18,
    question: "Quel est l'effet de `clone` sur un objet ?",
    options: [
      "Il copie les valeurs uniquement des propriétés publiques",
      "Il copie uniquement les références",
      "Il crée une nouvelle instance avec les mêmes valeurs",
      "Il appelle le constructeur de l’objet"
    ],
    answer: "Il crée une nouvelle instance avec les mêmes valeurs",
    explanation: "Le mot-clé `clone` copie un objet en créant une nouvelle instance avec les mêmes propriétés."
  },
  {
    id: 19,
    question: "Que fait la méthode magique `__call` ?",
    options: [
      "Elle est appelée lors d'une méthode statique inconnue",
      "Elle est appelée lors d'un appel à une méthode inaccessible ou inexistante",
      "Elle appelle une fonction en dehors de la classe",
      "Elle est appelée lors de la création de l’objet"
    ],
    answer: "Elle est appelée lors d'un appel à une méthode inaccessible ou inexistante",
    explanation: "`__call` est déclenchée si une méthode appelée n’est pas visible ou définie dans l’objet."
  },
  {
    id: 20,
    question: "Une classe peut-elle hériter de plusieurs classes en PHP ?",
    options: ["Oui", "Non", "Oui si elles sont abstraites", "Seulement via des interfaces"],
    answer: "Non",
    explanation: "PHP ne permet pas l'héritage multiple entre classes, mais les traits comblent ce manque."
  },
  {
    id: 21,
    question: "Comment PHP résout-il les conflits entre méthodes dans plusieurs traits ?",
    options: [
      "Il choisit arbitrairement une méthode",
      "La dernière méthode écrase les précédentes",
      "Il faut utiliser `insteadof` pour les résoudre",
      "Les conflits sont ignorés"
    ],
    answer: "Il faut utiliser `insteadof` pour les résoudre",
    explanation: "`insteadof` permet de spécifier quelle méthode doit être utilisée en cas de conflit de traits."
  },
  {
    id: 22,
    question: "Quelle est la bonne façon d'utiliser un namespace ?",
    options: [
      "require('namespace.php');",
      "use MonNamespace\\MaClasse;",
      "include MonNamespace;",
      "namespace(MonNamespace)"
    ],
    answer: "use MonNamespace\\MaClasse;",
    explanation: "Le mot-clé `use` permet d'importer une classe d’un espace de nom."
  },
  {
    id: 23,
    question: "Peut-on instancier une interface ?",
    options: ["Oui", "Non", "Oui si elle est abstraite", "Oui via `new Interface()`"],
    answer: "Non",
    explanation: "Une interface ne peut être instanciée ; elle doit être implémentée par une classe."
  },
  {
    id: 24,
    question: "Quel est le rôle de `__construct` ?",
    options: [
      "Initialiser l’objet à la destruction",
      "Définir les propriétés privées",
      "Exécuter du code lors de l’instanciation",
      "Protéger les propriétés"
    ],
    answer: "Exécuter du code lors de l’instanciation",
    explanation: "`__construct` est le constructeur, exécuté à la création d’un objet."
  },
  {
    id: 25,
    question: "Peut-on redéfinir une méthode d'une interface avec une visibilité différente ?",
    options: ["Oui", "Non", "Oui si elle est `protected`", "Uniquement avec `final`"],
    answer: "Non",
    explanation: "Les méthodes d'interface doivent être définies comme `public` dans la classe implémentée."
  }
];

export const quizNodeExpress_Difficile = [
  {
    id: 1,
    question: `Que va afficher ce code ?

class A {
  public static function who() {
    echo "A";
  }
  public static function test() {
    static::who();
  }
}

class B extends A {
  public static function who() {
    echo "B";
  }
}

B::test();`,
    options: ["A", "B", "AB", "Erreur"],
    answer: "B",
    explanation: "`static::who()` utilise le late static binding, donc `B::who()` est appelée même si test() est défini dans A."
  },
  {
    id: 2,
    question: `Que va afficher ce code ?

class MaClasse {
  private $val = 1;
  public function __clone() {
    $this->val++;
  }
}
$obj1 = new MaClasse();
$obj2 = clone $obj1;
print_r($obj2);`,
    options: [
      "Un objet avec val = 1",
      "Un objet avec val = 2",
      "Erreur fatale",
      "Impossible de cloner un objet"
    ],
    answer: "Un objet avec val = 2",
    explanation: "`__clone()` modifie la propriété après la duplication, donc val passe à 2."
  },
  {
    id: 3,
    question: `Que va retourner ce code ?

class Animal {
  public $type = "animal";
}

$dog = new Animal();
$dog->type = "chien";

$cat = clone $dog;
$cat->type = "chat";

echo $dog->type;`,
    options: ["animal", "chien", "chat", "Erreur"],
    answer: "chien",
    explanation: "`clone` crée une copie indépendante, donc modifier `$cat->type` ne change pas `$dog->type`."
  },
  {
    id: 4,
    question: `Quel sera le résultat ?

class A {
  public function message() {
    echo "A";
  }
}
class B extends A {
  public function message() {
    echo "B";
  }
}

$a = new A();
$b = new B();

$a->message();
$b->message();`,
    options: ["AB", "AA", "BB", "Erreur"],
    answer: "AB",
    explanation: "`message()` est redéfinie dans B donc `$b->message()` affiche 'B', `$a->message()` affiche 'A'."
  },
  {
    id: 5,
    question: `Quel sera le résultat ?

trait T {
  public function say() {
    echo "T";
  }
}
class X {
  use T;
  public function say() {
    echo "X";
  }
}

(new X())->say();`,
    options: ["T", "X", "TX", "Erreur"],
    answer: "X",
    explanation: "La méthode dans la classe X surcharge celle du trait."
  },
  {
    id: 6,
    question: `Quel sera le résultat ?

class A {
  public function __construct() {
    echo "__construct A\\n";
  }
}
class B extends A {
  public function __construct() {
    echo "__construct B\\n";
  }
}

new B();`,
    options: [
      "__construct A\n__construct B\n",
      "__construct B\n",
      "__construct A\n",
      "Erreur car le constructeur parent n'est pas appelé"
    ],
    answer: "__construct B\n",
    explanation: "Le constructeur de B remplace celui de A et n’appelle pas `parent::__construct()`."
  },
  {
    id: 7,
    question: `Que va afficher ce code ?

class Test {
  private static $count = 0;
  public function __construct() {
    self::$count++;
  }
  public static function getCount() {
    return self::$count;
  }
}
new Test();
new Test();
echo Test::getCount();`,
    options: ["0", "1", "2", "Erreur"],
    answer: "2",
    explanation: "Chaque instanciation incrémente `$count`, une propriété statique partagée par toutes les instances."
  },
  {
    id: 8,
    question: `Quel sera le résultat ?

interface I {
  public function doSomething();
}

abstract class A implements I {}

class B extends A {
  public function doSomething() {
    return "done";
  }
}

$obj = new B();
echo $obj->doSomething();`,
    options: ["Erreur", "done", "null", "0"],
    answer: "done",
    explanation: "La classe B complète l'implémentation de l'interface I via la classe abstraite A."
  },
  {
    id: 9,
    question: `Quelle est la sortie de ce code ?

class Demo {
  function __isset($name) {
    return true;
  }
}
$obj = new Demo();
var_dump(isset($obj->foo));`,
    options: ["true", "false", "null", "Erreur"],
    answer: "true",
    explanation: "`__isset()` est appelé à l’utilisation de `isset()` sur une propriété inaccessible."
  },
  {
    id: 10,
    question: `Quel est le résultat ?

class User {
  public $name;
  function __construct($name) {
    $this->name = $name;
  }
}
$u1 = new User("Alice");
$u2 = $u1;
$u2->name = "Bob";
echo $u1->name;`,
    options: ["Alice", "Bob", "Erreur", "null"],
    answer: "Bob",
    explanation: "`$u2 = $u1` copie par référence, donc toute modification affecte aussi `$u1`."
  },
  {
    id: 11,
    question: `Quel sera le résultat de ce code ?

class ParentClass {
  protected function hello() {
    return "Hello";
  }
}

class ChildClass extends ParentClass {
  public function greet() {
    return $this->hello();
  }
}
$obj = new ChildClass();
echo $obj->greet();`,
    options: ["Hello", "Erreur", "null", "Undefined function"],
    answer: "Hello",
    explanation: "`hello()` est protected, donc accessible dans la classe fille via `$this`."
  },
  {
    id: 12,
    question: `Quel est le résultat ?

class Test {
  private $a = 10;
  function getA() {
    return $this->a;
  }
}
$t = new Test();
echo $t->a;`,
    options: ["10", "null", "Erreur", "0"],
    answer: "Erreur",
    explanation: "La propriété `$a` est privée, inaccessible directement depuis l'extérieur."
  },
  {
    id: 13,
    question: `Quel est le rôle du code suivant ?

class A {
  public function __invoke() {
    return "called";
  }
}

$a = new A();
echo $a();`,
    options: [
      "Appelle une méthode magique",
      "Erreur de syntaxe",
      "Crée une nouvelle instance",
      "Appelle le constructeur"
    ],
    answer: "Appelle une méthode magique",
    explanation: "`__invoke()` est appelée lorsqu’un objet est utilisé comme une fonction."
  },
  {
    id: 14,
    question: `Quel sera le résultat ?

class Base {
  const VERSION = "1.0";
}
echo Base::VERSION;`,
    options: ["1.0", "VERSION", "Erreur", "undefined"],
    answer: "1.0",
    explanation: "Les constantes de classe sont accessibles via `ClassName::CONST_NAME`."
  },
  {
    id: 15,
    question: `Que va afficher ce code ?

class Test {
  static $count = 0;
  function __construct() {
    self::$count++;
  }
}

new Test();
new Test();
echo Test::$count;`,
    options: ["0", "1", "2", "Erreur"],
    answer: "2",
    explanation: "`$count` est une propriété statique, partagée par toutes les instances."
  },
  {
    id: 16,
    question: `Quel sera le résultat ?

namespace MyApp;

class Test {}

$obj = new Test();`,
    options: [
      "Instance de \\MyApp\\Test",
      "Erreur de namespace",
      "Instance de Test sans namespace",
      "Erreur fatale"
    ],
    answer: "Erreur fatale",
    explanation: "En dehors du namespace, il faut référencer `\\MyApp\\Test` pour instancier cette classe."
  },
  {
    id: 17,
    question: `Quel est le rôle de ` + "`__destruct`" + ` ?

class X {
  public function __destruct() {
    echo "Destruction";
  }
}`,
    options: [
      "Est appelée à l'instanciation",
      "Est appelée à la fin de vie de l'objet",
      "Nettoie les fichiers temporaires",
      "Est utilisée pour du multithreading"
    ],
    answer: "Est appelée à la fin de vie de l'objet",
    explanation: "Le destructeur est appelé automatiquement à la destruction de l’objet ou en fin de script."
  },
  {
    id: 18,
    question: `Quelle est la sortie de ce code ?

class A {
  public function show() {
    echo "A";
  }
}
class B extends A {
  public function show() {
    parent::show();
    echo "B";
  }
}
$b = new B();
$b->show();`,
    options: ["A", "B", "AB", "BA"],
    answer: "AB",
    explanation: "La méthode show() de B appelle celle du parent, puis affiche 'B'."
  },
  {
    id: 19,
    question: `Quel est le résultat ?

interface Loggable {
  public function log();
}

class FileLogger implements Loggable {
  public function log() {
    echo "Logging";
  }
}

$obj = new FileLogger();
$obj->log();`,
    options: ["Erreur", "Logging", "null", "0"],
    answer: "Logging",
    explanation: "La méthode `log()` est correctement implémentée comme exigé par l’interface."
  },
  {
    id: 20,
    question: `Que va afficher ce code ?

class A {
  public function __call($name, $args) {
    echo "Appel à la méthode $name";
  }
}
$obj = new A();
$obj->inexistante();`,
    options: [
      "Erreur",
      "Appel à la méthode inexistante",
      "null",
      "Exception"
    ],
    answer: "Appel à la méthode inexistante",
    explanation: "`__call` est déclenchée quand une méthode inaccessible est appelée sur un objet."
  }
];

export const quizCss = [
  {
    id: 1,
    code: true,
    question: `Que va afficher cet élément avec ce style ?

<div class="box"></div>

.box {
  width: 100px;
  padding: 20px;
  border: 10px solid black;
  box-sizing: border-box;
}`,
    options: ["Largeur totale : 100px", "Largeur totale : 140px", "Largeur totale : 160px", "Largeur totale : 60px"],
    answer: "Largeur totale : 100px",
    explanation: "Avec box-sizing: border-box, padding et border sont inclus dans la width."
  },

  {
    id: 2,
    code: true,
    question: `Quel est l'effet de ce code ?

.container {
  display: flex;
  flex-direction: column-reverse;
}`,
    options: [
      "Les éléments sont alignés horizontalement et inversés",
      "Les éléments sont alignés verticalement et inversés",
      "Les éléments sont masqués",
      "Les éléments sont empilés horizontalement sans inversion"
    ],
    answer: "Les éléments sont alignés verticalement et inversés",
    explanation: "flex-direction: column-reverse empile les éléments verticalement en inversant l'ordre."
  },

  {
    id: 3,
    code: false,
    question: `Quelle propriété permet d'activer un BFC (Block Formatting Context) ?`,
    options: ["position: relative", "overflow: hidden", "opacity: 0", "z-index: 99"],
    answer: "overflow: hidden",
    explanation: "overflow: hidden crée un BFC, ce qui influence le comportement du flottement et des marges."
  },

  {
    id: 4,
    code: true,
    question: `Quel est le résultat de cette règle ?

.box {
  margin: 10px 20px 30px;
}`,
    options: [
      "margin-top: 10px; margin-right: 20px; margin-bottom: 30px; margin-left: 20px;",
      "margin: 10px 20px;",
      "margin: 10px 20px 30px 40px;",
      "Erreur"
    ],
    answer: "margin-top: 10px; margin-right: 20px; margin-bottom: 30px; margin-left: 20px;",
    explanation: "Lorsque 3 valeurs sont données : top, (left/right), bottom."
  },

  {
    id: 5,
    code: true,
    question: `Quelle couleur aura le texte ?

<p class="a b">Hello</p>

.a { color: blue; }
.b { color: red !important; }`,
    options: ["Bleu", "Rouge", "Violet", "Erreur"],
    answer: "Rouge",
    explanation: "!important sur .b surpasse .a."
  },

  {
    id: 6,
    code: false,
    question: `Quelle unité n'est pas relative ?`,
    options: ["em", "rem", "vh", "px"],
    answer: "px",
    explanation: "px est une unité absolue."
  },

  {
    id: 7,
    code: true,
    question: `Que va faire ce sélecteur ?

div + p { color: green; }`,
    options: [
      "Sélectionne tous les <p> dans un <div>",
      "Sélectionne le premier <p> qui suit directement un <div>",
      "Sélectionne tous les <p> de la page",
      "Sélectionne les <p> précédant un <div>"
    ],
    answer: "Sélectionne le premier <p> qui suit directement un <div>",
    explanation: "L'opérateur + est le sélecteur d'adjacence directe."
  },

  {
    id: 8,
    code: false,
    question: `Quelle propriété permet d'espacer les lignes de texte ?`,
    options: ["letter-spacing", "line-height", "word-spacing", "text-spacing"],
    answer: "line-height",
    explanation: "line-height contrôle l’espacement vertical entre lignes."
  },

  {
    id: 9,
    code: true,
    question: `Quel sera la couleur affichée ?

p {
  color: red;
}

#texte {
  color: blue;
}

p#texte {
  color: green;
}`,
    options: ["Rouge", "Bleu", "Vert", "Erreur"],
    answer: "Vert",
    explanation: "p#texte est le sélecteur le plus spécifique."
  },

  {
    id: 10,
    code: true,
    question: `À quoi sert cette propriété ?

object-fit: cover;`,
    options: [
      "Couvre l'écran entier",
      "Rogne le média pour remplir en gardant le ratio",
      "Étire le média sans le rogner",
      "Masque une partie aléatoire"
    ],
    answer: "Rogne le média pour remplir en gardant le ratio",
    explanation: "object-fit: cover rogne si nécessaire pour couvrir tout l’espace."
  },

  {
    id: 11,
    code: true,
    question: `Que fait ce code ?

.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}`,
    options: [
      "Crée 3 colonnes de largeur égale",
      "Crée 3 colonnes de largeur fixe",
      "Crée 1 colonne et 3 lignes",
      "Erreur"
    ],
    answer: "Crée 3 colonnes de largeur égale",
    explanation: "repeat(3, 1fr) crée 3 colonnes flexibles."
  },

  {
    id: 12,
    code: false,
    question: `Quel pseudo-élément permet d'insérer du contenu avant un élément ?`,
    options: ["::after", "::before", "::first-line", "::marker"],
    answer: "::before",
    explanation: "::before insère du contenu avant l’élément."
  },

  {
    id: 13,
    code: true,
    question: `Que vaut la spécificité de :

ul li.active a { ... }`,
    options: ["0-0-3-1", "0-1-2-1", "0-1-1-2", "0-0-2-2"],
    answer: "0-1-2-1",
    explanation: "1 classe (.active), 2 éléments (ul, li), 1 élément (a) = 0-1-2-1."
  },

  {
    id: 14,
    code: true,
    question: `Que fait ce code ?

.box {
  transition: all 0.3s ease;
}`,
    options: [
      "Rend l'élément transparent",
      "Ajoute une animation CSS automatique",
      "Permet d'animer les changements de propriétés",
      "Modifie la vitesse de hover"
    ],
    answer: "Permet d'animer les changements de propriétés",
    explanation: "transition anime les modifications CSS."
  },

  {
    id: 15,
    code: true,
    question: `À quoi correspond ce code ?

box-shadow: 0 4px 10px rgba(0,0,0,0.3);`,
    options: [
      "Une bordure invisible",
      "Une ombre portée",
      "Un flou appliqué à l’élément",
      "Un dégradé"
    ],
    answer: "Une ombre portée",
    explanation: "box-shadow ajoute une ombre externe."
  },

  {
    id: 16,
    code: false,
    question: `Quel est l’effet de la propriété 'isolation: isolate;' ?`,
    options: [
      "Crée un nouveau contexte d’empilement",
      "Sépare le texte du fond",
      "Désactive l’héritage",
      "Rend l’élément isolé du flux"
    ],
    answer: "Crée un nouveau contexte d’empilement",
    explanation: "isolation: isolate force un stacking context."
  },

  {
    id: 17,
    code: true,
    question: `Que fait ce code ?

.flex {
  display: flex;
  align-items: center;
  justify-content: space-between;
}`,
    options: [
      "Centre horizontalement uniquement",
      "Centre verticalement uniquement",
      "Centre verticalement et espace horizontalement",
      "Inverse les éléments"
    ],
    answer: "Centre verticalement et espace horizontalement",
    explanation: "align-items centre en vertical, justify-content espace en horizontal."
  },

  {
    id: 18,
    code: false,
    question: `Que signifie 'z-index' ?`,
    options: [
      "La vitesse d'affichage",
      "L'ordre d'empilement des éléments",
      "La profondeur du DOM",
      "La hauteur minimale d'un élément"
    ],
    answer: "L'ordre d'empilement des éléments",
    explanation: "z-index détermine la priorité d'affichage sur l’axe Z."
  },

  {
    id: 19,
    code: true,
    question: `Quel est l’effet de :

img {
  filter: grayscale(100%);
}`,
    options: [
      "L'image devient très sombre",
      "L'image devient floue",
      "L'image devient en noir et blanc",
      "L'image devient transparente"
    ],
    answer: "L'image devient en noir et blanc",
    explanation: "grayscale(100%) enlève la saturation."
  },

  {
    id: 20,
    code: true,
    question: `Que donne ce code ?

.container {
  width: min(80%, 500px);
}`,
    options: [
      "Toujours 80%",
      "Toujours 500px",
      "La valeur la plus petite entre 80% et 500px",
      "La valeur la plus grande entre 80% et 500px"
    ],
    answer: "La valeur la plus petite entre 80% et 500px",
    explanation: "min() retourne la valeur minimale des arguments."
  }
];

export const quizCategories = [
  {
    id: 'nodejs-facile',
    title: 'Node.js & Express - Niveau Facile',
    description: 'Questions de base sur Node.js et Express',
    questions: quizNodeExpress_facile
  },
  {
    id: 'php-poo',
    title: 'PHP - Programmation Orientée Objet',
    description: 'Questions sur les concepts avancés de PHP',
    questions: quizPhpPoo
  },
  {
    id: 'php-intermediaire',
    title: 'PHP - Niveau Intermédiaire',
    description: 'Questions intermédiaires sur PHP POO',
    questions: quizNodeExpress_Intermediaire
  },
  {
    id: 'php-difficile',
    title: 'PHP - Niveau Difficile',
    description: 'Questions difficiles avec exemples de code PHP',
    questions: quizNodeExpress_Difficile
  },
  {
    id: 'css',
    title: 'CSS - Styles et Layout',
    description: 'Questions sur CSS, Flexbox, Grid et propriétés',
    questions: quizCss
  }
]
