import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AppLayout from "./components/AppLayout";
import Pricing from "./pages/Pricing";
import Advertisers from "./pages/Advertisers";
import Publishers from "./pages/Publishers";
import ContactUs from "./pages/ContactUs";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Navigate replace to="home" />} />
          <Route path="home" element={<HomePage />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="advertisers" element={<Advertisers />} />
          <Route path="publishers" element={<Publishers />} />
          <Route path="contactus" element={<ContactUs />} />
          <Route path="terms" element={<Terms />} />
          <Route path="privacy" element={<Privacy />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
