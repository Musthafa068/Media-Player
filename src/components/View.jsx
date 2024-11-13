import React, { useEffect, useState } from 'react'
import VideoCard from './VideoCard'
import { Col, Row } from 'react-bootstrap'
import { getAllVideos } from '../services/allAPI'


function View({addVideoResponse}) {

  const [allVideos,setAllVideos]=useState([])
  const [deleteResponse,setDeleteResponse]=useState("")
  useEffect(()=>{

    getAllVideo()

  },[addVideoResponse,deleteResponse])
  console.log(allVideos);
  

  const getAllVideo=async()=>{
    try{
      const result=await getAllVideos()
      console.log(result);

      if(result.status>=200  &&  result.status<300){
        setAllVideos(result.data)
      }
      
    }
    catch(err){
      console.log(err);
      
    }
  }

  

  return (
    <>
    <Row>

    {
        allVideos.length>0 ?

        allVideos?.map(video =>(

        <Col key={video?.id} lg={4} md={6} sm={12}>
        <VideoCard displayData={video} setDeleteResponse={setDeleteResponse}/>
        </Col>
        ))
        :
        <div className="text-danger fw-bold fs-3">Nothing to display</div>

    }
    
        


    </Row>
    </>
  )
}

export default View









