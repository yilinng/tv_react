import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

const Navbar = ({serachPost}) => {

	const navigate = useNavigate();
	const [inputText, setInputText] = useState('')

	useEffect(() => {
		serachPost(inputText)
	},[inputText, serachPost])

 	return(
		<nav className="navbar flex justify-between">
			<span className="text-lg xl:text-4xl font-semibold text-white cursor-pointer" onClick={() => navigate('/')}>TVMaze</span>	
			<div className="join-box">
				<form className="searchbar">
					<button className="searchicon" type="button" onClick={() => navigate('/' + inputText)}>
						<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
						</svg>	
					</button>
					<input type="text" value={inputText} onChange={(e) =>setInputText(e.target.value)}/>
					<button className="clearicon" type="button" onClick={() => setInputText('')}>
						<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
						</svg>
					</button>		
				</form>
				<button className="btn join-btn bg-red-700 text-gray-200 text-base xl:text-lg w-12 xl:w-24 h-auto xl:h-10 border-gray-100 hidden xl:block">sign in</button>
			</div>	 
		</nav>
		)
 	
}

export default Navbar;