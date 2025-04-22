import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
  EntryListArray_Redux: [],
  header_slug: "blog",
  header_api_result_redux: [],
  header_keyword: "",
  Header_logo_api_result_redux: "",
  Entry_Detail_api_Data_redux: "",
  search_Keyword_List: "",
  Category_Slug_Data: "",
  Entry_List_Api_Data: [],
  Related_Detail_api_Data_redux: "",
  List_Detail_api_Data_redux: "",
  searchApi_List: [],
  Related_Jobs_redux: "",
  Homepage_View_redux: "tile-view",
  get_name_first_latter:"",
  get_user_id_Redux_func:0,
  get_user_profile:"",
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

    Entry_Detail_api_Data_redux: (state, action) => {
      state.Entry_Detail_api_Data_redux = action.payload;
    },
    search_Keyword_List: (state, action) => {
      state.search_Keyword_List = action.payload;
    },
    Related_Detail_api_Data_redux: (state, action) => {
      state.Entry_Detail_api_Data_redux = action.payload;
    },

    Category_Slug_Data: (state, action) => {
      state.Category_Slug_Data = action.payload;
    },
    Entry_List_Api_Data: (state, action) => {
      state.Entry_List_Api_Data = action.payload;
    },
    List_Detail_api_Data_redux: (state, action) => {
      state.List_Detail_api_Data_redux = action.payload;
    },
    searchApi_List: (state, action) => {
      state.searchApi_List = action.payload;
    },
    Related_Jobs_redux: (state, action) => {
      state.Related_Jobs_redux = action.payload;
    },
    Homepage_View_Change_redux: (state, action) => {
      state.Homepage_View_redux = action.payload;
    },
    get_name_first_latter: (state, action) => {
      state.get_name_first_latter = action.payload;
    },
    get_user_id_Redux_func: (state, action) => {
      state.get_user_id_Redux_func = action.payload;
    },
    get_user_profile: (state, action) => {
      state.get_user_profile = action.payload;
    },
  },
});

export const {
  addCount,
  EntryList_Redux_function,
  header_slug_Reduc_function,
  Header_keyword_redux_function,
  Header_logo_api_result_redux_function,
  Header_api_result_redux_function,
  Entry_Detail_api_Data_redux,
  search_Keyword_List,
  Category_Slug_Data,
  Entry_List_Api_Data,
  Related_Detail_api_Data_redux,
  List_Detail_api_Data_redux,
  searchApi_List,
  Related_Jobs_redux,
  Homepage_View_Change_redux,
  get_name_first_latter,
  get_user_id_Redux_func,
  get_user_profile,
} = customerSlice.actions;

export default customerSlice.reducer;
