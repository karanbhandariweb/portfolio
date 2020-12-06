import React from 'react';

function Card(props)
{
    return(
        <>
        <div className="col-md-4 col-10 mx-auto">
            <div className="card">
                <img src={props.imgsrc} className="card__img" alt="..." height="400px"/>
                <div className="card-body">
                    
                    <h3 className="card__title">{props.title}</h3>
                    <a href={props.link} className="btn btn-primary">Switch to </a>
                    
                </div>
            </div>
        </div>
        </>
    )
}
export default Card;