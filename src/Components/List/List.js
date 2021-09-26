import React from 'react';

const List = (props) => {
    const {list} = props;
    console.log(list)

    let total = 0;
    for (const developer of list) {
        total = total + developer.salary
    }

    return (
        <div>
            <h2>Developer Selected: {props.list.length}</h2>
            <h4>Total Cost: {total.toFixed(2)}</h4>
        </div>
    );
};

export default List;