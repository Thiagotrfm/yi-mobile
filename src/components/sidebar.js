import React, { Component } from 'react';
import axios from 'axios';

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allContacts: [],
      contacts: []
    }
    
  }

  componentWillMount() {
    axios.get('https://api.myjson.com/bins/15js3g')
    .then(response => this.setState({allContacts: response.data, contacts: response.data}));
  }

  render() {
    return (
      <div className="side-bar">
        <div className="nav-wrapper">
          <form>
            <div className="input-field">
              <input id="search" type="search" required onChange={this.filterContacts.bind(this)} />
              <label className="label-icon" for="search"><i className="material-icons">search</i></label>
              <i className="material-icons">close</i>
            </div>
          </form>
        </div>

        <ul className="collection contactsList">
          {this.state.contacts.map((contact) => {
            return (
              <li className="collection-item avatar">
                <img src={contact.general.avatar} alt="" className="circle" />
                <span className="title">{contact.general.firstName} {contact.general.lastName}</span>
                <p>{contact.job.company}<br />
                  {contact.address.country}
                </p>
                { contact.general.firstName !== "" &&
                  <a href="#!" className="secondary-content" ><i className="material-icons">arrow_forward</i></a>
                }
              </li>
            );
          })
          }
        </ul>
      </div>
    );
  }

  filterContacts(event){
    var updatedContacts = this.state.allContacts;

    updatedContacts = updatedContacts.filter(function(contact){
      return contact.general.firstName.toLowerCase().search(event.target.value.toLowerCase()) !== -1 ||
             contact.general.lastName.toLowerCase().search(event.target.value.toLowerCase()) !== -1;
    });

    console.log(updatedContacts);
    
    this.setState( {contacts: updatedContacts});
  }
}

export default Sidebar;
