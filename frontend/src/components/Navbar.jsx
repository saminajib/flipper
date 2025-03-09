import React from 'react';
import styles from '../styles/Navbar.module.css'

const Navbar = () => {
	return (
		<div className={`navbar bg-base-100 sticky top-0 px-20 py-5 ${styles.navColor}`}>
			<div className="navbar-start">
				<div className="dropdown">
					<div
						tabIndex={0}
						role="button"
						className="btn btn-ghost lg:hidden"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-5 w-5"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							{' '}
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M4 6h16M4 12h8m-8 6h16"
							/>{' '}
						</svg>
					</div>
					<ul
						tabIndex={0}
						className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
					>
						<li>
							<a>Pricing</a>
						</li>
						<li>
							<a>Features</a>
						</li>
						<li>
							<a>Platforms</a>
						</li>
						<li>
							<a>FAQ</a>
						</li>
					</ul>
				</div>
				<a className="btn btn-ghost text-3xl">SocialStream</a>
			</div>
			<div className="navbar-center hidden lg:flex">
				<ul className="menu menu-horizontal px-1">
					<li>
						<a className="text-3xl">Pricing</a>
					</li>
					<li>
						<a className="text-3xl">Features</a>
					</li>
					<li>
						<a className="text-3xl">Platforms</a>
					</li>
					<li>
						<a className="text-3xl">FAQ</a>
					</li>
				</ul>
			</div>
			<div className="navbar-end">
				<a className="btn btn-ghost btn-lg text-3xl">Log in</a>
				<a className="btn btn-lg btn-secondary border-none text-white text-3xl">Sign Up</a>
			</div>
		</div>
	);
};

export default Navbar;
