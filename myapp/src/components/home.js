import { createContext, useContext, useEffect, useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";

const createContextProvider=createContext()

function UserList(){

    const [users,setUsers]=useState([]);
    const[isLoading,setIsLoading]=useState(true)
    const [error,setError]=useState(null)
    const[userId,setUserId]=useState()
    const[id,setId]=useState()
    const[title,setTitle]=useState()
    const[body,setBody]=useState()
    const [img,setImg]=useState()
    
    const getData=async()=>{
        try {
            const resp = await axios.get('https://jsonplaceholder.typicode.com/posts');

            console.log(resp.data);

            setTimeout(()=>{
            setUsers(resp.data);
            setImg(<img src="https://fastly.picsum.photos/id/324/200/200.jpg?hmac=qhw4ORwk8T1r-Rxd2QREZORSVvc6l_R1S6F3Pl9mR_c"style={{width:'100%'}} />)
            setIsLoading(false)

        },2000)
        } catch (error) {
            console.log(error);
            setError(error)
            setIsLoading(false)

            
        }
    }

    const clickForDetailPage=()=>{
    //   setImg(img)
    //  setUserId(userId)  
    //  setId(id)
    //  setTitle(title)
    //  setBody(body)
    //  window.location.href='./components/details'

    console.log(userId,id)
     }


    useEffect(()=>{
        getData(); //function call when component loads for the very first time
    },[]);

    return (
        <createContextProvider.Provider value={{users,img,userId,id,title,body}} >
    <div>
        <h2> All Items </h2>
            
            {isLoading ?(<div class="spinner-border text-primary" role="status">
                <span class="visually-hidden">Loading......</span>
            </div>):(error ?(<p>Error: {error.message}</p>):<p> {
                    users.map((item)=>{
                        
                        return (
                            <div>
    {isLoading ? (
      <div class="spinner-border text-primary" role="status">
        <span class="visually-hidden">Loading......</span>
      </div>
    ) : (
      error ? (
        <p>Error: {error.message}</p>
      ) : (
        <div className="container">
          <div className="row row-cols-1 row-cols-md-4 g-4 text-start">
            {users.map((item) => (
              <div key={item.id} className="col">
                <div className="card">
                  <div className="card-body">
                    {/* <img src="https://fastly.picsum.photos/id/324/200/200.jpg?hmac=qhw4ORwk8T1r-Rxd2QREZORSVvc6l_R1S6F3Pl9mR_c"style={{width:'100%'}} ></img> */}
                    {img}
                  <h5 className="card-title" onChange={(e)=>setUserId(e.target.value)} >User ID : {item.userId}</h5>
                  <h6 className="card-text" onChange={(e)=>setId(e.target.value)}  >ID : {item.id}</h6>
                    <h5 className="card-title" onChange={(e)=>setTitle(e.target.value)}  >Title :  {item.title.slice(0,20)}{item.body.length > 100 && '... '}</h5>
                    <p className="card-text" onChange={(e)=>setBody(e.target.value)} >Body : {item.body.slice(0, 70)}{item.body.length > 100 && '... '}
                      <Link to={`/item/${item.id}`} onClick={clickForDetailPage} >Read More</Link>
                    </p>
                  </div>
                </div>
              </div>
          
          ))}
          </div>
        </div>
        
      )
    )}
  </div>
        )
                    })
                }</p>)}
           
    </div>
    </createContextProvider.Provider>
    )
    
}
export default UserList;

export const Context=()=>{
  return useContext(createContextProvider)
}