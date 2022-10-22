<?php

require './vendor/autoload.php';

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: *');
header('Access-Control-Allow-Methods: GET, POST, DELETE');

use Slim\Factory\AppFactory;

$app = AppFactory::create();
$app->addRoutingMiddleware();
$errorMiddleware = $app->addErrorMiddleware(true, true, true);

$app->get('/apae-api/', function($request, $response, $args) {
    $json = json_encode('API da APAE Rodando');

    $response->getBody()->write($json);
    return $response;
});

$app->run();

?>