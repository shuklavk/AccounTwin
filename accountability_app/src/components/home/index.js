import React, { Component } from "react";
// import 'antd/dist/antd.css';
// import '../../css/App.css'
import '../../css/home.css'
//import assets
import HomeImg from '../../../dist/assests/home.png';
import LogoImg from '../../../dist/assests/logo.png';
import { Link } from 'react-router-dom'


//import UI components
import { Button } from 'antd';

class Home extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="homePage">
        <div>
          <Link to="/">
            <div style={{ margin: "20px" }}><img src={LogoImg} alt="logo" width="25%" /></div>
          </Link>
        </div>
        {/* <div> */}
        <div style={{ margin: "15vh 2.5%", fontFamily: "Raleway", fontSize: "9.75vh", lineHeight: "100%", color: "#0e9e9b", width: "41.7%", float: "left" }}>
          Accomplish your goals today!
                <div style={{ fontFamily: "Lato", lineHeight: "100%", fontSize: "3vh", marginTop: "5%" }}>
            Sign up to find your accountability buddy. Find people who share the same goals and reach new heights together. It only takes a few minutes!
                </div>
          <div style={{ marginRight: "5%" }}>
          <Link to="/signup">
            <Button type="primary" shape="round" size="large" style={{ backgroundColor: "#0d847e", height: "7.5vh", width: "15vh", border: "none" }}> Sign Up </Button>
          </Link>
            <Link to="/login">
              <Button type="primary" shape="round" size="large" style={{ backgroundColor: "#0e9e9b", height: "7.5vh", width: "15vh", marginLeft: "2%", border: "none" }}> Login </Button>
            </Link>
          </div>
        </div>
        <div style={{ float: "right" }}><img src={HomeImg} alt="home" height="480vh"></img></div>
      </div>
      //  </div>   
    );
  }
}

export default Home;