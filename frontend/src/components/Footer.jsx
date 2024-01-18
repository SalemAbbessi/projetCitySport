import React from 'react';
import './Footer.css';

const Footer = () => {
  return(
    <div className="footer">
<h6>Besoin d'un renseignement ou d'une assistance ? Appelez notre service client au : 71 241 711</h6>
      <h6> City Sport </h6>  
      <h6> <div className="col-md-12">
                <ul className="social-network social-circle">
                  <li><a href="www.facebook.com" className="icoFacebook" title="Facebook"><i className="fab fa-facebook-f" /></a></li>
                  <li><a href="www.twitter.com" className="icoTwitter" title="Twitter"><i className="fab fa-twitter" /></a></li>
                  <li><a href="www.google.com" className="icoGoogle" title="Google +"><i className="fab fa-google-plus" /></a></li>
                </ul>
              </div></h6>
     
    </div>
)
}

export default Footer
