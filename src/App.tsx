import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./pages/AppLayout";
import HomePage from "./components/HomePage";
import Post from "./components/Post";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/post" element={<AppLayout />}>
          <Route index element={<HomePage />} />
          <Route path="id" element={<Post />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
