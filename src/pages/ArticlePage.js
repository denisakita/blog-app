import {useParams} from 'react-router-dom';
import articles from '../mock/article-content';
import {NotFoundPage} from "./index";
import {useEffect, useState} from "react";
import axios from "axios";
import {AddCommentForm, CommentsList} from "../components";

const ArticlePage = () => {
    const [articleInfo, setArticleInfo] = useState({upvotes: 0, comments: []});
    const {articleId} = useParams();


    useEffect(() => {
        const loadArticleInfo = async () => {
            const response = await axios.get(`/api/articles/${articleId}`)
            const newArticleInfo = response.data;
            setArticleInfo(newArticleInfo)
        }
        loadArticleInfo();

    }, [articleId]);

    const article = articles.find(article => article.name === articleId);

    const addUpVote = async () => {
        const response = await axios.put(`/api/articles/${articleId}/upvote`);
        const updatedArticle = response.data;
        setArticleInfo(updatedArticle);
    }

    if (!article) {
        return <NotFoundPage/>
    }
    return (
        <>
            <h1>{article.title}</h1>
            <div className="upvotes-section">
                <button onClick={addUpVote}>UpVote</button>
                <p>This article has {articleInfo.upvotes} upvote(s)</p>
            </div>

            {article.content.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
            ))}
            <AddCommentForm
                articleName={articleId}
                onArticleUpdated={updatedArticle => setArticleInfo(updatedArticle)}
            />

            <CommentsList comments={articleInfo.comments}/>
        </>
    );
}

export default ArticlePage;