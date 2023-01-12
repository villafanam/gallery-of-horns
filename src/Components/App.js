// 1st import 
import React from 'react';
import Header from './Header/Header';
import Footer from './Footer';
import Main from './Main/Main';
import SelectedBeast from './SelectedBeast';
import data from '../data/data.json'


// 2nd Class component
class App extends React.Component{
  constructor(props)
  {
    super(props);
    this.state = {
      showModal: false,
      selectedBeastName: '',
      imgURL: '',
      description:'',
    }
  }

  handleOpenModal = (name, img, desc) => {
    this.setState({
      showModal: true,
      selectedBeastName: name,
      imgURL: img,
      description: desc,
    });
  }

  handleCloseModal = () => {
    this.setState({
      showModal: false
    });
  }


  render(){
    return (
      <>
        <Header />
        <Main data={data} handleOpenModal={this.handleOpenModal}/>
        <SelectedBeast 
        showModal={this.state.showModal} 
        handleCloseModal={this.handleCloseModal} 
        selectedBeastName={this.state.selectedBeastName}
        img_url={this.state.imgURL}
        description={this.state.description}
        />
        <Footer />
      </>
    )
  }
}

// 3rd Export the component so other files can import them
export default App;

