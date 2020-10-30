import React from 'react';
import './header.scss';
import Nav from '../Nav/nav';
import { motion } from 'framer-motion';

const Header = () => {
	return (
		<motion.div
			initial={{ y: -250}}
			animate={{ y: -10 }}
			transition={{ delay: 0.2, type: 'spring', stiffness: 120 }}
		>
			<header>
				<h1>Krzysztof Garbos</h1>
				<Nav />
			</header>
		</motion.div>
	)
}

export default Header