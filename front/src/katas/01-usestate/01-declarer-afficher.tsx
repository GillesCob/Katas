/*
Kata 01a — useState : déclarer et afficher

Écris de tête, sans assistance IA, un composant `Compteur` qui :
1. Déclare un state numérique nommé `count`, initialisé à 0.
2. Affiche sa valeur à l'écran.

Rien d'autre pour l'instant (pas de bouton, pas de modification du state).
*/

import { useState } from "react";

export function Compteur() {
  const [count, setCount] = useState(0);
  return <div>{count}</div>;
}
