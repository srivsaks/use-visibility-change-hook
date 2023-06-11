import { useEffect, useState } from "react";
import "./styles.css";
import useVisibilityChange from "./useVisibilityChange";
export default function App() {
  const tabSwitched = useVisibilityChange();
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (tabSwitched) setCount((prev) => prev + 1);
  }, [tabSwitched]);
  return (
    <div className="App">
      <div>Tab switched {count} times</div>
    </div>
  );
}
