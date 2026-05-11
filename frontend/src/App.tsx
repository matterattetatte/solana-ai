import Presentation from "./views/Presentation";
import Demo from "./views/Demo";

function App() {
  const path = window.location.pathname.replace('/solana-ai/', '/')

  switch (path) {
    case "/demo":
      return <Demo />;

    case "/":
    default:
      return <Presentation />;
  }
}

export default App;
