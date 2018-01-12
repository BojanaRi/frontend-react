import React from 'react';
import ReactDOM from 'react-dom';
//import io from 'socket.io-client';
import './styleform.css';


class Chat extends React.Component {
  constructor (props){
    super(props);
    this.state = {
      value: '',
      list: [],
    };

    this.handleForm = this.handleForm.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // componentDidMount() {
  //   const { endpoint } = this.state;
  //   const socket = io('localhost:3000');
  //   socket.on('chat message', msg => {
  //     let value = msg; //new message
  //     let array = this.state.list; //list of all messages
  //     if (value !== ''){
  //       array.push(value); //add new message to the list
  //       this.setState({list: array}); //update list
  //     }
  //   });
  // }

  handleForm(event){
    this.setState({value: event.target.value});
  }

  handleSubmit(event){
    event.preventDefault(); //don't submit form
    let value = this.state.value; //new message
    let array = this.state.list; //list of all messages
    if (value !== ''){
    //  socket.emit('chat message', value);
      array.push(value); //add new message to the list
      this.setState({list: array}); //update list
    }
  }

  render () {
    return (
      <div>
      <ul className = 'messages'><MessageList messages = {this.state.list} name = {this.state.name} /></ul>
      <form name='chat-form' onSubmit={this.handleSubmit}>
        <input className='form-input' name='chat-input' type="text" autoComplete="off" value={this.state.value} onChange={this.handleForm} />
        <input className='button' type="submit" value="Send" />
      </form>
    </div>
    );
  }
}

function MessageList(props) {
  const messages = props.messages;
  const listItems = messages.map((message) =>
      <li>{message}</li>
    );
  return (
    <ul>{listItems}</ul>
  );
}


ReactDOM.render(
  <Chat  />,
  document.getElementById('root')
);
