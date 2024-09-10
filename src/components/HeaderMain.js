import React from "react";
import { Link } from "react-router-dom";
import './HeaderMain.css'

const HeaderMain = ({cate}) => {
  return (
    <div className="container">
      <div className="row pt-3">
        <div className=" col-12">
          <div className="row" style={{ justifyContent: `center` }} >
            <div className="bg-gray-header col-12 col-lg-4 col-md-6 p-3">  
              <div className="row">
              <div className="col-6 col-lg-6 col-md-6">
                
              <Link style={{textDecoration:'none'}} to="/"><button className={`custom-button_header ${cate === "Home" ? "active" : ""}`} >
              Home
              </button></Link>
            </div>
            <div className="col-6 col-lg-6 col-md-6">
            <Link style={{textDecoration:'none'}} to="/create"><button className={`custom-button_header ${cate === "Create" ? "active" : ""}`} >
              Create
              </button></Link>
            </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
    // <header>
    //   <nav>
    //     <ul>
    //       <li><Link to="/">Home</Link></li>
    //       <li><Link to="/create">Create</Link></li>
    //     </ul>
    //   </nav>
    // </header>
  );
}

export default HeaderMain;
