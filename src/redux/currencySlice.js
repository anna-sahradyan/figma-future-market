import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


export const fetchGbpRate = createAsyncThunk(
    'gbpRate/fetchGbpRate',
    async () => {
        try {
            const response = await axios.get('https://www.cbr-xml-daily.ru/daily_json.js');
            const data = response.data;
            if (data.Valute && data.Valute.GBP) {
                return Math.round(data.Valute.GBP.Value);
            } else {
                throw new Error('Курс GBP не найден');
            }
        } catch (error) {
            throw new Error('Ошибка при получении курса GBP:', error);
        }
    }
);


const currencySlice = createSlice({
    name: 'gbpRate',
    initialState: {
        gbpRate: null,
        status: 'idle',
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchGbpRate.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchGbpRate.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.gbpRate = action.payload;
            })
            .addCase(fetchGbpRate.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export default currencySlice.reducer;
