import { Paper } from "@material-ui/core";
import "./Gem.css";

function Gem({ viewMoreUrl, cardImage }) {
  return (
    <Paper className="gem">
      <a href={viewMoreUrl}>
        <img src={cardImage} alt="" />
      </a>
    </Paper>
  );
}

export default Gem;
