import { Route, Routes } from "react-router-dom";
import Heder from "./app/components/Header";
import { ROUTES } from "./app/routes";

function App() {
  return (
    <div className="App">
      <Routes>
        {ROUTES.map(({ path, component }) => (
          <Route path={path} element={component} />
        ))}
      </Routes>
    </div>
  );
}

export default App;
