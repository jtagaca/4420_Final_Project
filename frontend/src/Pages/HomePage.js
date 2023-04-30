import React, { useEffect, useState } from "react";
import { getAllGamesData } from "../Library/requests/getAllGamesData";
import { Bar } from "react-chartjs-2";
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
        app_id: review.app_id,
        helpful: parseInt(review.helpful),
      }))
    : [];

  return (
    <div className="flex items-center justify-center min-h-screen text-white bg-primary">
      <div className="text-black shadow-2xl shadow-green-200 w-full p-5 m-2 my-5 bg-gradient-to-r from-yellow-200 via-green-200 to-green-500 rounded-lg opacity-90 lg:max-w-[1145px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 h-full w-full md:min-h-[450px] my-5">
          <div className="flex justify-center items-center w-full h-full relative">
            {positive_feedback_ratio_bar_chart_data.labels.length === 0 ? (
              <div className="flex justify-center items-center absolute inset-0">
                <RotateCircleLoading />
              </div>
            ) : (
              <Bar
                data={positive_feedback_ratio_bar_chart_data}
                options={{
                  plugins: {
                    title: {
                      display: true,
                      text: "Top 10 Games by Positive Feedback Ratio",
                    },
                  },
                  maintainAspectRatio: false,
                  scales: {
                    x: {
                      display: true,
                      title: {
                        display: true,
                        text: "Game Title",
                      },
                    },
                    y: {
                      ticks: {
                        beginAtZero: true,
                      },
                      title: {
                        display: true,
                        text: "Positive Feedback Ratio",
                      },
                    },
                  },
                  legend: {
                    display: false,
                  },
                }}
              />
            )}
          </div>

          <div className="flex justify-center items-center w-full h-full relative">
            {horizontalBarData.labels.length === 0 ? (
              <div className="flex justify-center items-center absolute inset-0">
                <RotateCircleLoading />
              </div>
            ) : (
              <Bar
                data={horizontalBarData}
                options={{
                  indexAxis: "y",
                  plugins: {
                    title: {
                      display: true,
                      text: "Top 10 Users by Products Owned",
                    },
                  },
                  maintainAspectRatio: false,
                  scales: {
                    x: {
                      ticks: {
                        beginAtZero: true,
                      },
                      title: {
                        display: true,
                        text: "Number of Games Owned",
                      },
                    },
                    y: {
                      display: true,
                      title: {
                        display: true,
                        text: "User ID",
                      },
                    },
                  },
                  legend: {
                    display: false,
                  },
                }}
              />
            )}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 h-full w-full md:min-h-[450px] my-5 ">
          <div className="flex justify-center items-center w-full h-full relative">
            {rows.length === 0 ? (
              <div className="flex justify-center items-center absolute inset-0">
                <RotateCircleLoading />
              </div>
            ) : (
              <div className="w-full h-full">
                <h3 className="text-center mb-4">
                  Top 10 Most Helpful Reviews
                </h3>
                <TableContainer component={Paper}>
                  <Table sx={{ minWidth: "100%" }} aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell>Rank</TableCell>
                        <TableCell>Review ID</TableCell>
                        <TableCell align="right">App ID</TableCell>
                        <TableCell align="right">Helpful Count</TableCell>
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
                          <TableCell component="th" scope="row">
                            {row.rank}
                          </TableCell>
                          <TableCell component="th" scope="row">
                            {row.review_id}
                          </TableCell>
                          <TableCell align="right">{row.app_id}</TableCell>
                          <TableCell align="right">{row.helpful}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </div>
            )}
          </div>

          <div className="flex justify-center items-center w-full h-full relative">
            {horizontalBarData.labels.length === 0 ? (
              <div className="flex justify-center items-center absolute inset-0">
                <RotateCircleLoading />
              </div>
            ) : (
              <Bar
                data={horizontalBarData}
                options={{
                  indexAxis: "y",
                  plugins: {
                    title: {
                      display: true,
                      text: "Top 10 Users by Products Owned",
                    },
                  },
                  maintainAspectRatio: false,
                  scales: {
                    x: {
                      ticks: {
                        beginAtZero: true,
                      },
                      title: {
                        display: true,
                        text: "Number of Games Owned",
                      },
                    },
                    y: {
                      display: true,
                      title: {
                        display: true,
                        text: "User ID",
                      },
                    },
                  },
                  legend: {
                    display: false,
                  },
                }}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
