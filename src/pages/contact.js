
import React from 'react';
import NavBar from "../components/navbar.component";
import "../style/contact.css"


class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: ''
    }
  }
  render() {
    return(
      <div className="App">
        <NavBar />
        <h1 className="title yellow">Me contacter</h1>
        <div class="card contact">
          <div class="card-body">
            <form id="contact-form">
              <div className="form-group">
                <label htmlFor="name">Nom</label>
                <input type="text" className="form-control blue" value={this.state.name} onChange={this.onNameChange.bind(this)} />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Addresse Email</label>
                <input type="email" className="form-control blue" aria-describedby="emailHelp" value={this.state.email} onChange={this.onEmailChange.bind(this)} />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea className="form-control blue" rows="5" value={this.state.message} onChange={this.onMessageChange.bind(this)} />
              </div>
              <button type="submit" className="btn btn-primary">Envoyer</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
  onNameChange(event) {
    this.setState({name: event.target.value})
  }
  onEmailChange(event) {
    this.setState({email: event.target.value})
  }
  onMessageChange(event) {
    this.setState({message: event.target.value})
  }
  handleSubmit(event) {
  }
}
export default Contact;