// // Importing React library and Card component
// import React from "react";
// import Card from "./Card";

// // Functional component for rendering data science-related articles
// function DS({ data }) {
//   // Filtering data to get articles related to data science
//   const dataSciencedata = data.filter((item) => item.head === "datascience");

//   // Rendering a row of cards for data science-related articles
//   return (
//     <div className="row">
//       {dataSciencedata.map((cardData, i) => {
//         // Rendering individual Card component for each article
//         return <Card cardData={cardData} key={i} />;
//       })}
//     </div>
//   );
// }

// // Exporting the DS (Data Science) component as the default export
// export default DS;
