import './App.css';
import {AboutPage, ArticlePage, ArticlesListPage, CreateAccountPage, HomePage, LoginPage, NotFoundPage} from "./pages";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {NavBar} from "./components";


function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <NavBar/>
                <div id="page-body">
                    <Routes>
                        <Route path="/" element={<HomePage/>}/>
                        <Route path="/about" element={<AboutPage/>}/>
                        <Route path="/articles" element={<ArticlesListPage/>}/>
                        <Route path="/articles/:articleId" element={<ArticlePage/>}/>
                        <Route path="/login" element={<LoginPage/>}/>
                        <Route path="/create-account" element={<CreateAccountPage/>}/>
                        <Route path="*" element={<NotFoundPage/>}/>

                    </Routes>
                </div>
            </div>

        </BrowserRouter>
    );
}

export default App;
