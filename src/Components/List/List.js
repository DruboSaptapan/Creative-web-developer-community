import React from 'react';
import './List.css'

const List = (props) => {
    const { list } = props;

    let total = 0;
    for (const developer of list) {
        total = total + developer.salary
    }

    return (
        <div>
            <h3>Total developer selected: {props.list.length}</h3>
            <ul>
                {
                    list.map(developer => <li key = {developer._id}>{developer.name}</li>)
                }
            </ul>
            <h4>Total Cost: ${total.toFixed(2)}</h4>
        </div>
    );
};

export default List;