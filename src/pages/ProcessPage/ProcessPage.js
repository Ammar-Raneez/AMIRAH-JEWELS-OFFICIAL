import './ProcessPage.css';
import ProcessStep from './ProcessStep/ProcessStep';
import { Fade } from 'react-awesome-reveal';

function ProcessPage() {
	return (
		<div className="processPage">
			{/* title */}
			<Fade cascade direction="right" triggerOnce>
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
			</Fade>

			{/* steps components */}
			<div className="processPage__steps">
				<ProcessStep
					img="process/sketch.png"
					stepNo="1"
					images={["process/sketch.png", "process/ring.png", "process/factory.png", "process/polishing.png"]}
					stepName="The Sketch"
					description="Sketches are created to illustrate ideas which helps to express scale, shape and design options. Sketches develop an overall direction, and as setting styles are considered, shapes and forms are explored and a design emerges"
					reflect={false}
				/>
				<ProcessStep
					img="process/ring.png"
					stepNo="2"
					images={["process/sketch.png", "process/ring.png", "process/factory.png", "process/polishing.png"]}
					stepName="The Model"
					description="Once the jewelry design is approved, it is being
					translated into a three dimensional model using
					computer aided design (CAD). This enables the
					customer to view the jewelry three
					dimensionally before it is cast."
					reflect={true}
				/>
				<ProcessStep
					img="process/factory.png"
					stepNo="3"
					images={["process/sketch.png", "process/ring.png", "process/factory.png", "process/polishing.png"]}
					stepName="Workshop"
					description="Craftsmen use traditional skills and techniques
					to complete any details of the jewelry design,
					including engraving and setting gemstones."
					reflect={false}
				/>
				<ProcessStep
					img="process/polishing.png"
					stepNo="4"
					images={["process/sketch.png", "process/ring.png", "process/factory.png", "process/polishing.png"]}
					stepName="Final Touches"
					description="Piece of jewelry is finished and it only needs a
					light final polish to bring out the luster and
					shine of the gold. Usually done using a soft
					cotton cloth and buffing the piece by hand,
					making sure that all the details and highlights
					shine."
					reflect={true}
				/>
			</div>
		</div>
	);
}

export default ProcessPage;
