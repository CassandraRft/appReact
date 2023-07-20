// Importe le module esbuild : "esbuild" est un outil de construction (bundler) rapide et efficace pour JavaScript et TypeScript. Il est conçu pour la création de projets front-end et back-end, ainsi que pour les applications Node.js.
const esbuild = require('esbuild');

// Utilise esbuild pour construire le code
esbuild.build({
  // Spécifie le point d'entrée du code à compiler, ici le fichier "server.jsx" dans le dossier "server"
  entryPoints: ['server/server.jsx'],
  // Spécifie le fichier de sortie généré après la compilation, ici "build/server.js"
  outfile: 'build/server.js',
  // Spécifie la plateforme cible, ici "node" pour exécuter le code dans un environnement Node.js
  platform: 'node',
  // Active la surveillance des changements, ce qui signifie que esbuild surveillera les fichiers sources et recompilera automatiquement en cas de modification
  watch: true,
}).catch(() => process.exit(1)); // En cas d'erreur lors de la compilation, le processus sera terminé avec un code d'erreur 1
