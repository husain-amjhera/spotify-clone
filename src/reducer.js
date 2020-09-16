export const initialState = {
  user: null,
  playlists: [],
  spotify: null,
  discover_weekly: null,
  top_artists: null,
  playing: false,
  item: null,

  // token:
  //   "BQBzsqNjC3oV1WzlqmKD92vJQwWMQ6NwPEI6CpGoUysTUxfJ11m6gAlz5qEB4TXs5gsYc4e3ak9RCOi_iGwHIbHAd560e2tIdB_8ScL967i1XNyaZ1j_P6P-lP2PeaHWL1sK73JzjdETCPMgSVV3vkPUN-VnQtsMTUkduba9c0zaw_kY",
};

const reducer = (state, action) => {
  //console.log(action);

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    case "SET_PLAYING":
      return {
        ...state,
        playing: action.playing,
      };

    case "SET_ITEM":
      return {
        ...state,
        item: action.item,
      };

    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };

    case "SET_TOP_ARTISTS":
      return {
        ...state,
        top_artists: action.top_artists,
      };

    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };

    case "SET_SPOTIFY":
      return {
        ...state,
        spotify: action.spotify,
      };

    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    default:
      return state;
  }
};

export default reducer;
