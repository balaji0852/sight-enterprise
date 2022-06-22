import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './NavMenu.css';
import { AiOutlineDeliveredProcedure, AiOutlineMenu, AiOutlineDeploymentUnit, AiOutlineHome, AiOutlineCloudSync } from "react-icons/ai";
import { FaUserCircle } from 'react-icons/fa';
import  Breadcrumb  from './BreadCrumb';






class NavMenu extends Component {

    constructor(props) {
        super(props);
        this.state = {
            valSideBar: true,
        };
        window.addEventListener('resize', () => {
            console.log('chng');

            this.setState({
                valSideBar: window.screen.width > 810 && this.state.valSideBar? !this.state.valSideBar: false,
            });
        });
        this.manageSideBarContent = this.manageSideBarContent.bind(this);
        
    }



    manageSideBarContent() {
    
        this.setState({
            valSideBar: window.screen.width > 810? !this.state.valSideBar : false
        });
        console.log(this.state.valSideBar);

    }

    componentDidUpdate(){
        console.log("cdm");
    }


    render() {

        return (
            <div className='main'>
                {/* Balaji -> changing code from v 1.0 locoflow template  */}
                <div className='nav'>
                    {/* Date : 2/17/2022 adding the burger icon (lol) in navbar */}
                    <AiOutlineMenu className='navBarIcon' size={30} onClick={this.manageSideBarContent} />
                    <h2>planB</h2>
                    <div className="navRight">
                        <FaUserCircle className='icon' size={30} />
                    </div>
                </div>
                {/* ............................................................ */}
                {/* navbar is done here     */}

                {/* *************************************************************** */}
                {/* Balaji : Here comes the mainlayout of app body */}
                {/* Balaji : has the app segment sidebar and main body */}
                {/* *************************************************************** */}
                <div className='appBody'>
                    <div className={this.state.valSideBar
                        ? 'sideBarOpen' : 'sideBar'}>
                        <Link className='link hoverEffects' to="/" >
                            <div className='sideBarIconsPadding'>
                                <AiOutlineHome className='navBarIcon' size={30} />
                                {this.state.valSideBar && "Home"}
                            </div>
                        </Link>
                        <Link className='link' to="/Classes" >
                            <div className='sideBarIconsPadding'>
                                <AiOutlineDeliveredProcedure className='navBarIcon' size={30} />
                                {this.state.valSideBar && "Classes"}
                            </div>
                        </Link>
                        <Link className='link' to="/add" >
                            <div className='sideBarIconsPadding'>
                                <AiOutlineCloudSync className='navBarIcon' size={30} />
                                {this.state.valSideBar && "Add"}
                            </div>
                        </Link>
                        <Link className='link' to="/Setting" >
                            <div className='sideBarIconsPadding'>
                                <AiOutlineDeploymentUnit className='navBarIcon' size={30} />
                                {this.state.valSideBar && "Setting"}
                            </div>
                        </Link>
                    </div>
                    <div className={this.state.valSideBar?'body_left_margin_max body':'body_left_margin_min body'}>
                        <Breadcrumb />
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}


export default NavMenu;

