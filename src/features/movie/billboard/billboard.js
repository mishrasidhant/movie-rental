import { Placeholder } from '../../ui';
import './billboard.css';

export default function Billboard(){
	return (
      <div className="billboard-row">
        <Placeholder
          style={{ width: "100%", height: "350px" }}
          placeholderText="Billboard will be placed here, refactor me into a component"
        ></Placeholder>
      </div>
	);
}