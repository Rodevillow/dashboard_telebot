import React from "react";
import { connect } from "react-redux";

import Home from "../components/Home";

const HomeContainer = () => {
    return <Home />;
};

const mapStateToProps = (state) => {
    return {};
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
