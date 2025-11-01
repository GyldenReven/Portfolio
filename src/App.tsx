import HomePage from "./pages/homepage";
import ProjectsPage from "./pages/projectspage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/footer";
import Header from "./components/header/header";
import { useTranslation } from "react-i18next";
import ContactPage from "./pages/contactpage";

function App() {
    const { t } = useTranslation();

    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <div className="min-w-screen max-w-5xl mx-auto p-4 mb-auto">
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/projects" element={<ProjectsPage />} />
                        <Route
                            path="/Contact"
                            element={<ContactPage />}
                        />
                        <Route
                            path="*"
                            element={
                            <section >
                            <h2 className="w-max m-auto">{t("404")}</h2>
                            </section>
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
