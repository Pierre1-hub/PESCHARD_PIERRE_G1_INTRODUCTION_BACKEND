<?php
require 'vendor/autoload.php';

use GuzzleHttp\Client;

$page = $_GET['page'] ?? 1; // Récupere le numéro de page via GET
$apiKey = 'fe06a70244msh8994c30e44580a9p1922d9jsn6133c2d4d6c0'; // Clé RapidAPI

$client = new Client(); // Instance du client Guzzle

$response = $client->get('https://hearthstone11.p.rapidapi.com/cards', [ // Requête GET vers l'API
    'query' => [
        'page'     => $page, // Page à récupérer
        'pageSize' => 1, // Une carte par page
    ],
    'headers' => [ // Header pour s'authentifier sur RapidAPI
        'x-rapidapi-host' => 'hearthstone11.p.rapidapi.com',
        'x-rapidapi-key'  => $apiKey,
        'Content-Type'    => 'application/json',
    ]
]);

header('Content-Type: application/json'); // On retourne du JSON
echo $response->getBody(); // On retourne la réponse de l'API