import { createStore } from "vuex";
import sourceData from "../data.json";
import { upsert } from "@/helpers/index.js"

export default createStore({
  state: {
    ...sourceData,
    authId: "VXjpr2WHa8Ux4Bnggym8QFLdv5C3",
  },

  mutations: {
    SET_POST(state, { post }) {
      upsert(state.posts,post)    
    },

    SET_USER(state, { user, userId}){
      const userIndex = state.users.findIndex( user => user.id === userId);
      state.users[userIndex] = user;
    },

    SET_THREAD(state, { thread }){      
      upsert(state.threads, thread);      
    },

    APPEND_POST_TO_THREAD(state, { postId, threadId }) {
      const thread = state.threads.find((thread) => thread.id === threadId);
      thread.posts = thread.posts || []
      thread.posts.push(postId);
    },

    APPEND_THREAD_TO_FORUM(state,{ forumId, threadId }){
      const forum = state.forums.find((forum) => forum.id === forumId);
      forum.threads = forum.threads || []
      forum.threads.push(threadId);
    },

    APPEND_THREAD_TO_USER(state,{ userId, threadId}){
      const user = state.users.find(user => user.id === userId);
      user.threads = user.threads || [],
      user.threads.push(threadId)
    }
  },

  actions: {
    createPost({ commit, state}, post) {
      post.id = "gggg" + Math.random();
      post.userId = state.authId;
      post.publishedAt = Math.floor(Date.now() / 1000);
      commit("SET_POST", { post });
      commit("APPEND_POST_TO_THREAD", {
        postId: post.id,
        threadId: post.threadId,
      });
    },

    async createThread({ commit,state,dispatch }, { text, title,forumId }){
      const id = "gggg" + Math.random();
      const userId = state.authId;
      const publishedAt = Math.floor(Date.now() / 1000);
      const thread =  {        
        forumId,   
        title,         
        publishedAt,
        userId,
        id
      }
      commit('SET_THREAD', { thread });
      commit('APPEND_THREAD_TO_USER', { userId, threadId: id });
      commit('APPEND_THREAD_TO_FORUM', { forumId, threadId: id })
      dispatch('createPost', { text, threadId: id});
      return state.threads.find(thread => thread.id === id)
    },

    async updateThread({ commit, state}, { title, text, id}){
      const thread = state.threads.find(thread => thread.id === id);
      const post = state.posts.find(post => post.id === thread.posts[0]);
      const newThread = { ...thread, title };
      const newPost = { ...post, text };
      commit('SET_THREAD', { thread: newThread});
      commit('SET_POST', { post: newPost});
      return newThread;
    },

    updateUser({commit}, user){
      commit('SET_USER',{ user, userId: user.id })
    }
  },

  getters: {
    authUser: (state) => {
      const user = state.users.find((user) => user.id === state.authId);
      if (!user) return null;
      return {
        ...user,
        get posts() {
          return state.posts.filter((post) => post.userId === user.id);
        },
        get postsCount() {
          return this.posts.length;
        },
        get threads() {
          return state.threads.filter((thread) => thread.userID === user.id);
        },
        get threadsCount() {
          return this.threads.length;
        },
      };
    },
  },
});
