import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
	PiGithubLogoDuotone,
	PiLinkedinLogoDuotone,
	PiTiktokLogoDuotone,
} from "react-icons/pi";

type Props = {};

const Footer = (props: Props) => {
	return (
		<footer className="flex justify-around h-fit py-4 pb-10 bg-blue-900 text-white">
			<section className="flex flex-col items-center gap-2">
				<h4 className="font-semibold">Socials</h4>
				<div className="flex gap-4 py-10">
					<Link
						href="https://github.com/kin-cunico"
						target="_blank"
						className="flex flex-col items-center hover:text-red-400"
					>
						<PiGithubLogoDuotone
							className="text-3xl"
							name="github"
						/>
						<label
							htmlFor="github"
							className="cursor-pointer"
						>
							GitHub
						</label>
					</Link>
					<Link
						href="https://linkedin.com/kincunicoen"
						target="_blank"
						className="flex flex-col items-center hover:text-red-400"
					>
						<PiLinkedinLogoDuotone
							className="text-3xl"
							name="linkedin"
						/>
						<label
							htmlFor="linkedin"
							className="cursor-pointer"
						>
							Linkedin
						</label>
					</Link>
					<Link
						href="/"
						target="_blank"
						className="flex flex-col items-center hover:text-red-400"
					>
						<PiTiktokLogoDuotone
							className="text-3xl"
							name="tiktok"
						/>
						<label
							htmlFor="tiktok"
							className="cursor-pointer"
						>
							TikTok
						</label>
					</Link>
				</div>
				<Link
					href="https://kincunico.dev"
					className="font-semibold  hover:text-red-400"
				>
					Developed by Kin Cunico
				</Link>
				<p className="text-sm">All rights reserved 2023</p>
			</section>
			<section className="flex flex-col items-center">
				<form className="flex flex-col items-center gap-2">
					<h4
						className="font-semibold"
						id="contact"
					>
						Contact
					</h4>
					<label htmlFor="name">Name:</label>
					<input
						id="name"
						placeholder="your name"
					/>
					<label htmlFor="message">Message:</label>
					<textarea
						id="message"
						placeholder="your query"
						className="h-40 w-96"
					/>
					<button
						type="submit"
						className="w-40 h-10 bg-slate-700 text-white font-semibold"
					>
						Submit
					</button>
				</form>
			</section>
			<section className="flex flex-col items-center gap-4">
				<h4
					className="font-semibold "
					id="donate"
				>
					Donate
				</h4>
				<form
					action="https://www.paypal.com/donate"
					method="post"
					target="_top"
				>
					<input
						type="hidden"
						name="hosted_button_id"
						value="ETJV6RLQ6L2R2"
					/>
					<input
						type="image"
						src="https://www.paypalobjects.com/en_US/GB/i/btn/btn_donateCC_LG.gif"
						name="submit"
						title="PayPal - The safer, easier way to pay online!"
						alt="Donate with PayPal button"
						formTarget="_blank"
					/>
				</form>
			</section>
		</footer>
	);
};

export default Footer;
