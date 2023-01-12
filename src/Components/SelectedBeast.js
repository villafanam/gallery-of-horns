import React from 'react';
import Modal from 'react-bootstrap/Modal';

class SelectedBeast extends React.Component
{
  render(){
    return (
      <>
        <Modal show={this.props.showModal} onHide={this.props.handleCloseModal}>
          <Modal.Header closeButton>{this.props.selectedBeastName}</Modal.Header>
          <Modal.Body>
            <img 
              src={this.props.img_url} 
              alt={this.props.description} 
              width='90%'
            />
            <p>{this.props.description}</p>
          </Modal.Body>
        </Modal>
      </>
    )
  }
}

export default SelectedBeast;