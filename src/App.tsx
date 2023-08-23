import { Routes, Route } from "react-router-dom"
import { lazy } from "react"
import { Layout } from "./components/Layout/Layout";
import { GlobalStyle } from "./components/Styles/GlobalStyle";
import { Container } from "./components/Styles/Container";
import { Navigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";

export const App = () => {
  const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
  const TweetsPage = lazy(() => import('./pages/TweetsPage/TweetsPage'));

  return (
    <Container>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/tweets" element={<TweetsPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
      <GlobalStyle />
      <Toaster/>
    </Container>
  )
}
