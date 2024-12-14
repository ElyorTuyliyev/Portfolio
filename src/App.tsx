import { Route, Routes } from "react-router-dom";
import { ROUTES } from "./app/routes";
import Layout from "./app/Layout";

function App() {
  return (
    <Layout>
      <Routes>
        {ROUTES.map(({ path, component }) => (
          <Route path={path} element={component} />
        ))}
      </Routes>
    </Layout>
  );
}

export default App;
