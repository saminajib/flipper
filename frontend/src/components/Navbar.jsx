import React from 'react';

const Navbar = () => {
	return (
		<div className="navbar bg-neutral">
			<div className="navbar-start" >
				<div className="flex-1">
					<a className="btn btn-ghost text-xl">Honestly</a>
				</div>
			</div>
			<div className="navbar-center">
				<ul className="menu menu-horizontal px-1">
					<li>
						<a>Mission</a>
					</li>
                    <li>
						<a>Browse</a>
					</li>
					<li>
						<a>Item 3</a>
					</li>
				</ul>
			</div>
			<div className="navbar-end">
				<div className="flex-none gap-2">
					<div className="dropdown dropdown-end">
						<div
							tabIndex={0}
							role="button"
							className="btn btn-ghost btn-circle avatar"
						>
							<div className="w-10 rounded-full">
								<img
									alt="Tailwind CSS Navbar component"
									src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
								/>
							</div>
						</div>
						<ul
							tabIndex={0}
							className="menu bg-primary text-primary-content menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
						>
							<li>
								<a className="justify-between">
									Profile
								</a>
							</li>
							<li>
								<a>Settings</a>
							</li>
							<li>
								<a>Logout</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
