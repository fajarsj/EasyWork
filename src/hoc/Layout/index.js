import React, { Component, Fragment } from "react";

import SideDrawer from "../../components/Navigation/SideDrawer";
import SideDrawerToggler from "../../components/Navigation/SideDrawer/SideDrawerToggler";

class Layout extends Component {
  state = {
    showSideDrawer: false,
  };

  sideDrawerClosedHandler = () => {
    this.setState({ showSideDrawer: false });
  };

  sideDrawerToggleHandler = () => {
    console.log("clicked");
    this.setState((prevState) => {
      return { showSideDrawer: !prevState.showSideDrawer };
    });
  };

  render() {
    const { children } = this.props;

    return (
      <Fragment>
        <SideDrawerToggler clicked={this.sideDrawerToggleHandler} />
        <SideDrawer
          open={this.state.showSideDrawer}
          closed={this.sideDrawerClosedHandler}
        />
        <main className="layout">
          <div className="layout__container">{children}</div>
        </main>
      </Fragment>
    );
  }
}

export default Layout;
