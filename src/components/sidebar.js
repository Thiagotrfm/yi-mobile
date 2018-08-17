import React, { Component } from 'react';

class Sidebar extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      'allContacts': [
        {
          'firstName': 'Liana',
          "lastName": "Crooks",
          "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/kevinoh/128.jpg",
        },
        {
          'firstName': 'Thiago',
          "lastName": "Felix",
          "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/andysolomon/128.jpg"
        },
        {
          'firstName': 'Thaynara',
          "lastName": "Késsia",
          "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/andysolomon/128.jpg"
        },
        {
          'firstName': 'Lidia',
          "lastName": "Miranda",
          "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/andysolomon/128.jpg"
        }
      ]
    }
  }

  componentWillMount(){
    this.setState({contacts: this.state.allContacts})
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

        <ul className="collection">
          {this.state.contacts.map((contact) => {
            return (
              <li className="collection-item avatar">
                <img src={contact.avatar} alt="" className="circle" />
                <span className="title">{contact.firstName}</span>
                <p>{contact.lastName}<br />
                </p>
                <a href="#!" className="secondary-content"><i className="material-icons">arrow_forward</i></a>
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
      return contact.firstName.toLowerCase().search(event.target.value.toLowerCase()) !== -1 ||
             contact.lastName.toLowerCase().search(event.target.value.toLowerCase()) !== -1;
    });

    console.log(updatedContacts);
    
    this.setState( {contacts: updatedContacts});
  }
}

export default Sidebar;
