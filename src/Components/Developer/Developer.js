import React from 'react';
import './Developer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faListUl } from '@fortawesome/free-solid-svg-icons'

const Developer = (props) => {
    const {name, img, profession, mail, salary, skill, experience} = props.developer;
    const element = <FontAwesomeIcon icon =  {faListUl}/>
    return (
        <div>
            <div className="card">
                <div className="card-image">
                    <img src={img} alt=""/>
                </div>
                <div className="card-body">
                    <h3>{name}</h3>
                    <p>Profession : {profession}</p>
                    <p>Mail: {mail}</p>
                    <p>Salay: {salary}</p>
                    <p>Skills: {skill}</p>
                    <p>Experience : {experience}</p>
                </div>
                <div className="card-btn">
                    <button onClick={() => props.handleAddToList(props.developer)}>{element}  Add to list</button>
                </div>
            </div>
        </div>
    );
};

export default Developer;