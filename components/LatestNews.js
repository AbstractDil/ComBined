
import React, { useEffect, useState } from 'react';
import Link from  'next/link';







const  LatestNews = () => {

  const [blogs, setBlogs] = useState([]);
    useEffect(() => {
       // console.log("useeffect is running");
        fetch('https://mathhubcombined.netlify.app/api/noti').then((a) => {
         // console.log(a);
            return a.json();
        })
            .then((parsed) => {
               // console.log(parsed)
                setBlogs(parsed)
            })
    }, [])

  return (
    <div>
        
  <div className="container  mt-3  " >

    <div className="row">
    {blogs.map((blogitem) => {
     // console.log(blogitem.Fees);
                return <div key={blogitem.id}>

                    <div className=" col-md-12" >

<div className="  mb-3 justify-content-center">

<div className="col-md-12 mb-3 alert alert-info border-1 " >
<p className="font-weight-bold text-center">


                  
                  <span className="label label-danger blink">New</span>
                  <span className="titleOne ">{blogitem.title}</span>     <span className="label label-danger blink ">New</span>
                 
                  <br />
                 <br />
                  <span className="text-danger"><span className='glyphicon glyphicon-hand-right'></span> Application Start  :</span>  {blogitem.startDate}<br/>
                <span className='text-danger'><span className='glyphicon glyphicon-hand-right'></span> Application End : </span>    {blogitem.endDate}<br/>
                <span className='text-danger'><span className='glyphicon glyphicon-hand-right'></span>  Edit Window :  </span> {blogitem.editDate}<br/>
                <span className='text-danger'><span className='glyphicon glyphicon-hand-right'></span>  Application Fees : </span>   {blogitem.Fees}<br/>

                
                   
                   
                  


                </p>
                <hr className='hr-info' />
                <div className="text-center">
                  <Link href={blogitem.Application} >
                <a type='button' className='btn btn-warning'><i className='fa fa-pencil-square-o'></i> Apply Now</a>
                </Link>
                <Link href={blogitem.Notification} >
                    <a type='button' className='btn btn-down'><i className='fa fa-download'></i> Notification </a>
                    </Link> 
                </div>
                
            </div>
            
        </div>

  
  </div>
                </div>
            })}

  
    </div>
  </div>
    </div>
  )
}

export default LatestNews