import { Route, Routes } from "react-router-dom";
import { ROUTES } from "./app/routes";
import Layoute from "./app/Layout";

function App() {
  return (
    <Layoute>
      <Routes>
        {ROUTES.map(({ path, component }) => (
          <Route path={path} element={component} />
        ))}
      </Routes>
    </Layoute>
  );
}

export default App;
