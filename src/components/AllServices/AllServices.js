import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./AllServices";

const AllServices = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("https://devcenter.heroku.com/allServices")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div className="p-3">
      <h1>Wow! 75% off to Get!</h1>
      <div className="services">
        <div className="row container">
          {services?.map((pd) => (
            <div className="col-md-4">
              <div className="service border border p-3">
                <div className="services-img ">
                  <img className="w-100" src={pd?.image} alt="" />
                </div>

                <h6>{pd?.name}</h6>
                <h4>{pd?.model}</h4>
                <p>{pd?.description}</p>
                <h3 className="text-danger"> Price :{pd?.price}$</h3>
                <Link to={`/booking/${pd._id}`}>
                  <button className="btn btn-danger">Add To Cart</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllServices;
