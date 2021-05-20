import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    jets: ["Global", "Challenger", "LearJet", "Pre-owned aircraft"]
}

const jetSlice = createSlice({
    name: "car",
    initialState,
    reducers: {}
})

export const slelectJets = state => state.jet.jets;

export default jetSlice.reducer;