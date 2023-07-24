import Image from "next/image";
import React from "react";
import heroImage from "public/pexels-nicole-rathmayr-220887.jpg";
import heroImage2 from "public/pexels-gashif-rheza-3276830.jpg";
import heroImage3 from "public/pexels-andrea-de-santis-11044046.jpg";
import Link from "next/link";

type Props = {};

const Hero = (props: Props) => {
	return (
		<main className="flex flex-col items-center pt-40 h-screen">
			<h1 className="text-4xl text-red-600 font-bold">
				Welcome to King&apos;s Maps
			</h1>
			<section className="flex gap-2 py-10 px-5 w-full align-middle justify-around h-full">
				<article className="flex flex-col w-96 align-middle justify-evenly text-justify">
					<h2 className="text-lg font-semibold">
						Discover London with our free tailored walking paths
					</h2>
					<p>
						Our walking paths have been designed so that you will enjoy every
						bit of London! Discover{" "}
						<Link
							className="text-red-500"
							href="/#eastlondon"
						>
							East London
						</Link>{" "}
						and its history, visiting all the most important bits like the
						Monument, the Tower Bridge, and the Sky Garden. <br />
						Maybe you wish to visit the museums and galleries in{" "}
						<Link
							className="text-red-500"
							href="/#westlondon"
						>
							West London.
						</Link>
						<br />
						Discover the Design Museum, the Battersea Arts Centre, and the
						Saatchi Gallery.
					</p>
					<p>
						You can also opt in for a private 2h guided tour, tailored for you
						or your group. If you wish to know more, pop in a message in our
						<span className="text-red-500">
							{" "}
							<Link href="/#contact">contact</Link>
						</span>{" "}
						form.
					</p>
					<ul className="flex flex-col gap-2">
						<h4 className="text-red-600 text-lg font-semibold">
							Prices for guided tours:
						</h4>
						<li>
							Adults: 40£<sup className="text-red-600">*</sup>
						</li>
						<li>
							Children(under 18): 20£<sup className="text-red-600">**</sup>
						</li>
						<div className="text-sm">
							<p>
								<sup className="text-red-600">*</sup>Maximum number of
								individuals is 10.
							</p>
							<p>
								<sup className="text-red-600">**</sup>Children must be
								accompanied by adults.
							</p>
							<p>
								Guided tours offered in English, Portuguese, Italian, or
								Japanese.
							</p>
						</div>
					</ul>
				</article>
				<section className="grid grid-flow-col grid-cols-2 w-fit">
					<Image
						src={heroImage2}
						alt="main section image of National History Musem"
						width={300}
						className="rounded-md"
					></Image>

					<Image
						src={heroImage3}
						alt="main section image of St Paul's Cathedral"
						width={300}
						className="rounded-md"
					></Image>
				</section>
				<button
					type="button"
					className="fixed bottom-72 right-8 text-white bg-blue-600 py-2 px-4 hover:bg-blue-900 rounded-md"
				>
					<Link href="/#contact">Contact</Link>
				</button>
			</section>
		</main>
	);
};

export default Hero;
