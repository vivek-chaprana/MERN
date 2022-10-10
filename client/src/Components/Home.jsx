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

      if (res.status !== 200) {
        console.error(res.error);
      }
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
    <div className="left"></div>
      <div  className="home">
      <p className='fs-4 fw-bolder m-0 text-primary ' >Welcome</p>
      {(name !== "") ? <>
      <p className='fs-1 fw-bold m-0 p-0  ' >{name}</p>
      <p className='fs-3 text-dark m-0 p-0 ' >Happy, to see you back</p>
      </>
      :
      <p className="fw-bold fs-2">WE ARE THE MERN DEVELOPERS</p>}
    </div>
    </div>
    </>
  )
}

export default Home