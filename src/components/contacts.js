import React, { Component } from 'react';

class Contact extends Component {
  constructor(props){
    super(props);

    this.state = { 
      'contatos': [
        {
          'firstName': 'Liana' ,
          "lastName": "Crooks", 
          "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/kevinoh/128.jpg",
        },
        {
          'firstName': 'Thiago' ,
          "lastName": "Felix", 
          "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/andysolomon/128.jpg"
        }
      ]
    } 
  }

  render() {
    return (
      <div>
        <ul className="collection">
            { this.state.contatos.map((contact) => {
              console.log(contact.avatar);
              return (
                <li className="collection-item avatar">
                  <img src={contact.avatar} alt="" className="circle" />
                  <span className="title">{contact.firstName}</span>
                  <p>{contact.lastName}<br />
                  </p>
                  <a href="#!" className="secondary-content"><i className="material-icons">grade</i></a>
                </li>
              );
             }) 
            }
          </ul>
      </div>
    );
  }
}

export default Contact;
