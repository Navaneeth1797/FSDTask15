// // Importing React library

// import React from "react";

// // Functional component for rendering a card with article data

// function Card({ cardData }) {
//   // Rendering a card with article information
//   return (
//     <div className="col-lg-4 col-sm-6 mb-4">
//       <div className="card h-100 d-flex flex-column">
//         {/* Displaying the article image */}
//         <img src={cardData.image} className="card-img-top" alt="..." />

//         <div className="card-body flex-grow-1">
//           {/* Displaying the article title */}
//           <h3>{cardData.title}</h3>

//           {/* Displaying the article description */}
//           <p className="card-text">{cardData.description}</p>

//           {/* Link to read more, opens in a new tab */}
//           <a href={cardData.source} className="Read" target="_blank">
//             <strong> Read More &gt;&gt;</strong>
//           </a>
//         </div>

//         <div className="card-footer">
//           {/* Displaying the article publication date */}
//           <small className="text-body-secondary">26 December 2023</small>
//         </div>
//       </div>
//     </div>
//   );
// }

// // Exporting the Card component as the default export
// export default Card;
