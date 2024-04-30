import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./pages/AppLayout";
import PostPage from "./pages/PostPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="post" element={<AppLayout />} />
        <Route path="post/id" element={<PostPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
