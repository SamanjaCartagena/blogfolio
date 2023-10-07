<template>
  <div >
    <nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <router-link   to="/">
     <p class='logo' ><strong>Coding with Samanja</strong></p>
    </router-link>
    <a role="button" class="navbar-burger" @click='burgermenu' aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>
  <div class='burgermenuitems' v-if='this.$store.state.hamburgeron'>
    <ul >
     <li class='burgerbox'>
       Follow <p class='plus'>+</p>
     </li>
     <div class='follows' >

     </div>
     <li class='burgerbox'>
       Newsletter <p class='plus'>+</p>
     </li>
<li class='burgerbox'>
       Frontend <p class='plus'>+</p>
     </li>
<li class='burgerbox'>
       BackEnd <p class='plus'>+</p>
     </li>
<li class='burgerbox'>
       Projects <p class='plus'>+</p>
     </li>
<li class='burgerbox'>
       Courses <p class='plus'>+</p>
     </li>
     <li class='burgerbox'>
       Books <p class='plus'>+</p>
     </li>
     <li class='burgerbox'>
       Products <p class='plus'>+</p>
     </li>
     <li class='burgerbox'>
       Hire Me <p class='plus'>+</p>
     </li>

    </ul>

  </div>

  <div id="navbarBasicExample" class="navbar-menu">
    <div class="navbar-start">
  
      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link">
          Front End
        </a>

        <div class="navbar-dropdown">
          <a class="navbar-item">
            JavaScript
          </a>
          <router-link to='/' class="navbar-item">
            React JS
          </router-link>
          <a class="navbar-item">
            Brain JS
          </a>
          <a class="navbar-item">
            Vue JS
          </a>
        </div>
      </div>
      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link">
          Backend
        </a>

        <div class="navbar-dropdown">
          <a class="navbar-item">
            Java
          </a>
          <a class="navbar-item">
            Python
          </a>
          <a class="navbar-item">
           C++
          </a>
          <a class="navbar-item">
            PHP
          </a>
        </div>
      </div>
      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link">
          Projects
        </a>

        <div class="navbar-dropdown">
          <a class="navbar-item">
            Opensource
          </a>
          <a class="navbar-item">
            Linux
          </a>
         
        </div>
      </div>
    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          
 <a target="_blank" to="/" class="button " @click="drawer = true" style="background-color: black; color:white">
           <strong>Follow</strong>

          </a>
        <el-drawer  v-model="drawer" title="I am the title" :with-header="false">
         <p style='padding-top:80px; padding-left:40px; font-size:25px; font-family:Times New Roman'><strong>Follow me on</strong></p>
        <button class='iconbtn' value='facebook' @click='iconclicked($event.target.value)'><img :src="this.facebook" class='iconimage' @click='iconclicked'/>Facebook</button><br/>
        <button class='iconbtn' value='linkedin' @click='iconclicked($event.target.value)'><img :src="this.linkedin" class='iconimage' @click='iconclicked'/>Linkedin</button><br/>
        <button class='iconbtn'  @click='iconclicked($event.target.value)' value='tiktok'><img :src="this.tiktok" class='iconimage'/>Tiktok</button><br/>
                <button class='iconbtn'  @click='twitterClicked' value='tiktok'><img :src="this.twitter" class='iconimage'/>Twitter</button><br/>

                                <button class='iconbtn' @click='iconclicked($event.target.value)' value='youtube'><img :src="this.youtube" class='iconimage' @click='iconclicked'/>Youtube</button><br/>
        <p style='padding-top:80px; padding-left:40px; font-size:25px; font-family:Times New Roman'><strong>Sign up for my monthly Newsletter</strong></p>
        <input type='email' placeholder='Email' class='emailsignup'/>
         <img :src="this.arrow" class="arrow" style='width:40px;height:40px; position:relative; left:20px;top:8px; border:1px solid #d5a341'/>

  </el-drawer>
           <a target="_blank"  @click="dialogVisible = true; " class="button is-light" >
           <strong>Newsletter</strong>
          </a>
        
        </div>
      </div>
    </div>
  </div>
</nav>

  <el-dialog
    v-model="dialogVisible"
    title="Tips on Coding"
    width="30%"
    :before-close="handleClose"
  >
  <span>
      <strong>Sign up for Newsletter </strong>
    </span>  
     <form>
      <input style="width:300px; height:30px;" type='email' v-model='mail' placeholder="Email"/>
      
     </form>
    
      <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">Cancel</el-button>
        <el-button type="primary" @click="submission">
          Submit
        </el-button>
      </span>
    </template>
  </el-dialog>

  </div>
</template>

<script>
import { ElMessageBox } from 'element-plus'
import { onAuthStateChanged } from 'firebase/auth';
import {auth, email,usersCollectionRef} from '../firebase/index'
import {
  doc,collection,
  query,orderBy, 
  limit, getDocs, 
  onSnapshot, QuerySnapshot, 
  updateDoc, addDoc, 
  deleteDoc
   }
   from 'firebase/firestore'
import facebook from '../assets/facebook.png';
import linkedin from '../assets/linkedin.png';
import tiktok from '../assets/tiktok.png';
import twitter from '../assets/twitter.png';
import youtube from '../assets/youtube1.png';
import arrow from '../assets/arrow.png';
export default {
  data(){
    return{
      dialogVisible:false,
      mail:'',
      drawer:false,
      facebook:facebook,
      linkedin:linkedin,
      tiktok:tiktok,
      twitter:twitter,
      youtube:youtube,
      arrow:arrow


    }
  },
  methods:{
    
     iconclicked(v){
      console.log("This particular icon "+v+" has been clicked")
      if(v.includes('facebook')){
        window.open('https://www.facebook.com/profile.php?id=100078037805507','_blank')
      }
      else if(v.includes('tiktok')){
        window.open('https://www.tiktok.com/@codingwithsamanja','_blank')
      }
      else if(v.includes('linkedin')){
        window.open('https://www.linkedin.com/in/samanja-cartagena-80aa8920a/','_blank')
      }
      else if(v.includes('youtube')){
        window.open('https://www.youtube.com/channel/UCUe9B_qnHgGzWUTSrE_7AtQ','_blank')
      }
     },
    submission(){
      this.dialogVisible=false;
    addDoc(usersCollectionRef,{
     email:this.mail,


    })
      console.log(this.$store.state.email)
      this.mail=''
    },
    burgermenu(){
      if(this.$store.state.hamburgeron==false){
        this.$store.state.hamburgeron=true;
      }
      else if(this.$store.state.hamburgeron==true){
        this.$store.state.hamburgeron=false;
      }
    },

    twitterClicked(){
      this.drawer=false;
     // this.$router.push({path:'/twitter'})
     window.open('https://samanja.dev/twitter','_blank')

          const recaptchaScript = document.createElement("script");
    recaptchaScript.setAttribute(
      "src",
      "https://platform.twitter.com/widgets.js"
    );
  document.head.appendChild(recaptchaScript);
      
    }


  }

}
</script>

<style>
.burgermenuitems{
  position: relative;
  top:40px;
}
.plus{
  float:right;
  color:#d5a341;
  padding-right:10px;
  font-size: 18px;
  position: relative;
  right:4px;

}
.emailsignup{
  position: relative;
  left:10px;
  height:35px;
  border:1px solid #d5a341;

}
.iconbtn{
  background-color: black;
  color:white;
  font-size: 20px;
  border-radius:2px;
  border:1px solid #d5a341;
  margin:10px;
  width:200px;
 
}
.arrow:hover {
  cursor:pointer
}
.logo{
  position:relative;
  top:15px;
   margin:10px;
    color:black;
    font-size: 30px;

}
.burgerbox{
  width:100%;
  height:45px;
  background-color: black;
  color:white;
  text-align: center;
  border:1px solid #d5a341;
  border-radius:4px;
  padding-top:9px;
}
.burgerbox:hover{
  cursor: pointer;
}
.iconbtn:hover{
  background-color: white;
  color:black;
  cursor:pointer;
}
.iconimage{
  font-size: 20px;
  height:20px;
  width:20px;
  margin:5px;
  position: relative;
  
  float:left;
}
.navbar{
    height:100px;
    font-family: 'Helvetica Neue', Helvetica, 'PingFang SC', 'Hiragino Sans GB',
  'Microsoft YaHei', '微软雅黑', Arial, sans-serif;;
}
@media only screen and (max-width:700px){
.navbar{
  padding:5px;
  position:relative;
  top:10px;
}
.logo{
  font-size: 25px;
  position: absolute;
  margin:0px;
  left:10px;
  top:15px;
}
}
</style>