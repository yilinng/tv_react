import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Header from './components/Header';
import ModalDetails from './components/ModalDetails';
import FilterPost from './components/FilterPost';
import TrackList from './components/TrackList';

import axios from 'axios'


class App extends Component {

	state = {
		shows:[],
		show:[],
		filterPosts:[],
		localTrack:[]

	}

	componentDidMount(){
		axios.get('/shows')
		.then(res => {
			//console.log(res);
			this.setState({
          	shows: res.data
       		 });
		})
	}

	popUp = (id) => {
		let shows = this.state.shows.filter(show => {
     	 return show.id === id
   		 });
		    //console.log(shows)
		    this.setState({
		    	show:shows
		    })
	}

	closeDetail = () => {
		this.setState({
			show: []
		})
	}
	trackitem = (id, show) => {

		//localStorage.clear()
		let localdatas = [];
	    // Parse the serialized data back into an aray of objects
	    localdatas = JSON.parse(localStorage.getItem('session')) || [];
	    // Push the new data (whether it be an object or anything else) onto the array
	    const btnTrack = document.querySelector('.btnTrack');

	    //console.log(btnTrack)
	   if (localdatas.indexOf(id) !== -1) {
	   	//console.log('have the same');
	   	let index = localdatas.findIndex(data => {
	   		return data === id
	   	});
	   	localdatas.splice(index, 1)
	   	localStorage.setItem('session', JSON.stringify(localdatas));
	   	//alert(localdatas);
	   	//change track button color
	   	 if (btnTrack.classList.contains('bg-red-300')) {
	    	btnTrack.classList.remove('bg-red-300');
	    	btnTrack.classList.add('bg-blue-200');
	    	btnTrack.children[1].textContent = 'Track';
	    }
			let item = this.state.localTrack.filter(track => {
				return track.id !== id
			})
			this.setState({
				localTrack:item
			})
			
	   }else{
	   	localdatas.push(id);
	    // Alert the array value
	    //alert(localdatas);  // Should be something like [Object array]
	    // Re-serialize the array back into a string and store it in localStorage
	    let localTrack = [...this.state.localTrack,show];
	    this.setState({
	    	localTrack:localTrack
	    })
	    localStorage.setItem('session', JSON.stringify(localdatas));
	    	   	//change track button color
	    if (btnTrack.classList.contains('bg-blue-200')) {
	    	btnTrack.classList.remove('bg-blue-200');
	    	btnTrack.classList.add('bg-red-300');
	    	btnTrack.children[1].textContent = 'Tracked';
	    	}
	   }
	}

	serachPost = (post) => {
		let postFiltered = this.state.shows.filter(show => {
			 return show.name.toLowerCase().indexOf(post.toLowerCase()) !== -1;
		})
		//console.log(postFiltered)
		this.setState({
			filterPosts: postFiltered
		})
	}
	trackHandle = () => {
		
	    //console.log(localTrack);
		let tracklist = document.querySelector('.tracklist');
		tracklist.classList.remove('hidden');
		tracklist.classList.add('block');

	}

	closeList = () => {
		let tracklist = document.querySelector('.tracklist');
		tracklist.classList.remove('block');
		tracklist.classList.add('hidden');
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
      <Navbar serachPost={this.serachPost}/>
      <Header shows={this.state.shows} popUp={this.popUp} trackHandle={this.trackHandle}/>
      <TrackList localTrack={this.state.localTrack} closeList={this.closeList} deleteItem={this.deleteItem}/>
      <ModalDetails show={this.state.show} closeDetail={this.closeDetail} trackitem={this.trackitem}/>
      {this.state.filterPosts.length ? (
      	<FilterPost filterPosts={this.state.filterPosts} popUp={this.popUp}/>
      	):(
      	<Main shows={this.state.shows} popUp={this.popUp}/>      
      	)}
    </div>
  );
}
}


export default App;
