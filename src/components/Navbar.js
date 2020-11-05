import React from 'react';

const Navbar = ({serachPost}) => {

 	return(
		<div className="Navbar sticky top-0"> 
		<ul className="flex justify-around bg-indigo-500 p-2">
			<li className="text-3xl font-semibold text-white cursor-default">TVMaze</li>
			<li className="mt-4">
			<form className="mb-2">
				<div className="flex items-center border-b border-white">
				<input className="appearance-none bg-transparent border-none w-full text-white font-semibold text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
				 type="text"  placeholder="Search..." onChange={(e) => serachPost(e.target.value)}/>
				</div>
			</form>
			</li>
		</ul>
		</div>
		)
 	
}

export default Navbar;