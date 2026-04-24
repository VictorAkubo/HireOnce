"use client"
import axios from "axios"
import {useState,useEffect} from "react"
import {useParams} from "next/navigation"
const JobDetail =()=>{
  const param = useParams()
  const {id} = param;
  const [FEATURED_COMPANIES,setFEATURED_COMPANIES]= useState([])
  
  useEffect(()=>{
    try{
    const fetchData = async ()=>{
      const res = await axios.get(`${process.env.NEXT_PUBLIC_URL}/fetchcompany`)
      setFEATURED_COMPANIES(res.data.data)
    }
    fetchData()
    }catch(error){
      alert("refresh page")
    }
  },[])
  return(
    <div>
    <h1 className="pl-2 text-red-200">{id}to be hi how </h1>
    </div>
    )
}

export default JobDetail