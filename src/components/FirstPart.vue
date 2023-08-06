<template>
  <div class="container is-fluid">
<div class="demo-type">
 
   <center>
    <el-avatar :size="100" src="https://empty" @error="errorHandler">
      <img
        :src="this.profile"
        style="object-fit:cover"
      />
    </el-avatar>
   </center>
  </div>
   
  <center><p class="heading">Welcome to My<br/> BlogFolio</p></center>
  <center><input type="search" class="search" placeholder="Search for tutorials,courses and materials"/></center>
 <center><button class="patreons" @click="btnclicked($event.target.value)" value="patreon">Patreon</button>
 <button class="patreons" @click="btnclicked($event.target.value)" value="donations">Donate</button>
 <button class="patreons" @click="btnclicked($event.target.value)" value="courses">Courses</button>
 <button class="patreons" @click="btnclicked($event.target.value)" value="books">Books</button>
  <button class="patreons" @click="btnclicked($event.target.value)" value="stuff">Stuff</button>

 </center>

  <el-dialog v-model="visible" :show-close="false">
    <template #header="{ close, titleId, titleClass }">
      <div class="my-header">
        <h4 :id="titleId" :class="titleClass">This is a custom header!</h4>
        <el-button type="danger" @click="close">
          <el-icon class="el-icon--left"><CircleCloseFilled /></el-icon>
          Close
        </el-button>
      </div>
    </template>
    This is dialog content.
  </el-dialog>
  <el-dialog v-model="visible1" :show-close="false">
    <template #header="{ close, titleId, titleClass }">
      <div class="my-header">
        <h4 :id="titleId" :class="titleClass">This is visible 1 header!</h4>
        <el-button type="danger" @click="close">
          <el-icon class="el-icon--left"><CircleCloseFilled /></el-icon>
          Close
        </el-button>
      </div>
    </template>
    This is dialog content.
  </el-dialog>
</div>
</template>

<script>
import profile from '../assets/profile.jpg'
import { ElButton, ElDialog } from 'element-plus'
import { CircleCloseFilled } from '@element-plus/icons-vue'
export default {
    data(){
        return{
            profile:profile,
            visible:false, 
            visible1:false
        }
    },
    methods:{
      btnclicked(v){
        if(v.includes('books')){
           this.$router.push({path:'/books'})
        }
        else if(v.includes('stuff')){
          alert('Stuff have been clicked')
        }
        else if(v.includes('patreon')){
          this.visible= true;
        }
        else if(v.includes('donations')){
          this.visible1= true
        }
        else if(v.includes('courses')){
          alert('Courses have been clicked')
        }

}
    }

}
</script>

<style >
.my-header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.container{
    background-color: #001a1f;
    height:500px;
    color:white;
}
.patreons{
    position: relative;
    top:55px;
    background-color: transparent;
    color:white;
    padding:10px;
    border-left:0px;
    border-top:0px;
    border-bottom:0px;
    border-right:.2px solid white;
    margin:5px;
}
.patreons:hover{
  background-color: white;
  color:#001a1f;
  border-color:1px solid #001a1f;
  cursor:pointer;
}
.heading{
    font-size: 50px;
    position: relative;
    top:40px;
}
.search{
    position: relative;
    top:50px;
    width:35%;
    height:35px;
}
.demo-type {
    position: relative;
    top:25px;
 
}
.demo-type > div {
  
  text-align: center;
}

.demo-type > div:not(:last-child) {
  border-right: 1px solid var(--el-border-color);
}
@media only screen and (max-width:700px){
  .heading {
     font-size: 30px;
  }
  .search{
    position: relative;
    top:50px;
    width:80%;
    height:35px;
}
}
</style>