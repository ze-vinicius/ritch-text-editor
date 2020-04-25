import React, {useState} from 'react';
import ReactDOM, { render } from 'react-dom';
import {Editor, EditorState, RichUtils } from 'draft-js';

class TextEditor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {editorState: EditorState.createEmpty()};
        this.onChange = editorState => this.setState({editorState});
        this.handleKeyCommand = this.handleKeyCommand.bind(this);
    }

    handleKeyCommand(command, editorState) {
        const newState = RichUtils.handleKeyCommand(editorState, command);

        if (newState) {
            this.onChange(newState);
            return 'handled';
        } else {
            return 'not-handled';
        }
    }

    btnBoldFormat() {
        const newState = RichUtils.toggleInlineStyle(this.state.editorState, 'BOLD');

        this.onChange(newState);
    };

    btnItalicFormat() {
        const newState = RichUtils.toggleInlineStyle(this.state.editorState, 'ITALIC');

        this.onChange(newState);
    }

    btnUnderlineFormat() {
        const newState = RichUtils.toggleInlineStyle(this.state.editorState, 'UNDERLINE');

        this.onChange(newState);
    }

    render() {
        return (
            <div>
            <button onClick={this.btnBoldFormat.bind(this)}>B</button>
            <button onClick={this.btnItalicFormat.bind(this)}>I</button>
            <button onClick={this.btnUnderlineFormat.bind(this)}>U</button>
            <Editor 
                editorState={this.state.editorState} 
                onChange={this.onChange} 
                handleKeyCommand={this.handleKeyCommand}
                />
        </div>
        )   
    }
}

export default TextEditor;

// ReactDOM.render(<Editor />, document.getElemtn);