import { Placeholder } from "../../ui";
import "./content.css";
export default function Content() {
  return (
    <div className="content">
      <div className="billboard-row">
        <Placeholder
          style={{ width: "100%" }}
          placeholderText="Billboard will be placed here, refactor me into a component"
        ></Placeholder>
      </div>
    </div>
  );
}
