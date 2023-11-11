<template>
  <div class="twitterPageContainer">
    <center>

    <p style="font-size:30px; background-color:#001a1f; color:white;position:relative; bottom:10px; ">Find me on Twitter 

    <img :src="this.twitterlogo" style="width:40px; height:40px; padding:5px; position:relative; top:10px;"/>
    </p>
    <div class="columns">
    <div class="column">
      
       <blockquote class="twitter-tweet"><p lang="en" dir="ltr"><a href="https://twitter.com/Samanja09?ref_src=twsrc%5Etfw">@Samanja09</a> I just watched your racist AI video and I am not even kidding, I almost fell out of my chair laughing! That was PURE GREATNESS!<br>&quot;...it looks like my AI is stupid!&quot;</p>&mdash; andrewthecoder (@andrewerwin1973) <a href="https://twitter.com/andrewerwin1973/status/1688125516266573825?ref_src=twsrc%5Etfw">August 6, 2023</a></blockquote> 

    </div>
    <div class="column">
<blockquote class="twitter-tweet"><p lang="en" dir="ltr">I&#39;ve been learning Vue.js for a while now, I just came across this tutorial by <a href="https://twitter.com/Samanja09?ref_src=twsrc%5Etfw">@Samanja09</a> on how to create a custom modal with Vue.js.<br><br> Learned some concept about Vue.js from following the tutorial.<br><br>Thanks for the tutorial Samanja, well done!<a href="https://t.co/EReDXfc6jg">https://t.co/EReDXfc6jg</a></p>&mdash; Deji ✍️ (@thecodeangle) <a href="https://twitter.com/thecodeangle/status/1684626089925058560?ref_src=twsrc%5Etfw">July 27, 2023</a></blockquote>
    </div>
    <div class="column">
      
    </div>
    </div>

    </center>
  </div>
</template>

<script>
import twitterlogo from '../assets/twitter.png'
export default {
  metaInfo: {
      script: [
        { src: 'https://platform.twitter.com/widgets.js', async: true, defer: true }
      ],
    },
    data(){
        return {
            twitterlogo:twitterlogo
        }
    }, 
    mounted(){
      
          const recaptchaScript = document.createElement("script");
    recaptchaScript.setAttribute(
      "src",
      "https://platform.twitter.com/widgets.js"
    );
    document.head.appendChild(recaptchaScript);
      
      
    }

}
</script>

<style>
.twitterPageContainer{
  z-index: 1000;
  background-color: black;
}
.twitter-tweet{
  z-index: 1000;
}
</style>