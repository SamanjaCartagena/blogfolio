<template>
  <div >
    <center>
    <p style="font-size:30px;"><strong>Find me on Twitter </strong>

    <img :src="this.twitter" style="width:60px; height:60px; padding:5px; position:relative; top:20px;"/>
    </p>
    </center>
  </div>
</template>

<script>
import twitter from '../assets/twitter.png'
export default {
    data(){
        return {
            twitter:twitter
        }
    }

}
</script>

<style>

</style>