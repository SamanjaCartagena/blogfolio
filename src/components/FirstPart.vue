<template>
  
  <div class="container is-fluid" @click='burgeroff' >
  <div class='social'>
    <ul>
      <li>
    <img :src='this.facebook' style='width:30px;height:30px;border-radius:5px;'/>
      </li>
      <li>
            <img :src='this.tiktok' style='width:32px;height:32px;border-radius:5px;'/>

      </li>
        <li>
            <img :src='this.twitter' style='width:30px;height:30px;border-radius:5px;'/>

      </li>
         <li style="background-color:transparent; border:0px;">
            <img :src='this.youtube' style='width:30px;height:30px;border-radius:5px;'/>

      </li>
    </ul>
  </div>
     
      
   <div >
   
  <center><p class="heading"><strong>Welcome to My</strong><br/> <strong>BlogFolio</strong></p></center>
  <center><input type="search" class="search" v-model="searchVids" @input="$emit('passsearch',searchVids)"  placeholder="Search for tutorials,courses and materials"/>
   <button class="btnsub" @click="$emit('passsearch',searchVids);submitted()" value="donations">Submit</button>

  </center>
   </div>
 <center><!--<a class="patreons" href='https://buy.stripe.com/9AQ4j4ceX0UoeDm9AB' target='_blank' style='font-size:13px;' value="patreon">Coffee</a>!-->
 <a class="patreons" href='https://buy.stripe.com/aEU2aW1AjdHaeDm6oq' target='_blank' style='font-size:13px;' value="patreon">Hire Me</a>
 <button class="patreons" @click="btnclicked($event.target.value)" value="courses">Courses</button>
 <button class="patreons" @click="btnclicked($event.target.value)" value="books">Books</button>
  <button class="patreons" @click="btnclicked($event.target.value)" value="products">Products</button>
  <button class="patreons" @click="btnclicked($event.target.value)" value="products">Newsletter</button>
  <button class="patreons" @click="btnclicked($event.target.value)" value="products">Interview Prep</button>

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

<script >
import facebook from '../assets/facebook1.png';
import linkedin from '../assets/linkedin.png';
import tiktok from '../assets/tiktok1.png';
import twitter from '../assets/twitter1.png';
import youtube1 from '../assets/youtube.png';
import arrow from '../assets/arrow.png';
import profile from '../assets/profile.jpg'
import { ElButton, ElDialog } from 'element-plus'
import { CircleCloseFilled } from '@element-plus/icons-vue'
export default {
  props:['search'],
    data(){
        return{
           
            profile:profile,
            visible:false, 
            visible1:false,
            searchVids:'',
            facebook:facebook,
            twitter:twitter,
            youtube:youtube1,
            tiktok:tiktok
        }
    },
   
    methods:{
      burgeroff(){
       this.$store.state.hamburgeron=false;
      },
      btnclicked(v){
        if(v.includes('books')){
           this.$router.push({path:'/books'})
        }
        else if(v.includes('products')){
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

},
submitted(){

  this.searchVids=''
}
    },

}

</script>

<style scoped>
li{
  display: inline-block;
  margin:5px;
  opacity:.8;
  height:50px;
  width:80px;
  background-color: transparent;
  padding-top:8px;
  
}
li:hover{
 cursor: pointer;
}
.social{
  text-align: center;
 
}

.my-header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}



.container{
    position: relative;
    top:100px;
    height:500px;
    color:black;
    z-index: 1000;
}
.patreons{
    position: relative;
    top:55px;
    background-color: transparent;
    color:black;
    font-weight: bold;
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
.btnsub{
     position: relative;
    top:50px;
    background-color:transparent ;
    color:#001a1f;
    padding:7px;
    font-weight: bold;
   border-top:0px;
    border-bottom:0px;
    border-left:0px;
    border-right:.2px solid white;
    margin:5px;
}
.btnsub:hover{
    
    background-color:white ;
    color:black;
    padding:7px;
     cursor:pointer;
     border-top:0px;
    border-bottom:0px;
    border-left:0px;
 
    
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