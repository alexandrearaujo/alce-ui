import React from "react";
import PropTypes from "prop-types";

const ImagemLink = ({src, link , enabled, mesmaAba}) => ( 
    <div className="botao texto">        
        <img src={src} disabled={ enabled!==undefined && !enabled ?'disabled':''} onClick={()=> (typeof mesmaAba==="undefined" || mesmaAba===null || mesmaAba ) ? window.location=link : window.open(link, '_blank') }/>,
    </div>
);

ImagemLink.propTypes = {
    src: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired, 
    enabled: PropTypes.bool.isRequired,
  };

export default ImagemLink;