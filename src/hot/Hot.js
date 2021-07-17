import Icon from "@mdi/react";
import { mdiChevronRight, mdiHeartOutline, mdiHeart } from "@mdi/js";
import "./Hot.css";

export default function Hot() {
  return (
    <div className="hot-wrap">
      <h1>What's Hot!</h1>
      <div className="albums">
        <div className="head">
          <h3>Albums</h3>{" "}
          <button>
            View All <Icon path={mdiChevronRight} size={1} />
          </button>
        </div>
        <div className="album-list">
          <div className="album-img">
            <div className="img-holder">
              <div className="in-img" alt="" />
            </div>
            <div className="details">
              <p>
                <span>Dream bed</span>
                <span>
                  <Icon path={mdiHeartOutline} size={1} />
                </span>
              </p>
              <p>
                <span className="mark-color">Powerful</span>
                <span>1.3k</span>
              </p>
            </div>
          </div>

          <div className="album-img">
            <div className="img-holder">
              <div className="in-img" alt="" />
            </div>
            <div className="details">
              <p>
                <span>Faded</span>
                <span>
                  <Icon path={mdiHeartOutline} size={1} />
                </span>
              </p>
              <p>
                <span className="mark-color">Alan Walker</span>
                <span>1.4k</span>
              </p>
            </div>
          </div>
          <div className="album-img">
            <div className="img-holder">
              <div className="in-img" alt="" />
            </div>
            <div className="details">
              <p>
                <span>Hate Me</span>
                <span>
                  <Icon path={mdiHeart} size={1} color="#f68126" />
                </span>
              </p>
              <p>
                <span className="mark-color">Ellie Goulding</span>
                <span>1.6k</span>
              </p>
            </div>
          </div>
        </div>
      <div className="between">
        <Icon path={mdiChevronRight} size={2} />
      </div>
      </div>
      <div className="albums">
        <div className="head">
          <h3>Singles & EPs</h3>{" "}
          <button>
            View All <Icon path={mdiChevronRight} size={1} />
          </button>
        </div>
        <div className="album-list">
          <div className="album-img">
            <div className="img-holder">
              <div className="in-img" alt="" />
            </div>
            <div className="details">
              <p>
                <span>Let's Dance</span>
                <span>
                  <Icon path={mdiHeartOutline} size={1} />
                </span>
              </p>
              <p>
                <span className="mark-color">Bowie</span>
                <span>1.3k</span>
              </p>
            </div>
          </div>
          <div className="album-img">
            <div className="img-holder">
              <div className="in-img" alt="" />
            </div>
            <div className="details">
              <p>
                <span>Bad Romance</span>
                <span>
                  <Icon path={mdiHeartOutline} size={1} />
                </span>
              </p>
              <p>
                <span className="mark-color">Rihanna</span>
                <span>1.3k</span>
              </p>
            </div>
          </div>
          <div className="album-img">
            <div className="img-holder">
              <div className="in-img" alt="" />
            </div>
            <div className="details">
              <p>
                <span>Fly</span>
                <span>
                  <Icon path={mdiHeartOutline} size={1} />
                </span>
              </p>
              <p>
                <span className="mark-color">Coldplay</span>
                <span>1.6k</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
