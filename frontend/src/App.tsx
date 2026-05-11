import { useEffect, useState } from "react";
import Presentation from "./views/Presentation";
import Demo from "./views/Demo";

function App() {
  const [view, setView] = useState("presentation");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);

    const currentView = params.get("view");

    setView(currentView || "presentation");
  }, []);

  console.log("Current view:", view); 

  if (view === "demo") {
    return <Demo />;
  }

  return <Presentation />;
}

export default App;
