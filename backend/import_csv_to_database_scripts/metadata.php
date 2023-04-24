<?php
require_once('config.php');

$connection = get_connection();

// Read the contents of the games_metadata.json file
$json_data = file_get_contents('games_metadata.json');

// Split the JSON data by lines (assuming each line is a valid JSON object)
$lines = explode(PHP_EOL, trim($json_data));

// Prepare the SQL statement for inserting data into the games_meta_data table
$insert_stmt = $connection->prepare("INSERT INTO games_meta_data (app_id, description, tags) VALUES (?, ?, ?)");

// Iterate through each line
foreach ($lines as $line) {
    // Decode the JSON data into a PHP array
    $item = json_decode($line, true);

    // Get the app_id, description, and tags from the item
    $app_id = $item['app_id'];
    $description = $item['description'];
    $tags = json_encode($item['tags']);

    // Bind the values to the SQL statement
    $insert_stmt->bind_param("iss", $app_id, $description, $tags);

    // Execute the SQL statement
    if ($insert_stmt->execute() === false) {
        echo "Error inserting row: " . $insert_stmt->error . "\n";
    }
}

// Close the SQL statement
$insert_stmt->close();

// Close the MySQL connection
$connection->close();

echo "JSON data imported successfully!\n";

?>