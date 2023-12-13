// Details.js
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { fetchDataAsync } from "../redux/dataSlice";
import { useParams } from "react-router-dom";

const Details = () => {
  // const [selectedItem, setSelectedItem] = useState(null);
  const { id } = useParams();
  const dispatch = useDispatch();
  const { data, status, error } = useSelector((state) => state.data);


  useEffect(() => {
    // Dispatch the fetchDataAsync action when the component mounts
    dispatch(fetchDataAsync());
    console.log(data);
  }, [dispatch, id]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }

  const selectedItem = data.find(item => item.id === Number(id));

  return (
    <div>
      <h1 className="text-center mt-4">Details</h1>
      {selectedItem && (
        <div className="container">
          <div className="d-flex flex-row card mt-4 text-start">
            <div>
              <img src="https://fastly.picsum.photos/id/324/200/200.jpg?hmac=qhw4ORwk8T1r-Rxd2QREZORSVvc6l_R1S6F3Pl9mR_c" className="card-img-top" alt="Card" style={{ width: '100%' }} />
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
