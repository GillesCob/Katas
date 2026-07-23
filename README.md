# Katas

Répétition volontaire de patterns de base (front React, back Express) pour les écrire de tête, page blanche, sans assistance IA — en vue d'un entretien technique. Distinct du travail Cerithe (piloté avec beaucoup de contexte projet).

## Structure

- `front/` : Vite + React + TypeScript
- `back/` : Express + TypeScript (`tsx`)
- `front/src/katas/` et `back/src/katas/` : un dossier par pattern isolé
- Mini-projets qui recombinent plusieurs patterns : dossier séparé, une fois les briques maîtrisées

## Méthode

Claude propose l'énoncé du kata, laisse chercher sans indiquer la syntaxe avant un premier essai, corrige et explique après coup. Rythme et thèmes décidés en début de session selon les points faibles observés. Détail complet : `Formation/methode.md` et `Formation/Backlogs/backend.md` dans le vault.

## Lancer

```
cd front && npm install && npm run dev
cd back && npm install && npm run dev
```
