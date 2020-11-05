import React from 'react'

const Main = ({shows, popUp}) => {

 const showList = shows.length ? (
 Array.from(shows).map(show => {
 	return(
	<div className="card-list w-auto xl:w-1/5 flex-none m-auto xl:-mx-6 opacity-50 hover:opacity-100" key={show.id} onClick={() => {popUp(show.id)}}>
		<img className="transform translate-y-0 hover:-translate-y-8" src={show.image.medium} alt={show.name}/>		
	</div>
	)
 })	

 	):( <div className="center">No posts to show</div>);

 return(
 	<div className="main-List whitespace-no-wrap overflow-x-auto">
 		<div className="flex flex-no-wrap">
 			{showList}
 		</div>
 	</div>

 	)

	
}

export default Main
