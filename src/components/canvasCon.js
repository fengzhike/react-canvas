'use strict';
import React from 'react';
import CanvasBtn from './canvasBtn.js'

var CanvasCon = React.createClass({
    arr:[],
    getCanvas:function(){
        return{
            canvas:this.refs.canvas,
            oGC:this.refs.canvas.getContext("2d")
        }
    },
    getInitialState:function () {
        return {
            x:0,
            y:0,
            draw:false,
            saveImg:''
        }
    },
    handleMouseDown: function (event) {
        this.setState({
            x:event.clientX - this.getCanvas().canvas.offsetLeft,
            y:event.clientY - this.getCanvas().canvas.offsetTop,
            draw:true
        })

        this.getCanvas().oGC.lineWidth = 5;
        this.getCanvas().oGC.strokeStyle = 'red';
        this.getCanvas().oGC.beginPath();
        this.getCanvas().oGC.lineJoin = "round";
        this.getCanvas().oGC.lineCap = "round";
        this.getCanvas().oGC.moveTo(this.state.x, this.state.y);

        var imgData = this.getCanvas().oGC.getImageData(0, 0, 500, 400);
        this.arr.push(imgData);
    },
    handleMouseMove: function (event) {
        this.setState({
            x:event.clientX - this.getCanvas().canvas.offsetLeft,
            y:event.clientY - this.getCanvas().canvas.offsetTop
        })
        if(this.state.draw){
            this.getCanvas().oGC.lineTo(this.state.x, this.state.y);
            this.getCanvas().oGC.stroke();
        }
    },
    handleMouseUp: function (event) {
        this.setState({
            draw:false
        })
    },
    onClear: function () {
        if (this.arr.length === 0){
            alert('先画两笔吧 ☺');
            return;
        }
        this.getCanvas().oGC.clearRect(0, 0, this.getCanvas().canvas.offsetWidth, this.getCanvas().canvas.offsetHeight);
        this.setState({
            saveImg:''
        })
        this.arr.length = 0;
    },
    onRevoke: function () {
        if (this.arr.length === 0){
            alert('先画两笔吧 ☺');
            return;
        }
        this.getCanvas().oGC.clearRect(0, 0, 500, 400);
        this.getCanvas().oGC.putImageData(this.arr[this.arr.length - 1], 0, 0);
        this.arr.pop();
    },
    onSave: function () {
        if (this.arr.length === 0){
            alert('先画两笔吧 ☺');
            return;
        }
        var imgUrl = this.getCanvas().canvas.toDataURL();
        this.setState({
            saveImg:imgUrl
        })
        location.hash="preview:123"
    },
    render: function () {
        return (
            <div>
                <canvas style={{border:'1px solid #ccc',cursor:'default',marginBottom: '10px'}} ref="canvas" onMouseDown={this.handleMouseDown} onMouseMove={this.handleMouseMove}  onMouseUp={this.handleMouseUp} width="500" height="400">浏览器不支持canvas</canvas>
                <br/>{'X: '+this.state.x + ', Y: ' + this.state.y}
                <CanvasBtn callbackClear={this.onClear} callbackRevoke={this.onRevoke} callbackSave={this.onSave} />
            </div>
        )
    }
})
export default CanvasCon
