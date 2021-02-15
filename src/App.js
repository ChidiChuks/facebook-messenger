
import React, { useState } from 'react';
import './App.css';

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

        {/* input field */}
        <input value={input} onChange={event => setInput(event.target.value)} />

        {/* button */}
        <button type='submit' onClick={sendMessage}>Send Message</button>

      </form>
      
        {/* messages listed out */}
        {
          messages.map(message => (
            <p>{message}</p>
          ))
        }

    </div>
  );
}

export default App;
