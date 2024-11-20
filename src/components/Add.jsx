import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { addVideo } from '../services/allAPI';


function Add({setAddVideoResponse}) {

      const [videoDetails,setVideoDetails]=useState({caption:"",imageURL:"",YoutubeURL:""})
      console.log(videoDetails);
      

      const [show, setShow] = useState(false);

     const handleClose = () => setShow(false);
     const handleShow = () => setShow(true);

     const [isInvalidurl,setInvalidUrl]=useState(false)

     const getEmbedurl=(link)=>{

      if(link.includes('v=')){
        let videoId=link.split('v=')[1].slice(0.11)
        console.log(videoId);
        setVideoDetails({...videoDetails,YoutubeURL:`https://www.youtube.com/embed/${videoId}`})
        setInvalidUrl(false)
        
      }
      else{
        setVideoDetails({...videoDetails,YoutubeURL:""})
        setInvalidUrl(true)
      }

     }

     const handleUpload=async()=>{

      const {caption,imageURL,YoutubeURL}=videoDetails

      if(caption &&  imageURL && YoutubeURL){
        // console.log("api call");

        try{

          const result=await addVideo(videoDetails)
          console.log(result);
          setAddVideoResponse(result.data)
          toast.success(`${result.data.caption} is added to your collection`)
          handleClose()
          setVideoDetails({caption:"", imageURL:"", YoutubeURL:""})
          
        }

        catch(err){
          console.log(err);
          
        }
        
      }
      else{
        toast.warning("please enter the field")
      }

     }

  return (
    <>
    <div className="d-flex align-items-center">
      <h3 className='text-warning fw-bold'>Upload New Video</h3>
      <button onClick={handleShow} className='ms-3 btn btn-warning fs-5 fw-bold rounded-circle'>+</button>
    </div>

    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Video Details </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>please fill the following details</p>
          <div className="border border-3 border-info p-3">
            {/* Video caption */}
          <FloatingLabel controlId="floatingInputcaption" label="Video Caption"className="mb-3" >
        <Form.Control onChange={e=>setVideoDetails({...videoDetails,caption:e.target.value})} type="text" placeholder="Video Caption" />
      </FloatingLabel>

      {/* image url */}
      <FloatingLabel controlId="floatingInputimage" label="Image Url"className="mb-3" >
        <Form.Control onChange={e=>setVideoDetails({...videoDetails,imageURL:e.target.value})} type="text" placeholder="Image Url" />
      </FloatingLabel>

      {/* Youtube url */}
      <FloatingLabel controlId="floatingInputurl" label="Youtube Url"className="mb-3" >
        <Form.Control onChange={e=>getEmbedurl(e.target.value)} type="text" placeholder="Youtube Url" />
      </FloatingLabel>

      {
        isInvalidurl && <div className='text-danger fw-bold'>Invalid video url</div>
      }

          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleUpload}>
            Upload 
          </Button>
        </Modal.Footer>
      </Modal>

   
    </>
  )
}

export default Add

