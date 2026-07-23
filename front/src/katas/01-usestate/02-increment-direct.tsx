/*
Kata 01b — useState : incrément (valeur directe), 2e passage

Écris de tête, sans assistance IA, un composant `Compteur` qui :
1. Déclare un state numérique nommé `count`, initialisé à 0.
2. Affiche sa valeur à l'écran.
3. A un bouton "+1" qui incrémente `count` de 1, en passant la valeur directe au setter
   (pas encore le setter fonctionnel).
*/

import { useState } from "react";

export function Compteur() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Ajouter 1</button>
      <div>{count}</div>
    </div>
  );
}
