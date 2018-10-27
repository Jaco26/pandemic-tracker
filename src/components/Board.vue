<template>
  <div>
    <canvas style="margin: 0px 0px;" ref="canvas"></canvas>
  </div>
</template>

<script>
import boardImgSRC from '../assets/pandemic-board.png'
export default {
  mounted () {
    const canvas = this.$refs.canvas;    
    canvas.width = 900;
    canvas.height = 600;
    const ctx = canvas.getContext('2d');
    const boardImg2 = new Image()
    boardImg2.src = boardImgSRC;    
    boardImg2.onload = function(e) {
      ctx.drawImage(this, 0, 0, 900, 600)
    }
  },
}
</script>
