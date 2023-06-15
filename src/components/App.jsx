import { Component } from "react";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Searchbar } from "./Searchbar/Searchbar";


export class App extends Component {
  state = {
    query: '',
  }
  handleFormSubmit = query => {
    this.setState({query});
  }
  render() {
    return (
      <>      
      <Searchbar qwe={this.handleFormSubmit}></Searchbar>
      <ImageGallery searchQuery={this.state.query}/>      
      <ToastContainer autoClose={6000}/>
    </>
    )
  }
}





