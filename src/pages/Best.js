import React from 'react'
import img1 from '../images/1.jpg'
import img2 from '../images/2.jpg'
import img3 from '../images/3.jpg'
import '../App.css'

const Best = () => {
  return (
    <div>

<div class='container' style={{ marginLeft: '200px' }}  >
                
          <div class="about-section" >
              <h1>Best Sellings</h1>
              <p>A Good Company</p>
              {/* <p>Resize the browser window to see that this page is responsive by the way.</p> */}
          </div>
  
          <h2 style={{textAlign: "center" }}>Our Cars</h2>
          <div class="row">
            <div class="column">
              <div class="card" >
                <img src={img1} alt="Jane" style={ {width: '70%'} } />
                <div class="container">
                  <h2>Jane Doe</h2>
                  <p class="title">CEO & Founder</p>
                  <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                  <p>jane@example.com</p>
                  <p><button class="button">Contact</button></p>
                </div>
              </div>
            </div>
  
            <div class="column">
              <div class="card">
                <img src={img2} alt="Mike" style={ {width: '70%'} } />
                <div class="container">
                  <h2>Mike Ross</h2>
                  <p class="title">Art Director</p>
                  <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                  <p>mike@example.com</p>
                  <p><button class="button">Contact</button></p>
                </div>
              </div>
            </div>
  
            <div class="column">
              <div class="card">
                <img src={img3} alt="John" style={ {width: '70%'} } />
                <div class="container">
                  <h2>John Doe</h2>
                  <p class="title">Designer</p>
                  <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                  <p>john@example.com</p>
                  <p><button class="button">Contact</button></p>
                </div>
              </div>
            </div>
          </div>
      </div>

    </div>
  )
}

export default Best