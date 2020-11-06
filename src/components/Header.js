import React from 'react'


const Header = ({shows, popUp, trackHandle}) => {

	//Sorting an array of objects by property values
	//const showFiltered = shows.sort((a, b) => parseFloat(a.rating.average) - parseFloat(b.rating.average));
	const byRating  = shows.sort(function(a,b) {return (a.rating.average >b.rating.average) ? 1 : ((b.rating.average >a.rating.average) ? -1 : 0);} );

 	const showList = byRating.slice(237,240).length ? (
	 Array.from(byRating.slice(237,240)).map(show => {
	 	return(
			<div className="header my-4 bg-gray-400 bg-opacity-50 hover:bg-opacity-25 flex justify-evenly" key={show.id}>
				<div className="leftpage m-auto xl:m-10">
				<span className="font-semibold text-gray-200 text-2xl cursor-default">{show.name}</span>
				<div className="flex justify-evenly mt-auto xl:mt-10">
				  <button className="bg-pink-300 hover:bg-pink-500 text-gray-800 font-bold py-2 px-4 rounded-full"
				  onClick={() => {popUp(show.id)}}>
				    Detail
				  </button>
				  <button className="bg-yellow-300 hover:bg-yellow-500 text-gray-800 font-bold py-2 px-4 rounded-full">
				    Hot!
				  </button>
				  <span className="bg-red-500 text-white font-bold py-2 px-4 rounded-full">{show.rating.average}</span>
				</div>
			</div>
			<div className="rightpage my-auto">
				<img className="z-0 w-auto xl:w-40 h-auto xl:h-40" src={show.image.medium} alt={show.name}/>
			</div>
			</div>
		)
 	})	

 	):( <div className="center">No posts to show</div>);

 	return (
 		<div className="header-list">
 		<div className="bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md" role="alert">
		  <div className="flex">
		    <div className="py-1"><svg className="fill-current h-6 w-6 text-teal-500 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"/></svg></div>
		    <div className="flex justify-evenly">
		      <p className="font-bold">Top three rating!!</p>
		      <button className="absolute right-0 mx-40 bg-purple-500 text-white font-bold" onClick={() => {trackHandle()}}>TrackList</button>
		    </div>
		  </div>
		</div>
 			<div className="flex flex-col xl:flex-row-reverse">
 			{showList}
 			</div>
 		</div>
 	)
	
}


export default Header;