import { TitleDisplayRow, Billboard } from "../../movie";
import "./content.css";

export default function Content() {
  return (
    <div className="content">
      <Billboard />
      <TitleDisplayRow />
      <TitleDisplayRow />
    </div>
  );
}
