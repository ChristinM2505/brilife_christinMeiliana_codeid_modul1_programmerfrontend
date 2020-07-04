import React, { Component } from "react";
import Header from "./Header";
import Navigation from "./Navigation";
import {Snackbar} from '@material-ui/core';
import Alert from "@material-ui/lab/Alert";
import CssBaseline from "@material-ui/core/CssBaseline";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles.js";

class Page extends Component {
  constructor(props) {
    super(props);

    this.state = {
      drawerOpen : false,
      alertShow : false
    }
  }

  componentDidUpdate(prevProps,prevState){
    const{error} = this.props;
    if( prevProps.error !== error ) {
      this.setState({alertShow:true});
    }
  }

  handleDrawerToggle = () => {
    this.setState({ drawerOpen: !this.state.drawerOpen });
  };

  hideAlert = () => {
    this.setState({alertShow : false});
  }

  render() {
    const { children, classes ,error } = this.props;

    return (
      <div className={classes.root}>
        <CssBaseline />
        <Header className={classes.header} title="BRI Life" onMenuClick={this.handleDrawerToggle} />
        <Navigation
          mobileOpen={this.state.drawerOpen}
          handleDrawerToggle={this.handleDrawerToggle}
        />  
        <main className={classes.content}>
          <div className={classes.toolbar} />
          {children}
          <Snackbar open={this.state.alertShow} autoHideDuration={4000} onClose={this.hideAlert}>
            <Alert onClose={this.hideAlert} elevation={6} variant="filled"
            severity="error">{error?.message}</Alert>
          </Snackbar>
        </main>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Page);
