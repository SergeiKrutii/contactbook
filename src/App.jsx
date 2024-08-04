import { Routes, Route, Navigate } from "react-router-dom";
import Container from "components/common/container/Container";
import HomePage from "pages/homePage";
import { Suspense } from "react";
import ContactPage from "pages/contactPage/ContactPage";
import Layout from "components/Layout/Layout";

function App() {
  return (
    <Container>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Navigate to="/contacts" />} />
            <Route path="/contacts" element={<HomePage />} />
          </Route>
          <Route path="/contact/:contactId" element={<ContactPage />} />
        </Routes>
      </Suspense>
    </Container>
  );
}

export default App;
