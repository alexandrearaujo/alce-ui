import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames"; 
import LiveHelp from '@material-ui/icons/LiveHelp'; 
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons

// core components
import cardStyle from "../../jss/material-dashboard-react/components/cardStyle.jsx";

function Card({ ...props }) {
  const {
    classes,
    className,
    children,
    plain,
    profile,
    chart,
    evtHelper,
    ...rest
  } = props;
  const cardClasses = classNames({
    [classes.card]: true,
    [classes.cardPlain]: plain,
    [classes.cardProfile]: profile,
    [classes.cardChart]: chart,
    [className]: className !== undefined
  });

  const styleHelp = {
    position: 'absolute',
    top: '-30px',
    left: '0',
    color: '#63A8A4',
    cursor: 'pointer'
  } ;

  return (
    <div className={cardClasses} {...rest}>
      {evtHelper ?   
            <LiveHelp title="Ajuda" style={styleHelp} onClick={evtHelper} />   : null }
      {children}
    </div>
  );
}

Card.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  plain: PropTypes.bool,
  profile: PropTypes.bool,
  chart: PropTypes.bool
};

export default withStyles(cardStyle)(Card);
