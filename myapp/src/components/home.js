import { createContext, useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const ContextProvider = createContext();

const Home = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // Add this line to get the navigate function

  const getData = async () => {
    try {
      const resp = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await resp.json();

      setTimeout(() => {
        setUser(data);
        setIsLoading(false);
      }, 2000);
    } catch (error) {
      setError(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  function getDetailsAndNavigate(item) {
    // Save the data to localStorage or a global state for access in the Details component
    localStorage.setItem('selectedItem', JSON.stringify(item));
    
    // Navigate to the details page
    navigate('/detail');
  }

  return (
    <ContextProvider.Provider value={{ user, getDetailsAndNavigate }}>
      {children}
      <div>
        <h1>Home</h1>
        {isLoading ? (
          <div>Loading....</div>
        ) : error ? (
          <div>{error}</div>
        ) : (
          <div className="container">
            <div className="row row-cols-1 row-cols-md-4 g-4 text-start">
              {user.map((item) => (
                <div key={item.id} className="col">
                  <div className="card">
                    <div className="card-body">
                      <img src="https://fastly.picsum.photos/id/324/200/200.jpg?hmac=qhw4ORwk8T1r-Rxd2QREZORSVvc6l_R1S6F3Pl9mR_c" style={{ width: '100%' }} alt="Card" />
                      <h5 className="card-title">User ID : {item.userId}</h5>
                      <h6 className="card-text">ID : {item.id}</h6>
                      <h5 className="card-title">Title : {item.title.slice(0, 20)}{item.body.length > 100 && '... '}</h5>
                      <p className="card-text">Body : {item.body.slice(0, 70)}{item.body.length > 100 && '... '}
                        <a onClick={() => getDetailsAndNavigate(item)}>Read More</a>
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </ContextProvider.Provider>
  );
};

export default Home;

export const UseContextProvider = () => {
  return useContext(ContextProvider);
};
