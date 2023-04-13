import { useRef } from "react";
// import { FaBars, FaTimes } from "react-icons/fa";
import './Landing.css';
import { Link } from "react-router-dom";
function Navbar() {
	const navRef = useRef();

	

	return (
	
	<>
	   <div className="up">
		
		<h2>Subject Registration System</h2>
		<Link to='/Login'>
		<button className="button">Logout</button>
		</Link>
		<Link to='/addsub'>
		{/* <button className="button">Logout</button> */}
		Add Subject
		</Link>
		</div>
		
	
	<br />
	<br />
	<br />
	<br />
	<div className='flex'>
		<div className='cardo'>
			<img
				 src='https://cdn.iconscout.com/icon/premium/png-256-thumb/check-server-status-success-mark-46285.png'
				className='cardo-img'
				alt=''
			/>
			<h3>View Status</h3>
			<p />
			{/* <button onclico='' className='btn'>
  Open
</button> */}

			<Link to='/Status'>
			<button type="button" class="btn btn-outline-primary mt-5">View</button>
			</Link>
		</div>
		<div className='cardo'>
			<img
				src='https://img.icons8.com/color/512/man_reading_a_book.png'
				className='cardo-img'
				alt=''
			/>
			<h3> Register </h3>
			<p />
			<Link to='/Subregister'>
			<button type="button" class="btn btn-outline-primary mt-5">View</button>
			</Link>
		</div>

		<div className='cardo'>
			<img
				src='https://cdn.iconscout.com/icon/premium/png-128-thumb/student-profile-2788445-2311042.png'
				className='cardo-img'
				alt=''
			/>
			<h3>Student Profile</h3>
			<p />
			<Link to='/Profile'>
			<button type="button" class="btn btn-outline-primary mt-3">View</button>
			</Link>
		</div>


	</div>
</>
		
	);
}

export default Navbar;