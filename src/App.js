import { CustomButton } from "./features/ui";
export function App() {
  function handleClick(i) {
    console.log("button clicked");
  }
  return (
    <>
      <h1> Hello World! </h1>
      <div>
        <CustomButton onClick={handleClick}>My custom button</CustomButton>
      </div>
    </>
  );
}
