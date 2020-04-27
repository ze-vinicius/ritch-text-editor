import React from 'react';
import ReactDOM, { render } from 'react-dom';
import {Editor, EditorState, RichUtils } from 'draft-js';
import './text-editor.css';

class TextEditor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {editorState: EditorState.createEmpty()};
        this.onChange = editorState => this.setState({editorState});
        this.handleKeyCommand = this.handleKeyCommand.bind(this);
        this.setDomEditorRef = ref => this.domEditor = ref;
        this.focus = () => this.domEditor.focus();
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

    btnHeaderOneFormat() {
        const newState = RichUtils.toggleBlockType(this.state.editorState, 'header-one');
        this.onChange(newState);
    }
    btnHeaderTwoFormat() {
        const newState = RichUtils.toggleBlockType(this.state.editorState, 'header-two');
        this.onChange(newState);
    }
    btnHeaderThreeFormat() {
        const newState = RichUtils.toggleBlockType(this.state.editorState, 'header-three');
        this.onChange(newState);
    }

    componentDidMount() {
        this.domEditor.focus()
    }

    render() {
        return (
        <div className="root">
            <div className="toolbar">
                <button className="btn-toolbar" onClick={this.btnHeaderOneFormat.bind(this)}>
                    H1
                </button>
                <button className="btn-toolbar" onClick={this.btnHeaderTwoFormat.bind(this)}>
                    H2
                </button>
                <button className="btn-toolbar" onClick={this.btnHeaderThreeFormat.bind(this)}>
                    H3
                </button>
                <button className="btn-toolbar" onClick={this.btnBoldFormat.bind(this)}>
                    <b>B</b>
                </button>
                <button className="btn-toolbar" onClick={this.btnItalicFormat.bind(this)}>
                <i>I</i>
                </button>
                <button className="btn-toolbar" onClick={this.btnUnderlineFormat.bind(this)}>
                <u>U</u>
                </button>
            </div>
            <div onClick={this.focus} className="editor">
                <Editor 
                    editorState={this.state.editorState} 
                    onChange={this.onChange} 
                    handleKeyCommand={this.handleKeyCommand}
                    ref={this.setDomEditorRef}
                    />
            </div>
            <button type="button" className="btn-submit" >NÃO FAZ NADA...</button>
        </div>
        )   
    }
}

export default TextEditor;

// ReactDOM.render(<Editor />, document.getElemtn);