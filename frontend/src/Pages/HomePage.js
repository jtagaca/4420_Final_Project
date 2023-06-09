import React, { useEffect, useState } from "react";
import { getAllGamesData } from "../Library/requests/getAllGamesData";
import { Bar } from "react-chartjs-2";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { RotateCircleLoading } from "react-loadingg";
export default function HomePage() {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const gamesData = await getAllGamesData();
      setData(gamesData);
    }
    fetchData();
  }, []);

  useEffect(() => {
    debugger;
    console.log("data", data);
  }, [data]);

  const positive_feedback_ratio_bar_chart_data = {
    labels: [],
    datasets: [
      {
        label: "Positive Feedback Ratio",
        data: [],
        backgroundColor: [
          "#4CAF50",
          "#F44336",
          "#2196F3",
          "#FF9800",
          "#9C27B0",
        ],
      },
    ],
  };

  const horizontalBarData = {
    labels: [],
    datasets: [
      {
        label: "Products Owned",
        data: [],
        backgroundColor: [
          "#4CAF50",
          "#F44336",
          "#2196F3",
          "#FF9800",
          "#9C27B0",
        ],
      },
    ],
  };

  const most_played_games_data = {
    labels: [],
    datasets: [
      {
        label: "Number of Hours Played",
        data: [],
        backgroundColor: [
          "#4CAF50",
          "#F44336",
          "#2196F3",
          "#FF9800",
          "#9C27B0",
        ],
      },
    ],
  };
  // top_10_games_by_hours_played;
  // top_10_games_by_user_reviews;
  // top_10_most_helpful_reviews;
  // top_10_users_by_products_owned;
  if (data.top_10_games_by_positive_feedback_ratio) {
    data.top_10_games_by_positive_feedback_ratio.forEach((game) => {
      positive_feedback_ratio_bar_chart_data.labels.push(game.title);
      positive_feedback_ratio_bar_chart_data.datasets[0].data.push(
        parseFloat(game.positive_ratio)
      );
    });
  }
  if (data.top_10_users_by_products_owned) {
    data.top_10_users_by_products_owned.forEach((user) => {
      horizontalBarData.labels.push(user.user_id);
      horizontalBarData.datasets[0].data.push(parseFloat(user.products));
    });
  }
  const rows = data.top_10_most_helpful_reviews
    ? data.top_10_most_helpful_reviews.map((review, index) => ({
        rank: index + 1,
        review_id: review.review_id,
        game_title: review.game_title,
        helpful: parseInt(review.helpful),
      }))
    : [];
  if (data.top_10_games_by_hours_played) {
    data.top_10_games_by_hours_played.forEach((game) => {
      most_played_games_data.labels.push(game.title);
      most_played_games_data.datasets[0].data.push(
        parseFloat(game.total_hours_played)
      );
    });
  }
  const most_reviewed_games_data = {
    labels: [],
    datasets: [
      {
        label: "Number of Reviews",
        data: [],
        backgroundColor: [
          "#4CAF50",
          "#F44336",
          "#2196F3",
          "#FF9800",
          "#9C27B0",
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4BC0C0",
          "#9966FF",
        ],
      },
    ],
  };

  if (data.top_10_games_by_user_reviews) {
    data.top_10_games_by_user_reviews.forEach((game) => {
      most_reviewed_games_data.labels.push(game.title);
      most_reviewed_games_data.datasets[0].data.push(
        parseFloat(game.user_reviews)
      );
    });
  }
  return (
    <div className="flex items-center justify-center min-h-screen text-white bg-primary">
      <div className="justify-center items-center text-black w-full p-5 m-2 my-5 lg:max-w-[1145px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 h-full w-full md:min-h-[450px] mb-5">
          <div className="relative flex items-center justify-center w-full h-full p-3 my-3 text-white rounded-lg shadow-xl opacity-75 border-gray bg-primary-600">
            {positive_feedback_ratio_bar_chart_data.labels.length === 0 ? (
              <div className="flex justify-center items-center h-[150px] relative mr-5">
                <RotateCircleLoading />
              </div>
            ) : (
              <div className="flex-col justify-center items-center w-full h-[400px] lg:h-[600px] pb-6 md:pb-4">
                <h3 className="mb-4 text-center">
                  Top 10 Games By Positive Feedback Ratio
                </h3>
                <Bar
                  data={positive_feedback_ratio_bar_chart_data}
                  options={{
                    maintainAspectRatio: false,

                    scales: {
                      x: {
                        display: true,
                        title: {
                          display: true,
                          text: "Game Title",
                          color: "white",
                          padding: { bottom: 10 }, // Center the title
                        },
                        ticks: {
                          color: "white",
                          maxRotation: 45, // Rotate labels to 45 degrees
                          minRotation: 45, // Rotate labels to 45 degrees
                        },
                      },
                      y: {
                        ticks: {
                          beginAtZero: true,
                          color: "white",
                        },
                        title: {
                          display: true,
                          text: "Positive Feedback Ratio",
                          color: "white",
                        },
                      },
                    },
                    plugins: {
                      tooltip: {
                        backgroundColor: "rgba(0, 0, 0, 0.7)", // Set the tooltip background color
                        titleColor: "white",
                        bodyColor: "white",
                        borderColor: "rgba(255, 255, 255, 0.5)",
                        borderWidth: 1,
                        borderRadius: 6,
                        titleFont: {
                          size: 16,
                          weight: "bold",
                        },
                        bodyFont: {
                          size: 14,
                        },
                        padding: 10,
                      },
                      legend: {
                        display: true,
                        labels: {
                          color: "white", // Set the legend text color to white
                          font: {
                            size: 14,
                          },
                          boxWidth: 20,
                        },
                      },
                    },
                  }}
                />
              </div>
            )}
          </div>

          <div className="relative flex items-center justify-center w-full h-full p-3 my-3 text-white rounded-lg shadow-xl opacity-75 border-gray bg-primary-600">
            {horizontalBarData.labels.length === 0 ? (
              <div className="flex justify-center items-center h-[150px] relative mr-5 ">
                <RotateCircleLoading />
              </div>
            ) : (
              <div className="flex-col justify-center items-center w-full h-[400px] lg:h-[600px] pb-6 md:pb-4">
                <h3 className="mb-4 text-center">
                  Top 10 Users By Number of Games Owned
                </h3>
                <Bar
                  data={horizontalBarData}
                  options={{
                    indexAxis: "y",

                    maintainAspectRatio: false,
                    responsive: true,
                    scales: {
                      x: {
                        ticks: {
                          beginAtZero: true,
                          color: "white", // Set the x-axis ticks color
                        },
                        title: {
                          display: true,
                          text: "Number of Games Owned",
                          color: "white", // Set the x-axis title color
                          padding: { bottom: 10 }, // Center the title
                        },
                      },
                      y: {
                        display: true,
                        title: {
                          display: true,
                          text: "User ID",
                          color: "white", // Set the y-axis title color
                        },
                        ticks: {
                          color: "white", // Set the y-axis ticks color
                        },
                      },
                    },
                    plugins: {
                      tooltip: {
                        backgroundColor: "rgba(0, 0, 0, 0.7)", // Set the tooltip background color
                        titleColor: "white",
                        bodyColor: "white",
                        borderColor: "rgba(255, 255, 255, 0.5)",
                        borderWidth: 1,
                        borderRadius: 6,
                        titleFont: {
                          size: 16,
                          weight: "bold",
                        },
                        bodyFont: {
                          size: 14,
                        },
                        padding: 10,
                      },
                      legend: {
                        display: true,
                        labels: {
                          color: "white", // Set the legend text color to white
                          font: {
                            size: 14,
                          },
                          boxWidth: 20,
                        },
                      },
                    },
                  }}
                />
              </div>
            )}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 h-full w-full md:min-h-[450px] my-5">
          <div className="relative flex items-center justify-center w-full h-full p-3 my-3 text-white rounded-lg shadow-xl opacity-75 border-gray bg-primary-600">
            {rows.length === 0 ? (
              <div className="flex justify-center items-center h-[150px] mr-5 relative">
                <RotateCircleLoading />
              </div>
            ) : (
              <div className="flex-col items-center justify-center w-full h-full">
                <h3 className="mb-4 text-center">
                  Top 10 Most Helpful Reviews
                </h3>
                <TableContainer
                  component={Paper}
                  sx={{
                    backgroundColor: "transparent",
                    color: "white", // Set the
                  }}
                >
                  <Table sx={{ minWidth: "100%" }} aria-label="simple table">
                    <TableHead>
                      <TableRow
                        sx={{
                          "& th": {
                            color: "white",
                            backgroundColor: "#2196F3",
                          },
                        }}
                      >
                        <TableCell>Rank</TableCell>
                        <TableCell>Review ID</TableCell>
                        <TableCell align="right">Game Title</TableCell>
                        <TableCell align="right">
                          Number of People who found it helpful
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {rows.map((row) => (
                        <TableRow
                          key={row.review_id}
                          sx={{
                            "&:last-child td, &:last-child th": { border: 0 },
                          }}
                        >
                          <TableCell
                            component="th"
                            scope="row"
                            style={{ color: "white" }}
                          >
                            {row.rank}
                          </TableCell>
                          <TableCell
                            component="th"
                            scope="row"
                            style={{ color: "white" }}
                          >
                            {row.review_id}
                          </TableCell>
                          <TableCell align="right" style={{ color: "white" }}>
                            {row.game_title}
                          </TableCell>
                          <TableCell align="right" style={{ color: "white" }}>
                            {row.helpful}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </div>
            )}
          </div>
          <div
            className={`relative flex justify-center w-full h-full p-3 my-3 text-white rounded-lg shadow-xl opacity-75 border-gray bg-primary-600 ${
              most_played_games_data.labels.length === 0
                ? "items-center"
                : "items-start"
            }`}
          >
            {most_played_games_data.labels.length === 0 ? (
              <div className="flex justify-center items-center h-[150px] relative mr-5">
                <RotateCircleLoading />
              </div>
            ) : (
              <div className="flex-col justify-center items-center w-full h-[400px] lg:h-[600px] pb-6 md:pb-4">
                <h3 className="mb-4 text-center ">
                  Top 10 Games By Number of Hours Played
                </h3>
                <Bar
                  data={most_played_games_data}
                  options={{
                    maintainAspectRatio: false,

                    scales: {
                      x: {
                        display: true,
                        title: {
                          display: true,
                          text: "Game Title",
                          color: "white",
                          padding: { bottom: 10 }, // Center the title
                        },
                        ticks: {
                          color: "white",
                          maxRotation: 45, // Rotate labels to 45 degrees
                          minRotation: 45, // Rotate labels to 45 degrees
                        },
                      },
                      y: {
                        ticks: {
                          beginAtZero: true,
                          color: "white",
                        },
                        title: {
                          display: true,
                          text: "Number of Hours Played",
                          color: "white",
                        },
                      },
                    },
                    plugins: {
                      tooltip: {
                        backgroundColor: "rgba(0, 0, 0, 0.7)", // Set the tooltip background color
                        titleColor: "white",
                        bodyColor: "white",
                        borderColor: "rgba(255, 255, 255, 0.5)",
                        borderWidth: 1,
                        borderRadius: 6,
                        titleFont: {
                          size: 16,
                          weight: "bold",
                        },
                        bodyFont: {
                          size: 14,
                        },
                        padding: 10,
                      },
                      legend: {
                        display: true,
                        labels: {
                          color: "white", // Set the legend text color to white
                          font: {
                            size: 14,
                          },
                          boxWidth: 20,
                        },
                      },
                    },
                  }}
                />
              </div>
            )}
          </div>
        </div>
        <div className="flex items-center justify-center w-full h-full">
          <div className="flex items-center justify-center h-full w-full md:min-h-[450px] lg:max-w-[700px] mb-5 ">
            <div className="relative flex items-center justify-center w-full h-full p-3 my-3 text-white rounded-lg shadow-xl opacity-75 border-gray bg-primary-600">
              {positive_feedback_ratio_bar_chart_data.labels.length === 0 ? (
                <div className="flex justify-center items-center h-[150px] md:h-[450px] relative mr-5">
                  <RotateCircleLoading />
                </div>
              ) : (
                <div className="flex items-center justify-center w-full h-full pb-6 md:pb-4 ">
                  <div className="text-center">
                    <h3 className="mb-4">
                      Top 10 Games By Number of User Reviews
                    </h3>
                    <div className="w-full h-[500px] lg:h-[600px] ">
                      <Pie
                        data={most_reviewed_games_data}
                        options={{
                          maintainAspectRatio: false,
                          plugins: {
                            tooltip: {
                              backgroundColor: "rgba(0, 0, 0, 0.7)", // Set the tooltip background color
                              titleColor: "white",
                              bodyColor: "white",
                              borderColor: "rgba(255, 255, 255, 0.5)",
                              borderWidth: 1,
                              borderRadius: 6,
                              titleFont: {
                                size: 16,
                                weight: "bold",
                              },
                              bodyFont: {
                                size: 14,
                              },
                              padding: 10,
                            },
                            legend: {
                              display: true,
                              labels: {
                                color: "white", // Set the legend text color to white
                                font: {
                                  size: 14,
                                },
                                boxWidth: 20,
                              },
                            },
                          },
                        }}
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
