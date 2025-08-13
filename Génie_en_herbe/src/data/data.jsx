const data = { 
  quiz_Node_Express1 : [

  {
    id: 1,
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
],
 quiz_Node_Express2 : [

  {
    id: 1,
    question: "Quelle commande permet d'exécuter un fichier JavaScript avec Node.js ?",
    options: [
      "node run file.js",
      "node file.js",
      "npm start file.js",
      "nodejs file.js"
    ],
    answer: "node file.js",
    explanation: "La commande `node file.js` exécute un fichier JavaScript à l'aide de l'environnement Node.js."
  },
  {
    id: 2,
    question: "Quel type de langage est JavaScript dans Node.js ?",
    options: [
      "Langage compilé",
      "Langage interprété",
      "Langage statique",
      "Langage typé"
    ],
    answer: "Langage interprété",
    explanation: "JavaScript est un langage interprété, même dans un environnement serveur comme Node.js."
  },
  {
    id: 3,
    question: "Quel est l'intérêt principal de Node.js ?",
    options: [
      "Manipuler le DOM",
      "Créer des interfaces graphiques",
      "Créer des applications serveur non bloquantes",
      "Styliser des composants HTML"
    ],
    answer: "Créer des applications serveur non bloquantes",
    explanation: "Node.js utilise un modèle événementiel et non bloquant, idéal pour les applications performantes et scalables."
  },
  {
    id: 4,
    question: "Quel mot-clé permet d’importer un module dans Node.js (CommonJS) ?",
    options: [
      "import",
      "include",
      "require",
      "use"
    ],
    answer: "require",
    explanation: "`require` est utilisé pour importer des modules dans l'environnement CommonJS de Node.js."
  },
  {
    id: 5,
    question: "Comment crée-t-on un serveur de base avec Express.js ?",
    options: [
      "express.createServer()",
      "express.server()",
      "express() + app.listen()",
      "http.createServer(express)"
    ],
    answer: "express() + app.listen()",
    explanation: "On initialise Express avec `express()` et on le fait écouter avec `app.listen()`."
  },
  {
    id: 6,
    question: "Que signifie REST dans une API RESTful ?",
    options: [
      "Rapid Execution of Service Tasks",
      "Representational State Transfer",
      "Remote Express Secure Transfer",
      "Runtime Engine Standard Transfer"
    ],
    answer: "Representational State Transfer",
    explanation: "REST est un style d'architecture basé sur la manipulation des ressources via des méthodes HTTP."
  },
  {
    id: 7,
    question: "Comment définit-on un middleware dans Express ?",
    options: [
      "app.middleware(fn)",
      "app.route(fn)",
      "app.use(fn)",
      "app.handle(fn)"
    ],
    answer: "app.use(fn)",
    explanation: "`app.use()` est utilisé pour enregistrer des middlewares dans Express."
  },
  {
    id: 8,
    question: "Quel module Node.js permet de lire un fichier ?",
    options: [
      "os",
      "path",
      "fs",
      "file"
    ],
    answer: "fs",
    explanation: "`fs` (file system) est le module de Node.js pour manipuler les fichiers."
  },
  {
    id: 9,
    question: "Quelle méthode Express permet de gérer une requête POST ?",
    options: [
      "app.send()",
      "app.post()",
      "app.push()",
      "app.getPost()"
    ],
    answer: "app.post()",
    explanation: "`app.post()` permet de définir un gestionnaire pour les requêtes HTTP POST."
  },
  {
    id: 10,
    question: "Quelle propriété contient les paramètres d'URL dans Express ?",
    options: [
      "req.body",
      "req.query",
      "req.params",
      "req.url"
    ],
    answer: "req.params",
    explanation: "`req.params` permet d'accéder aux paramètres définis dans l'URL (par exemple `/user/:id`)."
  },
  {
    id: 11,
    question: "Comment Express sait qu'un middleware est une erreur ?",
    options: [
      "Il utilise la méthode catch()",
      "Il vérifie s’il y a try/catch",
      "Il reçoit 4 paramètres dont 'err'",
      "Il utilise async/await"
    ],
    answer: "Il reçoit 4 paramètres dont 'err'",
    explanation: "Un middleware de gestion d'erreur dans Express reçoit `err, req, res, next`."
  },
  {
    id: 12,
    question: "Que fait `npm install` sans autre argument ?",
    options: [
      "Installe tous les packages listés dans package.json",
      "Met à jour Node.js",
      "Crée un fichier package-lock.json",
      "Désinstalle tous les modules"
    ],
    answer: "Installe tous les packages listés dans package.json",
    explanation: "La commande `npm install` installe toutes les dépendances listées dans le fichier `package.json`."
  },
  {
    id: 13,
    question: "Comment envoyer une réponse JSON dans Express ?",
    options: [
      "res.write(json)",
      "res.json(data)",
      "res.sendText(data)",
      "res.data(json)"
    ],
    answer: "res.json(data)",
    explanation: "`res.json()` est utilisé pour envoyer des objets JSON directement au client."
  },
  {
    id: 14,
    question: "Quelle méthode Express sert à rediriger vers une autre URL ?",
    options: [
      "res.redirect()",
      "res.route()",
      "res.forward()",
      "res.jump()"
    ],
    answer: "res.redirect()",
    explanation: "`res.redirect()` redirige une requête HTTP vers une autre URL."
  },
  {
    id: 15,
    question: "Quel module permet de gérer les chemins de fichiers dans Node.js ?",
    options: [
      "path",
      "fs",
      "dir",
      "url"
    ],
    answer: "path",
    explanation: "`path` est un module natif de Node.js pour gérer et construire des chemins de fichiers."
  },
  {
    id: 16,
    question: "À quoi sert `next()` dans un middleware Express ?",
    options: [
      "À arrêter la requête",
      "À passer au middleware suivant",
      "À relancer le serveur",
      "À envoyer une réponse au client"
    ],
    answer: "À passer au middleware suivant",
    explanation: "`next()` est une fonction qu’on appelle pour passer le contrôle au middleware suivant."
  },
  {
    id: 17,
    question: "Comment écouter sur le port 3000 avec Express ?",
    options: [
      "app.listen(3000)",
      "app.run(3000)",
      "express.listen(3000)",
      "server.listen(3000)"
    ],
    answer: "app.listen(3000)",
    explanation: "`app.listen(port)` démarre le serveur Express sur le port donné."
  },
  {
    id: 18,
    question: "Comment appelle-t-on une fonction qui intercepte les requêtes avant les routes ?",
    options: [
      "Contrôleur",
      "Routeur",
      "Handler",
      "Middleware"
    ],
    answer: "Middleware",
    explanation: "Les middlewares permettent d'intercepter et de modifier les requêtes avant qu'elles n'atteignent les routes."
  },
  {
    id: 19,
    question: "Quel type d’architecture suit souvent Node.js avec Express ?",
    options: [
      "MVC",
      "MVVM",
      "Layered OSI",
      "Monolithique uniquement"
    ],
    answer: "MVC",
    explanation: "L’architecture MVC (Modèle-Vue-Contrôleur) est souvent utilisée avec Express pour structurer les projets."
  },
  {
    id: 20,
    question: "Quelle commande désinstalle un module avec NPM ?",
    options: [
      "npm delete express",
      "npm remove express",
      "npm uninstall express",
      "npm drop express"
    ],
    answer: "npm uninstall express",
    explanation: "La commande `npm uninstall <package>` supprime une dépendance du projet et du fichier package.json."
  }
],

 quiz_Node_Express3 : [

  {
    id: 1,
    question: "Quel objet global permet d'accéder aux arguments passés en ligne de commande à Node.js ?",
    options: [
      "process.args",
      "global.argv",
      "process.argv",
      "node.arguments"
    ],
    answer: "process.argv",
    explanation: "`process.argv` contient les arguments passés au script Node.js via la ligne de commande."
  },
  {
    id: 2,
    question: "Quel mot-clé permet de rendre un module réutilisable dans Node.js (CommonJS) ?",
    options: [
      "export default",
      "module.exports",
      "exports.default",
      "require.export"
    ],
    answer: "module.exports",
    explanation: "`module.exports` permet d'exporter un module dans l’environnement CommonJS de Node.js."
  },
  {
    id: 3,
    question: "Quel est le rôle du module 'path' dans Node.js ?",
    options: [
      "Gérer les connexions réseau",
      "Créer des routes Express",
      "Gérer les chemins de fichiers",
      "Lire les fichiers JSON"
    ],
    answer: "Gérer les chemins de fichiers",
    explanation: "Le module `path` fournit des utilitaires pour manipuler les chemins de fichiers de manière portable."
  },
  {
    id: 4,
    question: "Quel module permet de créer une application CLI interactive ?",
    options: [
      "chalk",
      "prompt",
      "inquirer",
      "axios"
    ],
    answer: "inquirer",
    explanation: "`inquirer` permet de créer des interfaces CLI interactives (questions, menus, etc.)."
  },
  {
    id: 5,
    question: "Quelle commande permet d'installer un module uniquement pour le développement ?",
    options: [
      "npm install <module> --global",
      "npm install <module> --save-dev",
      "npm dev-install <module>",
      "npm install --test-only"
    ],
    answer: "npm install <module> --save-dev",
    explanation: "L’option `--save-dev` enregistre la dépendance dans `devDependencies`."
  },
  {
    id: 6,
    question: "Comment répondre avec un fichier statique en Express ?",
    options: [
      "res.static()",
      "res.sendFile()",
      "res.sendHTML()",
      "res.file()"
    ],
    answer: "res.sendFile()",
    explanation: "`res.sendFile(path)` permet d'envoyer un fichier statique comme réponse."
  },
  {
    id: 7,
    question: "Comment lire un fichier JSON synchronement dans Node.js ?",
    options: [
      "fs.readJsonSync()",
      "require('fichier.json')",
      "fs.readFile('fichier.json')",
      "fs.loadSync()"
    ],
    answer: "require('fichier.json')",
    explanation: "Dans Node.js, on peut charger un fichier JSON directement avec `require()`."
  },
  {
    id: 8,
    question: "Quelle méthode Express permet de définir plusieurs middlewares pour une route ?",
    options: [
      "app.route()",
      "app.use()",
      "app.all()",
      "app.get('/path', mw1, mw2, handler)"
    ],
    answer: "app.get('/path', mw1, mw2, handler)",
    explanation: "Express accepte plusieurs middlewares en paramètres dans une route."
  },
  {
    id: 9,
    question: "Que retourne la méthode `res.status()` ?",
    options: [
      "Un booléen",
      "Une chaîne",
      "L'objet réponse (`res`) pour chaînage",
      "Un code d’erreur"
    ],
    answer: "L'objet réponse (`res`) pour chaînage",
    explanation: "`res.status()` retourne l’objet `res`, permettant de chaîner avec `res.send()` ou `res.json()`."
  },
  {
    id: 10,
    question: "Quel package est souvent utilisé pour gérer les variables d'environnement ?",
    options: [
      "dotenv",
      "env-handler",
      "envconfig",
      "config.js"
    ],
    answer: "dotenv",
    explanation: "`dotenv` charge les variables d’environnement à partir d’un fichier `.env` dans `process.env`."
  },
  {
    id: 11,
    question: "Quelle méthode est utilisée pour intercepter toutes les requêtes, peu importe la méthode HTTP ?",
    options: [
      "app.get('*')",
      "app.use('*')",
      "app.all('*')",
      "app.route('*')"
    ],
    answer: "app.all('*')",
    explanation: "`app.all()` intercepte toutes les méthodes HTTP (GET, POST, etc.) sur une route."
  },
  {
    id: 12,
    question: "Qu'est-ce que le module 'cluster' permet de faire dans Node.js ?",
    options: [
      "Gérer les fichiers en parallèle",
      "Faire du clustering de base de données",
      "Créer plusieurs processus Node.js pour mieux utiliser les CPU",
      "Charger plusieurs routes Express en parallèle"
    ],
    answer: "Créer plusieurs processus Node.js pour mieux utiliser les CPU",
    explanation: "Le module `cluster` permet d’exploiter les cœurs du processeur pour améliorer les performances."
  },
  {
    id: 13,
    question: "Quel est l'équivalent asynchrone de `fs.readFileSync()` ?",
    options: [
      "fs.readFile()",
      "fs.asyncRead()",
      "fs.load()",
      "fs.fetchFile()"
    ],
    answer: "fs.readFile()",
    explanation: "`fs.readFile()` est la version asynchrone de `fs.readFileSync()` et utilise une callback."
  },
  {
    id: 14,
    question: "Pourquoi utilise-t-on souvent `next()` dans un middleware Express ?",
    options: [
      "Pour passer à la route suivante",
      "Pour déclencher une réponse",
      "Pour relancer le serveur",
      "Pour retourner une erreur"
    ],
    answer: "Pour passer à la route suivante",
    explanation: "`next()` permet de passer au middleware ou à la route suivante dans la chaîne."
  },
  {
    id: 15,
    question: "Quelle est la méthode Express pour gérer une erreur 404 personnalisée ?",
    options: [
      "app.notFound()",
      "app.error404()",
      "Une route '*' avec res.status(404)",
      "app.get('404')"
    ],
    answer: "Une route '*' avec res.status(404)",
    explanation: "Une route en fin de chaîne avec `app.use('*', ...)` permet de gérer les 404 manuellement."
  },
  {
    id: 16,
    question: "Comment lancer automatiquement un projet Node.js pendant le développement ?",
    options: [
      "Avec `npm run auto`",
      "En utilisant `nodemon`",
      "En important auto-run.js",
      "En tapant `node index.js` toutes les minutes"
    ],
    answer: "En utilisant `nodemon`",
    explanation: "`nodemon` redémarre automatiquement l'application quand les fichiers changent."
  },
  {
    id: 17,
    question: "Quel middleware est requis pour parser les données d’un formulaire HTML ?",
    options: [
      "express.json()",
      "express.urlencoded()",
      "bodyParser.text()",
      "form.parse()"
    ],
    answer: "express.urlencoded()",
    explanation: "`express.urlencoded()` permet de parser les données encodées en `x-www-form-urlencoded`."
  },
  {
    id: 18,
    question: "Quelle méthode permet de définir une variable d’environnement temporaire ?",
    options: [
      "process.setEnv()",
      "env.config()",
      "NODE_ENV=production node app.js",
      "require('dotenv').env()"
    ],
    answer: "NODE_ENV=production node app.js",
    explanation: "Tu peux définir une variable temporaire en ligne de commande avant `node`."
  },
  {
    id: 19,
    question: "Quel est le rôle de `package-lock.json` ?",
    options: [
      "Verrouiller la version de Node.js",
      "Suivre les fichiers modifiés",
      "Garder une trace précise des versions installées",
      "Définir les scripts de démarrage"
    ],
    answer: "Garder une trace précise des versions installées",
    explanation: "`package-lock.json` garantit que les mêmes versions seront utilisées à l’installation suivante."
  },
  {
    id: 20,
    question: "Quelle méthode permet de gérer une erreur dans un `try/catch` asynchrone ?",
    options: [
      "await.catch()",
      "try...await...catch",
      "try { await ... } catch (err) { ... }",
      "Promise.try()"
    ],
    answer: "try { await ... } catch (err) { ... }",
    explanation: "On peut capturer les erreurs asynchrones avec `try/catch` autour d’un `await`."
  }
],

 quiz_PHP1 : [

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
],

 quiz_PHP2 : [

  {
    id: 1,
    question: "Quelle est la sortie de `echo '3' + 2 * '2 chats';` ?",
    options: ["7", "9", "3 chats2", "Erreur"],
    answer: "7",
    explanation: "PHP convertit les chaînes en nombres jusqu'au premier caractère non numérique. Donc '3' + 2 * '2' = 3 + 4 = 7."
  },
  {
    id: 2,
    question: "Quelle est la portée d’une variable déclarée avec `static` dans une fonction ?",
    options: ["Globale", "Locale persistante", "Superglobale", "Partagée entre scripts"],
    answer: "Locale persistante",
    explanation: "`static` garde la valeur entre plusieurs appels à la fonction, mais reste locale à celle-ci."
  },
  {
    id: 3,
    question: "Que retourne `empty(0)` en PHP ?",
    options: ["true", "false", "null", "Erreur"],
    answer: "true",
    explanation: "`empty()` retourne `true` pour les valeurs considérées comme vides, y compris 0."
  },
  {
    id: 4,
    question: "Peut-on utiliser `isset($var['cle'])` si `$var` n’est pas défini ?",
    options: ["Oui", "Non", "Erreur", "Seulement en PHP 8+"],
    answer: "Oui",
    explanation: "`isset()` ne déclenche pas d'erreur si la variable n'existe pas. Elle retournera `false` discrètement."
  },
  {
    id: 5,
    question: "Quelle est la différence entre `==` et `===` en PHP ?",
    options: [
      "Aucune différence",
      "`==` compare la valeur, `===` compare valeur et type",
      "`===` est plus rapide",
      "`==` fait une comparaison logique"
    ],
    answer: "`==` compare la valeur, `===` compare valeur et type",
    explanation: "`==` fait une comparaison avec conversion de type, `===` compare sans conversion."
  },
  {
    id: 6,
    question: "Quelle est la sortie de `var_dump(null == false)` ?",
    options: ["bool(true)", "bool(false)", "null", "Erreur"],
    answer: "bool(true)",
    explanation: "Piège ! `null == false` retourne `true` car PHP les considère comme équivalents faiblement."
  },
  {
    id: 7,
    question: "Comment PHP gère-t-il les variables passées par référence ?",
    options: [
      "Avec `ref()`",
      "Avec `*`",
      "Avec `&`",
      "Les références ne sont pas supportées"
    ],
    answer: "Avec `&`",
    explanation: "`&` permet de lier une variable à une autre par référence."
  },
  {
    id: 8,
    question: "Que retourne `isset($a)` après `unset($a)` ?",
    options: ["true", "false", "null", "Erreur"],
    answer: "false",
    explanation: "Après `unset()`, la variable est supprimée. `isset()` retournera donc `false`."
  },
  {
    id: 9,
    question: "Que retourne `is_nan('NaN')` ?",
    options: ["true", "false", "NaN", "Erreur"],
    answer: "false",
    explanation: "`is_nan()` vérifie une vraie valeur `NaN` mathématique, pas la chaîne 'NaN'."
  },
  {
    id: 10,
    question: "Quelle est la sortie de `echo true + true + false;` ?",
    options: ["1", "2", "truefalse", "Erreur"],
    answer: "2",
    explanation: "En PHP, `true` = 1 et `false` = 0 lors de l’arithmétique."
  },
  {
    id: 11,
    question: "Que fait `array_merge(['a'=>1], ['a'=>2])` ?",
    options: ["Renvoie ['a'=>2]", "Renvoie ['a'=>1, 'a'=>2]", "Erreur", "Fusionne en conservant le 1er"],
    answer: "Renvoie ['a'=>2]",
    explanation: "Les clés identiques sont écrasées par celles de droite."
  },
  {
    id: 12,
    question: "Quelle fonction permet de convertir une chaîne JSON en tableau PHP ?",
    options: [
      "json_to_array()",
      "parse_json()",
      "json_decode()",
      "json_parse_array()"
    ],
    answer: "json_decode()",
    explanation: "`json_decode($json, true)` transforme un JSON en tableau associatif PHP."
  },
  {
    id: 13,
    question: "Quelle méthode permet de tester si une classe hérite d'une autre ?",
    options: [
      "inherits()",
      "instanceof",
      "extends()",
      "childOf()"
    ],
    answer: "instanceof",
    explanation: "`instanceof` permet de tester si un objet est issu d’une classe ou d’une classe parent."
  },
  {
    id: 14,
    question: "Que fait `explode('', 'abc')` ?",
    options: [
      "['a','b','c']",
      "['abc']",
      "Erreur",
      "['','a','b','c','']"
    ],
    answer: "Erreur",
    explanation: "`explode()` ne peut pas avoir un séparateur vide. Cela génère une `ValueError` en PHP 8."
  },
  {
    id: 15,
    question: "Une classe peut-elle hériter de plusieurs classes en PHP ?",
    options: ["Oui", "Non", "Seulement avec `use`", "En PHP 8+"],
    answer: "Non",
    explanation: "PHP ne supporte pas l'héritage multiple. On utilise des traits (`use`) pour cela."
  },
  {
    id: 16,
    question: "Comment accéder à une constante de classe sans créer d'objet ?",
    options: [
      "$obj::CONST",
      "MyClass::CONST",
      "MyClass->CONST",
      "const MyClass"
    ],
    answer: "MyClass::CONST",
    explanation: "On accède à une constante statique avec `::`, sans instancier la classe."
  },
  {
    id: 17,
    question: "Comment PHP gère-t-il les erreurs fatales en PHP 7+ ?",
    options: [
      "Elles plantent toujours le script",
      "Elles peuvent être catchées avec `Throwable`",
      "Il faut `try/catch(ErrorException)`",
      "On ne peut pas les attraper"
    ],
    answer: "Elles peuvent être catchées avec `Throwable`",
    explanation: "Depuis PHP 7, les `Error` peuvent être attrapées via `try/catch(Throwable)`."
  },
  {
    id: 18,
    question: "Quelle différence entre `include_once` et `require_once` ?",
    options: [
      "Aucune",
      "`require_once` stoppe le script en cas d’erreur",
      "`include_once` est plus rapide",
      "`require_once` peut être appelé plusieurs fois"
    ],
    answer: "`require_once` stoppe le script en cas d’erreur",
    explanation: "`require_once` interrompt l’exécution si le fichier est introuvable, contrairement à `include_once`."
  },
  {
    id: 19,
    question: "Quelle fonction permet de supprimer tous les éléments d’un tableau ?",
    options: [
      "unset($tab)",
      "array_clear()",
      "$tab = []",
      "array_reset()"
    ],
    answer: "$tab = []",
    explanation: "`unset($tab)` détruit la variable. `$tab = []` vide le tableau sans le supprimer."
  },
  {
    id: 20,
    question: "Est-il possible d’utiliser `continue` dans un `switch` ?",
    options: ["Oui", "Non", "Uniquement dans une boucle", "Oui en PHP 7+"],
    answer: "Uniquement dans une boucle",
    explanation: "`continue` dans un `switch` seul produit une erreur ; il faut qu’il soit dans une boucle."
  },
  {
    id: 21,
    question: "Quelle est la valeur de `gettype([])` ?",
    options: [
      "array",
      "object",
      "null",
      "resource"
    ],
    answer: "array",
    explanation: "`gettype([])` retourne `array`, même si le tableau est vide."
  },
  {
    id: 22,
    question: "Comment savoir si une clé existe dans un tableau, même si sa valeur est `null` ?",
    options: [
      "isset()",
      "array_key_exists()",
      "in_array()",
      "key_exists()"
    ],
    answer: "array_key_exists()",
    explanation: "`isset()` retourne false si la valeur est `null`, mais `array_key_exists()` vérifie la présence de la clé."
  },
  {
    id: 23,
    question: "Quelle est la valeur de `true === 1` en PHP ?",
    options: [
      "true",
      "false",
      "null",
      "Erreur"
    ],
    answer: "false",
    explanation: "`===` compare type et valeur. `true` est booléen, `1` est entier → donc false."
  },
  {
    id: 24,
    question: "Que retourne `strpos('hello', 'l')` ?",
    options: ["2", "1", "true", "false"],
    answer: "2",
    explanation: "`strpos()` retourne la première position (index 0-based) du caractère trouvé."
  },
  {
    id: 25,
    question: "Peut-on instancier une interface en PHP ?",
    options: [
      "Oui",
      "Non",
      "Uniquement si elle est abstraite",
      "En PHP 8+"
    ],
    answer: "Non",
    explanation: "Les interfaces ne peuvent pas être instanciées. Elles doivent être implémentées par des classes."
  },
  {
    id:26,
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
    id:27,
    question: "Quelle est la sortie du code suivant : `echo (new class { public function test() { return 1; } })->test();`",
    options: ["Erreur", "1", "test", "null"],
    answer: "1",
    explanation: "C’est une **classe anonyme**. Elle est instanciée immédiatement et la méthode `test()` est appelée."
  },
  {
    id:28,
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
    id:29,
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
    id:30,
    question: "Quel mot-clé empêche une méthode d’être redéfinie dans une classe enfant ?",
    options: ["private", "abstract", "final", "sealed"],
    answer: "final",
    explanation: "La méthode `final` ne peut pas être surchargée dans une classe qui hérite."
  },
  {
    id:31,
    question: "Peut-on accéder à une propriété `private` depuis une autre instance de la même classe ?",
    options: ["Oui", "Non", "Seulement avec `friend`", "En PHP 8+"],
    answer: "Oui",
    explanation: "Une propriété `private` est accessible à toutes les instances **de la même classe**, même si ce n’est pas `$this`."
  },
  {
    id:32,
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
    id:33,
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
    id:34,
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
    id: 35,
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
],

 quiz_Php3_Poo : [

  {
    id: 1,
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
],

 quiz_Laravel1 : [

  {
    id: 1,
    question: "Quelle commande permet de créer un nouveau projet Laravel ?",
    options: [
      "laravel create myApp",
      "php artisan make:project myApp",
      "composer create-project laravel/laravel myApp",
      "php laravel new myApp"
    ],
    answer: "composer create-project laravel/laravel myApp",
    explanation: "La commande officielle pour créer un projet Laravel est via Composer avec 'create-project'."
  },
  {
    id: 2,
    question: "Quelle est la fonction principale des migrations dans Laravel ?",
    options: [
      "Gérer les sessions utilisateur",
      "Créer des routes dynamiques",
      "Versionner et modifier la structure de la base de données",
      "Optimiser les requêtes SQL"
    ],
    answer: "Versionner et modifier la structure de la base de données",
    explanation: "Les migrations permettent de créer et modifier les schémas de la base de données de manière contrôlée."
  },
  {
    id: 3,
    question: "Quel artisan permet de créer un contrôleur ?",
    options: [
      "php artisan controller:create",
      "php artisan make:controller",
      "php artisan new:controller",
      "php artisan generate:controller"
    ],
    answer: "php artisan make:controller",
    explanation: "La commande correcte pour générer un contrôleur est 'php artisan make:controller'."
  },
  {
    id: 4,
    question: "Quel fichier est utilisé pour définir les routes web ?",
    options: [
      "routes/api.php",
      "app/Http/routes.php",
      "routes/web.php",
      "config/routes.php"
    ],
    answer: "routes/web.php",
    explanation: "Les routes destinées au web sont définies dans le fichier 'routes/web.php'."
  },
  {
    id: 5,
    question: "Quel mot-clé permet de lier un modèle à une table ?",
    options: [
      "protected $model;",
      "public $tablename;",
      "protected $table;",
      "private $table_name;"
    ],
    answer: "protected $table;",
    explanation: "La propriété protégée `$table` est utilisée pour définir le nom de la table associée à un modèle."
  },
  {
    id: 6,
    question: "Quelle commande permet de créer une migration ?",
    options: [
      "php artisan migrate:make",
      "php artisan make:migration",
      "php artisan generate:migration",
      "php artisan create:migration"
    ],
    answer: "php artisan make:migration",
    explanation: "La bonne commande est 'php artisan make:migration'."
  },
  {
    id: 7,
    question: "Que fait la commande 'php artisan migrate:rollback' ?",
    options: [
      "Exécute toutes les migrations",
      "Supprime la dernière table créée",
      "Annule la dernière migration",
      "Recrée toutes les migrations"
    ],
    answer: "Annule la dernière migration",
    explanation: "Cette commande annule le dernier lot de migration exécuté."
  },
  {
    id: 8,
    question: "Quel helper est utilisé pour rediriger un utilisateur ?",
    options: [
      "go()",
      "route()",
      "redirect()",
      "url()"
    ],
    answer: "redirect()",
    explanation: "`redirect()` est utilisé pour rediriger vers une route, une URL ou une action."
  },
  {
    id: 9,
    question: "Comment valider une requête HTTP dans un contrôleur ?",
    options: [
      "$request->verify()",
      "$request->validate()",
      "$request->check()",
      "$request->confirm()"
    ],
    answer: "$request->validate()",
    explanation: "`$request->validate()` est la méthode pour appliquer une validation dans les contrôleurs."
  },
  {
    id: 10,
    question: "Quel ORM Laravel utilise-t-il ?",
    options: [
      "Doctrine",
      "RedBeanPHP",
      "Eloquent",
      "Propel"
    ],
    answer: "Eloquent",
    explanation: "Laravel utilise Eloquent comme ORM pour gérer les relations entre les modèles et la base."
  },
  {
    id: 11,
    question: "Quelle méthode Eloquent permet de récupérer tous les enregistrements ?",
    options: [
      "Model::find()",
      "Model::get()",
      "Model::first()",
      "Model::all()"
    ],
    answer: "Model::all()",
    explanation: "`all()` récupère tous les enregistrements d'un modèle."
  },
  {
    id: 12,
    question: "Comment définir une relation One To Many en Eloquent ?",
    options: [
      "return \$this->hasOne();",
      "return \$this->belongsTo();",
      "return \$this->hasMany();",
      "return \$this->belongsToMany();"
    ],
    answer: "return \$this->hasMany();",
    explanation: "`hasMany()` définit une relation un-à-plusieurs dans Eloquent."
  },
  {
    id: 13,
    question: "Que retourne la méthode route() ?",
    options: [
      "Un tableau",
      "Une instance de route",
      "Une URL",
      "Une redirection"
    ],
    answer: "Une URL",
    explanation: "`route()` génère une URL vers une route nommée."
  },
  {
    id: 14,
    question: "Où se trouve le middleware 'web' dans Laravel ?",
    options: [
      "routes/web.php",
      "app/Http/Kernel.php",
      "app/Http/Middleware/Web.php",
      "config/web.php"
    ],
    answer: "app/Http/Kernel.php",
    explanation: "C’est dans `Kernel.php` que sont définis les groupes de middleware comme 'web' et 'api'."
  },
  {
    id: 15,
    question: "Quel mot-clé permet d'injecter un modèle dans un contrôleur ?",
    options: [
      "bind",
      "use",
      "type-hinting",
      "include"
    ],
    answer: "type-hinting",
    explanation: "Le type-hinting (ex : `User $user`) permet à Laravel d'injecter automatiquement un modèle."
  },
  {
    id: 16,
    question: "À quoi sert le fichier .env dans Laravel ?",
    options: [
      "Définir les routes",
      "Configurer les vues",
      "Stocker les variables d’environnement",
      "Gérer les logs"
    ],
    answer: "Stocker les variables d’environnement",
    explanation: "Le fichier `.env` contient les informations sensibles et les paramètres de configuration."
  },
  {
    id: 17,
    question: "Quelle méthode est utilisée pour créer une nouvelle ressource en Eloquent ?",
    options: [
      "insert()",
      "new()",
      "create()",
      "add()"
    ],
    answer: "create()",
    explanation: "`create()` permet de créer et sauvegarder une ressource en un seul appel."
  },
  {
    id: 18,
    question: "Comment se nomme la méthode pour écouter un événement ?",
    options: [
      "broadcast()",
      "observe()",
      "listen()",
      "on()"
    ],
    answer: "listen()",
    explanation: "`listen()` est utilisé dans l’enregistrement des événements dans Laravel."
  },
  {
    id: 19,
    question: "Quelle est la commande pour créer un middleware ?",
    options: [
      "php artisan make:middleware",
      "php artisan middleware:create",
      "php artisan create:middleware",
      "php artisan new:middleware"
    ],
    answer: "php artisan make:middleware",
    explanation: "La bonne commande pour créer un middleware est 'php artisan make:middleware'."
  },
  {
    id: 20,
    question: "Quel est le rôle de CSRF dans Laravel ?",
    options: [
      "Accélérer les migrations",
      "Créer des vues dynamiques",
      "Protéger contre les attaques de type cross-site request forgery",
      "Activer l'authentification"
    ],
    answer: "Protéger contre les attaques de type cross-site request forgery",
    explanation: "Laravel utilise un token CSRF pour sécuriser les formulaires."
  },
  {
    id: 21,
    question: "Quelle méthode est utilisée pour établir une relation belongsTo ?",
    options: [
      "hasOne()",
      "belongsTo()",
      "attach()",
      "connectTo()"
    ],
    answer: "belongsTo()",
    explanation: "`belongsTo()` est utilisé pour relier un modèle enfant à un modèle parent."
  },
  {
    id: 22,
    question: "Que fait la commande 'php artisan config:cache' ?",
    options: [
      "Supprime tous les fichiers de cache",
      "Met en cache les routes",
      "Met en cache les fichiers de configuration",
      "Génère des clés d’application"
    ],
    answer: "Met en cache les fichiers de configuration",
    explanation: "Cette commande combine toutes les configs en un seul fichier optimisé."
  },
  {
    id: 23,
    question: "Quelle méthode Artisan est utilisée pour générer une clé d'application ?",
    options: [
      "php artisan app:key",
      "php artisan generate:key",
      "php artisan key:generate",
      "php artisan make:key"
    ],
    answer: "php artisan key:generate",
    explanation: "La bonne commande est 'php artisan key:generate'."
  },
  {
    id: 24,
    question: "Quel fichier contient la configuration de la base de données ?",
    options: [
      "config/database.php",
      ".env",
      "database/config.php",
      "database.env"
    ],
    answer: ".env",
    explanation: "Bien que les paramètres soient définis dans 'config/database.php', leurs valeurs proviennent de `.env`."
  },
  {
    id: 25,
    question: "Quelle est la méthode Eloquent pour ajouter une contrainte WHERE ?",
    options: [
      "find()",
      "where()",
      "filter()",
      "limit()"
    ],
    answer: "where()",
    explanation: "`where()` permet d'ajouter des conditions à une requête Eloquent."
  },
  {id: 26,
  question: 'Comment Laravel résout-il automatiquement l’injection de dépendances dans les contrôleurs ?',
  options: ['Par un conteneur de services basé sur les noms de classes',
   'Par une configuration manuelle dans un fichier JSON',
   'Grâce à la compilation à l’avance',
   'Il ne le fait pas automatiquement'],
  answer: 'Par un conteneur de services basé sur les noms de classes',
  explanation: "Laravel utilise un conteneur d'injection de dépendance qui résout automatiquement les classes en fonction de leur type via le constructeur du contrôleur."},
 {id: 27,
  question: 'Quelle commande artisan permet de créer une factory Laravel ?',
  options: ['`php artisan make:factory`',
   '`php artisan factory:make`',
   '`php artisan create:factory`',
   '`php artisan generate:factory`'],
  answer: '`php artisan make:factory`',
  explanation: 'La commande correcte est `php artisan make:factory NomFactory`. Cela génère une classe dans `database/factories`.'},
 {id: 28,
  question: 'Quelle est la différence entre `hasOne` et `belongsTo` dans Eloquent ?',
  options: ['`hasOne` est utilisé dans le modèle parent, `belongsTo` dans l’enfant',
   '`hasOne` crée une clé étrangère dans le modèle parent',
   'Les deux signifient la même chose',
   '`belongsTo` est utilisé uniquement dans les migrations'],
  answer: '`hasOne` est utilisé dans le modèle parent, `belongsTo` dans l’enfant',
  explanation: '`hasOne` définit la relation depuis le modèle parent vers l’enfant. `belongsTo` est défini dans le modèle enfant pour indiquer qu’il appartient au parent.'},
 {id: 29,
  question: 'À quoi sert la méthode `boot()` dans une classe `ServiceProvider` ?',
  options: ['Démarrer un serveur',
   "exécuter du code une fois que tous les services du framework ont été enregistrés.",
   'Lancer les tests',
   'Créer des fichiers de configuration'],
  answer: "Enregistrer des événements, vues, routes, etc. après l'enregistrement des services",
  explanation: '`boot()` est utilisée pour exécuter des tâches après que tous les services ont été enregistrés (ex : liaisons d’événements, publication de ressources).'},
 {id: 30,
  question: 'Quelle est la méthode pour définir un middleware uniquement pour une route spécifique ?',
  'options': ['Utiliser `Route::group()` avec un middleware',
   'Utiliser la méthode `middleware()` sur la route',
   'Utiliser `applyMiddleware()`',
   'Ajouter un middleware dans `.env`'],
  answer: 'Utiliser la méthode `middleware()` sur la route',
  explanation: "On peut attacher un middleware à une seule route comme ceci : `Route::get('/admin', ...)->middleware('auth');`"}
],

 Quiz_Laravel2 : [
  {
    id: 1,
    question: "Quelle est la différence entre `{{ $var }}` et `{!! $var !!}` dans Blade ?",
    options: [
      "`{{ }}` encode HTML, `{!! !!}` ne le fait pas",
      "`{{ }}` exécute le JS, `{!! !!}` l'ignore",
      "`{!! !!}` encode plus fort que `{{ }}`",
      "Il n’y a aucune différence réelle"
    ],
    answer: "`{{ }}` encode HTML, `{!! !!}` ne le fait pas",
    explanation: "`{{ }}` protège contre les injections XSS, `{!! !!}` affiche le HTML brut sans échapper."
  },
  {
    id: 2,
    question: "Dans une vue Blade, que retourne `@isset($var)` si `$var = null` ?",
    options: [
      "true",
      "false",
      "Erreur",
      "null"
    ],
    answer: "false",
    explanation: "`@isset` retourne false si la variable est définie mais vaut null."
  },
  {
    id: 3,
    question: "Quelle est la différence entre `v-model` et `@change` dans un composant Inertia + Vue ?",
    options: [
      "`v-model` écoute `@change` en interne",
      "`@change` met à jour la valeur immédiatement",
      "`v-model` lie la valeur automatiquement, `@change` déclenche manuellement",
      "Aucune différence, ils font la même chose"
    ],
    answer: "`v-model` lie la valeur automatiquement, `@change` déclenche manuellement",
    explanation: "`v-model` est une liaison bidirectionnelle, `@change` est un simple listener d’événement."
  },
  {
    id: 4,
    question: "Qu'affiche `@json(['x' => 1])` dans Blade ?",
    options: [
      `'{"x":1}'`,
      `["x" => 1]`,
      `json_encode(['x'=>1])`,
      `x:1`
    ],
    answer: `'{"x":1}'`,
    explanation: "`@json()` encode le tableau PHP en JSON sécurisé pour le navigateur."
  },
  {
    id: 5,
    question: "Dans un projet Inertia avec Vue, où doit-on gérer les redirections après un `POST` ?",
    options: [
      "Dans le contrôleur Laravel",
      "Dans le composant Vue",
      "Dans la méthode `submit` avec Inertia",
      "Dans le middleware"
    ],
    answer: "Dans le contrôleur Laravel",
    explanation: "Les redirections se font toujours côté backend, même avec Inertia."
  },
  {
    id: 6,
    question: "Quelle est la bonne manière d’afficher un composant dans Blade ?",
    options: [
      "`@component('menu')`",
      "`<x-menu />`",
      "`@include('components.menu')`",
      "`<component is='menu' />`"
    ],
    answer: "`<x-menu />`",
    explanation: "Les composants Blade s’utilisent avec la syntaxe `<x-... />`."
  },
  {
    id: 7,
    question: "Quel est l’effet de `@once` dans une vue Blade ?",
    options: [
      "Affiche le contenu une fois par page",
      "Empêche la duplication lors des boucles",
      "Affiche le contenu une seule fois par exécution",
      "Exécute le bloc une fois par utilisateur"
    ],
    answer: "Affiche le contenu une seule fois par exécution",
    explanation: "`@once` garantit que le bloc n’est rendu qu’une fois, peu importe les appels suivants."
  },
  {
    id: 8,
    question: "Quelle est la sortie de `@forelse ($items as $item)` si `$items` vaut `null` ?",
    options: [
      "Erreur",
      "Le bloc `@empty` est exécuté",
      "Rien",
      "`$items` est converti en tableau vide"
    ],
    answer: "Le bloc `@empty` est exécuté",
    explanation: "`@forelse` gère automatiquement le cas null ou vide avec `@empty`."
  },
  {
    id: 9,
    question: "Quel est l'effet d’un `return Inertia::render(...)` dans un contrôleur ?",
    options: [
      "Retourne une vue Blade",
      "Retourne une réponse JSON",
      "Retourne un composant Inertia + props",
      "Retourne un layout vide"
    ],
    answer: "Retourne un composant Inertia + props",
    explanation: "Inertia remplace la vue classique en envoyant le composant Vue/React avec ses props."
  },
  {
    id: 10,
    question: "Que fait `Inertia::share()` dans un ServiceProvider ?",
    options: [
      "Partage les props entre plusieurs composants",
      "Partage des données globales à toutes les réponses Inertia",
      "Partage des layouts entre routes",
      "Cache les props sur plusieurs requêtes"
    ],
    answer: "Partage des données globales à toutes les réponses Inertia",
    explanation: "`Inertia::share()` injecte des données automatiquement dans tous les composants Inertia."
  },
  {
    id: 11,
    question: "Dans Blade, que retourne `@csrf` ?",
    options: [
      "Un token PHP",
      "Une directive JS",
      "Un champ caché HTML",
      "Un middleware Laravel"
    ],
    answer: "Un champ caché HTML",
    explanation: "`@csrf` insère `<input type='hidden' name='_token' value='...' />` dans le formulaire."
  },
  {
    id: 12,
    question: "Dans une requête Inertia, où sont envoyés les messages flash Laravel ?",
    options: [
      "Dans les headers",
      "Dans les props partagés via `Inertia::share()`",
      "Dans le layout Inertia",
      "Ils ne sont pas envoyés"
    ],
    answer: "Dans les props partagés via `Inertia::share()`",
    explanation: "Les messages flash doivent être explicitement partagés dans un ServiceProvider."
  },
  {
    id: 13,
    question: "Quelle est la différence entre `@include` et `@each` dans Blade ?",
    options: [
      "`@each` affiche plusieurs vues, `@include` une seule",
      "`@include` est plus rapide",
      "`@each` passe automatiquement une variable à chaque fois",
      "Aucune différence"
    ],
    answer: "`@each` affiche plusieurs vues, `@include` une seule",
    explanation: "`@each` est utilisé pour boucler sur un tableau et inclure une vue à chaque itération."
  },
  {
    id: 14,
    question: "Quel comportement produit `Inertia.visit(url, { preserveState: true })` ?",
    options: [
      "Recharge totalement la page",
      "Recharge le composant avec props réinitialisés",
      "Garde les données du composant actuel",
      "Supprime le cache Inertia"
    ],
    answer: "Garde les données du composant actuel",
    explanation: "`preserveState` garde les données locales, comme un champ texte ou un scroll."
  },
  {
    id: 15,
    question: "Dans Blade, que fait `@push('scripts')` ?",
    options: [
      "Insère du JS inline à la fin",
      "Ajoute du contenu dans une pile nommée",
      "Push un middleware",
      "Injecte un script dans le layout"
    ],
    answer: "Ajoute du contenu dans une pile nommée",
    explanation: "Avec `@stack('scripts')` dans le layout, `@push` ajoute du contenu dans cette pile."
  },
  {
    id: 16,
    question: "Dans Inertia, quelle méthode est utilisée pour faire un `POST` avec redirection ?",
    options: [
      "`Inertia.post()`",
      "`Inertia.redirect()`",
      "`Inertia.form().submit('post')`",
      "`axios.post()`"
    ],
    answer: "`Inertia.post()`",
    explanation: "`Inertia.post()` fait une requête AJAX, puis reçoit une redirection du contrôleur Laravel."
  },
  {
    id: 17,
    question: "Dans Blade, quelle est la sortie de `@verbatim {{ $x }} @endverbatim` ?",
    options: [
      "`{{ $x }}`",
      "La valeur de `$x`",
      "null",
      "Erreur"
    ],
    answer: "`{{ $x }}`",
    explanation: "`@verbatim` empêche Blade de parser le contenu entre les balises."
  },
  {
    id: 18,
    question: "Dans Inertia, que se passe-t-il si on utilise un `return redirect()->back()` ?",
    options: [
      "Inertia recharge la page",
      "La redirection est ignorée",
      "Inertia suit la redirection automatiquement",
      "Une erreur 302 est levée"
    ],
    answer: "Inertia suit la redirection automatiquement",
    explanation: "Inertia intercepte la redirection et recharge le composant ciblé."
  },
  {
    id: 19,
    question: "Dans Blade, quel est le rôle de `@php ... @endphp` ?",
    options: [
      "Inclure du code PHP dans la vue",
      "Éviter que Blade compile les accolades",
      "Déclarer un composant",
      "Créer un fichier PHP temporaire"
    ],
    answer: "Inclure du code PHP dans la vue",
    explanation: "Permet d’écrire du PHP inline dans la vue Blade."
  },
  {
    id: 20,
    question: "Dans Inertia, comment envoyer une requête avec une méthode PUT ?",
    options: [
      "`Inertia.put()`",
      "`axios.put()`",
      "`Inertia.visit(url, { method: 'put' })`",
      "Toutes les réponses"
    ],
    answer: "Toutes les réponses",
    explanation: "Inertia permet les trois approches, selon ton style ou le composant utilisé."
  },
  {
    id: 21,
    question: "Dans Blade, quelle est la différence entre `@auth` et `Auth::check()` ?",
    options: [
      "`@auth` ne fonctionne que dans Blade",
      "`Auth::check()` retourne une vue",
      "`@auth` est une directive de middleware",
      "Ils sont strictement identiques"
    ],
    answer: "`@auth` ne fonctionne que dans Blade",
    explanation: "`@auth` est une directive Blade, tandis que `Auth::check()` est une méthode utilisable en PHP."
  },
  {
    id: 22,
    question: "Dans Inertia, comment afficher un message d’erreur de validation dans un champ Vue ?",
    options: [
      "`errors.field`",
      "`$page.props.errors.field`",
      "`this.errors.field`",
      "`useForm().errors.field`"
    ],
    answer: "`$page.props.errors.field`",
    explanation: "Les erreurs sont injectées dans les props via Inertia, accessibles dans `$page.props.errors`."
  },
  {
    id: 23,
    question: "Dans Blade, que se passe-t-il si une section est `@yield('title')` mais non définie ?",
    options: [
      "Affiche une erreur",
      "Affiche une chaîne vide",
      "Affiche `title`",
      "Affiche `null`"
    ],
    answer: "Affiche une chaîne vide",
    explanation: "`@yield` retourne une chaîne vide si la section n’est pas définie."
  },
  {
    id: 24,
    question: "Dans Inertia, que permet le flag `preserveScroll: true` ?",
    options: [
      "Empêche de scroller",
      "Garde le scroll après navigation",
      "Force le scroll en haut",
      "Recharge la page"
    ],
    answer: "Garde le scroll après navigation",
    explanation: "`preserveScroll` garde la position de scroll actuelle après une requête Inertia."
  },
  {
    id: 25,
    question: "Dans Blade, que produit `@error('email')` si aucune erreur n’est présente ?",
    options: [
      "Rien",
      "Une exception",
      "null",
      "Affiche un message vide"
    ],
    answer: "Rien",
    explanation: "La directive `@error` ne produit rien si aucune erreur n’est définie pour ce champ."
  }
],

Quiz_React_1 : [
  {
    id: 1,
    question: "Quelle est la principale différence entre un composant fonctionnel et un composant de classe en React ?",
    options: [
      "Les composants fonctionnels ne peuvent pas gérer d'état",
      "Les composants de classe utilisent `this`, les composants fonctionnels non",
      "Les composants fonctionnels sont toujours plus rapides",
      "Les composants de classe ne peuvent pas recevoir de props"
    ],
    answer: "Les composants de classe utilisent `this`, les composants fonctionnels non",
    explanation: "Les composants de classe utilisent `this` pour accéder aux props, à l'état et aux méthodes, tandis que les composants fonctionnels (depuis React 16.8) utilisent les hooks (`useState`, `useEffect`, etc.) sans `this`."
  },
  {
    id: 2,
    question: "À quoi sert le hook `useEffect` en React ?",
    options: [
      "À gérer les styles CSS",
      "À effectuer des effets de bord comme des appels API ou des abonnements",
      "À créer des composants",
      "À remplacer le hook `useState`"
    ],
    answer: "À effectuer des effets de bord comme des appels API ou des abonnements",
    explanation: "`useEffect` est un hook qui permet d'exécuter du code après le rendu, idéal pour les effets de bord comme les appels réseau, les timers ou la manipulation du DOM."
  },
  {
    id: 3,
    question: "Quelle est la différence entre `state` et `props` ?",
    options: [
      "`state` est immuable, `props` est mutable",
      "`props` est passé par le parent, `state` est interne au composant",
      "`props` sert uniquement aux événements, `state` aux données",
      "Il n’y a aucune différence"
    ],
    answer: "`props` est passé par le parent, `state` est interne au composant",
    explanation: "Les `props` sont des données transmises par un composant parent et ne peuvent pas être modifiées par le composant enfant. Le `state` est géré localement par le composant et peut être modifié via `setState` ou `useState`."
  },
  {
    id: 4,
    question: "Pourquoi doit-on fournir une `key` unique lors du rendu de listes en React ?",
    options: [
      "Pour améliorer les performances et aider React à identifier les éléments",
      "Pour trier automatiquement les éléments",
      "Pour empêcher le rechargement de la page",
      "Pour éviter l'utilisation de `props`"
    ],
    answer: "Pour améliorer les performances et aider React à identifier les éléments",
    explanation: "Les clés (`key`) permettent à React de repérer quels éléments d’une liste ont changé, été ajoutés ou supprimés, évitant ainsi des re-rendus inutiles."
  },
  {
    id: 5,
    question: "Que retourne `useState` lorsqu'on l'appelle ?",
    options: [
      "Une valeur et une fonction pour la mettre à jour",
      "Seulement la valeur",
      "Seulement la fonction de mise à jour",
      "Un tableau vide"
    ],
    answer: "Une valeur et une fonction pour la mettre à jour",
    explanation: "`useState` retourne un tableau avec deux éléments : la valeur actuelle de l'état et une fonction pour le modifier, par exemple `[count, setCount]`."
  },
  {
    id: 6,
    question: "Quelle est la différence entre `React.memo` et `useMemo` ?",
    options: [
      "`React.memo` mémorise un composant, `useMemo` mémorise une valeur calculée",
      "`useMemo` est plus rapide que `React.memo`",
      "`React.memo` mémorise les fonctions, `useMemo` mémorise les composants",
      "Ils sont identiques"
    ],
    answer: "`React.memo` mémorise un composant, `useMemo` mémorise une valeur calculée",
    explanation: "`React.memo` empêche le re-rendu inutile d’un composant si ses props n'ont pas changé. `useMemo` évite de recalculer une valeur complexe tant que ses dépendances n'ont pas changé."
  },
  {
    id: 7,
    question: "Pourquoi utiliser `useCallback` ?",
    options: [
      "Pour mémoriser une fonction et éviter sa recréation à chaque rendu",
      "Pour créer des fonctions asynchrones",
      "Pour remplacer `setState`",
      "Pour améliorer le style CSS"
    ],
    answer: "Pour mémoriser une fonction et éviter sa recréation à chaque rendu",
    explanation: "`useCallback` retourne une version mémorisée d'une fonction qui ne change que si ses dépendances changent, ce qui peut éviter des re-rendus inutiles des composants enfants."
  },
  {
    id: 8,
    question: "Comment mettre à jour l'état basé sur l'état précédent en React ?",
    options: [
      "`setState(newValue)` directement",
      "`setState(prev => newValue)` avec une fonction de callback",
      "On ne peut pas le faire",
      "En utilisant uniquement Redux"
    ],
    answer: "`setState(prev => newValue)` avec une fonction de callback",
    explanation: "Lorsqu’une mise à jour dépend de la valeur précédente, on utilise la forme fonctionnelle : `setState(prev => prev + 1)` pour éviter des incohérences dues aux mises à jour asynchrones."
  },
  {
    id: 9,
    question: "Quelle est la différence entre `controlled` et `uncontrolled components` dans React ?",
    options: [
      "Les controlled utilisent le state React pour stocker les valeurs, les uncontrolled utilisent le DOM",
      "Les uncontrolled sont plus rapides",
      "Les controlled ne peuvent pas utiliser de formulaire",
      "Il n’y a pas de différence"
    ],
    answer: "Les controlled utilisent le state React pour stocker les valeurs, les uncontrolled utilisent le DOM",
    explanation: "Dans un composant contrôlé, la valeur d’un input est gérée par React via le state. Dans un composant non contrôlé, la valeur est lue directement depuis le DOM via une référence."
  },
  {
    id: 10,
    question: "Que fait le hook `useRef` ?",
    options: [
      "Stocke une valeur persistante qui ne provoque pas de re-rendu",
      "Crée un nouveau state",
      "Mémorise les props",
      "Met à jour un composant"
    ],
    answer: "Stocke une valeur persistante qui ne provoque pas de re-rendu",
    explanation: "`useRef` permet de stocker une valeur qui persiste entre les rendus sans déclencher de nouveau rendu lorsqu'elle change. Il est souvent utilisé pour accéder directement à un élément DOM."
  },
  {
    id: 11,
    question: "Que représente JSX en React ?",
    options: [
      "Une extension de syntaxe pour écrire du HTML dans JavaScript",
      "Un langage de templating spécifique à React",
      "Une librairie pour styliser les composants",
      "Un format de fichier React"
    ],
    answer: "Une extension de syntaxe pour écrire du HTML dans JavaScript",
    explanation: "JSX (JavaScript XML) est une syntaxe qui permet d’écrire des balises semblables au HTML dans du JavaScript. Il est compilé en appels `React.createElement()`."
  },
  {
    id: 12,
    question: "Pourquoi doit-on retourner un seul élément parent dans un composant React ?",
    options: [
      "Parce que React ne supporte pas plusieurs racines",
      "Parce que JSX doit avoir un élément parent unique",
      "Pour améliorer les performances",
      "Pour éviter les bugs de style CSS"
    ],
    answer: "Parce que JSX doit avoir un élément parent unique",
    explanation: "JSX doit retourner un seul élément parent car il est transformé en un appel de fonction unique. Pour éviter d'ajouter des `div` inutiles, on peut utiliser les fragments (`<>...</>`)."
  },
  {
    id: 13,
    question: "À quoi sert `React.Fragment` ?",
    options: [
      "À grouper plusieurs éléments sans ajouter de balise dans le DOM",
      "À remplacer le `div` principal",
      "À créer un composant optimisé",
      "À styliser plusieurs composants"
    ],
    answer: "À grouper plusieurs éléments sans ajouter de balise dans le DOM",
    explanation: "`React.Fragment` permet de retourner plusieurs éléments enfants sans créer de balise supplémentaire dans le DOM, évitant ainsi des `div` inutiles."
  },
  {
    id: 14,
    question: "Que fait la méthode `React.lazy()` ?",
    options: [
      "Elle charge un composant uniquement lorsque c'est nécessaire",
      "Elle met un composant en pause",
      "Elle mémorise un composant",
      "Elle crée un composant plus léger"
    ],
    answer: "Elle charge un composant uniquement lorsque c'est nécessaire",
    explanation: "`React.lazy()` permet de faire du chargement dynamique de composants (code splitting), afin de réduire la taille initiale du bundle."
  },
  {
    id: 15,
    question: "Quel est le rôle du composant `<Suspense>` en React ?",
    options: [
      "Afficher un fallback pendant le chargement d’un composant asynchrone",
      "Mettre une pause sur l'exécution d'un composant",
      "Optimiser le rendu d'une liste",
      "Empêcher le rechargement de la page"
    ],
    answer: "Afficher un fallback pendant le chargement d’un composant asynchrone",
    explanation: "`<Suspense>` est utilisé pour afficher un contenu temporaire (fallback) pendant le chargement d’un composant chargé avec `React.lazy()`."
  },
  {
    id: 16,
    question: "À quoi sert le Context API de React ?",
    options: [
      "À partager des données entre composants sans passer par les props",
      "À remplacer Redux",
      "À stocker l'état local",
      "À améliorer les performances"
    ],
    answer: "À partager des données entre composants sans passer par les props",
    explanation: "Le Context API permet de fournir et consommer des données globales dans une application, évitant le passage de props manuellement à chaque niveau."
  },
  {
    id: 17,
    question: "Quelle est la différence entre `ReactDOM.render()` et `createRoot()` ?",
    options: [
      "`ReactDOM.render()` est l'ancienne API, `createRoot()` est utilisée avec React 18",
      "`createRoot()` crée plusieurs points de montage",
      "Il n’y a pas de différence",
      "`ReactDOM.render()` est plus rapide"
    ],
    answer: "`ReactDOM.render()` est l'ancienne API, `createRoot()` est utilisée avec React 18",
    explanation: "Avec React 18, `createRoot()` remplace `ReactDOM.render()` pour supporter le mode concurrent et les nouvelles fonctionnalités."
  },
  {
    id: 18,
    question: "Comment empêcher un composant React de se re-render inutilement ?",
    options: [
      "En utilisant `React.memo`",
      "En supprimant les props",
      "En remplaçant `useState` par `useEffect`",
      "En utilisant `setTimeout`"
    ],
    answer: "En utilisant `React.memo`",
    explanation: "`React.memo` empêche un composant fonctionnel de se re-render si ses props n'ont pas changé, optimisant ainsi les performances."
  },
  {
    id: 19,
    question: "Que fait le hook `useLayoutEffect` ?",
    options: [
      "S’exécute juste après le rendu mais avant la mise à jour du DOM visible",
      "S’exécute après `useEffect`",
      "Crée un effet permanent",
      "Met en pause le rendu"
    ],
    answer: "S’exécute juste après le rendu mais avant la mise à jour du DOM visible",
    explanation: "`useLayoutEffect` est similaire à `useEffect`, mais il s’exécute plus tôt, ce qui permet de lire ou modifier le DOM avant qu’il soit affiché à l’écran."
  },
  {
    id: 20,
    question: "Quelle est la différence principale entre `BrowserRouter` et `HashRouter` dans React Router ?",
    options: [
      "`BrowserRouter` utilise l'API d'historique HTML5, `HashRouter` utilise l’ancre (`#`)",
      "`HashRouter` est plus rapide",
      "`BrowserRouter` fonctionne uniquement en mode production",
      "Il n’y a pas de différence"
    ],
    answer: "`BrowserRouter` utilise l'API d'historique HTML5, `HashRouter` utilise l’ancre (`#`)",
    explanation: "`BrowserRouter` gère les routes avec l’historique HTML5, offrant des URL propres, tandis que `HashRouter` utilise le hash dans l’URL (`/#/page`) pour la compatibilité avec certains serveurs."
  }
],

Quiz_React_2 : [
  {
    id: 21,
    question: "À quoi sert le hook `useImperativeHandle` en React ?",
    options: [
      "À personnaliser les valeurs exposées par un composant via `ref`",
      "À gérer l'état interne d'un composant",
      "À remplacer `useEffect`",
      "À forcer un re-render"
    ],
    answer: "À personnaliser les valeurs exposées par un composant via `ref`",
    explanation: "`useImperativeHandle` est utilisé avec `forwardRef` pour contrôler quelles méthodes ou valeurs sont accessibles à un composant parent lorsqu'il utilise une référence."
  },
  {
    id: 22,
    question: "Que fait le hook `useId` introduit dans React 18 ?",
    options: [
      "Crée un nouvel état unique",
      "Génère un identifiant unique stable entre les rendus",
      "Mémorise une valeur persistante",
      "Retourne un numéro aléatoire"
    ],
    answer: "Génère un identifiant unique stable entre les rendus",
    explanation: "`useId` est utile pour générer des identifiants uniques qui restent constants entre les rendus, idéal pour l’accessibilité (aria, labels...)."
  },
  {
    id: 23,
    question: "Quelle est la différence entre `useTransition` et `useDeferredValue` ?",
    options: [
      "`useDeferredValue` est plus rapide",
      "Ils sont identiques",
      "`useTransition` fonctionne uniquement avec `useEffect`",
      "`useTransition` diffère un état, `useDeferredValue` diffère une valeur",
    ],
    answer: "`useTransition` diffère un état, `useDeferredValue` diffère une valeur",
    explanation: "`useTransition` marque certaines mises à jour comme non urgentes, tandis que `useDeferredValue` retarde l'utilisation d'une valeur jusqu'à ce que React soit prêt."
  },
  {
    id: 24,
    question: "Pourquoi utiliser `ErrorBoundary` en React ?",
    options: [
      "Pour capturer les erreurs JavaScript dans l’UI et afficher un fallback",
      "Pour empêcher le code de s'exécuter",
      "Pour déboguer le code serveur",
      "Pour améliorer les performances"
    ],
    answer: "Pour capturer les erreurs JavaScript dans l’UI et afficher un fallback",
    explanation: "Un Error Boundary intercepte les erreurs d’exécution dans les composants enfants et permet d’afficher un contenu alternatif sans planter toute l'application."
  },
  {
    id: 25,
    question: "Que fait `React.StrictMode` ?",
    options: [
      "Optimise le code pour la production",
      "Empêche le rendu concurrent",
      "Active des vérifications supplémentaires et avertissements en développement",
      "Empêche les erreurs"
    ],
    answer: "Active des vérifications supplémentaires et avertissements en développement",
    explanation: "`React.StrictMode` n'affecte pas le rendu en production, il sert à détecter des problèmes potentiels pendant le développement."
  },
  {
    id: 26,
    question: "Comment utiliser `forwardRef` en React ?",
    options: [
      "Pour passer une référence à un élément enfant",
      "Pour créer un hook personnalisé",
      "Pour mémoriser une fonction",
      "Pour créer un composant dynamique"
    ],
    answer: "Pour passer une référence à un élément enfant",
    explanation: "`forwardRef` permet à un composant de transmettre une ref reçue à un élément enfant ou un autre composant."
  },
  {
    id: 27,
    question: "À quoi sert `React.PureComponent` ?",
    options: [
      "À éviter un re-render si les props et l'état n'ont pas changé",
      "À forcer un re-render",
      "À remplacer `React.memo`",
      "À rendre un composant asynchrone",
    ],
    answer: "À éviter un re-render si les props et l'état n'ont pas changé",
    explanation: "`PureComponent` compare automatiquement les props et l'état avec une comparaison superficielle pour éviter des rendus inutiles."
  },
  {
    id: 28,
    question: "Quelle est la différence entre `React.memo` et `React.PureComponent` ?",
    options: [
      "`React.memo` est pour les composants fonctionnels, `PureComponent` pour les classes",
      "`React.memo` est plus rapide",
      "`PureComponent` fonctionne avec les hooks",
      "Ils sont identiques"
    ],
    answer: "`React.memo` est pour les composants fonctionnels, `PureComponent` pour les classes",
    explanation: "`React.memo` est un HOC pour optimiser les composants fonctionnels, alors que `PureComponent` est une classe optimisée."
  },
  {
    id: 29,
    question: "Comment annuler un `useEffect` en cours ?",
    options: [
      "En appelant `clearEffect()`",
      "En retournant une fonction de nettoyage (cleanup) dans `useEffect`",
      "En mettant `useEffect` dans un `if`",
      "On ne peut pas annuler"
    ],
    answer: "En retournant une fonction de nettoyage (cleanup) dans `useEffect`",
    explanation: "La fonction retournée dans `useEffect` est appelée avant le prochain effet ou lors du démontage, permettant d'annuler des timers, des abonnements, etc."
  },
  {
    id: 30,
    question: "À quoi sert `useReducer` par rapport à `useState` ?",
    options: [
      "À remplacer `useEffect`",
      "À gérer un état complexe avec plusieurs actions",
      "À créer des refs",
      "À améliorer le style CSS"
    ],
    answer: "À gérer un état complexe avec plusieurs actions",
    explanation: "`useReducer` est utile pour gérer un état qui évolue selon différentes actions, en centralisant la logique dans une fonction réductrice."
  },
  {
    id: 31,
    question: "Que permet le pattern Render Props en React ?",
    options: [
      "Passer du HTML dans une prop",
      "Partager des styles",
      "Créer des hooks personnalisés",
      "Partager de la logique entre composants via une fonction passée en prop",
    ],
    answer: "Partager de la logique entre composants via une fonction passée en prop",
    explanation: "Le Render Props pattern consiste à passer une fonction en prop qui retourne du JSX, permettant de réutiliser la logique tout en laissant le contrôle du rendu."
  },
  {
    id: 32,
    question: "À quoi sert `React.cloneElement` ?",
    options: [
      "À créer un élément React à partir d'une chaîne",
      "À copier un élément React en modifiant ses props",
      "À créer un composant dynamique",
      "À dupliquer un élément dans le DOM"
    ],
    answer: "À copier un élément React en modifiant ses props",
    explanation: "`React.cloneElement` prend un élément React existant et retourne une copie avec des props modifiées ou ajoutées."
  },
  {
    id: 33,
    question: "Quelle est la différence entre le rendu côté serveur (SSR) et le rendu côté client (CSR) ?",
    options: [
      "SSR génère le HTML sur le serveur, CSR génère le HTML dans le navigateur",
      "CSR est plus rapide",
      "SSR ne nécessite pas de React",
      "Ils sont identiques"
    ],
    answer: "SSR génère le HTML sur le serveur, CSR génère le HTML dans le navigateur",
    explanation: "En SSR, le serveur renvoie un HTML déjà prêt, améliorant le SEO et le temps de chargement initial. En CSR, le navigateur génère le HTML après réception du JavaScript."
  },
  {
    id: 34,
    question: "À quoi sert `hydrateRoot` en React 18 ?",
    options: [
      "À créer un nouvel état",
      "À hydrater une application côté client après un rendu côté serveur",
      "À optimiser les images",
      "À rendre un composant paresseux"
    ],
    answer: "À hydrater une application côté client après un rendu côté serveur",
    explanation: "`hydrateRoot` permet de lier le HTML généré côté serveur avec la logique React côté client pour rendre l'application interactive."
  },
  {
    id: 35,
    question: "Que fait `startTransition` en React 18 ?",
    options: [
      "Démarre un rendu côté serveur",
      "Charge un composant dynamiquement",
      "Crée un suspense",
      "Marque certaines mises à jour comme non urgentes pour éviter de bloquer l’UI",
    ],
    answer: "Marque certaines mises à jour comme non urgentes pour éviter de bloquer l’UI",
    explanation: "`startTransition` permet de différer des mises à jour non prioritaires afin de garder l'interface fluide."
  },
  {
    id: 36,
    question: "Pourquoi faut-il éviter de mettre directement un objet ou un tableau comme dépendance dans un hook ?",
    options: [
      "Parce que leur référence change à chaque rendu",
      "Parce que React ne supporte pas les tableaux",
      "Parce que cela bloque le rendu",
      "Parce que c'est plus lent"
    ],
    answer: "Parce que leur référence change à chaque rendu",
    explanation: "Même si le contenu est identique, un nouvel objet/ tableau a une nouvelle référence, déclenchant inutilement le hook."
  },
  {
    id: 37,
    question: "À quoi sert le hook `useDebugValue` ?",
    options: [
      "À déboguer les composants",
      "À afficher des logs dans la console",
      "À afficher des informations dans React DevTools pour un hook personnalisé",
      "À optimiser un rendu"
    ],
    answer: "À afficher des informations dans React DevTools pour un hook personnalisé",
    explanation: "`useDebugValue` permet de donner un label ou une valeur à afficher dans React DevTools pour mieux comprendre le comportement d’un hook personnalisé."
  },
  {
    id: 38,
    question: "Quelle est la différence entre `defaultValue` et `value` dans un input contrôlé ?",
    options: [
      "`defaultValue` est plus rapide",
      "Ils sont identiques",
      "`value` ne peut pas être modifié",
      "`value` lie l'input au state React, `defaultValue` définit la valeur initiale uniquement",
    ],
    answer: "`value` lie l'input au state React, `defaultValue` définit la valeur initiale uniquement",
    explanation: "`value` rend l’input contrôlé par React, alors que `defaultValue` fixe seulement la valeur par défaut sans contrôle après l’initialisation."
  },
  {
    id: 39,
    question: "Comment créer un hook personnalisé en React ?",
    options: [
      "En héritant d'un composant",
      "En créant une classe",
      "En créant une fonction commençant par `use` et en utilisant d'autres hooks dedans",
      "En utilisant `React.createHook`"
    ],
    answer: "En créant une fonction commençant par `use` et en utilisant d'autres hooks dedans",
    explanation: "Un hook personnalisé est une fonction qui commence par `use` et qui peut combiner d'autres hooks pour réutiliser de la logique dans plusieurs composants."
  },
  {
    id: 40,
    question: "Pourquoi React impose que les hooks soient appelés au même ordre à chaque rendu ?",
    options: [
      "Pour éviter les fuites de mémoire",
      "Pour que React puisse associer correctement chaque hook à son état interne",
      "Pour améliorer la vitesse",
      "Pour réduire le code"
    ],
    answer: "Pour que React puisse associer correctement chaque hook à son état interne",
    explanation: "React s’appuie sur l’ordre d’appel des hooks pour gérer leur état. Un ordre différent entre les rendus provoquerait des erreurs."
  }
],

Quiz_React_3 : [
  {
    id: 1,
    question: "Que va afficher ce code ?",
    code: `function App() {
  const [count, setCount] = React.useState(0);

  setCount(count + 1);

  return <div>{count}</div>;
}`,
    options: [
      "0",
      "1",
      "Boucle infinie",
      "Erreur"
    ],
    answer: "Boucle infinie",
    explanation: "Appeler `setCount` directement dans le corps du composant provoque un re-render infini car l'état change à chaque rendu."
  },
  {
    id: 2,
    question: "Que se passe-t-il ici ?",
    code: `function Counter() {
  const [count, setCount] = React.useState(0);

  function handleClick() {
    setCount(prev => prev + 1);
    setCount(prev => prev + 1);
  }

  return <button onClick={handleClick}>{count}</button>;
}`,
    options: [
      "Le compteur augmente de 1 par clic",
      "Le compteur augmente de 2 par clic",
      "Erreur",
      "Comportement imprévisible"
    ],
    answer: "Le compteur augmente de 2 par clic",
    explanation: "Utiliser la fonction de mise à jour (`prev => prev + 1`) permet d’enchaîner les mises à jour correctement dans le même cycle."
  },
  {
    id: 3,
    question: "Pourquoi le `console.log` affiche toujours 0 ?",
    code: `function App() {
  const [count, setCount] = React.useState(0);

  function increment() {
    setCount(count + 1);
    console.log(count);
  }

  return <button onClick={increment}>+</button>;
}`,
    options: [
      "Parce que React met à jour l'état immédiatement",
      "Parce que la valeur de `count` est figée dans le scope de la fonction",
      "Parce que `console.log` est appelé avant `setCount`",
      "Bug de React"
    ],
    answer: "Parce que la valeur de `count` est figée dans le scope de la fonction",
    explanation: "Le `count` loggé est celui de la fermeture courante (closure) avant que React ne déclenche le re-render."
  },
  {
    id: 4,
    question: "Que se passe-t-il lors du premier clic ?",
    code: `function App() {
  const [text, setText] = React.useState("Hello");

  React.useEffect(() => {
    setText(text + " World");
  }, []);

  return <div>{text}</div>;
}`,
    options: [
      "Affiche Hello",
      "Affiche Hello World",
      "Erreur",
      "Boucle infinie"
    ],
    answer: "Affiche Hello World",
    explanation: "Le `useEffect` avec `[]` s'exécute une seule fois après le premier rendu et modifie l'état."
  },
  {
    id: 5,
    question: "Pourquoi la liste ne se met pas à jour correctement ?",
    code: `function List() {
  const [items, setItems] = React.useState(["a", "b"]);

  function addItem() {
    items.push("c");
    setItems(items);
  }

  return <button onClick={addItem}>{items.join(",")}</button>;
}`,
    options: [
      "Parce que React ne détecte pas la mutation directe",
      "Parce que `setItems` doit toujours recevoir un tableau vide",
      "Parce que `useState` ne supporte pas les tableaux",
      "Bug de React"
    ],
    answer: "Parce que React ne détecte pas la mutation directe",
    explanation: "Il faut créer un nouveau tableau (`setItems([...items, 'c'])`) pour que React détecte le changement."
  },
  {
    id: 6,
    question: "Que va afficher ce code après 3 secondes ?",
    code: `function Timer() {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    setTimeout(() => {
      setCount(count + 1);
    }, 3000);
  }, []);

  return <div>{count}</div>;
}`,
    options: [
      "0",
      "1",
      "Erreur",
      "Comportement imprévisible"
    ],
    answer: "1",
    explanation: "La closure capture la valeur initiale de `count` (0) mais l’incrémente une fois après 3 secondes."
  },
  {
    id: 7,
    question: "Pourquoi `alert` affiche 'John' même après changement de `name` ?",
    code: `function App() {
  const [name, setName] = React.useState("John");

  function showName() {
    setTimeout(() => {
      alert(name);
    }, 2000);
  }

  return (
    <>
      <button onClick={() => setName("Jane")}>Change</button>
      <button onClick={showName}>Show</button>
    </>
  );
}`,
    options: [
      "Parce que setTimeout bloque la mise à jour",
      "Parce que la closure capture l'ancienne valeur",
      "Parce que React garde l'état en cache",
      "Bug de React"
    ],
    answer: "Parce que la closure capture l'ancienne valeur",
    explanation: "La fonction dans `setTimeout` utilise la valeur de `name` au moment où `showName` a été appelée."
  },
  {
    id: 8,
    question: "Que va afficher ce code ?",
    code: `function App() {
  const [value, setValue] = React.useState(false);

  return (
    <div onClick={() => setValue(!value)}>
      {value && "Clicked"}
    </div>
  );
}`,
    options: [
      "Affiche 'Clicked' dès le début",
      "Affiche 'Clicked' après un clic",
      "Ne rien afficher",
      "Erreur"
    ],
    answer: "Affiche 'Clicked' après un clic",
    explanation: "L'opérateur `&&` n'affiche le texte que si `value` est `true`."
  },
  {
    id: 9,
    question: "Pourquoi le composant enfant ne se re-render pas ?",
    code: `const Child = React.memo(function Child({ value }) {
  console.log("Render Child");
  return <div>{value}</div>;
});

function App() {
  const [count, setCount] = React.useState(0);
  return (
    <>
      <button onClick={() => setCount(count + 1)}>+</button>
      <Child value="test" />
    </>
  );
}`,
    options: [
      "Parce que React.memo empêche le re-render si les props ne changent pas",
      "Parce que React ne re-render pas les composants enfants",
      "Parce que 'value' est une string",
      "Bug de React"
    ],
    answer: "Parce que React.memo empêche le re-render si les props ne changent pas",
    explanation: "`React.memo` ne re-render le composant que si les props changent."
  },
  {
    id: 10,
    question: "Que va se passer si on clique rapidement plusieurs fois ?",
    code: `function App() {
  const [count, setCount] = React.useState(0);

  function increment() {
    setTimeout(() => {
      setCount(count + 1);
    }, 1000);
  }

  return <button onClick={increment}>{count}</button>;
}`,
    options: [
      "Le compteur s'incrémente de 1 à chaque clic",
      "Plusieurs clics rapides ne s'additionnent pas correctement",
      "Erreur",
      "Comportement aléatoire"
    ],
    answer: "Plusieurs clics rapides ne s'additionnent pas correctement",
    explanation: "Chaque callback capture la valeur de `count` au moment du clic, écrasant les autres mises à jour."
  },


  {
    id: 21,
    question: "Que va afficher ce code ?",
    code: `function App() {
  const [count, setCount] = React.useState(0);

  setCount(count + 1);

  return <div>{count}</div>;
}`,
    options: [
      "0",
      "1",
      "Boucle infinie",
      "Erreur"
    ],
    answer: "Boucle infinie",
    explanation: "L'appel direct à `setCount` dans le corps du composant provoque un re-render infini."
  },
  {
    id: 22,
    question: "Pourquoi ce bouton ne se met pas à jour comme prévu ?",
    code: `function Counter() {
  let count = 0;
  const increment = () => {
    count++;
    console.log(count);
  };
  return <button onClick={increment}>{count}</button>;
}`,
    options: [
      "Le state n'est pas utilisé",
      "Le count est réinitialisé à chaque rendu",
      "Il faut utiliser useRef",
      "C'est un problème de scope"
    ],
    answer: "Le state n'est pas utilisé",
    explanation: "React ne re-render pas sur les variables locales, il faut utiliser `useState`."
  },
  {
    id: 23,
    question: "Que va afficher ce code après un clic ?",
    code: `function App() {
  const [count, setCount] = React.useState(0);

  return (
    <button onClick={() => {
      setCount(count + 1);
      setCount(count + 1);
    }}>
      {count}
    </button>
  );
}`,
    options: [
      "1",
      "2",
      "0",
      "Dépend de React"
    ],
    answer: "1",
    explanation: "Les deux appels utilisent la même valeur de `count` (0) à cause du batching."
  },
  {
    id: 24,
    question: "Pourquoi `console.log` affiche toujours l'ancienne valeur ?",
    code: `function App() {
  const [value, setValue] = React.useState('');

  const handleChange = e => {
    setValue(e.target.value);
    console.log(value);
  };

  return <input value={value} onChange={handleChange} />;
}`,
    options: [
      "Bug de React",
      "Le state est asynchrone",
      "Il faut utiliser useRef",
      "Le value n'est pas défini"
    ],
    answer: "Le state est asynchrone",
    explanation: "La mise à jour du state est planifiée, `value` contient encore l'ancienne valeur au moment du log."
  },
  {
    id: 25,
    question: "Que se passe-t-il ici ?",
    code: `function App() {
  const [data, setData] = React.useState({ name: "John" });

  const update = () => {
    data.name = "Doe";
    setData(data);
  };

  return <button onClick={update}>{data.name}</button>;
}`,
    options: [
      "Le bouton passe à Doe",
      "Le rendu ne change pas",
      "Erreur",
      "Boucle infinie"
    ],
    answer: "Le rendu ne change pas",
    explanation: "React compare les références, ici l'objet n'a pas changé de référence donc pas de re-render."
  },
  {
    id: 26,
    question: "Pourquoi le composant enfant ne se re-render pas ?",
    code: `function Child({ onClick }) {
  console.log("Render Child");
  return <button onClick={onClick}>Click</button>;
}

function App() {
  const [count, setCount] = React.useState(0);
  const handleClick = () => setCount(c => c + 1);

  return <Child onClick={handleClick} />;
}`,
    options: [
      "useCallback empêche le render",
      "Pas de props modifiées",
      "React.memo utilisé",
      "Le state ne change pas"
    ],
    answer: "Pas de props modifiées",
    explanation: "Si `React.memo` était utilisé, et que la fonction `onClick` ne change pas, l'enfant ne se re-render pas."
  },
  {
    id: 27,
    question: "Que va-t-il se passer ici ?",
    code: `function App() {
  const [text, setText] = React.useState("Hello");

  React.useEffect(() => {
    setText("World");
  }, [text]);

  return <div>{text}</div>;
}`,
    options: [
      "Hello",
      "World",
      "Boucle infinie",
      "Erreur"
    ],
    answer: "Boucle infinie",
    explanation: "L'effet dépend de `text` et modifie `text`, déclenchant un rendu infini."
  },
  {
    id: 28,
    question: "Pourquoi le style ne change pas ?",
    code: `function App() {
  const [color, setColor] = React.useState("red");

  return (
    <div style={{ backgroundColor: color }}>
      <button onClick={() => color = "blue"}>Change</button>
    </div>
  );
}`,
    options: [
      "Problème de CSS",
      "La variable n'est pas un state",
      "Il faut utiliser className",
      "React bloque la mise à jour"
    ],
    answer: "La variable n'est pas un state",
    explanation: "Changer une variable simple ne déclenche pas de re-render, il faut utiliser `setColor`."
  },
  {
    id: 29,
    question: "Que va afficher le console.log après clic ?",
    code: `function App() {
  const [count, setCount] = React.useState(0);

  return (
    <button onClick={() => {
      setCount(c => c + 1);
      setCount(c => c + 1);
      console.log(count);
    }}>
      {count}
    </button>
  );
}`,
    options: [
      "0",
      "1",
      "2",
      "Dépend de React"
    ],
    answer: "0",
    explanation: "`count` dans la closure contient l'ancienne valeur, même si deux mises à jour sont planifiées."
  },
  {
    id: 30,
    question: "Pourquoi ce composant perd son état quand on tape ?",
    code: `function App() {
  const [text, setText] = React.useState("");

  return (
    <form>
      <input value={text} onChange={e => setText(e.target.value)} />
    </form>
  );
}`,
    options: [
      "C'est normal",
      "Il manque preventDefault",
      "React reset le state à chaque frappe",
      "C'est un bug"
    ],
    answer: "C'est normal",
    explanation: "Ici tout fonctionne, mais si le formulaire avait un submit implicite, il faudrait `preventDefault` pour éviter un reset."
  }



],

Quiz_TypeScript_1 : [
  {
    id: 1,
    question: "Quelle est la principale différence entre 'interface' et 'type' en TypeScript ?",
    options: [
      "Les interfaces peuvent être étendues, les types non",
      "Les types peuvent représenter des unions ou intersections, les interfaces non",
      "Il n’y a aucune différence",
      "Les interfaces sont plus rapides à compiler"
    ],
    answer: "Les types peuvent représenter des unions ou intersections, les interfaces non",
    explanation: "Les interfaces et types sont similaires pour décrire des objets, mais les 'type' peuvent aussi représenter des unions, intersections et primitives."
  },
  {
    id: 2,
    question: "Que signifie 'strictNullChecks' dans tsconfig.json ?",
    options: [
      "Autorise null et undefined dans toutes les variables",
      "Empêche l’affectation de null/undefined à un type non nullable",
      "Supprime la vérification des types",
      "Convertit automatiquement null en undefined"
    ],
    answer: "Empêche l’affectation de null/undefined à un type non nullable",
    explanation: "'strictNullChecks' force à traiter null et undefined explicitement, évitant des erreurs inattendues."
  },
  {
    id: 3,
    question: "Comment définir un type pour une fonction qui retourne une Promise<string> ?",
    options: [
      "() => Promise<string>",
      "() => string",
      "Promise<string>()",
      "string => Promise"
    ],
    answer: "() => Promise<string>",
    explanation: "En TypeScript, on définit le type de retour asynchrone comme Promise<Type>."
  },
  {
    id: 4,
    question: "Quelle syntaxe permet de créer un type à partir des clés d’un objet ?",
    options: [
      "typeof obj",
      "keyof typeof obj",
      "Object.keys(obj)",
      "keys(obj)"
    ],
    answer: "keyof typeof obj",
    explanation: "'keyof' retourne l’union des noms de clés d’un type ou objet."
  },
  {
    id: 5,
    question: "À quoi sert 'as const' en TypeScript ?",
    options: [
      "Convertit un tableau en constante immuable",
      "Empêche toute modification de variable",
      "Force le type littéral exact des valeurs",
      "Rend le code plus rapide"
    ],
    answer: "Force le type littéral exact des valeurs",
    explanation: "'as const' transforme les valeurs en types littéraux, ce qui empêche leur élargissement."
  },
  {
    id: 6,
    question: "Comment rendre toutes les propriétés d’un type optionnelles ?",
    options: [
      "Optional<Type>",
      "type MyType = Partial<Type>",
      "Nullable<Type>",
      "Optionalize<Type>"
    ],
    answer: "type MyType = Partial<Type>",
    explanation: "Le type utilitaire 'Partial' rend toutes les propriétés optionnelles."
  },
  {
    id: 7,
    question: "Quel mot-clé empêche un type d’être étendu ou implémenté ?",
    options: [
      "sealed",
      "readonly",
      "final",
      "Il n’existe pas directement"
    ],
    answer: "Il n’existe pas directement",
    explanation: "TypeScript ne fournit pas de mot-clé 'final' ou 'sealed', mais on peut utiliser des techniques comme les types privés pour empêcher l’extension."
  },
  {
    id: 8,
    question: "Que fait 'readonly' sur une propriété de type ?",
    options: [
      "Empêche sa lecture",
      "Empêche sa modification après initialisation",
      "Force une valeur par défaut",
      "Rend la propriété publique"
    ],
    answer: "Empêche sa modification après initialisation",
    explanation: "'readonly' rend la propriété immuable après l’initialisation."
  },
  {
    id: 9,
    question: "Comment obtenir le type de retour d'une fonction existante ?",
    options: [
      "ReturnType<typeof maFonction>",
      "typeof Return<maFonction>",
      "FunctionReturn<maFonction>",
      "getReturnType(maFonction)"
    ],
    answer: "ReturnType<typeof maFonction>",
    explanation: "'ReturnType' est un type utilitaire intégré qui infère le type de retour d’une fonction."
  },
  {
    id: 10,
    question: "Quel est l'intérêt de 'never' en TypeScript ?",
    options: [
      "Type pour les valeurs qui n’arrivent jamais",
      "Type pour les variables nulles",
      "Type pour les valeurs inconnues",
      "Type pour une chaîne vide"
    ],
    answer: "Type pour les valeurs qui n’arrivent jamais",
    explanation: "'never' représente un type qui n’existe pas, utile pour les fonctions qui ne retournent jamais ou pour l’exhaustivité."
  },
  {
    id: 11,
    question: "Quelle est la différence entre 'unknown' et 'any' ?",
    options: [
      "'unknown' nécessite un contrôle de type avant usage",
      "'any' est plus sûr que 'unknown'",
      "Aucune différence",
      "'unknown' est uniquement pour les objets"
    ],
    answer: "'unknown' nécessite un contrôle de type avant usage",
    explanation: "'unknown' est plus sûr que 'any' car il impose de vérifier le type avant de l'utiliser."
  },
  {
    id: 12,
    question: "Comment combiner deux types en un seul contenant toutes leurs propriétés ?",
    options: [
      "type NewType = TypeA | TypeB",
      "type NewType = TypeA & TypeB",
      "merge<TypeA, TypeB>",
      "type NewType = combine<TypeA, TypeB>"
    ],
    answer: "type NewType = TypeA & TypeB",
    explanation: "Le symbole '&' crée un type intersection qui fusionne toutes les propriétés."
  },
  {
    id: 13,
    question: "Que signifie 'type assertion' en TypeScript ?",
    options: [
      "Vérification du type à l’exécution",
      "Conversion d’un type vers un autre à la compilation",
      "Débogage du type",
      "Création d’un nouveau type"
    ],
    answer: "Conversion d’un type vers un autre à la compilation",
    explanation: "La 'type assertion' indique à TypeScript d’interpréter une valeur comme un autre type."
  },
  {
    id: 14,
    question: "Que fait 'Exclude<T, U>' ?",
    options: [
      "Retire de T les types assignables à U",
      "Ajoute à T les types de U",
      "Fusionne T et U",
      "Convertit T en U"
    ],
    answer: "Retire de T les types assignables à U",
    explanation: "'Exclude' est un type utilitaire qui filtre les types de T qui sont assignables à U."
  },
  {
    id: 15,
    question: "Quelle est la différence entre 'interface' et 'abstract class' ?",
    options: [
      "Une interface ne contient pas d’implémentation, une classe abstraite peut en contenir",
      "Une classe abstraite ne peut pas être étendue",
      "Les interfaces ne peuvent pas avoir de propriétés",
      "Il n’y a aucune différence"
    ],
    answer: "Une interface ne contient pas d’implémentation, une classe abstraite peut en contenir",
    explanation: "Les classes abstraites peuvent avoir du code implémenté, les interfaces ne définissent que la structure."
  },
  {
    id: 16,
    question: "Comment créer un type où toutes les propriétés sont en lecture seule ?",
    options: [
      "type MyType = Readonly<Type>",
      "type MyType = Immutable<Type>",
      "type MyType = Constant<Type>",
      "type MyType = Static<Type>"
    ],
    answer: "type MyType = Readonly<Type>",
    explanation: "Le type utilitaire 'Readonly' rend toutes les propriétés immuables."
  },
  {
    id: 17,
    question: "Comment rendre une seule propriété optionnelle dans un type ?",
    options: [
      "En utilisant Partial<Type>",
      "En marquant la propriété avec '?'",
      "En utilisant Optional<Type, 'prop'>",
      "En utilisant Readonly<Type>"
    ],
    answer: "En marquant la propriété avec '?'",
    explanation: "On peut rendre une propriété optionnelle directement dans sa déclaration en ajoutant '?'."
  },
  {
    id: 18,
    question: "Quel est le rôle du mot-clé 'implements' ?",
    options: [
      "Hériter d’une classe",
      "Vérifier qu’une classe respecte une interface",
      "Fusionner deux interfaces",
      "Étendre un type"
    ],
    answer: "Vérifier qu’une classe respecte une interface",
    explanation: "'implements' s’assure qu’une classe contient bien toutes les propriétés et méthodes d’une interface."
  },
  {
    id: 19,
    question: "Que fait 'Pick<T, K>' ?",
    options: [
      "Sélectionne certaines clés K du type T",
      "Supprime certaines clés K du type T",
      "Fusionne deux types",
      "Crée un type vide"
    ],
    answer: "Sélectionne certaines clés K du type T",
    explanation: "'Pick' est un utilitaire qui crée un type avec seulement les propriétés spécifiées."
  },
  {
    id: 20,
    question: "Comment activer le mode strict en TypeScript ?",
    options: [
      "En ajoutant 'use strict' en haut du fichier",
      "En définissant 'strict': true dans tsconfig.json",
      "En installant @types/strict",
      "En ajoutant 'strictMode: on' dans package.json"
    ],
    answer: "En définissant 'strict': true dans tsconfig.json",
    explanation: "Le mode strict active plusieurs vérifications de sécurité dans TypeScript."
  }
]




}

export default data;