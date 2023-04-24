<?php
require_once('config.php');

$connection = get_connection();

// Read the contents of the games.csv file
$csv_file = fopen('games.csv', 'r');

// Skip the header row
$header = fgetcsv($csv_file);

// Prepare the SQL statement for inserting data into the games table
$insert_stmt = $connection->prepare("INSERT INTO games (app_id, title, date_release, win, mac, linux, rating, positive_ratio, user_reviews, price_final) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");

// Initialize an associative array to store app_id values
$app_ids = [];

// Iterate through each row in the CSV file
while (($row = fgetcsv($csv_file)) !== false) {
    // Clean the app_id by removing extra spaces at the beginning and end
    $app_id = trim($row[0]);

    // Check if the app_id already exists in the array
    if (!isset($app_ids[$app_id])) {
        // Update the cleaned app_id in the row
        $row[0] = $app_id;

        // Bind the values from the CSV row to the SQL statement
        $insert_stmt->bind_param("issiiisdid", $row[0], $row[1], $row[2], $row[3], $row[4], $row[5], $row[6], $row[7], $row[8], $row[9]);

        // Execute the SQL statement
        if ($insert_stmt->execute() === false) {
            echo "Error inserting row: " . $insert_stmt->error . "\n";
        }

        // Add the app_id to the associative array
        $app_ids[$app_id] = true;
    }
}

// Close the CSV file
fclose($csv_file);

// Close the SQL statement
$insert_stmt->close();

// Close the MySQL connection
$connection->close();

echo "CSV data imported successfully!\n";

?>
