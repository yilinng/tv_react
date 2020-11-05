import React from 'react';
import iconRemove from '../images/icon-remove.svg';

const TrackList = ({localTrack, closeList, deleteItem}) => {

	const Tracks = localTrack.length ? (
		Array.from(localTrack).map(show => {
	 	return(
	 		
	 		<div className="flex flex-row bg-white w-24 h-24 mr-10" key={show.id}>
	 			<img className="absolute left-0 mb-10 w-6 h-6 bg-blue-500" src={iconRemove} alt="iconRemove"
	 			onClick={() => {deleteItem(show.id)}}/>
	 			<span className="text-sm">{show.name}</span>
	 			<img className="absolute right-0 w-12 h-12" src={show.image.medium} alt={show.name}/>
	 		</div>
	 		
		)
 	})	 		
	):(
	<div>no track item!</div>
	);
	return (
		<div className="tracklist absolute mt-20 top-0 right-0 mx-16 flex flex-col p-12 bg-white divide-y divide-gray-400">
		<img className="absolute top-0 right-0 w-12 h-12 bg-red-300" src={iconRemove} alt="iconRemove" onClick={() => {closeList()}}/>
			{Tracks}
		</div>
	)
	

}

export default TrackList;