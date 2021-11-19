import React, { useState } from "react";
import { Link } from 'react-router-dom';
import "./Banner.css";

const Banner = () => {
  const [searchQuery, setSearchQuery] = useState(null);
    const getQuery = event => setSearchQuery(event.target.value);
  return (
    <div>
      <div className="banners">
        {/* <Navbar></Navbar> */}
        <div className=" banner row justify-content-center align-items-center">
          <div className="container">
            <div className="row">
              <div className="col-md-10">
                <h1 className="banner-title">Bring Best Food for You !</h1>
                {/* <h3 className="sub-title">Sale up to 70% all products</h3> */}
                {/* <button className="banner-btn">Order Now</button> */}
                <div className='search-box col-md-6 my-5 mx-auto'>
                    <input
                        type="text"
                        id="query"
                        onChange={getQuery}
                        className='form-control'
                        placeholder='Search Food Item'
                    />
                    <Link to={'/search=' + searchQuery}>
                        <button
                            onClick={() => window.scrollBy(0, 525)}
                            className='btn btn-danger search-btn btn-rounded'
                        >
                            Search
                    </button>
                    </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
