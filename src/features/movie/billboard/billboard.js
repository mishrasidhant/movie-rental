import logo from "../../../assets/logo-cineema-myke-simon-small.jpg";
import './billboard.css';

export default function Billboard(){
	return (
      <div className="billboard-row">
        <img
          src={logo}
          className="logo"
          alt="logo image showing cinema theater entrance"
        ></img>
      </div>
	);
}