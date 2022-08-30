import React from "react";
import { connect } from "react-redux";

class UserHeader extends React.Component {
  render() {
    const { user } = this.props;

    if (!user) return null;

    return <div className="header">{user.name}</div>;
  }
}

const mapStateToProps = (state, ownProps) => {
  //to not get an array of users but only get one user data as needed

  return { user: state.users.find((user) => user.id === ownProps.userID) };
};

export default connect(mapStateToProps)(UserHeader);
