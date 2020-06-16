


//////////////////////This code will be add later
const initialState = {
  themeColor: 'light'
};


const themeColor = (state = initialState, action) => {
  switch (action.type) {
    case 'LIGHT_THEME':
      return { themeColor: action.themeColor };
    default:
      return state;
  }
};

export default themeColor;
