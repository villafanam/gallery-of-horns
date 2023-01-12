// import { toHaveDisplayValue } from '@testing-library/jest-dom/dist/matchers';
import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col'
import './HornedBeast.css';


class HornedBeast extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state =
    {
      favorites: 0,
    }
  }

  // ** METHOD TO UPDATE STATE FOR EACH HornedBeast ** This is called on the onclick on p element
  handleFavs = () => 
  {
    this.setState({
      favorites: this.state.favorites + 1
    });
  }

  handleCardClick = () => {
    this.props.handleOpenModal(this.props.title, this.props.image_url, this.props.description);
  }

  render()
  {
    return(
      <>
        <Col className='mt-4'>
          <Card className='h-100' onClick={this.handleCardClick}>
            <Card.Img 
            style={{height: '260px'}} 
            variant="top" 
            onClick={this.handleFavs} 
            src={this.props.image_url} 
            alt={this.props.description} 
            title={this.props.title} 
            />
            <Card.Body>
              <Card.Title >{this.props.title} ⭐️{this.state.favorites}
              </Card.Title>
              <Card.Text>{this.props.description}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </>
    );

  }
}

export default HornedBeast;