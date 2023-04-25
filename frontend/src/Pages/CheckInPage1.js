import React from "react";
import image from "../Library/images/architecture.png";

export default function CheckInPage1() {
  const csvFiles = [
    {
      name: "games.csv",
      description:
        "This file contains a table of games (or add-ons) information on ratings, pricing in US dollars $, release date, etc. In addition, a piece of extra non-tabular details on games, such as descriptions and tags, is in a metadata file.",
    },
    {
      name: "users.csv",
      description:
        "This file includes a table of public information from user profiles, such as the number of purchased products and published reviews.",
    },
    {
      name: "recommendations.csv",
      description:
        "This file consists of a table containing user reviews and whether the user recommends a particular product. It represents a many-to-many relationship between game entities and user entities.",
    },
  ];

  const listItems = [
    "Top 10 games by user reviews: Show the games with the highest number of user reviews, indicating popularity.",
    "Top 10 games by positive feedback ratio: Display the games with the highest percentage of positive feedback, suggesting user satisfaction.",
    "Top 10 users by the number of products owned: Highlight the most active users based on the size of their game library.",
    "Top 10 games by the number of hours played: Show the games with the highest total hours played by users, suggesting longevity and interest.",
    "Top 10 most helpful reviews: Display the reviews that users found most helpful, emphasizing valuable feedback.",
  ];

  return (
    <div className="flex items-center justify-center min-h-screen text-white bg-primary">
      <div className=" text-black shadow-2xl shadow-green-200 w-full p-5 m-2 my-5 bg-gradient-to-r from-yellow-200 via-green-200 to-green-500   rounded-lg opacity-90 lg:max-w-[1145px]">
        <div className="my-4">
          <h1 className="text-3xl">Goal</h1>
          <p></p>
        </div>
        <div className="my-4">
          <h1 className="text-3xl">Architecture</h1>
          <div className="flex items-center justify-center p-3">
            <img
              src={image}
              alt="architecture photo"
              className="rounded-lg shadow-lg h-auto min-w-full md:min-w-[800px]"
            />
          </div>

          <p>
            The project will create a simple web app using React, with a PHP
            backend and a MySQL server for storing data. I will use a CSV file
            from{" "}
            <a
              href="https://www.kaggle.com/datasets/antonkozyriev/game-recommendations-on-steam?select=games.csv"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-600 semi-bold"
            >
              Kaggle
            </a>{" "}
            with data about Steam video games. My main goal is to show helpful
            information using charts. If there is time, I will also add a
            recommendation feature using a Python-based machine-learning model
            to suggest games that users might like. The web application will be
            deployed using{" "}
            <a
              href="https://vercel.com/login?next=%2Fdashboard"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-600 semi-bold"
            >
              Vercel
            </a>
            , while the PHP backend will be hosted in the public HTML folder of
            the Artemis server. The MySQL server will be deployed on{" "}
            <a
              href="https://azure.microsoft.com/en-us"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-600 semi-bold"
            >
              Azure Cloud Services
            </a>
            ; there will also be indexes that will be added to the tables in the
            MySQL server, and the AI model will also be deployed via{" "}
            <a
              href="https://vercel.com/login?next=%2Fdashboard"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-600 semi-bold"
            >
              Vercel
            </a>
            . And lastly, a copy of the code will be available on GitHub.
          </p>
        </div>
        <div className="my-4">
          <h1 className="text-3xl">
            Dataset{" "}
            <a
              href="https://www.kaggle.com/datasets/antonkozyriev/game-recommendations-on-steam?select=games.csv"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-600 semi-bold"
            >
              (Kaggle)
            </a>
          </h1>
          <ul className="list-disc list-inside">
            {csvFiles.map((file, index) => (
              <li key={index}>
                <strong>{file.name}</strong>
                <div>{file.description}</div>
              </li>
            ))}
          </ul>
        </div>
        <div className="my-4">
          <h1 className="text-3xl">
            Data mining, here are the questions that I hope to answer in my
            project
          </h1>
          <ol className="ml-4 list-decimal">
            {listItems.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ol>
        </div>
        <div className="my-4">
          <h1 className="text-3xl">Extra feature AI</h1>
          <p>
            Show the top 10 games that would be recommended to a user based on
            their chosen genre, pricing, and ratings.
          </p>
        </div>
      </div>
    </div>
  );
}
