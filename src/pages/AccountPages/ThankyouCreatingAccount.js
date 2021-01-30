import { Link, useHistory } from 'react-router-dom';
import './ThankyouCreatingAccount.css';

function ThankyouCreatingAccount() {
    const history = useHistory();

	return (
		<div className="thankingPage">
			{/* jewel image */}
			<div className="thankingPage__firstJewel">
				<img src="purple-sapphire.png" alt="" />
			</div>
			{/* form */}
			<div className="thankingPage__body">
				<h1>THANK YOU FOR CREATING AN ACCOUNT</h1>

				<p>You have Successfully created a Amirah Gems account.</p>

				<button onClick = {() => history.replace("/")}> 
					BACK TO HOMEPAGE
				</button>
			</div>

			{/* jewel image */}
			<div className="thankingPage__lastJewel">
				<img src="purple-sapphire.png" alt="" />
			</div>
		</div>
	);
}

export default ThankyouCreatingAccount;
