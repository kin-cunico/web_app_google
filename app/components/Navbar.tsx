import Link from "next/link";
import React from "react";
import Image from "next/image";
import logo from "public/kings-maps-high-resolution-logo-white-on-transparent-background.png";

type Props = {};

const Navbar = (props: Props) => {
	const listClass =
		"text-white font-bold text-lg hover:text-red-300 ease-in-out";
	return (
		<nav
			className="bg-blue-900 h-28
		 w-full flex justify-around align-middle items-center"
		>
			<Image
				src={logo}
				alt="King's map of London logo"
				width={200}
			></Image>
			<ul className="flex justify-between gap-10">
				<Link
					href="/"
					className={listClass}
				>
					Home
				</Link>
				<Link
					href="/#eastlondon"
					className={listClass}
				>
					East London
				</Link>
				<Link
					href="/#westlondon"
					className={listClass}
				>
					West London
				</Link>
				<Link
					href="/#northlondon"
					className={listClass}
				>
					North London
				</Link>
				<Link
					href="/#southlondon"
					className={listClass}
				>
					South London
				</Link>
			</ul>
			<section className="flex gap-6 justify-around">
				<Link
					href="/#contact"
					className={listClass}
				>
					Contact
				</Link>
				<Link
					href="/#donate"
					className={listClass}
				>
					Donate
				</Link>
			</section>
		</nav>
	);
};

export default Navbar;
