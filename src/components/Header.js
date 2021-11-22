import React, { useRef, useCallback } from 'react'
import { useNavigate } from "react-router-dom";
import turnleft from '../images/turnleft.svg';
import turnright from '../images/turnright.svg';

const Header = ({ shows, error }) => {
	//shows.sort((a, b) => (a.rating.average > b.rating.average ) ? 1 : -1)
	const scrollRef = useRef(null);
	const navigate = useNavigate();

	const filterByType =  error ? []: Array.from(new Set(shows.map(item => item.type)));

	//{'Scripted', 'Reality', 'Animation', 'Talk Show', 'Documentary'}
	const countType = {}
	//initial count is 0
	
	if(filterByType.length){
		filterByType.map(item => countType[item] = 0)
	}
	//test for an empty JavaScript object?
	function isEmpty(obj) {
		return Object.keys(obj).length === 0;
	}
	
	if(isEmpty(shows)){
		Array.from(shows.map(item => countType[item.type] += 1))
	}

	/*
	{
	Animation: 14
	Documentary: 1
	Reality: 10
	Scripted: 212
	Talk Show: 3}
	*/

	const handleToDetail = (id) => {
		//redirect to detail page	
		navigate('/' + id)
	}

	const handleScrollNext = useCallback((node) => {
		
		if (node.target.nodeName === 'BUTTON') {
			let list = node.target.previousSibling || [];
			//console.log(list.scrollLeft);
			
			list.scrollLeft += 800;
			scrollRef.current = list;
			
		}
		
	},[])

	const handleScrollPre = useCallback((node) => {
		
		if (node.target.nodeName === 'BUTTON') {
			let list = node.target.nextElementSibling || [];
			//console.log(list.scrollLeft);
			
			list.scrollLeft -= 800;
			scrollRef.current = list;
			
 
		}
	
	},[])

	const setRef = useCallback((node) => {
		if (node) {
			node.scrollLeft = 245;
		}
		scrollRef.current = node;
	             
	 },[]) 
	
	
 	return (
 		<header className="main mt-60 mx-auto xl:-mx-2 w-full py-40 px-10 text-white">
			<h1 className="heading capitalize font-black text-5xl">movies</h1>
        	<p className="info w-auto xl:w-1/3 text-lg mt-6 mb-32 text-left">
				Movies move us like nothing else can, whether they're scary, funny, dramatic, 
				romantic or anywhere in-between. So many titles, so much to experience.</p>
				{ filterByType.length && filterByType.map((item, index) => 
				<div key={index}>	
					<h1 className="movie-category text-lg font-medium mb-10 ml-6 capitalize">{item}</h1>
					<div className="movie-list relative flex items-center my-10 xl:my-20">
						<button className="pre-btn" onClick={handleScrollPre}>
							<img src={turnleft} alt="pre-btn"/>	
						</button>
						<div ref={setRef} className="movie-container">
							{ item && Array.from(shows.map(it => it.type === item ? (
								<div className="movie w-auto xl:w-72 flex-none items-center opacity-50 hover:opacity-100" key={it.id} onClick={() => handleToDetail(it.id)}>
									<img className="movie-image transform" src={it.image.medium} alt={it.name}/>
									<p className="movie-title capitalize h-12 overflow-hidden text-center">{it.name}</p>
								</div>	
							): ('')	 
							))}
						</div>
						<button className="nxt-btn" onClick={handleScrollNext}>
							<img src={turnright} alt="nxt-btn"/>		
						</button>
					</div>
				</div>
				)
			}
				
 		</header>
 	)
	
}


export default Header;
