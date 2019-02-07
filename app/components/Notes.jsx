import React from 'react'

import Note from './Note';

import Editable from './Editable'

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

export default ({
                    notes,
                    onNoteClick= () => {}, onEdit= () => {}, onDelete= () => {}
}) => (
    <ul className="notes">{notes.map(({id, editing, task}) =>
        <li key={id}>
            <Note className="note" onClick={onNoteClick.bind(null, id)} >
                <Editable
                    editing={editing}
                    value={task}
                    onEdit={onEdit.bind(null, id)}
                />
                <button className="delete"
                        onClick={onDelete.bind(null, id)}>X</button>
            </Note>
        </li>
    )}
    </ul>
)