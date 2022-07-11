import React, { useEffect, useState, FC } from 'react';
import { api } from '../constants';

interface IArticle {
    id: string;
    title: string;
}

export const Articles: FC = () => {
    const [articles, setArticles] = useState<IArticle[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        setLoading(true);
        setError('');

        setTimeout(() => {
            fetch(api)
                .then(res => res.json())
                .then(data => setArticles(data))
                .catch((err: Error) => setError(err.message))
                .finally(() => setLoading(false));
        }, 1000);

    }, []);
    return (
        <>
            <h2>Articles</h2>
            {loading && <div>Loading...</div>}
            {!loading && (
                <ul>
                    {articles.map(article => <li key={article.id}>{article.title}</li>)}
                </ul>
            )}

            {error && <p style={{ color: 'red' }}>{error}</p>}
        </>
    );
};