import React, { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import {userContext} from '../App'


const Logout = () => {
   // eslint-disable-next-line
  const {state, dispatch} = useContext(userContext);
  const history = useNavigate();

  useEffect(() => {
    fetch("/logout", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
      credentials: "include",
    }).then((res) => {
      dispatch({type:"USER", payload:false});
      history("/login", { replace: true });
      if(res.status !== 200){
        console.error(res.error)
      }
    }).catch((err)=>{
        console.error(err);
    })
    // eslint-disable-next-line
  }, []);

  return <div>Logout</div>;
};

export default Logout;
