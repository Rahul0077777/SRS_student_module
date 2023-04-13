import { useRef } from "react";
// import { FaBars, FaTimes } from "react-icons/fa";
import './Navbar.css';
import { Link } from "react-router-dom";
function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};

	return (

		<header>
			<h3>SUBJECT REGSTRATION SYSTEM</h3>
			<nav ref={navRef}>
                <Link to="/Login">Login</Link>
				{/* <a href="/#">ADMIN LOGIN</a> */}
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					{/* <FaTimes /> */}
				</button>
			</nav>
			<button className="nav-btn" onClick={showNavbar}>
				{/* <FaBars /> */}
			</button>
		</header>
	);
}

export default Navbar;