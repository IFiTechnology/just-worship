import React, { useState } from "react";
import { imageData, imagesPerPage } from "./imageData";
import Navbar from "../../Components/NavBar/Navbar";
import Footer from "../../Components/Footer/Footer";
import hero from "../../Assets/aboutUsImage.jpg"
import "./galleryPage.css";


const Gallery = () => {
  const [category, setCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredImages =
    category === "All"
      ? imageData
      : imageData.filter((image) => image.category === category);

  // Calculate pagination related values
  const indexOfLastImage = currentPage * imagesPerPage;
  const indexOfFirstImage = indexOfLastImage - imagesPerPage;
  const currentImages = filteredImages.slice(
    indexOfFirstImage,
    indexOfLastImage
  );
  const totalPages = Math.ceil(filteredImages.length / imagesPerPage);

  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
    setCurrentPage(1); // Reset to the first page when category changes
  };

  const handlePaginationClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <Navbar />
      <div className="gallery">
        <div className="hero">
          <img src={hero} alt="Gallery Hero" />
          <div className="hero-description">
            <h2>Welcome to the Gallery</h2>
            <p>
              Explore and relive the moments of worship, outreach, and campus
              tours captured throughout the years.
            </p>
          </div>
        </div>
        <div className="gallery-categories">
          <button
            className={category === "All" ? "active" : ""}
            onClick={() => handleCategoryChange("All")}
          >
            All
          </button>
          <button
            className={category === "Outreach" ? "active" : ""}
            onClick={() => handleCategoryChange("Outreach")}
          >
            Outreach
          </button>
          <button
            className={category === "Campus Tour" ? "active" : ""}
            onClick={() => handleCategoryChange("Campus Tour")}
          >
            Campus Tour
          </button>
        </div>
        <div className="gallery-images">
          {currentImages.map((image, index) => (
            <div className="gallery-item" key={index}>
              <img src={image.url} alt={`Image ${index + 1}`} />
            </div>
          ))}
        </div>
        {totalPages > 1 && (
          <div className="gallery-pagination">
            <ul>
              {Array.from({ length: totalPages }, (_, index) => (
                <li key={index}>
                  <button
                    className={currentPage === index + 1 ? "active" : ""}
                    onClick={() => handlePaginationClick(index + 1)}
                  >
                    {index + 1}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Gallery;

// import React, { useState } from "react";
// import Navbar from "../../Components/NavBar/Navbar";
// import Footer from "../../Components/Footer/Footer";
// import hero from "../../Assets/galleryHero.jpg";
// import imageData from "./imageData";
// import "./galleryPage.scss";

// const GalleryPage = () => {
//   const [activeCategory, setActiveCategory] = useState("just-worship");
//   const [activeYear, setActiveYear] = useState(null);

//   const handleCategoryClick = (category) => {
//     setActiveCategory(category);
//     setActiveYear(null);
//   };

//   const handleYearClick = (year) => {
//     setActiveYear(year);
//   };

//   const getImagesForCategoryAndYear = (category, year) => {
//     if (category && year && imageData[category] && imageData[category][year]) {
//       return imageData[category][year];
//     }
//     return [];
//   };

//   return (
//     <div>
//       <Navbar />
//       <div className="hero">
//         <img src={hero} alt="Gallery Hero" />
//         <div className="hero-description">
//           <h2>Welcome to the Gallery</h2>
//           <p>
//             Explore and relive the moments of worship, outreach, and campus
//             tours captured throughout the years.
//           </p>
//         </div>
//       </div>
//       <div className="gallery">
//         <div className="gallery-header">
//           <h2>Worship Moments</h2>
//           <div className="categories">
//             <button
//               className={activeCategory === "outreach" ? "active" : ""}
//               onClick={() => handleCategoryClick("outreach")}
//             >
//               Outreaches
//             </button>
//             <button
//               className={activeCategory === "campus-tour" ? "active" : ""}
//               onClick={() => handleCategoryClick("campus-tour")}
//             >
//               Campus Tour
//             </button>
//           </div>
//         </div>
//         <div className="subcategories">
//           {activeCategory === "outreach" && (
//             <div className="subcategory">
//               <h3>Just Worship Outreaches</h3>
//               <div className="year-buttons">
//                 {/* ... year buttons ... */}
//                 <button onClick={() => handleYearClick("2016")}>2016</button>
//                 <button onClick={() => handleYearClick("2018")}>2018</button>
//                 <button onClick={() => handleYearClick("2020")}>2020</button>
//               </div>
//               {activeYear && (
//                 <div>
//                   {getImagesForCategoryAndYear(activeCategory, activeYear).map(
//                     (imagePath, index) => (
//                       <img
//                         key={index}
//                         src={imagePath}
//                         alt={`Outreach ${activeYear} Image ${index + 1}`}
//                       />
//                     )
//                   )}
//                 </div>
//               )}
//             </div>
//           )}
//           {/* ... other subcategories ... */}
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default GalleryPage;
