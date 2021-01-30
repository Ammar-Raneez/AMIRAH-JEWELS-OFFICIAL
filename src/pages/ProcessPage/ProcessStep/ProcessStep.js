import './ProcessStep.css';

function ProcessStep({img, stepNo, stepName,description, reflect }) {
	return (
		<div className="processStep">
			<img src={img} alt="" />
			<div className="processStep__description">
				<p>
					{description}
				</p>
			</div>
			<div className="processStep__stepName">
				<p>Step {stepNo}:</p>
				<p>{stepName}</p>
			</div>
		</div>
	);
}

export default ProcessStep;
