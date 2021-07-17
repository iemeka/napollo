import Icon from "@mdi/react";
import { mdiCheck } from "@mdi/js";
import "./Plan.css";
export default function Plan() {
  return (
    <div className="plan-wrap">
      <div>
        <h1>Choose Your Plan</h1>
      </div>
      <div className="free-pre">
        <div className="free">
          <div className="free1">
            <div className="free-img"></div>
            <h3>Free</h3>
            <p>Enjoy unlimited online music</p>
            <div className="line-one"></div>
          </div>
          <div className="free2">
            <p>
              <span>$7.99</span>/month
            </p>
            <p className="underline">Start with one month free trial</p>
            <p className="features">Features</p>
          </div>
          <div className="free3">
            <ul>
              <li>
                <Icon size={1} path={mdiCheck} className="check" />
                Online Listening
              </li>
              <li>
                <Icon size={1} path={mdiCheck} className="check" /> Reglular
                Audio
              </li>
              <li>
                <Icon size={1} path={mdiCheck} className="check" /> Offline Mode
              </li>
              <li>
                <Icon size={1} path={mdiCheck} className="check" /> 30 skips per
                day
              </li>
              <li>
                <Icon size={1} path={mdiCheck} className="check" /> With Ads
              </li>
            </ul>
          </div>

          <div className="act-btn">
            <button>Activate</button>
          </div>
        </div>
        <div className="premium">
          <div className="free1">
            <div className="free-img"></div>
            <h3>Premium</h3>
            <p>Napollo premium mode sounds better</p>
            <div className="line-one"></div>
          </div>
          <div className="free2">
            <p>
              <span>$7.99</span>/month
            </p>
            <p className="underline">Start with one month free trial</p>
            <p className="features">Features</p>
          </div>
          <div className="free3">
            <ul>
              <li>
                <Icon size={1} path={mdiCheck} className="check" />
                Offline Mode
              </li>
              <li>
                <Icon size={1} path={mdiCheck} className="check" /> High Quality
                Audio
              </li>
              <li>
                <Icon size={1} path={mdiCheck} className="check" /> NO Ads
              </li>
              <li>
                <Icon size={1} path={mdiCheck} className="check" /> Unlimited
                Skips
              </li>
              <li>
                <Icon size={1} path={mdiCheck} className="check" /> Offline Mode
              </li>
              <li>
                <Icon size={1} path={mdiCheck} className="check" /> High Quality
                Audio
              </li>
              <li>
                <Icon size={1} path={mdiCheck} className="check" /> NO Ads
              </li>
              <li>
                <Icon size={1} path={mdiCheck} className="check" /> Unlimited
                Skips
              </li>
            </ul>
          </div>

          <div className="act-btn">
            <button>Activate</button>
          </div>
        </div>
      </div>
    </div>
  );
}
