import './ComingSoon.css';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';

function ComingSoon() {
	return (
		<div 
			className="comingSoon" 
			style={{ 
				background: "linear-gradient(0deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), url(logo.png)" ,
				backgroundRepeat: 'no-repeat',
				backgroundPosition: '165% 10%'
			}}
		>
			<div className="comingSoon__upper">
				<img alt="" src="image.png" />
			</div>
			<div className="comingSoon__lower">
				<div className="comingSoon__lowerLeft">
					<div className="comingSoon__lowerLeftUpper">
						<h1>COMING</h1>
					</div>
					<div className="comingSoon__lowerLeftLower">
						<h1>SOON<span>...</span></h1>
						<div className="comingSoon__lowerRight">
							<a rel="noreferrer" href="https://www.instagram.com/amirahgems/" target="_blank">
								<InstagramIcon />
							</a>
							<a rel="noreferrer" href="https://www.facebook.com/amirahgems" target="_blank">
								<FacebookIcon />
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ComingSoon;
