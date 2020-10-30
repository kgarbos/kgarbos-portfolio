import React from 'react'
import {Link} from 'react-scroll'

const Desktop = () => {
	return (
		<nav>
			<ul>
				<li>
					<Link 
							to='about'
							smooth={true} 
							offset={-100}
							duration={500}
					>about</Link>
				</li>
			</ul>
			<ul>
				<li>
					<Link 
							to='projects'
							smooth={true} 
							offset={-100}
							duration={500}
					>projects</Link>
				</li>
			</ul>
			<ul>
				<li>
					<Link 
							to='skills'
							smooth={true} 
							offset={-100}
							duration={500}
					>skills</Link>
				</li>
			</ul>
			<ul>
				<li>
					<Link 
							to='contact'
							smooth={true} 
							offset={-100}
							duration={500}
					>contact</Link>
				</li>
			</ul>
		</nav>
	)
}

export default Desktop