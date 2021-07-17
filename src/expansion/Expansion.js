import Icon from "@mdi/react";
import "./Expansion.css";
import { mdiHeart } from "@mdi/js";

export default function Expansion() {
  return (
    <div className="expansion-wrap">
      <div className="in-wrap">
        <div className="title">
          <h1>Expansion Page</h1>
          <p>
            Discover artistes all around the world by their location via the
            expansion page. Also, get to know the top artistes in any lovation
            on the globe.
          </p>
        </div>
        <div className="body">
          <div className="row">
            <span>01</span>
            <div className="img"></div>
            <div className="details">
              <span style={{color:"white", marginBottom:"11px"}}>Lights Out</span>
              <span>ColdPlay</span>
            </div>
            <Icon path={mdiHeart} size={1} color="#252525" />
          </div>
          <div className="row">
            <span>02</span>
            <div className="img"></div>
            <div className="details">
              <span>Green Tuska</span>
            </div>
            <Icon path={mdiHeart} size={1} color="#f68126" />
          </div>
          <div className="row">
            <span>03</span>
            <div className="img"></div>
            <div className="details">
              <span>Bruno Mars</span>
            </div>
            <Icon path={mdiHeart} size={1} color="#252525" />
          </div>
          <div className="row">
            <span>04</span>
            <div className="img"></div>
            <div className="details">
              <span>Cardi</span>
            </div>
            <Icon path={mdiHeart} size={1} color="#252525" />
          </div>
        </div>
      </div>
    </div>
  );
}
