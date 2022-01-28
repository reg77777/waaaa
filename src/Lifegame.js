import React,{useState,useEffect} from "react";
import {Grid,Typography,Button,Box} from '@material-ui/core';

class Cell{
    constructor(y,x,sz,alive){
        this.y=y;
        this.x=x;
        this.sz=sz;
        this.alive=alive;
    }
    draw(ctx){
        if(this.alive){
            ctx.fillRect(this.x*this.sz,this.y*this.sz,this.sz,this.sz);
        }
    }
    clear(ctx){
        ctx.clearRect(this.x*this.sz,this.y*this.sz,this.sz,this.sz);
    }
};

class Board{
    constructor(H,W,m){
        this.H=H
        this.W=W;
        this.m=m;
        this.cells=new Array(H);
        for(let i=0;i<H;i++){
            this.cells[i]=new Array(W);
            for(let j=0;j<W;j++){
                this.cells[i][j]=new Cell(i,j,m,0);
            }
        }
        this.rndset();
    }
    rndset(){
        let array=Array(this.H);
        for(let i=0;i<this.H;i++){
            array[i]=Array(this.W);
            for(let j=0;j<this.W;j++){
                array[i][j]=Math.floor(Math.random()*2);
            }
        }
        this.set(array);
    }
    set(array){
        for(let i=0;i<this.H;i++){
            for(let j=0;j<this.W;j++){
                this.cells[i][j].alive=array[i][j];
            }
        }
    }
    draw(){
        var canvas=document.getElementById('canvas');
        if(canvas.getContext){
            var ctx=canvas.getContext('2d');
            ctx.fillStyle ="rgba(97,184,64)";
            for(let i=0;i<this.H;i++){
                for(let j=0;j<this.W;j++){
                    this.cells[i][j].clear(ctx);
                    this.cells[i][j].draw(ctx);
                }
            }
        }
    }
    clear(){
        var canvas=document.getElementById('canvas');
        if(canvas.getContext){
            var ctx=canvas.getContext('2d');
            for(let i=0;i<this.H;i++){
                for(let j=0;j<this.W;j++){
                    this.cells[i][j].clear(ctx);
                }
            }
        }
    }
    update(){
        let dy=[-1,1,0,0,-1,-1,1,1];
        let dx=[0,0,-1,1,1,-1,1,-1];
        let na=new Array(this.H);
        for(let i=0;i<this.H;i++){
            na[i]=new Array(this.W);
            for(let j=0;j<this.W;j++){
                let c=0;
                for(let k=0;k<8;k++){
                    let ny=i+dy[k];
                    let nx=j+dx[k];
                    if(0<=ny&&ny<this.H&&0<=nx&&nx<this.W&&this.cells[ny][nx].alive){
                        c++;
                    }
                }
                if(this.cells[i][j].alive){
                    if(c===0||c===1){
                        na[i][j]=0;
                    }
                    else if(c===2||c===3){
                        na[i][j]=1;
                    }
                    else{
                        na[i][j]=0;
                    }
                }
                else{
                    if(c===3){
                        na[i][j]=1;
                    }
                    else{
                        na[i][j]=0;
                    }
                }
            }
        }
        console.log(na);
        this.set(na);
    }
};

function Lifegame(){

    let board=new Board(80,100,7);

    const intervalMs=100;

    useEffect(() => {
        const intervalId=setInterval(() =>{
            board.update();
            board.draw();
        },intervalMs);
        return () => {
            clearInterval(intervalId)
        };
    });

    function clickrndbtn(){
        board.rndset();
        board.draw();
    };

    return (
        <div className='Lifegame'>
            <Box m={5}/>
            <Grid container alginItems='center' justify='center'>
                <Grid item xs={10}>
                    <Button  color='primary' onClick={clickrndbtn} style={{id:'rndbtn'}}>
                        ランダム
                    </Button>
                </Grid>
                <Grid item xs={10}>
                    <Box m={5}/>
                </Grid>
                <Grid item xs={9}>
                    <canvas width="720" height="720" id="canvas"></canvas>
                </Grid>
            </Grid>
        </div>
    );
}

export default Lifegame;
