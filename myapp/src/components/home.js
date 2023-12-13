// Home.js
import { createContext, useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from 'react-redux';
import { fetchDataAsync } from "../redux/dataSlice";

const ContextProvider = createContext();

const Home = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [err, setError] = useState(null);
  const navigate = useNavigate(); 

  
  const dispatch = useDispatch();
  const { data, status, error } = useSelector((state) => state.data);

  useEffect(() => {
    // Dispatch the fetchDataAsync action when the component mounts
    dispatch(fetchDataAsync());
  }, [dispatch]);

  // Handle loading and error states
  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error: {err}</div>;
  }

  function getDetailsAndNavigate(item) {
    localStorage.setItem('selectedItem', JSON.stringify(item));
    
    navigate('/item/'+item.id);
  }

  return (
      <div>
        <h1>Home</h1>
        {status === 'loading' ? (
          <div>Loading....</div>
        ) : err ? (
          <div>{err}</div>
        ) : (
          <div className="container">
            <div className="row row-cols-1 row-cols-md-4 g-4 text-start">
              {data && data.map((item) => (
                <div key={item.id} className="col">
                  <div className="card" style={{cursor:'pointer'}} onClick={() => getDetailsAndNavigate(item)}>
                    <div className="card-body">
                      <img src="https://fastly.picsum.photos/id/324/200/200.jpg?hmac=qhw4ORwk8T1r-Rxd2QREZORSVvc6l_R1S6F3Pl9mR_c" style={{ width: '100%' }} alt="Card" />
                      <h5 className="card-title">User ID : {item.userId}</h5>
                      <h6 className="card-text">ID : {item.id}</h6>
                      <h5 className="card-title">Title : {item.title.slice(0, 20)}{item.body.length > 100 && '... '}</h5>
                      <p className="card-text">Body : {item.body.slice(0, 70)}{item.body.length > 100 && '... '}
                        <a>Read More</a>
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
  );
};

export default Home;

export const UseContextProvider = () => {
  return useContext(ContextProvider);
};
