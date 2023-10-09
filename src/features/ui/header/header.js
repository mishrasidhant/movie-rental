import { Placeholder } from "../../ui";
import logo from "../../../assets/logo-cineema-myke-simon-small.jpg?width=100";
import "./header.css";

export default function Header() {
  return (
    <div className="header-container">
      <a href="#default" className="logo">
        MovieRental
      </a>
      <ul>
        <li className="navigation-menu">
          <a className="menu-trigger" href="#browse">
            Browse
          </a>
        </li>
        <li className="navigation-tab">
          <a href="#default">Home</a>
        </li>
        <li className="navigation-tab">
          <a href="#default">Movies</a>
        </li>
        <li className="navigation-tab">
          <a href="#default">My List</a>
        </li>
      </ul>
      <div className="secondary-navigation">
        <Placeholder placeholderText="Secondary Navigation Menu"></Placeholder>
      </div>
    </div>
  );
}
