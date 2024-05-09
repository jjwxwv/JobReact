import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./pages/AppLayout";
import HomePage from "./components/HomePage";
import Post from "./components/Post";
import CompanyInfo from "./components/CompanyInfo";
import LoadingPromise from "./components/LoadingPromise";

function App() {
  return (
    <BrowserRouter>
    <LoadingPromise/>
      <Routes>
        <Route path="/post" element={<AppLayout />}>
          <Route index element={<HomePage />} />
          <Route path=":id" element={<Post />} />
        </Route>
        <Route path="/company" element={<AppLayout />}>
          <Route path=":id" element={<CompanyInfo />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
