import React from 'react';

const Comments = React.createClass({
  renderComment(comment) {
    return (
      <div className='comment'>
        <p>
          <strong>{comment.user}</strong>
          {comment.text}
          <button className="remove-comment">x</button>
        </p>
      </div>
    )
  },
  handleSubmit(e){
    e.preventDefault();
    const postId = this.props.params.pathId
    const author = this.refs.author.value;
    const comment = this.refs.comment.value;
    this.props.addComment(postId, author, comment);
  },
  render() {
    return (
      <div className='comments'>
        {this.props.postComments.map(item => this.renderComment(item))}
        <form ref="commentForm" className='comment-form' onSubmit={this.handleSubmit}>
          <input type="text" ref='author' placeholder='yo name'/>
          <input type="text" ref='comment' placeholder='say it with ye chest'/>
          <input type="submit" hidden/>
        </form>
      </div>
    );
  }
});

export default Comments;
