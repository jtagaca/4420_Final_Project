<?php
require_once('config.php');

if (isset($_POST['initiate']) && $_POST['initiate'] == 'true') {
    $connection = get_connection();

    $views = [
        'top_10_games_by_user_reviews',
        'top_10_games_by_positive_feedback_ratio',
        'top_10_users_by_products_owned',
        'top_10_games_by_hours_played',
        'top_10_most_helpful_reviews'
    ];

    $results = [];

    foreach ($views as $view_name) {
        $sql = "SELECT * FROM " . $view_name;
        $result = $connection->query($sql);

        if ($result->num_rows > 0) {
            $view_data = [];
            while ($row = $result->fetch_assoc()) {
                $view_data[] = $row;
            }
            $results[$view_name] = $view_data;
        } else {
            $results[$view_name] = "No results found.";
        }
    }

    $connection->close();

    header('Content-Type: application/json');
    echo json_encode($results);
} else {
    echo "Invalid request or initiate not set to 'true'.\n";
}
?>