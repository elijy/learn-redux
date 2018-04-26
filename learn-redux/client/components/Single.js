import React from 'react';
import Photo from './Photo.js';
import Comments from './Comments';

const Single = React.createClass({
  render() {
    const i = this.props.posts.findIndex((post) => post.code === this.props.params.pathId);
    const post = this.props.posts[i];
    const postComments = this.props.comments[this.props.params.pathId] || [];
    return (
      <div className='single-photo'>
        <Photo {...this.props} key={i} i={i} post={post}/>
        <Comments postComments={postComments} {...this.props}/>
      </div>
    );
  }
});

export default Single;
