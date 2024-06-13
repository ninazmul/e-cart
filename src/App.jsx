import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Page/Home";
import Footers from "./components/Footers";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footers />
      </BrowserRouter>
    </>
  );
}
