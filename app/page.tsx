import Image from "next/image";
import Map from "./components/Maps";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col ">
			<Navbar />
			<Map />
			<Footer />
		</main>
	);
}
