export default function CustomButton({ children, ...attributes }) {
  return (
	//TODO Add className and include css to customize the default button template
    <button type="button" {...attributes}>
      {children}
    </button>
  );
}
