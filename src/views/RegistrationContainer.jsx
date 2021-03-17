import React from "react";
import { connect } from "react-redux";

import Registration from "../components/Registration";

const RegistrationContainer = (props) => {
    return <Registration />;
};

const mapStateToProps = (state) => {
    return {};
};

const mapDispatchToProps = {};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RegistrationContainer);
