import { createSlice } from "@reduxjs/toolkit/react"

const initialState = {
    count: 0,
}

const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {

    }
})

export default counterSlice.reducer;