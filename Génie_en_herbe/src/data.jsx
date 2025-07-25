// const quizNodeExpress = [
//   {
//     id: 1,
//     question: "Qu'est-ce que Node.js ?",
//     options: [
//       "Un framework JavaScript pour le frontend",
//       "Un moteur de base de données",
//       "Un environnement d'exécution JavaScript côté serveur",
//       "Une bibliothèque pour manipuler le DOM"
//     ],
//     answer: "Un environnement d'exécution JavaScript côté serveur",
//     explanation: "Node.js permet d'exécuter du JavaScript en dehors du navigateur, notamment pour créer des serveurs et des applications backend."
//   },
//   {
//     id: 2,
//     question: "Quel module Node.js est utilisé pour créer un serveur HTTP ?",
//     options: [
//       "url",
//       "http",
//       "fs",
//       "net"
//     ],
//     answer: "http",
//     explanation: "Le module 'http' de Node.js permet de créer des serveurs HTTP de manière native, sans dépendances externes."
//   },
//   {
//     id: 3,
//     question: "À quoi sert Express.js ?",
//     options: [
//       "À interroger des bases de données",
//       "À créer des interfaces graphiques",
//       "À créer des applications web en simplifiant la gestion des routes et middlewares",
//       "À compiler du code JavaScript"
//     ],
//     answer: "À créer des applications web en simplifiant la gestion des routes et middlewares",
//     explanation: "Express est un framework minimaliste et flexible pour créer des applications web en Node.js, avec un système de routage puissant."
//   },
//   {
//     id: 4,
//     question: "Comment définit-on une route GET en Express ?",
//     options: [
//       "app.get('/route', callback)",
//       "app.route('/route').get(callback)",
//       "app.GET('/route', callback)",
//       "server.get('/route', callback)"
//     ],
//     answer: "app.get('/route', callback)",
//     explanation: "La méthode `app.get()` d'Express permet de gérer une requête HTTP GET vers une route spécifique."
//   },
//   {
//     id: 5,
//     question: "Quel middleware permet de parser les données JSON dans Express ?",
//     options: [
//       "express.urlencoded()",
//       "express.text()",
//       "express.json()",
//       "bodyParser.text()"
//     ],
//     answer: "express.json()",
//     explanation: "`express.json()` est un middleware intégré d'Express qui permet de parser le corps des requêtes en JSON."
//   },
//   {
//     id: 6,
//     question: "Comment gérer une erreur personnalisée dans Express ?",
//     options: [
//       "En utilisant un middleware avec 2 paramètres",
//       "En utilisant try/catch dans chaque route",
//       "En ajoutant une fonction avec 4 paramètres : err, req, res, next",
//       "Express gère automatiquement toutes les erreurs"
//     ],
//     answer: "En ajoutant une fonction avec 4 paramètres : err, req, res, next",
//     explanation: "Les middlewares de gestion d'erreur dans Express ont 4 arguments. C’est ce qui permet à Express de les reconnaître comme tels."
//   },
//   {
//     id: 7,
//     question: "Quel port est généralement utilisé en développement avec Express ?",
//     options: [
//       "3000",
//       "80",
//       "443",
//       "8080"
//     ],
//     answer: "3000",
//     explanation: "Le port 3000 est une convention largement utilisée en développement local avec Express."
//   }
// ];
// const quizNodeExpress = [
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

const quizNodeExpress = [
  {
    id: 1,
    question: "Quelle balise est utilisée pour écrire du code PHP ?",
    options: [
      "<?php ?>",
      "<php> </php>",
      "<? ?>",
      "<script php> </script>"
    ],
    answer: "<?php ?>",
    explanation: "`<?php ?>` est la balise standard pour ouvrir et fermer du code PHP."
  },
  {
    id: 2,
    question: "Quelle fonction est utilisée pour afficher du texte en PHP ?",
    options: [
      "show()",
      "display()",
      "echo",
      "print_r()"
    ],
    answer: "echo",
    explanation: "`echo` est une structure de langage pour afficher des chaînes ou des variables à l'écran."
  },
  {
    id: 3,
    question: "Quelle est la syntaxe correcte pour déclarer une variable en PHP ?",
    options: [
      "let x = 10;",
      "int x = 10;",
      "$x = 10;",
      "x := 10;"
    ],
    answer: "$x = 10;",
    explanation: "Toutes les variables en PHP commencent par un `$`, suivi du nom de la variable."
  },
  {
    id: 4,
    question: "Quelle fonction PHP permet d’arrêter complètement l’exécution du script ?",
    options: [
      "stop()",
      "exit()",
      "die()",
      "break()"
    ],
    answer: "die()",
    explanation: "`die()` (ou `exit()`) termine immédiatement le script PHP en cours."
  },
  {
    id: 5,
    question: "Quelle superglobale contient les données envoyées par un formulaire en méthode POST ?",
    options: [
      "$_POST",
      "$_FORM",
      "$_REQUEST",
      "$_SEND"
    ],
    answer: "$_POST",
    explanation: "`$_POST` est une superglobale contenant toutes les données envoyées via méthode POST."
  },
  {
    id: 6,
    question: "Comment inclure un fichier externe en PHP ?",
    options: [
      "include 'fichier.php';",
      "import 'fichier.php';",
      "load('fichier.php');",
      "use fichier.php;"
    ],
    answer: "include 'fichier.php';",
    explanation: "`include` ou `require` permet d'ajouter le contenu d'un fichier externe dans le script courant."
  },
  {
    id: 7,
    question: "Quelle est la différence entre `include` et `require` ?",
    options: [
      "`require` génère une erreur fatale, `include` une alerte",
      "Il n'y a aucune différence",
      "`include` est plus rapide",
      "`require` ne fonctionne pas en local"
    ],
    answer: "`require` génère une erreur fatale, `include` une alerte",
    explanation: "Si le fichier est introuvable, `include` émet un warning, `require` arrête l'exécution du script."
  },
  {
    id: 8,
    question: "Quelle fonction permet de vérifier si une variable est définie ?",
    options: [
      "isset()",
      "defined()",
      "exists()",
      "issetted()"
    ],
    answer: "isset()",
    explanation: "`isset()` retourne true si la variable est définie et non null."
  },
  {
    id: 9,
    question: "Comment créer une fonction en PHP ?",
    options: [
      "function nom() {}",
      "fn nom() {}",
      "def nom() {}",
      "fonction nom() {}"
    ],
    answer: "function nom() {}",
    explanation: "La syntaxe correcte est `function nom() {}`."
  },
  {
    id: 10,
    question: "Quelle fonction permet de compter le nombre d’éléments dans un tableau ?",
    options: [
      "count()",
      "sizeof()",
      "length()",
      "array_length()"
    ],
    answer: "count()",
    explanation: "`count()` retourne le nombre d’éléments dans un tableau."
  },
  {
    id: 11,
    question: "Comment accéder à la première valeur d’un tableau `$arr` ?",
    options: [
      "$arr[1]",
      "$arr[0]",
      "arr[0]",
      "$arr->first()"
    ],
    answer: "$arr[0]",
    explanation: "En PHP, les tableaux commencent à l’indice 0, donc la première valeur est `$arr[0]`."
  },
  {
    id: 12,
    question: "Que retourne la fonction `isset($_GET['id'])` si la clé 'id' n'existe pas ?",
    options: [
      "true",
      "false",
      "0",
      "null"
    ],
    answer: "false",
    explanation: "`isset()` retourne `false` si la clé n’existe pas ou que sa valeur est `null`."
  },
  {
    id: 13,
    question: "Quelle est la portée d’une variable déclarée à l’intérieur d’une fonction ?",
    options: [
      "Globale",
      "Locale",
      "Publique",
      "Protégée"
    ],
    answer: "Locale",
    explanation: "Les variables déclarées dans une fonction sont accessibles uniquement dans cette fonction."
  },
  {
    id: 14,
    question: "Quelle structure permet de répéter du code tant qu’une condition est vraie ?",
    options: [
      "if",
      "for",
      "while",
      "switch"
    ],
    answer: "while",
    explanation: "`while` est utilisée pour exécuter un bloc de code tant qu’une condition est vraie."
  },
  {
    id: 15,
    question: "Comment définir une constante en PHP ?",
    options: [
      "const PI = 3.14;",
      "define('PI', 3.14);",
      "$PI = 3.14;",
      "constant PI = 3.14;"
    ],
    answer: "define('PI', 3.14);",
    explanation: "`define()` est la fonction classique pour déclarer une constante en PHP natif."
  },
  {
    id: 16,
    question: "Quelle est la valeur par défaut de `$_SESSION` avant l’appel de `session_start()` ?",
    options: [
      "null",
      "vide",
      "non défini",
      "false"
    ],
    answer: "non défini",
    explanation: "`$_SESSION` n’est pas accessible tant que `session_start()` n’a pas été appelé."
  },
  {
    id: 17,
    question: "Quelle fonction est utilisée pour envoyer un en-tête HTTP en PHP ?",
    options: [
      "header()",
      "setHeader()",
      "http_header()",
      "send()"
    ],
    answer: "header()",
    explanation: "`header()` permet d’envoyer des en-têtes HTTP avant tout affichage."
  },
  {
    id: 18,
    question: "Quelle extension de fichier est utilisée pour un fichier PHP ?",
    options: [
      ".ph",
      ".html",
      ".php",
      ".phtml"
    ],
    answer: ".php",
    explanation: "L’extension officielle d’un fichier PHP est `.php`."
  },
  {
    id: 19,
    question: "Comment vérifier si un fichier existe en PHP ?",
    options: [
      "exists('file.txt')",
      "file_exists('file.txt')",
      "check_file('file.txt')",
      "is_file('file.txt')"
    ],
    answer: "file_exists('file.txt')",
    explanation: "`file_exists()` vérifie si un fichier ou un dossier est présent sur le disque."
  },
  {
    id: 20,
    question: "Comment se nomme l’outil en ligne de commande de PHP pour exécuter un script ?",
    options: [
      "php-run",
      "php",
      "php_exec",
      "run-php"
    ],
    answer: "php",
    explanation: "`php` est la commande CLI pour exécuter un script en terminal (ex: `php index.php`)."
  }
];

export default quizNodeExpress;