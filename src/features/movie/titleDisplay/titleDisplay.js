import {Slider} from '../../movie';
import './titleDisplay.css';

export default function TitleDisplayRow(){
	return (
      <div className="title-display-row">
        <h2 className="row-header">Row Header</h2>
        <Slider></Slider>
        <div className="row-container">
        </div>
      </div>
	)
}