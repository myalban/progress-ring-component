ProgressRing.loadBundle("49uqaxcv",["exports"],function(t){var e=window.ProgressRing.h;function r(t){var e=t*t;return t<4/11?7.5625*e:t<8/11?9.075*e-9.9*t+3.4:t<.9?4356/361*e-35442/1805*t+16061/1805:10.8*t*t-20.52*t+10.72}var n=Object.freeze({backInOut:function(t){var e=2.5949095;return(t*=2)<1?t*t*((e+1)*t-e)*.5:.5*((t-=2)*t*((e+1)*t+e)+2)},backIn:function(t){var e=1.70158;return t*t*((e+1)*t-e)},backOut:function(t){var e=1.70158;return--t*t*((e+1)*t+e)+1},bounceInOut:function(t){return t<.5?.5*(1-r(1-2*t)):.5*r(2*t-1)+.5},bounceIn:function(t){return 1-r(1-t)},bounceOut:r,circInOut:function(t){return(t*=2)<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)},circIn:function(t){return 1-Math.sqrt(1-t*t)},circOut:function(t){return Math.sqrt(1- --t*t)},cubicInOut:function(t){return t<.5?4*t*t*t:.5*Math.pow(2*t-2,3)+1},cubicIn:function(t){return t*t*t},cubicOut:function(t){var e=t-1;return e*e*e+1},elasticInOut:function(t){return t<.5?.5*Math.sin(13*Math.PI/2*2*t)*Math.pow(2,10*(2*t-1)):.5*Math.sin(-13*Math.PI/2*(2*t-1+1))*Math.pow(2,-10*(2*t-1))+1},elasticIn:function(t){return Math.sin(13*t*Math.PI/2)*Math.pow(2,10*(t-1))},elasticOut:function(t){return Math.sin(-13*(t+1)*Math.PI/2)*Math.pow(2,-10*t)+1},expoInOut:function(t){return 0===t||1===t?t:t<.5?.5*Math.pow(2,20*t-10):-.5*Math.pow(2,10-20*t)+1},expoIn:function(t){return 0===t?t:Math.pow(2,10*(t-1))},expoOut:function(t){return 1===t?t:1-Math.pow(2,-10*t)},linear:function(t){return t},quadInOut:function(t){return(t/=.5)<1?.5*t*t:-.5*(--t*(t-2)-1)},quadIn:function(t){return t*t},quadOut:function(t){return-t*(t-2)},quartInOut:function(t){return t<.5?8*Math.pow(t,4):-8*Math.pow(t-1,4)+1},quartIn:function(t){return Math.pow(t,4)},quartOut:function(t){return Math.pow(t-1,3)*(1-t)+1},quintInOut:function(t){return(t*=2)<1?.5*t*t*t*t*t:.5*((t-=2)*t*t*t*t+2)},quintIn:function(t){return t*t*t*t*t},quintOut:function(t){return--t*t*t*t*t+1},sineInOut:function(t){return-.5*(Math.cos(Math.PI*t)-1)},sineIn:function(t){var e=Math.cos(t*Math.PI*.5);return Math.abs(e)<1e-14?1:1-e},sineOut:function(t){return Math.sin(t*Math.PI/2)}}),i=window.requestAnimationFrame||function(t){return setTimeout(t,1e3/60)},s=window.cancelAnimationFrame||function(t){return clearTimeout(t)},o=4e3,a="cubicInOut",u=function(){function t(){var t=this;this.radius=80,this.strokeWidth=10,this.setShapeSettings=function(e){var r=e.radius,n=e.strokeWidth;t.normalizedRadius=(void 0===r?t.radius:r)-Math.floor((void 0===n?t.strokeWidth:n)/2),t.circumference=2*t.normalizedRadius*Math.PI},this.intSize=30,this.decimalSize=Math.floor(.7*this.intSize),this.disableDigits=!1,this.parsePercentText=function(t){return t<=0?["0","00"]:t.toFixed(1).split(".")},this.invertColors=!1,this.internalColors=["#ff4f40","#ffcd40","#30bf7a","#66a0ff"],this.internalColorsReversed=this.internalColors.slice().reverse(),this.setColorsSettings=function(e){var r=e.invertColors;t.colors=(void 0===r?t.invertColors:r)?t.internalColorsReversed:t.internalColors},this.setColors=function(e){var r;t.ring.style.stroke=r=e<=25?t.colors[0]:e<=50?t.colors[1]:e<=75?t.colors[2]:t.colors[3],t.ringBackground.style.stroke=r,t.percentText.style.fill=r},this.percent=0,this.duration=4e3,this.easingType="quartInOut",this.start=0,this.progress=0,this.isLoaded=!1,this.setProgress=function(e){var r=e.progress,n=e.stopFrames,i=e.restartFrames;if(t.isLoaded||!n){t.progress=r,t.restartFrames=i;var s=(t.internalPercent-t.start)*r+t.start;t.ring.style.strokeDashoffset=String(s>=100?0:t.circumference-s/100*t.circumference);var o=t.parsePercentText(s);t.intText.innerHTML=o[0],t.decimalText.innerHTML=o[1]}else n()}}return t.prototype.radiusUpdated=function(t){this.setShapeSettings({radius:t})},t.prototype.strokeWidthUpdated=function(t){this.setShapeSettings({strokeWidth:t})},t.prototype.invertColorsUpdated=function(t){this.setColorsSettings({invertColors:t})},t.prototype.percentUpdated=function(){this.percent<0?this.percent=0:this.restartProgress()},t.prototype.durationtUpdated=function(){this.restartProgress()},t.prototype.easingTypeUpdated=function(){this.restartProgress()},t.prototype.restartProgress=function(){if(this.restartFrames){var t=(this.internalPercent-this.start)*this.progress+this.start;this.internalPercent=this.percent,this.progress=0,this.start=t,this.restartFrames({restartDuration:this.duration,restartEasingType:this.easingType,restartTemplate:this.setProgress})}},t.prototype.componentWillLoad=function(){this.percent<0?this.percent=0:(this.isLoaded=!0,this.internalPercent=this.percent,this.setShapeSettings({radius:this.radius,strokeWidth:this.strokeWidth}),this.setColorsSettings({invertColors:this.invertColors}),function(t){var e=void 0===t?{}:t,r=e.easingType,u=e.duration,c=e.template,l=e.complete;if(c){var h=n[void 0===r?a:r],d=void 0===u?o:u,p=c,f=void 0===l?null:l,g=null,m=null,y=0,v=0,b=null,M=null,w=null,k=!1,I=!1,P=!1,T=!1,O=function(t){var e=t||(new Date).getTime();if(P?(m=e-y,P=!1):y=e-(m=m||e),y<d&&!I){g=i(O),v=h(y/d);try{p({progress:v,stopFrames:b,resumeFrames:M,restartFrames:w})}catch(t){s(g)}}else{if(T)return I=!1,T=!1,void i(O);y>=d&&(p({progress:1,stopFrames:null,resumeFrames:null,restartFrames:w}),k=!0,g=null,f&&f())}};b=function(){I=!0},M=function(){I&&(I=!1,P=!0,g=i(O))},w=function(t){var e=void 0===t?{}:t,r=e.restartEasingType,s=e.restartDuration,u=e.restartTemplate,c=e.restartComplete;u&&(h=n[void 0===r?a:r],d=void 0===s?o:s,p=u,f=void 0===c?null:c,m=null,y=0,v=0,k||I||(b(),T=!0),I&&(I=!1,g=i(O)),k&&(k=!1,g=i(O)))},g=i(O)}}({duration:this.duration,easingType:this.easingType,template:this.setProgress}))},t.prototype.componentDidLoad=function(){this.setColors(this.percent)},t.prototype.componentDidUpdate=function(){this.setColors(this.percent)},t.prototype.componentDidUnload=function(){this.isLoaded=!1},t.prototype.render=function(){var t=this;return e("svg",{height:2*this.radius,width:2*this.radius},e("circle",{cx:this.radius,cy:this.radius,r:this.normalizedRadius,"stroke-width":this.strokeWidth,fill:"transparent",opacity:"0.1",ref:function(e){return t.ringBackground=e},class:"background-ring"}),e("circle",{cx:this.radius,cy:this.radius,r:this.normalizedRadius,"stroke-width":this.strokeWidth,"stroke-dasharray":this.circumference+" "+this.circumference,fill:"transparent",ref:function(e){return t.ring=e},class:"ring"}),e("text",{x:"50%",y:"50%","text-anchor":"middle",dy:"0.5ex","font-size":this.intSize,ref:function(e){return t.percentText=e},class:this.disableDigits?"hide":null},e("tspan",{"font-size":this.intSize,ref:function(e){return t.intText=e},class:"intText"}),e("tspan",{class:"decimalPointText"},"."),e("tspan",{"font-size":this.decimalSize,ref:function(e){return t.decimalText=e},class:"decimalText"}),e("tspan",{"font-size":this.decimalSize,class:"percentText"},"%")),"}")},Object.defineProperty(t,"is",{get:function(){return"progress-ring"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{colors:{state:!0},decimalSize:{type:Number,attr:"decimal-size"},disableDigits:{type:Boolean,attr:"disable-digits"},duration:{type:Number,attr:"duration",watchCallbacks:["durationtUpdated"]},easingType:{type:String,attr:"easing-type",watchCallbacks:["easingTypeUpdated"]},intSize:{type:Number,attr:"int-size"},invertColors:{type:Boolean,attr:"invert-colors",watchCallbacks:["invertColorsUpdated"]},percent:{type:Number,attr:"percent",reflectToAttr:!0,mutable:!0,watchCallbacks:["percentUpdated"]},radius:{type:Number,attr:"radius",watchCallbacks:["radiusUpdated"]},strokeWidth:{type:Number,attr:"stroke-width",watchCallbacks:["strokeWidthUpdated"]}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return"circle{-webkit-transform:rotate(-90deg);transform:rotate(-90deg);-webkit-transform-origin:50% 50%;transform-origin:50% 50%;-webkit-transition:stroke .8s ease 0s;transition:stroke .8s ease 0s}text{-webkit-transition:fill .8s ease 0s;transition:fill .8s ease 0s}.hide{display:none}"},enumerable:!0,configurable:!0}),t}();t.ProgressRing=u,Object.defineProperty(t,"__esModule",{value:!0})});