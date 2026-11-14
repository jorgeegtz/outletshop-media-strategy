import { execFileSync } from 'node:child_process';
import { copyFileSync, mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const projectRoot = process.cwd();
const distDir = join(projectRoot, 'dist');

mkdirSync(distDir, { recursive: true });

const esbuildBin = '/opt/homebrew/lib/node_modules/vercel/node_modules/.bin/esbuild';

execFileSync(
  esbuildBin,
  [
    join(projectRoot, 'src/main.ts'),
    '--bundle',
    '--format=iife',
    '--target=es2022',
    `--outfile=${join(distDir, 'app.js')}`
  ],
  { stdio: 'inherit' }
);

copyFileSync(join(projectRoot, 'src/styles.css'), join(distDir, 'styles.css'));

const shellDocument = [
  '<!DOCTYPE html>',
  '<html lang="es">',
  '<head>',
  '  <meta charset="UTF-8" />',
  '  <meta name="viewport" content="width=device-width, initial-scale=1.0" />',
  '  <title>OutletShop Media Strategy (TypeScript) | Jorge Gutierrez</title>',
  '  <link rel="preconnect" href="https://fonts.googleapis.com">',
  '  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>',
  '  <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,400..800;1,9..40,400..700&family=JetBrains+Mono:wght@400;500;600;700&display=swap" rel="stylesheet">',
  '  <link rel="stylesheet" href="./styles.css" />',
  '</head>',
  '<body>',
  '  <div id="app-root"></div>',
  '  <script src="./app.js"></script>',
  '</body>',
  '</html>'
].join('\n');

writeFileSync(join(distDir, 'index.html'), shellDocument, 'utf8');
console.log('TypeScript build complete -> dist/app.js');
