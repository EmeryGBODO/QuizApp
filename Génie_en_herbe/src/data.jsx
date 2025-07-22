const quizNodeExpress = [
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
];
export default quizNodeExpress;