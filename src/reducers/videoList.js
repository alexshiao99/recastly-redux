import Redux from 'redux';


var videoListReducer = (state = [], action) => {
  //TODO: define a reducer for the videoList field of our state.
  switch(action.type) {
    case "CHANGE_CURRENT_LIST":
      return {...state,
      videos: action.value
    };
    default:
      return state;
  };
};

export default videoListReducer;
