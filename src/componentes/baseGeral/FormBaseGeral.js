import React, { Component } from "react";
import PropTypes from "prop-types"; 
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import withStyles from "@material-ui/core/styles/withStyles";
import PerfectScrollbar from "perfect-scrollbar"; 
import dashboardStyle from "../jss/material-dashboard-react/layouts/dashboardStyle.jsx";

import Navbar from "../template/Navbars/Navbar.jsx";
import Footer from "../template/Footer/Footer.jsx";
import Sidebar from "../template/Sidebar/Sidebar.jsx"; 
 



const theme = createMuiTheme({
    typography: {
        useNextVariants: true,
    },
    palette: {
        primary: {
            main: '#00ABA5',
         light:'#33bbb7',
            dark:'#007773',
            contrastText: '#fff',
        },
        secondary: {
            main: '#2979ff',
         light:'#5393ff',
            dark:'#1c54b2',
            contrastText: '#fff',
        },
        error: {
            main: '#d32f2f',
        },
        warning: {
          main: '#ffa21a'
        }
    },
    status: {
        danger: 'orange',
    },
    overrides: {
      MuiInput: {
        underline: {
          '&:hover:not($disabled):not($error):not($focused):before': {
            borderBottom: '1px solid rgba(0, 0, 0, 0.42)',
          },
        },
      }
    }
});

class FormBaseGeral extends Component {
    constructor() {
        super();
        this.state = {
            ...this.props ,
            color: "blue",
            hasImage: true, 
            mobileOpen: false
        };
    }

     
      handleDrawerToggle = () => {
        this.setState({ mobileOpen: !this.state.mobileOpen });
      }; 
      resizeFunction = () => {
        if (window.innerWidth >= 960) {
          this.setState({ mobileOpen: false });
        }
      };
      componentDidMount() {
        if (navigator.platform.indexOf("Win") > -1) {
          const ps = new PerfectScrollbar(this.refs.mainPanel);
        }
        window.addEventListener("resize", this.resizeFunction);
      }
      componentDidUpdate(e) {
        /*if (e.history.location.pathname !== e.location.pathname) {
          this.refs.mainPanel.scrollTop = 0;
          if (this.state.mobileOpen) {
            this.setState({ mobileOpen: false });
          }
        }*/
      }
      componentWillUnmount() {
        window.removeEventListener("resize", this.resizeFunction);
      }

      onRouteChanged() {
        console.log("ROUTE CHANGED");
      }

    render() {
        const { classes, routes, image , logo , LoadingPanel, ...rest   } = this.props;
     
        return (
            <MuiThemeProvider theme={theme}>
                 <div className={classes.wrapper}>
        <Sidebar
          routes={routes}
          logoText={"RH/FOLHA"}
          logo={logo}
          image={image}
          handleDrawerToggle={this.handleDrawerToggle}
          open={this.state.mobileOpen}
          color={this.state.color}
          {...rest}
        />
        <div className={classes.mainPanel} ref="mainPanel">
          <Navbar
            routes={routes}
            handleDrawerToggle={this.handleDrawerToggle}
            {...rest}
          />  
              <div className={classes.content} style={{margin:'0 -15px !important'}}>
                <div className={classes.container}>{this.props.children}</div>
              </div>  
          <Footer /> 
           
        </div>
      </div>
                    
                    <LoadingPanel  />
                
            </MuiThemeProvider >
        );
    }
}

FormBaseGeral.propTypes = {  
    children: PropTypes.object.isRequired
  };
    

export default withStyles(dashboardStyle)(FormBaseGeral);  


