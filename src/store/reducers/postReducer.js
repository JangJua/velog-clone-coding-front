import immer from "immer";

// action
import {
  TRENDING_POSTS_LOAD_REQUEST,
  TRENDING_POSTS_LOAD_SUCCESS,
  TRENDING_POSTS_LOAD_FAILURE,
} from "store/actions/postAction";
// 최신 게시글 load action
import {
  RECENT_POSTS_LOAD_REQUEST,
  RECENT_POSTS_LOAD_SUCCESS,
  RECENT_POSTS_LOAD_FAILURE,
} from "store/actions/postAction";

const initialState = {
  posts: [],
  recentPosts: [],
  hasMorePosts: true,
  hasMoreRecentPosts: true,
  showPostFallback: false,
};

const PostReducer = (state = initialState, action) => {
  return immer(state, (draft) => {
    switch (action.type) {
      case TRENDING_POSTS_LOAD_REQUEST: {
        draft.showPostFallback = false;
        break;
      }
      case TRENDING_POSTS_LOAD_SUCCESS: {
        draft.hasMorePosts = action.data.length === 20;
        draft.posts.push(...action.data);
        draft.showPostFallback = true;
        break;
      }
      case TRENDING_POSTS_LOAD_FAILURE: {
        draft.showPostFallback = false;
        break;
      }
      case RECENT_POSTS_LOAD_REQUEST: {
        draft.showPostFallback = false;
        break;
      }
      case RECENT_POSTS_LOAD_SUCCESS: {
        draft.hasMoreRecentPosts = action.data.length === 20;
        draft.recentPosts.push(...action.data);
        draft.showPostFallback = true;
        break;
      }
      case RECENT_POSTS_LOAD_FAILURE: {
        draft.showPostFallback = false;
        break;
      }
      default: {
        break;
      }
    }
  });
};

export default PostReducer;
