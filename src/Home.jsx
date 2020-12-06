import React from 'react';

import web1 from '../src/images/picart.png';




const Home=() =>
{ 
    return(<>
        <section id="head" className="d-flex align-items-center">
        <div className="container-fluid">
        <div className="row">
        <div className="col-10 mx-auto">
            <div className="row">
        <div className="col-lg-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column tx">
            <h1 className="text-center">Hello I am Karan Bhandari,</h1>
            <h3 className="text-center my-3">I am a Web Developer/Designer</h3>
            <div className="text-center my-2">
                <a href="http://karanbhandariweb.github.io/pdfviewer" className="btn">Get Resume</a>
            </div>
            </div> 
            <div className="col-lg-6 order-1 px-2 order-lg-2 img">
            <img src={web1} className="headg"  alt=""/>
            </div>
            </div>
            </div>   
            </div>   </div>
        </section>
    </>)
}
export default Home;