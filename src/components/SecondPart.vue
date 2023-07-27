<template>
      <div>
      <div class="columns">
  <div class="column">
    First column
  </div>
  <div class="column">
    Second column
  </div>
  <div class="column">
    Third column
  </div>
  <div class="column">
    Fourth column
  </div>
</div>
 <div class="columns">
  <div class="column">
    First column
  </div>
  <div class="column">
    Second column
  </div>
  <div class="column">
    Third column
  </div>
  <div class="column">
    Fourth column
  </div>
</div>
      </div>    
   
   

</template>

<script>
import img1 from '../assets/img1.jpg'
import img2 from '../assets/img2.jpg'
export default {
    data(){
        return{
            cards:[
                {
                    id:1,
                    pic:img1
                   
                    
                },
                {
                    id:2,
                    pic:img2
                },
                {
                    id:3,
                    pic:img1
                },{
                    id:4,
                    pic:img2
                },
                {
                    id:5,
                    pic:img1
                },{
                    id:6
                },{
                    id:6,
                    pic:img2
                },
                {
                    id:7,
                    pic:img1
                },
                {
                    id:8,
                    pic:img2
                }
            ]
        }
    }

}
</script>

<style scoped>

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

.image {
  width: 100%;
  display: block;
  height:300px;
}

@media only screen and (max-width:700px){
  .colstyler{
    margin:5px;
  }
.image {
  width: 100%;
  display: block;
  height:120px;
}
}
</style>