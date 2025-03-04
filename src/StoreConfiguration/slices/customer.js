import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    count: 0,
    EntryListArray_Redux: [],
    header_slug: "blog",
    header_api_result_redux: [],
    header_keyword: "",
    Header_logo_api_result_redux:"",
    Entry_Detail_api_Data_redux:"",
    search_Keyword_List:"",
    Category_Slug_Data:"",
    Entry_List_Api_Data:[],
};


export const customerSlice = createSlice({
    name: "cusromer",
    initialState,
    reducers: {
        addCount: (state, action) => {
            state.count = action.payload;
        },
        EntryList_Redux_function: (state, action) => {
            state.EntryListArray_Redux = action.payload;
        },
        header_slug_Reduc_function: (state, action) => {
            state.header_slug = action.payload;
        },

        Header_api_result_redux_function: (state, action) => {
            state.header_api_result_redux = action.payload;
        },
        Header_keyword_redux_function: (state, action) => {
            state.header_keyword = action.payload;
        },
        Header_logo_api_result_redux_function: (state, action) => {
            state.Header_logo_api_result_redux = action.payload;
        },

        Entry_Detail_api_Data_redux:(state,action)=>{
            state.Entry_Detail_api_Data_redux=action.payload;
        },
        search_Keyword_List:(state,action)=>{
            state.search_Keyword_List=action.payload;
        },

        Category_Slug_Data:(state,action)=>{
            state.Category_Slug_Data=action.payload;
        },
        Entry_List_Api_Data:(state,action)=>{
            state.Entry_List_Api_Data=action.payload
        }
    },
});


export const { addCount, EntryList_Redux_function, header_slug_Reduc_function ,Header_keyword_redux_function,Header_logo_api_result_redux_function , Header_api_result_redux_function,Entry_Detail_api_Data_redux,search_Keyword_List,Category_Slug_Data,Entry_List_Api_Data} = customerSlice.actions;

export default customerSlice.reducer;
