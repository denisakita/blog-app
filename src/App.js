import './App.css';
import {AboutPage, ArticlePage, ArticlesListPage, HomePage, NotFoundPage} from "./pages";
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
                        <Route path="*" element={<NotFoundPage/>}/>

                    </Routes>
                </div>
            </div>

        </BrowserRouter>
    );
}

export default App;
