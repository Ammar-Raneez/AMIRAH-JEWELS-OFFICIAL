import { useHistory } from 'react-router-dom';
import './ThankyouCreatingAccount.css';

function ThankyouCreatingAccount() {
	const history = useHistory();

	return (
		<div className="thankingPage">
			{/* form */}
			<div className="thankingPage__body">
				<h1>THANK YOU FOR CREATING AN ACCOUNT</h1>
				<p>You have Successfully created a Amirah Gems account.</p>
				<button onClick = {() => history.replace("/")}> 
					BACK TO HOMEPAGE
				</button>
			</div>
		</div>
	);
}

export default ThankyouCreatingAccount;
