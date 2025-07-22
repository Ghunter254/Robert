import { Routes, Route } from "react-router-dom";
import "./index.css";
import { Toaster } from "sonner";
import Welcome from "./pages/welcome";

const App = () => {
  return (
    <main className="flex h-screen w-full">
      <Routes>
        <Route path="/" element={<Welcome />}></Route>
      </Routes>
      <Toaster />
    </main>
  );
};

// <Route element={<AuthLayout />}>
//   <Route path="/" element={<Login />} />
//   <Route path="/forgot-password" element={<ForgotPassword />} />
//   <Route path="/verify-email" element={<VerifyEmail />} />
//   <Route path="/new-password" element={<NewPassword />} />
// </Route>

export default App;
