import React from "react";
import { connect } from "react-redux";

function Home(props) {
  return (
    <div>
      Home
    </div>
  );
}

const mapStateToProps = state => {
  return {}
}

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
