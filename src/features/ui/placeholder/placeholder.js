import { CustomButton } from "../../ui";

export default function Placeholder({
  placeholderText = "Placeholder",
  ...attributes
}) {
  return <CustomButton {...attributes}>{placeholderText}</CustomButton>;
}
