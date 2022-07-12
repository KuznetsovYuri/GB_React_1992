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

    const getFetchArticles = async () => {
        setLoading(true);
        setError('');

        try {
            const res = await fetch(api);
            const data = await res.json();
            setArticles(data);
        } catch (err) {
            setError((err as Error).message);
        } finally {
            setLoading(false);
        }

    };

    useEffect(() => {
        getFetchArticles();

    }, []);
    return (
        <>
            <h2>Articles</h2>
            {loading && <p>Loading...</p>}
            <button>get data</button>
            {!loading && (
                <ul>
                    {articles.map(article => <li key={article.id}>{article.title}</li>)}
                </ul>
            )}

            {error && <p style={{ color: 'red' }}>{error}</p>}
        </>
    );
};