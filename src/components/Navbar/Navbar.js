import React from "react";
import { Link } from "react-router-dom";
import useFirebase from "../../Hook/useFirebase";
import "./Navbar.css";


const Navbar = () => {
  const { user, handleLogout } = useFirebase();
  return (
    <div>
      <div className="Navbar-container">
        <div className="Navbar container">
          <div className="row">
            <div className="col-md-2 col-sm-12">
              <div className="logo-img">
                <img
                  className="p-2 w-100"
                  src="https://i.ibb.co/9hGFvYS/logo.png"
                  alt=""
                />
              </div>
            </div>
            <div className="col-md-10 col-sm-12">
              <div className="menu-items text-center">
                <ul className="d-flex align-items-end justify-content-end me-5">
                  <li className="items p-2">
                    <Link className="items p-2" to="/home">
                      Home
                    </Link>
                  </li>
                  <li className="items p-2">
                    <Link className="items p-2" to="/services">
                      Services
                    </Link>
                  </li>
                  <li className="items p-2">
                    <Link className="items p-2" to="/myOrder">
                      FoodOrders
                    </Link>
                  </li>
                  <li className="items p-2">
                    <Link className="items p-2" to="/contact">
                      Contact
                    </Link>
                  </li>
                  <li className="items p-2">
                    <Link className="items p-2" to="/contact">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link className="items" to="/admin">
                    <li>{user?.email}</li>
                  </Link>
                    </li>
                  <Link to="/adminDashboard">
                    <button className="items btn btn-danger p-1 ">Admin</button>
                  </Link>
                  <Link to="/admin">
                    <button
                      onClick={handleLogout}
                      className="items btn btn-info p-1 "
                    >
                      Logout
                    </button>
                  </Link>
                  
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
