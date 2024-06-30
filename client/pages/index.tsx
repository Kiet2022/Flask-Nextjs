import { useEffect, useState } from "react";

export default function Home() {
  const [message, setMessage] = useState("Loading...");

  useEffect(()=>{
    fetch("http://localhost:8080/api/home")
    .then((res)=>res.json())
    .then((data)=>{
      setMessage(data.message)
    })
  },[])
  return <div>{message}</div>;
}
