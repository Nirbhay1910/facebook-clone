import { Avatar } from '@material-ui/core';
import React, { useState } from 'react';
import './CommentSender.css';
import { useStateValue } from './StateProvider';
import db from './firebase';
import firebase from 'firebase';

function CommentSender({ id }) {
  const [{ user }, dispatch] = useStateValue();
  const [input, setInput] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();

    // Some db stuff
    console.log(id);
    db.collection('posts').doc(id).collection('comments').add({
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      profilePic: user.photoURL,
      username: user.displayName,
    });
    // console.log(db.collection('posts').doc(id).get());
    setInput('');
  };
  return (
    <div className='commentSender'>
      <div className='commentSender__top'>
        <Avatar src={user.photoURL} />
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className='commentSender__input'
            type='text'
            placeholder={`Write a comment...`}
          />
          <button onClick={handleSubmit} type='submit'>
            Hidden Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default CommentSender;
