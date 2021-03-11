import { Avatar } from '@material-ui/core';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import NearMeIcon from '@material-ui/icons/NearMe';
import React, { useEffect, useState } from 'react';
import './Post.css';
import db from './firebase';
import Comment from './Comment';
import CommentSender from './CommentSender';

function Post({ profilePic, image, username, timestamp, message, ide }) {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    db.collection('posts')
      .doc(ide)
      .collection('comments')
      .orderBy('timestamp', 'desc')
      .onSnapshot((snapshot) =>
        setComments(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }, [ide]);
  return (
    <div className='post'>
      <div className='post__top'>
        <Avatar src={profilePic} className='post__avatar' />
        <div className='post__topInfo'>
          <h3>{username}</h3>
          <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
        </div>
      </div>
      <div className='post__bottom'>
        <p>{message}</p>
      </div>
      <div className='post__image'>
        <img src={image} alt='' />
      </div>
      <div className='post__options'>
        <div className='post__option'>
          <ThumbUpIcon />
          <p>Like </p>
        </div>
        <div className='post__option'>
          <ChatBubbleOutlineIcon />
          <p>Comment</p>
        </div>
        <div className='post__option'>
          <NearMeIcon />
          <p>Share</p>
        </div>
        <div className='post__option'>
          <AccountCircleIcon />
          <ExpandMoreIcon />
        </div>
      </div>
      <div className='post__comments'>
        <CommentSender id={ide} />
        {comments.map((comment) => {
          return (
            <Comment
              key={comment.id}
              id={comment.id}
              timestamp={comment.data.timestamp}
              profilePic={comment.data.profilePic}
              message={comment.data.message}
              username={comment.data.username}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Post;
