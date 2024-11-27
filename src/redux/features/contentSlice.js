import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    data:[],
    homeData: [],
    configData: [],
    aboutData:[],
    featuresData: []
}

const contentSlice = createSlice({
    name: 'cms',
    initialState,
    reducers: {
        setData: (state, action) => {
            const payloadData = action.payload;
            state[payloadData.name] = payloadData.data;
        },
    }
});

export const {
    setData,
} = contentSlice.actions;

export default contentSlice.reducer
