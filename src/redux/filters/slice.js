import { createSlice } from "@reduxjs/toolkit"
const filterInitialState = {
    name: ""
}

export const sliceFilter = createSlice({
    name: "filters", initialState: filterInitialState,
    reducers: {
        changeFilter: (state, action) => {
            state.name = action.payload
        }
    }
})
export const { changeFilter } = sliceFilter.actions
export default sliceFilter.reducer