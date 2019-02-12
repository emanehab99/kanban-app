import React from 'react';
import uuid from 'uuid';

import Notes from './Notes';

import connect from '../libs/connect';

import NoteActions from '../actions/NoteActions';


class App extends React.Component {

    render(){
        const {notes} = this.props;

        return (
            <div>
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
        // And another way to do it
        // this.setState({notes:[...this.state.notes, {id: uuid.v4(), task:'New Task'}]});
        this.props.NoteActions.create([{
                id: uuid.v4(),
                task: 'New task'
            }]
        )
    };

    deleteNote = (id, e) => {

        e.stopPropagation();

        this.setState({
            notes: this.state.notes.filter(note => note.id !== id)
        });
    }

    activateNoteEdit = (id) => {
        this.props.NoteActions.update({id, editing: true});
    }

    editNote = (id, task) => {
       this.props.NoteActions.update({id, task, editing: false});
    }

}
export default connect(({notes}) => ({
    notes
}), {
    NoteActions
})(App)