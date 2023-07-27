<template>
  <div >
    <center>
    <p style="font-size:30px;"><strong>Find me on Twitter </strong>

    <img :src="this.twitterlogo" style="width:60px; height:60px; padding:5px; position:relative; top:20px;"/>
    </p>
    <div style="display :flex">
      
    <blockquote class="twitter-tweet">
      <p lang="en" dir="ltr">Hosting multiple sites on a single server nginx. This would reduce the costs of hosting. There is no limit to the number of sites you can host using nginx. You just have to make sure that the server has enough disk space.</p>&mdash; Samanja Cartagena (@Samanja09) 
      <a href="https://twitter.com/Samanja09/status/1683559952097345536?ref_src=twsrc%5Etfw">July 24, 2023</a></blockquote> 

      <blockquote class="twitter-tweet"><p lang="en" dir="ltr">Can HTMX really replace complex frameworks like react?</p>&mdash; Samanja Cartagena (@Samanja09) <a href="https://twitter.com/Samanja09/status/1682727769531199489?ref_src=twsrc%5Etfw">July 22, 2023</a></blockquote> 
      <blockquote class="twitter-tweet"><p lang="en" dir="ltr">React contains server side rendering and angular has client side rendering</p>&mdash; Samanja Cartagena (@Samanja09) <a href="https://twitter.com/Samanja09/status/1682412616759607299?ref_src=twsrc%5Etfw">July 21, 2023</a></blockquote>
   
      
    </div>
    </center>
  </div>
</template>

<script>
import twitterlogo from '../assets/twitter.png'
export default {
    data(){
        return {
            twitterlogo:twitterlogo
        }
    }, 
    mounted(){
    }

}
</script>

<style>

</style>