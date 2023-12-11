import React, { useEffect, useState } from "react";

const Details = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    // Retrieve the selected item from localStorage or a global state
    const storedItem = localStorage.getItem('selectedItem');
    if (storedItem) {
      setSelectedItem(JSON.parse(storedItem));
    }
  }, []);

  return (
    <div>
      <h1 className="text-center mt-4">Details</h1>
      {selectedItem && (
        <div className="container">
          <div className="d-flex flex-row card mt-4 text-start ">
            <div>
              <img src="https://fastly.picsum.photos/id/324/200/200.jpg?hmac=qhw4ORwk8T1r-Rxd2QREZORSVvc6l_R1S6F3Pl9mR_c" className="card-img-top" alt="Card" style={{ width: '110%' }} />
            </div>
            <div className="card-body">
              <h5 className="card-title">User ID: {selectedItem.userId}</h5>
              <h6 className="card-text">ID: {selectedItem.id}</h6>
              <h5 className="card-title">Title: {selectedItem.title}</h5>
              <p className="card-text">Body: {selectedItem.body}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Details;
