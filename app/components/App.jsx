import React from 'react'
import uuid from 'uuid'

import Notes from './Notes'

// export default () => <Notes />; //include Notes directly into App


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

// export default () => (
//     <div>
//         <button onClick={() => console.log('add note')}>+</button>
//         <Notes notes={notes} />
//     </div>
// );

export default class App extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            notes:[
                {
                    id: uuid.v4(),
                    task: 'Learn React'
                },
                {
                    id: uuid.v4(),
                    task: 'Do laundry'
                }
            ]
        };
    }

    render(){
        const {notes} = this.state;

        return (
            <div>
                {/*<button onClick={() => console.log('add note')}>+</button>*/}
                <button className="add-note" onClick={this.addNote}>+</button>
                <Notes
                    notes={notes}
                    onNoteClick={this.activateNoteEdit}
                    onEdit={this.editNote}
                    onDelete={this.deleteNote}
                />
            </div>
        );
    }

    addNote = () => {
        // One way to do it
        // this.setState({
        //     notes: this.state.notes.concat([{
        //         id: uuid.v4(),
        //         task: 'New Task'
        //         }]
        //     )
        // });

        // And another way to do it
        this.setState({notes:[...this.state.notes, {id: uuid.v4(), task:'New Task'}]});
    }

    deleteNote = (id, e) => {

        e.stopPropagation();

        this.setState({
            notes: this.state.notes.filter(note => note.id !== id)
        });
    }

    activateNoteEdit = (id) => {
        this.setState({
            notes: this.state.notes.map(note => {
                if(note.id === id){
                    note.editing = true;
                }
                return note;
            })
        });
    }

    editNote = (id, task) => {
        this.setState({
            notes: this.state.notes.map(note => {
                if(note.id === id){
                    note.editing = false;
                    note.task = task;
                }
                return note;
            })
        });
    }


}