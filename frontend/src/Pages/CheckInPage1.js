import React from "react";
import table_image from "../Library/images/tables.png";
import shellscript1_image from "../Library/images/shellscript1.png";
import shellscript2_image from "../Library/images/shellscript2.png";
import mysqldata_count_image from "../Library/images/mysqldatacount.png";

export default function CheckInPage1() {
  return (
    <div className="flex items-center justify-center min-h-screen text-white bg-primary">
      <div className=" text-black shadow-2xl shadow-green-200 w-full p-5 m-2 my-5 bg-gradient-to-r from-yellow-200 via-green-200 to-green-500   rounded-lg opacity-90 lg:max-w-[1145px]">
        <div className="my-4">
          <h1 className="text-3xl my-3">What I have accomplished so far</h1>
          <p>
            As of April 24th, 2023 (Monday), I have successfully deployed a
            MySQL database in Azure. Additionally, I have created the necessary
            tables, indexes, and foreign keys for this project. If you need to
            take a look at the dump files or any other file associated with this
            project, please look at{" "}
            <a
              href="https://vercel.com/login?next=%2Fdashboard"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-600 semi-bold"
            >
              Github repo link
            </a>
            .
          </p>
          <div className="flex flex-col items-center justify-center p-3">
            <h1 className="text-lg my-4">Tables</h1>
            <img
              src={table_image}
              alt="table image "
              className="rounded-lg shadow-lg h-auto w-full md:max-w-[800px]"
            />
          </div>
          <a>
            I've also added data to the tables. I was successful in inserting
            the entire contents of games.csv into the games table, yielding a
            total of 48,318 rows. This also applied to the games_meta_data
            table. However, when working with the recommendations and users
            tables, I noticed that the csv files had around 200,000 rows at most
            when opened in excel, but the actual row count was around 120
            million for the users and 70 million for the recommendations, which
            was due to excel truncating the data due to the number of rows it
            contained. Since I am trying to stay within the free tier for Azure,
            I was unable to fully insert this data into my database. Given the
            massive size of the data, the insertion process proved challenging.
            To overcome this, I employed parallel insertion using a shell script
            and partitioned the csv files into smaller segments, each containing
            20,000 rows. Ultimately, I settled for populating the users and
            recommendations tables with 2 million rows each.
          </a>
          <div className="flex flex-col items-center justify-center p-3">
            <h1 className="text-lg my-4">Data count mysql</h1>
            <img
              src={mysqldata_count_image}
              alt="shell script image 1"
              className="rounded-lg shadow-lg h-auto w-full md:max-w-[800px]"
            />
          </div>
          <div className="flex flex-col items-center justify-center p-3">
            <h1 className="text-lg my-4">Shellscripts</h1>

            <img
              src={shellscript1_image}
              alt="shell script image 1"
              className="rounded-lg shadow-lg h-auto w-full md:max-w-[800px]"
            />
          </div>

          <div className="flex flex-col items-center justify-center p-3">
            <img
              src={shellscript2_image}
              alt="shell script image 2"
              className="rounded-lg shadow-lg h-auto w-full md:max-w-[800px]"
            />
          </div>
        </div>
        <div className="my-4">
          <h1 className="text-3xl my-3">
            What you're planning to have completed by the Week 14 check-in.
          </h1>

          <p>
            My goal is to create views that address the initial questions I
            sought to answer with the data before our next check-in. I also aim
            to complete questions 1 to 3 in the user interface, resulting in
            three charts by the Week 14 check-in. If time permits, I will use
            the remaining time to create charts for the remaining two questions.
          </p>
        </div>
      </div>
    </div>
  );
}
