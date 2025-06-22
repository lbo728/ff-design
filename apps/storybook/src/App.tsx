import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Button } from "@ff-design/react/components/button";

function App() {
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <Button variant="default" size="default" label="Click me" />
    </>
  );
}

export default App;
