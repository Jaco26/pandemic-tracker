<template>
  <div>
    <canvas style="margin: 0px 0px;" ref="canvas"></canvas>
  </div>
</template>

<script>
import boardImgSRC from '../assets/pandemic-board.png';
import { cities } from '@/lists/cities';
export default {
  methods: {
    drawGrid(ctx) {
      const width = ctx.canvas.width;
      const height = ctx.canvas.height;
      const nXSlice = 50
      const nYSlice = 30;
      const xIncrement = width / nXSlice;
      const yIncrement = height / nYSlice;
      for (let i = 0; i < nXSlice; i++) {
        const num = i + 1
        const xStart = xIncrement * num;      
        ctx.beginPath();
        ctx.strokeStyle = 'black'
        ctx.moveTo(xStart, 0);
        ctx.lineTo(xStart, height);
        ctx.font = "15px Arial";
        ctx.strokeStyle = 'black';
        ctx.strokeText(num.toString(), xStart, 15);
        ctx.stroke();
      }

      for (let i = 0; i < nYSlice; i++) {
        const num = i + 1;
        const yStart = yIncrement * num;        
        ctx.beginPath();
        ctx.strokeStyle = 'black'
        ctx.moveTo(0, yStart);
        ctx.lineTo(width, yStart);
        ctx.font = "15px Arial";
        ctx.strokeStyle = 'black';
        ctx.strokeText(num.toString(), 5, yStart);
        ctx.stroke();
      }
    },
    drawCanvas() {
      const canvas = this.$refs.canvas;    
      canvas.width = 900;
      canvas.height = 600;
      const ctx = canvas.getContext('2d');
      const boardImg2 = new Image()
      boardImg2.src = boardImgSRC;    
      boardImg2.onload = (e) => {
        ctx.drawImage(boardImg2, 0, 0, canvas.width, canvas.height)
        // this.drawGrid(ctx);
        this.applyGameOverlay(ctx);
      }
      
    },
    applyGameOverlay(ctx) {
      const width = ctx.canvas.width;
      const height = ctx.canvas.height;
      cities.forEach(city => {
        const x = width / (city.xRatioKey / city.pos.xRatio);
        const y = height / (city.yRatioKey / city.pos.yRatio);        
        ctx.beginPath();
        ctx.arc(x, y, 10, 0, Math.PI * 2);
        ctx.strokeStyle = city.color;
        ctx.fillStyle = 'black';
        ctx.fillText(city.name, x + 5, y - 15)
        ctx.stroke();
        ctx.closePath();
      });
      
    }
  },
  mounted () {
    this.drawCanvas();
  },
}
</script>
