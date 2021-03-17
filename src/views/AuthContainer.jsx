import React from "react";
import { connect } from "react-redux";

import Auth from "../components/Auth";

const AuthContainer = (props) => {
    return <Auth />;
};

const mapStateToProps = (state) => {
    return {};
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(AuthContainer);
