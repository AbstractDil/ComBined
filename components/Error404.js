import React from 'react'
import Link from 'next/link'

const Error404 = () => {
    return (
        <div className='container'>

            <div className="row">
                <div className="col-md-6 col-md-offset-3">
                    <div className="alert alert-danger text-center my-3">
                        <strong >
                            <h2>
                            <i className="fa fa-exclamation-triangle"></i> Error 404 - Page Not Found
                            </h2>
                        </strong>
                        <p className="my-3 titleOne">
                            The page you are looking for does not exist.
                        </p>
                        <Link href="/">
                            <a className="btn btn-danger btn-lg">
                                <i className="fa fa-home"></i> Go Home
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
           

            
        </div>
    )
}

export default Error404