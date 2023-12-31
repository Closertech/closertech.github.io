import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import './Navbar.css';

function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	return (
		<header>
			<div className="logos">
				<img src="./logo.png" className="logo" alt="" />
				<div className="linearize">
					<p>backed by</p>
					<img src="./100x.png" className="backed" alt="" />
				</div>
			</div>
			<nav ref={navRef}>
				<a href="#partners">PARTNERS</a>
				<a href="#collection">COLLECTION</a>
				<a href="#aboutus">ABOUT US</a>
				<a href="#download">DOWNLOAD</a>
				<a href="#countactus">CONTACT US</a>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
	);
}

export default Navbar;