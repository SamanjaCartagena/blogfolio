<template>

     <el-row>
      
    <el-col
      v-for="(card, index) in cards"
      :key="card.id"
      :span="8"
      :offset="index > 0 ? card : 0"
    >
      <el-card :body-style="{ padding: '0px' }">
        <img
          :src="card.pic"
          class="image"
        />
        <div style="padding: 14px">
          <span>Yummy hamburger</span>
          <div class="bottom">
            <time class="time">{{ currentDate }}</time>
            <el-button text class="button">Operating</el-button>
          </div>
        </div>
      </el-card>
    </el-col>
       
  </el-row>

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