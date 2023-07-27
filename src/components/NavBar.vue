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
      <a class="navbar-item">
        Home
      </a>

      <a class="navbar-item">
        Documentation
      </a>

      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link">
          More
        </a>

        <div class="navbar-dropdown">
          <a class="navbar-item">
            About
          </a>
          <a class="navbar-item">
            Jobs
          </a>
          <a class="navbar-item">
            Contact
          </a>
          <hr class="navbar-divider">
          <a class="navbar-item">
            Report an issue
          </a>
        </div>
      </div>
    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <router-link target="_blank" to="/twitter" class="button" style="background-color: #001a1f; color:white">
            <strong>Twitter</strong>
          </router-link>
          <router-link target="_blank" to="/" class="button is-light">
           <strong>Discord</strong>
          </router-link>

          <router-link target="_blank" to="/" class="button"  style="background-color: #001a1f; color:white">
           <strong> Meta </strong>
          </router-link>
           <a target="_blank"  @click="dialogVisible = true" class="button is-light">
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
      Sign up for Newsletter 
    </span>  
     <form>
      <input type='email' v-model='mail' placeholder="Email"/>
      
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

export default {
  data(){
    return{
      dialogVisible:false,
      mail:''
    }
  },
  methods:{
    submission(){
      this.dialogVisible=false;
      this.$store.state.email=this.mail;
      console.log(this.$store.state.email)
      this.mail=''
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