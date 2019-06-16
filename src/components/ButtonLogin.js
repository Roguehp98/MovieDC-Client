import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { withRouter } from 'react-router-dom';
import { Mutation } from 'react-apollo';
import { Button, Tooltip } from 'reactstrap';
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
      tooltipOpen: false
    };
  }

  toggle() {
    this.setState({
      tooltipOpen: !this.state.tooltipOpen
    });
  }
  render() {
    const titleLogoutButton = (sessionStorage.getItem('status')) ? `Welcome ${sessionStorage.getItem('username')}`: "No user" ;
    return (
      <Mutation mutation={LogoutQuery}>
        {(logout, { loading }) => {
          return (
            <div className="mt-2 login ml-auto-lg " id="TooltipExample">
              <Button className="text-white menu-logout"
                onClick={() => logout().then(res => {
                  sessionStorage.clear();
                  const uri = window.location.href.split('com/', 2);
                  this.props.history.push("/" + uri[1]);
                })}>
                <FontAwesomeIcon icon={faUser} className="size-icon" />
                Logout
                <Tooltip placement="bottom-start" isOpen={this.state.tooltipOpen} target="TooltipExample" toggle={this.toggle}>
                  {titleLogoutButton}
                </Tooltip>
              </Button>
            </div>
          )
        }}
      </Mutation>
    );
  }
}

export default withRouter(ButtonLogin);