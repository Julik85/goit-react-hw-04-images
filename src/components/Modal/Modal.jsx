import React, { Component } from "react"
import { Overlay, Modal } from "./Modal.styled"


export class ModalImage extends Component {
    componentDidMount() {
        window.addEventListener('keydown', this.handleKeyDown);
      }

    componentWillUnmount (){
        window.removeEventListener('keydown', this.handleKeyDown);
    }
    
    handleKeyDown = event => {
        if (event.code === 'Escape') {
          this.props.onClose();
        }
      };

      handleOverlayClick = event => {
        if (event.currentTarget === event.target) {
          this.props.onClose();
        }
      };

    render () {
        
        return (
            <Overlay onClick={this.handleOverlayClick}>
            <Modal>{this.props.children}</Modal>
            </Overlay>    
        )
    }
}