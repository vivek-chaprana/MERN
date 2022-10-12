import React, { useEffect, useState } from 'react'

const Home = () => {

const [name, setName] = useState("")
  const getUserData = async () => {
    try {
      const res = await fetch("/getdata", {
        method: "GET",
        headers: {
          "Content-type": "application/json",
        },
      });
      const data = await res.json();
      setName(data.name)

    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getUserData();
  }, []);
  
  return (
    <>
    <div className='wrap'>
    <div className="left">
      {(name) ? 
      <div  className="home">
      <p className='fs-4 fw-bolder m-0 text-primary ' >Welcome</p>
      <p className='fs-1 fw-bold m-0 p-0  ' >{name}</p>
      <p className='fs-3 text-dark m-0 p-0 ' >Happy, to see you back</p>
      </div>
      :
      <div className="home">
      <p className='fs-4 fw-bolder m-0 text-primary ' >Welcome</p>
      <p className="fw-bold fs-3 m-0">WE ARE THE MERN DEVELOPERS</p>
      </div>}
    </div>
    </div>
    </>
  )
}

export default Home