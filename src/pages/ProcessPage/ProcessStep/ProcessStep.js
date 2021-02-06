import './ProcessStep.css';
import { Fade } from 'react-awesome-reveal';
import { useEffect, useState } from 'react';

function ProcessStep({ img, stepNo, stepName, description, reflect, images=[] }) {
	const [currentImage, setCurrentImage] = useState(images[0]);

	useEffect(() => {
		const timer = setInterval(() => {
			const randomImage = images[Math.floor(Math.random() * images.length)];
			setCurrentImage(randomImage);
		}
		, 2000)
		return () => clearInterval(timer);
	}, [])

	return !reflect ? (
		<>
			<div className="processStep">
				{images.length === 0 ? <img src={img} alt="" /> : <img src={currentImage} alt="" />}
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
				<img src={currentImage} alt="" />
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
