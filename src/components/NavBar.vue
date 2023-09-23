<template>
  <div>
    <nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <router-link class="navbar-item" to="/">
     <p style="font-size:30px;"><strong>Coding with Samanja</strong></p>
    </router-link>
    <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
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
          Back End
        </a>

        <div class="navbar-dropdown">
          <a class="navbar-item">
            Java
          </a>
          <a class="navbar-item">
            Python
          </a>
          <a class="navbar-item">
            Ruby on Rails
          </a>
          <a class="navbar-item">
            PHP
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
        <button class='iconbtn' value='linkedin' @click='iconclicked($event.target.value)'><img :src="this.linkedin" class='iconimage' @click='iconclicked'/>Instagram</button><br/>
        <button class='iconbtn'  @click='iconclicked($event.target.value)' value='tiktok'><img :src="this.tiktok" class='iconimage'/>Tiktok</button><br/>
                <button class='iconbtn' @click='iconclicked($event.target.value)' value='pinterest'><img :src="this.pinterest" class='iconimage' @click='iconclicked' />Pinterest</button><br/>
                                <button class='iconbtn' @click='iconclicked($event.target.value)' value='youtube'><img :src="this.youtube" class='iconimage' @click='iconclicked'/>Youtube</button><br/>
        <p style='padding-top:80px; padding-left:40px; font-size:25px; font-family:Times New Roman'><strong>Sign up for my monthly Newsletter</strong></p>
        <input type='email' placeholder='Email' class='emailsignup'/>
         <img :src="this.arrow" style='width:40px;height:40px; position:relative; left:50px;; top:50px;border:1px solid #d5a341'/>

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
export default {
  data(){
    return{
      dialogVisible:false,
      mail:'',
      drawer:false,
      facebook:facebook,
      linkedin:linkedin,
      tiktok:tiktok,
      twitter:twitter


    }
  },
  methods:{

    submission(){
      this.dialogVisible=false;
    addDoc(usersCollectionRef,{
     email:this.mail,


    })
      console.log(this.$store.state.email)
      this.mail=''
    },
    twitterClicked(){
      this.$router.push({path:'/twitter'})
      window.open(routeData.href, '_blank');

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
}
</style>