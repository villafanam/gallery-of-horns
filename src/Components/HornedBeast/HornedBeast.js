// import { toHaveDisplayValue } from '@testing-library/jest-dom/dist/matchers';
import React from 'react';
import Card from 'react-bootstrap/Card';
// import Col from 'react-bootstrap/Col';
// import Row from 'react-bootstrap/Row';
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

  render()
  {
    return(
      <>
        {/* <h2>{this.props.title}</h2>
        <p>{this.state.favorites} ⭐️</p>
        <img onClick={this.handleFavs} src={this.props.image_url} alt={this.props.description} title={this.props.title}/>
        <p>{this.props.description}</p> */}

          {/* <Row xs={1} md={2} className="g-4">
                {Array.from({ length: 1 }).map((_, idx) => (
                  <Col>
                    <Card style={{ width: '18rem', marginTop: '1rem', backgroundColor: '#323030', color: '#FFF'}}>
                      <Card.Img variant="top" style={{height: '260px', }} onClick={this.handleFavs} src={this.props.image_url} alt={this.props.description} title={this.props.title}/>
                      <Card.Body>
                        <Card.Title>{this.props.title} ⭐️{this.state.favorites}</Card.Title>
                        <Card.Text>{this.props.description}</Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row> */}

{/* style={{ width: '18rem', marginTop: '1rem', backgroundColor: '#323030', color: '#FFF'}} */}
        <Card >
          <Card.Img style={{height: '260px'}} variant="top" onClick={this.handleFavs} src={this.props.image_url} alt={this.props.description} title={this.props.title} />
          <Card.Body>
            <Card.Title>{this.props.title} ⭐️{this.state.favorites}</Card.Title>
            <Card.Text>{this.props.description}</Card.Text>
          </Card.Body>
        </Card>
      </>
    );

  }
}

export default HornedBeast;