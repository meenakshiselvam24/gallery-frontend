import React from "react";

const Grid = ({ photos }) => {
  return (
    <>  
      <h1>Our Gallery</h1>
      <div className="grid">
        {photos.map(({ photo, _id }) => (
          <div key={_id} className="grid__item">
            <img
              src={`https://gallery-backend-fq7i.onrender.com/uploads/${photo}`}
              alt="grid_image"
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Grid;
