import React from 'react'
import web2 from '../src/images/res.png';
const About=() =>
{
    return(<>
    <section id="abt" className="d-flex align-items-center">
     <div className="container-fluid">
         <div className="row">
             <div className="col-10 mx-auto">
                
            <h1 className="resum text-center mb-3">Resume</h1>
            <div className="text-center pt-3"><img src={web2} className=""  alt=""/>
           <h1 className="text-center blu pt-2">KARAN BHANDARI
            </h1><p className=" text-center blu">Lucknow,Uttar Pradesh</p><p className="text-center blu">karanbhandari232@gmail.com</p>
            <p className="text-center blu">+917844928435
            </p></div>
           
            <article>
                <div className=" obj text-center py-3">
                    <h3>
                      CAREER OBJECTIVE
                    </h3>
                    <p>To secure a responsible career opportunity to fully utilize my skills, while making a significant contribution to
the success of the company.</p>
                </div>
            </article>
            <article>
                <div className="acad text-center py-3">
                    <h3>
                      ACADEMIC PROFILE
                    </h3>
                    <p><div>B. Tech (CSE) Amity University Uttar Pradesh, Lucknow Campus
2017-2021 8.04 CGPA</div>
<div>XII ISC
2017 80.6%</div>
<div>X ICSE
2015 82.8%</div></p>
                </div>
            </article>
            <article>
                <div className="obj text-center py-3">
                    <h3>
                    CERTIFICATES 
                    </h3>
                    <p>
                   <div>Udemy - MERN Stack Master Course</div>
<div>Udemy - Web Development Masterclass</div>
<div>Udemy - The Web Developer Bootcamp</div>
                    </p>
                </div>
            </article>
            <article>
                <div className="acad text-center py-3">
                    <h3>
                    TECHNICAL SKILLS/CORE STRENGTHS
                    </h3>
                    <p>
                    <div>Programming Languages - C , Java</div>
<div>Web Technology - HTML, CSS, Bootstrap, Java Script, React JS, Node JS(Basic), Express JS(Basic)
Database MongoDB</div>
<div>Software Tools - Visual Studio Code, Eclipse</div>
                    </p>
                </div>
            </article>
            <article>
                <div className="obj text-center py-3">
                    <h3>
                    PROJECTS
                    </h3>
                    <p>
                  <div>1. Personal Portfolio
A website demonstrating my portfolio in the form of a website using React JS, Bootstrap, Node JS.
</div> <div>2. Live Clock using React JS
A live clock using the features of React hooks.</div>
                    </p>
                </div>
            </article>
            <article>
                <div className="acad text-center py-3">
                    <h3>
                    HONOURS/AWARDS
                    </h3>
                    <p><div>1. Assisted in the Global Education Interact.</div>
<div>2. Won gold medal in long jump at inter school level.</div>
<div>3. Won silver medal in 100 meter race at inter school level.</div></p>
                </div>
            </article>
            <article>
                <div className="obj text-center py-3">
                    <h3>
                    CO-CURRICULAR
                    </h3>
                    <p>
                    <div>1. Watered the plants in the Amity University campus.</div>
                    <div>2. Donated food to the needy ones during COVID- 19.</div>
                    </p>
                </div>
            </article>
            <article>
                <div className="acad text-center py-3">
                    <h3>
                    PERSONAL ATTRIBUTES
                    </h3>
                    <p>
                   <div>1. Good leadership skills</div>
<div>2. Good interpersonal skills</div>
<div>3. Good analytical ability</div>
<div>4. Willingness to learn</div>
<div>5. Ability to use logical and creative approach for solving problems</div>
<div>6. Good communication skills</div>
                    </p>
                </div>
            </article>
            <article>
                <div className="obj text-center py-3">
                    <h3>
                    HOBBIES/INTERESTS
                    </h3>
                    <p>
                   <div>1. Playing cricket</div>
<div>2. Listening music</div>
<div>3. Travelling</div>
                    </p>
                </div>
            </article>
            <article>
                <div className="acad text-center py-3">
                    <h3>
                    LANGUAGES KNOWN
                    </h3>
                    <p>
                    <div>1. Proficient in English and Hindi</div>
<div>2. Working knowledge of German</div>
                    </p>
                </div>
            </article>
           

             </div>
         </div>
     </div>
     </section>
    </>)
}
export default About;