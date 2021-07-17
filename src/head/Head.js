import Icon from "@mdi/react";
import "./Head.css";
import { mdiMenu,mdiMagnify ,mdiUpload} from "@mdi/js";

export default function Head() {
  return (
    <div className="head-wrap">
      <div className="left">
        <Icon path={mdiMenu} size={1.5} color="#fff" className="menu" />
        <div className="logo-holder"></div>
      </div>
      <div className="center">
        <input type="text" placeholder="Search for artistes, songs, albums" />
        <Icon path={mdiMagnify} size={1.2} className="search-icon" color="#888" />
      </div>
      <div className="right">
        <div className="img-apple"></div>
        <div className="img-google"></div>
        <button className="auth">SignUp/Login</button>
        <button className="upload"> <Icon path={mdiUpload} size={1} color="#fff" />Upload</button>
      </div>
    </div>
  );
}
