import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <div>
      <section className="p-3 header " >
        <div className="container-fluid">            
            <div className="row">
                <div className="col-md-2 text-center">
                    <Link href="/">
                	<Image src="/../public/Images/logo2.png" alt="MathHub Combined" height={90} width={90} className=" img-circle logo "/>
                  </Link>
                </div>
               <div className="col-md-8 text-center">
                	<h1 className="text-white text-uppercase logo-title" >MATHHUB Combined</h1>
                 
                    <h6 className="text-light">Powered By nandysagar.in</h6>
                </div>
                <div className="col-md-2 mt-3 text-right">
                  <Link href="/auth/e-contents">
                <a className="btn btn-warning"><i className="fa fa-mortar-board"></i>Study Materials</a>
                </Link>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}

export default Header