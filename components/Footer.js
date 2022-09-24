
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'


const Footer = () => {
  return (
   


<footer className="footer1">
    <div className="container">

      <div className="row">
      

        <div className="col-lg-3 col-md-3">
          
          <ul className="list-unstyled clear-margins">


            <li className="widget-container widget_nav_menu">
            

              <h1 className="title-widget">Official Links</h1>

              <ul>
                <li> 
                    <Link href="https://ibps.in" >
                      <a>IBPS</a>
                      </Link>
                </li>
                <li>
                    <Link href="https://ibpsonline.ibps.in/sbijascapr21/" >
                    <a>SBI Clerk 2021</a>
                    </Link>
                </li>
                <li><a  href="https://www.sbi.co.in/web/careers#lattest"
                    target="_blank "> SBI Career </a></li>
                <li><a  href="https://bank.sbi/web/careers" >Another
                    portal SBI Career </a></li>
                <li><a  href="https://ssc.nic.in/" > SSC </a></li>
                <li><a  href="https://ibpsonline.ibps.in/rrbsx23may21/index.php"
                    > IBPS-RRB</a></li>
                <li><a  href="#"> Test & Discussion</a></li>
                <li><a  href="#"> Fast Track T & D</a></li>
              </ul>

            </li>

          </ul>


        </div>



        <div className="col-lg-3 col-md-3">
        

          <ul className="list-unstyled clear-margins">
           

            <li className="widget-container widget_nav_menu">
             

              <h1 className="title-widget">Important Links</h1>

              <ul>
                <li><a 
                    href="https://www4.digialm.com/OnlineAssessment/index.html?167@@M152" > IBPS Test</a>
                </li>
                <li><a  href="https://www.ibps.in/online-testing/" >
                    Online Mock Test</a></li>
                <li> <a
                     href="https://www.youtube.com/watch?v=IUIUt6d2u58"
                    target="_blank "> Polity Lecture </a></li>
                <li><a
                     href="https://www.youtube.com/channel/UCABe2FgVNv2hgBeMu2mySVg">
                    Current Affairs</a></li>
                <li><a 
                    href="https://play.google.com/store/apps/details?id=vocab.lalrajivsscenglish.com.englishquiz"
                    > SSC English Quiz</a></li>
                <li><a 
                    href="https://play.google.com/store/apps/details?id=com.englishvocabulary" > Vocab
                    App</a></li>
                <li><a 
                    href="https://play.google.com/store/apps/details?id=com.merriamwebster" >
                    Dictionary - Merriam-Webster</a></li>
                <li><a 
                    href="https://www.youtube.com/playlist?list=PLhJT4Hx6LtqrWwyWzBVGv7IjbdrOq12NU" >
                    Word Power Made Easy</a></li>

              </ul>

            </li>

          </ul>


        </div>



        <div className="col-lg-3 col-md-3">
          

          <ul className="list-unstyled clear-margins">
           

            <li className="widget-container widget_nav_menu">
              

              <h1 className="title-widget">Helpful links</h1>

              <ul>

              <li>
              <Link href="/">
                <a>Home</a>
                </Link>
                </li>
               
                
                <li>
                  <Link href="/auth/e-contents">
                  <a className='blink'>Study Materials</a>
                  </Link>
                  </li>
                <li><a  href="https://libgen.is/" > Library Genesis</a>
                </li>
                
                
                

              </ul>

            </li>

          </ul>


        </div>


        <div className="col-lg-3 col-md-3">
          



          <ul className="list-unstyled clear-margins">
           

            <li className="widget-container widget_recent_news">
             

              <h1 className="title-widget">Contact Details </h1>

              <div className="footerp">

                <h2 className="title-median">MathHub-Combined</h2>
                <p className="title-5"><i className='fa fa-envelope text-white'></i><b className="text-white"> Support Email</b> <a  href="mailto:nandysagar@yahoo.com"
                    >nandysagar@yahoo.com</a></p>
                
                
              </div>


            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
 

   
  )
}

export default Footer


