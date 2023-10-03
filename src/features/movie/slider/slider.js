import { Placeholder } from "../../ui";
import "./slider.css";
export default function Slider() {
  const renderedOutput = [
    "Main movie content will be displayed here for Movie: 1",
    "Main movie content will be displayed here for Movie: 2",
    "Main movie content will be displayed here for Movie: 3",
    "Main movie content will be displayed here for Movie: 4",
    "Main movie content will be displayed here for Movie: 5",
  ].map((placeholder) => (
    <div className="slider-item">
      <Placeholder
        style={{ width: "20%", height: "350px", float: "left" }}
        placeholderText={placeholder}
      ></Placeholder>
    </div>
  ));
  return (
    <div className="slider">
      {/* <span className="pagination-placeholder"></span> */}
      <div className="slider-content">{renderedOutput}</div>
      {/* <span className="handle-next"></span> */}
    </div>
  );
}
