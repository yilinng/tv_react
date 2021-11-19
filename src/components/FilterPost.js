import React from 'react';
import { useNavigate } from "react-router-dom";

const FilterPosts = ({filterPosts}) => {

	const navigate = useNavigate();

 	return(
 	<div className="filterList">
 	{filterPosts.length ? (
	 Array.from(filterPosts).map(post => {
 		return(
		<div className="card-list" key={post.id} onClick={() => navigate('/' + post.id)}>
			<img className="filterimage" src={post.image.medium} alt={post.name}/>		
		</div>
	)
 })	

 	):( <div className="center">No posts to show</div>)}
 	</div>

 	)

}

export default FilterPosts;