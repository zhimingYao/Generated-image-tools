import { userInfo } from "os";
import { defineStore } from "pinia";

interface globalStore {
  userInfo:{
    name:string,
    photo:string
  }
}

export const globalStore = defineStore("GlobalStore",{
  state:()=>{
    return {
      userInfo:{
        name:"314324124",
        photo:"4312412341235435"
      }
    }
  },

})