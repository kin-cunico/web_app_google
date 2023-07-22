"use client";

import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import Link from "next/link";
import { useMemo, useState, useEffect } from "react";

interface Map {
	lat: Float32Array;
	lng: Float32Array;
	name: string;
}

export default function Map() {
	return <EastLondonMap />;
}

function EastLondonMap() {
	const paidClass = "text-red-500";
	const attractionList = "hover:text-red-400";
	return (
		<main className="flex h-screen flex-col align-middle justify-center items-center gap-4 p-10">
			<h2
				id="eastlondon"
				className="text-xl font-extrabold text-red-600"
			>
				East London route{" "}
			</h2>
			<p>5.7 miles || 9.2 km</p>
			<section className="flex gap-10">
				<ul className="flex flex-col gap-1">
					<h3 className="pb-2 text-red-600 text-lg font-semibold">
						Places you will visit:
					</h3>
					<li>
						<Link
							href="https://www.hrp.org.uk/tower-of-london/"
							target="_blank"
							className={attractionList}
						>
							<sup className={paidClass}>*</sup>Tower of London
						</Link>
					</li>
					<li>
						<Link
							href="https://boroughmarket.org.uk/"
							target="_blank"
							className={attractionList}
						>
							Borough Market
						</Link>
					</li>
					<li>
						<Link
							href="https://www.the-shard.com/"
							target="_blank"
							className={attractionList}
						>
							<sup className={paidClass}>*</sup>The Shard
						</Link>
					</li>
					<li>
						<Link
							href="https://www.tate.org.uk/visit/tate-modern"
							target="_blank"
							className={attractionList}
						>
							Tate Modern
						</Link>
					</li>
					<li>
						<Link
							href="https://www.shakespearesglobe.com/visit/"
							target="_blank"
							className={attractionList}
						>
							<sup className={paidClass}>*</sup>Shakespeare&apos;s The Globe
						</Link>
					</li>
					<li className={attractionList}>Millenium Bridge</li>
					<li>
						<Link
							href="https://www.stpauls.co.uk/"
							target="_blank"
							className={attractionList}
						>
							<sup className={paidClass}>***</sup>St. Paul&apos;s Cathedral
						</Link>
					</li>
					<li>
						<Link
							href="https://www.museumoflondon.org.uk/museum-london"
							target="_blank"
							className={attractionList}
						>
							<sup className={paidClass}>****</sup>Museum of London
						</Link>
					</li>
					<li className={attractionList}>London Bridge</li>
					<li>
						<Link
							href="https://www.themonument.info/"
							target="_blank"
							className={attractionList}
						>
							<sup className={paidClass}>*</sup>Monument
						</Link>
					</li>
					<li>
						<Link
							href="https://www.bankofengland.co.uk/museum"
							target="_blank"
							className={attractionList}
						>
							Bank of England Museum
						</Link>
					</li>
					<li>
						<Link
							href="https://skygarden.london/"
							target="_blank"
							className={attractionList}
						>
							<sup className={paidClass}>**</sup>Sky Garden
						</Link>
					</li>
					<li>
						<Link
							href="https://thegherkin.com/"
							target="_blank"
							className={attractionList}
						>
							The Gherkin
						</Link>
					</li>
					<li>
						<Link
							href="https://oldspitalfieldsmarket.com/"
							target="_blank"
							className={attractionList}
						>
							<sup className={paidClass}>*</sup>Old Spitafileds Market
						</Link>
					</li>
					<li>
						<Link
							href="https://vangoghexpo.com/london/"
							target="_blank"
							className={attractionList}
						>
							<sup className={paidClass}>*</sup>Van Gogh London Exhibit
						</Link>
					</li>
					<li>
						<Link
							href="https://www.whitechapelgallery.org/"
							target="_blank"
							className={attractionList}
						>
							<sup className={paidClass}>**</sup>Whitechapel Gallery
						</Link>
					</li>
					<li>
						<Link
							href="https://www.jacktherippermuseum.com/"
							target="_blank"
							className={attractionList}
						>
							<sup className={paidClass}>*</sup>Jack the Ripper Museum
						</Link>
					</li>
					<li>
						<Link
							href="https://www.towerbridge.org.uk/"
							target="_blank"
							className={attractionList}
						>
							<sup className={paidClass}>*</sup>Tower Bridge
						</Link>
					</li>
					<div className="text-xs">
						<p>
							<sup className={paidClass}>*</sup>payment required to enter
							attraction
						</p>
						<p>
							<sup className={paidClass}>**</sup>Free of charge if booked in
							advance
						</p>
						<p>
							<sup className={paidClass}>***</sup>Free of charge if visited on
							limited days and times
						</p>
						<p>
							<sup className={paidClass}>****</sup>Museum of London is closed
							for public entrace
						</p>
					</div>
				</ul>

				<div className="flex flex-col pb-2 gap-2">
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m72!1m12!1m3!1d9933.204454402336!2d-0.08779070936886477!3d51.507691501847745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m57!3e2!4m3!3m2!1d51.502316799999996!2d-0.0773842!4m5!1s0x48760335c895453f%3A0x116ff149df357cc9!2sJack%20The%20Ripper%20Museum!3m2!1d51.510806099999996!2d-0.0679123!4m5!1s0x48761cb55f4d9bcd%3A0x13ae934db13227cf!2sWhitechapel%20Gallery!3m2!1d51.5160864!2d-0.07011479999999999!4m5!1s0x48761d5b10ed1d05%3A0xf7d6aeebf57aa090!2sVan%20Gogh%20London%20Exhibit%3A%20The%E2%80%A6!3m2!1d51.519962299999996!2d-0.0740083!4m5!1s0x4876034d372b3ded%3A0x5c81b8a1a822fda8!2s30%20St%20Mary%20Axe%20(The%20Gherkin)!3m2!1d51.514491799999995!2d-0.0803065!4m5!1s0x487603549718414d%3A0x5688c8191d584d60!2sBank!3m2!1d51.513388!2d-0.0889145!4m5!1s0x48761b5508c1cbeb%3A0x407de2c1952a25e4!2sMuseum%20of%20London!3m2!1d51.517618299999995!2d-0.0967782!4m5!1s0x487604abcc128291%3A0xbd5ceafc2f514e1c!2sMillennium%20Bridge!3m2!1d51.509529099999995!2d-0.09854249999999999!4m5!1s0x4876035775cf660f%3A0x3128e7e59ca044b9!2sBorough%20Market!3m2!1d51.5055826!2d-0.0904808!4m3!3m2!1d51.5080441!2d-0.0766217!5e0!3m2!1sen!2suk!4v1690046686178!5m2!1sen!2suk"
						width="600"
						height="450"
						loading="lazy"
					></iframe>
					<Link
						href="https://goo.gl/maps/5rU3CjvQ8Rk4E5268"
						className="py-2 hover:text-red-200 self-center bg-slate-800 p-2 rounded-sm text-white w-40 h-10 flex justify-center items-center"
						target="_blank"
					>
						Get this route
					</Link>
				</div>
			</section>
		</main>
	);
}
