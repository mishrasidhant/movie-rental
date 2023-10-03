import { Placeholder } from "../../ui";
import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <Placeholder placeholderText="Logo"></Placeholder>
      <Placeholder placeholderText="Navigation Menu"></Placeholder>
      <Placeholder
        style={{ float: "right" }}
        placeholderText="Secondary Navigation Menu"
      ></Placeholder>
    </div>
  );
}
