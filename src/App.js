import { BrowserRouter, Route, Routes } from "react-router-dom";
import { BlogPage, HomePage, PostPage } from "./pages";
import "./App.css";
import { Navbar, Footer } from "./components";
import { ThemeProvider } from "./providers/ThemeProvider";

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="blog" element={<BlogPage />} />
          <Route path="post" element={<PostPage />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
