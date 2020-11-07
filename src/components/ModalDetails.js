import React from 'react';
import iconRemove from '../images/icon-remove.svg';
import star from '../images/star.svg';


const ModalDetails = ({show, closeDetail, trackitem}) => {


const summary = () => {
	let getHtml = show[0].summary;
	let div =  document.createElement("div");
	div.innerHTML = getHtml;
	return div.innerText;
}

const detail = show.length ? (
 		<div className="absolute top-0 mx-auto xl:mx-40 my-auto xl:my-20 h-auto z-20 flex flex-col xl:flex-row bg-white rounded-lg">
 			<div className="leftpage flex flex-col bg-gray-200 w-auto xl:w-1/2 rounded-lg">
 			<span className="text-4xl text-center my-10">{show[0].name}</span>
 			<p className="text-lg text-justify font-serif leading-loose px-4">{summary()}</p>
 			<div className="flex justify-evenly mt-10">
	 			<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
				 {show[0].genres[0]}
				</button>
				{show[0].genres[1] ?(
					<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
					  {show[0].genres[1]}
					</button>):('')}
				{show[0].genres[2] ?(
					<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
					  {show[0].genres[2]}
					</button>):('')}
			</div>
			<div className="flex justify-evenly mt-10">
				<span className="bg-red-300 text-white text-2xl rounded-full py-2 px-4">{show[0].rating.average}</span>

				<button className="btnTrack bg-blue-200 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center" onClick={() => {trackitem(show[0].id, show[0])}}>
				<img src={star} alt="star"/>
				  <span className="trackName">Track</span>
				</button>
			</div>
 			</div>
 			<div className="rightpage w-auto xl:w-1/2 rounded-lg">
 				<img className="absolute top-0 right-0 z-30 w-12 h-12" src={iconRemove} alt="iconRemove" onClick={() =>{closeDetail()}}/>
 				<img className="w-auto h-auto" src={show[0].image.original} alt={show[0].name}/>
 			</div>
 		</div>
 	) : ('');
 	
 	return (
 		<div className="showdetail">
 			{detail}
 		</div>
 	)
 
}

export default ModalDetails