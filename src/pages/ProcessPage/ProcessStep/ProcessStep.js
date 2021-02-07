import './ProcessStep.css';
import { Fade } from 'react-awesome-reveal';
// import { useEffect, useState } from 'react';

function ProcessStep({ img, stepNo, stepName, description, reflect, images=[] }) {
	// const [currentImage, setCurrentImage] = useState(images[0]);

	// useEffect(() => {
	// 	const timer = setInterval(() => {
	// 		const randomClass = allImageClasses[Math.floor(Math.random() * allImageClasses.length)];
		// setCurrentImage(randomImage);
	// 		document.getElementsByClassName(randomClass)[0].setS
	// 	}
	// 	, 2000)
	// 	return () => clearInterval(timer);
	// }, [])

	return !reflect ? (
		<>
			<div className="processStep">
				{images.length === 0 ? (
					<img src={img} alt="" />
				) : (
					<div style={{position: 'relative', height: '50vw'}}>
						<img className="processStep__firstImage" style={{position: 'absolute'}} src={images[0]} />
						<img className="processStep__secondImage" style={{position: 'absolute'}} src={images[1]} />
						<img className="processStep__thirdImage" style={{position: 'absolute'}} src={images[2]} />
					</div>
				)}
				{/* {images.length === 0 ? <img src={img} alt="" /> : <img src={currentImage} alt="" />} */}
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
					<img src={img} alt="" />
				) : (
					<div style={{position: 'relative', height: '50vw'}}>
						<img className="processStep__firstImage" style={{position: 'absolute', left: '-53vw'}} src={images[0]} />
						<img className="processStep__secondImage" style={{position: 'absolute', left: '-53vw'}} src={images[1]} />
						<img className="processStep__thirdImage" style={{position: 'absolute', left: '-53vw'}} src={images[2]} />
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
