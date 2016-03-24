import React from 'react';
import $ from 'jquery';
import CommentList from './comment-list.jsx';
import CommentForm from './comment-form.jsx';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'App';
        this.state = {data: []};
    }

    loadCommentsFromServer() {
        // You can `git clone https://github.com/reactjs/react-tutorial`
        // then `npm install && node server.js` to stand up the server on port 3000
        $.ajax({
            url: this.props.url,
            dataType: 'json',
            cache: false,
            success: (data) => this.setState({data: data}),
            error: (xhr, status, err) => console.error(this.props.url, status, err.toString())
        })
    }

    componentDidMount() {
        this.loadCommentsFromServer()
        setInterval(::this.loadCommentsFromServer, this.props.pollInterval)
    }

    handleCommentSubmit(comment) {
        let comments = this.state.data;
        // Optimistically set an id on the new comment.
        // It will be replaced by an id generated by the server.
        comment.id = Date.now();
        let newComments = comments.concat([comment]);
        this.setState({data: newComments});

        $.ajax({
            url: this.props.url,
            dataType: 'json',
            type: 'POST',
            data: comment,
            success: (data) => this.setState({data: data}),
            error: (xhr, status, err) => {
                // roll back list of comments if POSTing fails
                this.setState({data: comments})
                console.error(this.props.url, status, err.toString())
            }
        })
    }

    render() {
        return (
            <div className="commentBox">
                <h1>Comments</h1>
                <CommentList data={this.state.data}/>
                <CommentForm onCommentSubmit={::this.handleCommentSubmit} />
            </div>
        );
    }
}

export default App;