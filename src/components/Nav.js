import React from "react"
import "../styles/Nav.css"

export default class Nav extends React.Component {
    constructor(){
        super()
        this.state={
            menuStatus: "side-menu-close",
            buttonStatus: ""
        }
    }

    handleClick=()=>{
        if (this.state.menuStatus === "side-menu-close"){
            this.setState({
                menuStatus: "side-menu-open", buttonStatus: "side-menu-open"
            })
        } else {
            this.setState({
                menuStatus: "side-menu-close", buttonStatus: "side-menu-close"
            })
        }  
    }

    render(){

        return(
            <> 

        <nav className="nav-bar">
            <div>
                <h1 className="start-bootstrap">Start Bootstrap</h1>
            </div>
            <div className="nav-buttons">
            <div className="nav-buttons-1">

                <h4>SERVICES</h4>
                <h4>PORTFOLIO</h4>
                <h4>ABOUT</h4>
                <h4>TEAM</h4>
                <h4>CONTACT</h4>
            </div>
                <div className="burger-button">
                    <img className="burger-button-1" src="https://static.thenounproject.com/png/703781-200.png" onClick={this.handleClick}></img>
                </div>
            </div>
        </nav>
        <section className="drop-down">
            <div className={this.state.menuStatus}>
                <h2>SERVICES</h2>
                <h2>PORTFOLIO</h2>
                <h2>ABOUT</h2>
                <h2>TEAM</h2>
                <h2>CONTACT</h2>

            </div>
        </section>
        </>
    )
}
}