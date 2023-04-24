<?php

require_once('config.php');

// Check if a filename was passed in as a command-line argument
if ($argc < 2) {
    echo "Error: Please provide the filename to read as a command-line argument\n";
    exit(1);
}

$filename = $argv[1];

$connection = get_connection();

// Read the contents of the recommendations CSV file
$csv_file = fopen($filename, 'r');

// Skip the header row
$header = fgetcsv($csv_file);

// Prepare the SQL statement for inserting data into the recommendations table
$insert_stmt = $connection->prepare("INSERT INTO recommendations (app_id, helpful, funny, date, is_recommended, hours) VALUES (?, ?, ?, ?, ?, ?)");

// Iterate through each row in the CSV file
while (($row = fgetcsv($csv_file)) !== false) {
    // Bind the values from the CSV row to the SQL statement
    $insert_stmt->bind_param("iiisid", $row[0], $row[1], $row[2], $row[3], $row[4], $row[5]);

    // Execute the SQL statement
    if ($insert_stmt->execute() === false) {
        echo "Error inserting row: " . $insert_stmt->error . "\n";
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
