import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { api } from '../../constants';

export interface ArticlesState {
    articles: IArticle[];
    loading: boolean;
    error: string;
}

interface IArticle {
    id: string;
    title: string;
}

const initialState: ArticlesState = {
    articles: [],
    loading: false,
    error: '',
};

const articleSlice = createSlice({
    name: 'articles',
    initialState,
    reducers: {
        addArticles(state, action: PayloadAction<IArticle[]>) {
            state.articles = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchData.pending, (state) => {
                state.loading = true;
                state.error = '';
            })

            .addCase(
                fetchData.fulfilled,
                (state, action: PayloadAction<IArticle[]>) => {
                    state.loading = false;
                    state.articles = action.payload;
                }
            )

            .addCase(fetchData.rejected, (state, action: any) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export const fetchData = createAsyncThunk(
    'articles/fetchArticles',
    async () => {
        const response = await fetch(api);
        const data = await response.json();
        return data;
    }
);

export const { addArticles } = articleSlice.actions;
export const articlesReducer = articleSlice.reducer;