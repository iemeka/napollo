import Icon from "@mdi/react";
import "./Footer.css";
import { mdiFacebook,mdiTwitter,mdiInstagram} from "@mdi/js";

export default function Footer() {
  return (
    <div className="foot-wrap">
      <div className="first">
        <div className="logo"></div>
        <p>&copy; 2020 Napollo</p>
        <ul>
          <li>Legal</li>
          <li>Privacy</li>
          <li>Cookies</li>
        </ul>
      </div>
      <div className="second">
        <ul>
          <li>
            <h3>Napollo</h3>
          </li>
          <li>About</li>
          <li>Sign Up</li>
          <li>Forgot Password</li>
          <li>Contact</li>
        </ul>
        <ul>
          <li>
            <h3>Artist Membership</h3>
          </li>
          <li>About</li>
          <li>Sign Up</li>
          <li>Contact</li>
          <li>Forgot Password</li>
          <li>Contact</li>
        </ul>
        <ul>
          <li>
            <h3>Napollo</h3>
          </li>
          <li>About</li>
          <li>Sign Up</li>
          <li>Forgot Password</li>
          <li>Contact</li>
        </ul>
        <ul>
          <li>
            <h3>Napollo</h3>
          </li>
          <li>About</li>
          <li>Sign Up</li>
          <li>Forgot Password</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="third">
        <ul>
          <li>
            <h3>Follow Us</h3>
          </li>
          <li>
            <Icon size={1} path={mdiFacebook} /> <Icon size={1} path={mdiTwitter}/> <Icon size={1} path={mdiInstagram} />
          </li>
          <li>Download App</li>
          <li className="img">
          <div className="img-apple"></div>
          <div className="img-google"></div>
          </li>
        </ul>
      </div>
    </div>
  );
}
