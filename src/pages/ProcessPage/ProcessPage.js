import './ProcessPage.css'

import ProcessStep from "./ProcessStep/ProcessStep";

function ProcessPage() {
	return (
		<div className="processPage">
			{/* title */}
			<h1>bringing unique jewelry designs to life</h1>

			{/* description */}
			<p>
				Our years of experience and combined talents allow us to transform an idea into a beautiful jewelry creation. It
				is important that we provide communication throughout the entire jewelry making process to maintain a strong
				relationship with our customer.
			</p>

			{/* call buttons */}
            <div className="processPage__callBtn">
                <button>SCHEDULE A CALL</button>
                <button>CALL US NOW</button>
            </div>

			{/* steps components */}
            <div className="processPage__steps">
                <ProcessStep />
            </div>
		</div>
	);
}

export default ProcessPage;
