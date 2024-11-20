import React from 'react'
import { Link } from 'react-router-dom'
import landingImg from '../assets/mpgif.gif'
import Card from 'react-bootstrap/Card';
import settings from '../assets/imp mp1.jpg'
import categories from '../assets/img2.avif'
import history from '../assets/img 333.png'


function Landing() {
  return (
    <>
    
   <div className='container'>
      <div className='row'>
  
        <div className='col-6 mt-5'>
          <h3>Welcome to <span className='text-danger'> Media Player </span></h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam accusamus animi, ducimus fuga velit sunt sequi excepturi quos minima doloremque possimus, atque, accusantium temporibus natus non in consectetur quod eaque.</p>
          <Link to={'/home'} style={{textDecoration:"none"}} className='btn-info rounded p-2 m-3 text-warning'>Get Started</Link>
        </div>
        <div className='col-6'>
            <img src={landingImg} alt="Landing Image" />
        </div>
  
      </div>
   </div>
    
    <div className='container '>
      <h1 className='text-center text-danger'>Features</h1>
      <div className='row'>
        <div className='col-lg-4'>

        <Card style={{ width: '20rem' }} className='p-3'>
        <Card.Img variant="top" src={settings} style={{height:"180px"}}  />
        <Card.Body>
        <Card.Title>Managing Videos</Card.Title>
        <Card.Text>
        User can uploaded, view and remove the videos.

        </Card.Text>
        </Card.Body>
        </Card>

        </div>

        <div className='col-lg-4'>

        <Card style={{ width: '20rem' }} className='p-3'>
        <Card.Img variant="top" src={categories} style={{height:"180px"}}  />
        <Card.Body>
        <Card.Title>Categories Videos</Card.Title>
        <Card.Text>
          User can categorize tha video by drag and drop features.
        </Card.Text>
        </Card.Body>
        </Card>

        </div>

        <div className='col-lg-4'>

        <Card style={{ width: '20rem' }} className='p-3'>
        <Card.Img variant="top" src={history} style={{height:"180px"}}  />
        <Card.Body>
        <Card.Title>Managing History</Card.Title>
        <Card.Text>
          Users can manage the watch history of all video.
        </Card.Text>
        </Card.Body>
        </Card>

        </div>

      </div>
    </div>

    <div className='container w-100 border border-dark mt-5'>
      <h3 className='text-warning mt-4 '>Simple, Fast and powerful</h3>
      <div className='row'>
        <div className='col-lg-6'>

          <div className='text-dark mt-3'>
          <p><span className='fw-bold fs-5'>Play Everything:</span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam debitis natus accusantium, eum commodi maxime sapiente aut facere provident.</p>
        
            <p><span className='fw-bold fs-5'>Categorize Videos:</span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam debitis natus accusantium, eum commodi maxime sapiente aut facere provident.</p>

            <p><span className='fw-bold fs-5'>Manage History:</span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam debitis natus accusantium, eum commodi maxime sapiente aut facere provident.</p>
          </div>

        </div>

        <div className='col-lg-6 p-5'>

        <iframe width="560" height="315" src="https://www.youtube.com/embed/e1BHIY9p2WU?si=ecJkSKC_UzDfmscQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

        </div>

      </div>

    </div>

    </>
  )
}

export default Landing