ProgressRing.loadBundle("pcqygwpc",["exports"],function(t){var e=window.ProgressRing.h;function r(t){var e=t*t;return t<4/11?7.5625*e:t<8/11?9.075*e-9.9*t+3.4:t<.9?4356/361*e-35442/1805*t+16061/1805:10.8*t*t-20.52*t+10.72}var i=Object.freeze({backInOut:function(t){var e=2.5949095;return(t*=2)<1?t*t*((e+1)*t-e)*.5:.5*((t-=2)*t*((e+1)*t+e)+2)},backIn:function(t){var e=1.70158;return t*t*((e+1)*t-e)},backOut:function(t){var e=1.70158;return--t*t*((e+1)*t+e)+1},bounceInOut:function(t){return t<.5?.5*(1-r(1-2*t)):.5*r(2*t-1)+.5},bounceIn:function(t){return 1-r(1-t)},bounceOut:r,circInOut:function(t){return(t*=2)<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)},circIn:function(t){return 1-Math.sqrt(1-t*t)},circOut:function(t){return Math.sqrt(1- --t*t)},cubicInOut:function(t){return t<.5?4*t*t*t:.5*Math.pow(2*t-2,3)+1},cubicIn:function(t){return t*t*t},cubicOut:function(t){var e=t-1;return e*e*e+1},elasticInOut:function(t){return t<.5?.5*Math.sin(13*Math.PI/2*2*t)*Math.pow(2,10*(2*t-1)):.5*Math.sin(-13*Math.PI/2*(2*t-1+1))*Math.pow(2,-10*(2*t-1))+1},elasticIn:function(t){return Math.sin(13*t*Math.PI/2)*Math.pow(2,10*(t-1))},elasticOut:function(t){return Math.sin(-13*(t+1)*Math.PI/2)*Math.pow(2,-10*t)+1},expoInOut:function(t){return 0===t||1===t?t:t<.5?.5*Math.pow(2,20*t-10):-.5*Math.pow(2,10-20*t)+1},expoIn:function(t){return 0===t?t:Math.pow(2,10*(t-1))},expoOut:function(t){return 1===t?t:1-Math.pow(2,-10*t)},linear:function(t){return t},quadInOut:function(t){return(t/=.5)<1?.5*t*t:-.5*(--t*(t-2)-1)},quadIn:function(t){return t*t},quadOut:function(t){return-t*(t-2)},quartInOut:function(t){return t<.5?8*Math.pow(t,4):-8*Math.pow(t-1,4)+1},quartIn:function(t){return Math.pow(t,4)},quartOut:function(t){return Math.pow(t-1,3)*(1-t)+1},quintInOut:function(t){return(t*=2)<1?.5*t*t*t*t*t:.5*((t-=2)*t*t*t*t+2)},quintIn:function(t){return t*t*t*t*t},quintOut:function(t){return--t*t*t*t*t+1},sineInOut:function(t){return-.5*(Math.cos(Math.PI*t)-1)},sineIn:function(t){var e=Math.cos(t*Math.PI*.5);return Math.abs(e)<1e-14?1:1-e},sineOut:function(t){return Math.sin(t*Math.PI/2)}}),n=window.requestAnimationFrame||function(t){return setTimeout(t,1e3/60)},s=window.cancelAnimationFrame||function(t){return clearTimeout(t)},a=4e3,o="cubicInOut",u=function(){function t(){var t=this;this.radius=80,this.strokeWidth=10,this.setShapeSettings=function(e){var r=e.radius,i=e.strokeWidth;t.normalizedRadius=(void 0===r?t.radius:r)-Math.floor((void 0===i?t.strokeWidth:i)/2),t.circumference=2*t.normalizedRadius*Math.PI},this.intSize=30,this.decimalSize=Math.floor(.7*this.intSize),this.disableDigits=!1,this.setTextSettings=function(e){var r=e.intSize,i=e.decimalSize;t.textOffset=((void 0===r?t.intSize:r)-(void 0===i?t.decimalSize:i))/4},this.parsePercentText=function(t){return t<=0?["0","00"]:t.toFixed(1).split(".")},this.colors=["#ff4f40","#ffcd40","#30bf7a","#66a0ff"],this.setColorsSettings=function(e){var r=e.invertColors,i=void 0===r?t.invertColors:r,n=Object.assign({},t.colors);t.colors=i?n.reverse():n},this.setColors=function(e){var r;t.ring.style.stroke=r=e<=25?t.colors[0]:e<=50?t.colors[1]:e<=75?t.colors[2]:t.colors[3],t.ringBackground.style.stroke=r,t.percentText.style.fill=r},this.percent=0,this.duration=4e3,this.easingType="quartInOut",this.start=0,this.progress=0,this.isLoaded=!1,this.setProgress=function(e){var r=e.progress,i=e.stopFrames,n=e.restartFrames;if(t.isLoaded||!i){t.progress=r,t.restartFrames=n;var s=(t.internalPercent-t.start)*r+t.start;t.ring.style.strokeDashoffset=String(s>=100?0:t.circumference-s/100*t.circumference);var a=t.parsePercentText(s);t.intText.innerHTML=a[0],t.decimalText.innerHTML=a[1]}else i()}}return t.prototype.radiusUpdated=function(t){this.setShapeSettings({radius:t})},t.prototype.strokeWidthUpdated=function(t){this.setShapeSettings({strokeWidth:t})},t.prototype.intSizeUpdated=function(t){this.setTextSettings({intSize:t})},t.prototype.decimalSizeUpdated=function(t){this.setTextSettings({decimalSize:t})},t.prototype.invertColorsUpdated=function(t){this.setColorsSettings({invertColors:t})},t.prototype.percentUpdated=function(){this.percent<0?this.percent=0:this.restartProgress()},t.prototype.durationtUpdated=function(){this.restartProgress()},t.prototype.easingTypeUpdated=function(){this.restartProgress()},t.prototype.restartProgress=function(){if(this.restartFrames){var t=(this.internalPercent-this.start)*this.progress+this.start;this.internalPercent=this.percent,this.progress=0,this.start=t,this.restartFrames({restartDuration:this.duration,restartEasingType:this.easingType,restartTemplate:this.setProgress})}},t.prototype.componentWillLoad=function(){this.percent<0?this.percent=0:(this.isLoaded=!0,this.internalPercent=this.percent,this.setShapeSettings({radius:this.radius,strokeWidth:this.strokeWidth}),this.setTextSettings({intSize:this.intSize,decimalSize:this.decimalSize}),this.setColorsSettings({invertColors:this.invertColors}),function(t){var e=void 0===t?{}:t,r=e.easingType,u=e.duration,c=e.template,d=e.complete;if(c){var h=i[void 0===r?o:r],l=void 0===u?a:u,p=c,f=void 0===d?null:d,g=null,m=null,y=0,b=0,v=null,S=null,M=null,z=!1,T=!1,w=!1,k=!1,O=function(t){var e=t||(new Date).getTime();if(w?(m=e-y,w=!1):y=e-(m=m||e),y<l&&!T){g=n(O),b=h(y/l);try{p({progress:b,stopFrames:v,resumeFrames:S,restartFrames:M})}catch(t){s(g)}}else{if(k)return T=!1,k=!1,void n(O);y>=l&&(p({progress:1,stopFrames:null,resumeFrames:null,restartFrames:M}),z=!0,g=null,f&&f())}};v=function(){T=!0},S=function(){T&&(T=!1,w=!0,g=n(O))},M=function(t){var e=void 0===t?{}:t,r=e.restartEasingType,s=e.restartDuration,u=e.restartTemplate,c=e.restartComplete;u&&(h=i[void 0===r?o:r],l=void 0===s?a:s,p=u,f=void 0===c?null:c,m=null,y=0,b=0,z||T||(v(),k=!0),T&&(T=!1,g=n(O)),z&&(z=!1,g=n(O)))},g=n(O)}}({duration:this.duration,easingType:this.easingType,template:this.setProgress}))},t.prototype.componentDidLoad=function(){this.setColors(this.percent)},t.prototype.componentDidUpdate=function(){this.setColors(this.percent)},t.prototype.componentDidUnload=function(){this.isLoaded=!1},t.prototype.render=function(){var t=this;return e("svg",{height:2*this.radius,width:2*this.radius},e("circle",{cx:this.radius,cy:this.radius,r:this.normalizedRadius,"stroke-width":this.strokeWidth,fill:"transparent",opacity:"0.1",ref:function(e){return t.ringBackground=e},class:"background-ring"}),e("circle",{cx:this.radius,cy:this.radius,r:this.normalizedRadius,"stroke-width":this.strokeWidth,"stroke-dasharray":this.circumference+" "+this.circumference,fill:"transparent",ref:function(e){return t.ring=e},class:"ring"}),!this.disableDigits&&e("text",{x:"50%",y:"50%","dominant-baseline":"middle","text-anchor":"middle","font-size":this.intSize,ref:function(e){return t.percentText=e}},e("tspan",{"font-size":this.intSize,ref:function(e){return t.intText=e},class:"intText"}),e("tspan",{class:"decimalPointText"},"."),e("tspan",{"font-size":this.decimalSize,dy:this.textOffset,ref:function(e){return t.decimalText=e},class:"decimalText"}),e("tspan",{"font-size":this.decimalSize,class:"percentText"},"%")))},Object.defineProperty(t,"is",{get:function(){return"progress-ring"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{decimalSize:{type:Number,attr:"decimal-size",watchCallbacks:["decimalSizeUpdated"]},disableDigits:{type:Boolean,attr:"disable-digits"},duration:{type:Number,attr:"duration",watchCallbacks:["durationtUpdated"]},easingType:{type:String,attr:"easing-type",watchCallbacks:["easingTypeUpdated"]},intSize:{type:Number,attr:"int-size",watchCallbacks:["intSizeUpdated"]},invertColors:{type:Boolean,attr:"invert-colors",watchCallbacks:["invertColorsUpdated"]},percent:{type:Number,attr:"percent",reflectToAttr:!0,mutable:!0,watchCallbacks:["percentUpdated"]},radius:{type:Number,attr:"radius",watchCallbacks:["radiusUpdated"]},strokeWidth:{type:Number,attr:"stroke-width",watchCallbacks:["strokeWidthUpdated"]}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return"circle.sc-progress-ring{-webkit-transform:rotate(-90deg);transform:rotate(-90deg);-webkit-transform-origin:50% 50%;transform-origin:50% 50%}"},enumerable:!0,configurable:!0}),t}();t.ProgressRing=u,Object.defineProperty(t,"__esModule",{value:!0})});