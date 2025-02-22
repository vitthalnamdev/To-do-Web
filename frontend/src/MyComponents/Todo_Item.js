import React, { Component } from 'react'
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
export class Todo_Item extends Component {
  render() {
    return (
      <div style={{ display: "flex",marginLeft:"20px", marginTop: "20px" }}>
        {/* Centering the card */}
        <div className="card" style={{ width: "100%", maxWidth: "800px", boxShadow: "2px 2px 10px rgba(0,0,0,0.1)" }}>
          <div className="card-body">
            <h5 style={{fontSize:"40px", fontWeight:"500"}} className="card-title">{this.props.todo.Title}</h5>
            <p style={{fontSize:"20px"}} className="card-text">{this.props.todo.desc}</p>
                    <a href="#" className="btn btn-danger" onClick={() => { this.props.Delete(this.props.todo._id)}}>
              Delete
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Todo_Item;


//const { title = "Default Title", desc = "Default Description"  , Delete = false} = this.props.todo || {};
