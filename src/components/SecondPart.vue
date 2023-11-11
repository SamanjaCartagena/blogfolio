<template>
      <div class="cardtogether" @click='burgeroff'>
    <div class="card" v-for="v in filteredSearches" :key='v.id' >
  <div class="card-content">
    <p class="title">
      <iframe width="100%" height="100%" :src="v.vid" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </p>
    <p class="subtitle">
      {{v.title}}
    </p>
  </div>
  <footer class="card-footer">
    <p class="card-footer-item">
      <span>
        View on <a href="https://hackernoon.com/creating-a-racist-ai-for-my-browser-with-javascript-and-brain-js" target='_blank'>Hackernoon</a>
      </span>
    </p>
   
  </footer>
</div>

 
  
      </div>    
   
   

</template>

<script>
import ml from '../assets/ml.jpg'
export default {
  props:['results'],
    data(){
        return{
            ml:ml,
            videos:[
              {
                id:1,
                title:'Create a racist AI',
                vid:'https://www.youtube.com/embed/-IWgNtfqdAU'
              },
              {
                id:2,
                title:'Keep-alive in Vue JS',
                vid:"https://www.youtube.com/embed/wQvYLQwf5vU"
              },
              {
                id:3,
                title:'State management with VUEX',
                vid:"https://www.youtube.com/embed/yyvooABwncI" 
              },
              {
                id:4,
                title:'Create a thumbnail for a website',
                vid:'https://www.youtube.com/embed/TuPHfa-x1jo'
              },
               {
                id:5,
                title:'Fix routing issues for Netlify deployment',
                vid:'https://www.youtube.com/embed/zrTIiNI8mGo'
              },
               {
                id:6,
                title:'Make a simple counter with Vue Js and Vuex',
                vid:'https://www.youtube.com/embed/W1gcmEaRSJI'
              },

               {
                id:7,
                title:'Build an image slider using React and react hooks',
                vid:'https://www.youtube.com/embed/K0k0zy4bAkoU'
              },

                 {
                id:8,
                title:'Recursion in JAVA',
                vid:'https://www.youtube.com/embed/JFvUWv7C5o8'
              }
            ]
            
             
        }
    },
    methods:{
      burgeroff(){
       this.$store.state.hamburgeron=false;
      },
      brainclicked(){
        console.log("Machine clicked")
      },
      secondclicked(){
        console.log('Second clicked')
      }
    },
    computed:{
      filteredSearches(){
        return this.videos.filter(videos=>videos.title.toLowerCase().includes(this.results.toLowerCase()))
      }
    }

}
</script>

<style scoped>
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  }
.title{
  height:300px;
 
}

.card{
    width: 24%;
    margin:5px;
    text-align: center;
    z-index: 1000;
    background-color: transparent;
  animation-name: spin;
  animation-duration: 5000ms;
}
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.box-card {
  width: 480px;
}
.bottom {
  margin-top: 13px;
  line-height: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.button {
  padding: 0;
  min-height: auto;
}
.heading{
  color:#001a1f;
  font-size: 25px;
  text-align: center;
}

.image {
  width: 100%;
  display: block;
  height:300px;
}
.column{
    height:300px;
    padding:0px;
    margin:0px;
    margin:10px;
    display:grid;
    border:1px solid black;
}

.cardtogether{
  display:flex;
    flex-wrap: wrap;
    z-index: 1000;
   

  
}
@keyframes spin {
    from {
        transform:rotate(0deg);
    }
    to {
        transform:rotate(360deg);
    }
}
@media only screen and (max-width:1100px){
   .card
  {
    width:49%;
  }
 
}
@media only screen and (max-width:900px){
   .card
  {
    width:49%;
  }
 
}
@media only screen and (max-width:820px){
  .colstyler{
    margin:5px;
  }
  .card
  {
    width:100%;
  }
  .cardtogether{
    display:grid;
    grid-auto-columns: auto;
  }
.image {
  width: 100%;
  display: block;
  height:120px;
}
.columns{
  margin:0px;
}
}
</style>