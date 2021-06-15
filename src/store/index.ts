import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {
      name: "Guest",
      pfp: "https://3.bp.blogspot.com/-UI5bnoLTRAE/VuU18_s6bRI/AAAAAAAADGA/uafLtb4ICCEK8iO3NOh1C_Clh86GajUkw/s1600/guest.png"
    },
    otherUsers: [{
      name: "RKRIT54",
      pfp: "https://st.depositphotos.com/1000350/1663/i/950/depositphotos_16632665-stock-photo-shocked-bald-man-holding-comb.jpg"
    },
     {name: "ASKFE21",
      pfp: "http://www.apimages.com/Images/Ap_Creative_Stock_Header.jpg"
    }, {
      name: "SunTzuQuoter",
      pfp: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/%E5%90%B4%E5%8F%B8%E9%A9%AC%E5%AD%99%E6%AD%A6.jpg/220px-%E5%90%B4%E5%8F%B8%E9%A9%AC%E5%AD%99%E6%AD%A6.jpg"
    }, {
      name: "UFHheakif",
      pfp: "https://thumbs.dreamstime.com/z/cyber-woman-corn-11556261.jpg"
    }, {
      name: "WeebMan123",
      pfp: "https://i.pinimg.com/236x/d7/4e/17/d74e17c181a157a781bfb5277bbc4394.jpg"
    }, {
      name: "FJJNkewa427",
      pfp: "https://ichef.bbci.co.uk/news/976/cpsprodpb/175CC/production/_117629659_gettyimages-1131487083-1.jpg"
    }, {
      name: "Ktnema",
      pfp: "https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX13737953.jpg"
    }
    ],
    messages: [[
      {name: "ASKFE21", pfp: "http://www.apimages.com/Images/Ap_Creative_Stock_Header.jpg", message: "Hewwo"},
      {name: "RKRIT54", pfp: "https://st.depositphotos.com/1000350/1663/i/950/depositphotos_16632665-stock-photo-shocked-bald-man-holding-comb.jpg", message: "Hello there."}
    ], [
      {name: "SunTzuQuoter", pfp: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/%E5%90%B4%E5%8F%B8%E9%A9%AC%E5%AD%99%E6%AD%A6.jpg/220px-%E5%90%B4%E5%8F%B8%E9%A9%AC%E5%AD%99%E6%AD%A6.jpg", message: '"Just hold w and m1 4head."- Sun Tzu'}
    ], [
      {name: "UFHheakif", pfp: "https://thumbs.dreamstime.com/z/cyber-woman-corn-11556261.jpg", message: "Hi. (sorry for bad english)"}
    ], [
      {name: "WeebMan123", pfp: "https://i.pinimg.com/236x/d7/4e/17/d74e17c181a157a781bfb5277bbc4394.jpg", message: "Any weebs in here"}
    ], [
      {name: "FJJNkewa427", pfp: "https://ichef.bbci.co.uk/news/976/cpsprodpb/175CC/production/_117629659_gettyimages-1131487083-1.jpg", message: "You ever try to sleep, but remember that you still havent installed Aimlabs yet so you wont become a billionare?"}
    ], [
      {name: "Ktnema211", pfp: "https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX13737953.jpg", message: "anfwbfawobfawppbob"}
    ]],
  },
  mutations: {
    changeUsername(state, payload){
      state.user.name = payload;
    },
    changeUserPFP(state, payload){
      state.user.pfp = payload;
    },
    addMessages(state, payload){
    state.messages[payload[1]].unshift(payload[0])
    },
  },
  actions: {
  },
  modules: {
  },
});
