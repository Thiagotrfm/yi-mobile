import React, { Component } from 'react';
import { connect } from 'react-redux';
import M from 'materialize-css/dist/js/materialize.min.js';


class SelectedContact extends Component {

    componentDidUpdate() {
        M.AutoInit();
    }

    render() {
        return (
            <div className="selected-contact">
                {this.props.contactData.general !== undefined ? (
                    <div className="contact-info">
                        <img src={this.props.contactData.general.avatar} className="contact-avatar" />
                        <h1>{this.props.contactData.general.firstName} {this.props.contactData.general.lastName}</h1>
                        <h2>{this.props.contactData.address.country}</h2>
                        <ul className="collapsible">
                            <li>
                                <div className="collapsible-header"><i className="material-icons">business_center</i>Job</div>
                                <div className="collapsible-body">
                                    <b>Company:</b> {this.props.contactData.job.company} <br />
                                    <b>Title:</b> {this.props.contactData.job.title}
                                </div>
                            </li>
                            <li>
                                <div className="collapsible-header"><i className="material-icons">call</i>Contact</div>
                                <div className="collapsible-body">
                                    <b>E-mail:</b> {this.props.contactData.contact.email} <br />
                                    <b>Phone:</b> {this.props.contactData.contact.phone}
                                </div>
                            </li>
                            <li>
                                <div className="collapsible-header"><i className="material-icons">location_city</i>Address</div>
                                <div className="collapsible-body">
                                    <b>Street:</b> {this.props.contactData.address.street} <br />
                                    <b>City:</b> {this.props.contactData.address.city} <br />
                                    <b>Zip Code:</b> {this.props.contactData.address.zipCode} <br />
                                    <b>Coutry:</b> {this.props.contactData.address.country}
                                </div>
                            </li>
                        </ul>

                    </div>
                ) : (
                        <div className="yi-logo">
                            <img src="https://www.yimobile.com.br/img/logoyi.png" />
                            <h6>Nenhum contato selecionado</h6>
                        </div>
                    )}
            </div>);
    }
}

function mapStateToProps(state) {
    return {
        contactData: state.contactData,
    };
}

export default connect(mapStateToProps)(SelectedContact);
