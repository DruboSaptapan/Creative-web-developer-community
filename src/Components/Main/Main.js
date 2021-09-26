import React, { useEffect, useState } from 'react';
import Developer from '../Developer/Developer';
import List from '../List/List';
/* this is used for css */
import './Main.css'

const Main = () => {
    const [developers, setDevelopers] = useState([])
    const [list, setList] = useState([])

    useEffect(() => {
        fetch('./developers.JSON')
            .then(res => res.json())
            .then(data =>  setDevelopers(data))
    }, [])

    const handleAddToList = developer => {
        if (list.indexOf(developer) === -1) {
            const newList = [...list, developer];
            setList(newList)            
        }
        else{
            alert('This is already added.')
        }

        // console.log(newList.length)
    }
    return (
        <div className="container">
            <div className="d-grid">
                <div className="developer">
                    {/* <h2>Developer {developers.length}</h2> */}
                    <div class="profile-cards">
                    {
                        developers.map(developer => <Developer developer={developer} key = {developer._id} handleAddToList = {handleAddToList}></Developer>)
                    }
                    </div>
                </div>
                <div className="developer-selection">
                    <List list={list}></List>
                </div>
            </div>
        </div>
    );
};

export default Main;