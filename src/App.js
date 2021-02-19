
import React, { useState, useEffect } from 'react';
import { Button, FormControl, InputLabel, Input } from '@material-ui/core';
import './App.css';

// personal imports
import Message from './Message';

function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    { username: 'ChidiChuks', text: 'hey guys' },
    { username: 'Qazi', text: 'whats up?' }, 
    { username: 'Sonny', text: 'hi peeps' }
  ]);
  const [username, setUsername] = useState('');

  // useState = is simply a stateful way of writing variables in React because it auto refreshes changes automatically
  // useEffect =  is a block of code that is used to run conditional statements in React

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
    // all logics to send a message goes in here
    setMessages([...messages, { username: username, text: input }]);
    setInput('');
  }

  return (
    <div className="App">
      <h1>Hello, Chidiebere Chukwuma!</h1>
      <h2>Welcome {username}</h2>
      
      {/* To activate the enter key on submit messages we have to wrap the entire elements in a form */}
      
      <form>

        <FormControl>

          {/* label for the input */}
          <InputLabel>Enter a message...</InputLabel>

          {/* input field */}
          <Input value={input} onChange={event => setInput(event.target.value)} />

          {/* button */}
          <Button disabled={!input} variant="contained" color="primary" type='submit' onClick={sendMessage}>Send Message</Button>

        </FormControl>

      </form>
      
        {/* messages listed out */}
        {
          messages.map(message => (
            <Message username={message.username} text={message.text} />
          ))
        }

    </div>
  );
}

export default App;
