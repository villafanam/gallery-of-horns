import React from "react";
import HornedBeast from '../HornedBeast/HornedBeast';
import './Main.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { Form, ListGroup } from 'react-bootstrap';


class Main extends React.Component
{
  constructor(props) {
    super(props);
    this.state = {
      sortedData: this.props.data,
    }
  }

  handleSelect = (event) => {
    let selected = event.target.value;

    if(selected === 'Horns=1')
    {
      let newData = this.props.data.filter(num => num.horns === 1);
      this.setState({
        sortedData: newData
      });
    }
    else if(selected === 'Horn>20')
    {
      let newData = this.props.data.filter(num => num.horns > 20);
      this.setState({
        sortedData: newData
      });
    }
    else if(selected === 'Horn<20')
    {
      let newData = this.props.data.filter(num => num.horns < 20);
      this.setState({
        sortedData: newData
      });
    }
    else if(selected === 'all')
    {
      this.setState({
        sortedData: this.props.data
      });
    }

  }

  render(){
    return (
      <>
        <main>
          <Form>
            <Form.Group>
              <Form.Select name="selected" onChange={this.handleSelect}>
                <option># of Horns</option>
                <option value="all">ALL</option>
                <option value="Horns=1">Horns = 1</option>
                <option value="Horn>20">Horn greater than 20</option>
                <option value="Horn<20">Horn lest than 20</option>
              </Form.Select>
            </Form.Group>
          </Form>

          <Container>
            <Row xs={1} sm={2} md={3} lg={4}>
              {this.state.sortedData.map((beast) => {
              return ( 
                <HornedBeast 
                title={beast.title} 
                image_url={beast.image_url} description={beast.description} 
                key={beast._id}
                handleOpenModal={this.props.handleOpenModal}
                /> 
              )})}
            </Row>
          </Container>
          
        </main>
      </>

    );
  }

}

export default Main;