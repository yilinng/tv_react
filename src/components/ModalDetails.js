import React, { useState, useEffect } from 'react';
//import iconRemove from '../images/icon-remove.svg';
import star from '../images/star.svg';
import { useParams, useNavigate } from "react-router-dom";
import axios from 'axios';


const ModalDetails = ({ shows }) =>{

	const navigate = useNavigate();
	const params = useParams();
	const [show, setShow] = useState('')

	let filterArr = [];
	const objFilter = new Map();

	if(shows.length > 0){
		Array.from(shows).map(item =>{
			if(item.genres.length){
				item.genres.map(inItem => !show.genres ? '' : !show.genres.includes(inItem) || item.id === show.id ? '': filterArr.push(item))
			}
			return null
		}) 
	}

	if(filterArr.length){
		filterArr.map(item => objFilter.set(item.id, item));	
	} 
	//console.log(objFilter);

	/*
	for (let role of objFilter.values()) {
		console.log(role);
	}
	*/
	// recommend list
	const collectShow = [...objFilter.values()].map((item, index) => index > 15 ? '':  
	<div className="movie w-auto xl:w-72 flex-none cursor-pointer" key={item.id} onClick={() => navigate('/' + item.id)}>
	<img className="w-48 h-auto" src={!item.image ? '' : !item.image.medium ? '' : item.image.medium} alt={item.name} />
	</div>)

	

	useEffect(() => {
		const fetchData = () => {
			axios.get('/shows/' + params.id)
			.then(res => {
				//console.log(res);
				setShow(res.data);
			})
		}
		fetchData();
	},[params.id])
 	
 	return (
		 <div className="detailpage">
			 {!show ? <h3 className="text-white">no post</h3> :
			<>
			<div className="movie-info" style={{backgroundImage: "url(" + show.image.original + ")"}}>
				<div className="movie-detail">
					<h1 className="movie-name text-2xl font-medium mb-6">{show.name}</h1>
					<span className="genresList">
					{ !show.genres ? '': show.genres.length ? show.genres.map((item, index) => <p className="genres text-gray-300" key={index}>{ item }</p> ): ''}
					</span>
					<p className="des">{ !show.summary ? '' : show.summary.replace(/<p>|<\/p>|<b>|<\/b>/g, "")}</p>
					<p className="starring text-gray-300 flex flex-row space-x-4">
						<img className="bg-white" src={ star } width="50" height="50" alt="star"/> 
						<span className="text-3xl">{!show.rating ? '': !show.rating.average ? '':show.rating.average}</span>
					</p>
				</div>
			</div>
			<div className="mobileDes">
					<p className="des">{ !show.summary ? '' : show.summary.replace(/<p>|<\/p>|<b>|<\/b>/g, "")}</p>
			</div>

			<div className="recommendations w-6/7 mx-16">
				<h1 className="heading text-3xl text-white my-10">More Like This</h1>
				<div className="recommendations-container w-full flex flex-wrap space-x-2 space-y-2">
					{ collectShow }			
				</div>
			</div>
			</>
			}
		</div>  
 	)
 
}

export default ModalDetails