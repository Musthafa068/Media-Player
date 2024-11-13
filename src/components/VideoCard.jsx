import React, { useState } from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { deleteVideo, saveHistory } from '../services/allAPI';

function VideoCard({displayData,setDeleteResponse}) {
  console.log(displayData);
  


    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow =async () => {

      let {caption,YoutubeURL}=displayData

      const localTime=new Date
      console.log(localTime);
      const formatedDate=localTime.toLocaleString()
      console.log(formatedDate);
      let historyData={caption,YoutubeURL,formatedDate}

      console.log(historyData);
      try{
        await saveHistory(historyData)
      }
      catch(err){
        console.log(err);
        
      }
      

      
      
      setShow(true)};

    const handleRemoveVideo=async(videoId)=>{

      try{
          const result=await deleteVideo(videoId)
          setDeleteResponse(result.data)
          console.log(result);
          
      }
      catch(err){
        console.log(err);
        
      }

    }

  return (
    <>

    <Card style={{width:"180px"}} className='mb-3'>
      <Card.Img onClick={handleShow} style={{height:"180px"}} variant="top" src={displayData?.imageURL} />
      <Card.Body>
        <Card.Title className='d-flex align-items-center justify-content-center'>
            <p>{displayData?.caption}</p>
            <button onClick={()=>handleRemoveVideo(displayData?.id)} className='btn'><i class="fa-solid fa-trash" style={{color:"red",fontSize:"20px",marginBottom:"10px"}}></i></button>
        </Card.Title>
        <Card.Text>
          
        </Card.Text>
      </Card.Body>
    </Card>

    <Modal show={show} onHide={handleClose} size='lg'>
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <iframe width="678" height="522" src={`${displayData?.YoutubeURL}?autoplay=1`} title="Eyy Banane - Video  | Vaazha | Vipin Das | Anand Menen | Electronic Kili |Siju Sunny |Joemon Jyothir" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </Modal.Body>
      
      </Modal>

    </>
  )
}

export default VideoCard




