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
  <center><input type="search" class="search"/></center>
 <center><button class="patreons" @click="btnclicked($event.target.value)" value="patreon">Patreon</button>
 <button class="patreons" @click="btnclicked($event.target.value)" value="donations">Donate</button>
 <button class="patreons" @click="btnclicked($event.target.value)" value="courses">Courses</button>
 <button class="patreons" @click="btnclicked($event.target.value)" value="books">Books</button>
  <button class="patreons" @click="btnclicked($event.target.value)" value="stuff">Stuff</button>

 </center>
</div>
</template>

<script>
import profile from '../assets/profile.jpg'

export default {
    data(){
        return{
            profile:profile
        }
    },
    methods:{
      btnclicked(v){
        if(v.includes('books')){
          alert('Books have been clicked')
        }
        else if(v.includes('stuff')){
          alert('Stuff have been clicked')
        }
        else if(v.includes('patreon')){
          alert('Patreon has been clicked')
        }
        else if(v.includes('donations')){
          alert('Donations have been clicked')
        }
        else if(v.includes('courses')){
          alert('Courses have been cliced')
        }

}
    }

}
</script>

<style >
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