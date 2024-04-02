
import articles from "../mock/article-content";
import {ArticleList} from "../components";

const ArticlesListPage = () => {
    return (
        <>
            <h1>Articles</h1>
            <ArticleList articles={articles}/>
        </>

    );
}

export default ArticlesListPage;