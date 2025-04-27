import React from 'react'

const Project = () => {
  return (
    <div>
     <div class="project-section" id="projects">
            <h2 class="page-header">Projects</h2>

            <div class="project-container">
                <div class="project-card" id="project1">
                    <div class="project-number project-number-right">01</div>
                    <div class="project-content project-content-left">

                        <div class="project-skills-container">
                            <img class="project-skill" src="/stack/HTML.png" alt="" />
                            <img class="project-skill" src="/stack/CSS.png" alt="" />
                            <img class="project-skill" src="stack/Tailwind.png" alt="" />
                            <img class="project-skill" src="/stack/netlify.svg" alt="" />
                            {/* <!-- <img class="project-skill" src="./images/stack/Javascript.svg" alt="" />
                            <img class="project-skill" src="./images/stack/Express.png" alt="" />
                            <img class="project-skill" src="./images/stack/NextJsCircle.png" alt="" />
                            <img class="project-skill" src="./images/stack/NodeJs.svg" alt="" />
                            <img class="project-skill" src="./images/stack/MongoDB.svg" alt="" />
                            <img class="project-skill" src="./images/stack/Redux.svg" alt="" />
                            <img class="project-skill" src="./images/stack/Vercel.svg" alt="" /> --> */}
                        </div>

                        <h2 class="project-heading">Razorpay Clone</h2>

                        <p class="project-subHeading">          
                        Built a web application that closely mimicked the design of the popular Indian payment gateway, Razor Pay, using HTML & Tailwind CSS.
                        </p>
                        <div class="btn-grp">
                           
                        </div>
                    </div>
                </div>
                <div class="project-card" id="project2">
                    <div class="project-number project-number-right">01</div>
                    <div class="project-content project-content-left">

                        <div class="project-skills-container">
                            <img class="project-skill" src="/stack/HTML.png" alt="" />
                            <img class="project-skill" src="/stack/CSS.png" alt="" />
                            <img class="project-skill" src="stack/Tailwind.png" alt="" />
                            <img class="project-skill" src="/stack/netlify.svg" alt="" />
                            <img class="project-skill" 
                          src="stack/Redux.svg" alt="" />
                               <img class="project-skill" src="stack/React.png" alt="" />
                            {/* <!-- <img class="project-skill" src="./images/stack/Javascript.svg" alt="" />
                            <img class="project-skill" src="./images/stack/Express.png" alt="" />
                            <img class="project-skill" src="./images/stack/NextJsCircle.png" alt="" />
                            <img class="project-skill" src="./images/stack/NodeJs.svg" alt="" />
                            <img class="project-skill" src="./images/stack/MongoDB.svg" alt="" />
                            <img class="project-skill" src="./images/stack/Redux.svg" alt="" />
                            <img class="project-skill" src="./images/stack/Vercel.svg" alt="" /> --> */}
                        </div>

                        <h2 class="project-heading">Shopping Cart</h2>

                        <p class="project-subHeading">          
                        Built a web application that closely mimicked the design of e-commerce website containing feature like add to cart using HTML & Tailwind CSS,React.js,Redux.
                        </p>
                        <div class="btn-grp">
                           
                        </div>
                    </div>
                </div>
               
          
                <div class="project-card" id="project3">
                  <div class="project-number project-number-right">03</div>
                  <div class="project-content project-content-left">
                    <div class="project-skill-container sk">
                      <img class="project-skill" src="stack/HTML.png" alt="" />
                      <img class="project-skill" src="stack/CSS.png" alt="" />
                      <img class="project-skill" src="/stack/Javascript.svg" alt="" />
                      <img class="project-skill" src="/stack/netlify.svg" alt="" />
                      {/* <!-- <img class="project-skill" src="./images/stack/Tailwind.png" alt="" />
                      <img class="project-skill" src="./images/stack/NextJsCircle.png" alt="" /> -->
                      <!-- <img class="project-skill" src="./images/stack/Vercel.svg" alt="" /> --> */}
                    </div>
          
                    <h2 class="project-heading">Password Generator</h2>
                    <p class="project-sub-heading">
                      Designed and developed a web application that generates random passwords based on user preferences. The app allows users 
                      to choose the length of the password and select the types of characters to include, such as uppercase letters, lowercase 
                      letters, numbers, and special characters.                    </p>
                    <div class="btn-group">
                      {/* <!-- <button class="btn-pink btn-project">Read More</button> --> */}
                     
                    </div>
                  </div>
                </div>
          
                <div class="project-card" id="project4">
                  <div class="project-number project-number-left">04</div>
                  <div class="project-content project-content-right">
                    <div class="project-skill-container sk">
                      <img class="project-skill" src="/stack/HTML.png" alt="" />
                      <img class="project-skill" src="/stack/CSS.png" alt="" />
                      <img class="project-skill" src="/stack/Javascript.svg" alt="" />
                      <img class="project-skill" src="./images/stack/Github.svg" alt="" />
                    </div>
                    <h2 class="project-heading">Weather-App</h2>
                    <p class="project-sub-heading">
                      Designed and developed a web application that provides real-time weather information for a given location. The app 
                      uses APIs to retrieve weather data and displays it in an easy-to-read format. It also includes feature like search 
                      function.
                    </p>
                    <div class="btn-group">
                      {/* <!-- <button class="btn-pink btn-project">Read More</button> --> */}
                      {/*  */}
                    </div>
                  </div>
                </div>
            </div>

        </div> 
    </div>
  )
}

export default Project
