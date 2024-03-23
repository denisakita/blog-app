import './App.css';
import {AboutPage, ArticlePage, ArticlesListPage, HomePage} from "./pages";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import NavBar from "./NavBar";


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

                    </Routes>
                </div>
            </div>

        </BrowserRouter>
    );
}

export default App;
