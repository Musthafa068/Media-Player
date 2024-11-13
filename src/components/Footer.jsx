import React from 'react'

function Footer() {
  return (
    <>
     <footer className='bg-light mt-5'>
      <div className="row container">
        <div className="col">
          <div className='fs-4'>
            <i class="fa-solid fa-music"></i>
          MediaPlayer
          </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est non itaque labore tempora id atque optio perferendis aspernatur neque magni. Maxime qui aut eos ad, quis voluptate eius nulla! Nihil!</p>
        </div>
      <div className="col"><h4>links</h4>
      <h5>landing</h5>
      <h5>home</h5>
      <h5>History</h5>
      </div>
      <div className="col"><h4>Guides</h4>
      <h5>react</h5>
      <h5>react bootstrap</h5>
      <h5>watch router</h5>
      </div>
      <div className="col">
        <h5>Contact Us</h5>
      <input type="text" />
      <button style={{width:"40px"}} className='ms-3 btn-info'><i class="fa-solid fa-arrow-right"></i></button>
     <div className='fs-5'>
        <i class="fa-brands fa-facebook mx-2"></i>
        <i class="fa-brands fa-instagram mx-2"></i>
        <i class="fa-brands fa-x-twitter mx-2"></i>
        <i class="fa-brands fa-linkedin mx-2"></i>
        <i class="fa-brands fa-github mx-2"></i>
        <i class="fa-solid fa-phone mx-2"></i>
     </div>
      </div>
      </div>
    </footer>

    </>
  )
}

export default Footer