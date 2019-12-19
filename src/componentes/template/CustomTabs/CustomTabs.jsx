import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// nodejs library to set properties for components
import PropTypes from "prop-types";

// material-ui components
import withStyles from "@material-ui/core/styles/withStyles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
// core components
import Card from "../Card/Card.jsx";
import CardBody from "../Card/CardBody.jsx";
import CardHeader from "../Card/CardHeader.jsx";

import customTabsStyle from "../../jss/material-dashboard-react/components/customTabsStyle.jsx";

class CustomTabs extends React.Component {
  state = {
    value: 0
  };
  handleChange = (event, value) => {
    this.setState({ value});
  };

  getLista(tabs){
    var abas = [];
    tabs.map((prop,key)=>{
      if (prop.tabContent) {
        abas.push(prop);
      }
    })
    return abas;
  }

  render() {
    const {
      classes,
      headerColor,
      plainTabs,
      tabs,
      title,
      rtlActive,
      onClick,
    } = this.props;
    const cardTitle = classNames({
      [classes.cardTitle]: true,
      [classes.cardTitleRTL]: rtlActive
    });
    return (
      <Card plain={plainTabs}>
        <CardHeader color={headerColor} plain={plainTabs}>
          {title !== undefined ? (
            <div className={cardTitle}>{title}</div>
          ) : null}
          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
            classes={{
              root: classes.tabsRoot,
              indicator: classes.displayNone,
              scrollButtons: classes.displayNone
            }}
            variant="scrollable"
            scrollButtons="auto"
          >
            {this.getLista(tabs).map((prop, key) => {
              var icon = {};
              if (prop.tabIcon) {
                icon = {
                  icon: <prop.tabIcon />
                };
              }
              return (
                <Tab
                  classes={{
                    root: classes.tabRootButton,
                    labelContainer: classes.tabLabelContainer,
                    label: classes.tabLabel,
                    selected: classes.tabSelected,
                    wrapper: classes.tabWrapper
                  }}
                  onClick={prop.onClick}
                  disabled={prop.disabled!==undefined && prop.disabled}
                  key={key} id={prop.id}
                  label={prop.tabName}
                  {...icon}
                />
              );
            })}
          </Tabs> 
        </CardHeader>
        <CardBody>
          {this.getLista(tabs).map((prop, key) => {
            if (key === this.state.value) {
              return <div key={key}>{prop.tabContent}</div>;
            }
            return null;
          })}
        </CardBody>
      </Card>
    );
  }
}

CustomTabs.propTypes = {
  classes: PropTypes.object.isRequired,
  headerColor: PropTypes.oneOf([
    "warning",
    "success",
    "danger",
    "info",
    "primary"
  ]),
  title: PropTypes.string,
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      tabName: PropTypes.string.isRequired,
      tabIcon: PropTypes.func,
      tabContent: PropTypes.node.isRequired
    })
  ),
  rtlActive: PropTypes.bool,
  plainTabs: PropTypes.bool,
  onClick: PropTypes.func,
  id: PropTypes.string
};

export default withStyles(customTabsStyle)(CustomTabs);
