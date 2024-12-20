import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom"; import './NavMenu.css';
import { AiOutlineDeliveredProcedure, AiOutlineMenu, AiOutlineDeploymentUnit, AiOutlineHome, AiOutlineCloudSync,AiFillReconciliation } from "react-icons/ai";
import { FaUserCircle } from 'react-icons/fa';
import Breadcrumb from './BreadCrumb';
import Home from '../Pages/Home.js';
import Setting from '../Pages/Setting.js';
import add from '../Pages/Workflow.js';
import classHome from '../Pages/classHome.js';





class NavMenu extends Component {

    constructor(props) {
        super(props);
        this.state = {
            valSideBar: false,
            screenWidth: 0,
            currentPage: 'home'
        };

        window.addEventListener('resize', () => {
            console.log('chng', this.state);
            this.setState({
                screenWidth: window.screen.width,
                valSideBar: this.state.screenWidth > 810 ? this.state.valSideBar : false
            });
        });



        // this.manageSideBarContent = this.manageSideBarContent.bind(this);  
    }



    manageSideBarContent() {
        this.setState({
            valSideBar: window.screen.width > 810 ? !this.state.valSideBar : false
        });
        console.log("bnd", this.state);
    }

    componentDidUpdate() {
        console.log("cdm");
    }


    render() {

        return (
            // <Router>
                <div className='main'>
                    {/* Balaji -> changing code from v 1.0 locoflow template  */}
                    <div className='nav'>
                        {/* Date : 2/17/2022 adding the burger icon (lol) in navbar */}
                        <AiOutlineMenu className='navBarIcon' size={30} onClick={this.manageSideBarContent.bind(this)} />
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
                            <Link className='link hoverEffects' to="/dashboard/home" >
                                <div className='sideBarIconsPadding'>
                                    <AiOutlineHome className='navBarIcon' size={30} />
                                    {this.state.valSideBar && "Home"}
                                </div>
                            </Link>
                            <Link className='link hoverEffects' to="/dashboard/class" >
                                <div className='sideBarIconsPadding'>
                                    <AiOutlineDeliveredProcedure className='navBarIcon' size={30} />
                                    {this.state.valSideBar && "Classes"}
                                </div>
                            </Link>
                            <Link className='link hoverEffects' to="/dashboard/add" >
                                <div className='sideBarIconsPadding'>
                                    <AiOutlineCloudSync className='navBarIcon' size={30} />
                                    {this.state.valSideBar && "Add"}
                                </div>
                            </Link>
                            <Link className='link hoverEffects' to="/dashboard/setting" >
                                <div className={this.state.updatePath ? 'sideBarIconsPadding' : 'sideBarIconsPadding'}>
                                    <AiOutlineDeploymentUnit className='navBarIcon' size={30} />
                                    {this.state.valSideBar && "Setting"}
                                </div>
                            </Link>
                            <Link className='link hoverEffects' to="/project" >
                                <div className={this.state.updatePath ? 'sideBarIconsPadding' : 'sideBarIconsPadding'}>
                                    <AiFillReconciliation className='navBarIcon' size={30} />
                                    {this.state.valSideBar && "Project"}
                                </div>
                            </Link>
                        </div>
                        <div className={this.state.valSideBar ? 'body_left_margin_max body' : 'body_left_margin_min body'}>
                            <Breadcrumb updatePath={(value) => { console.log(value) }} />
                            {/* {this.props.children} */}
                            <Switch>
                                <Route path="/dashboard/home" component={Home}/>
                                <Route path="/dashboard/setting" component={Setting} />
                                <Route path="/dashboard/add" component={add}/>
                                <Route path="/dashboard/class" component={classHome}/>
                            </Switch>
                        </div>
                    </div>
                </div>
            /* </Router> */
        );
    }
}


export default NavMenu;

