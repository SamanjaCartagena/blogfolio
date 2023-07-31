<template>
      <div class="cardtogether">
    
    <div class="card" v-for="v in videos" :key='v.id' >
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
        View on <a href="https://twitter.com/codinghorror/status/506010907021828096">Twitter</a>
      </span>
    </p>
    <p class="card-footer-item">
      <span>
        Share on <a href="#">Facebook</a>
      </span>
    </p>
  </footer>
</div>

 

      </div>    
   
   

</template>

<script>
import ml from '../assets/ml.jpg'
export default {
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
                title:'Create a racist AI',
                vid:'https://www.youtube.com/embed/-IWgNtfqdAU'
              },
              {
                id:3,
                title:'Create a racist AI',
                vid:'https://www.youtube.com/embed/-IWgNtfqdAU'
              },
              {
                id:4,
                title:'Create a racist AI',
                vid:'https://www.youtube.com/embed/-IWgNtfqdAU'
              },
               {
                id:5,
                title:'Create a racist AI',
                vid:'https://www.youtube.com/embed/-IWgNtfqdAU'
              },
               {
                id:6,
                title:'Create a racist AI',
                vid:'https://www.youtube.com/embed/-IWgNtfqdAU'
              },
               {
                id:7,
                title:'Create a racist AI',
                vid:'https://www.youtube.com/embed/-IWgNtfqdAU'
              }
            ]
            
             
        }
    },
    methods:{
      brainclicked(){
        console.log("Machine clicked")
      },
      secondclicked(){
        console.log('Second clicked')
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
@media only screen and (max-width:770px){
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