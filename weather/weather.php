<?php
require 'vendor/autoload.php';

use GuzzleHttp\Client;

// Récupère la ville envoyée en paramètre via GET
$city = $_GET['city'] ?? 'Nice';
$apiKey = 'aa08f06fab3f4c4ead05d17a4505a6db';

// Création du client Guzzle
$client = new Client();

// Envoi de la requête vers l'API OpenWeather
$response = $client->get('https://api.openweathermap.org/data/2.5/weather', [
    'query' => [
        'q'     => $city,
        'appid' => $apiKey,
        'units' => 'metric',
        'lang'  => 'fr',
    ]
]);

// Retourne les données météo au format JSON
header('Content-Type: application/json');
echo $response->getBody();