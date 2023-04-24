<?php
require_once('config.php');

if ($argc < 2) {
    echo "Usage: php import_users.php <file>\n";
    exit(1);
}

$file_name = $argv[1];

// Check if the file exists
if (!file_exists($file_name)) {
    echo "Error: File not found\n";
    exit(1);
}

$connection = get_connection();

// Read the contents of the CSV file
$csv_file = fopen($file_name, 'r');

// Skip the header row
$header = fgetcsv($csv_file);

// Prepare the SQL statement for inserting data into the users table
$insert_stmt = $connection->prepare("INSERT INTO users (user_id, products, reviews) VALUES (?, ?, ?)");

// Initialize an associative array to store user_id values
$user_ids = [];

// Iterate through each row in the CSV file
while (($row = fgetcsv($csv_file)) !== false) {
    // Get the user_id from the row
    $user_id = $row[0];

    // Check if the user_id already exists in the array
    if (!isset($user_ids[$user_id])) {
        // Bind the values from the CSV row to the SQL statement
        $insert_stmt->bind_param("iii", $row[0], $row[1], $row[2]);
        
        // Execute the SQL statement
        if ($insert_stmt->execute() === false) {
            echo "Error inserting row: " . $insert_stmt->error . "\n";
        }

        // Add the user_id to the associative array
        $user_ids[$user_id] = true;
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
