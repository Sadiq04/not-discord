<template>
  <div style="height: 100vh">
    <router-link to="/"><button>Back</button></router-link>
    <div v-if="userData.pfp" style="top: 20px" class="circletag center"><img v-bind:src="userData.pfp"></div>
    <h1 v-if="userData.name">{{ userData.name }}</h1>
    <form action="/action_page.php">
      <label for="name">Username:</label>
      <input type="text" id="name" name="name" v-model="newData.name"><br><br>
      <label for="pfp">Profile Picture Link:</label>
      <input type="text" id="pfp" name="pfp" v-model="newData.pfp"><br><br>
      <button type="button" @click="saveData">Change</button>
    </form>
  </div>
</template>

<script lang="ts">
import store from '@/store/index.ts'
export default {
    data() {
        return {
            userData: {
                name: store.state.user.name,
                pfp: store.state.user.pfp,
            },
            newData: {
                name: "",
                pfp: "",
            }
        }
    },
    methods: {
        saveData(){
            if(this.newData.name!==""){this.userData.name = this.newData.name; store.commit("changeUsername", this.newData.name)}
            if(this.newData.pfp.match(/\.(jpeg|jpg|gif|png)$/) != null){this.userData.pfp = this.newData.pfp; store.commit("changeUserPFP", this.newData.pfp)}
            this.newData.name = ""
            this.newData.pfp = ""
        }
    }
}
</script>

<style>
.circletag {
  position: relative;
  display: block;
  line-height: 0;
  width: 8%;
  height: 100px;
  margin: 0;
  padding: 0;
  overflow: hidden;
  border-radius: 50%;
  left: 10px
}
.circletag>img {
  display: block;
  line-height: 0;
  width: 100%;
  height: auto;
  max-width: 90px
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
</style>