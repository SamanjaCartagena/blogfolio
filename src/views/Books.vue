<template>
  <div class="bookcontainer">
 <div class="columns">
  
  <div class="column">
    <img :src='this.book1'  class="book"/>
    <br/>
    
   <a href='https://www.amazon.com/Playing-JavaScript-Beginners-Samanja-Cartagena/dp/B0BLGP59B4'
   target='_blank'
    class='hbuttons'>Buy Book</a>

  </div>

  <div class="column">
    <p>
      <strong>
      My coding career began in college. I was majoring in Computer Science. 
      I built a custom website for a neighborhood beauty salon using HTML, CSS and JavaScript.
       It was a static website that only focused on aesthetics and photos but I was happy.
       I have finally managed to make sense of what all the learning was about and earn $600 from the experience.
        For the first time in my life, I felt like a creator, a designer, a marketer and an entrepreneur at the same.
         My little project opened my mind. I was over the moon with euphoric feelings of doing something valuable with the skills that I acquired in college. 
         I also self taught myself a lot of coding from You tube. 
         After my project was over, I became even more determined to take my coding career very seriously. 
         I started learning from You tube. My entire days would revolve around coding along with Youtubers. 
         But then, I started feeling very empty. </strong></p>
         <button @click='read' id='readbtn'>Read More ...</button>
         <p id='secondread'>
          <strong>
          My career satisfaction was dissolving.
          I was not doing well in school projects. Learning from you tube was backfiring an
          d I was becoming a bad coder. Now, don’t get me wrong, I think Youtube is a great
           platform for programmers to learn how to code. I think it has transformed the world
            of learning. But there is a darker side to this kind of learning, especially coding.
             You can pause, play, rewind, and fast forward a video. You can make great projects with
              great Youtube coding videos but not actually learn anything. I got into something called
               a tutorial nightmare. I kept watching Youtube videos and creating programs and projects.
                One tutorial after another, without actually absorbing or learning much. It was like 
                cheating from a friend during a hard test. Mindless copying of codes that I was not creating. 
                I was coding for many many hours a day. But yet, something did not feel right. 
                I had projects to showcase in my portfolio but I only have a vague memory of
                 how I have created it. Then this idea came to me. I started taking notes
                  and screen shots while programming. I decided to take notes on JavaScript 
                  because to me that was the hardest and I wrote down all the codes in a notebook. 
                  Before going to bed every night I would open my notebook and review those codes. 
                  After a few days JavaScript became my favorite, it never appeared like homework,
                   or work or an assignment. It always seemed like a fun game I enjoyed playing
                    around with. Regularly reviewing these notes transformed my life and my 
                    understanding of JavaScript.
       I am hoping to bring out the same from my readers with my book Playing Around with JavaScript.
          </strong>
       <br/>
                <button @click='readless' id='readbtn1'>Read Less...</button>

    </p>
    
  </div>
 
 
</div>
  </div>
</template>

<script>
import book1 from '../assets/javascript.png'
export default {

  data(){
    return {
      book1:book1,
      colors:['red','blue','yellow','green']
    }
  },
  methods:{
    read(){
  const reads= document.getElementById("secondread");
  reads.style.display="block";
document.getElementById("readbtn").style.display="none"
},

readless(){
  const readless= document.getElementById("secondread");
  readless.style.display="none";
document.getElementById("readbtn").style.display="block"

}
  },
  mounted:{
    
  }
 
}
</script>

<style scoped>
.bookcontainer{
  z-index: 1000;
}
.column{
    height:300px;
    margin:10px;
}
#readbtn{
  background-color: transparent;
  border:0px;
  color:blue;
}
#readbtn:hover{
  cursor:pointer;
}
#readbtn1{
 background-color: transparent;
  border:0px;
  color:blue;
}
#readbtn1:hover{
  cursor:pointer;
}
#secondread{
  display:none;
  
}
.book{
  height:450px;
  width:75%;
  text-align: center;
}
.hbuttons{
  width:200px;
  height:60px;
  background-color:#001a1f;
  
  color:white;
  padding:10px;
  border:.5px solid white;
}

.column{
  position: relative;
  top:20px;
  height:auto;
  text-align: center;
}

@media only screen and (max-width:700px){
.book{
  height:450px;
  width:90%;
}

}


</style>