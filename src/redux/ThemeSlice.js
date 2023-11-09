const {createSlice} = require('@reduxjs/toolkit');

const ThemeSlice = createSlice({
  name: 'theme',
  initialState: {
    data: 'LIGHT',
  },
  reducers: {
    ChangeTheme(state, action) {
      state.data = action.payload;
    },
  },
});

export const {ChangeTheme} = ThemeSlice.actions;
export default ThemeSlice.reducer;
