<?php

define('PROBABILITY_ALLOWED', 100); //   x% are allowed
define('RETRY_SECONDS', 60);

///////////////////////////////////////
session_start();

$response =  array();

if (isset($_SESSION['hasAccess'])) {
    if ($_SESSION['hasAccess'] != 1) {
        $toTime = time();
        $fromTime = $_SESSION['time'];
        if ($toTime - $fromTime > RETRY_SECONDS) {
            grantAccess();
        }
    }
} else {
    grantAccess();
}

$response['hasAccess'] = $_SESSION['hasAccess'];

if (empty($response['hasAccess'])) {
    $response['hasAccess'] = 1;
}

header("Cache-Control: no-store, no-cache, must-revalidate, max-age=0");
header("Cache-Control: post-check=0, pre-check=0", false);
header("Pragma: no-cache");

echo json_encode($response);

///////////////////////////////////////
function grantAccess() {
    $temp =  mt_rand(1, 100);

    $_SESSION['hasAccess'] = ($temp <= PROBABILITY_ALLOWED) ? 1 : 0;
    $_SESSION['time'] = time();
}