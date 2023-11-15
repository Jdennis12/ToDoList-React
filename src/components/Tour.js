import React, { useEffect, useState } from "react"

export default function Tour(){
const [loading, setLoading] = useState(true)
const [tours, setTours] = useState([])
const url = "https://course-api.netlify.app/api/react-tours-project";

const fetchTours = async () => {
  setLoading(true)
  try {
     const response = await fetch(url)
  const tours = await response.json();
  setLoading(false)
  setTours(tours)
  console.log(tours)
  }catch (error) {
    setLoading(false)
    console.log(error)
  }
 

}

useEffect(() => {
  fetchTours();

}, [])

  return (
    <>
    <h3>Tours component</h3>
    <button onClick={fetchTours}>press</button>

    </>
  )
}