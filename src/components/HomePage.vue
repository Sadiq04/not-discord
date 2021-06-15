<template>
  <div style="height: 100vh">
    <div style="height: 130px">
      <button v-if="store.state.messages[channelIndex].length > 8" @click="lastPage">Previous</button>
      <h1 v-if="store.state.messages[channelIndex].length > 8">Page {{ page }}/{{ pageCount }}</h1>
      <button v-if="store.state.messages[channelIndex].length > 8" @click="nextPage">Next</button>
    </div>
    <hr>
    <div class="parent">
      <div class="left bar">
        <div class="channels">
         <button style="width: 300px; height: 50px; top: 25px; background-color: #2B2D48; color: white; font-size: 30px" @click="changeChannelIndex(0)">#general</button>
         <button style="width: 300px; height: 50px; top: 25px; background-color: #2B2D48; color: white; font-size: 30px" @click="changeChannelIndex(1)">#photoless-goodstuff</button>
         <button style="width: 300px; height: 50px; top: 25px; background-color: #2B2D48; color: white; font-size: 30px" @click="changeChannelIndex(2)">#language-school</button>
         <button style="width: 300px; height: 50px; top: 25px; background-color: #2B2D48; color: white; font-size: 30px" @click="changeChannelIndex(3)">#weeb-central</button>
         <button style="width: 300px; height: 50px; top: 25px; background-color: #2B2D48; color: white; font-size: 30px" @click="changeChannelIndex(4)">#discussions</button>
         <button style="width: 300px; height: 50px; top: 25px; background-color: #2B2D48; color: white; font-size: 30px" @click="changeChannelIndex(5)">#irl-stuff</button>
        </div>
        <hr>
        <div class="userStuff">
          <div v-if="userData.pfp" style="width: 50px" class="circletag"><img v-bind:src="userData.pfp"></div>
          <h1 style="position: absolute; left: 80px; bottom: 160px" v-if="userData.name">{{ userData.name }}</h1>
          <router-link style="position: absolute; right: 100px; bottom: 150px" to="/UserInfo"><button>Change User Settings</button></router-link>
        </div>
      </div>
      <div class="message bar">
        <div class="chat">
          <div class="sentMsg 8">
           <div v-if="store.state.messages[channelIndex][(page - 1) * 8 + 7]">
             <div class="circletag"><img v-bind:src="store.state.messages[channelIndex][(page - 1) * 8 + 7].pfp"></div>
             <div style="position: absolute; top: 10px; left: 110px">{{ store.state.messages[channelIndex][(page - 1) * 8 + 7].name }}</div>
             <div style="position: absolute; top: 40px; left: 120px; font-size: 25px">{{ store.state.messages[channelIndex][(page - 1) * 8 + 7].message }}</div>
           </div>
          </div>
          <div class="sentMsg 7">
            <div v-if="store.state.messages[channelIndex][(page - 1) * 8 + 6]">
             <div class="circletag"><img v-bind:src="store.state.messages[channelIndex][(page - 1) * 8 + 6].pfp"></div>
             <div style="position: absolute; top: 10px; left: 110px">{{ store.state.messages[channelIndex][(page - 1) * 8 + 6].name }}</div>
             <div style="position: absolute; top: 40px; left: 120px; font-size: 25px">{{ store.state.messages[channelIndex][(page - 1) * 8 + 6].message }}</div>
            </div>
          </div>
          <div class="sentMsg 6">
            <div v-if="store.state.messages[channelIndex][(page - 1) * 8 + 5]">
             <div class="circletag"><img v-bind:src="store.state.messages[channelIndex][(page - 1) * 8 + 5].pfp"></div>
             <div style="position: absolute; top: 10px; left: 110px">{{ store.state.messages[channelIndex][(page - 1) * 8 + 5].name }}</div>
             <div style="position: absolute; top: 40px; left: 120px; font-size: 25px">{{ store.state.messages[channelIndex][(page - 1) * 8 + 5].message }}</div>
            </div>
          </div>
          <div class="sentMsg 5">
            <div v-if="store.state.messages[channelIndex][(page - 1) * 8 + 4]">
             <div class="circletag"><img v-bind:src="store.state.messages[channelIndex][(page - 1) * 8 + 4].pfp"></div>
             <div style="position: absolute; top: 10px; left: 110px">{{ store.state.messages[channelIndex][(page - 1) * 8 + 4].name }}</div>
             <div style="position: absolute; top: 40px; left: 120px; font-size: 25px">{{ store.state.messages[channelIndex][(page - 1) * 8 + 4].message }}</div>
            </div>
          </div>
          <div class="sentMsg 4">
            <div v-if="store.state.messages[channelIndex][(page - 1) * 8 + 3]">
             <div class="circletag"><img v-bind:src="store.state.messages[channelIndex][(page - 1) * 8 + 3].pfp"></div>
             <div style="position: absolute; top: 10px; left: 110px">{{ store.state.messages[channelIndex][(page - 1) * 8 + 3].name }}</div>
             <div style="position: absolute; top: 40px; left: 120px; font-size: 25px">{{ store.state.messages[channelIndex][(page - 1) * 8 + 3].message }}</div>
            </div>
          </div>
          <div class="sentMsg 3">
            <div v-if="store.state.messages[channelIndex][(page - 1) * 8 + 2]">
             <div class="circletag"><img v-bind:src="store.state.messages[channelIndex][(page - 1) * 8 + 2].pfp"></div>
             <div style="position: absolute; top: 10px; left: 110px">{{ store.state.messages[channelIndex][(page - 1) * 8 + 2].name }}</div>
             <div style="position: absolute; top: 40px; left: 120px; font-size: 25px">{{ store.state.messages[channelIndex][(page - 1) * 8 + 2].message }}</div>
            </div>
          </div>
          <div class="sentMsg 2">
            <div v-if="store.state.messages[channelIndex][(page - 1) * 8 + 1]">
             <div class="circletag"><img v-bind:src="store.state.messages[channelIndex][(page - 1) * 8 + 1].pfp"></div>
             <div style="position: absolute; top: 10px; left: 110px">{{ store.state.messages[channelIndex][(page - 1) * 8 + 1].name }}</div>
             <div style="position: absolute; top: 40px; left: 120px; font-size: 25px">{{ store.state.messages[channelIndex][(page - 1) * 8 + 1].message }}</div>
            </div>
          </div>
          <div class="sentMsg 1">
            <div v-if="store.state.messages[channelIndex][(page - 1) * 8]">
             <div class="circletag"><img v-bind:src="store.state.messages[channelIndex][(page - 1) * 8].pfp"></div>
             <div style="position: absolute; top: 10px; left: 110px">{{ store.state.messages[channelIndex][(page - 1) * 8].name }}</div>
             <div style="position: absolute; top: 40px; left: 120px; font-size: 25px">{{ store.state.messages[channelIndex][(page - 1) * 8].message }}</div>
            </div>
          </div>
        </div>
        <hr>
        <div v-if="page==1">
          <textarea @keyup.enter="sendMessage" style="float: left; position: relative; left: 15px; top: 10px" rows="5" cols="120" placeholder="Enter your message..." v-model="writtenMessage"></textarea>
          <button @click="sendMessage" style="position: relative; top: 30px; font-size: 30px">Send</button>
        </div>
      </div>
      <div class="right">
        <div class="userSpace">
           <div style="width: 60px; top: 10px" class="circletag"><img v-bind:src="userData.pfp"></div>
           <h1 style="position: absolute; left: 95px; top: 5px" v-if="userData.name">{{ userData.name }}</h1>
        </div>
        <div v-if="store.state.otherUsers[0]" class="userSpace">
           <div style="width: 60px: top: 10px" class="circletag"><img v-bind:src="store.state.otherUsers[0].pfp"></div>
           <h1 style="position: absolute; left: 95px; top: 5px" v-if="userData.name">{{ store.state.otherUsers[0].name }}</h1>
        </div>
        <div v-if="store.state.otherUsers[1]" class="userSpace">
           <div style="width: 60px: top: 10px" class="circletag"><img v-bind:src="store.state.otherUsers[1].pfp"></div>
           <h1 style="position: absolute; left: 95px; top: 5px" v-if="userData.name">{{ store.state.otherUsers[1].name }}</h1>
        </div>
        <div v-if="store.state.otherUsers[2]" class="userSpace">
           <div style="width: 60px: top: 10px" class="circletag"><img v-bind:src="store.state.otherUsers[2].pfp"></div>
           <h1 style="position: absolute; left: 95px; top: 5px" v-if="userData.name">{{ store.state.otherUsers[2].name }}</h1>
        </div>
        <div v-if="store.state.otherUsers[3]" class="userSpace">
           <div style="width: 60px: top: 10px" class="circletag" ><img v-bind:src="store.state.otherUsers[3].pfp"></div>
           <h1 style="position: absolute; left: 95px; top: 5px" v-if="userData.name">{{ store.state.otherUsers[3].name }}</h1>
        </div>
        <div v-if="store.state.otherUsers[4]" class="userSpace">
           <div style="max-width: 100px: top: 10px; height: 50px" class="circletag"><img v-bind:src="store.state.otherUsers[4].pfp"></div>
           <h1 style="position: absolute; left: 95px; top: 5px" v-if="userData.name">{{ store.state.otherUsers[4].name }}</h1>
        </div>
        <div v-if="store.state.otherUsers[5]" class="userSpace">
           <div style="max-width: 100px: top: 10px" class="circletag"><img v-bind:src="store.state.otherUsers[5].pfp"></div>
           <h1 style="position: absolute; left: 95px; top: 5px" v-if="userData.name">{{ store.state.otherUsers[5].name }}</h1>
        </div>
        <div v-if="store.state.otherUsers[6]" class="userSpace">
           <div style="width: 60px: top: 10px" class="circletag"><img v-bind:src="store.state.otherUsers[6].pfp"></div>
           <h1 style="position: absolute; left: 95px; top: 5px" v-if="userData.name">{{ store.state.otherUsers[6].name }}</h1>
        </div>
        <div v-if="store.state.otherUsers[7]" class="userSpace">
           <div style="width: 60px: top: 10px" class="circletag"><img v-bind:src="store.state.otherUsers[7].pfp"></div>
           <h1 style="position: absolute; left: 95px; top: 5px" v-if="userData.name">{{ store.state.otherUsers[7].name }}</h1>
        </div>
        <div v-if="store.state.otherUsers[8]" class="userSpace">
           <div style="width: 60px: top: 10px" class="circletag"><img v-bind:src="store.state.otherUsers[8].pfp"></div>
           <h1 style="position: absolute; left: 95px; top: 5px" v-if="userData.name">{{ store.state.otherUsers[8].name }}</h1>
        </div>
        <div v-if="store.state.otherUsers[9]" class="userSpace">
           <div style="width: 60px: top: 10px" class="circletag"><img v-bind:src="store.state.otherUsers[9].pfp"></div>
           <h1 style="position: absolute; left: 95px; top: 5px" v-if="userData.name">{{ store.state.otherUsers[9].name }}</h1>
        </div>
        <div v-if="store.state.otherUsers[10]" class="userSpace">
           <div style="width: 60px: top: 10px" class="circletag"><img v-bind:src="store.state.otherUsers[10].pfp"></div>
           <h1 style="position: absolute; left: 95px; top: 5px" v-if="userData.name">{{ store.state.otherUsers[10].name }}</h1>
        </div>
        <div v-if="store.state.otherUsers[11]" class="userSpace">
           <div style="width: 60px: top: 10px" class="circletag"><img v-bind:src="store.state.otherUsers[11].pfp"></div>
           <h1 style="position: absolute; left: 95px; top: 5px" v-if="userData.name">{{ store.state.otherUsers[11].name }}</h1>
        </div>
        <div v-if="store.state.otherUsers[12]" class="userSpace">
           <div style="width: 60px: top: 10px" class="circletag"><img v-bind:src="store.state.otherUsers[12].pfp"></div>
           <h1 style="position: absolute; left: 95px; top: 5px" v-if="userData.name">{{ store.state.otherUsers[12].name }}</h1>
        </div>
      </div>
    </div>
    <div id="footer"></div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Vuex from "vuex"
import store from '@/store/index.ts'
export default {
data() {
  return {
    get userData(){
      return {
        name: store.state.user.name,
        pfp: store.state.user.pfp,
      }
    },
    writtenMessage: "",
    page: 1,
    pageCount: 1,
    channelIndex: 0,
    get store(){
      return store
    }
  };
},
methods: {
  sendMessage(){
    if(this.writtenMessage!=""){store.commit("addMessages", [{name: this.userData.name, pfp: this.userData.pfp, message: this.writtenMessage}, this.channelIndex])}
    this.writtenMessage = ""
    if(store.state.messages[this.channelIndex].length > this.pageCount * 8){
      this.pageCount++
    }
  },
  lastPage(){
    if(this.page > 1){this.page--}
  },
  nextPage(){
    if(this.page < this.pageCount){this.page++}
  },
  changeChannelIndex(index: number){
    this.channelIndex = index;
    this.page = 1
  }
},
mounted () {
},
}
</script>

<style>
.parent{
 display: inline-block;
 border-right: 1px solid #aaa;
 padding-right: 4px;
 width: 100%;
 height: 88.4%
}
.bar{
 display: inline-block;
 border-right: 1px solid #aaa;
 padding-right: 4px;
}
.left{
 width: 19%;
 height: 100%;
 position: relative;
 float: left
}
.message{
 width: 60%;
 height: 100%;
 position: relative;
 float: left
}
.right{
 width: 20%;
 height: 100%;
 position: relative;
 float: left
}
.chat{
  width: 100%;
  height: 80%
}
.textBox{
  width: 100%;
  height: 20%
}
textarea{
  resize: none;
  background-color: #48495F;
  color: #FFF8DA;
}
::placeholder {
  color: #61648D;
  font-size: 1.5em;
}
.sentMsg{
  position: relative;
  height: 12.5%;
  width: 100%;
  margin: 0;
  padding: 0;
}
.userSpace{
  position: relative;
  height: 7.14%;
  width: 100%;
  margin: 0;
  padding: 0;
}
.circletag {
  position: relative;
  display: block;
  line-height: 0;
  width: 8%;
  height: 100;
  margin: 0;
  padding: 0;
  overflow: hidden;
  border-radius: 75%;
  left: 10px
}
.circletag>img {
  display: block;
  line-height: 0;
  width: 100%;
  height: auto;
  max-width: 90px
}
.channels{
  width: 100%;
  height: 80%
}
.userStuff{
  width: 100%;
  height: 20%
}
.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 7%;
}
#footer {
  height: 20px;
  background: #222;
  color: white;
}
body {padding:0;margin:0;}
</style>