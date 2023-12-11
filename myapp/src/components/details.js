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
      <h1>Details</h1>
      {selectedItem && (
        <div>
          <p>User ID: {selectedItem.userId}</p>
          <p>ID: {selectedItem.id}</p>
          <p>Title: {selectedItem.title}</p>
          <p>Body: {selectedItem.body}</p>
          <img src="https://fastly.picsum.photos/id/324/200/200.jpg?hmac=qhw4ORwk8T1r-Rxd2QREZORSVvc6l_R1S6F3Pl9mR_c" style={{ width: '100%' }} alt="Card" />
        </div>
      )}
    </div>
  );
};

export default Details;
