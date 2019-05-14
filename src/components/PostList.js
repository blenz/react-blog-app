import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

import UserFooter from './UserFooter';

class PostList extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  renderList() {
    return this.props.posts.map(post => {
      return (
        <div className="card" key={post.id}>
          <div className="card-header">{post.title}</div>
          <div className="card-body">{post.body}</div>
          <div className="card-footer">
            <UserFooter userId={post.userId} />
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        <h1>Post List</h1>
        <div>{this.renderList()}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { posts: state.posts };
};

export default connect(
  mapStateToProps,
  { fetchPosts }
)(PostList);
