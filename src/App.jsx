import "./index.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { SessionProvider } from "../src/router/SessionContext"; // Import the SessionProvider
import Home from "./components/Home";
import Login from "./components/Login";
import Privacy from "./components/Privacy";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <main className="overflow-x-hidden">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <BrowserRouter>
        <SessionProvider>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/privacy" element={<Privacy />} />
          </Routes>
        </SessionProvider>
      </BrowserRouter>
    </main>
  );
}

export default App;
