 import React from "react";
// import PropTypes from "proptypes";

export default function Header(props) {
  return (
   <div >
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" >Navbar</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

</nav>
   </div>   
  );
}
Header.defaultProps = {
  branding: "My app"
};

// Header.PropTypes = {
//   branding: PropTypes.string.isRequired
// };
