import { CustomButton, Placeholder } from "../../ui";
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
      <div className="nav-element">
        <div className="search-box">
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              class="search-icon"
            >
              <path
                fill-rule="evenodd"
                d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
        </div>

      </div>
        {/* <Placeholder placeholderText="Secondary Navigation Menu"></Placeholder> */}
      </div>
    </div>
  );
}
