<?php

// Exercice moyenne
function calculerMoyenne($a, $b, $c) {
    return round(($a + $b + $c) / 3, 2);
}

function afficherResultat($nom, $moyenne = 0) {
    if ($moyenne >= 10) {
        echo "$nom a une moyenne de $moyenne : SUFFISANT";
    } else {
        echo "$nom a une moyenne de $moyenne : INSUFFISANT";
    }
}

$moyenneAlice = calculerMoyenne(15, 5, 12);
afficherResultat("Alice", $moyenneAlice);

echo "<br>";
echo "<br>";


?>