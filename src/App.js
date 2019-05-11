import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from 'axios';
import LoginComponent from './LoginComponent';
import HomeComponent from './HomeComponent';
import ListComponent from './ListComponent';
import RobotImage from './robotics.jpg';
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
    }
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
      const { id, name, age, email } = student //destructuring
      return (
        <tr key={id}>
          <td>{id}</td>
          <td>{name}</td>
          <td>{age}</td>
          <td>{email}</td>
        </tr>
      )
    })
  }

  getData() {
    axios.get('http://10.2.88.155:5000/tasks')
      .then((response)=> {
        this.setState({
          list: response.data
        })
      })
      .catch((error) => {
        console.log(error);
      });
  }
  emptyList() {
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
  render() {
    return (
      <div className={'ligin-parent'}  >
      <img src={All} className={'bg-image'} />
        {this.state.isLoggedIn}

        {
          !this.state.isLoggedIn ?
          <div>
            <div className={'text-left padding-20 title-header'}><h3> Enable Robotics</h3></div>
          <table>
            <tbody>
              <tr>
                <td className={'padding-20'}>
                  <label>
                    Username:
          </label>
                </td >
                <td className={'padding-20'}>
                  <input type="text" name="name" />
                </td>
              </tr>
              <tr>
                <td className={'padding-20'}>
                  <label>
                    Password:
          </label>
                </td>
                <td className={'padding-20'}>
                  <input type="text" name="name" />
                </td>
              </tr>
                <tr  className={'padding-20'}>
                  <td>  

                    </td>
                  <td className={'button-parent'}>
                  <button className={'padding-5 btn btn-primary text-center'} type="button" name="name" onClick={() => { this.handleSubmit() }}> Login</button>
                  </td>
              </tr>

             </tbody>
              </table>
              </div>
            : 
          
            <div>
              { this.state.list.length < 1  ?
            <div className={'ligin-parent'}> 
              <div className={'text-left padding-20 title-header'}><h3>Talk to Robot</h3></div>
              <table>
                <tbody>
                  <tr>
                    <td className={'padding-20'}>
                      <label>
                        Company:
          </label>
                    </td >
                    <td className={'padding-20'}>
                      <input type="text" name="name" />
                    </td>
                  </tr>
                  <tr>
                    <td className={'padding-20'}>
                      <label>
                        State:
          </label>
                    </td>
                    <td className={'padding-20'}>
                      <select name="sess_state_code" id="sess_state_code">
                        <option value="0">Select State</option><option value="28">Andaman and Nicobar</option><option value="2">Andhra Pradesh</option><option value="6">Assam</option><option value="8">Bihar</option><option value="27">Chandigarh</option><option value="18">Chhattisgarh</option><option value="26">Delhi</option><option value="31">Diu and Daman</option><option value="32">DNH at Silvasa</option><option value="30">Goa</option><option value="17">Gujarat</option><option value="14">Haryana</option><option value="5">Himachal Pradesh</option><option value="12">Jammu and Kashmir</option><option value="7">Jharkhand</option><option value="3">Karnataka</option><option value="4">Kerala</option><option value="23">Madhya Pradesh</option><option value="1">Maharashtra</option><option value="25">Manipur</option><option value="21">Meghalaya</option><option value="19">Mizoram</option><option value="11">Orissa</option><option value="22">Punjab</option><option value="9">Rajasthan</option><option value="24">Sikkim</option><option value="10">Tamil Nadu</option><option value="29">Telangana</option><option value="20">Tripura</option><option value="15">Uttarakhand</option><option value="13">Uttar Pradesh</option><option value="16">West Bengal</option>
                      </select>
                    </td>
                  </tr>
                  
                  <tr>
                    <td className={'padding-20'}>
                      <label>
                        City:
          </label>
                    </td>
                    <td className={'padding-20'}>
                      
                      <select id="sess_dist_code" onchange="fillCourtComplex();" >
                        <option value="0">
                          Select District
                         </option>
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
                        Year:
          </label>
                    </td>
                    <td className={'padding-20'}>
                      <select id="sess_year" onchange="fillCourtComplex();" >
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
                      <button className={'padding-5 btn btn-primary text-center'} type="button" name="name" onClick={() => { this.getData() }}> Send</button>
                    </td>
                  </tr>
                </tbody>
              </table> 
            </div> 
              : <div onClick={() => this.emptyList()}> <h3 className={'mt-20'}>Search Again.</h3></div>           
}</div>
        }
         
      <div>
        <div className={'text-left padding-20 title-header'}><h3>Available Cases</h3></div>
        <table id='students'>
          <tbody>
            {this.renderTableData()}
          </tbody>
        </table>
      </div>
        </div>

    );
  }
}

export default AppRouter;