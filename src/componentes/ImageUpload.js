import React, { Component } from "react";
import PropTypes from "prop-types";


export default class ImageUpload extends Component {
    constructor(props) {
        super(props);
        this.state = {
            file: '',
            imagePreviewUrl: ''
        };
        this._handleImageChange = this._handleImageChange.bind(this);
        this._handleSubmit = this._handleSubmit.bind(this);
    }

    _handleSubmit(e) {
        e.preventDefault();
    }

    _handleImageChange(e) {
        e.preventDefault();
        let reader = new FileReader();
        let file = e.target.files[0];
        this.props.acao(file);

        reader.onloadend = () => {
            this.setState({
                file: file,
                imagePreviewUrl: reader.result
            });
        }
        //this.state.acao(file);
        reader.readAsDataURL(file)
    }

    render() {
        let {imagePreviewUrl} = this.state;
        let {src, style} = this.props;
        let $imagePreview = null;
        if (imagePreviewUrl) {

            $imagePreview = (<img className='imageUpload' src={imagePreviewUrl} style={style} />);
        }else  if(src){
            $imagePreview = (<img className='imageUpload' src={src} style={style} />);

        } else {
            $imagePreview = (<img className='imageUpload' src={"../../../imagens/avatar.png"} style={style} />);
        }

        return (
            <div>
                {$imagePreview}
              <form onSubmit={this._handleSubmit}>
                <div className="botao texto">
                  <input type="file" onChange={this._handleImageChange} />
                </div>
              </form>
            </div>
        )
    }

}

ImageUpload.fromComponents  = function (acao) {
    this.acao = acao;
    return new ImageUpload(acao);
};

ImageUpload.propTypes = {
    acao: PropTypes.func.isRequired,
    src: PropTypes.string.isRequired,
};