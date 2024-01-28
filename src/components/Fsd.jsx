// Importing React library and the Card component
import React from "react";
import Card from "./Card";
// Functional component for displaying Full Stack Development articles
function Fsd({ data }) {
  // Filtering data to include only Full Stack Development articles
  const fsdData = data.filter((item) => item.head === "fullstack");
  // Rendering a row of cards based on filtered Full Stack Development data
  return (
    <div className="row">
      {fsdData.map((cardData, i) => {
        // Rendering individual Card component for each article
        return <Card cardData={cardData} key={i} />;
      })}
    </div>
  );
}

export default Fsd;
