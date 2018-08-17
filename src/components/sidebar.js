import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { FetchContactData } from '../actions/fetchContactData';

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allContacts: [],
      contacts: []
    }
    
  }

  componentDidMount() {
    axios.get('https://api.myjson.com/bins/15js3g')
    .then(response => this.setState({allContacts: response.data, contacts: response.data}));
  }

  render() {
    console.log(this.props.contactData);
    return (
      <div className="sidenav sidenav-fixed">
        <div className="nav-wrapper">
          <form>
            <div className="input-field">
              <input id="search" type="search" required onChange={this.filterContacts.bind(this)} />
              <label className="label-icon" htmlFor="search"><i className="material-icons">search</i></label>
              <i className="material-icons" onClick={this.cleanInput.bind(this)}>close</i>
            </div>
          </form>
        </div>

        <ul className="collection contacts-list">
          {this.state.contacts.map((contact) => {
            return (
              <li className="collection-item avatar clicable-item" key={contact.general.firstName} onClick={() => this.props.getContactData(contact)} >
                <img src={contact.general.avatar} alt="" className="circle" />
                <span className="title">{contact.general.firstName} {contact.general.lastName}</span>
                <p>{contact.job.company}<br />
                  {contact.address.country}
                </p>
              </li>
            );
          })
          }
        </ul>
      </div>
    );
  }

  cleanInput(){
    var searchInput = document.getElementById('search');

    searchInput.value = "";
    this.setState( {contacts: this.state.allContacts});
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

function mapStateToProps(state) {
  return {
    contactData: state.contactData,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    getContactData(contact) {
      dispatch(FetchContactData(contact));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
