import React from "react";
import { FacebookOutlined, TwitterOutlined, InstagramOutlined, LinkedinOutlined, GithubOutlined } from '@ant-design/icons';

function Footer(){
return(

    <footer className="text-center text-lg-start text-white" style={{backgroundColor: "#1c2331", marginTop:'5px'}} >
    <section className="d-flex justify-content-between p-4" style={{backgroundColor: "#6351ce", marginTop:'0px'}}
    >
    <div>
      <span>Get connected with us on social networks:</span>
    </div>
    <div>
      <a href="" className="text-white me-4">
        <FacebookOutlined />
      </a>
      <a href="" className="text-white me-4">
      <TwitterOutlined />
      </a>
      <a href="" className="text-white me-4">
      <InstagramOutlined />
      </a>
      <a href="" className="text-white me-4">
      <LinkedinOutlined />
      </a>
      <a href="" className="text-white me-4">
      <GithubOutlined />
      </a>
    </div>
  </section>
    <section className="">
    <div className="container text-center text-md-start mt-5">
      <div className="row mt-3">
        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
          <h6 className="text-uppercase fw-bold text-white">Company name</h6>
          <hr
              className="mb-4 mt-0 d-inline-block mx-auto bg-white"
              style={{width: "60px", backgroundColor: "#7c4dff", height: "2px"}}
              />
          <p className="text-white">
            Here you can use rows and columns to organize your footer
            content. Lorem ipsum dolor sit amet, consectetur adipisicing
            elit.
          </p>
        </div>
        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
          <h6 className="text-uppercase fw-bold text-white">Products</h6>
          <hr
              className="mb-4 mt-0 d-inline-block mx-auto bg-white"
              style={{width: "60px", backgroundColor: "#7c4dff", height: "2px"}}
              />
          <p>
            <a href="#!" className="text-white">MDBootstrap</a>
          </p>
          <p>
            <a href="#!" className="text-white">MDWordPress</a>
          </p>
          <p>
            <a href="#!" className="text-white">BrandFlow</a>
          </p>
          <p>
            <a href="#!" className="text-white">Bootstrap Angular</a>
          </p>
        </div>
        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
          <h6 className="text-uppercase fw-bold text-white">Useful links</h6>
          <hr
              className="mb-4 mt-0 d-inline-block mx-auto bg-white"
              style={{width: "60px", backgroundColor: "#7c4dff", height: "2px"}}
              />
          <p>
            <a href="#!" className="text-white">Your Account</a>
          </p>
          <p>
            <a href="#!" className="text-white">Become an Affiliate</a>
          </p>
          <p>
            <a href="#!" className="text-white">Shipping Rates</a>
          </p>
          <p>
            <a href="#!" className="text-white">Help</a>
          </p>
        </div>
        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
          <h6 className="text-uppercase fw-bold text-white">Contact</h6>
          <hr
              className="mb-4 mt-0 d-inline-block mx-auto bg-white"
              style={{width: "60px", backgroundColor: "#7c4dff", height: "2px"}}
              />
          <p className="text-white"><i className="fas fa-home mr-3"></i> New York, NY 10012, US</p>
          <p className="text-white"><i className="fas fa-envelope mr-3 text-white"></i> info@example.com</p>
          <p className="text-white"><i className="fas fa-phone mr-3 text-white"></i> + 01 234 567 88</p>
          <p className="text-white"><i className="fas fa-print mr-3 text-white"></i> + 01 234 567 89</p>
        </div>
      </div>
  
    </div>
  </section>
    <div className="text-center p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}
       >  © 2020 Copyright: <a className="text-white" href="https://mdbootstrap.com/"
       >Apointment followship.com</a>
      
  </div>
  </footer>
);
}
export default Footer;