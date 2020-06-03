import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import { Status, Priority, Title } from "../../components/dashboard-components";
import { connect } from "react-redux";
import { getTickets } from "../../store/actions/ticketsActions";
import { Redirect } from "react-router-dom";

class Starter extends Component {
  componentDidMount() {
    this.props.getTickets();
  }
  render() {
    const { tickets } = this.props.tickets;
    const { name, role, email } = this.props.user;
    if (
      role === "Submitter" ||
      role === "Project Manager" ||
      role === "Updater"
    )
      return <Redirect to="/myprojects" />;

    if (role === "Team Manager") return <Redirect to="/manageteams" />;
    return (
      <div>
        <Title></Title>
        <Row>
          <Col sm={6} lg={6}>
            <Status tickets={tickets}></Status>
          </Col>
          <Col sm={6} lg={6}>
            <Priority tickets={tickets}></Priority>
          </Col>
        </Row>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    tickets: state.tickets,
    user: state.auth.user,
  };
};
export default connect(mapStateToProps, { getTickets })(Starter);
