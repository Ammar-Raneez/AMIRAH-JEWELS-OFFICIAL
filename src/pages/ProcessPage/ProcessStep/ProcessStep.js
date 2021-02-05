import './ProcessStep.css';
import { Fade } from 'react-awesome-reveal';

function ProcessStep({ img, stepNo, stepName, description, reflect }) {
	return !reflect ? (
		<>
			<div className="processStep">
				<img src={img} alt="" />
				<Fade>
					<div className="processStep__description">
						<p>{description}</p>
					</div>
				</Fade>
				<div className="processStep__stepName">
					<p>Step {stepNo}:</p>
					<p>{stepName}</p>
				</div>
			</div>
		</>
	) : (
		<>
			<div className="processStepReflect">
				<img src={img} alt="" />
				<Fade>
					<div className="processStep__descriptionReflect">
						<p>{description}</p>
					</div>
				</Fade>
				<div className="processStep__stepNameReflect">
					<p>Step {stepNo}:</p>
					<p>{stepName}</p>
				</div>
			</div>
		</>
	);
}

export default ProcessStep;
