import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Dashboard, Login } from "../Pages";

export const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/entrar" element={<Login />} />
          <Route path="/pagina-inicial" element={<Dashboard />} />
          <Route path="*" element={<Dashboard />} />
          {/* <Route index element={<Activity />} />
          <Route path="invoices" element={<Invoices />} />
          <Route path="activity" element={<Activity />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}