import React from 'react';

class CommentForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {author: '', text: ''}
    }

    handleAuthorChange(e) {
        this.setState({author: e.target.value});
    }

    handleTextChange(e) {
        this.setState({text: e.target.value});
    }

    handleSubmit(e) {
        // e.preventDefault();

        let author = this.state.author.trim();
        let text = this.state.text.trim();
        if (!text || !author) return;

        this.props.onCommentSubmit({author: author, text: text})
        this.setState({author: '', text: ''});
    }

    render() {
        return (
            <div className="commentForm" onSumbit={::this.handleSubmit}>
                <input
                    type="text"
                    placeholder="Your name"
                    value={this.state.author}
                    onChange={::this.handleAuthorChange}
                />
                <input
                    type="text"
                    placeholder="Say something..."
                    value={this.state.text}
                    onChange={::this.handleTextChange}
                />
                <button onClick={::this.handleSubmit}>Post</button>
            </div>
        );
    }
}

export default CommentForm;
