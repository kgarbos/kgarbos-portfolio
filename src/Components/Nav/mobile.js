import React, { useState } from 'react'
import {Link} from 'react-scroll'
import './mobile.scss'

const Mobile = () => {
    const [menu, setMenu] = useState(false)
    return(
        <div className='mobile-main'>
					<p onClick={() => setMenu(!menu)}>&#9776;</p>
					{
						menu
						&&
						<nav className='mobile-nav'>
							<ul>
								<li>
									<Link
										to='about'
										className='link'
										onClick={() => setMenu(false)}
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
										className='link'
										onClick={() => setMenu(false)}
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
										className='link'
										onClick={() => setMenu(false)}
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
										className='link'
										onClick={() => setMenu(false)}
										smooth={true}
										offset={-100}
										duration={500}
									>contact</Link>
								</li>
							</ul>
						</nav>
					}
        </div>
    )
}

export default Mobile