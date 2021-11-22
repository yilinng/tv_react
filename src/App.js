import React, { Component } from 'react';
import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Header from './components/Header';
import ModalDetails from './components/ModalDetails';
import FilterPost from './components/FilterPost';
import NotFound from './components/NotFound';


import axios from 'axios'
import Spinner from './components/ui/Spinner';


class App extends Component {

	state = {
		shows:[],
		show:[],
		filterPosts:[],
		localTrack:[],
		loading: false,
		error:''
	}

	componentDidMount(){
		this.setState({
			loading: true
		})
		axios.get('/shows')
		.then(res => {
			this.setState({
          		shows: res.data,
			loading: false  
       			})
			}).catch(error => {
			// handle error
			this.setState({
			error: error
			})
		})
	}

	serachPost = (post) => {

		//clear filterPosts states
		if (!post || post.length === 0 ) {
			return this.setState({
				filterPosts: []
			})
		}

		const postFiltered = this.state.shows.filter(show => {
			 return show.name.toLowerCase().indexOf(post.toLowerCase()) !== -1;
		})

		this.setState({
			filterPosts: postFiltered
		})
	}
	

	deleteItem = (id) => {
		let item = this.state.localTrack.filter(track => {
			return track.id !== id
		})
		this.setState({
			localTrack:item
		})

		//localStorage.clear()
		let localdatas = [];
	    // Parse the serialized data back into an aray of objects
	    localdatas = JSON.parse(localStorage.getItem('session')) || [];
	    // Push the new data (whether it be an object or anything else) onto the array
	    
	   if (localdatas.indexOf(id) !== -1) {
	   	//console.log('have the same');
	   	let index = localdatas.findIndex(data => {
	   		return data === id
	   	});
	   	localdatas.splice(index, 1)
	   	localStorage.setItem('session', JSON.stringify(localdatas));

	}

}

  render() {
  return (
    <div className="App">
		{ this.state.loading ? <Spinner/>: <> 
      <Navbar serachPost={this.serachPost}/>
	  <Routes>
		  <Route path="/" element={ this.state.filterPosts.length ? 
		  	<FilterPost filterPosts={this.state.filterPosts}/> :<Header shows={this.state.shows} error={this.state.error}/>}/>
		  <Route path=":id" element={<ModalDetails shows={this.state.shows}/>}/>
		  <Route path="*" element={<NotFound />} />
	  </Routes>
	  </>}
    </div>
  );
}
}


export default App;
