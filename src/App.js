
import React, { useState, useEffect } from 'react';
import { Button, FormControl, InputLabel, Input } from '@material-ui/core';
import './App.css';

import FlipMove from 'react-flip-move';
import SendIcon from '@material-ui/icons/Send';
import { IconButton } from '@material-ui/core';

// firebase and database configuration
import db from './Firebase';
import firebase from 'firebase';

// personal imports
import Message from './Message';

function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState('');

  // useState = is simply a stateful way of writing variables in React because it auto refreshes changes automatically
  // useEffect =  is a block of code that is used to run conditional statements in React

  useEffect(() => {
    // run once the app component loads
    db.collection('messages').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      setMessages(snapshot.docs.map(doc => ({id: doc.id, message: doc.data()})))
    });
  }, [] );

  useEffect(() => {
    // run code here...
    // if it's blank inside the [](dependencies), then this code runs ONCE when the app component loads
    // if we have a variable like [input], it keeps running the block of code here
    setUsername(prompt('Please enter your username...'));
  }, 
  // condition
  []
  );

  const sendMessage = (event) => {
    event.preventDefault();

    db.collection('messages').add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    });

    // all logics to send a message goes in here
    // setMessages([...messages, { username: username, text: input }]);
    setInput('');
  }

  return (
    <div className="App">

      <img src="https://facebookbrand.com/wp-content/uploads/2018/09/Header-e1538151782912.png?w=100&h=100" />

      <h1>Hello, Chidiebere Chukwuma!</h1>
      <h2>Welcome {username}</h2>
      
      {/* To activate the enter key on submit messages we have to wrap the entire elements in a form */}
      
      <form className="app__form" >

        <FormControl className="app__formControl">

          {/* label for the input */}
          <InputLabel>Enter a message...</InputLabel>

          {/* input field */}
          <Input className="app__input" placeholder='Enter a message...' value={input} onChange={event => setInput(event.target.value)} />

          {/* button */}
          <IconButton 
            disabled={!input} 
            variant="contained" 
            color="primary" 
            type='submit' 
            onClick={sendMessage}
            className="app__iconButton"
          >
            <SendIcon />
          </IconButton>

          {/* <Button disabled={!input} variant="contained" color="primary" type='submit' onClick={sendMessage}>Send Message</Button> */}

        </FormControl>

      </form>

      <FlipMove>

        {/* messages listed out */}

        {
          messages.map(({id, message}) => (
            <Message key={id} username={username} message={message} />
          ))
        }

      </FlipMove>
      
        

    </div>
  );
}

export default App;
