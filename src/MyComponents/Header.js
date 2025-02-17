import React, { Component } from 'react'
import PropTypes from "prop-types";
 
export class Header extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            {this.props.title}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#"
                onClick={() => this.props.setIsOpen(true)}>
                  Add-Todo
                </a>
              </li>
            </ul>
            {this.props.searchBar?<form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>:""
       }
          </div>
        </div>
      </nav>
      </div>
    )
  }
}
 
Header.propTypes = {
    title: PropTypes.string, // Expects `title` to be a string
    searchBar: PropTypes.bool.isRequired, // Expects `searchBar` to be a boolean and is required
  };
  
  Header.defaultProps = {
    title: "Default To-Do List", // Default value if no title is passed
    searchBar: true,
  };
  



export default Header
