import React from "react";

export default function FinalReport() {
  const listItems = [
    "Top 10 games by user reviews: Show the games with the highest number of user reviews, indicating popularity.",
    "Top 10 games by positive feedback ratio: Display the games with the highest percentage of positive feedback, suggesting user satisfaction.",
    "Top 10 users by the number of products owned: Highlight the most active users based on the size of their game library.",
    "Top 10 games by the number of hours played: Show the games with the highest total hours played by users, suggesting longevity and interest.",
    "Top 10 most helpful reviews: Display the reviews that users found most helpful, emphasizing valuable feedback.",
  ];
  return (
    <div className="flex items-start justify-center min-h-screen text-white bg-primary">
      <div className=" text-black shadow-2xl shadow-green-200 w-full p-5 m-2 my-5 bg-gradient-to-r from-yellow-200 via-green-200 to-green-500   rounded-lg opacity-90 lg:max-w-[1145px]">
        <div className="my-4">
          <h1 className="my-3 text-3xl">
            Describe the progress made between Week 14 and the due date.
          </h1>
          <p>
            Between Week 14 and the due date, I have made significant progress
            in various aspects of the project. Firstly, I successfully
            implemented a caching mechanism using sessions to optimize
            performance. In addition, I completed the development of two
            previously unfinished charts, which have now been fully integrated
            into the project. Thus, overall I was able to meet all of my
            objectives on time.
          </p>
        </div>
        <div className="my-4">
          <h1 className="my-3 text-3xl">Conclusion on the project.</h1>

          <p>
            In conclusion, the project has been successfully completed,
            achieving all of its primary objectives such as the creation of five
            informative charts for users. These charts answer the following key
            aspects:
          </p>
          <ol className="ml-4 list-decimal">
            {listItems.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ol>
          <br></br>
          <p>
            However, due to limited time and other course requirements, the
            project did not complete the proposed extra feature of recommending
            games based on genres using AI. When comparing the final outcome to
            the initial proposal, there were minor adjustments, such as the
            incorporation of a session-based caching mechanism to enhance the
            user experience on the website. Additionally, I opted to insert only
            2 million rows of records each for the users and recommendations
            tables, instead of the entire dataset, as the actual row count was
            around 120 million for users and 70 million for recommendations.
            Despite these modifications, the project effectively utilized
            indexes and data mining techniques to provide users with valuable
            insights into the gaming landscape.
          </p>
          <br></br>
          <p>
            Throughout the project, I gained valuable insights regarding
            database systems, such as the importance of caching mechanisms to
            improve performance, especially when dealing with large datasets and
            sorting operations. I also learned that inserting a substantial
            volume of data into a database could be challenging and that using
            partitioning and parallelization techniques can help facilitate the
            process.
          </p>
          <br></br>
          <p>
            Regarding specific software and platforms, I discovered that PHP can
            be utilized for parallelization in tandem with a shell script, an
            approach not previously explored, which required me to conduct
            research to learn how to implement it effectively. This experience
            has broadened my understanding of PHP and its capabilities in
            handling complex processes.
          </p>
        </div>
      </div>
    </div>
  );
}
