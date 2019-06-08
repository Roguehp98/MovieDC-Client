import React, { Component } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUser} from '@fortawesome/free-solid-svg-icons';
import {withRouter} from 'react-router-dom';
import {Mutation} from 'react-apollo';
import gql from 'graphql-tag';

const LogoutQuery = gql`
  mutation logout{
    logout
  }
`

class ButtonLogin extends Component {
    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          dropdownOpen: false
        };
      }
    
      toggle() {
        this.setState(prevState => ({
          dropdownOpen: !prevState.dropdownOpen
        }));
      }

      render() {
        return (
          <Mutation mutation={LogoutQuery}>
            {(logout,{loading}) => {
              // if(loading) return (<div></div>)
            
              return (<div className="login mt-2 mr-3 text-white">
              <style>
              {
                `.menu-logout:hover {
                  background:#363D39
                }`
              }
              </style>
                <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle} >
                    <DropdownToggle caret style={{backgroundColor: "black"}}>
                        <FontAwesomeIcon icon={faUser} className="size-icon"/>
                        {sessionStorage.getItem("username")}
                    </DropdownToggle>
                    <DropdownMenu  right style={{backgroundColor: "#333"}}>
                        <DropdownItem header className="text-white">Welcome</DropdownItem>
                        <DropdownItem className="text-white menu-logout">Your profile</DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem 
                            className="text-white menu-logout" 
                            onClick={() => logout().then(res => {
                              sessionStorage.clear();
                              const uri = window.location.href.split('0/',2);
                              this.props.history.push("/" + uri[1]);
                            })}
                            
                            >Logout</DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </div>)
            }}
          </Mutation>
        );
      }
}

export default withRouter(ButtonLogin);