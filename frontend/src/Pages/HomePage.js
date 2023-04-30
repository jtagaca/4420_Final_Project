import React, { useEffect, useState } from "react";
import { getAllGamesData } from "../Library/requests/getAllGamesData";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
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
    console.log("data", data);
  }, [data]);

  const barChartData = {
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

  if (data.top_10_games_by_positive_feedback_ratio) {
    data.top_10_games_by_positive_feedback_ratio.forEach((game) => {
      barChartData.labels.push(game.title);
      barChartData.datasets[0].data.push(parseFloat(game.positive_ratio));
    });
  }

  return (
    <div className="flex items-center justify-center min-h-screen text-white bg-primary">
      <div className="text-black shadow-2xl shadow-green-200 w-full p-5 m-2 my-5 bg-gradient-to-r from-yellow-200 via-green-200 to-green-500 rounded-lg opacity-90 lg:max-w-[1145px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 h-full md:min-h-[600px] sm:h-[300px]">
          <div className="flex justify-center items-center min-w-full h-full">
            {barChartData.labels.length === 0 ? (
              <div className="flex justify-center items-center">loading</div>
            ) : (
              <Bar
                data={barChartData}
                options={{
                  title: {
                    display: true,
                    text: "Top 10 Games by Positive Feedback Ratio",
                  },
                  maintainAspectRatio: false,
                  scales: {
                    xAxes: [
                      {
                        scaleLabel: {
                          display: true,
                          labelString: "Game Title",
                        },
                      },
                    ],
                    yAxes: [
                      {
                        ticks: {
                          beginAtZero: true,
                        },
                        scaleLabel: {
                          display: true,
                          labelString: "Positive Feedback Ratio",
                        },
                      },
                    ],
                  },
                  legend: {
                    display: false,
                  },
                }}
              />
            )}
          </div>
          <div className="flex justify-center items-center min-w-full min-h-full p-10">
            {barChartData.labels.length === 0 ? (
              <div className="flex justify-center items-center">loading</div>
            ) : (
              <Bar
                data={barChartData}
                options={{
                  title: {
                    display: true,
                    text: "Top 10 Games by Positive Feedback Ratio",
                  },
                  scales: {
                    xAxes: [
                      {
                        scaleLabel: {
                          display: true,
                          labelString: "Game Title",
                        },
                      },
                    ],
                    yAxes: [
                      {
                        ticks: {
                          beginAtZero: true,
                        },
                        scaleLabel: {
                          display: true,
                          labelString: "Positive Feedback Ratio",
                        },
                      },
                    ],
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
