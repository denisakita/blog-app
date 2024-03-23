import './App.css';
import {AboutPage, ArticlePage, ArticlesListPage, HomePage} from "./pages";
import {BrowserRouter, Route, Routes} from "react-router-dom";


function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <h1>My Awesome Blog</h1>
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
