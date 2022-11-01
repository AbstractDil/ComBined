
import React from 'react';
import Script from 'next/script';



const FooterEnd = () => {

  var d = new Date();
  var n = d.getFullYear();

  
  return (
    
        <div className="footer-bottom">

<div className="container">

  <div className="row">

    <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">

      <div className="copyright">

        ©  <span>{n}</span>  , MathHub-Combined , All rights reserved

      </div>

    </div>

    <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">

      <div className="design">

        <a href="https://nandysagar.in/"> Designed & Developed by Sagar Nandy </a>

      </div>

    </div>

  </div>

</div>





    </div>
  )
}

export default FooterEnd