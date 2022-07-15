import React, { useEffect, FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StoreState } from '../store';
import { fetchData } from '../store/articles/slice';

export const Articles: FC = () => {
    const dispatch = useDispatch() as any;
    const articles = useSelector((store: StoreState) => store.articles.articles);
    const loading = useSelector((store: StoreState) => store.articles.loading);
    const error = useSelector((store: StoreState) => store.articles.error);

    useEffect(() => {
        dispatch(fetchData());
    }, [dispatch]);

    return (
        <>
            <h2>Articles</h2>
            {loading && <p>Loading...</p>}
            <button onClick={() => dispatch(fetchData())}>get data</button>
            {!loading && (
                <ul>
                    {articles.map(article => <li key={article.id}>{article.title}</li>)}
                </ul>
            )}

            {error && <p style={{ color: 'red' }}>{error}</p>}
        </>
    );
};