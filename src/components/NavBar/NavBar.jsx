import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
	const links = [
		{
			label: "Home",
			route: "/",
		},
		{
			label: "Personajes",
			route: "/personajes",
		},
	];
	return (
		<header
			aria-label="Site Header"
			className="border-b border-gray-100 bg-slate-950"
		>
			<div className="mx-auto flex h-16 max-w-screen-2xl items-center justify-between sm:px-6 lg:px-8">
				<div className="flex items-center gap-4">
					<Link to="/" className="flex">
						<span className="sr-only">Logo</span>
						<span className="h-10 w-32">
							<img
								src="https://th.bing.com/th/id/R.15ff9543abf29569625b257ca97d8839?rik=6MdE8w7J1BRrIQ&riu=http%3a%2f%2f1000logos.net%2fwp-content%2fuploads%2f2017%2f08%2fMarvel-Logo.png&ehk=YCN0yf5O%2fniK8e5zsSbDxVfe98%2bovf3GVI1T2aNwQFk%3d&risl=&pid=ImgRaw&r=0"
								alt="logo"
								style={{ width: "90px", height: "40px" }}
							/>
						</span>
					</Link>
					<nav
						aria-label="Site Nav"
						className="hidden lg:flex lg:gap-4 lg:text-xs lg:font-bold lg:uppercase lg:tracking-wide lg:text-gray-500 ml-6"
					>
						{links.map(({ label, route }) => (
							<li
								className="block h-16 border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-yellow-500 text-yellow-600"
								key={route}
							>
								<Link to={route}>{label}</Link>
							</li>
						))}
					</nav>
				</div>

				<div className="flex flex-1 items-center justify-end gap-8">
					<div className="flex items-center">
						<div className="flex items-center border-x border-gray-100">
							<span className="border-e border-e-gray-100">
								<a
									href="/cart"
									className="grid h-16 w-16 place-content-center border-b-4 border-transparent hover:border-red-700"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke-width="1.5"
										stroke="currentColor"
										className="w-6 h-6 text-yellow-500"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
										/>
									</svg>

									<span className="sr-only">Notifications</span>
								</a>
							</span>

							<span className="border-e border-e-gray-100">
								<a
									href="/account"
									className="grid h-16 w-16 place-content-center border-b-4 border-transparent hover:border-red-700"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke-width="1.5"
										stroke="currentColor"
										className="w-6 h-6 text-yellow-600"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z"
										/>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
										/>
									</svg>

									<span className="sr-only"> Settings </span>
								</a>
							</span>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};

export default NavBar;
