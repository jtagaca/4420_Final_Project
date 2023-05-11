**Summary**

Games Analytics is an app that enables gamers to understand the gaming landscape rather than simply following popular trends, allowing them to save time and money. This is accomplished by mining the dataset created by steam; once the data has been mined, charts are visualized to allow data presentation.

**Dependencies and links**

- Node version: v18.14.0
- NPM version: 9.6.0
- Dataset : [Game Recommendations on Steam | Kaggle](https://www.kaggle.com/datasets/antonkozyriev/game-recommendations-on-steam?select=games.csv)
- List of all node packages installed

1. @emotion/react: [https://www.npmjs.com/package/@emotion/react](https://www.npmjs.com/package/@emotion/react)
2. @emotion/styled: [https://www.npmjs.com/package/@emotion/styled](https://www.npmjs.com/package/@emotion/styled)
3. @mui/material: [https://www.npmjs.com/package/@mui/material](https://www.npmjs.com/package/@mui/material)
4. @testing-library/jest-dom: [https://www.npmjs.com/package/@testing-library/jest-dom](https://www.npmjs.com/package/@testing-library/jest-dom)
5. @testing-library/react: [https://www.npmjs.com/package/@testing-library/react](https://www.npmjs.com/package/@testing-library/react)
6. @testing-library/user-event: [https://www.npmjs.com/package/@testing-library/user-event](https://www.npmjs.com/package/@testing-library/user-event)
7. axios: [https://www.npmjs.com/package/axios](https://www.npmjs.com/package/axios)
8. bootstrap: [https://www.npmjs.com/package/bootstrap](https://www.npmjs.com/package/bootstrap)
9. js: [https://www.npmjs.com/package/chart.js](https://www.npmjs.com/package/chart.js)
10. qs: [https://www.npmjs.com/package/qs](https://www.npmjs.com/package/qs)
11. react: [https://www.npmjs.com/package/react](https://www.npmjs.com/package/react)
12. react-bootstrap: [https://www.npmjs.com/package/react-bootstrap](https://www.npmjs.com/package/react-bootstrap)
13. react-chartjs-2: [https://www.npmjs.com/package/react-chartjs-2](https://www.npmjs.com/package/react-chartjs-2)
14. react-dom: [https://www.npmjs.com/package/react-dom](https://www.npmjs.com/package/react-dom)
15. react-loadingg: [https://www.npmjs.com/package/react-loadingg](https://www.npmjs.com/package/react-loadingg)
16. react-router-dom: [https://www.npmjs.com/package/react-router-dom](https://www.npmjs.com/package/react-router-dom)
17. react-scripts: [https://www.npmjs.com/package/react-scripts](https://www.npmjs.com/package/react-scripts)
18. web-vitals: [https://www.npmjs.com/package/web-vitals](https://www.npmjs.com/package/web-vitals)

**Instructions on how to run the software**

- **To create the mysql tables**
  - cd to **database/dump**
  - run the command **source examplefile.sql** make sure to replace the examplefile.sql with the correct file names
- **To create the php backend**
  - cd to the **backend** folder
  - copy the index.php to your server and host the index.php (make sure to create your own config.php)
- To run the web app
  - cd to **frontend** folder
  - then **npm install --legacy-peer-deps**
  - then **npm start**
- **To view the live site of the website**
  - [Games Analytics (jtagaca.live)](https://gamesanalytics.jtagaca.live/analytics) (maybe 1 minute wait time since tables are getting queried)
