import { Avatar } from '@material-ui/core';
import React from 'react';
import './Comment.css';

function Comment({ profilePic, username, message }) {
  return (
    <div class='comment'>
      <div className='comment__top'>
        <Avatar src={profilePic} className='comment__avatar' />
        <div className='comment__topInfo'>
          <h3>{username}</h3>
          <p>{message}</p>
        </div>
      </div>
    </div>
  );
}

export default Comment;
