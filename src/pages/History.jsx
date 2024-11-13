import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { deleteHistory, getAllHistory } from '../services/allAPI'


function History() {

  const[videoHistory,setVideoHistory]=useState([])
  console.log(videoHistory);

  useEffect(()=>{
    getHistory()
  },[])
  

  const getHistory=async()=>{

    try{
      const result=await getAllHistory()
      setVideoHistory(result.data)
    }
    catch(err){
      console.log(err);
      
    }

  }

  const delHistory=async (videoId)=>{

    try{
      await deleteHistory(videoId)
      getHistory()
    }
    catch(err){
      console.log(err);
      
    }
  }
  

  return (
    <>

    <div className="container">
      <div className="d-flex justify-content-between">
        <h3 className='text-warning'>Watch history</h3>
          <Link className='text-info fw-bold fs-5' to={'/home'} style={{textDecoration:"none"}}>Back to <i class="fa-solid fa-house"></i> </Link>
      </div>
      <table className='table mt-5'>
      <thead>
        <tr>
        <th>#</th>
        <th>caption</th>
        <th>url</th>
        <th>date and time</th>
        <th><i class="fa-solid fa-ellipsis-vertical"></i></th>
        </tr>
      </thead>
      <tbody>
       
         {
        videoHistory.length>0?

        videoHistory?.map((item,index)=>(
          <tr key={item?.id}>
            <td>{index+1}</td>
            <td>{item?.caption}</td>
            <td><a href={item.YoutubeURL} target='_blank'>{item.YoutubeURL}</a></td>
            <td>{item.formatedDate}</td>
            <td><button className='btn' onClick={()=>delHistory(item?.id)}><i class="fa-solid fa-trash text-danger"></i></button></td> 
          </tr>
          
        ))
        :
        <div className='text-danger fw-bold fs-3'>Nothing to display</div>
      }

      </tbody>

    </table> 
    </div>
    </>
  )
}

export default History