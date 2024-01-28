// Importing React library and Card component

import React from "react";
import Card from "./Card";

// Functional component for rendering career-related articles

function Career({ data }) {
  // Filtering data to get articles related to career
  const careerData = data.filter((item) => item.head === "career");

  // Rendering a row of cards for career-related articles
  return (
    <div className="row">
      {careerData.map((cardData, i) => {
        // Rendering individual Card component for each article
        return <Card cardData={cardData} key={i} />;
      })}
    </div>
  );
}

// Exporting the Career component as the default export
export default Career;
