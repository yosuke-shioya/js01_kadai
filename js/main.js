'use strict';

{
  // ひだり
  const reel1 = [
    'img/orange.png',      
    'img/bell.png',        
    'img/akuma.jpeg',       
    'img/sakuranbo.png',   
    'img/suika.png',       
    'img/orange.png',      
    'img/bell.png',        
    'img/sakuranbo.png',        
    'img/reg7.png',        
    'img/suika.png',       
    'img/orange.png',     
    'img/bell.png',        
    'img/suika.png',       
    'img/orange.png',      
    'img/bell.png',        
    'img/suika.png',       
    'img/akuma.jpeg',      
    'img/suika.png',       
    'img/orange.png',      
    'img/bell.png',        
    'img/suika.png',       
    'img/akuma.jpeg',       
  ];
  
  // まんなか
  const reel2 = [
    'img/orange.png',      
    'img/bell.png',        
    'img/akuma.jpeg',       
    'img/sakuranbo.png',   
    'img/suika.png',       
    'img/orange.png',      
    'img/bell.png',        
    'img/sakuranbo.png',        
    'img/reg7.png',        
    'img/suika.png',       
    'img/orange.png',     
    'img/bell.png',        
    'img/suika.png',       
    'img/orange.png',      
    'img/bell.png',        
    'img/suika.png',       
    'img/akuma.jpeg',      
    'img/suika.png',       
    'img/orange.png',      
    'img/bell.png',        
    'img/suika.png',       
    'img/akuma.jpeg',   
  ];

  // みぎ
  const reel3 = [
    'img/orange.png',      
    'img/bell.png',        
    'img/akuma.jpeg',       
    'img/sakuranbo.png',   
    'img/suika.png',       
    'img/orange.png',      
    'img/bell.png',        
    'img/sakuranbo.png',        
    'img/reg7.png',        
    'img/suika.png',       
    'img/orange.png',     
    'img/bell.png',        
    'img/suika.png',       
    'img/orange.png',      
    'img/bell.png',        
    'img/suika.png',       
    'img/akuma.jpeg',      
    'img/suika.png',       
    'img/orange.png',      
    'img/bell.png',        
    'img/suika.png',       
    'img/akuma.jpeg',
  ];

  class Panel {
    constructor() {
      const div = document.createElement('div');
      div.classList.add('panels');

      const section1 = document.createElement('section');
      section1.classList.add('panel');
      this.img1 = document.createElement('img');
      section1.appendChild(this.img1);

      const section2 = document.createElement('section');
      section2.classList.add('panel');
      this.img2 = document.createElement('img');
      section2.appendChild(this.img2);

      const section3 = document.createElement('section');
      section3.classList.add('panel');
      this.img3 = document.createElement('img');
      section3.appendChild(this.img3);

      div.appendChild(section1);
      div.appendChild(section2);
      div.appendChild(section3);

      const main = document.querySelector('main');
      main.appendChild(div);

      this.reel = undefined;
      this.reelno = 0;
      this.bonusId = 0;
      this.koyakuId = 0;
      this.soroiPtn = 0;
      this.cmeNo = 0;
      this.cmeOnOff = 0;
      this.akumaCnt = 0;

      this.timeoutId = undefined;
    }

    set reelset(reelx) {
      this.reel = reelx;
    }

    set reelnoset(ptn) {
      this.reelno = ptn;
    }

    set bonusIdset(id) {
      this.bonusId = id;
    }

    set koyakuIdset(id) {
      this.koyakuId = id;
    }

    set soroiPtnset(ptn) {
      this.soroiPtn = ptn;
    }

    set cmeNoset(cme) {
      this.cmeNo = cme;
    }

    set cmeOnOffset(onoff) {
      this.cmeOnOff = onoff;
    }

    set akumaCntset(cnt) {
      this.akumaCnt = cnt;
    }

    getRandomImage() {
      return Math.floor(Math.random() * this.reel.length)
    }

    spin() {
      const i = this.getRandomImage();
      this.img2.src = this.reel[i];
      
      if (i === 0) {
        this.img1.src = this.reel[21];
        this.img3.src = this.reel[i + 1];
      } else if (i === 21){
        this.img1.src = this.reel[i - 1];
        this.img3.src = this.reel[0];
      } else {
        this.img1.src = this.reel[i - 1];
        this.img3.src = this.reel[i + 1];
      }

      this.timeoutId = setTimeout(() => {
        this.spin();
      }, 30);
    }

    bigbonus() {
      if(this.reelno === 1){
        if (this.bonusId === 0) {
          this.img1.src = this.reel[7];
          this.img2.src = this.reel[8];
          this.img3.src = this.reel[9];
        } else if (this.bonusId === 1) {
          this.img1.src = this.reel[6];
          this.img2.src = this.reel[7];
          this.img3.src = this.reel[8];
        } else if (this.bonusId === 2) { 
          this.img1.src = this.reel[5];
          this.img2.src = this.reel[6];
          this.img3.src = this.reel[7];
        } else if (this.bonusId === 3) {
          this.img1.src = this.reel[7];
          this.img2.src = this.reel[8];
          this.img3.src = this.reel[9]; 
        } else {
          this.img1.src = this.reel[5];
          this.img2.src = this.reel[6];
          this.img3.src = this.reel[7];
        }
      } else if (this.reelno === 2) {
          if (this.bonusId === 0) {
            this.img1.src = this.reel[9];
            this.img2.src = this.reel[10];
            this.img3.src = this.reel[11];
          } else if (this.bonusId === 1) {
            this.img1.src = this.reel[8];
            this.img2.src = this.reel[9];
            this.img3.src = this.reel[10];
          } else if (this.bonusId === 2) { 
            this.img1.src = this.reel[7];
            this.img2.src = this.reel[8];
            this.img3.src = this.reel[9];
          } else if (this.bonusId === 3) {
            this.img1.src = this.reel[8];
            this.img2.src = this.reel[9];
            this.img3.src = this.reel[10]; 
          } else {
            this.img1.src = this.reel[8];
            this.img2.src = this.reel[9];
            this.img3.src = this.reel[10];
          }
      } else {
          if (this.bonusId === 0) {
            this.img1.src = this.reel[9];
            this.img2.src = this.reel[10];
            this.img3.src = this.reel[11];
          } else if (this.bonusId === 1) {
            this.img1.src = this.reel[8];
            this.img2.src = this.reel[9];
            this.img3.src = this.reel[10];
          } else if (this.bonusId === 2) { 
            this.img1.src = this.reel[7];
            this.img2.src = this.reel[8];
            this.img3.src = this.reel[9];
          } else if (this.bonusId === 3) {
            this.img1.src = this.reel[7];
            this.img2.src = this.reel[8];
            this.img3.src = this.reel[9]; 
          } else {
            this.img1.src = this.reel[9];
            this.img2.src = this.reel[10];
            this.img3.src = this.reel[11];
          }
      }
    }

    regbonus() {
      if(this.reelno === 1){
        if (this.bonusId === 0) {
          this.img1.src = this.reel[8];
          this.img2.src = this.reel[9];
          this.img3.src = this.reel[10];
        } else if (this.bonusId === 1) {
          this.img1.src = this.reel[7];
          this.img2.src = this.reel[8];
          this.img3.src = this.reel[9];
        } else if (this.bonusId === 2) { 
          this.img1.src = this.reel[6];
          this.img2.src = this.reel[7];
          this.img3.src = this.reel[8];
        } else if (this.bonusId === 3) {
          this.img1.src = this.reel[8];
          this.img2.src = this.reel[9];
          this.img3.src = this.reel[10]; 
        } else {
          this.img1.src = this.reel[6];
          this.img2.src = this.reel[7];
          this.img3.src = this.reel[8];
        }
      } else if (this.reelno === 2) {
          if (this.bonusId === 0) {
            this.img1.src = this.reel[8];
            this.img2.src = this.reel[9];
            this.img3.src = this.reel[10];
          } else if (this.bonusId === 1) {
            this.img1.src = this.reel[7];
            this.img2.src = this.reel[8];
            this.img3.src = this.reel[9];
          } else if (this.bonusId === 2) { 
            this.img1.src = this.reel[6];
            this.img2.src = this.reel[7];
            this.img3.src = this.reel[8];
          } else if (this.bonusId === 3) {
            this.img1.src = this.reel[7];
            this.img2.src = this.reel[8];
            this.img3.src = this.reel[9]; 
          } else {
            this.img1.src = this.reel[7];
            this.img2.src = this.reel[8];
            this.img3.src = this.reel[9];
          }
      } else {
          if (this.bonusId === 0) {
            this.img1.src = this.reel[8];
            this.img2.src = this.reel[9];
            this.img3.src = this.reel[10];
          } else if (this.bonusId === 1) {
            this.img1.src = this.reel[7];
            this.img2.src = this.reel[8];
            this.img3.src = this.reel[9];
          } else if (this.bonusId === 2) { 
            this.img1.src = this.reel[6];
            this.img2.src = this.reel[7];
            this.img3.src = this.reel[8];
          } else if (this.bonusId === 3) {
            this.img1.src = this.reel[6];
            this.img2.src = this.reel[7];
            this.img3.src = this.reel[8]; 
          } else {
            this.img1.src = this.reel[8];
            this.img2.src = this.reel[9];
            this.img3.src = this.reel[10];
          }
      }
    }

    bonusTimeKoyaku() {
      if(this.reelno === 1){
        if (this.koyakuId === 0) { 
          this.img1.src = this.reel[1];
          this.img2.src = this.reel[0];
          this.img3.src = this.reel[21];
        } else if (this.koyakuId === 1 || this.koyakuId === 6) { 
          this.img1.src = this.reel[2];
          this.img2.src = this.reel[1];
          this.img3.src = this.reel[0];
        } else if (this.koyakuId === 2) { 
          this.img1.src = this.reel[3];
          this.img2.src = this.reel[2];
          this.img3.src = this.reel[1];
        } else if (this.koyakuId === 3 || this.koyakuId === 7) { 
          this.img1.src = this.reel[4];
          this.img2.src = this.reel[3];
          this.img3.src = this.reel[2]; 
        } else if (this.koyakuId === 4) {
          this.img1.src = this.reel[5];
          this.img2.src = this.reel[4];
          this.img3.src = this.reel[3]; 
        } else if (this.koyakuId === 5) {
          this.img1.src = this.reel[15];
          this.img2.src = this.reel[16];
          this.img3.src = this.reel[14]; 
        } else {
          this.img1.src = this.reel[1];
          this.img2.src = this.reel[0];
          this.img3.src = this.reel[21];
        }
      } else if (this.reelno === 2) {
        if (this.koyakuId === 0) {
          this.img1.src = this.reel[2];
          this.img2.src = this.reel[1];
          this.img3.src = this.reel[0];
        } else if (this.koyakuId === 1 || this.koyakuId === 6) {
          this.img1.src = this.reel[1];
          this.img2.src = this.reel[0];
          this.img3.src = this.reel[21];
        } else if (this.koyakuId === 2) {
          this.img1.src = this.reel[4];
          this.img2.src = this.reel[3];
          this.img3.src = this.reel[2];
        } else if (this.koyakuId === 3 || this.koyakuId === 7) {
          this.img1.src = this.reel[3];
          this.img2.src = this.reel[2];
          this.img3.src = this.reel[1]; 
        } else if (this.koyakuId === 4) {
          this.img1.src = this.reel[8];
          this.img2.src = this.reel[7];
          this.img3.src = this.reel[6]; 
        } else if (this.koyakuId === 5) {
          this.img1.src = this.reel[12];
          this.img2.src = this.reel[13];
          this.img3.src = this.reel[14]; 
        } else {
          this.img1.src = this.reel[2];
          this.img2.src = this.reel[1];
          this.img3.src = this.reel[0];
        }
      } else {
        if (this.koyakuId === 0) {
          this.img1.src = this.reel[1];
          this.img2.src = this.reel[0];
          this.img3.src = this.reel[21];
        } else if (this.koyakuId === 1 || this.koyakuId === 6) {
          this.img1.src = this.reel[2];
          this.img2.src = this.reel[1];
          this.img3.src = this.reel[0];
        } else if (this.koyakuId === 2) {
          this.img1.src = this.reel[5];
          this.img2.src = this.reel[4];
          this.img3.src = this.reel[3];
        } else if (this.koyakuId === 3 || this.koyakuId === 7) {
          this.img1.src = this.reel[4];
          this.img2.src = this.reel[3];
          this.img3.src = this.reel[2]; 
        } else if (this.koyakuId === 4) {
          this.img1.src = this.reel[3];
          this.img2.src = this.reel[2];
          this.img3.src = this.reel[1]; 
        } else if (this.koyakuId === 5) {
          this.img1.src = this.reel[12];
          this.img2.src = this.reel[13];
          this.img3.src = this.reel[14]; 
        } else {
          this.img1.src = this.reel[1];
          this.img2.src = this.reel[0];
          this.img3.src = this.reel[21];
        }
      }
    }

    replay() {
      if(this.reelno === 1){
        this.img1.src = this.reel[1];
        this.img2.src = this.reel[2];
        this.img3.src = this.reel[3];
      } else if (this.reelno === 2) {
        this.img1.src = this.reel[2];
        this.img2.src = this.reel[3];
        this.img3.src = this.reel[4];
      } else {
        this.img1.src = this.reel[3];
        this.img2.src = this.reel[4];
        this.img3.src = this.reel[5];
      }
    }

    service() {
      if(this.reelno === 1){
        this.img1.src = this.reel[15];
        this.img2.src = this.reel[16];
        this.img3.src = this.reel[17];
      } else if (this.reelno === 2) {
        this.img1.src = this.reel[12];
        this.img2.src = this.reel[13];
        this.img3.src = this.reel[14];
      } else {
        this.img1.src = this.reel[12];
        this.img2.src = this.reel[13];
        this.img3.src = this.reel[14];
      }
    }

    cme() {
      if (this.cmeNo === 0) {
        if (this.cmeOnOff === 0 || this.cmeOnOff === 1) {
          if(this.reelno === 1){
            this.img1.src = this.reel[1];
            this.img2.src = this.reel[2];
            this.img3.src = this.reel[3];
          } else if (this.reelno === 2) {
            this.img1.src = this.reel[2];
            this.img2.src = this.reel[3];
            this.img3.src = this.reel[4];
          } else {
            this.img1.src = this.reel[2];
            this.img2.src = this.reel[3];
            this.img3.src = this.reel[4];
          }
        }
      } else if (this.cmeNo === 1) {
        if (this.cmeOnOff === 0 || this.cmeOnOff === 1) {
          if(this.reelno === 1){
            this.img1.src = this.reel[6];
            this.img2.src = 'img2/big7_2.png';
            this.img3.src = this.reel[8];
          }
        }
      } else if (this.cmeNo === 2) {
        if (this.cmeOnOff === 0 || this.cmeOnOff === 1) {
          if(this.reelno === 2){
            this.img1.src = 'img2/kara_2.png';
            this.img2.src = 'img2/kara_2.png';
            this.img3.src = 'img2/kara_2.png';
          }
        }
      } else if (this.cmeNo === 3) {
        if (this.cmeOnOff === 0 || this.cmeOnOff === 1) {
          if(this.reelno === 3){
            this.img1.src = this.reel[8];
            this.img2.src = 'img2/coin_2.png';
            this.img3.src = this.reel[10];
          }
        }
      } else {
        if (this.cmeOnOff === 0 || this.cmeOnOff === 1) {
          if(this.reelno === 1){
            this.img2.src = 'img2/orange.png';
            this.img3.src = this.reel[6];
            this.img1.src = this.reel[7];
          } 
        }
      }
    }

    akumakaihi() {
      if(this.akumaCnt === 3){
        this.img1.src = this.reel[19];
        this.img2.src = this.reel[20];
        this.img3.src = this.reel[21];
      } else {
        this.img1.src = this.reel[20];
        this.img2.src = this.reel[21];
        this.img3.src = this.reel[0];
      }
    }

    akumaAtari() {
      this.img1.src = this.reel[20];
      this.img2.src = this.reel[21];
      this.img3.src = this.reel[0];
    }

    stop() {
      clearTimeout(this.timeoutId);
    }

    reelShoto() {
      this.img1.classList.add('reelShoto');
      this.img2.classList.add('reelShoto');
      this.img3.classList.add('reelShoto');
    }

    reelShotoEnd() {
      this.img1.classList.remove('reelShoto');
      this.img2.classList.remove('reelShoto');
      this.img3.classList.remove('reelShoto');
    }

    bonusHighAndLowReelStart() {
      this.img1.classList.add('HighAndLowReel');
      this.img3.classList.add('HighAndLowReel');
    }

    bonusHighAndLowReelEnd() {
      this.img1.classList.remove('HighAndLowReel');
      this.img3.classList.remove('HighAndLowReel');
    }

    chkShoto() {
      if(this.reelno === 1){
        if (this.soroiPtn === 1) { //上
          this.img1.classList.remove('reelShoto');
          this.img2.classList.add('reelShoto');
          this.img3.classList.add('reelShoto');
        } else if (this.soroiPtn === 2) { //中
          this.img1.classList.add('reelShoto');
          this.img2.classList.remove('reelShoto');
          this.img3.classList.add('reelShoto');
        } else if (this.soroiPtn === 3) { //下
          this.img1.classList.add('reelShoto');
          this.img2.classList.add('reelShoto');
          this.img3.classList.remove('reelShoto');
        } else if (this.soroiPtn === 4) { //斜め１
          this.img1.classList.remove('reelShoto');
          this.img2.classList.add('reelShoto');
          this.img3.classList.add('reelShoto');
        } else if (this.soroiPtn === 5) { //斜め２
          this.img1.classList.add('reelShoto');
          this.img2.classList.add('reelShoto');
          this.img3.classList.remove('reelShoto');
        } else if (this.soroiPtn === 6) { //中
          this.img1.classList.remove('reelShoto');
          this.img2.classList.remove('reelShoto');
          this.img3.classList.add('reelShoto');
        } else { //揃っていない
          this.img1.classList.add('reelShoto');
          this.img2.classList.add('reelShoto');
          this.img3.classList.add('reelShoto');
        }
      } else if (this.reelno === 2) {
        if (this.soroiPtn === 1) { //上
          this.img1.classList.remove('reelShoto');
          this.img2.classList.add('reelShoto');
          this.img3.classList.add('reelShoto');
        } else if (this.soroiPtn === 2) { //中
          this.img1.classList.add('reelShoto');
          this.img2.classList.remove('reelShoto');
          this.img3.classList.add('reelShoto');
        } else if (this.soroiPtn === 3) { //下
          this.img1.classList.add('reelShoto');
          this.img2.classList.add('reelShoto');
          this.img3.classList.remove('reelShoto');
        } else if (this.soroiPtn === 4) { //斜め１
          this.img1.classList.add('reelShoto');
          this.img2.classList.remove('reelShoto');
          this.img3.classList.add('reelShoto');
        } else if (this.soroiPtn === 5) { //斜め２
          this.img1.classList.add('reelShoto');
          this.img2.classList.remove('reelShoto');
          this.img3.classList.add('reelShoto');
        } else if (this.soroiPtn === 6) { //　中
          this.img1.classList.remove('reelShoto');
          this.img2.classList.remove('reelShoto');
          this.img3.classList.add('reelShoto');
        } else { //揃っていない
          this.img1.classList.add('reelShoto');
          this.img2.classList.add('reelShoto');
          this.img3.classList.add('reelShoto');
        }
      } else {
        if (this.soroiPtn === 1) { //上
          this.img1.classList.remove('reelShoto');
          this.img2.classList.add('reelShoto');
          this.img3.classList.add('reelShoto');
        } else if (this.soroiPtn === 2) { //中
          this.img1.classList.add('reelShoto');
          this.img2.classList.remove('reelShoto');
          this.img3.classList.add('reelShoto');
        } else if (this.soroiPtn === 3) { //下
          this.img1.classList.add('reelShoto');
          this.img2.classList.add('reelShoto');
          this.img3.classList.remove('reelShoto');
        } else if (this.soroiPtn === 4) { //斜め１
          this.img1.classList.add('reelShoto');
          this.img2.classList.add('reelShoto');
          this.img3.classList.remove('reelShoto');
        } else if (this.soroiPtn === 5) { //斜め２
          this.img1.classList.remove('reelShoto');
          this.img2.classList.add('reelShoto');
          this.img3.classList.add('reelShoto');
        } else if (this.soroiPtn === 6) { //中
          this.img1.classList.remove('reelShoto');
          this.img2.classList.remove('reelShoto');
          this.img3.classList.add('reelShoto');
        } else { //揃っていない
          this.img1.classList.add('reelShoto');
          this.img2.classList.add('reelShoto');
          this.img3.classList.add('reelShoto');
        }
      }
    }
  }
  

  // ファンクション
 
  function syokiReelSet() {
    panel_1.img1.src = reel1[7];
    panel_1.img2.src = reel1[8];
    panel_1.img3.src = reel1[9];
    panel_1.reelShoto();
    
    panel_2.img1.src = reel2[9];
    panel_2.img2.src = reel2[10];
    panel_2.img3.src = reel2[11];
    panel_2.reelShoto();
    
    panel_3.img1.src = reel3[11];
    panel_3.img2.src = reel3[12];
    panel_3.img3.src = reel3[13];
    panel_3.reelShoto();
  }

  function bigLampTenmetsu() {
    if (biglamp.classList.contains('biglamp_off_inactive')) {
      biglamp.classList.remove('biglamp_off_inactive');
      biglamp.classList.add('biglamp_on_inactive');
    } else {
      biglamp.classList.remove('biglamp_on_inactive');
      biglamp.classList.add('biglamp_off_inactive');
    }
    biglamptimeoutId = setTimeout(() => {
      bigLampTenmetsu();
    }, 100);
  }
  
  function bigtento() {
    if (biglamptimeoutId !== undefined) {
      clearTimeout(biglamptimeoutId);
      biglamptimeoutId = undefined;
    }
    bonusMain.classList.add('big');
    biglamp.classList.remove('biglamp_off_inactive')
    biglamp.classList.add('biglamp_on_inactive')
  }
   
  function regLampTenmetsu() {
    if (reglamp.classList.contains('reglamp_off_inactive')) {
      reglamp.classList.remove('reglamp_off_inactive');
      reglamp.classList.add('reglamp_on_inactive');
    } else {
      reglamp.classList.remove('reglamp_on_inactive');
      reglamp.classList.add('reglamp_off_inactive');
    }
    reglamptimeoutId = setTimeout(() => {
      regLampTenmetsu();
    }, 100);
  }
  
  function regtento() {
    if (reglamptimeoutId !== undefined) {
      clearTimeout(reglamptimeoutId);
      reglamptimeoutId = undefined;
    }
    bonusMain.classList.add('reg');
    reglamp.classList.remove('reglamp_off_inactive')
    reglamp.classList.add('reglamp_on_inactive')
  }

  function tuzyo() {
    console.log('通常時');
    panel_1.reelShotoEnd();
    panel_2.reelShotoEnd();
    panel_3.reelShotoEnd();

    atari = Math.floor(Math.random() * kakuritsu);

    console.log(`kakuritsu:${kakuritsu}`);
    console.log(`atari:${atari}`);

    if (atari === 3 || atari === 7) {
      kakuritsu = kakuritsuTuzyo;
      cmeCnt = 0;
    
      if (1 === Math.floor(Math.random() * 2)) {
        chancetenmetsu();
      }
      reelptn = Math.floor(Math.random() * 5);
    } else if (atari >= cmeS && atari <= cmeE) { 
      cmeCnt = 1;
      kakuritsu = kakuritsuCme;
      cmePtn = Math.floor(Math.random() * 6);
      cmeOnOff = Math.floor(Math.random() * 4);
      console.log(`cmePtn:${cmePtn}`)
    } else if (cmeCnt >= 1 && cmeCnt <= 7) { 
      cmeCnt++;
      cmeOnOff = Math.floor(Math.random() * 3);
    } 
    console.log(`cmePtn:${cmePtn}`);
    console.log(`cmeCnt:${cmeCnt}`);
    console.log(`cmeOnOff:${cmeOnOff}`);
  }
  
  function bonusTime() {
    console.log('ボーナス時');
    reelptn = Math.floor(Math.random() * 12);
  }
  
  function spinStart() {
    chance.classList.add('chance_off_inactive');

    if (stop_cnt === 3) {
      spin.classList.remove('inactive');
      stop_cnt = 0;
     
      if (bonusTimeOn === 0) {
        if (atari === 7) {
          bonusTimeOn = 1;
          bonusTenmetsuFlg = 1;
          bonusCnt = bigBonusCnt;
        } else if (atari === 3) {
          bonusTimeOn = 2; 
          bonusTenmetsuFlg = 2;
          bonusCnt = regBonusCnt;
        }
      }else { 
        bonusCnt--;
        
        if (bonusCnt === 0) {
          bonusTimeOn = 0; 
          bonusMain.classList.remove('big');
          bonusMain.classList.remove('reg');
          biglamp.classList.remove('biglamp_on_inactive')
          reglamp.classList.remove('reglamp_on_inactive')
          biglamp.classList.add('biglamp_off_inactive')
          reglamp.classList.add('reglamp_off_inactive')
          panel_1.bonusHighAndLowReelEnd();
          panel_2.bonusHighAndLowReelEnd();
          panel_3.bonusHighAndLowReelEnd();
        }
        console.log(`bonusTimeOn:${bonusTimeOn}`)
        console.log(`bonusCnt:${bonusCnt}`)
      }
    }

    if (spin.classList.contains('inactive')) {
      return;
    }

    if (coin === 0 && rePlayFlg === 0 && bonusTenmetsuFlg === 0) {
      syuryoReelSet();
      return;
    }

    if (coin >= 300) {
      uchidomeReelSet();
      return;
    }
    
    if (bonusTimeOn === 0 && rePlayFlg === 0){ 
      coin--;
      coinHyojiHt.textContent = coin;
    } else if (rePlayFlg === 1){
      rePlayFlg = 0;
    }

    spin.classList.add('inactive');
    stop1.classList.remove('stop_inactive');
    stop2.classList.remove('stop_inactive');
    stop3.classList.remove('stop_inactive');
    panel_1.spin();
    panel_2.spin();
    panel_3.spin();
    
    if (bonusTimeOn === 0) {

      tuzyo();
    } else {
  
      bonusTime();

      panel_1.reelShotoEnd();
      panel_1.bonusHighAndLowReelStart();
      panel_2.reelShotoEnd();
      panel_2.bonusHighAndLowReelStart();
      panel_3.reelShotoEnd();
      panel_3.bonusHighAndLowReelStart();

      if (bonusTenmetsuFlg === 1) {
        
        bigtento();
      }else if (bonusTenmetsuFlg === 2) {
      
        regtento();
      }
      bonusTenmetsuFlg = 0;
    }
  }

  function stop(stop,panel,no) {
    if (stop.classList.contains('stop_inactive')) { 
      return;
    }
    if (spin.classList.contains('inactive')) {
      stop.classList.add('stop_inactive');
      stop_cnt++;
    }
    
    panel.stop();
    
    if (bonusTimeOn === 0) { 
      panel.reelShoto();
      if (atari === 7) { // ビッグボーナス
        panel.reelnoset = no;
        panel.bonusIdset = reelptn;
        panel.bigbonus();

      } else if (atari === 3) { // レギュラーボーナス
        panel.reelnoset = no;
        panel.bonusIdset = reelptn;
        panel.regbonus();
        
      } else if (atari >= replayAtariS && atari <= replayAtariE) { //リプレイ
        panel.reelnoset = no;
        panel.replay();
      } else if (atari >= serviceAtariS && atari <= serviceAtariE) { // サービス（スイカ、温泉）
        panel.reelnoset = no;
        panel.service();
      } else if (atari >= akumaZoneS && atari <= akumaZoneE) { // 悪魔
        if (atari >= akumaAtariS && atari <= akumaAtariE) {
          panel.akumaAtari(); //悪魔当たり
        } else {
          panel.akumaCntset = stop_cnt;
          panel.akumakaihi(); //悪魔回避
        }
      } else if (cmeCnt >= 1 && cmeCnt <= 7) { // チャンス目
        panel.reelnoset = no;
        panel.cmeNoset = cmePtn;
        panel.cmeOnOffset = cmeOnOff;
        panel.cme();
      } 
    } else {
      panel.koyakuIdset = reelptn;
      panel.bonusTimeKoyaku();
    }

  
    if (stop_cnt === 3) { // ストップボタンが全て押された場合
      allStop();
    }
  }
    

  //  ★すべてのストップボタンが押された後処理
  function allStop() {
    if (cmeCnt === 7) { // チャンス目終了時は確率を戻す。
      kakuritsu = kakuritsuTuzyo;
      cmeCnt = 0;
    } 
    reelChk(); // リール判定処理へ
    if (((atari === 7) || (atari === 3)) && (bonusTimeOn === 0)) {
      chanceShoto(); // 当たりを引いたら一発告知ランプ消灯へ
      if (atari === 7) {
        bigLampTenmetsu(); // ビッグボーナスランプ点灯へ
      } else {
        regLampTenmetsu(); // レギュラーボーナスランプ点灯へ
      }
    }
  }


  //  リールチェック
  function reelChk() {
    let zugara = undefined;
    let reelSoroiPtn = 0;

    if ((panel_1.img1.src === panel_2.img1.src) && (panel_1.img1.src === panel_3.img1.src)) {
      reelSoroiPtn = 1; //リール上揃い
      zugara = panel_1.img1.src;
    } else if ((panel_1.img2.src === panel_2.img2.src) && (panel_1.img2.src === panel_3.img2.src)) {
      reelSoroiPtn = 2; //リール中揃い
      zugara = panel_1.img2.src; 
    } else if ((panel_1.img3.src === panel_2.img3.src) && (panel_1.img3.src === panel_3.img3.src)) {
      reelSoroiPtn = 3; //リール下揃い
      zugara = panel_1.img3.src; 
    } else if ((panel_1.img1.src === panel_2.img2.src) && (panel_1.img1.src === panel_3.img3.src)) {
      reelSoroiPtn = 4; //リール斜め揃い１
      zugara = panel_1.img1.src; 
    } else if ((panel_1.img3.src === panel_2.img2.src) && (panel_1.img3.src === panel_3.img1.src)) {
      reelSoroiPtn = 5; //リール斜め揃い２
      zugara = panel_1.img3.src; 
    }

    if (reelSoroiPtn === 1 && panel_1.img2.src.split('/').reverse()[0] === 'onsen.png') {
      reelSoroiPtn = 6; 
    }

    shoto(reelSoroiPtn); // リール消灯処理へ
    
    if (reelSoroiPtn !== 0) { // リールが揃った場合
      coinGet(reelSoroiPtn,zugara.split('/').reverse()[0]); //コイン払い戻し処理へ
      }
    }
    
    
  //  リール消灯
  function shoto(reelSoroiPtn) {
    panel_1.soroiPtnset = reelSoroiPtn;
    panel_1.reelnoset = 1;
    panel_1.chkShoto();

    panel_2.soroiPtnset = reelSoroiPtn;
    panel_2.reelnoset = 2;
    panel_2.chkShoto();

    panel_3.soroiPtnset = reelSoroiPtn;
    panel_3.reelnoset = 3;
    panel_3.chkShoto();
  }
    

  //  ★コイン払い戻し処理
  function coinGet(ptn,zugara) {
    let coinHyojiCnt =0;

    if (ptn === 6 && bonusTimeOn === 0) { //上段にスイカ、中段にオレンジの2パターン揃いの場合
      coinHyojiCnt = coinHyojiCnt + 5; //先にスイカ分+5コイン加算
    }

    switch (zugara) {
      case 'orange.png':
        coinHyojiCnt = coinHyojiCnt + 3; // オレンジ +3コイン加算
        break;
      case 'bell.png':
        coinHyojiCnt = coinHyojiCnt + 4; // ベル +4コイン加算
        break;
      case 'suika.png':
        coinHyojiCnt = coinHyojiCnt + 5; // スイカ +5コイン加算
        break;
      case 'sakuranbo.png':
        coinHyojiCnt = coinHyojiCnt + 7; // チェリー +7コイン加算
        break;
      case 'akuma.jpeg':
        coinHyojiCnt = coinHyojiCnt - 3; // 悪魔 -3コイン減算
        break;
      case 'reg7.png':
        atari = 3; // 乱数の当たりではなく普通にREG７が揃ってしまった場合、乱数のatariを3に塗り替える。
        break;
      case 'csc.png':
        rePlayFlg = 1; // リプレイ
        break;
      default:
        break;
    }

    console.log(`coinHyojiCnt:${coinHyojiCnt}`);

    coinHyoji(coinHyojiCnt); //コイン表示処理へ
  }
  
  
  //  コイン表示
  function coinHyoji(cnt) {
    if (cnt < 0) {
      coin = coin + cnt;
      if (coin < 0) {
        coin = 0;
      }
      coinHyojiHt.textContent = coin;  
    } else {
      for (let i = 1; i <= cnt; i++) {
        coin = coin + 1;
        coinHyojiHt.textContent = coin;
      }
    }
  }

  let panel_1 = new Panel();
  let panel_2 = new Panel();
  let panel_3 = new Panel();

  let stop_cnt = 0;

  syokiReelSet();
  
  const btns = document.getElementById('btns');
  const spin = btns.querySelector('#spin');
  const chance = btns.querySelector('#chance');
  const stop1 = btns.querySelector('#stop1');
  const stop2 = btns.querySelector('#stop2');
  const stop3 = btns.querySelector('#stop3');
  const coinHyojiHt = document.getElementById('coinHyojiHt');
  const bonusMain = document.querySelector('main');
  
  const bonuslamp = document.getElementById('bonuslamp');
  const biglamp = bonuslamp.querySelector('#biglamp');
  const reglamp = bonuslamp.querySelector('#reglamp');

  const bigBonusCnt = 10;
  const regBonusCnt = 5;

  const kakuritsuTuzyo  = 200;
  const kakuritsuCme  = 25;

  const replayAtariS = 20;
  const replayAtariE = 35;
  const serviceAtariS = 70;
  const serviceAtariE = 72;
  const cmeS = 73;
  const cmeE = 78;
  const akumaZoneS = 80;
  const akumaZoneE = 110;
  const akumaAtariS = 85;
  const akumaAtariE = 90;

  let kakuritsu = kakuritsuTuzyo;
  let atari = 0;
  let reelptn = 0;
  let bonusTimeOn = 0;
  let bonusCnt = 0;
  let cmeCnt = 0;
  let cmePtn = 0;
  let cmeOnOff = 0;

  let rePlayFlg = 0;
  let coin = 20;
  let bonusTenmetsuFlg = 0;
  
  panel_1.reelset = reel1;
  panel_2.reelset = reel2;
  panel_3.reelset = reel3;
  
  let chancetimeoutId;
  let biglamptimeoutId;
  let reglamptimeoutId;
  
  coinHyojiHt.textContent = coin;

  // スタートボタン
  spin.addEventListener('click',() =>{
    spinStart();
  });

  // 左ストップボタンオン
  stop1.addEventListener('click',() =>{
    stop(stop1,panel_1,1);
  });
  

  // 中ストップボタンオン
  stop2.addEventListener('click',() =>{
    stop(stop2,panel_2,2);
  });
  
  
  // 右ストップボタンオン
  stop3.addEventListener('click',() =>{
    stop(stop3,panel_3,3);
  });

}