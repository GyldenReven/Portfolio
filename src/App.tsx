import HomePage from "./pages/homepage";
import ProjectsPage from "./pages/projectspage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/footer";
import Header from "./components/header/header";
import ContactPage from "./pages/contactpage";
import Page404 from "./pages/page404";
import AboutPage from "./pages/aboutpage";

function App() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <div className="min-w-screen max-w-5xl mx-auto p-4 mb-auto">
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/about" element={<AboutPage />} />
                        <Route path="/projects/*" element={<ProjectsPage />} />
                        <Route
                            path="/Contact"
                            element={<ContactPage />}
                        />
                        <Route
                            path="*"
                            element={
                                <Page404 />
                            }
                        />
                    </Routes>
                </BrowserRouter>
            </div>
            <Footer />
        </div>
    );
}

export default App;
