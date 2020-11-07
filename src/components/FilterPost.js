import React from 'react';

const FilterPosts = ({filterPosts, popUp}) => {

	const filterList = filterPosts.length ? (
	 Array.from(filterPosts).map(post => {
 		return(
	<div className="card-list w-auto xl:w-1/5 flex-none m-auto xl:-mx-6 opacity-50 hover:opacity-100" key={post.id} onClick={() => {popUp(post.id)}}>
		<img className="transform translate-y-0 hover:-translate-y-8" src={post.image.medium} alt={post.name}/>		
	</div>
	)
 })	

 	):( <div className="center">No posts to show</div>);

 	return(
 	<div className="main-List whitespace-no-wrap overflow-x-auto">
 		<div className="flex flex-no-wrap">
 			{filterList}
 		</div>
 	</div>

 	)

}

export default FilterPosts;