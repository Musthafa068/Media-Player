import React, { useState } from 'react'
import Add from '../components/Add'
import { Link } from 'react-router-dom'
import Category from '../components/Category'
import View from '../components/View'


function Home() {

  const [addVideoResponse,setAddVideoResponse]=useState("")

  const [videoDeleteResponseFromCategory,setVideoDeleteResponseFromCategory]=useState("")

  const [deleteVideoFromViewResponse,setDeleteVideoFromViewResponse]=useState("")

  return (
    <>
      <div className='container d-flex justify-content-between my-5'>
        
        <Add setAddVideoResponse={setAddVideoResponse}/>
        <Link style={{textDecoration:"none"}} className='text-warning fw-bold fs-4' to={'/history'}>Watch History</Link>

      </div>

      <div className="row container m-5">
        <div className="col-lg-6">
          <h3 className='text-info'>All Videos</h3>

          <View addVideoResponse={addVideoResponse} videoDeleteResponseFromCategory={videoDeleteResponseFromCategory} setDeleteVideoFromViewResponse={setDeleteVideoFromViewResponse}/>

        </div>

        <div className="col-lg-6">

          <Category setVideoDeleteResponseFromCategory={setVideoDeleteResponseFromCategory} deleteVideoFromViewResponse={deleteVideoFromViewResponse}/>
          
        </div>

      </div>
    </>
  )
}

export default Home