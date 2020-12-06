import React from 'react';
import Card from './Card';

import cd from '../src/images/vcrd.png';
import lgf from '../src/images/lgf.png';
import flipm from '../src/images/flipm.png';
import wclk from '../src/images/wclk.png';
import cms from '../src/images/cms.png';
import cmss from '../src/images/cmss.png';





const MyWork = () =>
{
    return(<>
    <div className="wk my-5">
        <h1 className="text-center">Work</h1>
    </div>
    <div className="container-fluid mb-5">
        <div className="row">
            <div className="col-10 mx-auto">
                <div className="row gy-4">
    <Card
    imgsrc={cd}
        title="Visa Card"
   link="http://karanbhandariweb.github.io/visacard"/>

<Card
    imgsrc={lgf}
    title="Login Form"
    link="http://karanbhandariweb.github.io/loginform"/>
     <Card
    imgsrc={flipm}
    title="Name Flip"
    link="http://karanbhandariweb.github.io/flip"/>
     <Card
    imgsrc={wclk}
    title="Digital Clock"
    link= "http://karanbhandariweb.github.io/digiclock"/>
     <Card
    imgsrc={cms}
    title="Coming Soon"
    link= "https://karanbhandariweb.github.io/portfolio"/>
     <Card
    imgsrc={cmss}
    title="Coming Soon"
    link="https://karanbhandariweb.github.io/portfolio"/>
    </div></div></div></div>
    </>)
}
export default MyWork;