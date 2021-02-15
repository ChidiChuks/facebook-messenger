
import React, { useState } from 'react';
import { Button, FormControl, InputLabel, Input } from '@material-ui/core';
import './App.css';

// personal imports
import Message from '../src/Message';

function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState(['Hello', 'Hi', 'What\'s up?']);

  console.log(input);
  console.log(messages);

  const sendMessage = (event) => {
    event.preventDefault();
    // all logics to send a message goes in here
    setMessages([...messages, input]);
    setInput('');
  }

  return (
    <div className="App">
      <h1>Hello, Chidiebere Chukwuma!</h1>
      
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
            <Message />
            <p>{message}</p>
          ))
        }

    </div>
  );
}

export default App;
