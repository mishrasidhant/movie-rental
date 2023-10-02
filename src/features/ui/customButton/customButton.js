import "./customButton.css";

export default function CustomButton({ children, ...attributes }) {
  return (
    <button
      type="button"
      role="button"
      className="custom-button"
      {...attributes}
    >
      {children}
    </button>
  );
}
