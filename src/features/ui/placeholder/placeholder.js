import CustomButton from "../customButton/customButton";

export default function Placeholder({placeholderText = 'Placeholder'}){
	return <CustomButton>{placeholderText}</CustomButton>
}