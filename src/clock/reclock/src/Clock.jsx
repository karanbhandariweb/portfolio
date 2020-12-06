import React from 'react';
import { useState } from 'react';

const Clock = ()=>{
    let time=new Date().toLocaleTimeString();
    const [ctime,setime]=useState(time);
    const UpdateTime = () =>{
        time=new Date().toLocaleTimeString();
        setime(time);
    };
    setInterval(UpdateTime,1000);
    return(
        <>
        <h1>
            {ctime}
        </h1></>
    );
}
export default Clock;