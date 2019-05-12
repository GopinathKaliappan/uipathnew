import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from 'axios';
import Typing from 'react-typing-animation';
import LoginComponent from './LoginComponent';
import HomeComponent from './HomeComponent';
import ListComponent from './ListComponent';
import RobotImage from './all.svg';
import All from './all.jpg';
// const ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; 


function Index() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}
var background = {

  backgroundImage: "url(" + { RobotImage } + ")"
};
class AppRouter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      state: '',
      city: '',
      year: '',
      company: '',
      isFetching: false,
      list: [

      ]
    };
    this.form = React.createRef();
    this.formNew = React.createRef();
    this.validate = this.validate.bind(this);
  }

  componentDisUpdate() {
    this.setState({
      isLoggedIn: JSON.parse(localStorage.getItem('loggedIn'))
    })
  }
 
  handleChange() {

  }
  renderTableData() {
    return this.state.list.map((student, index) => {
    const { state, name, district, email, year, status } = student //destructuring
      return (
        <tr key={name}>
          <td>{name}</td>
          <td>{state}</td>
          <td>{district}</td>
          <td>{year}</td>
          <td>{status}</td>
        </tr>
      )
    })
  }

  getData() {
    axios.post('http://10.2.88.155:5000/tasks',
    {
      name: 'Quess', 
      state: 'Karnataka', 
      district: 'Coimbatore', 
      year: 2016
    })
      .then((response)=> {
        console.log(response.data[0])
        this.setState({
          list: response.data
        })
      })
      .catch((error) => {
        console.log(error);
      });
  }
  emptyList() {
    window.scrollTo(0, 0)
    this.setState({
      list: []
    }) 
  }
  handleSubmit() {

    localStorage.setItem('loggtedIn', true);
    this.setState({
      isLoggedIn: true
    })
  }
  validate() {
    if(this.form.current.checkValidity()) {
        this.handleSubmit();      
    } else {
        this.form.current.reportValidity();
    }
   }
  validateNew() {
    if (this.formNew.current.checkValidity()) {
      this.getData();
    } else {
    this.formNew.current.reportValidity();
    }
  }
  render() {
    return (
    <div className={'h-100'}>
      
        {this.state.isLoggedIn}

        {
          !this.state.isLoggedIn ?
          <div className={'h-100'}> 
            <div className="custom-container h-100">
              <div className="row align-items-center h-100">
                <div className="col-12 col-sm-6 col-xl-7 bg">
                  <div className="">
                    <img src={RobotImage} className="img-fluid" style={{ width: '100% !important'}} />
      </div>
                  </div>

                <div className="col-12 col-sm-6 col-xl-5 login-section-right h-100">
                  <div className="login-section-right-inner d-flex w-100 h-100 align-items-center">
                    <form ref={this.form} onSubmit={e => e.preventDefault()}  className=" w-100" action="dashboard.html">
                      <div className="form-group">
                        <h3 className="brand-logo">Judge It</h3>
                        </div>
                      <div className="form-group">
                        <h3 className="login-title">Login</h3>
                        </div>
                      <div className="form-group mb-35">
                          <label for="user_name" className="login-label">User Name</label>
                        <input type="email" className="form-control login-input" id="user_name" placeholder="Enter User Name" required />
          </div>
                        <div className="form-group mb-35">
                          <label for="offiz_password" className="login-label">Password</label>
                          <input type="password" className="form-control login-input" id="offiz_password" placeholder="Password" required/>  
          </div>
                          <div className="form-group mb-4">

                            <a className="login-label float-right" href="#">Forgot Password</a>
                            <div className="clearfix"></div>
          </div>
                      <button type="submit" className="btn btn-primary login-btn mb-35 common-action-button" onClick={this.validate}>Login</button>
                          <div className="form-group">
                            <label className="login-label">New User?</label>
                            <a className="login-label signup-label" href="#">Signup</a>
                                <div className="clearfix"></div>
                              </div>
        </form>
                          </div>
                        </div>
  </div>
                    </div>
         



            
              </div>
            : 
          
            <div>


              { this.state.list.length < 1  ?
              <div className={'ligin-parent black-text  shadow padding-20 final'}> 
              <div className={'text-left padding-20 title-header'}><h3>Find me a case</h3></div>
                <form ref={this.formNew} onSubmit={e => e.preventDefault()}>
              <table>
                <tbody>
                  <tr>
                    <td className={'padding-20'}>
                      <label>
                        Company
          </label>
                    </td >
                    <td className={'padding-20'}>
                          <input type="text" className={'form-control login-input med-width'} name="name" required />
                    </td>
                  </tr>
                  <tr>
                    <td className={'padding-20'}>
                      <label>
                        State
          </label>
                    </td>
                    <td className={'padding-20'}>
                          <select name="sess_state_code" id="sess_state_code" required className={'form-control login-input med-width'}>
                        <option value="28">Andaman and Nicobar</option><option value="2">Andhra Pradesh</option><option value="6">Assam</option><option value="8">Bihar</option><option value="27">Chandigarh</option><option value="18">Chhattisgarh</option><option value="26">Delhi</option><option value="31">Diu and Daman</option><option value="32">DNH at Silvasa</option><option value="30">Goa</option><option value="17">Gujarat</option><option value="14">Haryana</option><option value="5">Himachal Pradesh</option><option value="12">Jammu and Kashmir</option><option value="7">Jharkhand</option><option value="3">Karnataka</option><option value="4">Kerala</option><option value="23">Madhya Pradesh</option><option value="1">Maharashtra</option><option value="25">Manipur</option><option value="21">Meghalaya</option><option value="19">Mizoram</option><option value="11">Orissa</option><option value="22">Punjab</option><option value="9">Rajasthan</option><option value="24">Sikkim</option><option value="10">Tamil Nadu</option><option value="29">Telangana</option><option value="20">Tripura</option><option value="15">Uttarakhand</option><option value="13">Uttar Pradesh</option><option value="16">West Bengal</option>
                      </select>
                    </td>
                  </tr>
                  
                  <tr>
                    <td className={'padding-20'}>
                      <label>
                        City
          </label>
                    </td>
                    <td className={'padding-20'}>
                      
                          <select id="sess_dist_code" onchange="fillCourtComplex();" required className={'form-control login-input med-width'}>
                         <option value="2">
                           BAGALKOT
                         </option>
                         <option value="12">
                           BALLARI
                          </option><option value="1">BELAGAVI</option><option value="20">BENGALURU</option><option value="21">BENGALURU RURAL</option><option value="5">BIDAR</option><option value="27">CHAMRAJNAGAR</option><option value="29">CHIKKABALLAPUR</option><option value="17">CHIKKAMAGALURU</option><option value="13">CHITRADURGA</option><option value="24">DAKSHINA KANNADA</option><option value="14">DAVANGERE</option><option value="9">DHARWAD</option><option value="8">GADAG</option><option value="23">HASSAN</option><option value="11">HAVERI</option><option value="4">KALABURAGI</option><option value="25">KODAGU</option><option value="19">KOLAR</option><option value="7">KOPPAL</option><option value="22">MANDYA</option><option value="26">MYSURU</option><option value="6">RAICHUR</option><option value="28">RAMANAGARAM</option><option value="15">SHIVAMOGGA</option><option value="18">TUMAKURU</option><option value="16">UDUPI</option><option value="10">UTTARA KANNADA</option><option value="3">VIJAYAPURA</option><option value="30">YADGIR.</option></select> 
                    </td>
                  </tr>
                
                  <tr>
                    <td className={'padding-20'}>
                      <label>
                        Year
          </label>
                    </td>
                    <td className={'padding-20'}>
                          <select id="sess_year" onchange="fillCourtComplex();" required className={'form-control login-input med-width'}>
                        <option value="2015">
                          2015
                        </option>
                        <option value="2016">
                          2016
                         </option>
                        <option value="2017">
                          2017
                         </option>
                        <option value="2018">
                          2018
                         </option>
                        </select> 
                    </td>
                  </tr>
                  <tr className={'padding-20'}>
                    
                    <td>
                    
                    </td>
                    <td className={'button-parent'}>
                          <button className={'padding-5 btn text-center btn btn-primary login-btn  common-action-button'} name="name" onClick={() => { this.validateNew() }}> Send</button>
                    </td>
                  </tr>
                </tbody>
              </table>
              </form> 
            </div> 
              : null            
}</div>
        }
         
      <div className={'row'} style={{ display: this.state.isLoggedIn && this.state.list.length > 0 ? 'flex' : 'none' }}>

        <div className="col-sm-2 col-xl-2 sidebar">
          <div className="sidebar-inner">
            <div className="dropdown mb-5">
              <div className="media dropdown-toggle branches-dropdown align-items-center" data-toggle="dropdown">
                <img className="mr-3 img-fluid hidden" src="assets/images/default_fonts.png" alt="Logo" />
                  <div className="media-body">
                    <div className="branch-title hidden">Bangalore</div>
                  <div className="branch-name hidden">Heptagon</div>
                  </div>
                  <span className="branch-status"></span>
                </div>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <a className="dropdown-item" href="#">Bangalore</a>
                  <a className="dropdown-item" href="#">Coimbatore</a>
                  <a className="dropdown-item" href="#">Tiruchirappalli</a>
                </div>
              </div>


              <nav className="navbar navbar-expand-lg p-0">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar nav p-0 w-100 main-menu">

                    <li className="nav-item active w-100">
                      <a className="nav-link" href="#"><span class="menu-icons focus"></span>Judge IT</a>
                      
                      <ul className="list-unstyled sub-menu-first-level">
                        <li className="nav-item  w-100">
                          <a className="nav-link" href=""><span class="menu-icons reception"></span>Dashboard</a>
                        </li>
                        <li className="nav-item active w-100">
                          <a className="nav-link" href=""><span class="menu-icons reception"></span>Employees</a>
                        </li>
                      </ul>
                     
            </li>

                  </ul>
                </div>
             
        </nav>
             
      </div>
          </div>
        <div className="col-12 col-sm-10 col-xl-10 h-100 pt-3">
          <div className="">
            <nav className="navbar navbar-expand-lg">
              <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                <form className="form-inline my-2 my-lg-0 col-7">
                  <input className="form-control mr-sm-2 search-input" type="search" placeholder="Search for visitors, and employees" aria-label="Search" />
                </form>
                <ul className="navbar-nav ml-auto mt-2 mt-lg-0 nav-top">
                  <li className="nav-item">
                    <a className="live-track-btn hidden" href=""><img src="assets/images/group7@2x.png" alt="Enable Live Feed" /> Enable Live Feed
                    </a>
                    </li>
                      <li className="nav-item">
                    <button type="button" className="btn btn-primary login-btn mb-35 common-action-button" onClick={() => { this.emptyList() }}>Search</button>
            </li>
                      <li className="nav-item">
                    <a className="hidden" href="#" title="Logout"><img src="assets/images/profile@2x.png" alt="Logout" /></a>
            </li>
          </ul>
          </div>
        </nav>
      </div>

                <div className="row no-gutters mt-4">
                  <div className="col-4 pl-5 pr-5">
                      <h3 className="page-title">Cases</h3>
                    </div>
                  <div className="col-4 pr-5">
                    <form className="my-2 my-lg-0">
                      <input className="form-control mr-sm-2 search-input w-100 list-search hidden" type="search" placeholder="Search with name or ID" aria-label="Search" />
          </form>
        </div>
                    <div className="col-4 pr-5 text-right">
                      <button type="button" className="btn btn-primary login-btn mb-35 common-action-button" onClick={() => { this.emptyList() }}>Search</button>
                      </div>
                    </div>

                  <div className="row no-gutters mt-4 pl-4 pr-4">
                    <div className="col-12">
                      <div className="table-responsivef employees-list-table">

                        <table className="table table-hover">
                            <thead>
                              <tr>

                                
                                <th scope="col" >Name</th>
                                <th scope="col" >State</th>
                                <th scope="col" >City</th>
                                <th scope="col" >Year</th>
                                <th scope="col" >Status</th>
                              </tr>
                            </thead>
                            <tbody>
                              {this.renderTableData()}
                            </tbody>
                              
            </table>
          </div>
        </div>
      </div>
    </div>
    


      </div>

           
      
       </div>

    );
  }
}

export default AppRouter;