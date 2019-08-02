import React from 'react';
import './Card.css'


export default function Card(props) {
 
  return (
            <div className="card content-box">
                <div className="card-body">
                    <h3 className="center">{props.title}</h3>
                    <div className="dropdown-divider"></div>
                    <div className="row center">
                        {
                        props.data.map(( data, index)=> (  
                            <div  key={index} className="col sm-4 flex-center" >
                                <img className="img-skills" src={data.imgUrl} alt=""/>
                                <span>{data.name}</span>
                            </div> 
                        ))
                        }
                        </div>
                </div>
            </div>
  );
}
