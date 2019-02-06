import React from 'react'

import Note from './Note';

// import uuid from 'uuid'

// const notes = [
//     {
//         id: uuid.v4(),
//         task: 'Learn React'
//     },
//     {
//         id: uuid.v4(),
//         task: 'Do laundry'
//     }
// ];

// debugger;
export default ({notes, onDelete= () => {}}) => (
    <ul> {notes.map(({id, task}) =>
            <li key={id}>
                <Note task={task}  onDelete={onDelete.bind(null, id)}/>
            </li>
    )}</ul>
)