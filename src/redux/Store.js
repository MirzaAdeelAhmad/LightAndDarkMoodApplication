const {configureStore} = require('@reduxjs/toolkit');
const {default: ThemeSlice} = require('./ThemeSlice');

const store = configureStore({
  reducer: {
    theme: ThemeSlice,
  },
});

export default store;
