import './RegisterPage.css'

function RegisterPage() {
	return (
		<div className="registerPage">
			{/* jewel image */}
			<img src="purple-sapphire.png" alt="" />

			{/* form */}
			<div className="registerPage__form">
				<h1>CREATE AN ACCOUNT</h1>

				<p>
					Save time during checkout, view your shopping bag and saved items from any device and access your order
					history.
				</p>

				<form className="registerPage__form">
					<div className="registerPage__formFirst">
						<input type="text" placeholder="First Name" />
						<input type="text" placeholder="Last Name" />
						<input type="email" placeholder="Email" />
					</div>
					<div className="registerPage__formSecond">
						<h5>Gender (Optional)</h5>
						<div className="registerPage__formSecondInputs">
							<input type="radio" name="gender" value="male" />
							<input type="radio" name="gender" value="female" />
						</div>
					</div>
					<div className="registerPage__formThird">
						<h5>Birthday (Optional)</h5>
						<div className="registerPage__formThirdInputs">
							<input type="number" name="month" placeholder="Month" />
							<input type="number" name="day" placeholder="Day" />
						</div>
					</div>
					<button>CREATE AN ACCOUNT</button>
				</form>
			</div>

			{/* jewel image */}
			<img src="purple-sapphire.png" alt="" />
		</div>
	);
}

export default RegisterPage;
