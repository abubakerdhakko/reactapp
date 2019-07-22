 import React, { Component } from 'react';
//  i mport PropTypes from  'prop-types';
import { Consumer } from '../Context';


 class Contact extends Component {
  state = { 
    showContactInfo: false
   };

  onShowClick = (name, e) => {
    this.setState({ 
      showContactInfo: !this.state.showContactInfo })
  };
  onDeleteClick = (id, dispatch) => {
    dispatch({type: 'DELETE_CONTACT', payload: id  });
  };
  render() {

    const { id, name, email, phone} = this.props.contact;
    const { showContactInfo  } = this.state
    return (

<Consumer>
  {value => {
    const { dispatch } = value;
    return ( 
      <div className="container ">
          <div className="flex-c">
          <div className="card" style={{width: 500}}>
                    <div className="card-body">
                      <h5  style={{ cursor: 'pointer' }} className="card-title fa fa-sort-down "  onClick={this.onShowClick.bind(this)} >{name}</h5>
                      <i className="fa fa-times" style={{float: 'right', color: 'red', cursor: 'pointer'}} 
                      onClick={this.onDeleteClick.bind(this, id, dispatch)}></i>
                    {showContactInfo ? (<ul className="list-group">
                      <li id="asd" className="list-group-item">
                      Email: {email}
                      </li>
                      <li className="list-group-item">
                      Phone: {phone}
                      </li>
                    </ul>): null}
                    
                    </div>
                    </div>
          
          </div>     
      </div>
    )
  }} 
</Consumer>

    )
  }
}
// Contact.propTypes = {
//   ontact: PropTypes.object.isRequired,
//   deleteClickHandler: PropTypes.func.isRequired,
// }
export default Contact
