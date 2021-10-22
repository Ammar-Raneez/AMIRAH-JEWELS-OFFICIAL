import './ProcessStep.css';
import { Fade } from 'react-awesome-reveal';

function ProcessStep({ img, stepNo, stepName, description, reflect, images=[] }) {
	return !reflect ? (
		<>
			<div className="processStep">
				{images.length === 0 ? (
					<img src={img} alt="process" />
				) : (
					<div style={{position: 'relative', height: '50vw'}}>
						<img  alt="" className="processStep__firstImage" style={{position: 'absolute'}} src={images[0]} />
						<img  alt="" className="processStep__secondImage" style={{position: 'absolute'}} src={images[1]} />
						<img  alt="" className="processStep__thirdImage" style={{position: 'absolute'}} src={images[2]} />
					</div>
				)}
				<Fade delay={1000}>
					<div className="processStep__description">
						<p>{description}</p>
					</div>
				</Fade>
				<div className="processStep__stepName">
					<Fade cascade>
						<p>Step {stepNo}:</p>
						<p>{stepName}</p>
					</Fade>
				</div>
			</div>
		</>
	) : (
		<>
			<div className="processStepReflect">
				{images.length === 0 ? (
					<img alt="" src={img} />
				) : (
					<div style={{position: 'relative', height: '50vw'}}>
						<img  alt="" className="processStep__firstImage" style={{position: 'absolute', left: '-53vw'}} src={images[0]} />
						<img  alt="" className="processStep__secondImage" style={{position: 'absolute', left: '-53vw'}} src={images[1]} />
						<img  alt="" className="processStep__thirdImage" style={{position: 'absolute', left: '-53vw'}} src={images[2]} />
					</div>
				)}
				<Fade delay={1000}>
					<div className="processStep__descriptionReflect">
						<p>{description}</p>
					</div>
				</Fade>
				<div className="processStep__stepNameReflect">
					<Fade cascade>
						<p>Step {stepNo}:</p>
						<p>{stepName}</p>
					</Fade>
				</div>
			</div>
		</>
	);
}

export default ProcessStep;
