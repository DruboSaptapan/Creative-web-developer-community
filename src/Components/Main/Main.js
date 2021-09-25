import React, { useEffect, useState } from 'react';
/* this is used for css */
import './Main.css'

const Main = () => {
    const [developers, setDevelopers] = useState([])

    useEffect(() => {
        fetch('./developers.JSON')
            .then(res => res.json())
            .then(data =>  setDevelopers(data))
    }, [])

    return (
        <div className="container">
            <div className="d-grid">
                <div className="developer">
                    <h2>Developer {developers.length}</h2>
                    {
                        developers.map(developer => console.log(developer.img))
                    }
                </div>
                <div className="count-section">
                    <h2>Developer Selected: </h2>
                    <h4>Total Cost: </h4>
                </div>
            </div>
        </div>
    );
};

export default Main;