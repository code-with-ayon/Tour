import { Component } from "react";
import "./NavbarStyles.css";
import { MenuItems } from "./MenuItems.js";


class Navbar extends Component {
  state = {clicked: false}
  handleClick = ()=>{
    this.setState({clicked: !this.state.clicked})
  }
  render() {
    return (
      <nav className="NavbarItems">
       <a href="/"> <h1 className="Navbar-logo">Trippy</h1></a>
       
        <div className="container">
        <center>

        <div className="menu-icons" onClick={this.handleClick}
        >
        <i className={this.state.clicked ? "fas fa-times": "fas fa-bars"}></i>
        </div>

        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          {MenuItems.map((item,index) =>{
            return(
              <li key={index}>
              <a className="nav-link"
               href={item.url}>
                <i className={item.icon}>
                </i>
                {item.title}
              </a>
              </li>
            );
          })}
          <button>Sign up</button>
        </ul>
          </center>
          </div>
      </nav>
    );
  }
}

export default Navbar;