<template>
  <div class="container" v-show="isshow">
    <div class="box">
      <div class="spinner">
    </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isshow: false
    }
  },
  methods: {
    showloading () {
      this.isshow = true
    },
    hideloading () {
      this.isshow = false
    }
  }
}
</script>

<style scoped>
.container{
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: transparent;
}
.box{
  width: 40px;
  height: 40px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.spinner {
  width: 100%;
  height: 100%;
  background-color: #e38049;
  border-radius: 100%; 
  -webkit-animation: scaleout 1.0s infinite ease-in-out;
  animation: scaleout 1.0s infinite ease-in-out;
}
 
@-webkit-keyframes scaleout {
  0% { -webkit-transform: scale(0.0) }
  100% {
    -webkit-transform: scale(1.0);
    opacity: 0;
  }
}
 
@keyframes scaleout {
  0% {
    transform: scale(0.0);
    -webkit-transform: scale(0.0);
  } 100% {
    transform: scale(1.0);
    -webkit-transform: scale(1.0);
    opacity: 0;
  }
}
</style>

