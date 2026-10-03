var vp=0,Fu=1,yp=2;var _o=1,Sp=2,la=3,Fr=0,Un=1,qi=2,Yi=0,ca=1,Zi=2,Ou=3,Bu=4,Mp=5;var hs=100,bp=101,Tp=102,wp=103,Ep=104,Ap=200,Cp=201,Rp=202,Pp=203,zu=204,ku=205,Ip=206,Lp=207,Dp=208,Np=209,Up=210,Fp=211,Op=212,Bp=213,zp=214,Il=0,Ll=1,Dl=2,Qs=3,Nl=4,Ul=5,Fl=6,Ol=7,Vu=0,kp=1,Vp=2,Di=0,Gu=1,Hu=2,Wu=3,xo=4,Xu=5,qu=6,Yu=7;var Zu=300,Or=301,us=302,mc=303,gc=304,vo=306,Bl=1e3,Vi=1001,zl=1002,ln=1003,Gp=1004;var yo=1005;var dn=1006,_c=1007;var Br=1008;var qn=1009,Ju=1010,$u=1011,ha=1012,xc=1013,Ni=1014,vi=1015,Ui=1016,vc=1017,yc=1018,ua=1020,Ku=35902,Qu=35899,ju=1021,tf=1022,yi=1023,Gi=1026,zr=1027,Sc=1028,Mc=1029,kr=1030,bc=1031;var Tc=1033,So=33776,Mo=33777,bo=33778,To=33779,wc=35840,Ec=35841,Ac=35842,Cc=35843,Rc=36196,Pc=37492,Ic=37496,Lc=37488,Dc=37489,wo=37490,Nc=37491,Uc=37808,Fc=37809,Oc=37810,Bc=37811,zc=37812,kc=37813,Vc=37814,Gc=37815,Hc=37816,Wc=37817,Xc=37818,qc=37819,Yc=37820,Zc=37821,Jc=36492,$c=36494,Kc=36495,Qc=36283,jc=36284,Eo=36285,th=36286;var qa=2300,kl=2301,Rl=2302,Au=2303,Cu=2400,Ru=2401,Pu=2402;var Hp=3200;var eh=0,Wp=1,hr="",Sn="srgb",Ya="srgb-linear",Za="linear",me="srgb";var Pl=7680;var Xp=519,qp=512,Yp=513,Zp=514,nh=515,Jp=516,$p=517,ih=518,Kp=519,Qp=35044;var ef="300 es",Ii=2e3,js=2001;function U_(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function F_(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function Ja(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function jp(){let r=Ja("canvas");return r.style.display="block",r}var Yd={},ta=null;function nf(...r){let t="THREE."+r.shift();ta?ta("log",t,...r):console.log(t,...r)}function tm(r){let t=r[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=r[1];e&&e.isStackTrace?r[0]+=" "+e.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function Xt(...r){r=tm(r);let t="THREE."+r.shift();if(ta)ta("warn",t,...r);else{let e=r[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...r)}}function Yt(...r){r=tm(r);let t="THREE."+r.shift();if(ta)ta("error",t,...r);else{let e=r[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...r)}}function rs(...r){let t=r.join(" ");t in Yd||(Yd[t]=!0,Xt(...r))}function em(r,t,e){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}var nm={[Il]:Ll,[Dl]:Fl,[Nl]:Ol,[Qs]:Ul,[Ll]:Il,[Fl]:Dl,[Ol]:Nl,[Ul]:Qs},Hi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let i=n[t];if(i!==void 0){let s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,t);t.target=null}}},vn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var eu=Math.PI/180,$a=180/Math.PI;function Ao(){let r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(vn[r&255]+vn[r>>8&255]+vn[r>>16&255]+vn[r>>24&255]+"-"+vn[t&255]+vn[t>>8&255]+"-"+vn[t>>16&15|64]+vn[t>>24&255]+"-"+vn[e&63|128]+vn[e>>8&255]+"-"+vn[e>>16&255]+vn[e>>24&255]+vn[n&255]+vn[n>>8&255]+vn[n>>16&255]+vn[n>>24&255]).toLowerCase()}function ee(r,t,e){return Math.max(t,Math.min(e,r))}function O_(r,t){return(r%t+t)%t}function nu(r,t,e){return(1-e)*r+e*t}function Oa(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:case Uint8ClampedArray:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Wn(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var cf=class cf{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ee(this.x,t.x,e.x),this.y=ee(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ee(this.x,t,e),this.y=ee(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ee(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ee(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*n-a*i+t.x,this.y=s*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};cf.prototype.isVector2=!0;var Lt=cf,Wi=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],d=n[i+3],u=s[a+0],f=s[a+1],g=s[a+2],_=s[a+3];if(d!==_||l!==u||c!==f||h!==g){let p=l*u+c*f+h*g+d*_;p<0&&(u=-u,f=-f,g=-g,_=-_,p=-p);let m=1-o;if(p<.9995){let M=Math.acos(p),A=Math.sin(M);m=Math.sin(m*M)/A,o=Math.sin(o*M)/A,l=l*m+u*o,c=c*m+f*o,h=h*m+g*o,d=d*m+_*o}else{l=l*m+u*o,c=c*m+f*o,h=h*m+g*o,d=d*m+_*o;let M=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=M,c*=M,h*=M,d*=M}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,i,s,a){let o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],d=s[a],u=s[a+1],f=s[a+2],g=s[a+3];return t[e]=o*g+h*d+l*f-c*u,t[e+1]=l*g+h*u+c*d-o*f,t[e+2]=c*g+h*f+o*u-l*d,t[e+3]=h*g-o*d-l*u-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,i=t._y,s=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),d=o(s/2),u=l(n/2),f=l(i/2),g=l(s/2);switch(a){case"XYZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"YXZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"ZXY":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"ZYX":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"YZX":this._x=u*h*d+c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d-u*f*g;break;case"XZY":this._x=u*h*d-c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d+u*f*g;break;default:Xt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],s=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],d=e[10],u=n+o+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(s-c)*f,this._z=(a-i)*f}else if(n>o&&n>d){let f=2*Math.sqrt(1+n-o-d);this._w=(h-l)/f,this._x=.25*f,this._y=(i+a)/f,this._z=(s+c)/f}else if(o>d){let f=2*Math.sqrt(1+o-n-d);this._w=(s-c)/f,this._x=(i+a)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+d-n-o);this._w=(a-i)/f,this._x=(s+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ee(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,s=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+i*c-s*l,this._y=i*h+a*l+s*o-n*c,this._z=s*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-s*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,i=t._y,s=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,i=-i,s=-s,a=-a,o=-o);let l=1-e;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+s*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+s*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},hf=class hf{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Zd.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Zd.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,s=t.elements,a=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,s=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*i-o*n),h=2*(o*e-s*i),d=2*(s*n-a*e);return this.x=e+l*c+a*d-o*h,this.y=n+l*h+o*c-s*d,this.z=i+l*d+s*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ee(this.x,t.x,e.x),this.y=ee(this.y,t.y,e.y),this.z=ee(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ee(this.x,t,e),this.y=ee(this.y,t,e),this.z=ee(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ee(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,s=t.z,a=e.x,o=e.y,l=e.z;return this.x=i*l-s*o,this.y=s*a-n*l,this.z=n*o-i*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return iu.copy(this).projectOnVector(t),this.sub(iu)}reflect(t){return this.sub(iu.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ee(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};hf.prototype.isVector3=!0;var O=hf,iu=new O,Zd=new Wi,uf=class uf{constructor(t,e,n,i,s,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,a,o,l,c)}set(t,e,n,i,s,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=i,h[2]=o,h[3]=e,h[4]=s,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],f=n[5],g=n[8],_=i[0],p=i[3],m=i[6],M=i[1],A=i[4],y=i[7],S=i[2],T=i[5],E=i[8];return s[0]=a*_+o*M+l*S,s[3]=a*p+o*A+l*T,s[6]=a*m+o*y+l*E,s[1]=c*_+h*M+d*S,s[4]=c*p+h*A+d*T,s[7]=c*m+h*y+d*E,s[2]=u*_+f*M+g*S,s[5]=u*p+f*A+g*T,s[8]=u*m+f*y+g*E,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*s*h+n*o*l+i*s*c-i*a*l}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=h*a-o*c,u=o*l-h*s,f=c*s-a*l,g=e*d+n*u+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return t[0]=d*_,t[1]=(i*c-h*n)*_,t[2]=(o*n-i*a)*_,t[3]=u*_,t[4]=(h*e-i*l)*_,t[5]=(i*s-o*e)*_,t[6]=f*_,t[7]=(n*l-c*e)*_,t[8]=(a*e-n*s)*_,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,a,o){let l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-i*c,i*l,-i*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return rs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(ru.makeScale(t,e)),this}rotate(t){return rs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(ru.makeRotation(-t)),this}translate(t,e){return rs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(ru.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};uf.prototype.isMatrix3=!0;var Jt=uf,ru=new Jt,Jd=new Jt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),$d=new Jt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function B_(){let r={enabled:!0,workingColorSpace:Ya,spaces:{},convert:function(i,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===me&&(i.r=lr(i.r),i.g=lr(i.g),i.b=lr(i.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===me&&(i.r=Ks(i.r),i.g=Ks(i.g),i.b=Ks(i.b))),i},workingToColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},colorSpaceToWorking:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===hr?Za:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,a){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,s){return rs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(i,s)},toWorkingColorSpace:function(i,s){return rs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(i,s)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[Ya]:{primaries:t,whitePoint:n,transfer:Za,toXYZ:Jd,fromXYZ:$d,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Sn},outputColorSpaceConfig:{drawingBufferColorSpace:Sn}},[Sn]:{primaries:t,whitePoint:n,transfer:me,toXYZ:Jd,fromXYZ:$d,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Sn}}}),r}var le=B_();function lr(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Ks(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}var Os,Vl=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Os===void 0&&(Os=Ja("canvas")),Os.width=t.width,Os.height=t.height;let i=Os.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=Os}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Ja("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=lr(s[a]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(lr(e[n]/255)*255):e[n]=lr(e[n]);return{data:e,width:t.width,height:t.height}}else return Xt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},z_=0,ea=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:z_++}),this.uuid=Ao(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(su(i[a].image)):s.push(su(i[a]))}else s=su(i);n.url=s}return e||(t.images[this.uuid]=n),n}};function su(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Vl.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(Xt("Texture: Unable to serialize Texture."),{})}var k_=0,au=new O,Nn=class r extends Hi{constructor(t=r.DEFAULT_IMAGE,e=r.DEFAULT_MAPPING,n=Vi,i=Vi,s=dn,a=Br,o=yi,l=qn,c=r.DEFAULT_ANISOTROPY,h=hr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:k_++}),this.uuid=Ao(),this.name="",this.source=new ea(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Lt(0,0),this.repeat=new Lt(1,1),this.center=new Lt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Jt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(au).x}get height(){return this.source.getSize(au).y}get depth(){return this.source.getSize(au).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Xt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){Xt(`Texture.setValues(): property '${e}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Zu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Bl:t.x=t.x-Math.floor(t.x);break;case Vi:t.x=t.x<0?0:1;break;case zl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Bl:t.y=t.y-Math.floor(t.y);break;case Vi:t.y=t.y<0?0:1;break;case zl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Nn.DEFAULT_IMAGE=null;Nn.DEFAULT_MAPPING=Zu;Nn.DEFAULT_ANISOTROPY=1;var ff=class ff{constructor(t=0,e=0,n=0,i=1){this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s,l=t.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],g=l[9],_=l[2],p=l[6],m=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+_)<.1&&Math.abs(g+p)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let A=(c+1)/2,y=(f+1)/2,S=(m+1)/2,T=(h+u)/4,E=(d+_)/4,v=(g+p)/4;return A>y&&A>S?A<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(A),i=T/n,s=E/n):y>S?y<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(y),n=T/i,s=v/i):S<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(S),n=E/s,i=v/s),this.set(n,i,s,e),this}let M=Math.sqrt((p-g)*(p-g)+(d-_)*(d-_)+(u-h)*(u-h));return Math.abs(M)<.001&&(M=1),this.x=(p-g)/M,this.y=(d-_)/M,this.z=(u-h)/M,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ee(this.x,t.x,e.x),this.y=ee(this.y,t.y,e.y),this.z=ee(this.z,t.z,e.z),this.w=ee(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ee(this.x,t,e),this.y=ee(this.y,t,e),this.z=ee(this.z,t,e),this.w=ee(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ee(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};ff.prototype.isVector4=!0;var De=ff,Gl=class extends Hi{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:dn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new De(0,0,t,e),this.scissorTest=!1,this.viewport=new De(0,0,t,e),this.textures=[];let i={width:t,height:e,depth:n.depth},s=new Nn(i),a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:dn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let i=Object.assign({},t.textures[e].image);this.textures[e].source=new ea(i)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Xn=class extends Gl{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Ka=class extends Nn{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=ln,this.minFilter=ln,this.wrapR=Vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Hl=class extends Nn{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=ln,this.minFilter=ln,this.wrapR=Vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var pc=class pc{constructor(t,e,n,i,s,a,o,l,c,h,d,u,f,g,_,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,a,o,l,c,h,d,u,f,g,_,p)}set(t,e,n,i,s,a,o,l,c,h,d,u,f,g,_,p){let m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=i,m[1]=s,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=h,m[10]=d,m[14]=u,m[3]=f,m[7]=g,m[11]=_,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new pc().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,i=1/Bs.setFromMatrixColumn(t,0).length(),s=1/Bs.setFromMatrixColumn(t,1).length(),a=1/Bs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,s=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(s),d=Math.sin(s);if(t.order==="XYZ"){let u=a*h,f=a*d,g=o*h,_=o*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=f+g*c,e[5]=u-_*c,e[9]=-o*l,e[2]=_-u*c,e[6]=g+f*c,e[10]=a*l}else if(t.order==="YXZ"){let u=l*h,f=l*d,g=c*h,_=c*d;e[0]=u+_*o,e[4]=g*o-f,e[8]=a*c,e[1]=a*d,e[5]=a*h,e[9]=-o,e[2]=f*o-g,e[6]=_+u*o,e[10]=a*l}else if(t.order==="ZXY"){let u=l*h,f=l*d,g=c*h,_=c*d;e[0]=u-_*o,e[4]=-a*d,e[8]=g+f*o,e[1]=f+g*o,e[5]=a*h,e[9]=_-u*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let u=a*h,f=a*d,g=o*h,_=o*d;e[0]=l*h,e[4]=g*c-f,e[8]=u*c+_,e[1]=l*d,e[5]=_*c+u,e[9]=f*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let u=a*l,f=a*c,g=o*l,_=o*c;e[0]=l*h,e[4]=_-u*d,e[8]=g*d+f,e[1]=d,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=f*d+g,e[10]=u-_*d}else if(t.order==="XZY"){let u=a*l,f=a*c,g=o*l,_=o*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=u*d+_,e[5]=a*h,e[9]=f*d-g,e[2]=g*d-f,e[6]=o*h,e[10]=_*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(V_,t,G_)}lookAt(t,e,n){let i=this.elements;return Qn.subVectors(t,e),Qn.lengthSq()===0&&(Qn.z=1),Qn.normalize(),Tr.crossVectors(n,Qn),Tr.lengthSq()===0&&(Math.abs(n.z)===1?Qn.x+=1e-4:Qn.z+=1e-4,Qn.normalize(),Tr.crossVectors(n,Qn)),Tr.normalize(),cl.crossVectors(Qn,Tr),i[0]=Tr.x,i[4]=cl.x,i[8]=Qn.x,i[1]=Tr.y,i[5]=cl.y,i[9]=Qn.y,i[2]=Tr.z,i[6]=cl.z,i[10]=Qn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],f=n[13],g=n[2],_=n[6],p=n[10],m=n[14],M=n[3],A=n[7],y=n[11],S=n[15],T=i[0],E=i[4],v=i[8],w=i[12],R=i[1],N=i[5],L=i[9],V=i[13],I=i[2],z=i[6],q=i[10],k=i[14],et=i[3],Z=i[7],C=i[11],nt=i[15];return s[0]=a*T+o*R+l*I+c*et,s[4]=a*E+o*N+l*z+c*Z,s[8]=a*v+o*L+l*q+c*C,s[12]=a*w+o*V+l*k+c*nt,s[1]=h*T+d*R+u*I+f*et,s[5]=h*E+d*N+u*z+f*Z,s[9]=h*v+d*L+u*q+f*C,s[13]=h*w+d*V+u*k+f*nt,s[2]=g*T+_*R+p*I+m*et,s[6]=g*E+_*N+p*z+m*Z,s[10]=g*v+_*L+p*q+m*C,s[14]=g*w+_*V+p*k+m*nt,s[3]=M*T+A*R+y*I+S*et,s[7]=M*E+A*N+y*z+S*Z,s[11]=M*v+A*L+y*q+S*C,s[15]=M*w+A*V+y*k+S*nt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],f=t[14],g=t[3],_=t[7],p=t[11],m=t[15],M=l*f-c*u,A=o*f-c*d,y=o*u-l*d,S=a*f-c*h,T=a*u-l*h,E=a*d-o*h;return e*(_*M-p*A+m*y)-n*(g*M-p*S+m*T)+i*(g*A-_*S+m*E)-s*(g*y-_*T+p*E)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],i=t[8],s=t[1],a=t[5],o=t[9],l=t[2],c=t[6],h=t[10];return e*(a*h-o*c)-n*(s*h-o*l)+i*(s*c-a*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],f=t[11],g=t[12],_=t[13],p=t[14],m=t[15],M=e*o-n*a,A=e*l-i*a,y=e*c-s*a,S=n*l-i*o,T=n*c-s*o,E=i*c-s*l,v=h*_-d*g,w=h*p-u*g,R=h*m-f*g,N=d*p-u*_,L=d*m-f*_,V=u*m-f*p,I=M*V-A*L+y*N+S*R-T*w+E*v;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let z=1/I;return t[0]=(o*V-l*L+c*N)*z,t[1]=(i*L-n*V-s*N)*z,t[2]=(_*E-p*T+m*S)*z,t[3]=(u*T-d*E-f*S)*z,t[4]=(l*R-a*V-c*w)*z,t[5]=(e*V-i*R+s*w)*z,t[6]=(p*y-g*E-m*A)*z,t[7]=(h*E-u*y+f*A)*z,t[8]=(a*L-o*R+c*v)*z,t[9]=(n*R-e*L-s*v)*z,t[10]=(g*T-_*y+m*M)*z,t[11]=(d*y-h*T-f*M)*z,t[12]=(o*w-a*N-l*v)*z,t[13]=(e*N-n*w+i*v)*z,t[14]=(_*A-g*S-p*M)*z,t[15]=(h*S-d*A+u*M)*z,this}scale(t){let e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),s=1-n,a=t.x,o=t.y,l=t.z,c=s*a,h=s*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,a){return this.set(1,n,s,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,s=e._x,a=e._y,o=e._z,l=e._w,c=s+s,h=a+a,d=o+o,u=s*c,f=s*h,g=s*d,_=a*h,p=a*d,m=o*d,M=l*c,A=l*h,y=l*d,S=n.x,T=n.y,E=n.z;return i[0]=(1-(_+m))*S,i[1]=(f+y)*S,i[2]=(g-A)*S,i[3]=0,i[4]=(f-y)*T,i[5]=(1-(u+m))*T,i[6]=(p+M)*T,i[7]=0,i[8]=(g+A)*E,i[9]=(p-M)*E,i[10]=(1-(u+_))*E,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements;t.x=i[12],t.y=i[13],t.z=i[14];let s=this.determinantAffine();if(s===0)return n.set(1,1,1),e.identity(),this;let a=Bs.set(i[0],i[1],i[2]).length(),o=Bs.set(i[4],i[5],i[6]).length(),l=Bs.set(i[8],i[9],i[10]).length();s<0&&(a=-a),Ai.copy(this);let c=1/a,h=1/o,d=1/l;return Ai.elements[0]*=c,Ai.elements[1]*=c,Ai.elements[2]*=c,Ai.elements[4]*=h,Ai.elements[5]*=h,Ai.elements[6]*=h,Ai.elements[8]*=d,Ai.elements[9]*=d,Ai.elements[10]*=d,e.setFromRotationMatrix(Ai),n.x=a,n.y=o,n.z=l,this}makePerspective(t,e,n,i,s,a,o=Ii,l=!1){let c=this.elements,h=2*s/(e-t),d=2*s/(n-i),u=(e+t)/(e-t),f=(n+i)/(n-i),g,_;if(l)g=s/(a-s),_=a*s/(a-s);else if(o===Ii)g=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(o===js)g=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,s,a,o=Ii,l=!1){let c=this.elements,h=2/(e-t),d=2/(n-i),u=-(e+t)/(e-t),f=-(n+i)/(n-i),g,_;if(l)g=1/(a-s),_=a/(a-s);else if(o===Ii)g=-2/(a-s),_=-(a+s)/(a-s);else if(o===js)g=-1/(a-s),_=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};pc.prototype.isMatrix4=!0;var _e=pc,Bs=new O,Ai=new _e,V_=new O(0,0,0),G_=new O(1,1,1),Tr=new O,cl=new O,Qn=new O,Kd=new _e,Qd=new Wi,cr=class r{constructor(t=0,e=0,n=0,i=r.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,s=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],d=i[2],u=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(ee(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ee(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(ee(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-ee(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(ee(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-ee(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Xt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Kd.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Kd,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Qd.setFromEuler(this),this.setFromQuaternion(Qd,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};cr.DEFAULT_ORDER="XYZ";var Qa=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},H_=0,jd=new O,zs=new Wi,ir=new _e,hl=new O,Ba=new O,W_=new O,X_=new Wi,tp=new O(1,0,0),ep=new O(0,1,0),np=new O(0,0,1),ip={type:"added"},q_={type:"removed"},ks={type:"childadded",child:null},ou={type:"childremoved",child:null},cn=class r extends Hi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:H_++}),this.uuid=Ao(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=r.DEFAULT_UP.clone();let t=new O,e=new cr,n=new Wi,i=new O(1,1,1);function s(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new _e},normalMatrix:{value:new Jt}}),this.matrix=new _e,this.matrixWorld=new _e,this.matrixAutoUpdate=r.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=r.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Qa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return zs.setFromAxisAngle(t,e),this.quaternion.multiply(zs),this}rotateOnWorldAxis(t,e){return zs.setFromAxisAngle(t,e),this.quaternion.premultiply(zs),this}rotateX(t){return this.rotateOnAxis(tp,t)}rotateY(t){return this.rotateOnAxis(ep,t)}rotateZ(t){return this.rotateOnAxis(np,t)}translateOnAxis(t,e){return jd.copy(t).applyQuaternion(this.quaternion),this.position.add(jd.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(tp,t)}translateY(t){return this.translateOnAxis(ep,t)}translateZ(t){return this.translateOnAxis(np,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ir.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?hl.copy(t):hl.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Ba.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ir.lookAt(Ba,hl,this.up):ir.lookAt(hl,Ba,this.up),this.quaternion.setFromRotationMatrix(ir),i&&(ir.extractRotation(i.matrixWorld),zs.setFromRotationMatrix(ir),this.quaternion.premultiply(zs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Yt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(ip),ks.child=t,this.dispatchEvent(ks),ks.child=null):Yt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(q_),ou.child=t,this.dispatchEvent(ou),ou.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ir.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ir.multiply(t.parent.matrixWorld)),t.applyMatrix4(ir),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(ip),ks.child=t,this.dispatchEvent(ks),ks.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ba,t,W_),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ba,X_,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,i=t.z,s=this.matrix.elements;s[12]+=e-s[0]*e-s[4]*n-s[8]*i,s[13]+=n-s[1]*e-s[5]*n-s[9]*i,s[14]+=i-s[2]*e-s[6]*n-s[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];s(t.shapes,d)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(t.materials,this.material[l]));i.material=o}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];i.animations.push(s(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),d=a(t.shapes),u=a(t.skeletons),f=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};cn.DEFAULT_UP=new O(0,1,0);cn.DEFAULT_MATRIX_AUTO_UPDATE=!0;cn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Li=class extends cn{constructor(){super(),this.isGroup=!0,this.type="Group"}},Y_={type:"move"},na=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Li,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Li,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Li,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let _ of t.hand.values()){let p=e.getJointPose(_,n),m=this._getHandJoint(c,_);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,g=.005;c.inputState.pinching&&u>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Y_)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Li;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},im={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},wr={h:0,s:0,l:0},ul={h:0,s:0,l:0};function lu(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}var $t=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Sn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,le.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=le.workingColorSpace){return this.r=t,this.g=e,this.b=n,le.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=le.workingColorSpace){if(t=O_(t,1),e=ee(e,0,1),n=ee(n,0,1),e===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+e):n+e-n*e,a=2*n-s;this.r=lu(a,s,t+1/3),this.g=lu(a,s,t),this.b=lu(a,s,t-1/3)}return le.colorSpaceToWorking(this,i),this}setStyle(t,e=Sn){function n(s){s!==void 0&&parseFloat(s)<1&&Xt("Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s,a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:Xt("Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(s,16),e);Xt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Sn){let n=im[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Xt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=lr(t.r),this.g=lr(t.g),this.b=lr(t.b),this}copyLinearToSRGB(t){return this.r=Ks(t.r),this.g=Ks(t.g),this.b=Ks(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Sn){return le.workingToColorSpace(yn.copy(this),t),Math.round(ee(yn.r*255,0,255))*65536+Math.round(ee(yn.g*255,0,255))*256+Math.round(ee(yn.b*255,0,255))}getHexString(t=Sn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=le.workingColorSpace){le.workingToColorSpace(yn.copy(this),e);let n=yn.r,i=yn.g,s=yn.b,a=Math.max(n,i,s),o=Math.min(n,i,s),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case n:l=(i-s)/d+(i<s?6:0);break;case i:l=(s-n)/d+2;break;case s:l=(n-i)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=le.workingColorSpace){return le.workingToColorSpace(yn.copy(this),e),t.r=yn.r,t.g=yn.g,t.b=yn.b,t}getStyle(t=Sn){le.workingToColorSpace(yn.copy(this),t);let e=yn.r,n=yn.g,i=yn.b;return t!==Sn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(wr),this.setHSL(wr.h+t,wr.s+e,wr.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(wr),t.getHSL(ul);let n=nu(wr.h,ul.h,e),i=nu(wr.s,ul.s,e),s=nu(wr.l,ul.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},yn=new $t;$t.NAMES=im;var ja=class r{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new $t(t),this.density=e}clone(){return new r(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var to=class extends cn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new cr,this.environmentIntensity=1,this.environmentRotation=new cr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Ci=new O,rr=new O,cu=new O,sr=new O,Vs=new O,Gs=new O,rp=new O,hu=new O,uu=new O,fu=new O,du=new De,pu=new De,mu=new De,Rr=class r{constructor(t=new O,e=new O,n=new O){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Ci.subVectors(t,e),i.cross(Ci);let s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){Ci.subVectors(i,e),rr.subVectors(n,e),cu.subVectors(t,e);let a=Ci.dot(Ci),o=Ci.dot(rr),l=Ci.dot(cu),c=rr.dot(rr),h=rr.dot(cu),d=a*c-o*o;if(d===0)return s.set(0,0,0),null;let u=1/d,f=(c*l-o*h)*u,g=(a*h-o*l)*u;return s.set(1-f-g,g,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,sr)===null?!1:sr.x>=0&&sr.y>=0&&sr.x+sr.y<=1}static getInterpolation(t,e,n,i,s,a,o,l){return this.getBarycoord(t,e,n,i,sr)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,sr.x),l.addScaledVector(a,sr.y),l.addScaledVector(o,sr.z),l)}static getInterpolatedAttribute(t,e,n,i,s,a){return du.setScalar(0),pu.setScalar(0),mu.setScalar(0),du.fromBufferAttribute(t,e),pu.fromBufferAttribute(t,n),mu.fromBufferAttribute(t,i),a.setScalar(0),a.addScaledVector(du,s.x),a.addScaledVector(pu,s.y),a.addScaledVector(mu,s.z),a}static isFrontFacing(t,e,n,i){return Ci.subVectors(n,e),rr.subVectors(t,e),Ci.cross(rr).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ci.subVectors(this.c,this.b),rr.subVectors(this.a,this.b),Ci.cross(rr).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return r.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return r.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,s){return r.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return r.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return r.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,s=this.c,a,o;Vs.subVectors(i,n),Gs.subVectors(s,n),hu.subVectors(t,n);let l=Vs.dot(hu),c=Gs.dot(hu);if(l<=0&&c<=0)return e.copy(n);uu.subVectors(t,i);let h=Vs.dot(uu),d=Gs.dot(uu);if(h>=0&&d<=h)return e.copy(i);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(Vs,a);fu.subVectors(t,s);let f=Vs.dot(fu),g=Gs.dot(fu);if(g>=0&&f<=g)return e.copy(s);let _=f*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(Gs,o);let p=h*g-f*d;if(p<=0&&d-h>=0&&f-g>=0)return rp.subVectors(s,i),o=(d-h)/(d-h+(f-g)),e.copy(i).addScaledVector(rp,o);let m=1/(p+_+u);return a=_*m,o=u*m,e.copy(n).addScaledVector(Vs,a).addScaledVector(Gs,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Xi=class{constructor(t=new O(1/0,1/0,1/0),e=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Ri.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Ri.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Ri.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Ri):Ri.fromBufferAttribute(s,a),Ri.applyMatrix4(t.matrixWorld),this.expandByPoint(Ri);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),fl.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),fl.copy(n.boundingBox)),fl.applyMatrix4(t.matrixWorld),this.union(fl)}let i=t.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ri),Ri.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(za),dl.subVectors(this.max,za),Hs.subVectors(t.a,za),Ws.subVectors(t.b,za),Xs.subVectors(t.c,za),Er.subVectors(Ws,Hs),Ar.subVectors(Xs,Ws),ts.subVectors(Hs,Xs);let e=[0,-Er.z,Er.y,0,-Ar.z,Ar.y,0,-ts.z,ts.y,Er.z,0,-Er.x,Ar.z,0,-Ar.x,ts.z,0,-ts.x,-Er.y,Er.x,0,-Ar.y,Ar.x,0,-ts.y,ts.x,0];return!gu(e,Hs,Ws,Xs,dl)||(e=[1,0,0,0,1,0,0,0,1],!gu(e,Hs,Ws,Xs,dl))?!1:(pl.crossVectors(Er,Ar),e=[pl.x,pl.y,pl.z],gu(e,Hs,Ws,Xs,dl))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ri).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ri).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ar[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ar[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ar[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ar[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ar[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ar[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ar[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ar[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ar),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},ar=[new O,new O,new O,new O,new O,new O,new O,new O],Ri=new O,fl=new Xi,Hs=new O,Ws=new O,Xs=new O,Er=new O,Ar=new O,ts=new O,za=new O,dl=new O,pl=new O,es=new O;function gu(r,t,e,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){es.fromArray(r,s);let o=i.x*Math.abs(es.x)+i.y*Math.abs(es.y)+i.z*Math.abs(es.z),l=t.dot(es),c=e.dot(es),h=n.dot(es);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Ze=new O,ml=new Lt,Z_=0,ti=class extends Hi{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Z_++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Qp,this.updateRanges=[],this.gpuType=vi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ml.fromBufferAttribute(this,e),ml.applyMatrix3(t),this.setXY(e,ml.x,ml.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ze.fromBufferAttribute(this,e),Ze.applyMatrix3(t),this.setXYZ(e,Ze.x,Ze.y,Ze.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ze.fromBufferAttribute(this,e),Ze.applyMatrix4(t),this.setXYZ(e,Ze.x,Ze.y,Ze.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ze.fromBufferAttribute(this,e),Ze.applyNormalMatrix(t),this.setXYZ(e,Ze.x,Ze.y,Ze.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ze.fromBufferAttribute(this,e),Ze.transformDirection(t),this.setXYZ(e,Ze.x,Ze.y,Ze.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Oa(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Wn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Oa(e,this.array)),e}setX(t,e){return this.normalized&&(e=Wn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Oa(e,this.array)),e}setY(t,e){return this.normalized&&(e=Wn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Oa(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Wn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Oa(e,this.array)),e}setW(t,e){return this.normalized&&(e=Wn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Wn(e,this.array),n=Wn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Wn(e,this.array),n=Wn(n,this.array),i=Wn(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=Wn(e,this.array),n=Wn(n,this.array),i=Wn(i,this.array),s=Wn(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var eo=class extends ti{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var no=class extends ti{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var on=class extends ti{constructor(t,e,n){super(new Float32Array(t),e,n)}},J_=new Xi,ka=new O,_u=new O,Pr=class{constructor(t=new O,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):J_.setFromPoints(t).getCenter(n);let i=0;for(let s=0,a=t.length;s<a;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ka.subVectors(t,this.center);let e=ka.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(ka,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(_u.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ka.copy(t.center).add(_u)),this.expandByPoint(ka.copy(t.center).sub(_u))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},$_=0,mi=new _e,xu=new cn,qs=new O,jn=new Xi,Va=new Xi,sn=new O,gi=class r extends Hi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:$_++}),this.uuid=Ao(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(U_(t)?no:eo)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new Jt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return mi.makeRotationFromQuaternion(t),this.applyMatrix4(mi),this}rotateX(t){return mi.makeRotationX(t),this.applyMatrix4(mi),this}rotateY(t){return mi.makeRotationY(t),this.applyMatrix4(mi),this}rotateZ(t){return mi.makeRotationZ(t),this.applyMatrix4(mi),this}translate(t,e,n){return mi.makeTranslation(t,e,n),this.applyMatrix4(mi),this}scale(t,e,n){return mi.makeScale(t,e,n),this.applyMatrix4(mi),this}lookAt(t){return xu.lookAt(t),xu.updateMatrix(),this.applyMatrix4(xu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(qs).negate(),this.translate(qs.x,qs.y,qs.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let i=0,s=t.length;i<s;i++){let a=t[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new on(n,3))}else{let n=Math.min(t.length,e.count);for(let i=0;i<n;i++){let s=t[i];e.setXYZ(i,s.x,s.y,s.z||0)}t.length>e.count&&Xt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Xi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Yt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let s=e[n];jn.setFromBufferAttribute(s),this.morphTargetsRelative?(sn.addVectors(this.boundingBox.min,jn.min),this.boundingBox.expandByPoint(sn),sn.addVectors(this.boundingBox.max,jn.max),this.boundingBox.expandByPoint(sn)):(this.boundingBox.expandByPoint(jn.min),this.boundingBox.expandByPoint(jn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Yt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Pr);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Yt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(t){let n=this.boundingSphere.center;if(jn.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){let o=e[s];Va.setFromBufferAttribute(o),this.morphTargetsRelative?(sn.addVectors(jn.min,Va.min),jn.expandByPoint(sn),sn.addVectors(jn.max,Va.max),jn.expandByPoint(sn)):(jn.expandByPoint(Va.min),jn.expandByPoint(Va.max))}jn.getCenter(n);let i=0;for(let s=0,a=t.count;s<a;s++)sn.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(sn));if(e)for(let s=0,a=e.length;s<a;s++){let o=e[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)sn.fromBufferAttribute(o,c),l&&(qs.fromBufferAttribute(t,c),sn.add(qs)),i=Math.max(i,n.distanceToSquared(sn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&Yt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Yt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,i=e.normal,s=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new ti(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[];for(let v=0;v<n.count;v++)o[v]=new O,l[v]=new O;let c=new O,h=new O,d=new O,u=new Lt,f=new Lt,g=new Lt,_=new O,p=new O;function m(v,w,R){c.fromBufferAttribute(n,v),h.fromBufferAttribute(n,w),d.fromBufferAttribute(n,R),u.fromBufferAttribute(s,v),f.fromBufferAttribute(s,w),g.fromBufferAttribute(s,R),h.sub(c),d.sub(c),f.sub(u),g.sub(u);let N=1/(f.x*g.y-g.x*f.y);isFinite(N)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(N),p.copy(d).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(N),o[v].add(_),o[w].add(_),o[R].add(_),l[v].add(p),l[w].add(p),l[R].add(p))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let v=0,w=M.length;v<w;++v){let R=M[v],N=R.start,L=R.count;for(let V=N,I=N+L;V<I;V+=3)m(t.getX(V+0),t.getX(V+1),t.getX(V+2))}let A=new O,y=new O,S=new O,T=new O;function E(v){S.fromBufferAttribute(i,v),T.copy(S);let w=o[v];A.copy(w),A.sub(S.multiplyScalar(S.dot(w))).normalize(),y.crossVectors(T,w);let N=y.dot(l[v])<0?-1:1;a.setXYZW(v,A.x,A.y,A.z,N)}for(let v=0,w=M.length;v<w;++v){let R=M[v],N=R.start,L=R.count;for(let V=N,I=N+L;V<I;V+=3)E(t.getX(V+0)),E(t.getX(V+1)),E(t.getX(V+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new ti(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);let i=new O,s=new O,a=new O,o=new O,l=new O,c=new O,h=new O,d=new O;if(t)for(let u=0,f=t.count;u<f;u+=3){let g=t.getX(u+0),_=t.getX(u+1),p=t.getX(u+2);i.fromBufferAttribute(e,g),s.fromBufferAttribute(e,_),a.fromBufferAttribute(e,p),h.subVectors(a,s),d.subVectors(i,s),h.cross(d),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,p),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let u=0,f=e.count;u<f;u+=3)i.fromBufferAttribute(e,u+0),s.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),h.subVectors(a,s),d.subVectors(i,s),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)sn.fromBufferAttribute(t,e),sn.normalize(),t.setXYZ(e,sn.x,sn.y,sn.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,d=o.normalized,u=new c.constructor(l.length*h),f=0,g=0;for(let _=0,p=l.length;_<p;_++){o.isInterleavedBufferAttribute?f=l[_]*o.data.stride+o.offset:f=l[_]*h;for(let m=0;m<h;m++)u[g++]=c[f++]}return new ti(u,h,d)}if(this.index===null)return Xt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new r,n=this.index.array,i=this.attributes;for(let o in i){let l=i[o],c=t(l,n);e.setAttribute(o,c)}let s=this.morphAttributes;for(let o in s){let l=[],c=s[o];for(let h=0,d=c.length;h<d;h++){let u=c[h],f=t(u,n);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let i={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let f=c[d];h.push(f.toJSON(t.data))}h.length>0&&(i[l]=h,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let i=t.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(e))}let s=t.morphAttributes;for(let c in s){let h=[],d=s[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var vu=new O,K_=new O,Q_=new Jt,Pi=class{constructor(t=new O(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=vu.subVectors(n,e).cross(K_.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let i=t.delta(vu),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/s;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(i,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Q_.getNormalMatrix(t),i=this.coplanarPoint(vu).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},j_=0,Ir=class extends Hi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:j_++}),this.uuid=Ao(),this.name="",this.type="Material",this.blending=ca,this.side=Fr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=zu,this.blendDst=ku,this.blendEquation=hs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new $t(0,0,0),this.blendAlpha=0,this.depthFunc=Qs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Xp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Pl,this.stencilZFail=Pl,this.stencilZPass=Pl,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Xt(`Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){Xt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){let a=[];for(let o in s){let l=s[o];delete l.metadata,a.push(l)}return a}if(e){let s=i(t.textures),a=i(t.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new $t().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Pi().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Lt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Lt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var or=new O,yu=new O,gl=new O,_l=new O,Wl=class{constructor(t=new O,e=new O(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,or)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=or.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(or.copy(this.origin).addScaledVector(this.direction,e),or.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){yu.copy(t).add(e).multiplyScalar(.5),gl.copy(e).sub(t).normalize(),_l.copy(this.origin).sub(yu);let s=t.distanceTo(e)*.5,a=-this.direction.dot(gl),o=_l.dot(this.direction),l=-_l.dot(gl),c=_l.lengthSq(),h=Math.abs(1-a*a),d,u,f,g;if(h>0)if(d=a*l-o,u=a*o-l,g=s*h,d>=0)if(u>=-g)if(u<=g){let _=1/h;d*=_,u*=_,f=d*(d+a*u+2*o)+u*(a*d+u+2*l)+c}else u=s,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u=-s,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u<=-g?(d=Math.max(0,-(-a*s+o)),u=d>0?-s:Math.min(Math.max(-s,-l),s),f=-d*d+u*(u+2*l)+c):u<=g?(d=0,u=Math.min(Math.max(-s,-l),s),f=u*(u+2*l)+c):(d=Math.max(0,-(a*s+o)),u=d>0?s:Math.min(Math.max(-s,-l),s),f=-d*d+u*(u+2*l)+c);else u=a>0?-s:s,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(yu).addScaledVector(gl,u),f}intersectSphere(t,e){if(t.radius<0)return null;or.subVectors(t.center,this.origin);let n=or.dot(this.direction),i=or.dot(or)-n*n,s=t.radius*t.radius;if(i>s)return null;let a=Math.sqrt(s-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,a,o,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,i=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,i=(t.min.x-u.x)*c),h>=0?(s=(t.min.y-u.y)*h,a=(t.max.y-u.y)*h):(s=(t.max.y-u.y)*h,a=(t.min.y-u.y)*h),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),d>=0?(o=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(o=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,or)!==null}intersectTriangle(t,e,n,i,s){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,d=t.x-a.x,u=t.y-a.y,f=t.z-a.z,g=e.x-a.x,_=e.y-a.y,p=e.z-a.z,m=n.x-a.x,M=n.y-a.y,A=n.z-a.z,y=Math.abs(l),S=Math.abs(c),T=Math.abs(h),E,v,w,R,N,L,V,I,z,q,k,et;if(y>=S&&y>=T?(w=l,L=d,z=g,et=m,l>=0?(E=c,v=h,R=u,N=f,V=_,I=p,q=M,k=A):(E=h,v=c,R=f,N=u,V=p,I=_,q=A,k=M)):S>=T?(w=c,L=u,z=_,et=M,c>=0?(E=h,v=l,R=f,N=d,V=p,I=g,q=A,k=m):(E=l,v=h,R=d,N=f,V=g,I=p,q=m,k=A)):(w=h,L=f,z=p,et=A,h>=0?(E=l,v=c,R=d,N=u,V=g,I=_,q=m,k=M):(E=c,v=l,R=u,N=d,V=_,I=g,q=M,k=m)),w===0)return null;let Z=E/w,C=v/w,nt=1/w,Mt=R-Z*L,bt=N-C*L,Bt=V-Z*z,Ut=I-C*z,Ht=q-Z*et,j=k-C*et,it=Ht*Ut-j*Bt,mt=Mt*j-bt*Ht,zt=Bt*bt-Ut*Mt;if(i){if(it<0||mt<0||zt<0)return null}else if((it<0||mt<0||zt<0)&&(it>0||mt>0||zt>0))return null;let gt=it+mt+zt;if(gt===0)return null;let Ft=nt*(it*L+mt*z+zt*et);return(gt>0?Ft<0:Ft>0)?null:this.at(Ft/gt,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ei=class extends Ir{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new $t(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new cr,this.combine=Vu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},sp=new _e,ns=new Wl,xl=new Pr,ap=new O,vl=new O,yl=new O,Sl=new O,Su=new O,Ml=new O,op=new O,bl=new O,Te=class extends cn{constructor(t=new gi,e=new ei){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){let o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let o=this.morphTargetInfluences;if(s&&o){Ml.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let h=o[l],d=s[l];h!==0&&(Su.fromBufferAttribute(d,t),a?Ml.addScaledVector(Su,h):Ml.addScaledVector(Su.sub(e),h))}e.add(Ml)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),xl.copy(n.boundingSphere),xl.applyMatrix4(s),ns.copy(t.ray).recast(t.near),!(xl.containsPoint(ns.origin)===!1&&(ns.intersectSphere(xl,ap)===null||ns.origin.distanceToSquared(ap)>(t.far-t.near)**2))&&(sp.copy(s).invert(),ns.copy(t.ray).applyMatrix4(sp),!(n.boundingBox!==null&&ns.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ns)))}_computeIntersections(t,e,n){let i,s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,d=s.attributes.normal,u=s.groups,f=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=u.length;g<_;g++){let p=u[g],m=a[p.materialIndex],M=Math.max(p.start,f.start),A=Math.min(o.count,Math.min(p.start+p.count,f.start+f.count));for(let y=M,S=A;y<S;y+=3){let T=o.getX(y),E=o.getX(y+1),v=o.getX(y+2);i=Tl(this,m,t,n,c,h,d,T,E,v),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{let g=Math.max(0,f.start),_=Math.min(o.count,f.start+f.count);for(let p=g,m=_;p<m;p+=3){let M=o.getX(p),A=o.getX(p+1),y=o.getX(p+2);i=Tl(this,a,t,n,c,h,d,M,A,y),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=u.length;g<_;g++){let p=u[g],m=a[p.materialIndex],M=Math.max(p.start,f.start),A=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let y=M,S=A;y<S;y+=3){let T=y,E=y+1,v=y+2;i=Tl(this,m,t,n,c,h,d,T,E,v),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{let g=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let p=g,m=_;p<m;p+=3){let M=p,A=p+1,y=p+2;i=Tl(this,a,t,n,c,h,d,M,A,y),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}}};function t0(r,t,e,n,i,s,a,o){let l;if(t.side===Un?l=n.intersectTriangle(a,s,i,!0,o):l=n.intersectTriangle(i,s,a,t.side===Fr,o),l===null)return null;bl.copy(o),bl.applyMatrix4(r.matrixWorld);let c=e.ray.origin.distanceTo(bl);return c<e.near||c>e.far?null:{distance:c,point:bl.clone(),object:r}}function Tl(r,t,e,n,i,s,a,o,l,c){r.getVertexPosition(o,vl),r.getVertexPosition(l,yl),r.getVertexPosition(c,Sl);let h=t0(r,t,e,n,vl,yl,Sl,op);if(h){let d=new O;Rr.getBarycoord(op,vl,yl,Sl,d),i&&(h.uv=Rr.getInterpolatedAttribute(i,o,l,c,d,new Lt)),s&&(h.uv1=Rr.getInterpolatedAttribute(s,o,l,c,d,new Lt)),a&&(h.normal=Rr.getInterpolatedAttribute(a,o,l,c,d,new O),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new O,materialIndex:0};Rr.getNormal(vl,yl,Sl,u.normal),h.face=u,h.barycoord=d}return h}var io=class extends Nn{constructor(t=null,e=1,n=1,i,s,a,o,l,c=ln,h=ln,d,u){super(null,a,o,l,c,h,i,s,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ro=class extends ti{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Ys=new _e,lp=new _e,wl=[],cp=new Xi,e0=new _e,Ga=new Te,Ha=new Pr,ia=class extends Te{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new ro(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,e0)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Xi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ys),cp.copy(t.boundingBox).applyMatrix4(Ys),this.boundingBox.union(cp)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Pr),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ys),Ha.copy(t.boundingSphere).applyMatrix4(Ys),this.boundingSphere.union(Ha)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,a=t*s+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(t,e){let n=this.matrixWorld,i=this.count;if(Ga.geometry=this.geometry,Ga.material=this.material,Ga.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ha.copy(this.boundingSphere),Ha.applyMatrix4(n),t.ray.intersectsSphere(Ha)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,Ys),lp.multiplyMatrices(n,Ys),Ga.matrixWorld=lp,Ga.raycast(t,wl);for(let a=0,o=wl.length;a<o;a++){let l=wl[a];l.instanceId=s,l.object=this,e.push(l)}wl.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new ro(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new io(new Float32Array(i*this.count),i,this.count,Sc,vi));let s=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=i*t;return s[l]=o,s.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},is=new Pr,n0=new Lt(.5,.5),El=new O,ra=class{constructor(t=new Pi,e=new Pi,n=new Pi,i=new Pi,s=new Pi,a=new Pi){this.planes=[t,e,n,i,s,a]}set(t,e,n,i,s,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Ii,n=!1){let i=this.planes,s=t.elements,a=s[0],o=s[1],l=s[2],c=s[3],h=s[4],d=s[5],u=s[6],f=s[7],g=s[8],_=s[9],p=s[10],m=s[11],M=s[12],A=s[13],y=s[14],S=s[15];if(i[0].setComponents(c-a,f-h,m-g,S-M).normalize(),i[1].setComponents(c+a,f+h,m+g,S+M).normalize(),i[2].setComponents(c+o,f+d,m+_,S+A).normalize(),i[3].setComponents(c-o,f-d,m-_,S-A).normalize(),n)i[4].setComponents(l,u,p,y).normalize(),i[5].setComponents(c-l,f-u,m-p,S-y).normalize();else if(i[4].setComponents(c-l,f-u,m-p,S-y).normalize(),e===Ii)i[5].setComponents(c+l,f+u,m+p,S+y).normalize();else if(e===js)i[5].setComponents(l,u,p,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),is.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),is.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(is)}intersectsSprite(t){is.center.set(0,0,0);let e=n0.distanceTo(t.center);return is.radius=.7071067811865476+e,is.applyMatrix4(t.matrixWorld),this.intersectsSphere(is)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(El.x=i.normal.x>0?t.max.x:t.min.x,El.y=i.normal.y>0?t.max.y:t.min.y,El.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(El)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var so=class extends Nn{constructor(t=[],e=Or,n,i,s,a,o,l,c,h){super(t,e,n,i,s,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},ao=class extends Nn{constructor(t,e,n,i,s,a,o,l,c){super(t,e,n,i,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Lr=class extends Nn{constructor(t,e,n=Ni,i,s,a,o=ln,l=ln,c,h=Gi,d=1){if(h!==Gi&&h!==zr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:e,depth:d};super(u,i,s,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new ea(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Xl=class extends Lr{constructor(t,e=Ni,n=Or,i,s,a=ln,o=ln,l,c=Gi){let h={width:t,height:t,depth:1},d=[h,h,h,h,h,h];super(t,t,e,n,i,s,a,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},oo=class extends Nn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},_i=class r extends gi{constructor(t=1,e=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};let o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);let l=[],c=[],h=[],d=[],u=0,f=0;g("z","y","x",-1,-1,n,e,t,a,s,0),g("z","y","x",1,-1,n,e,-t,a,s,1),g("x","z","y",1,1,t,n,e,i,a,2),g("x","z","y",1,-1,t,n,-e,i,a,3),g("x","y","z",1,-1,t,e,n,i,s,4),g("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new on(c,3)),this.setAttribute("normal",new on(h,3)),this.setAttribute("uv",new on(d,2));function g(_,p,m,M,A,y,S,T,E,v,w){let R=y/E,N=S/v,L=y/2,V=S/2,I=T/2,z=E+1,q=v+1,k=0,et=0,Z=new O;for(let C=0;C<q;C++){let nt=C*N-V;for(let Mt=0;Mt<z;Mt++){let bt=Mt*R-L;Z[_]=bt*M,Z[p]=nt*A,Z[m]=I,c.push(Z.x,Z.y,Z.z),Z[_]=0,Z[p]=0,Z[m]=T>0?1:-1,h.push(Z.x,Z.y,Z.z),d.push(Mt/E),d.push(1-C/v),k+=1}}for(let C=0;C<v;C++)for(let nt=0;nt<E;nt++){let Mt=u+nt+z*C,bt=u+nt+z*(C+1),Bt=u+(nt+1)+z*(C+1),Ut=u+(nt+1)+z*C;l.push(Mt,bt,Ut),l.push(bt,Bt,Ut),et+=6}o.addGroup(f,et,w),f+=et,u+=k}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var xi=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Xt("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,i=this.getPoint(0),s=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),s+=n.distanceTo(i),e.push(s),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),i=0,s=n.length,a;e?a=e:a=t*n[s-1];let o=0,l=s-1,c;for(;o<=l;)if(i=Math.floor(o+(l-o)/2),c=n[i]-a,c<0)o=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===a)return i/(s-1);let h=n[i],u=n[i+1]-h,f=(a-h)/u;return(i+f)/(s-1)}getTangent(t,e){let i=t-1e-4,s=t+1e-4;i<0&&(i=0),s>1&&(s=1);let a=this.getPoint(i),o=this.getPoint(s),l=e||(a.isVector2?new Lt:new O);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new O,i=[],s=[],a=[],o=new O,l=new _e;for(let f=0;f<=t;f++){let g=f/t;i[f]=this.getTangentAt(g,new O)}s[0]=new O,a[0]=new O;let c=Number.MAX_VALUE,h=Math.abs(i[0].x),d=Math.abs(i[0].y),u=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),u<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],o),a[0].crossVectors(i[0],s[0]);for(let f=1;f<=t;f++){if(s[f]=s[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(i[f-1],i[f]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(ee(i[f-1].dot(i[f]),-1,1));s[f].applyMatrix4(l.makeRotationAxis(o,g))}a[f].crossVectors(i[f],s[f])}if(e===!0){let f=Math.acos(ee(s[0].dot(s[t]),-1,1));f/=t,i[0].dot(o.crossVectors(s[0],s[t]))>0&&(f=-f);for(let g=1;g<=t;g++)s[g].applyMatrix4(l.makeRotationAxis(i[g],f*g)),a[g].crossVectors(i[g],s[g])}return{tangents:i,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},lo=class extends xi{constructor(t=0,e=0,n=1,i=1,s=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new Lt){let n=e,i=Math.PI*2,s=this.aEndAngle-this.aStartAngle,a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(a?s=0:s=i),this.aClockwise===!0&&!a&&(s===i?s=-i:s=s-i);let o=this.aStartAngle+t*s,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,f=c-this.aY;l=u*h-f*d+this.aX,c=u*d+f*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},ql=class extends lo{constructor(t,e,n,i,s,a){super(t,e,n,n,i,s,a),this.isArcCurve=!0,this.type="ArcCurve"}};function rf(){let r=0,t=0,e=0,n=0;function i(s,a,o,l){r=s,t=o,e=-3*s+3*a-2*o-l,n=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,c){i(a,o,c*(o-s),c*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,c,h,d){let u=(a-s)/c-(o-s)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+d)+(l-o)/d;u*=h,f*=h,i(a,o,u,f)},calc:function(s){let a=s*s,o=a*s;return r+t*s+e*a+n*o}}}var hp=new O,up=new O,Mu=new rf,bu=new rf,Tu=new rf,ss=class extends xi{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new O){let n=e,i=this.points,s=i.length,a=(s-(this.closed?0:1))*t,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:l===0&&o===s-1&&(o=s-2,l=1);let c,h;this.closed||o>0?c=i[(o-1)%s]:(up.subVectors(i[0],i[1]).add(i[0]),c=up);let d=i[o%s],u=i[(o+1)%s];if(this.closed||o+2<s?h=i[(o+2)%s]:(hp.subVectors(i[s-1],i[s-2]).add(i[s-1]),h=hp),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(d),f),_=Math.pow(d.distanceToSquared(u),f),p=Math.pow(u.distanceToSquared(h),f);_<1e-4&&(_=1),g<1e-4&&(g=_),p<1e-4&&(p=_),Mu.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,g,_,p),bu.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,g,_,p),Tu.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,g,_,p)}else this.curveType==="catmullrom"&&(Mu.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),bu.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),Tu.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return n.set(Mu.calc(l),bu.calc(l),Tu.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new O().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function fp(r,t,e,n,i){let s=(n-t)*.5,a=(i-e)*.5,o=r*r,l=r*o;return(2*e-2*n+s+a)*l+(-3*e+3*n-2*s-a)*o+s*r+e}function i0(r,t){let e=1-r;return e*e*t}function r0(r,t){return 2*(1-r)*r*t}function s0(r,t){return r*r*t}function Wa(r,t,e,n){return i0(r,t)+r0(r,e)+s0(r,n)}function a0(r,t){let e=1-r;return e*e*e*t}function o0(r,t){let e=1-r;return 3*e*e*r*t}function l0(r,t){return 3*(1-r)*r*r*t}function c0(r,t){return r*r*r*t}function Xa(r,t,e,n,i){return a0(r,t)+o0(r,e)+l0(r,n)+c0(r,i)}var Yl=class extends xi{constructor(t=new Lt,e=new Lt,n=new Lt,i=new Lt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new Lt){let n=e,i=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(Xa(t,i.x,s.x,a.x,o.x),Xa(t,i.y,s.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Zl=class extends xi{constructor(t=new O,e=new O,n=new O,i=new O){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new O){let n=e,i=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(Xa(t,i.x,s.x,a.x,o.x),Xa(t,i.y,s.y,a.y,o.y),Xa(t,i.z,s.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Jl=class extends xi{constructor(t=new Lt,e=new Lt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Lt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Lt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},$l=class extends xi{constructor(t=new O,e=new O){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new O){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new O){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Kl=class extends xi{constructor(t=new Lt,e=new Lt,n=new Lt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Lt){let n=e,i=this.v0,s=this.v1,a=this.v2;return n.set(Wa(t,i.x,s.x,a.x),Wa(t,i.y,s.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},as=class extends xi{constructor(t=new O,e=new O,n=new O){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new O){let n=e,i=this.v0,s=this.v1,a=this.v2;return n.set(Wa(t,i.x,s.x,a.x),Wa(t,i.y,s.y,a.y),Wa(t,i.z,s.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ql=class extends xi{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Lt){let n=e,i=this.points,s=(i.length-1)*t,a=Math.floor(s),o=s-a,l=i[a===0?a:a-1],c=i[a],h=i[a>i.length-2?i.length-1:a+1],d=i[a>i.length-3?i.length-1:a+2];return n.set(fp(o,l.x,c.x,h.x,d.x),fp(o,l.y,c.y,h.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new Lt().fromArray(i))}return this}},h0=Object.freeze({__proto__:null,ArcCurve:ql,CatmullRomCurve3:ss,CubicBezierCurve:Yl,CubicBezierCurve3:Zl,EllipseCurve:lo,LineCurve:Jl,LineCurve3:$l,QuadraticBezierCurve:Kl,QuadraticBezierCurve3:as,SplineCurve:Ql});var co=class r extends gi{constructor(t=[new Lt(0,-.5),new Lt(.5,0),new Lt(0,.5)],e=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:i},e=Math.floor(e),i=ee(i,0,Math.PI*2);let s=[],a=[],o=[],l=[],c=[],h=1/e,d=new O,u=new Lt,f=new O,g=new O,_=new O,p=0,m=0;for(let M=0;M<=t.length-1;M++)switch(M){case 0:p=t[M+1].x-t[M].x,m=t[M+1].y-t[M].y,f.x=m*1,f.y=-p,f.z=m*0,_.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:l.push(_.x,_.y,_.z);break;default:p=t[M+1].x-t[M].x,m=t[M+1].y-t[M].y,f.x=m*1,f.y=-p,f.z=m*0,g.copy(f),f.x+=_.x,f.y+=_.y,f.z+=_.z,f.normalize(),l.push(f.x,f.y,f.z),_.copy(g)}for(let M=0;M<=e;M++){let A=n+M*h*i,y=Math.sin(A),S=Math.cos(A);for(let T=0;T<=t.length-1;T++){d.x=t[T].x*y,d.y=t[T].y,d.z=t[T].x*S,a.push(d.x,d.y,d.z),u.x=M/e,u.y=T/(t.length-1),o.push(u.x,u.y);let E=l[3*T+0]*y,v=l[3*T+1],w=l[3*T+0]*S;c.push(E,v,w)}}for(let M=0;M<e;M++)for(let A=0;A<t.length-1;A++){let y=A+M*t.length,S=y,T=y+t.length,E=y+t.length+1,v=y+1;s.push(S,T,v),s.push(E,v,T)}this.setIndex(s),this.setAttribute("position",new on(a,3)),this.setAttribute("uv",new on(o,2)),this.setAttribute("normal",new on(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.points,t.segments,t.phiStart,t.phiLength)}};var ni=class r extends gi{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let s=t/2,a=e/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,d=t/o,u=e/l,f=[],g=[],_=[],p=[];for(let m=0;m<h;m++){let M=m*u-a;for(let A=0;A<c;A++){let y=A*d-s;g.push(y,-M,0),_.push(0,0,1),p.push(A/o),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let M=0;M<o;M++){let A=M+c*m,y=M+c*(m+1),S=M+1+c*(m+1),T=M+1+c*m;f.push(A,y,T),f.push(y,S,T)}this.setIndex(f),this.setAttribute("position",new on(g,3)),this.setAttribute("normal",new on(_,3)),this.setAttribute("uv",new on(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.width,t.height,t.widthSegments,t.heightSegments)}};var ho=class r extends gi{constructor(t=new as(new O(-1,-1,0),new O(-1,1,0),new O(1,1,0)),e=64,n=1,i=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:i,closed:s};let a=t.computeFrenetFrames(e,s);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new O,l=new O,c=new Lt,h=new O,d=[],u=[],f=[],g=[];_(),this.setIndex(g),this.setAttribute("position",new on(d,3)),this.setAttribute("normal",new on(u,3)),this.setAttribute("uv",new on(f,2));function _(){for(let A=0;A<e;A++)p(A);p(s===!1?e:0),M(),m()}function p(A){h=t.getPointAt(A/e,h);let y=a.normals[A],S=a.binormals[A];for(let T=0;T<=i;T++){let E=T/i*Math.PI*2,v=Math.sin(E),w=-Math.cos(E);l.x=w*y.x+v*S.x,l.y=w*y.y+v*S.y,l.z=w*y.z+v*S.z,l.normalize(),u.push(l.x,l.y,l.z),o.x=h.x+n*l.x,o.y=h.y+n*l.y,o.z=h.z+n*l.z,d.push(o.x,o.y,o.z)}}function m(){for(let A=1;A<=e;A++)for(let y=1;y<=i;y++){let S=(i+1)*(A-1)+(y-1),T=(i+1)*A+(y-1),E=(i+1)*A+y,v=(i+1)*(A-1)+y;g.push(S,T,v),g.push(T,E,v)}}function M(){for(let A=0;A<=e;A++)for(let y=0;y<=i;y++)c.x=A/e,c.y=y/i,f.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new r(new h0[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};function fs(r){let t={};for(let e in r){t[e]={};for(let n in r[e]){let i=r[e][n];if(dp(i))i.isRenderTargetTexture?(Xt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone();else if(Array.isArray(i))if(dp(i[0])){let s=[];for(let a=0,o=i.length;a<o;a++)s[a]=i[a].clone();t[e][n]=s}else t[e][n]=i.slice();else t[e][n]=i}}return t}function Mn(r){let t={};for(let e=0;e<r.length;e++){let n=fs(r[e]);for(let i in n)t[i]=n[i]}return t}function dp(r){return r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)}function u0(r){let t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function sf(r){let t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:le.workingColorSpace}var rm={clone:fs,merge:Mn},f0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,d0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ii=class extends Ir{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=f0,this.fragmentShader=d0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=fs(t.uniforms),this.uniformsGroups=u0(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let i=t.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=e[i.value]||null;break;case"c":this.uniforms[n].value=new $t().setHex(i.value);break;case"v2":this.uniforms[n].value=new Lt().fromArray(i.value);break;case"v3":this.uniforms[n].value=new O().fromArray(i.value);break;case"v4":this.uniforms[n].value=new De().fromArray(i.value);break;case"m3":this.uniforms[n].value=new Jt().fromArray(i.value);break;case"m4":this.uniforms[n].value=new _e().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},jl=class extends ii{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},os=class extends Ir{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new $t(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new $t(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=eh,this.normalScale=new Lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new cr,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},ls=class extends os{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Lt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ee(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new $t(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new $t(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new $t(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(t){this._retroreflectivity>0!=t>0&&this.version++,this._retroreflectivity=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.retroreflectivity=t.retroreflectivity,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};var tc=class extends Ir{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Hp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},ec=class extends Ir{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Zs(r,t){return!r||r.constructor===t?r:typeof t.BYTES_PER_ELEMENT=="number"?new t(r):Array.prototype.slice.call(r)}function wu(r){return r!==void 0&&r.inTangents!==void 0&&r.outTangents!==void 0}var Dr=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],s=e[n-1];n:{t:{let a;e:{i:if(!(t<i)){for(let o=n+2;;){if(i===void 0){if(t<s)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=i,i=e[++n],t<i)break t}a=e.length;break e}if(!(t>=s)){let o=e[1];t<o&&(n=2,s=o);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=e[--n-1],t>=s)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(i=e[n],s=e[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=t*i;for(let a=0;a!==i;++a)e[a]=n[s+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},nc=class extends Dr{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Cu,endingEnd:Cu}}intervalChanged_(t,e,n){let i=this.parameterPositions,s=t-2,a=t+1,o=i[s],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case Ru:s=t,o=2*e-n;break;case Pu:s=i.length-2,o=e+i[s]-i[s+1];break;default:s=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Ru:a=t,l=2*n-e;break;case Pu:a=1,l=n+i[1]-i[0];break;default:a=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=s*h,this._offsetNext=a*h}interpolate_(t,e,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,g=(n-e)/(i-e),_=g*g,p=_*g,m=-u*p+2*u*_-u*g,M=(1+u)*p+(-1.5-2*u)*_+(-.5+u)*g+1,A=(-1-f)*p+(1.5+f)*_+.5*g,y=f*p-f*_;for(let S=0;S!==o;++S)s[S]=m*a[h+S]+M*a[c+S]+A*a[l+S]+y*a[d+S];return s}},ic=class extends Dr{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(n-e)/(i-e),d=1-h;for(let u=0;u!==o;++u)s[u]=a[c+u]*d+a[l+u]*h;return s}},rc=class extends Dr{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},sc=class extends Dr{interpolate_(t,e,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this.inTangents,d=this.outTangents;if(!h||!d){let g=(n-e)/(i-e),_=1-g;for(let p=0;p!==o;++p)s[p]=a[c+p]*_+a[l+p]*g;return s}let u=o*2,f=t-1;for(let g=0;g!==o;++g){let _=a[c+g],p=a[l+g],m=f*u+g*2,M=d[m],A=d[m+1],y=t*u+g*2,S=h[y],T=h[y+1],E=m0(n,e,M,S,i);s[g]=sm(E,_,A,T,p)}return s}};function sm(r,t,e,n,i){let s=1-r;return s*s*s*t+3*s*s*r*e+3*s*r*r*n+r*r*r*i}function p0(r,t,e,n,i){let s=1-r;return 3*s*s*(e-t)+6*s*r*(n-e)+3*r*r*(i-n)}function m0(r,t,e,n,i){let s=(r-t)/(i-t);for(let a=0;a<8;a++){let o=sm(s,t,e,n,i)-r;if(Math.abs(o)<1e-10)break;let l=p0(s,t,e,n,i);if(Math.abs(l)<1e-10)break;s=Math.max(0,Math.min(1,s-o/l))}return s}var ri=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Zs(e,this.TimeBufferType),this.values=Zs(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Zs(t.times,Array),values:Zs(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i),wu(t.settings)&&(n.settings={inTangents:Zs(t.settings.inTangents,Array),outTangents:Zs(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new rc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new ic(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new nc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new sc(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case qa:e=this.InterpolantFactoryMethodDiscrete;break;case kl:e=this.InterpolantFactoryMethodLinear;break;case Rl:e=this.InterpolantFactoryMethodSmooth;break;case Au:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Xt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return qa;case this.InterpolantFactoryMethodLinear:return kl;case this.InterpolantFactoryMethodSmooth:return Rl;case this.InterpolantFactoryMethodBezier:return Au}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t;wu(this.settings)&&(pp(this.settings.inTangents,t),pp(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,i=n.length,s=0,a=i-1;for(;s!==i&&n[s]<t;)++s;for(;a!==-1&&n[a]>e;)--a;if(++a,s!==0||a!==i){s>=a&&(a=Math.max(a,1),s=a-1);let o=this.getValueSize();this.times=n.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Yt("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,s=n.length;s===0&&(Yt("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==s;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){Yt("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){Yt("KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(i!==void 0&&F_(i))for(let o=0,l=i.length;o!==l;++o){let c=i[o];if(isNaN(c)){Yt("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Rl,s=t.length-1,a=1;for(let o=1;o<s;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(i)l=!0;else{let d=o*n,u=d-n,f=d+n;for(let g=0;g!==n;++g){let _=e[d+g];if(_!==e[u+g]||_!==e[f+g]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let d=o*n,u=a*n;for(let f=0;f!==n;++f)e[u+f]=e[d+f]}++a}}if(s>0){t[a]=t[s];for(let o=s*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,wu(this.settings)&&(i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),i}};function pp(r,t){for(let e=0,n=r.length;e!==n;e+=2)r[e]*=t}ri.prototype.ValueTypeName="";ri.prototype.TimeBufferType=Float32Array;ri.prototype.ValueBufferType=Float32Array;ri.prototype.DefaultInterpolation=kl;var Nr=class extends ri{constructor(t,e,n){super(t,e,n)}};Nr.prototype.ValueTypeName="bool";Nr.prototype.ValueBufferType=Array;Nr.prototype.DefaultInterpolation=qa;Nr.prototype.InterpolantFactoryMethodLinear=void 0;Nr.prototype.InterpolantFactoryMethodSmooth=void 0;var ac=class extends ri{constructor(t,e,n,i){super(t,e,n,i)}};ac.prototype.ValueTypeName="color";var oc=class extends ri{constructor(t,e,n,i){super(t,e,n,i)}};oc.prototype.ValueTypeName="number";var lc=class extends Dr{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(i-e),c=t*o;for(let h=c+o;c!==h;c+=4)Wi.slerpFlat(s,0,a,c-o,a,c,l);return s}},uo=class extends ri{constructor(t,e,n,i){super(t,e,n,i)}InterpolantFactoryMethodLinear(t){return new lc(this.times,this.values,this.getValueSize(),t)}};uo.prototype.ValueTypeName="quaternion";uo.prototype.InterpolantFactoryMethodSmooth=void 0;var Ur=class extends ri{constructor(t,e,n){super(t,e,n)}};Ur.prototype.ValueTypeName="string";Ur.prototype.ValueBufferType=Array;Ur.prototype.DefaultInterpolation=qa;Ur.prototype.InterpolantFactoryMethodLinear=void 0;Ur.prototype.InterpolantFactoryMethodSmooth=void 0;var cc=class extends ri{constructor(t,e,n,i){super(t,e,n,i)}};cc.prototype.ValueTypeName="vector";var hc=class{constructor(t,e,n){let i=this,s=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,s===!1&&i.onStart!==void 0&&i.onStart(h,a,o),s=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let f=c[d],g=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},am=new hc,uc=class{constructor(t){this.manager=t!==void 0?t:am,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,s){n.load(t,i,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};uc.DEFAULT_MATERIAL_NAME="__DEFAULT";var cs=class extends cn{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new $t(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},fo=class extends cs{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(cn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new $t(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},Eu=new _e,mp=new O,gp=new O,sa=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Lt(512,512),this.mapType=qn,this.map=null,this.mapPass=null,this.matrix=new _e,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ra,this._frameExtents=new Lt(1,1),this._viewportCount=1,this._viewports=[new De(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;mp.setFromMatrixPosition(t.matrixWorld),e.position.copy(mp),gp.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(gp),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,i){Eu.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(Eu,t.coordinateSystem,t.reversedDepth);let s=this._frameExtents,a=i?i.z/s.x:1,o=i?i.w/s.y:1,l=i?i.x/s.x:0,c=i?i.y/s.y:0;t.coordinateSystem===js||t.reversedDepth?e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),e.multiply(Eu)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Al=new O,Cl=new Wi,ki=new O,po=class extends cn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new _e,this.projectionMatrix=new _e,this.projectionMatrixInverse=new _e,this.coordinateSystem=Ii,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Al,Cl,ki),ki.x===1&&ki.y===1&&ki.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Al,Cl,ki.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Al,Cl,ki),ki.x===1&&ki.y===1&&ki.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Al,Cl,ki.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Cr=new O,_p=new Lt,xp=new Lt,an=class extends po{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=$a*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(eu*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return $a*2*Math.atan(Math.tan(eu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Cr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Cr.x,Cr.y).multiplyScalar(-t/Cr.z),Cr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Cr.x,Cr.y).multiplyScalar(-t/Cr.z)}getViewSize(t,e){return this.getViewBounds(t,_p,xp),e.subVectors(xp,_p)}setViewOffset(t,e,n,i,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(eu*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*i/l,e-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Iu=class extends sa{constructor(){super(new an(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){let e=this.camera,n=$a*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,s=t.distance||e.far;(n!==e.fov||i!==e.aspect||s!==e.far)&&(e.fov=n,e.aspect=i,e.far=s,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this.aspect=t.aspect,this}toJSON(){let t=super.toJSON();return t.focus=this.focus,t.aspect=this.aspect,t}},mo=class extends cs{constructor(t,e,n=0,i=Math.PI/3,s=0,a=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(cn.DEFAULT_UP),this.updateMatrix(),this.target=new cn,this.distance=n,this.angle=i,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new Iu}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.map=t.map,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.angle=this.angle,e.object.decay=this.decay,e.object.penumbra=this.penumbra,e.object.target=this.target.uuid,this.map&&this.map.isTexture&&(e.object.map=this.map.toJSON(t).uuid),e.object.shadow=this.shadow.toJSON(),e}},Lu=class extends sa{constructor(){super(new an(90,1,.5,500)),this.isPointLightShadow=!0}},go=class extends cs{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Lu}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},aa=class extends po{constructor(t=-1,e=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,s=n-t,a=n+t,o=i+e,l=i-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Du=class extends sa{constructor(){super(new aa(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},oa=class extends cs{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(cn.DEFAULT_UP),this.updateMatrix(),this.target=new cn,this.shadow=new Du}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var Js=-90,$s=1,fc=class extends cn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new an(Js,$s,t,e);i.layers=this.layers,this.add(i);let s=new an(Js,$s,t,e);s.layers=this.layers,this.add(s);let a=new an(Js,$s,t,e);a.layers=this.layers,this.add(a);let o=new an(Js,$s,t,e);o.layers=this.layers,this.add(o);let l=new an(Js,$s,t,e);l.layers=this.layers,this.add(l);let c=new an(Js,$s,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,s,a,o,l]=e;for(let c of e)this.remove(c);if(t===Ii)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===js)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[s,a,o,l,c,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let p=!1;t.isWebGLRenderer===!0?p=t.state.buffers.depth.getReversed():p=t.reversedDepthBuffer,t.setRenderTarget(n,0,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,s),t.setRenderTarget(n,1,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(d,u,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},dc=class extends an{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var af="\\[\\]\\.:\\/",g0=new RegExp("["+af+"]","g"),of="[^"+af+"]",_0="[^"+af.replace("\\.","")+"]",x0=/((?:WC+[\/:])*)/.source.replace("WC",of),v0=/(WCOD+)?/.source.replace("WCOD",_0),y0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",of),S0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",of),M0=new RegExp("^"+x0+v0+y0+S0+"$"),b0=["material","materials","bones","map"],Nu=class{constructor(t,e,n){let i=n||Le.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Le=class r{constructor(t,e,n){this.path=e,this.parsedPath=n||r.parseTrackName(e),this.node=r.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new r.Composite(t,e,n):new r(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(g0,"")}static parseTrackName(t){let e=M0.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let s=n.nodeName.substring(i+1);b0.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(s){for(let a=0;a<s.length;a++){let o=s[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,s=e.propertyIndex;if(t||(t=r.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Xt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){Yt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Yt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Yt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Yt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Yt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Yt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){Yt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[i];if(a===void 0){let c=e.nodeName;Yt("PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){Yt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Yt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Le.Composite=Nu;Le.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Le.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Le.prototype.GetterByBindingType=[Le.prototype._getValue_direct,Le.prototype._getValue_array,Le.prototype._getValue_arrayElement,Le.prototype._getValue_toArray];Le.prototype.SetterByBindingTypeAndVersioning=[[Le.prototype._setValue_direct,Le.prototype._setValue_direct_setNeedsUpdate,Le.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Le.prototype._setValue_array,Le.prototype._setValue_array_setNeedsUpdate,Le.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Le.prototype._setValue_arrayElement,Le.prototype._setValue_arrayElement_setNeedsUpdate,Le.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Le.prototype._setValue_fromArray,Le.prototype._setValue_fromArray_setNeedsUpdate,Le.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var M1=new Float32Array(1);var df=class df{constructor(t,e,n,i){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,i){let s=this.elements;return s[0]=t,s[2]=e,s[1]=n,s[3]=i,this}};df.prototype.isMatrix2=!0;var Uu=df;function lf(r,t,e,n){let i=T0(n);switch(e){case ju:return r*t;case Sc:return r*t/i.components*i.byteLength;case Mc:return r*t/i.components*i.byteLength;case kr:return r*t*2/i.components*i.byteLength;case bc:return r*t*2/i.components*i.byteLength;case tf:return r*t*3/i.components*i.byteLength;case yi:return r*t*4/i.components*i.byteLength;case Tc:return r*t*4/i.components*i.byteLength;case So:case Mo:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case bo:case To:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Ec:case Cc:return Math.max(r,16)*Math.max(t,8)/4;case wc:case Ac:return Math.max(r,8)*Math.max(t,8)/2;case Rc:case Pc:case Lc:case Dc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Ic:case wo:case Nc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Uc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Fc:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case Oc:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case Bc:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case zc:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case kc:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case Vc:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case Gc:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case Hc:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case Wc:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case Xc:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case qc:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case Yc:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case Zc:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case Jc:case $c:case Kc:return Math.ceil(r/4)*Math.ceil(t/4)*16;case Qc:case jc:return Math.ceil(r/4)*Math.ceil(t/4)*8;case Eo:case th:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function T0(r){switch(r){case qn:case Ju:return{byteLength:1,components:1};case ha:case $u:case Ui:return{byteLength:2,components:1};case vc:case yc:return{byteLength:2,components:4};case Ni:case xc:case vi:return{byteLength:4,components:1};case Ku:case Qu:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Xt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Cm(){let r=null,t=!1,e=null,n=null;function i(s,a){n=r.requestAnimationFrame(i),e(s,a)}return{start:function(){t!==!0&&e!==null&&r!==null&&(n=r.requestAnimationFrame(i),t=!0)},stop:function(){r!==null&&r.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function E0(r){let t=new WeakMap;function e(o,l){let c=o.array,h=o.usage,d=c.byteLength,u=r.createBuffer();r.bindBuffer(l,u),r.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=r.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=r.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=r.HALF_FLOAT:f=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=r.SHORT;else if(c instanceof Uint32Array)f=r.UNSIGNED_INT;else if(c instanceof Int32Array)f=r.INT;else if(c instanceof Int8Array)f=r.BYTE;else if(c instanceof Uint8Array)f=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){let h=l.array,d=l.updateRanges;if(r.bindBuffer(c,o),d.length===0)r.bufferSubData(c,0,h);else{d.sort((f,g)=>f.start-g.start);let u=0;for(let f=1;f<d.length;f++){let g=d[u],_=d[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++u,d[u]=_)}d.length=u+1;for(let f=0,g=d.length;f<g;f++){let _=d[f];r.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(r.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:s,update:a}}var A0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,C0=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,R0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,P0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,I0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,L0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,D0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,N0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,U0=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,F0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,O0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,B0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,z0=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,k0=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,V0=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,G0=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,H0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,W0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,X0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,q0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Y0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Z0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,J0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,$0=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,K0=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Q0=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,j0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,tx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ex=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,nx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ix="gl_FragColor = linearToOutputTexel( gl_FragColor );",rx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,sx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,ax=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,ox=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,lx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,cx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,hx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ux=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,dx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,px=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,mx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,gx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,_x=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,xx=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,vx=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,yx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Sx=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Mx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,bx=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Tx=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,wx=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Ex=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Ax=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Cx=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Rx=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Px=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ix=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Lx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Dx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Nx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ux=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Fx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Ox=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Bx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,zx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,kx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Vx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Gx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Hx=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Wx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Xx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,qx=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Yx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Zx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Jx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,$x=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Kx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Qx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,jx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,tv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ev=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,nv=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,iv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,rv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,sv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,av=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ov=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,lv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,cv=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,hv=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,uv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,fv=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,dv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,pv=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,mv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,gv=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,_v=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,xv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,vv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,yv=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Sv=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Mv=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,bv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Tv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,wv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Ev=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Av=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Cv=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Rv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Pv=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Iv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Lv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Dv=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Nv=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Uv=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Fv=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Ov=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Bv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zv=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,kv=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Vv=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Gv=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hv=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Wv=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xv=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,qv=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Yv=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Zv=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Jv=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$v=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Kv=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Qv=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jv=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ty=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ey=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,ny=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,iy=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ry=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sy=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ay=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,te={alphahash_fragment:A0,alphahash_pars_fragment:C0,alphamap_fragment:R0,alphamap_pars_fragment:P0,alphatest_fragment:I0,alphatest_pars_fragment:L0,aomap_fragment:D0,aomap_pars_fragment:N0,batching_pars_vertex:U0,batching_vertex:F0,begin_vertex:O0,beginnormal_vertex:B0,bsdfs:z0,iridescence_fragment:k0,bumpmap_pars_fragment:V0,clipping_planes_fragment:G0,clipping_planes_pars_fragment:H0,clipping_planes_pars_vertex:W0,clipping_planes_vertex:X0,color_fragment:q0,color_pars_fragment:Y0,color_pars_vertex:Z0,color_vertex:J0,common:$0,cube_uv_reflection_fragment:K0,defaultnormal_vertex:Q0,displacementmap_pars_vertex:j0,displacementmap_vertex:tx,emissivemap_fragment:ex,emissivemap_pars_fragment:nx,colorspace_fragment:ix,colorspace_pars_fragment:rx,envmap_fragment:sx,envmap_common_pars_fragment:ax,envmap_pars_fragment:ox,envmap_pars_vertex:lx,envmap_physical_pars_fragment:vx,envmap_vertex:cx,fog_vertex:hx,fog_pars_vertex:ux,fog_fragment:fx,fog_pars_fragment:dx,gradientmap_pars_fragment:px,lightmap_pars_fragment:mx,lights_lambert_fragment:gx,lights_lambert_pars_fragment:_x,lights_pars_begin:xx,lights_toon_fragment:yx,lights_toon_pars_fragment:Sx,lights_phong_fragment:Mx,lights_phong_pars_fragment:bx,lights_physical_fragment:Tx,lights_physical_pars_fragment:wx,lights_fragment_begin:Ex,lights_fragment_maps:Ax,lights_fragment_end:Cx,lightprobes_pars_fragment:Rx,logdepthbuf_fragment:Px,logdepthbuf_pars_fragment:Ix,logdepthbuf_pars_vertex:Lx,logdepthbuf_vertex:Dx,map_fragment:Nx,map_pars_fragment:Ux,map_particle_fragment:Fx,map_particle_pars_fragment:Ox,metalnessmap_fragment:Bx,metalnessmap_pars_fragment:zx,morphinstance_vertex:kx,morphcolor_vertex:Vx,morphnormal_vertex:Gx,morphtarget_pars_vertex:Hx,morphtarget_vertex:Wx,normal_fragment_begin:Xx,normal_fragment_maps:qx,normal_pars_fragment:Yx,normal_pars_vertex:Zx,normal_vertex:Jx,normalmap_pars_fragment:$x,clearcoat_normal_fragment_begin:Kx,clearcoat_normal_fragment_maps:Qx,clearcoat_pars_fragment:jx,iridescence_pars_fragment:tv,opaque_fragment:ev,packing:nv,premultiplied_alpha_fragment:iv,project_vertex:rv,dithering_fragment:sv,dithering_pars_fragment:av,roughnessmap_fragment:ov,roughnessmap_pars_fragment:lv,shadowmap_pars_fragment:cv,shadowmap_pars_vertex:hv,shadowmap_vertex:uv,shadowmask_pars_fragment:fv,skinbase_vertex:dv,skinning_pars_vertex:pv,skinning_vertex:mv,skinnormal_vertex:gv,specularmap_fragment:_v,specularmap_pars_fragment:xv,tonemapping_fragment:vv,tonemapping_pars_fragment:yv,transmission_fragment:Sv,transmission_pars_fragment:Mv,uv_pars_fragment:bv,uv_pars_vertex:Tv,uv_vertex:wv,worldpos_vertex:Ev,background_vert:Av,background_frag:Cv,backgroundCube_vert:Rv,backgroundCube_frag:Pv,cube_vert:Iv,cube_frag:Lv,depth_vert:Dv,depth_frag:Nv,distance_vert:Uv,distance_frag:Fv,equirect_vert:Ov,equirect_frag:Bv,linedashed_vert:zv,linedashed_frag:kv,meshbasic_vert:Vv,meshbasic_frag:Gv,meshlambert_vert:Hv,meshlambert_frag:Wv,meshmatcap_vert:Xv,meshmatcap_frag:qv,meshnormal_vert:Yv,meshnormal_frag:Zv,meshphong_vert:Jv,meshphong_frag:$v,meshphysical_vert:Kv,meshphysical_frag:Qv,meshtoon_vert:jv,meshtoon_frag:ty,points_vert:ey,points_frag:ny,shadow_vert:iy,shadow_frag:ry,sprite_vert:sy,sprite_frag:ay},yt={common:{diffuse:{value:new $t(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Jt},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Jt}},envmap:{envMap:{value:null},envMapRotation:{value:new Jt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Jt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Jt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Jt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Jt},normalScale:{value:new Lt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Jt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Jt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Jt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Jt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new $t(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new O},probesMax:{value:new O},probesResolution:{value:new O}},points:{diffuse:{value:new $t(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0},uvTransform:{value:new Jt}},sprite:{diffuse:{value:new $t(16777215)},opacity:{value:1},center:{value:new Lt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Jt},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0}}},$i={basic:{uniforms:Mn([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.fog]),vertexShader:te.meshbasic_vert,fragmentShader:te.meshbasic_frag},lambert:{uniforms:Mn([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,yt.lights,{emissive:{value:new $t(0)},envMapIntensity:{value:1}}]),vertexShader:te.meshlambert_vert,fragmentShader:te.meshlambert_frag},phong:{uniforms:Mn([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,yt.lights,{emissive:{value:new $t(0)},specular:{value:new $t(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:te.meshphong_vert,fragmentShader:te.meshphong_frag},standard:{uniforms:Mn([yt.common,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.roughnessmap,yt.metalnessmap,yt.fog,yt.lights,{emissive:{value:new $t(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:te.meshphysical_vert,fragmentShader:te.meshphysical_frag},toon:{uniforms:Mn([yt.common,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.gradientmap,yt.fog,yt.lights,{emissive:{value:new $t(0)}}]),vertexShader:te.meshtoon_vert,fragmentShader:te.meshtoon_frag},matcap:{uniforms:Mn([yt.common,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,{matcap:{value:null}}]),vertexShader:te.meshmatcap_vert,fragmentShader:te.meshmatcap_frag},points:{uniforms:Mn([yt.points,yt.fog]),vertexShader:te.points_vert,fragmentShader:te.points_frag},dashed:{uniforms:Mn([yt.common,yt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:te.linedashed_vert,fragmentShader:te.linedashed_frag},depth:{uniforms:Mn([yt.common,yt.displacementmap]),vertexShader:te.depth_vert,fragmentShader:te.depth_frag},normal:{uniforms:Mn([yt.common,yt.bumpmap,yt.normalmap,yt.displacementmap,{opacity:{value:1}}]),vertexShader:te.meshnormal_vert,fragmentShader:te.meshnormal_frag},sprite:{uniforms:Mn([yt.sprite,yt.fog]),vertexShader:te.sprite_vert,fragmentShader:te.sprite_frag},background:{uniforms:{uvTransform:{value:new Jt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:te.background_vert,fragmentShader:te.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Jt}},vertexShader:te.backgroundCube_vert,fragmentShader:te.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:te.cube_vert,fragmentShader:te.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:te.equirect_vert,fragmentShader:te.equirect_frag},distance:{uniforms:Mn([yt.common,yt.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:te.distance_vert,fragmentShader:te.distance_frag},shadow:{uniforms:Mn([yt.lights,yt.fog,{color:{value:new $t(0)},opacity:{value:1}}]),vertexShader:te.shadow_vert,fragmentShader:te.shadow_frag}};$i.physical={uniforms:Mn([$i.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Jt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Jt},clearcoatNormalScale:{value:new Lt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Jt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Jt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Jt},sheen:{value:0},sheenColor:{value:new $t(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Jt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Jt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Jt},transmissionSamplerSize:{value:new Lt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Jt},attenuationDistance:{value:0},attenuationColor:{value:new $t(0)},specularColor:{value:new $t(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Jt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Jt},anisotropyVector:{value:new Lt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Jt}}]),vertexShader:te.meshphysical_vert,fragmentShader:te.meshphysical_frag};var rh={r:0,b:0,g:0},oy=new _e,Rm=new Jt;Rm.set(-1,0,0,0,1,0,0,0,1);function ly(r,t,e,n,i,s){let a=new $t(0),o=i===!0?0:1,l,c,h=null,d=0,u=null;function f(M){let A=M.isScene===!0?M.background:null;if(A&&A.isTexture){let y=M.backgroundBlurriness>0;A=t.get(A,y)}return A}function g(M){let A=!1,y=f(M);y===null?p(a,o):y&&y.isColor&&(p(y,1),A=!0);let S=r.xr.getEnvironmentBlendMode();S==="additive"?e.buffers.color.setClear(0,0,0,1,s):S==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,s),(r.autoClear||A)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function _(M,A){let y=f(A);y&&(y.isCubeTexture||y.mapping===vo)?(c===void 0&&(c=new Te(new _i(1,1,1),new ii({name:"BackgroundCubeMaterial",uniforms:fs($i.backgroundCube.uniforms),vertexShader:$i.backgroundCube.vertexShader,fragmentShader:$i.backgroundCube.fragmentShader,side:Un,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(S,T,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(oy.makeRotationFromEuler(A.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Rm),c.material.toneMapped=le.getTransfer(y.colorSpace)!==me,(h!==y||d!==y.version||u!==r.toneMapping)&&(c.material.needsUpdate=!0,h=y,d=y.version,u=r.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new Te(new ni(2,2),new ii({name:"BackgroundMaterial",uniforms:fs($i.background.uniforms),vertexShader:$i.background.vertexShader,fragmentShader:$i.background.fragmentShader,side:Fr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,l.material.toneMapped=le.getTransfer(y.colorSpace)!==me,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||d!==y.version||u!==r.toneMapping)&&(l.material.needsUpdate=!0,h=y,d=y.version,u=r.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function p(M,A){M.getRGB(rh,sf(r)),e.buffers.color.setClear(rh.r,rh.g,rh.b,A,s)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(M,A=1){a.set(M),o=A,p(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(M){o=M,p(a,o)},render:g,addToRenderList:_,dispose:m}}function cy(r,t){let e=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=u(null),s=i,a=!1;function o(N,L,V,I,z){let q=!1,k=d(N,I,V,L);s!==k&&(s=k,c(s.object)),q=f(N,I,V,z),q&&g(N,I,V,z),z!==null&&t.update(z,r.ELEMENT_ARRAY_BUFFER),(q||a)&&(a=!1,y(N,L,V,I),z!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(z).buffer))}function l(){return r.createVertexArray()}function c(N){return r.bindVertexArray(N)}function h(N){return r.deleteVertexArray(N)}function d(N,L,V,I){let z=I.wireframe===!0,q=n[L.id];q===void 0&&(q={},n[L.id]=q);let k=N.isInstancedMesh===!0?N.id:0,et=q[k];et===void 0&&(et={},q[k]=et);let Z=et[V.id];Z===void 0&&(Z={},et[V.id]=Z);let C=Z[z];return C===void 0&&(C=u(l()),Z[z]=C),C}function u(N){let L=[],V=[],I=[];for(let z=0;z<e;z++)L[z]=0,V[z]=0,I[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:V,attributeDivisors:I,object:N,attributes:{},index:null}}function f(N,L,V,I){let z=s.attributes,q=L.attributes,k=0,et=V.getAttributes();for(let Z in et)if(et[Z].location>=0){let nt=z[Z],Mt=q[Z];if(Mt===void 0&&(Z==="instanceMatrix"&&N.instanceMatrix&&(Mt=N.instanceMatrix),Z==="instanceColor"&&N.instanceColor&&(Mt=N.instanceColor)),nt===void 0||nt.attribute!==Mt||Mt&&nt.data!==Mt.data)return!0;k++}return s.attributesNum!==k||s.index!==I}function g(N,L,V,I){let z={},q=L.attributes,k=0,et=V.getAttributes();for(let Z in et)if(et[Z].location>=0){let nt=q[Z];nt===void 0&&(Z==="instanceMatrix"&&N.instanceMatrix&&(nt=N.instanceMatrix),Z==="instanceColor"&&N.instanceColor&&(nt=N.instanceColor));let Mt={};Mt.attribute=nt,nt&&nt.data&&(Mt.data=nt.data),z[Z]=Mt,k++}s.attributes=z,s.attributesNum=k,s.index=I}function _(){let N=s.newAttributes;for(let L=0,V=N.length;L<V;L++)N[L]=0}function p(N){m(N,0)}function m(N,L){let V=s.newAttributes,I=s.enabledAttributes,z=s.attributeDivisors;V[N]=1,I[N]===0&&(r.enableVertexAttribArray(N),I[N]=1),z[N]!==L&&(r.vertexAttribDivisor(N,L),z[N]=L)}function M(){let N=s.newAttributes,L=s.enabledAttributes;for(let V=0,I=L.length;V<I;V++)L[V]!==N[V]&&(r.disableVertexAttribArray(V),L[V]=0)}function A(N,L,V,I,z,q,k){k===!0?r.vertexAttribIPointer(N,L,V,z,q):r.vertexAttribPointer(N,L,V,I,z,q)}function y(N,L,V,I){_();let z=I.attributes,q=V.getAttributes(),k=L.defaultAttributeValues;for(let et in q){let Z=q[et];if(Z.location>=0){let C=z[et];if(C===void 0&&(et==="instanceMatrix"&&N.instanceMatrix&&(C=N.instanceMatrix),et==="instanceColor"&&N.instanceColor&&(C=N.instanceColor)),C!==void 0){let nt=C.normalized,Mt=C.itemSize,bt=t.get(C);if(bt===void 0)continue;let Bt=bt.buffer,Ut=bt.type,Ht=bt.bytesPerElement,j=Ut===r.INT||Ut===r.UNSIGNED_INT||C.gpuType===xc;if(C.isInterleavedBufferAttribute){let it=C.data,mt=it.stride,zt=C.offset;if(it.isInstancedInterleavedBuffer){for(let gt=0;gt<Z.locationSize;gt++)m(Z.location+gt,it.meshPerAttribute);N.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=it.meshPerAttribute*it.count)}else for(let gt=0;gt<Z.locationSize;gt++)p(Z.location+gt);r.bindBuffer(r.ARRAY_BUFFER,Bt);for(let gt=0;gt<Z.locationSize;gt++)A(Z.location+gt,Mt/Z.locationSize,Ut,nt,mt*Ht,(zt+Mt/Z.locationSize*gt)*Ht,j)}else{if(C.isInstancedBufferAttribute){for(let it=0;it<Z.locationSize;it++)m(Z.location+it,C.meshPerAttribute);N.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=C.meshPerAttribute*C.count)}else for(let it=0;it<Z.locationSize;it++)p(Z.location+it);r.bindBuffer(r.ARRAY_BUFFER,Bt);for(let it=0;it<Z.locationSize;it++)A(Z.location+it,Mt/Z.locationSize,Ut,nt,Mt*Ht,Mt/Z.locationSize*it*Ht,j)}}else if(k!==void 0){let nt=k[et];if(nt!==void 0)switch(nt.length){case 2:r.vertexAttrib2fv(Z.location,nt);break;case 3:r.vertexAttrib3fv(Z.location,nt);break;case 4:r.vertexAttrib4fv(Z.location,nt);break;default:r.vertexAttrib1fv(Z.location,nt)}}}}M()}function S(){w();for(let N in n){let L=n[N];for(let V in L){let I=L[V];for(let z in I){let q=I[z];for(let k in q)h(q[k].object),delete q[k];delete I[z]}}delete n[N]}}function T(N){if(n[N.id]===void 0)return;let L=n[N.id];for(let V in L){let I=L[V];for(let z in I){let q=I[z];for(let k in q)h(q[k].object),delete q[k];delete I[z]}}delete n[N.id]}function E(N){for(let L in n){let V=n[L];for(let I in V){let z=V[I];if(z[N.id]===void 0)continue;let q=z[N.id];for(let k in q)h(q[k].object),delete q[k];delete z[N.id]}}}function v(N){for(let L in n){let V=n[L],I=N.isInstancedMesh===!0?N.id:0,z=V[I];if(z!==void 0){for(let q in z){let k=z[q];for(let et in k)h(k[et].object),delete k[et];delete z[q]}delete V[I],Object.keys(V).length===0&&delete n[L]}}}function w(){R(),a=!0,s!==i&&(s=i,c(s.object))}function R(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:w,resetDefaultState:R,dispose:S,releaseStatesOfGeometry:T,releaseStatesOfObject:v,releaseStatesOfProgram:E,initAttributes:_,enableAttribute:p,disableUnusedAttributes:M}}function hy(r,t,e){let n;function i(l){n=l}function s(l,c){r.drawArrays(n,l,c),e.update(c,n,1)}function a(l,c,h){h!==0&&(r.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function o(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let f=0;f<h;f++)u+=c[f];e.update(u,n,1)}this.setMode=i,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function uy(r,t,e,n){let i;function s(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let E=t.get("EXT_texture_filter_anisotropic");i=r.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(E){return!(E!==yi&&n.convert(E)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(E){let v=E===Ui&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(E!==qn&&E!==vi&&!v&&n.convert(E)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE))}function l(E){if(E==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(Xt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=e.logarithmicDepthBuffer===!0,u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&u===!1&&Xt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_TEXTURE_SIZE),p=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),m=r.getParameter(r.MAX_VERTEX_ATTRIBS),M=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),A=r.getParameter(r.MAX_VARYING_VECTORS),y=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),S=r.getParameter(r.MAX_SAMPLES),T=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:M,maxVaryings:A,maxFragmentUniforms:y,maxSamples:S,samples:T}}function fy(r){let t=this,e=null,n=0,i=!1,s=!1,a=new Pi,o=new Jt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||n!==0||i;return i=u,n=d.length,f},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,f){let g=d.clippingPlanes,_=d.clipIntersection,p=d.clipShadows,m=r.get(d);if(!i||g===null||g.length===0||s&&!p)s?h(null):c();else{let M=s?0:n,A=M*4,y=m.clippingState||null;l.value=y,y=h(g,u,A,f);for(let S=0;S!==A;++S)y[S]=e[S];m.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,f,g){let _=d!==null?d.length:0,p=null;if(_!==0){if(p=l.value,g!==!0||p===null){let m=f+_*4,M=u.matrixWorldInverse;o.getNormalMatrix(M),(p===null||p.length<m)&&(p=new Float32Array(m));for(let A=0,y=f;A!==_;++A,y+=4)a.copy(d[A]).applyMatrix4(M,o),a.normal.toArray(p,y),p[y+3]=a.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,p}}var da=4,dy=6,py=20,my=256,Co=new aa,om=new $t,pf=null,mf=0,gf=0,_f=!1,gy=new O,ds=new O,ah=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,i=100,s={}){let{size:a=256,position:o=gy}=s;pf=this._renderer.getRenderTarget(),mf=this._renderer.getActiveCubeFace(),gf=this._renderer.getActiveMipmapLevel(),_f=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,i,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=hm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=cm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(pf,mf,gf),this._renderer.xr.enabled=_f,t.scissorTest=!1,fa(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Or||t.mapping===us?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),pf=this._renderer.getRenderTarget(),mf=this._renderer.getActiveCubeFace(),gf=this._renderer.getActiveMipmapLevel(),_f=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:dn,minFilter:dn,generateMipmaps:!1,type:Ui,format:yi,colorSpace:Ya,depthBuffer:!1},i=lm(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=lm(t,e,n);let{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=_y(s)),this._blurMaterial=vy(s,t,e),this._ggxMaterial=xy(s,t,e)}return i}_compileMaterial(t){let e=new Te(new gi,t);this._renderer.compile(e,Co)}_sceneToCubeUV(t,e,n,i,s){let l=new an(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,f=d.toneMapping;d.getClearColor(om),d.toneMapping=Di,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(i),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Te(new _i,new ei({name:"PMREM.Background",side:Un,depthWrite:!1,depthTest:!1})));let _=this._backgroundBox,p=_.material,m=!1,M=t.background;M?M.isColor&&(p.color.copy(M),t.background=null,m=!0):(p.color.copy(om),m=!0);for(let A=0;A<6;A++){let y=A%3;y===0?(l.up.set(0,c[A],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+h[A],s.y,s.z)):y===1?(l.up.set(0,0,c[A]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+h[A],s.z)):(l.up.set(0,c[A],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+h[A]));let S=this._cubeSize;fa(i,y*S,A>2?S:0,S,S),d.setRenderTarget(i),m&&d.render(_,l),d.render(t,l)}d.toneMapping=f,d.autoClear=u,t.background=M}_textureToCubeUV(t,e){let n=this._renderer,i=t.mapping===Or||t.mapping===us;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=hm()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=cm());let s=i?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;let o=s.uniforms;o.envMap.value=t;let l=this._cubeSize;fa(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,Co)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let i=this._lodMeshes.length;for(let s=1;s<i;s++)this._applyGGXFilter(t,s-1,s);e.autoClear=n}_applyGGXFilter(t,e,n){let i=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let l=a.uniforms,c=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),d=Math.sqrt(c*c-h*h),u=c*1.25,f=d*u,{_lodMax:g}=this,_=this._sizeLods[n],p=3*_*(n>g-da?n-g+da:0),m=4*(this._cubeSize-_);l.envMap.value=t.texture,l.roughness.value=f,l.mipInt.value=g-e,fa(s,p,m,3*_,2*_),i.setRenderTarget(s),i.render(o,Co),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=g-n,fa(t,p,m,3*_,2*_),i.setRenderTarget(t),i.render(o,Co)}_blur(t,e,n,i){let s=this._pingPongRenderTarget,a=Math.min(i,Math.PI)/Math.SQRT2;this._blurPass(t,s,e,n,a),this._blurPass(s,t,n,n,a)}_blurPass(t,e,n,i,s){let a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[i];l.material=o;let c=o.uniforms;c.envMap.value=t.texture,c.sigma.value=s,c.mipInt.value=this._lodMax-n;let h=this._sizeLods[i],d=3*h*(i>this._lodMax-da?i-this._lodMax+da:0),u=4*(this._cubeSize-h);fa(e,d,u,3*h,2*h),a.setRenderTarget(e),a.render(l,Co)}};function _y(r){let t=[],e=[],n=r,i=r-da+1+dy;for(let s=0;s<i;s++){let a=Math.pow(2,n);t.push(a);let o=1/(a-2),l=-o,c=1+o,h=[l,l,c,l,c,c,l,l,c,c,l,c],d=6,u=6,f=3,g=new Float32Array(f*u*d),_=new Float32Array(f*u*d);for(let m=0;m<d;m++){let M=m%3*2/3-1,A=m>2?0:-1,y=[M,A,0,M+2/3,A,0,M+2/3,A+1,0,M,A,0,M+2/3,A+1,0,M,A+1,0];g.set(y,f*u*m);for(let S=0;S<u;S++){let T=h[S*2]*2-1,E=h[S*2+1]*2-1;m===0?ds.set(1,E,T):m===1?ds.set(-T,1,-E):m===2?ds.set(-T,E,1):m===3?ds.set(-1,E,-T):m===4?ds.set(-T,-1,E):ds.set(T,E,-1),ds.toArray(_,(m*u+S)*f)}}let p=new gi;p.setAttribute("position",new ti(g,f)),p.setAttribute("outputDirection",new ti(_,f)),e.push(new Te(p,null)),n>da&&n--}return{lodMeshes:e,sizeLods:t}}function lm(r,t,e){let n=new Xn(r,t,e);return n.texture.mapping=vo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function fa(r,t,e,n,i){r.viewport.set(t,e,n,i),r.scissor.set(t,e,n,i)}function xy(r,t,e){return new ii({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:my,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ch(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Yi,depthTest:!1,depthWrite:!1})}function vy(r,t,e){return new ii({name:"SphericalGaussianBlur",defines:{SAMPLES:py,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:ch(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:Yi,depthTest:!1,depthWrite:!1})}function cm(){return new ii({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ch(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Yi,depthTest:!1,depthWrite:!1})}function hm(){return new ii({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ch(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Yi,depthTest:!1,depthWrite:!1})}function ch(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var oh=class extends Xn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new so(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new _i(5,5,5),s=new ii({name:"CubemapFromEquirect",uniforms:fs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Un,blending:Yi});s.uniforms.tEquirect.value=e;let a=new Te(i,s),o=e.minFilter;return e.minFilter===Br&&(e.minFilter=dn),new fc(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){let s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(s)}};function yy(r){let t=new WeakMap,e=new WeakMap,n=null;function i(u,f=!1){return u==null?null:f?a(u):s(u)}function s(u){if(u&&u.isTexture){let f=u.mapping;if(f===mc||f===gc)if(t.has(u)){let g=t.get(u).texture;return o(g,u.mapping)}else{let g=u.image;if(g&&g.height>0){let _=new oh(g.height);return _.fromEquirectangularTexture(r,u),t.set(u,_),u.addEventListener("dispose",c),o(_.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){let f=u.mapping,g=f===mc||f===gc,_=f===Or||f===us;if(g||_){let p=e.get(u),m=p!==void 0?p.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==m)return n===null&&(n=new ah(r)),p=g?n.fromEquirectangular(u,p):n.fromCubemap(u,p),p.texture.pmremVersion=u.pmremVersion,e.set(u,p),p.texture;if(p!==void 0)return p.texture;{let M=u.image;return g&&M&&M.height>0||_&&M&&l(M)?(n===null&&(n=new ah(r)),p=g?n.fromEquirectangular(u):n.fromCubemap(u),p.texture.pmremVersion=u.pmremVersion,e.set(u,p),u.addEventListener("dispose",h),p.texture):null}}}return u}function o(u,f){return f===mc?u.mapping=Or:f===gc&&(u.mapping=us),u}function l(u){let f=0,g=6;for(let _=0;_<g;_++)u[_]!==void 0&&f++;return f===g}function c(u){let f=u.target;f.removeEventListener("dispose",c);let g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function h(u){let f=u.target;f.removeEventListener("dispose",h);let g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function d(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:d}}function Sy(r){let t={};function e(n){if(t[n]!==void 0)return t[n];let i=r.getExtension(n);return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let i=e(n);return i===null&&rs("WebGLRenderer: "+n+" extension not supported."),i}}}function My(r,t,e,n){let i={},s=new WeakMap;function a(d){let u=d.target;u.index!==null&&t.remove(u.index);for(let g in u.attributes)t.remove(u.attributes[g]);u.removeEventListener("dispose",a),delete i[u.id];let f=s.get(u);f&&(t.remove(f),s.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function o(d,u){return i[u.id]===!0||(u.addEventListener("dispose",a),i[u.id]=!0,e.memory.geometries++),u}function l(d){let u=d.attributes;for(let f in u)t.update(u[f],r.ARRAY_BUFFER)}function c(d){let u=[],f=d.index,g=d.attributes.position,_=0;if(g===void 0)return;if(f!==null){let M=f.array;_=f.version;for(let A=0,y=M.length;A<y;A+=3){let S=M[A+0],T=M[A+1],E=M[A+2];u.push(S,T,T,E,E,S)}}else{let M=g.array;_=g.version;for(let A=0,y=M.length/3-1;A<y;A+=3){let S=A+0,T=A+1,E=A+2;u.push(S,T,T,E,E,S)}}let p=new(g.count>=65535?no:eo)(u,1);p.version=_;let m=s.get(d);m&&t.remove(m),s.set(d,p)}function h(d){let u=s.get(d);if(u){let f=d.index;f!==null&&u.version<f.version&&c(d)}else c(d);return s.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function by(r,t,e){let n;function i(d){n=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function l(d,u){r.drawElements(n,u,s,d*a),e.update(u,n,1)}function c(d,u,f){f!==0&&(r.drawElementsInstanced(n,u,s,d*a,f),e.update(u,n,f))}function h(d,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,s,d,0,f);let _=0;for(let p=0;p<f;p++)_+=u[p];e.update(_,n,1)}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function Ty(r){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(e.calls++,a){case r.TRIANGLES:e.triangles+=o*(s/3);break;case r.LINES:e.lines+=o*(s/2);break;case r.LINE_STRIP:e.lines+=o*(s-1);break;case r.LINE_LOOP:e.lines+=o*s;break;case r.POINTS:e.points+=o*s;break;default:Yt("WebGLInfo: Unknown draw mode:",a);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function wy(r,t,e){let n=new WeakMap,i=new De;function s(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0,u=n.get(o);if(u===void 0||u.count!==d){let w=function(){E.dispose(),n.delete(o),o.removeEventListener("dispose",w)};u!==void 0&&u.texture.dispose();let f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],M=o.morphAttributes.color||[],A=0;f===!0&&(A=1),g===!0&&(A=2),_===!0&&(A=3);let y=o.attributes.position.count*A,S=1;y>t.maxTextureSize&&(S=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let T=new Float32Array(y*S*4*d),E=new Ka(T,y,S,d);E.type=vi,E.needsUpdate=!0;let v=A*4;for(let R=0;R<d;R++){let N=p[R],L=m[R],V=M[R],I=y*S*4*R;for(let z=0;z<N.count;z++){let q=z*v;f===!0&&(i.fromBufferAttribute(N,z),T[I+q+0]=i.x,T[I+q+1]=i.y,T[I+q+2]=i.z,T[I+q+3]=0),g===!0&&(i.fromBufferAttribute(L,z),T[I+q+4]=i.x,T[I+q+5]=i.y,T[I+q+6]=i.z,T[I+q+7]=0),_===!0&&(i.fromBufferAttribute(V,z),T[I+q+8]=i.x,T[I+q+9]=i.y,T[I+q+10]=i.z,T[I+q+11]=V.itemSize===4?i.w:1)}}u={count:d,texture:E,size:new Lt(y,S)},n.set(o,u),o.addEventListener("dispose",w)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",a.morphTexture,e);else{let f=0;for(let _=0;_<c.length;_++)f+=c[_];let g=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(r,"morphTargetBaseInfluence",g),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(r,"morphTargetsTextureSize",u.size)}return{update:s}}function Ey(r,t,e,n,i){let s=new WeakMap;function a(c){let h=i.render.frame,d=c.geometry,u=t.get(c,d);if(s.get(u)!==h&&(t.update(u),s.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==h&&(e.update(c.instanceMatrix,r.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,r.ARRAY_BUFFER),s.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;s.get(f)!==h&&(f.update(),s.set(f,h))}return u}function o(){s=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:o}}var Ay={[Gu]:"LINEAR_TONE_MAPPING",[Hu]:"REINHARD_TONE_MAPPING",[Wu]:"CINEON_TONE_MAPPING",[xo]:"ACES_FILMIC_TONE_MAPPING",[qu]:"AGX_TONE_MAPPING",[Yu]:"NEUTRAL_TONE_MAPPING",[Xu]:"CUSTOM_TONE_MAPPING"};function Cy(r,t,e,n,i,s){let a=new Xn(t,e,{type:r,depthBuffer:i,stencilBuffer:s,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new gi;c.setAttribute("position",new on([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new on([0,2,0,0,2,0],2));let h=new jl({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new Te(c,h),u=new aa(-1,1,1,-1,0,1),f=null,g=null,_=!1,p,m=null,M=[],A=!1;this.setSize=function(y,S){a.setSize(y,S),o!==null&&o.setSize(y,S),l!==null&&l.setSize(y,S);for(let T=0;T<M.length;T++){let E=M[T];E.setSize&&E.setSize(y,S)}},this.setEffects=function(y){M=y,A=M.length>0&&M[0].isRenderPass===!0;let S=a.width,T=a.height;M.length>0&&o===null&&(o=new Xn(S,T,{type:Ui,depthBuffer:!1,stencilBuffer:!1}),l=new Xn(S,T,{type:Ui,depthBuffer:!1,stencilBuffer:!1}));for(let E=0;E<M.length;E++){let v=M[E];v.setSize&&v.setSize(S,T)}},this.begin=function(y,S){if(_||y.toneMapping===Di&&M.length===0)return!1;if(m=S,S!==null){let T=S.width,E=S.height;(a.width!==T||a.height!==E)&&this.setSize(T,E)}return A===!1&&y.setRenderTarget(a),p=y.toneMapping,y.toneMapping=Di,!0},this.hasRenderPass=function(){return A},this.end=function(y,S){y.toneMapping=p,_=!0;let T=a,E=o;for(let v=0;v<M.length;v++){let w=M[v];w.enabled!==!1&&(w.render(y,E,T,S),w.needsSwap!==!1&&(T=E,E=E===o?l:o))}if(f!==y.outputColorSpace||g!==y.toneMapping){f=y.outputColorSpace,g=y.toneMapping,h.defines={},le.getTransfer(f)===me&&(h.defines.SRGB_TRANSFER="");let v=Ay[g];v&&(h.defines[v]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=T.texture,y.setRenderTarget(m),y.render(d,u),m=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var Pm=new Nn,yf=new Lr(1,1),Im=new Ka,Lm=new Hl,Dm=new so,um=[],fm=[],dm=new Float32Array(16),pm=new Float32Array(9),mm=new Float32Array(4);function ma(r,t,e){let n=r[0];if(n<=0||n>0)return r;let i=t*e,s=um[i];if(s===void 0&&(s=new Float32Array(i),um[i]=s),t!==0){n.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=e,r[a].toArray(s,o)}return s}function Qe(r,t){if(r.length!==t.length)return!1;for(let e=0,n=r.length;e<n;e++)if(r[e]!==t[e])return!1;return!0}function je(r,t){for(let e=0,n=t.length;e<n;e++)r[e]=t[e]}function hh(r,t){let e=fm[t];e===void 0&&(e=new Int32Array(t),fm[t]=e);for(let n=0;n!==t;++n)e[n]=r.allocateTextureUnit();return e}function Ry(r,t){let e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function Py(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Qe(e,t))return;r.uniform2fv(this.addr,t),je(e,t)}}function Iy(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Qe(e,t))return;r.uniform3fv(this.addr,t),je(e,t)}}function Ly(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Qe(e,t))return;r.uniform4fv(this.addr,t),je(e,t)}}function Dy(r,t){let e=this.cache,n=t.elements;if(n===void 0){if(Qe(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),je(e,t)}else{if(Qe(e,n))return;mm.set(n),r.uniformMatrix2fv(this.addr,!1,mm),je(e,n)}}function Ny(r,t){let e=this.cache,n=t.elements;if(n===void 0){if(Qe(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),je(e,t)}else{if(Qe(e,n))return;pm.set(n),r.uniformMatrix3fv(this.addr,!1,pm),je(e,n)}}function Uy(r,t){let e=this.cache,n=t.elements;if(n===void 0){if(Qe(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),je(e,t)}else{if(Qe(e,n))return;dm.set(n),r.uniformMatrix4fv(this.addr,!1,dm),je(e,n)}}function Fy(r,t){let e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function Oy(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Qe(e,t))return;r.uniform2iv(this.addr,t),je(e,t)}}function By(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Qe(e,t))return;r.uniform3iv(this.addr,t),je(e,t)}}function zy(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Qe(e,t))return;r.uniform4iv(this.addr,t),je(e,t)}}function ky(r,t){let e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function Vy(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Qe(e,t))return;r.uniform2uiv(this.addr,t),je(e,t)}}function Gy(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Qe(e,t))return;r.uniform3uiv(this.addr,t),je(e,t)}}function Hy(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Qe(e,t))return;r.uniform4uiv(this.addr,t),je(e,t)}}function Wy(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(yf.compareFunction=e.isReversedDepthBuffer()?ih:nh,s=yf):s=Pm,e.setTexture2D(t||s,i)}function Xy(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Lm,i)}function qy(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Dm,i)}function Yy(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Im,i)}function Zy(r){switch(r){case 5126:return Ry;case 35664:return Py;case 35665:return Iy;case 35666:return Ly;case 35674:return Dy;case 35675:return Ny;case 35676:return Uy;case 5124:case 35670:return Fy;case 35667:case 35671:return Oy;case 35668:case 35672:return By;case 35669:case 35673:return zy;case 5125:return ky;case 36294:return Vy;case 36295:return Gy;case 36296:return Hy;case 35678:case 36198:case 36298:case 36306:case 35682:return Wy;case 35679:case 36299:case 36307:return Xy;case 35680:case 36300:case 36308:case 36293:return qy;case 36289:case 36303:case 36311:case 36292:return Yy}}function Jy(r,t){r.uniform1fv(this.addr,t)}function $y(r,t){let e=ma(t,this.size,2);r.uniform2fv(this.addr,e)}function Ky(r,t){let e=ma(t,this.size,3);r.uniform3fv(this.addr,e)}function Qy(r,t){let e=ma(t,this.size,4);r.uniform4fv(this.addr,e)}function jy(r,t){let e=ma(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function tS(r,t){let e=ma(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function eS(r,t){let e=ma(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function nS(r,t){r.uniform1iv(this.addr,t)}function iS(r,t){r.uniform2iv(this.addr,t)}function rS(r,t){r.uniform3iv(this.addr,t)}function sS(r,t){r.uniform4iv(this.addr,t)}function aS(r,t){r.uniform1uiv(this.addr,t)}function oS(r,t){r.uniform2uiv(this.addr,t)}function lS(r,t){r.uniform3uiv(this.addr,t)}function cS(r,t){r.uniform4uiv(this.addr,t)}function hS(r,t,e){let n=this.cache,i=t.length,s=hh(e,i);Qe(n,s)||(r.uniform1iv(this.addr,s),je(n,s));let a;this.type===r.SAMPLER_2D_SHADOW?a=yf:a=Pm;for(let o=0;o!==i;++o)e.setTexture2D(t[o]||a,s[o])}function uS(r,t,e){let n=this.cache,i=t.length,s=hh(e,i);Qe(n,s)||(r.uniform1iv(this.addr,s),je(n,s));for(let a=0;a!==i;++a)e.setTexture3D(t[a]||Lm,s[a])}function fS(r,t,e){let n=this.cache,i=t.length,s=hh(e,i);Qe(n,s)||(r.uniform1iv(this.addr,s),je(n,s));for(let a=0;a!==i;++a)e.setTextureCube(t[a]||Dm,s[a])}function dS(r,t,e){let n=this.cache,i=t.length,s=hh(e,i);Qe(n,s)||(r.uniform1iv(this.addr,s),je(n,s));for(let a=0;a!==i;++a)e.setTexture2DArray(t[a]||Im,s[a])}function pS(r){switch(r){case 5126:return Jy;case 35664:return $y;case 35665:return Ky;case 35666:return Qy;case 35674:return jy;case 35675:return tS;case 35676:return eS;case 5124:case 35670:return nS;case 35667:case 35671:return iS;case 35668:case 35672:return rS;case 35669:case 35673:return sS;case 5125:return aS;case 36294:return oS;case 36295:return lS;case 36296:return cS;case 35678:case 36198:case 36298:case 36306:case 35682:return hS;case 35679:case 36299:case 36307:return uS;case 35680:case 36300:case 36308:case 36293:return fS;case 36289:case 36303:case 36311:case 36292:return dS}}var Sf=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Zy(e.type)}},Mf=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=pS(e.type)}},bf=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let s=0,a=i.length;s!==a;++s){let o=i[s];o.setValue(t,e[o.id],n)}}},xf=/(\w+)(\])?(\[|\.)?/g;function gm(r,t){r.seq.push(t),r.map[t.id]=t}function mS(r,t,e){let n=r.name,i=n.length;for(xf.lastIndex=0;;){let s=xf.exec(n),a=xf.lastIndex,o=s[1],l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){gm(e,c===void 0?new Sf(o,r,t):new Mf(o,r,t));break}else{let d=e.map[o];d===void 0&&(d=new bf(o),gm(e,d)),e=d}}}var pa=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);mS(o,l,this)}let i=[],s=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?i.push(a):s.push(a);i.length>0&&(this.seq=i.concat(s))}setValue(t,e,n,i){let s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,a=e.length;s!==a;++s){let o=e[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,s=t.length;i!==s;++i){let a=t[i];a.id in e&&n.push(a)}return n}};function _m(r,t,e){let n=r.createShader(t);return r.shaderSource(n,e),r.compileShader(n),n}var gS=37297,_S=0;function xS(r,t){let e=r.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=i;a<s;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var xm=new Jt;function vS(r){le._getMatrix(xm,le.workingColorSpace,r);let t=`mat3( ${xm.elements.map(e=>e.toFixed(4))} )`;switch(le.getTransfer(r)){case Za:return[t,"LinearTransferOETF"];case me:return[t,"sRGBTransferOETF"];default:return Xt("WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function vm(r,t,e){let n=r.getShaderParameter(t,r.COMPILE_STATUS),s=(r.getShaderInfoLog(t)||"").trim();if(n&&s==="")return"";let a=/ERROR: 0:(\d+)/.exec(s);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+s+`

`+xS(r.getShaderSource(t),o)}else return s}function yS(r,t){let e=vS(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var SS={[Gu]:"Linear",[Hu]:"Reinhard",[Wu]:"Cineon",[xo]:"ACESFilmic",[qu]:"AgX",[Yu]:"Neutral",[Xu]:"Custom"};function MS(r,t){let e=SS[t];return e===void 0?(Xt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var sh=new O;function bS(){le.getLuminanceCoefficients(sh);let r=sh.x.toFixed(4),t=sh.y.toFixed(4),e=sh.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function TS(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Po).join(`
`)}function wS(r){let t=[];for(let e in r){let n=r[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function ES(r,t){let e={},n=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let s=r.getActiveAttrib(t,i),a=s.name,o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),e[a]={type:s.type,location:r.getAttribLocation(t,a),locationSize:o}}return e}function Po(r){return r!==""}function ym(r,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Sm(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var AS=/^[ \t]*#include +<([\w\d./]+)>/gm;function Tf(r){return r.replace(AS,RS)}var CS=new Map;function RS(r,t){let e=te[t];if(e===void 0){let n=CS.get(t);if(n!==void 0)e=te[n],Xt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Tf(e)}var PS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Mm(r){return r.replace(PS,IS)}function IS(r,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function bm(r){let t=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var LS={[_o]:"SHADOWMAP_TYPE_PCF",[la]:"SHADOWMAP_TYPE_VSM"};function DS(r){return LS[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var NS={[Or]:"ENVMAP_TYPE_CUBE",[us]:"ENVMAP_TYPE_CUBE",[vo]:"ENVMAP_TYPE_CUBE_UV"};function US(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":NS[r.envMapMode]||"ENVMAP_TYPE_CUBE"}var FS={[us]:"ENVMAP_MODE_REFRACTION"};function OS(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":FS[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}var BS={[Vu]:"ENVMAP_BLENDING_MULTIPLY",[kp]:"ENVMAP_BLENDING_MIX",[Vp]:"ENVMAP_BLENDING_ADD"};function zS(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":BS[r.combine]||"ENVMAP_BLENDING_NONE"}function kS(r){let t=r.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function VS(r,t,e,n){let i=r.getContext(),s=e.defines,a=e.vertexShader,o=e.fragmentShader,l=DS(e),c=US(e),h=OS(e),d=zS(e),u=kS(e),f=TS(e),g=wS(s),_=i.createProgram(),p,m,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Po).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Po).join(`
`),m.length>0&&(m+=`
`)):(p=[bm(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Po).join(`
`),m=[bm(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Di?"#define TONE_MAPPING":"",e.toneMapping!==Di?te.tonemapping_pars_fragment:"",e.toneMapping!==Di?MS("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",te.colorspace_pars_fragment,yS("linearToOutputTexel",e.outputColorSpace),bS(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Po).join(`
`)),a=Tf(a),a=ym(a,e),a=Sm(a,e),o=Tf(o),o=ym(o,e),o=Sm(o,e),a=Mm(a),o=Mm(o),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,p=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",e.glslVersion===ef?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===ef?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let A=M+p+a,y=M+m+o,S=_m(i,i.VERTEX_SHADER,A),T=_m(i,i.FRAGMENT_SHADER,y);i.attachShader(_,S),i.attachShader(_,T),e.index0AttributeName!==void 0?i.bindAttribLocation(_,0,e.index0AttributeName):e.hasPositionAttribute===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function E(N){if(r.debug.checkShaderErrors){let L=i.getProgramInfoLog(_)||"",V=i.getShaderInfoLog(S)||"",I=i.getShaderInfoLog(T)||"",z=L.trim(),q=V.trim(),k=I.trim(),et=!0,Z=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(et=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,_,S,T);else{let C=vm(i,S,"vertex"),nt=vm(i,T,"fragment");Yt("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+z+`
`+C+`
`+nt)}else z!==""?Xt("WebGLProgram: Program Info Log:",z):(q===""||k==="")&&(Z=!1);Z&&(N.diagnostics={runnable:et,programLog:z,vertexShader:{log:q,prefix:p},fragmentShader:{log:k,prefix:m}})}i.deleteShader(S),i.deleteShader(T),v=new pa(i,_),w=ES(i,_)}let v;this.getUniforms=function(){return v===void 0&&E(this),v};let w;this.getAttributes=function(){return w===void 0&&E(this),w};let R=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=i.getProgramParameter(_,gS)),R},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=_S++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=S,this.fragmentShader=T,this}var GS=0,wf=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let i=this._getShaderCacheForMaterial(t);return i.has(e)===!1&&(i.add(e),e.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Ef(t),e.set(t,n)),n}},Ef=class{constructor(t){this.id=GS++,this.code=t,this.usedTimes=0}};function HS(r){return r===kr||r===wo||r===Eo}function WS(r,t,e,n,i,s){let a=new Qa,o=new wf,l=new Set,c=[],h=new Map,d=n.logarithmicDepthBuffer,u=n.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(v){return l.add(v),v===0?"uv":`uv${v}`}function _(v,w,R,N,L,V){let I=N.fog,z=L.geometry,q=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?N.environment:null,k=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,et=t.get(v.envMap||q,k),Z=et&&et.mapping===vo?et.image.height:null,C=f[v.type];v.precision!==null&&(u=n.getMaxPrecision(v.precision),u!==v.precision&&Xt("WebGLProgram.getParameters:",v.precision,"not supported, using",u,"instead."));let nt=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,Mt=nt!==void 0?nt.length:0,bt=0;z.morphAttributes.position!==void 0&&(bt=1),z.morphAttributes.normal!==void 0&&(bt=2),z.morphAttributes.color!==void 0&&(bt=3);let Bt,Ut,Ht,j;if(C){let Nt=$i[C];Bt=Nt.vertexShader,Ut=Nt.fragmentShader}else{Bt=v.vertexShader,Ut=v.fragmentShader;let Nt=o.getVertexShaderStage(v),ot=o.getFragmentShaderStage(v);o.update(v,Nt,ot),Ht=Nt.id,j=ot.id}let it=r.getRenderTarget(),mt=r.state.buffers.depth.getReversed(),zt=L.isInstancedMesh===!0,gt=L.isBatchedMesh===!0,Ft=!!v.map,kt=!!v.matcap,It=!!et,Gt=!!v.aoMap,Kt=!!v.lightMap,G=!!v.bumpMap&&v.wireframe===!1,Qt=!!v.normalMap,fe=!!v.displacementMap,ve=!!v.emissiveMap,qt=!!v.metalnessMap,ue=!!v.roughnessMap,U=v.anisotropy>0,Se=v.clearcoat>0,Wt=v.dispersion>0,P=v.retroreflectivity>0,x=v.iridescence>0,B=v.sheen>0,H=v.transmission>0,tt=U&&!!v.anisotropyMap,Y=Se&&!!v.clearcoatMap,K=Se&&!!v.clearcoatNormalMap,J=Se&&!!v.clearcoatRoughnessMap,Q=x&&!!v.iridescenceMap,lt=x&&!!v.iridescenceThicknessMap,vt=B&&!!v.sheenColorMap,dt=B&&!!v.sheenRoughnessMap,ft=!!v.specularMap,ht=!!v.specularColorMap,At=!!v.specularIntensityMap,Ot=H&&!!v.transmissionMap,D=H&&!!v.thicknessMap,ut=!!v.gradientMap,rt=!!v.alphaMap,pt=v.alphaTest>0,_t=!!v.alphaHash,st=!!v.extensions,ct=Di;v.toneMapped&&(it===null||it.isXRRenderTarget===!0)&&(ct=r.toneMapping);let at={shaderID:C,shaderType:v.type,shaderName:v.name,vertexShader:Bt,fragmentShader:Ut,defines:v.defines,customVertexShaderID:Ht,customFragmentShaderID:j,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:u,batching:gt,batchingColor:gt&&L._colorsTexture!==null,instancing:zt,instancingColor:zt&&L.instanceColor!==null,instancingMorph:zt&&L.morphTexture!==null,outputColorSpace:it===null?r.outputColorSpace:it.isXRRenderTarget===!0?it.texture.colorSpace:le.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:Ft,matcap:kt,envMap:It,envMapMode:It&&et.mapping,envMapCubeUVHeight:Z,aoMap:Gt,lightMap:Kt,bumpMap:G,normalMap:Qt,displacementMap:fe,emissiveMap:ve,normalMapObjectSpace:Qt&&v.normalMapType===Wp,normalMapTangentSpace:Qt&&v.normalMapType===eh,packedNormalMap:Qt&&v.normalMapType===eh&&HS(v.normalMap.format),metalnessMap:qt,roughnessMap:ue,anisotropy:U,anisotropyMap:tt,clearcoat:Se,clearcoatMap:Y,clearcoatNormalMap:K,clearcoatRoughnessMap:J,dispersion:Wt,retroreflection:P,iridescence:x,iridescenceMap:Q,iridescenceThicknessMap:lt,sheen:B,sheenColorMap:vt,sheenRoughnessMap:dt,specularMap:ft,specularColorMap:ht,specularIntensityMap:At,transmission:H,transmissionMap:Ot,thicknessMap:D,gradientMap:ut,opaque:v.transparent===!1&&v.blending===ca&&v.alphaToCoverage===!1,alphaMap:rt,alphaTest:pt,alphaHash:_t,combine:v.combine,mapUv:Ft&&g(v.map.channel),aoMapUv:Gt&&g(v.aoMap.channel),lightMapUv:Kt&&g(v.lightMap.channel),bumpMapUv:G&&g(v.bumpMap.channel),normalMapUv:Qt&&g(v.normalMap.channel),displacementMapUv:fe&&g(v.displacementMap.channel),emissiveMapUv:ve&&g(v.emissiveMap.channel),metalnessMapUv:qt&&g(v.metalnessMap.channel),roughnessMapUv:ue&&g(v.roughnessMap.channel),anisotropyMapUv:tt&&g(v.anisotropyMap.channel),clearcoatMapUv:Y&&g(v.clearcoatMap.channel),clearcoatNormalMapUv:K&&g(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:J&&g(v.clearcoatRoughnessMap.channel),iridescenceMapUv:Q&&g(v.iridescenceMap.channel),iridescenceThicknessMapUv:lt&&g(v.iridescenceThicknessMap.channel),sheenColorMapUv:vt&&g(v.sheenColorMap.channel),sheenRoughnessMapUv:dt&&g(v.sheenRoughnessMap.channel),specularMapUv:ft&&g(v.specularMap.channel),specularColorMapUv:ht&&g(v.specularColorMap.channel),specularIntensityMapUv:At&&g(v.specularIntensityMap.channel),transmissionMapUv:Ot&&g(v.transmissionMap.channel),thicknessMapUv:D&&g(v.thicknessMap.channel),alphaMapUv:rt&&g(v.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(Qt||U),vertexNormals:!!z.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!z.attributes.uv&&(Ft||rt),fog:!!I,useFog:v.fog===!0,fogExp2:!!I&&I.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||z.attributes.normal===void 0&&Qt===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:mt,skinning:L.isSkinnedMesh===!0,hasPositionAttribute:z.attributes.position!==void 0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:Mt,morphTextureStride:bt,numSunLights:w.sun.length,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numSunLightShadows:w.sunShadowMap.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:V.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:v.dithering,shadowMapEnabled:r.shadowMap.enabled&&R.length>0,shadowMapType:r.shadowMap.type,toneMapping:ct,decodeVideoTexture:Ft&&v.map.isVideoTexture===!0&&le.getTransfer(v.map.colorSpace)===me,decodeVideoTextureEmissive:ve&&v.emissiveMap.isVideoTexture===!0&&le.getTransfer(v.emissiveMap.colorSpace)===me,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===qi,flipSided:v.side===Un,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:st&&v.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(st&&v.extensions.multiDraw===!0||gt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return at.vertexUv1s=l.has(1),at.vertexUv2s=l.has(2),at.vertexUv3s=l.has(3),l.clear(),at}function p(v){let w=[];if(v.shaderID?w.push(v.shaderID):(w.push(v.customVertexShaderID),w.push(v.customFragmentShaderID)),v.defines!==void 0)for(let R in v.defines)w.push(R),w.push(v.defines[R]);return v.isRawShaderMaterial===!1&&(m(w,v),M(w,v),w.push(r.outputColorSpace)),w.push(v.customProgramCacheKey),w.join()}function m(v,w){v.push(w.precision),v.push(w.outputColorSpace),v.push(w.envMapMode),v.push(w.envMapCubeUVHeight),v.push(w.mapUv),v.push(w.alphaMapUv),v.push(w.lightMapUv),v.push(w.aoMapUv),v.push(w.bumpMapUv),v.push(w.normalMapUv),v.push(w.displacementMapUv),v.push(w.emissiveMapUv),v.push(w.metalnessMapUv),v.push(w.roughnessMapUv),v.push(w.anisotropyMapUv),v.push(w.clearcoatMapUv),v.push(w.clearcoatNormalMapUv),v.push(w.clearcoatRoughnessMapUv),v.push(w.iridescenceMapUv),v.push(w.iridescenceThicknessMapUv),v.push(w.sheenColorMapUv),v.push(w.sheenRoughnessMapUv),v.push(w.specularMapUv),v.push(w.specularColorMapUv),v.push(w.specularIntensityMapUv),v.push(w.transmissionMapUv),v.push(w.thicknessMapUv),v.push(w.combine),v.push(w.fogExp2),v.push(w.sizeAttenuation),v.push(w.morphTargetsCount),v.push(w.morphAttributeCount),v.push(w.numSunLights),v.push(w.numDirLights),v.push(w.numPointLights),v.push(w.numSpotLights),v.push(w.numSpotLightMaps),v.push(w.numHemiLights),v.push(w.numRectAreaLights),v.push(w.numSunLightShadows),v.push(w.numDirLightShadows),v.push(w.numPointLightShadows),v.push(w.numSpotLightShadows),v.push(w.numSpotLightShadowsWithMaps),v.push(w.numLightProbes),v.push(w.shadowMapType),v.push(w.toneMapping),v.push(w.numClippingPlanes),v.push(w.numClipIntersection),v.push(w.depthPacking)}function M(v,w){a.disableAll(),w.instancing&&a.enable(0),w.instancingColor&&a.enable(1),w.instancingMorph&&a.enable(2),w.matcap&&a.enable(3),w.envMap&&a.enable(4),w.normalMapObjectSpace&&a.enable(5),w.normalMapTangentSpace&&a.enable(6),w.clearcoat&&a.enable(7),w.iridescence&&a.enable(8),w.alphaTest&&a.enable(9),w.vertexColors&&a.enable(10),w.vertexAlphas&&a.enable(11),w.vertexUv1s&&a.enable(12),w.vertexUv2s&&a.enable(13),w.vertexUv3s&&a.enable(14),w.vertexTangents&&a.enable(15),w.anisotropy&&a.enable(16),w.alphaHash&&a.enable(17),w.batching&&a.enable(18),w.dispersion&&a.enable(19),w.retroreflection&&a.enable(24),w.batchingColor&&a.enable(20),w.gradientMap&&a.enable(21),w.packedNormalMap&&a.enable(22),w.vertexNormals&&a.enable(23),v.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reversedDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.decodeVideoTextureEmissive&&a.enable(20),w.alphaToCoverage&&a.enable(21),w.numLightProbeGrids>0&&a.enable(22),w.hasPositionAttribute&&a.enable(23),v.push(a.mask)}function A(v){let w=f[v.type],R;if(w){let N=$i[w];R=rm.clone(N.uniforms)}else R=v.uniforms;return R}function y(v,w){let R=h.get(w);return R!==void 0?++R.usedTimes:(R=new VS(r,w,v,i),c.push(R),h.set(w,R)),R}function S(v){if(--v.usedTimes===0){let w=c.indexOf(v);c[w]=c[c.length-1],c.pop(),h.delete(v.cacheKey),v.destroy()}}function T(v){o.remove(v)}function E(){o.dispose()}return{getParameters:_,getProgramCacheKey:p,getUniforms:A,acquireProgram:y,releaseProgram:S,releaseShaderCache:T,programs:c,dispose:E}}function XS(){let r=new WeakMap;function t(a){return r.has(a)}function e(a){let o=r.get(a);return o===void 0&&(o={},r.set(a,o)),o}function n(a){r.delete(a)}function i(a,o,l){r.get(a)[o]=l}function s(){r=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:s}}function qS(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.materialVariant!==t.materialVariant?r.materialVariant-t.materialVariant:r.z!==t.z?r.z-t.z:r.id-t.id}function Tm(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function wm(){let r=[],t=0,e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function a(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function o(u,f,g,_,p,m){let M=r[t];return M===void 0?(M={id:u.id,object:u,geometry:f,material:g,materialVariant:a(u),groupOrder:_,renderOrder:u.renderOrder,z:p,group:m},r[t]=M):(M.id=u.id,M.object=u,M.geometry=f,M.material=g,M.materialVariant=a(u),M.groupOrder=_,M.renderOrder=u.renderOrder,M.z=p,M.group=m),t++,M}function l(u,f,g,_,p,m,M){M.reversedDepth===!0&&(p=-p);let A=o(u,f,g,_,p,m);g.transmission>0?n.push(A):g.transparent===!0?i.push(A):e.push(A)}function c(u,f,g,_,p,m){let M=o(u,f,g,_,p,m);g.transmission>0?n.unshift(M):g.transparent===!0?i.unshift(M):e.unshift(M)}function h(u,f){e.length>1&&e.sort(u||qS),n.length>1&&n.sort(f||Tm),i.length>1&&i.sort(f||Tm)}function d(){for(let u=t,f=r.length;u<f;u++){let g=r[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:l,unshift:c,finish:d,sort:h}}function YS(){let r=new WeakMap;function t(n,i){let s=r.get(n),a;return s===void 0?(a=new wm,r.set(n,[a])):i>=s.length?(a=new wm,s.push(a)):a=s[i],a}function e(){r=new WeakMap}return{get:t,dispose:e}}function ZS(){let r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new O,color:new $t};break;case"SpotLight":e={position:new O,direction:new O,color:new $t,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new O,color:new $t,distance:0,decay:0};break;case"HemisphereLight":e={direction:new O,skyColor:new $t,groundColor:new $t};break;case"RectAreaLight":e={color:new $t,position:new O,halfWidth:new O,halfHeight:new O};break}return r[t.id]=e,e}}}function JS(){let r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}var $S=0;function KS(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function QS(r){let t=new ZS,e=JS(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new O);let i=new O,s=new _e,a=new _e;function o(c){let h=0,d=0,u=0;for(let L=0;L<9;L++)n.probe[L].set(0,0,0);let f=0,g=0,_=0,p=0,m=0,M=0,A=0,y=0,S=0,T=0,E=0,v=0,w=0,R=0;c.sort(KS);for(let L=0,V=c.length;L<V;L++){let I=c[L],z=I.color,q=I.intensity,k=I.distance,et=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===kr?et=I.shadow.map.texture:et=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)h+=z.r*q,d+=z.g*q,u+=z.b*q;else if(I.isLightProbe){for(let Z=0;Z<9;Z++)n.probe[Z].addScaledVector(I.sh.coefficients[Z],q);R++}else if(I.isSunLight){let Z=t.get(I);if(Z.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let C=I.shadow,nt=e.get(I);nt.shadowIntensity=C.intensity,nt.shadowBias=C.bias,nt.shadowNormalBias=C.normalBias,nt.shadowRadius=C.radius,nt.shadowMapSize.copy(C.mapSize).multiply(C.getFrameExtents()),n.sunShadow[g]=nt,n.sunShadowMap[g]=et;let Mt=C.getViewportCount();for(let bt=0;bt<Mt;bt++)n.sunShadowMatrix[_+bt]=C.getMatrix(bt),n.sunShadowCascade[_+bt]=C._cascadeData[bt];_+=Mt,g++}n.sun[f]=Z,f++}else if(I.isDirectionalLight){let Z=t.get(I);if(Z.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let C=I.shadow,nt=e.get(I);nt.shadowIntensity=C.intensity,nt.shadowBias=C.bias,nt.shadowNormalBias=C.normalBias,nt.shadowRadius=C.radius,nt.shadowMapSize=C.mapSize,n.directionalShadow[p]=nt,n.directionalShadowMap[p]=et,n.directionalShadowMatrix[p]=I.shadow.matrix,S++}n.directional[p]=Z,p++}else if(I.isSpotLight){let Z=t.get(I);Z.position.setFromMatrixPosition(I.matrixWorld),Z.color.copy(z).multiplyScalar(q),Z.distance=k,Z.coneCos=Math.cos(I.angle),Z.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),Z.decay=I.decay,n.spot[M]=Z;let C=I.shadow;if(I.map&&(n.spotLightMap[v]=I.map,v++,C.updateMatrices(I),I.castShadow&&w++),n.spotLightMatrix[M]=C.matrix,I.castShadow){let nt=e.get(I);nt.shadowIntensity=C.intensity,nt.shadowBias=C.bias,nt.shadowNormalBias=C.normalBias,nt.shadowRadius=C.radius,nt.shadowMapSize=C.mapSize,n.spotShadow[M]=nt,n.spotShadowMap[M]=et,E++}M++}else if(I.isRectAreaLight){let Z=t.get(I);Z.color.copy(z).multiplyScalar(q),Z.halfWidth.set(I.width*.5,0,0),Z.halfHeight.set(0,I.height*.5,0),n.rectArea[A]=Z,A++}else if(I.isPointLight){let Z=t.get(I);if(Z.color.copy(I.color).multiplyScalar(I.intensity),Z.distance=I.distance,Z.decay=I.decay,I.castShadow){let C=I.shadow,nt=e.get(I);nt.shadowIntensity=C.intensity,nt.shadowBias=C.bias,nt.shadowNormalBias=C.normalBias,nt.shadowRadius=C.radius,nt.shadowMapSize=C.mapSize,nt.shadowCameraNear=C.camera.near,nt.shadowCameraFar=C.camera.far,n.pointShadow[m]=nt,n.pointShadowMap[m]=et,n.pointShadowMatrix[m]=I.shadow.matrix,T++}n.point[m]=Z,m++}else if(I.isHemisphereLight){let Z=t.get(I);Z.skyColor.copy(I.color).multiplyScalar(q),Z.groundColor.copy(I.groundColor).multiplyScalar(q),n.hemi[y]=Z,y++}}A>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=yt.LTC_FLOAT_1,n.rectAreaLTC2=yt.LTC_FLOAT_2):(n.rectAreaLTC1=yt.LTC_HALF_1,n.rectAreaLTC2=yt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;let N=n.hash;(N.sunLength!==f||N.directionalLength!==p||N.pointLength!==m||N.spotLength!==M||N.rectAreaLength!==A||N.hemiLength!==y||N.numSunShadows!==g||N.numDirectionalShadows!==S||N.numPointShadows!==T||N.numSpotShadows!==E||N.numSpotMaps!==v||N.numLightProbes!==R)&&(n.sun.length=f,n.directional.length=p,n.spot.length=M,n.rectArea.length=A,n.point.length=m,n.hemi.length=y,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=_,n.sunShadowCascade.length=_,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.directionalShadowMatrix.length=S,n.pointShadow.length=T,n.pointShadowMap.length=T,n.pointShadowMatrix.length=T,n.spotShadow.length=E,n.spotShadowMap.length=E,n.spotLightMatrix.length=E+v-w,n.spotLightMap.length=v,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=R,N.sunLength=f,N.directionalLength=p,N.pointLength=m,N.spotLength=M,N.rectAreaLength=A,N.hemiLength=y,N.numSunShadows=g,N.numDirectionalShadows=S,N.numPointShadows=T,N.numSpotShadows=E,N.numSpotMaps=v,N.numLightProbes=R,n.version=$S++)}function l(c,h){let d=0,u=0,f=0,g=0,_=0,p=0,m=h.matrixWorldInverse;for(let M=0,A=c.length;M<A;M++){let y=c[M];if(y.isSunLight){let S=n.sun[d];S.direction.setFromMatrixPosition(y.matrixWorld),S.direction.transformDirection(m),d++}else if(y.isDirectionalLight){let S=n.directional[u];S.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(i),S.direction.transformDirection(m),u++}else if(y.isSpotLight){let S=n.spot[g];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(i),S.direction.transformDirection(m),g++}else if(y.isRectAreaLight){let S=n.rectArea[_];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(m),a.identity(),s.copy(y.matrixWorld),s.premultiply(m),a.extractRotation(s),S.halfWidth.set(y.width*.5,0,0),S.halfHeight.set(0,y.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),_++}else if(y.isPointLight){let S=n.point[f];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(m),f++}else if(y.isHemisphereLight){let S=n.hemi[p];S.direction.setFromMatrixPosition(y.matrixWorld),S.direction.transformDirection(m),p++}}}return{setup:o,setupView:l,state:n}}function Em(r){let t=new QS(r),e=[],n=[],i=[];function s(u){d.camera=u,e.length=0,n.length=0,i.length=0}function a(u){e.push(u)}function o(u){n.push(u)}function l(u){i.push(u)}function c(){t.setup(e)}function h(u){t.setupView(e,u)}let d={lightsArray:e,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:d,setupLights:c,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function jS(r){let t=new WeakMap;function e(i,s=0){let a=t.get(i),o;return a===void 0?(o=new Em(r),t.set(i,[o])):s>=a.length?(o=new Em(r),a.push(o)):o=a[s],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var tM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,eM=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,nM=[new O(1,0,0),new O(-1,0,0),new O(0,1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1)],iM=[new O(0,-1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1),new O(0,-1,0),new O(0,-1,0)],Am=new _e,Ro=new O,vf=new O;function rM(r,t,e){let n=new ra,i=new Lt,s=new Lt,a=new De,o=new tc,l=new ec,c={},h=e.maxTextureSize,d={[Fr]:Un,[Un]:Fr,[qi]:qi},u=new ii({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Lt},radius:{value:4}},vertexShader:tM,fragmentShader:eM}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let g=new gi;g.setAttribute("position",new ti(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new Te(g,u),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=_o;let m=this.type;this.render=function(T,E,v){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||T.length===0)return;this.type===Sp&&(Xt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=_o);let w=r.getRenderTarget(),R=r.getActiveCubeFace(),N=r.getActiveMipmapLevel(),L=r.state;L.setBlending(Yi),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);let V=m!==this.type;V&&E.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach(z=>z.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,z=T.length;I<z;I++){let q=T[I],k=q.shadow;if(k===void 0){Xt("WebGLShadowMap:",q,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;i.copy(k.mapSize);let et=k.getFrameExtents();i.multiply(et),s.copy(k.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/et.x),i.x=s.x*et.x,k.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/et.y),i.y=s.y*et.y,k.mapSize.y=s.y));let Z=r.state.buffers.depth.getReversed();if(k.camera._reversedDepth=Z,k.map===null||V===!0){if(k.map!==null&&(k.map.depthTexture!==null&&(k.map.depthTexture.dispose(),k.map.depthTexture=null),k.map.dispose()),this.type===la){if(q.isPointLight){Xt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}k.map=new Xn(i.x,i.y,{format:kr,type:Ui,minFilter:dn,magFilter:dn,generateMipmaps:!1}),k.map.texture.name=q.name+".shadowMap",k.map.depthTexture=new Lr(i.x,i.y,vi),k.map.depthTexture.name=q.name+".shadowMapDepth",k.map.depthTexture.format=Gi,k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=ln,k.map.depthTexture.magFilter=ln}else q.isPointLight?(k.map=new oh(i.x),k.map.depthTexture=new Xl(i.x,Ni)):(k.map=new Xn(i.x,i.y),k.map.depthTexture=new Lr(i.x,i.y,Ni)),k.map.depthTexture.name=q.name+".shadowMap",k.map.depthTexture.format=Gi,this.type===_o?(k.map.depthTexture.compareFunction=Z?ih:nh,k.map.depthTexture.minFilter=dn,k.map.depthTexture.magFilter=dn):(k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=ln,k.map.depthTexture.magFilter=ln);k.camera.updateProjectionMatrix()}k.map.isWebGLCubeRenderTarget!==!0&&(k.map.width!==i.x||k.map.height!==i.y)&&k.map.setSize(i.x,i.y);let C=k.map.isWebGLCubeRenderTarget?6:k.getViewportCount();q.isPointLight!==!0&&k.updateMatrices(q,v);for(let nt=0;nt<C;nt++){let Mt=k.getCamera(nt);if(q.isPointLight){let bt=k.camera,Bt=k.matrix,Ut=q.distance||bt.far;Ut!==bt.far&&(bt.far=Ut,bt.updateProjectionMatrix()),Ro.setFromMatrixPosition(q.matrixWorld),bt.position.copy(Ro),vf.copy(bt.position),vf.add(nM[nt]),bt.up.copy(iM[nt]),bt.lookAt(vf),bt.updateMatrixWorld(),Bt.makeTranslation(-Ro.x,-Ro.y,-Ro.z),Am.multiplyMatrices(bt.projectionMatrix,bt.matrixWorldInverse),k._frustum.setFromProjectionMatrix(Am,bt.coordinateSystem,bt.reversedDepth)}if(k.map.isWebGLCubeRenderTarget)r.setRenderTarget(k.map,nt),r.clear();else{nt===0&&(r.setRenderTarget(k.map),r.clear());let bt=k.getViewport(nt);a.set(s.x*bt.x,s.y*bt.y,s.x*bt.z,s.y*bt.w),L.viewport(a)}n=k.getFrustum(nt),y(E,v,Mt,q,this.type)}k.isPointLightShadow!==!0&&this.type===la&&M(k,v),k.needsUpdate=!1}m=this.type,p.needsUpdate=!1,r.setRenderTarget(w,R,N)};function M(T,E){let v=t.update(_);u.defines.VSM_SAMPLES!==T.blurSamples&&(u.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null?T.mapPass=new Xn(i.x,i.y,{format:kr,type:Ui}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),u.uniforms.shadow_pass.value=T.map.depthTexture,u.uniforms.resolution.value.set(T.map.width,T.map.height),u.uniforms.radius.value=T.radius,r.setRenderTarget(T.mapPass),r.clear(),r.renderBufferDirect(E,null,v,u,_,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value.set(T.map.width,T.map.height),f.uniforms.radius.value=T.radius,r.setRenderTarget(T.map),r.clear(),r.renderBufferDirect(E,null,v,f,_,null)}function A(T,E,v,w){let R=null,N=v.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(N!==void 0)R=N;else if(R=v.isPointLight===!0?l:o,r.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0||E.alphaToCoverage===!0){let L=R.uuid,V=E.uuid,I=c[L];I===void 0&&(I={},c[L]=I);let z=I[V];z===void 0&&(z=R.clone(),I[V]=z,E.addEventListener("dispose",S)),R=z}if(R.visible=E.visible,R.wireframe=E.wireframe,w===la?R.side=E.shadowSide!==null?E.shadowSide:E.side:R.side=E.shadowSide!==null?E.shadowSide:d[E.side],R.alphaMap=E.alphaMap,R.alphaTest=E.alphaToCoverage===!0?.5:E.alphaTest,R.map=E.map,R.clipShadows=E.clipShadows,R.clippingPlanes=E.clippingPlanes,R.clipIntersection=E.clipIntersection,R.displacementMap=E.displacementMap,R.displacementScale=E.displacementScale,R.displacementBias=E.displacementBias,R.wireframeLinewidth=E.wireframeLinewidth,R.linewidth=E.linewidth,v.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let L=r.properties.get(R);L.light=v}return R}function y(T,E,v,w,R){if(T.visible===!1)return;if(T.layers.test(E.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&R===la)&&(!T.frustumCulled||T.intersectsFrustum(n))){T.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,T.matrixWorld);let V=t.update(T),I=T.material;if(Array.isArray(I)){let z=V.groups;for(let q=0,k=z.length;q<k;q++){let et=z[q],Z=I[et.materialIndex];if(Z&&Z.visible){let C=A(T,Z,w,R);T.onBeforeShadow(r,T,E,v,V,C,et),r.renderBufferDirect(v,null,V,C,T,et),T.onAfterShadow(r,T,E,v,V,C,et)}}}else if(I.visible){let z=A(T,I,w,R);T.onBeforeShadow(r,T,E,v,V,z,null),r.renderBufferDirect(v,null,V,z,T,null),T.onAfterShadow(r,T,E,v,V,z,null)}}let L=T.children;for(let V=0,I=L.length;V<I;V++)y(L[V],E,v,w,R)}function S(T){T.target.removeEventListener("dispose",S);for(let v in c){let w=c[v],R=T.target.uuid;R in w&&(w[R].dispose(),delete w[R])}}}function sM(r,t){function e(){let D=!1,ut=new De,rt=null,pt=new De(0,0,0,0);return{setMask:function(_t){rt!==_t&&!D&&(r.colorMask(_t,_t,_t,_t),rt=_t)},setLocked:function(_t){D=_t},setClear:function(_t,st,ct,at,Nt){Nt===!0&&(_t*=at,st*=at,ct*=at),ut.set(_t,st,ct,at),pt.equals(ut)===!1&&(r.clearColor(_t,st,ct,at),pt.copy(ut))},reset:function(){D=!1,rt=null,pt.set(-1,0,0,0)}}}function n(){let D=!1,ut=!1,rt=null,pt=null,_t=null;return{setReversed:function(st){if(ut!==st){let ct=t.get("EXT_clip_control");st?ct.clipControlEXT(ct.LOWER_LEFT_EXT,ct.ZERO_TO_ONE_EXT):ct.clipControlEXT(ct.LOWER_LEFT_EXT,ct.NEGATIVE_ONE_TO_ONE_EXT),ut=st;let at=_t;_t=null,this.setClear(at)}},getReversed:function(){return ut},setTest:function(st){st?it(r.DEPTH_TEST):mt(r.DEPTH_TEST)},setMask:function(st){rt!==st&&!D&&(r.depthMask(st),rt=st)},setFunc:function(st){if(ut&&(st=nm[st]),pt!==st){switch(st){case Il:r.depthFunc(r.NEVER);break;case Ll:r.depthFunc(r.ALWAYS);break;case Dl:r.depthFunc(r.LESS);break;case Qs:r.depthFunc(r.LEQUAL);break;case Nl:r.depthFunc(r.EQUAL);break;case Ul:r.depthFunc(r.GEQUAL);break;case Fl:r.depthFunc(r.GREATER);break;case Ol:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}pt=st}},setLocked:function(st){D=st},setClear:function(st){_t!==st&&(_t=st,ut&&(st=1-st),r.clearDepth(st))},reset:function(){D=!1,rt=null,pt=null,_t=null,ut=!1}}}function i(){let D=!1,ut=null,rt=null,pt=null,_t=null,st=null,ct=null,at=null,Nt=null;return{setTest:function(ot){D||(ot?it(r.STENCIL_TEST):mt(r.STENCIL_TEST))},setMask:function(ot){ut!==ot&&!D&&(r.stencilMask(ot),ut=ot)},setFunc:function(ot,Vt,Ct){(rt!==ot||pt!==Vt||_t!==Ct)&&(r.stencilFunc(ot,Vt,Ct),rt=ot,pt=Vt,_t=Ct)},setOp:function(ot,Vt,Ct){(st!==ot||ct!==Vt||at!==Ct)&&(r.stencilOp(ot,Vt,Ct),st=ot,ct=Vt,at=Ct)},setLocked:function(ot){D=ot},setClear:function(ot){Nt!==ot&&(r.clearStencil(ot),Nt=ot)},reset:function(){D=!1,ut=null,rt=null,pt=null,_t=null,st=null,ct=null,at=null,Nt=null}}}let s=new e,a=new n,o=new i,l=new WeakMap,c=new WeakMap,h={},d={},u={},f=new WeakMap,g=[],_=null,p=!1,m=null,M=null,A=null,y=null,S=null,T=null,E=null,v=new $t(0,0,0),w=0,R=!1,N=null,L=null,V=null,I=null,z=null,q=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS),k=!1,et=0,Z=r.getParameter(r.VERSION);Z.indexOf("WebGL")!==-1?(et=parseFloat(/^WebGL (\d)/.exec(Z)[1]),k=et>=1):Z.indexOf("OpenGL ES")!==-1&&(et=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),k=et>=2);let C=null,nt={},Mt=r.getParameter(r.SCISSOR_BOX),bt=r.getParameter(r.VIEWPORT),Bt=new De().fromArray(Mt),Ut=new De().fromArray(bt);function Ht(D,ut,rt,pt){let _t=new Uint8Array(4),st=r.createTexture();r.bindTexture(D,st),r.texParameteri(D,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(D,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let ct=0;ct<rt;ct++)D===r.TEXTURE_3D||D===r.TEXTURE_2D_ARRAY?r.texImage3D(ut,0,r.RGBA,1,1,pt,0,r.RGBA,r.UNSIGNED_BYTE,_t):r.texImage2D(ut+ct,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,_t);return st}let j={};j[r.TEXTURE_2D]=Ht(r.TEXTURE_2D,r.TEXTURE_2D,1),j[r.TEXTURE_CUBE_MAP]=Ht(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),j[r.TEXTURE_2D_ARRAY]=Ht(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),j[r.TEXTURE_3D]=Ht(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),it(r.DEPTH_TEST),a.setFunc(Qs),G(!1),Qt(Fu),it(r.CULL_FACE),Gt(Yi);function it(D){h[D]!==!0&&(r.enable(D),h[D]=!0)}function mt(D){h[D]!==!1&&(r.disable(D),h[D]=!1)}function zt(D,ut){return u[D]!==ut?(r.bindFramebuffer(D,ut),u[D]=ut,D===r.DRAW_FRAMEBUFFER&&(u[r.FRAMEBUFFER]=ut),D===r.FRAMEBUFFER&&(u[r.DRAW_FRAMEBUFFER]=ut),!0):!1}function gt(D,ut){let rt=g,pt=!1;if(D){rt=f.get(ut),rt===void 0&&(rt=[],f.set(ut,rt));let _t=D.textures;if(rt.length!==_t.length||rt[0]!==r.COLOR_ATTACHMENT0){for(let st=0,ct=_t.length;st<ct;st++)rt[st]=r.COLOR_ATTACHMENT0+st;rt.length=_t.length,pt=!0}}else rt[0]!==r.BACK&&(rt[0]=r.BACK,pt=!0);pt&&r.drawBuffers(rt)}function Ft(D){return _!==D?(r.useProgram(D),_=D,!0):!1}let kt={[hs]:r.FUNC_ADD,[bp]:r.FUNC_SUBTRACT,[Tp]:r.FUNC_REVERSE_SUBTRACT};kt[wp]=r.MIN,kt[Ep]=r.MAX;let It={[Ap]:r.ZERO,[Cp]:r.ONE,[Rp]:r.SRC_COLOR,[zu]:r.SRC_ALPHA,[Up]:r.SRC_ALPHA_SATURATE,[Dp]:r.DST_COLOR,[Ip]:r.DST_ALPHA,[Pp]:r.ONE_MINUS_SRC_COLOR,[ku]:r.ONE_MINUS_SRC_ALPHA,[Np]:r.ONE_MINUS_DST_COLOR,[Lp]:r.ONE_MINUS_DST_ALPHA,[Fp]:r.CONSTANT_COLOR,[Op]:r.ONE_MINUS_CONSTANT_COLOR,[Bp]:r.CONSTANT_ALPHA,[zp]:r.ONE_MINUS_CONSTANT_ALPHA};function Gt(D,ut,rt,pt,_t,st,ct,at,Nt,ot){if(D===Yi){p===!0&&(mt(r.BLEND),p=!1);return}if(p===!1&&(it(r.BLEND),p=!0),D!==Mp){if(D!==m||ot!==R){if((M!==hs||S!==hs)&&(r.blendEquation(r.FUNC_ADD),M=hs,S=hs),ot)switch(D){case ca:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Zi:r.blendFunc(r.ONE,r.ONE);break;case Ou:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Bu:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:Yt("WebGLState: Invalid blending: ",D);break}else switch(D){case ca:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Zi:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case Ou:Yt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Bu:Yt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Yt("WebGLState: Invalid blending: ",D);break}A=null,y=null,T=null,E=null,v.set(0,0,0),w=0,m=D,R=ot}return}_t=_t||ut,st=st||rt,ct=ct||pt,(ut!==M||_t!==S)&&(r.blendEquationSeparate(kt[ut],kt[_t]),M=ut,S=_t),(rt!==A||pt!==y||st!==T||ct!==E)&&(r.blendFuncSeparate(It[rt],It[pt],It[st],It[ct]),A=rt,y=pt,T=st,E=ct),(at.equals(v)===!1||Nt!==w)&&(r.blendColor(at.r,at.g,at.b,Nt),v.copy(at),w=Nt),m=D,R=!1}function Kt(D,ut){D.side===qi?mt(r.CULL_FACE):it(r.CULL_FACE);let rt=D.side===Un;ut&&(rt=!rt),G(rt),D.blending===ca&&D.transparent===!1?Gt(Yi):Gt(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),a.setFunc(D.depthFunc),a.setTest(D.depthTest),a.setMask(D.depthWrite),s.setMask(D.colorWrite);let pt=D.stencilWrite;o.setTest(pt),pt&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),ve(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?it(r.SAMPLE_ALPHA_TO_COVERAGE):mt(r.SAMPLE_ALPHA_TO_COVERAGE)}function G(D){N!==D&&(D?r.frontFace(r.CW):r.frontFace(r.CCW),N=D)}function Qt(D){D!==vp?(it(r.CULL_FACE),D!==L&&(D===Fu?r.cullFace(r.BACK):D===yp?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):mt(r.CULL_FACE),L=D}function fe(D){D!==V&&(k&&r.lineWidth(D),V=D)}function ve(D,ut,rt){D?(it(r.POLYGON_OFFSET_FILL),(I!==ut||z!==rt)&&(I=ut,z=rt,a.getReversed()&&(ut=-ut),r.polygonOffset(ut,rt))):mt(r.POLYGON_OFFSET_FILL)}function qt(D){D?it(r.SCISSOR_TEST):mt(r.SCISSOR_TEST)}function ue(D){D===void 0&&(D=r.TEXTURE0+q-1),C!==D&&(r.activeTexture(D),C=D)}function U(D,ut,rt){rt===void 0&&(C===null?rt=r.TEXTURE0+q-1:rt=C);let pt=nt[rt];pt===void 0&&(pt={type:void 0,texture:void 0},nt[rt]=pt),(pt.type!==D||pt.texture!==ut)&&(C!==rt&&(r.activeTexture(rt),C=rt),r.bindTexture(D,ut||j[D]),pt.type=D,pt.texture=ut)}function Se(){let D=nt[C];D!==void 0&&D.type!==void 0&&(r.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function Wt(){try{r.compressedTexImage2D(...arguments)}catch(D){Yt("WebGLState:",D)}}function P(){try{r.compressedTexImage3D(...arguments)}catch(D){Yt("WebGLState:",D)}}function x(){try{r.texSubImage2D(...arguments)}catch(D){Yt("WebGLState:",D)}}function B(){try{r.texSubImage3D(...arguments)}catch(D){Yt("WebGLState:",D)}}function H(){try{r.compressedTexSubImage2D(...arguments)}catch(D){Yt("WebGLState:",D)}}function tt(){try{r.compressedTexSubImage3D(...arguments)}catch(D){Yt("WebGLState:",D)}}function Y(){try{r.texStorage2D(...arguments)}catch(D){Yt("WebGLState:",D)}}function K(){try{r.texStorage3D(...arguments)}catch(D){Yt("WebGLState:",D)}}function J(){try{r.texImage2D(...arguments)}catch(D){Yt("WebGLState:",D)}}function Q(){try{r.texImage3D(...arguments)}catch(D){Yt("WebGLState:",D)}}function lt(D){return d[D]!==void 0?d[D]:r.getParameter(D)}function vt(D,ut){d[D]!==ut&&(r.pixelStorei(D,ut),d[D]=ut)}function dt(D){Bt.equals(D)===!1&&(r.scissor(D.x,D.y,D.z,D.w),Bt.copy(D))}function ft(D){Ut.equals(D)===!1&&(r.viewport(D.x,D.y,D.z,D.w),Ut.copy(D))}function ht(D,ut){let rt=c.get(ut);rt===void 0&&(rt=new WeakMap,c.set(ut,rt));let pt=rt.get(D);pt===void 0&&(pt=r.getUniformBlockIndex(ut,D.name),rt.set(D,pt))}function At(D,ut){let pt=c.get(ut).get(D);l.get(ut)!==pt&&(r.uniformBlockBinding(ut,pt,D.__bindingPointIndex),l.set(ut,pt))}function Ot(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),a.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),r.pixelStorei(r.PACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.BROWSER_DEFAULT_WEBGL),r.pixelStorei(r.PACK_ROW_LENGTH,0),r.pixelStorei(r.PACK_SKIP_PIXELS,0),r.pixelStorei(r.PACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_ROW_LENGTH,0),r.pixelStorei(r.UNPACK_IMAGE_HEIGHT,0),r.pixelStorei(r.UNPACK_SKIP_PIXELS,0),r.pixelStorei(r.UNPACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_SKIP_IMAGES,0),h={},d={},C=null,nt={},u={},f=new WeakMap,g=[],_=null,p=!1,m=null,M=null,A=null,y=null,S=null,T=null,E=null,v=new $t(0,0,0),w=0,R=!1,N=null,L=null,V=null,I=null,z=null,Bt.set(0,0,r.canvas.width,r.canvas.height),Ut.set(0,0,r.canvas.width,r.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:it,disable:mt,bindFramebuffer:zt,drawBuffers:gt,useProgram:Ft,setBlending:Gt,setMaterial:Kt,setFlipSided:G,setCullFace:Qt,setLineWidth:fe,setPolygonOffset:ve,setScissorTest:qt,activeTexture:ue,bindTexture:U,unbindTexture:Se,compressedTexImage2D:Wt,compressedTexImage3D:P,texImage2D:J,texImage3D:Q,pixelStorei:vt,getParameter:lt,updateUBOMapping:ht,uniformBlockBinding:At,texStorage2D:Y,texStorage3D:K,texSubImage2D:x,texSubImage3D:B,compressedTexSubImage2D:H,compressedTexSubImage3D:tt,scissor:dt,viewport:ft,reset:Ot}}function aM(r,t,e,n,i,s,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Lt,h=new WeakMap,d=new Set,u,f=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(P,x){return g?new OffscreenCanvas(P,x):Ja("canvas")}function p(P,x,B){let H=1,tt=Wt(P);if((tt.width>B||tt.height>B)&&(H=B/Math.max(tt.width,tt.height)),H<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){let Y=Math.floor(H*tt.width),K=Math.floor(H*tt.height);u===void 0&&(u=_(Y,K));let J=x?_(Y,K):u;return J.width=Y,J.height=K,J.getContext("2d").drawImage(P,0,0,Y,K),Xt("WebGLRenderer: Texture has been resized from ("+tt.width+"x"+tt.height+") to ("+Y+"x"+K+")."),J}else return"data"in P&&Xt("WebGLRenderer: Image in DataTexture is too big ("+tt.width+"x"+tt.height+")."),P;return P}function m(P){return P.generateMipmaps}function M(P){r.generateMipmap(P)}function A(P){return P.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?r.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function y(P,x,B,H,tt,Y=!1){if(P!==null){if(r[P]!==void 0)return r[P];Xt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let K;H&&(K=t.get("EXT_texture_norm16"),K||Xt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let J=x;if(x===r.RED&&(B===r.FLOAT&&(J=r.R32F),B===r.HALF_FLOAT&&(J=r.R16F),B===r.UNSIGNED_BYTE&&(J=r.R8),B===r.UNSIGNED_SHORT&&K&&(J=K.R16_EXT),B===r.SHORT&&K&&(J=K.R16_SNORM_EXT)),x===r.RED_INTEGER&&(B===r.UNSIGNED_BYTE&&(J=r.R8UI),B===r.UNSIGNED_SHORT&&(J=r.R16UI),B===r.UNSIGNED_INT&&(J=r.R32UI),B===r.BYTE&&(J=r.R8I),B===r.SHORT&&(J=r.R16I),B===r.INT&&(J=r.R32I)),x===r.RG&&(B===r.FLOAT&&(J=r.RG32F),B===r.HALF_FLOAT&&(J=r.RG16F),B===r.UNSIGNED_BYTE&&(J=r.RG8),B===r.UNSIGNED_SHORT&&K&&(J=K.RG16_EXT),B===r.SHORT&&K&&(J=K.RG16_SNORM_EXT)),x===r.RG_INTEGER&&(B===r.UNSIGNED_BYTE&&(J=r.RG8UI),B===r.UNSIGNED_SHORT&&(J=r.RG16UI),B===r.UNSIGNED_INT&&(J=r.RG32UI),B===r.BYTE&&(J=r.RG8I),B===r.SHORT&&(J=r.RG16I),B===r.INT&&(J=r.RG32I)),x===r.RGB_INTEGER&&(B===r.UNSIGNED_BYTE&&(J=r.RGB8UI),B===r.UNSIGNED_SHORT&&(J=r.RGB16UI),B===r.UNSIGNED_INT&&(J=r.RGB32UI),B===r.BYTE&&(J=r.RGB8I),B===r.SHORT&&(J=r.RGB16I),B===r.INT&&(J=r.RGB32I)),x===r.RGBA_INTEGER&&(B===r.UNSIGNED_BYTE&&(J=r.RGBA8UI),B===r.UNSIGNED_SHORT&&(J=r.RGBA16UI),B===r.UNSIGNED_INT&&(J=r.RGBA32UI),B===r.BYTE&&(J=r.RGBA8I),B===r.SHORT&&(J=r.RGBA16I),B===r.INT&&(J=r.RGBA32I)),x===r.RGB&&(B===r.UNSIGNED_SHORT&&K&&(J=K.RGB16_EXT),B===r.SHORT&&K&&(J=K.RGB16_SNORM_EXT),B===r.UNSIGNED_INT_5_9_9_9_REV&&(J=r.RGB9_E5),B===r.UNSIGNED_INT_10F_11F_11F_REV&&(J=r.R11F_G11F_B10F)),x===r.RGBA){let Q=Y?Za:le.getTransfer(tt);B===r.FLOAT&&(J=r.RGBA32F),B===r.HALF_FLOAT&&(J=r.RGBA16F),B===r.UNSIGNED_BYTE&&(J=Q===me?r.SRGB8_ALPHA8:r.RGBA8),B===r.UNSIGNED_SHORT&&K&&(J=K.RGBA16_EXT),B===r.SHORT&&K&&(J=K.RGBA16_SNORM_EXT),B===r.UNSIGNED_SHORT_4_4_4_4&&(J=r.RGBA4),B===r.UNSIGNED_SHORT_5_5_5_1&&(J=r.RGB5_A1)}return(J===r.R16F||J===r.R32F||J===r.RG16F||J===r.RG32F||J===r.RGBA16F||J===r.RGBA32F)&&t.get("EXT_color_buffer_float"),J}function S(P,x){let B;return P?x===null||x===Ni||x===ua?B=r.DEPTH24_STENCIL8:x===vi?B=r.DEPTH32F_STENCIL8:x===ha&&(B=r.DEPTH24_STENCIL8,Xt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Ni||x===ua?B=r.DEPTH_COMPONENT24:x===vi?B=r.DEPTH_COMPONENT32F:x===ha&&(B=r.DEPTH_COMPONENT16),B}function T(P,x){return m(P)===!0||P.isFramebufferTexture&&P.minFilter!==ln&&P.minFilter!==dn?Math.log2(Math.max(x.width,x.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?x.mipmaps.length:1}function E(P){let x=P.target;x.removeEventListener("dispose",E),w(x),x.isVideoTexture&&h.delete(x),x.isHTMLTexture&&d.delete(x)}function v(P){let x=P.target;x.removeEventListener("dispose",v),N(x)}function w(P){let x=n.get(P);if(x.__webglInit===void 0)return;let B=P.source,H=f.get(B);if(H){let tt=H[x.__cacheKey];tt.usedTimes--,tt.usedTimes===0&&R(P),Object.keys(H).length===0&&f.delete(B)}n.remove(P)}function R(P){let x=n.get(P);r.deleteTexture(x.__webglTexture);let B=P.source,H=f.get(B);delete H[x.__cacheKey],a.memory.textures--}function N(P){let x=n.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),n.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let H=0;H<6;H++){if(Array.isArray(x.__webglFramebuffer[H]))for(let tt=0;tt<x.__webglFramebuffer[H].length;tt++)r.deleteFramebuffer(x.__webglFramebuffer[H][tt]);else r.deleteFramebuffer(x.__webglFramebuffer[H]);x.__webglDepthbuffer&&r.deleteRenderbuffer(x.__webglDepthbuffer[H])}else{if(Array.isArray(x.__webglFramebuffer))for(let H=0;H<x.__webglFramebuffer.length;H++)r.deleteFramebuffer(x.__webglFramebuffer[H]);else r.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&r.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&r.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let H=0;H<x.__webglColorRenderbuffer.length;H++)x.__webglColorRenderbuffer[H]&&r.deleteRenderbuffer(x.__webglColorRenderbuffer[H]);x.__webglDepthRenderbuffer&&r.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let B=P.textures;for(let H=0,tt=B.length;H<tt;H++){let Y=n.get(B[H]);Y.__webglTexture&&(r.deleteTexture(Y.__webglTexture),a.memory.textures--),n.remove(B[H])}n.remove(P)}let L=0;function V(){L=0}function I(){return L}function z(P){L=P}function q(){let P=L;return P>=i.maxTextures&&Xt("WebGLTextures: Trying to use "+(P+1)+" texture units while this GPU supports only "+i.maxTextures),L+=1,P}function k(P){let x=[];return x.push(P.wrapS),x.push(P.wrapT),x.push(P.wrapR||0),x.push(P.magFilter),x.push(P.minFilter),x.push(P.anisotropy),x.push(P.internalFormat),x.push(P.format),x.push(P.type),x.push(P.generateMipmaps),x.push(P.premultiplyAlpha),x.push(P.flipY),x.push(P.unpackAlignment),x.push(P.colorSpace),x.join()}function et(P,x){let B=n.get(P);if(P.isVideoTexture&&U(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&B.__version!==P.version){let H=P.image;if(H===null)Xt("WebGLRenderer: Texture marked for update but no image data found.");else if(H.complete===!1)Xt("WebGLRenderer: Texture marked for update but image is incomplete");else{mt(B,P,x);return}}else P.isExternalTexture&&(B.__webglTexture=P.sourceTexture?P.sourceTexture:null);e.bindTexture(r.TEXTURE_2D,B.__webglTexture,r.TEXTURE0+x)}function Z(P,x){let B=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&B.__version!==P.version){mt(B,P,x);return}else P.isExternalTexture&&(B.__webglTexture=P.sourceTexture?P.sourceTexture:null);e.bindTexture(r.TEXTURE_2D_ARRAY,B.__webglTexture,r.TEXTURE0+x)}function C(P,x){let B=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&B.__version!==P.version){mt(B,P,x);return}e.bindTexture(r.TEXTURE_3D,B.__webglTexture,r.TEXTURE0+x)}function nt(P,x){let B=n.get(P);if(P.isCubeDepthTexture!==!0&&P.version>0&&B.__version!==P.version){zt(B,P,x);return}e.bindTexture(r.TEXTURE_CUBE_MAP,B.__webglTexture,r.TEXTURE0+x)}let Mt={[Bl]:r.REPEAT,[Vi]:r.CLAMP_TO_EDGE,[zl]:r.MIRRORED_REPEAT},bt={[ln]:r.NEAREST,[Gp]:r.NEAREST_MIPMAP_NEAREST,[yo]:r.NEAREST_MIPMAP_LINEAR,[dn]:r.LINEAR,[_c]:r.LINEAR_MIPMAP_NEAREST,[Br]:r.LINEAR_MIPMAP_LINEAR},Bt={[qp]:r.NEVER,[Kp]:r.ALWAYS,[Yp]:r.LESS,[nh]:r.LEQUAL,[Zp]:r.EQUAL,[ih]:r.GEQUAL,[Jp]:r.GREATER,[$p]:r.NOTEQUAL};function Ut(P,x){if(x.type===vi&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===dn||x.magFilter===_c||x.magFilter===yo||x.magFilter===Br||x.minFilter===dn||x.minFilter===_c||x.minFilter===yo||x.minFilter===Br)&&Xt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(P,r.TEXTURE_WRAP_S,Mt[x.wrapS]),r.texParameteri(P,r.TEXTURE_WRAP_T,Mt[x.wrapT]),(P===r.TEXTURE_3D||P===r.TEXTURE_2D_ARRAY)&&r.texParameteri(P,r.TEXTURE_WRAP_R,Mt[x.wrapR]),r.texParameteri(P,r.TEXTURE_MAG_FILTER,bt[x.magFilter]),r.texParameteri(P,r.TEXTURE_MIN_FILTER,bt[x.minFilter]),x.compareFunction&&(r.texParameteri(P,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(P,r.TEXTURE_COMPARE_FUNC,Bt[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===ln||x.minFilter!==yo&&x.minFilter!==Br||x.type===vi&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){let B=t.get("EXT_texture_filter_anisotropic");r.texParameterf(P,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,i.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function Ht(P,x){let B=!1;P.__webglInit===void 0&&(P.__webglInit=!0,x.addEventListener("dispose",E));let H=x.source,tt=f.get(H);tt===void 0&&(tt={},f.set(H,tt));let Y=k(x);if(Y!==P.__cacheKey){tt[Y]===void 0&&(tt[Y]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,B=!0),tt[Y].usedTimes++;let K=tt[P.__cacheKey];K!==void 0&&(tt[P.__cacheKey].usedTimes--,K.usedTimes===0&&R(x)),P.__cacheKey=Y,P.__webglTexture=tt[Y].texture}return B}function j(P,x,B){return Math.floor(Math.floor(P/B)/x)}function it(P,x,B,H){let Y=P.updateRanges;if(Y.length===0)e.texSubImage2D(r.TEXTURE_2D,0,0,0,x.width,x.height,B,H,x.data);else{Y.sort((vt,dt)=>vt.start-dt.start);let K=0;for(let vt=1;vt<Y.length;vt++){let dt=Y[K],ft=Y[vt],ht=dt.start+dt.count,At=j(ft.start,x.width,4),Ot=j(dt.start,x.width,4);ft.start<=ht+1&&At===Ot&&j(ft.start+ft.count-1,x.width,4)===At?dt.count=Math.max(dt.count,ft.start+ft.count-dt.start):(++K,Y[K]=ft)}Y.length=K+1;let J=e.getParameter(r.UNPACK_ROW_LENGTH),Q=e.getParameter(r.UNPACK_SKIP_PIXELS),lt=e.getParameter(r.UNPACK_SKIP_ROWS);e.pixelStorei(r.UNPACK_ROW_LENGTH,x.width);for(let vt=0,dt=Y.length;vt<dt;vt++){let ft=Y[vt],ht=Math.floor(ft.start/4),At=Math.ceil(ft.count/4),Ot=ht%x.width,D=Math.floor(ht/x.width),ut=At,rt=1;e.pixelStorei(r.UNPACK_SKIP_PIXELS,Ot),e.pixelStorei(r.UNPACK_SKIP_ROWS,D),e.texSubImage2D(r.TEXTURE_2D,0,Ot,D,ut,rt,B,H,x.data)}P.clearUpdateRanges(),e.pixelStorei(r.UNPACK_ROW_LENGTH,J),e.pixelStorei(r.UNPACK_SKIP_PIXELS,Q),e.pixelStorei(r.UNPACK_SKIP_ROWS,lt)}}function mt(P,x,B){let H=r.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(H=r.TEXTURE_2D_ARRAY),x.isData3DTexture&&(H=r.TEXTURE_3D);let tt=Ht(P,x),Y=x.source;e.bindTexture(H,P.__webglTexture,r.TEXTURE0+B);let K=n.get(Y);if(Y.version!==K.__version||tt===!0){if(e.activeTexture(r.TEXTURE0+B),(typeof ImageBitmap<"u"&&x.image instanceof ImageBitmap)===!1){let rt=le.getPrimaries(le.workingColorSpace),pt=x.colorSpace===hr?null:le.getPrimaries(x.colorSpace),_t=x.colorSpace===hr||rt===pt?r.NONE:r.BROWSER_DEFAULT_WEBGL;e.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,x.flipY),e.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),e.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,_t)}e.pixelStorei(r.UNPACK_ALIGNMENT,x.unpackAlignment);let Q=p(x.image,!1,i.maxTextureSize);Q=Se(x,Q);let lt=s.convert(x.format,x.colorSpace),vt=s.convert(x.type),dt=y(x.internalFormat,lt,vt,x.normalized,x.colorSpace,x.isVideoTexture);Ut(H,x);let ft,ht=x.mipmaps,At=x.isVideoTexture!==!0,Ot=K.__version===void 0||tt===!0,D=Y.dataReady,ut=T(x,Q);if(x.isDepthTexture)dt=S(x.format===zr,x.type),Ot&&(At?e.texStorage2D(r.TEXTURE_2D,1,dt,Q.width,Q.height):e.texImage2D(r.TEXTURE_2D,0,dt,Q.width,Q.height,0,lt,vt,null));else if(x.isDataTexture)if(ht.length>0){At&&Ot&&e.texStorage2D(r.TEXTURE_2D,ut,dt,ht[0].width,ht[0].height);for(let rt=0,pt=ht.length;rt<pt;rt++)ft=ht[rt],At?D&&e.texSubImage2D(r.TEXTURE_2D,rt,0,0,ft.width,ft.height,lt,vt,ft.data):e.texImage2D(r.TEXTURE_2D,rt,dt,ft.width,ft.height,0,lt,vt,ft.data);x.generateMipmaps=!1}else At?(Ot&&e.texStorage2D(r.TEXTURE_2D,ut,dt,Q.width,Q.height),D&&it(x,Q,lt,vt)):e.texImage2D(r.TEXTURE_2D,0,dt,Q.width,Q.height,0,lt,vt,Q.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){At&&Ot&&e.texStorage3D(r.TEXTURE_2D_ARRAY,ut,dt,ht[0].width,ht[0].height,Q.depth);for(let rt=0,pt=ht.length;rt<pt;rt++)if(ft=ht[rt],x.format!==yi)if(lt!==null)if(At){if(D)if(x.layerUpdates.size>0){let _t=lf(ft.width,ft.height,x.format,x.type);for(let st of x.layerUpdates){let ct=ft.data.subarray(st*_t/ft.data.BYTES_PER_ELEMENT,(st+1)*_t/ft.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,rt,0,0,st,ft.width,ft.height,1,lt,ct)}}else e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,rt,0,0,0,ft.width,ft.height,Q.depth,lt,ft.data)}else e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,rt,dt,ft.width,ft.height,Q.depth,0,ft.data,0,0);else Xt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else At?D&&e.texSubImage3D(r.TEXTURE_2D_ARRAY,rt,0,0,0,ft.width,ft.height,Q.depth,lt,vt,ft.data):e.texImage3D(r.TEXTURE_2D_ARRAY,rt,dt,ft.width,ft.height,Q.depth,0,lt,vt,ft.data);x.layerUpdates.size>0&&x.clearLayerUpdates()}else{At&&Ot&&e.texStorage2D(r.TEXTURE_2D,ut,dt,ht[0].width,ht[0].height);for(let rt=0,pt=ht.length;rt<pt;rt++)ft=ht[rt],x.format!==yi?lt!==null?At?D&&e.compressedTexSubImage2D(r.TEXTURE_2D,rt,0,0,ft.width,ft.height,lt,ft.data):e.compressedTexImage2D(r.TEXTURE_2D,rt,dt,ft.width,ft.height,0,ft.data):Xt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):At?D&&e.texSubImage2D(r.TEXTURE_2D,rt,0,0,ft.width,ft.height,lt,vt,ft.data):e.texImage2D(r.TEXTURE_2D,rt,dt,ft.width,ft.height,0,lt,vt,ft.data)}else if(x.isDataArrayTexture)if(At){if(Ot&&e.texStorage3D(r.TEXTURE_2D_ARRAY,ut,dt,Q.width,Q.height,Q.depth),D)if(x.layerUpdates.size>0){let rt=lf(Q.width,Q.height,x.format,x.type);for(let pt of x.layerUpdates){let _t=Q.data.subarray(pt*rt/Q.data.BYTES_PER_ELEMENT,(pt+1)*rt/Q.data.BYTES_PER_ELEMENT);e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,pt,Q.width,Q.height,1,lt,vt,_t)}x.clearLayerUpdates()}else e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,lt,vt,Q.data)}else e.texImage3D(r.TEXTURE_2D_ARRAY,0,dt,Q.width,Q.height,Q.depth,0,lt,vt,Q.data);else if(x.isData3DTexture)At?(Ot&&e.texStorage3D(r.TEXTURE_3D,ut,dt,Q.width,Q.height,Q.depth),D&&e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,lt,vt,Q.data)):e.texImage3D(r.TEXTURE_3D,0,dt,Q.width,Q.height,Q.depth,0,lt,vt,Q.data);else if(x.isFramebufferTexture){if(Ot)if(At)e.texStorage2D(r.TEXTURE_2D,ut,dt,Q.width,Q.height);else{let rt=Q.width,pt=Q.height;for(let _t=0;_t<ut;_t++)e.texImage2D(r.TEXTURE_2D,_t,dt,rt,pt,0,lt,vt,null),rt>>=1,pt>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in r){let rt=r.canvas;if(rt.hasAttribute("layoutsubtree")||rt.setAttribute("layoutsubtree","true"),Q.parentNode!==rt){rt.appendChild(Q),d.add(x),rt.onpaint=pt=>{let _t=pt.changedElements;for(let st of d)_t.includes(st.image)&&(st.needsUpdate=!0)},rt.requestPaint();return}if(r.texElementImage2D.length===3)r.texElementImage2D(r.TEXTURE_2D,r.RGBA8,Q);else{let _t=r.RGBA,st=r.RGBA,ct=r.UNSIGNED_BYTE;r.texElementImage2D(r.TEXTURE_2D,0,_t,st,ct,Q)}r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}}else if(ht.length>0){if(At&&Ot){let rt=Wt(ht[0]);e.texStorage2D(r.TEXTURE_2D,ut,dt,rt.width,rt.height)}for(let rt=0,pt=ht.length;rt<pt;rt++)ft=ht[rt],At?D&&e.texSubImage2D(r.TEXTURE_2D,rt,0,0,lt,vt,ft):e.texImage2D(r.TEXTURE_2D,rt,dt,lt,vt,ft);x.generateMipmaps=!1}else if(At){if(Ot){let rt=Wt(Q);e.texStorage2D(r.TEXTURE_2D,ut,dt,rt.width,rt.height)}D&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,lt,vt,Q)}else e.texImage2D(r.TEXTURE_2D,0,dt,lt,vt,Q);m(x)&&M(H),K.__version=Y.version,x.onUpdate&&x.onUpdate(x)}P.__version=x.version}function zt(P,x,B){if(x.image.length!==6)return;let H=Ht(P,x),tt=x.source;e.bindTexture(r.TEXTURE_CUBE_MAP,P.__webglTexture,r.TEXTURE0+B);let Y=n.get(tt);if(tt.version!==Y.__version||H===!0){e.activeTexture(r.TEXTURE0+B);let K=le.getPrimaries(le.workingColorSpace),J=x.colorSpace===hr?null:le.getPrimaries(x.colorSpace),Q=x.colorSpace===hr||K===J?r.NONE:r.BROWSER_DEFAULT_WEBGL;e.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,x.flipY),e.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),e.pixelStorei(r.UNPACK_ALIGNMENT,x.unpackAlignment),e.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Q);let lt=x.isCompressedTexture||x.image[0].isCompressedTexture,vt=x.image[0]&&x.image[0].isDataTexture,dt=[];for(let st=0;st<6;st++)!lt&&!vt?dt[st]=p(x.image[st],!0,i.maxCubemapSize):dt[st]=vt?x.image[st].image:x.image[st],dt[st]=Se(x,dt[st]);let ft=dt[0],ht=s.convert(x.format,x.colorSpace),At=s.convert(x.type),Ot=y(x.internalFormat,ht,At,x.normalized,x.colorSpace),D=x.isVideoTexture!==!0,ut=Y.__version===void 0||H===!0,rt=tt.dataReady,pt=T(x,ft);Ut(r.TEXTURE_CUBE_MAP,x);let _t;if(lt){D&&ut&&e.texStorage2D(r.TEXTURE_CUBE_MAP,pt,Ot,ft.width,ft.height);for(let st=0;st<6;st++){_t=dt[st].mipmaps;for(let ct=0;ct<_t.length;ct++){let at=_t[ct];x.format!==yi?ht!==null?D?rt&&e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+st,ct,0,0,at.width,at.height,ht,at.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+st,ct,Ot,at.width,at.height,0,at.data):Xt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):D?rt&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+st,ct,0,0,at.width,at.height,ht,At,at.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+st,ct,Ot,at.width,at.height,0,ht,At,at.data)}}}else{if(_t=x.mipmaps,D&&ut){_t.length>0&&pt++;let st=Wt(dt[0]);e.texStorage2D(r.TEXTURE_CUBE_MAP,pt,Ot,st.width,st.height)}for(let st=0;st<6;st++)if(vt){D?rt&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,dt[st].width,dt[st].height,ht,At,dt[st].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,Ot,dt[st].width,dt[st].height,0,ht,At,dt[st].data);for(let ct=0;ct<_t.length;ct++){let Nt=_t[ct].image[st].image;D?rt&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+st,ct+1,0,0,Nt.width,Nt.height,ht,At,Nt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+st,ct+1,Ot,Nt.width,Nt.height,0,ht,At,Nt.data)}}else{D?rt&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,ht,At,dt[st]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,Ot,ht,At,dt[st]);for(let ct=0;ct<_t.length;ct++){let at=_t[ct];D?rt&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+st,ct+1,0,0,ht,At,at.image[st]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+st,ct+1,Ot,ht,At,at.image[st])}}}m(x)&&M(r.TEXTURE_CUBE_MAP),Y.__version=tt.version,x.onUpdate&&x.onUpdate(x)}P.__version=x.version}function gt(P,x,B,H,tt,Y){let K=s.convert(B.format,B.colorSpace),J=s.convert(B.type),Q=y(B.internalFormat,K,J,B.normalized,B.colorSpace),lt=n.get(x),vt=n.get(B);if(vt.__renderTarget=x,!lt.__hasExternalTextures){let dt=Math.max(1,x.width>>Y),ft=Math.max(1,x.height>>Y);tt===r.TEXTURE_3D||tt===r.TEXTURE_2D_ARRAY?e.texImage3D(tt,Y,Q,dt,ft,x.depth,0,K,J,null):e.texImage2D(tt,Y,Q,dt,ft,0,K,J,null)}e.bindFramebuffer(r.FRAMEBUFFER,P),ue(x)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,H,tt,vt.__webglTexture,0,qt(x)):(tt===r.TEXTURE_2D||tt>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&tt<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,H,tt,vt.__webglTexture,Y),e.bindFramebuffer(r.FRAMEBUFFER,null)}function Ft(P,x,B){if(r.bindRenderbuffer(r.RENDERBUFFER,P),x.depthBuffer){let H=x.depthTexture,tt=H&&H.isDepthTexture?H.type:null,Y=S(x.stencilBuffer,tt),K=x.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;ue(x)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,qt(x),Y,x.width,x.height):B?r.renderbufferStorageMultisample(r.RENDERBUFFER,qt(x),Y,x.width,x.height):r.renderbufferStorage(r.RENDERBUFFER,Y,x.width,x.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,K,r.RENDERBUFFER,P)}else{let H=x.textures;for(let tt=0;tt<H.length;tt++){let Y=H[tt],K=s.convert(Y.format,Y.colorSpace),J=s.convert(Y.type),Q=y(Y.internalFormat,K,J,Y.normalized,Y.colorSpace);ue(x)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,qt(x),Q,x.width,x.height):B?r.renderbufferStorageMultisample(r.RENDERBUFFER,qt(x),Q,x.width,x.height):r.renderbufferStorage(r.RENDERBUFFER,Q,x.width,x.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function kt(P,x,B){let H=x.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(r.FRAMEBUFFER,P),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let tt=n.get(x.depthTexture);if(tt.__renderTarget=x,(!tt.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),H){if(tt.__webglInit===void 0&&(tt.__webglInit=!0,x.depthTexture.addEventListener("dispose",E)),tt.__webglTexture===void 0){tt.__webglTexture=r.createTexture(),e.bindTexture(r.TEXTURE_CUBE_MAP,tt.__webglTexture),Ut(r.TEXTURE_CUBE_MAP,x.depthTexture);let lt=s.convert(x.depthTexture.format),vt=s.convert(x.depthTexture.type),dt;x.depthTexture.format===Gi?dt=r.DEPTH_COMPONENT24:x.depthTexture.format===zr&&(dt=r.DEPTH24_STENCIL8);for(let ft=0;ft<6;ft++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,dt,x.width,x.height,0,lt,vt,null)}}else et(x.depthTexture,0);let Y=tt.__webglTexture,K=qt(x),J=H?r.TEXTURE_CUBE_MAP_POSITIVE_X+B:r.TEXTURE_2D,Q=x.depthTexture.format===zr?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(x.depthTexture.format===Gi)ue(x)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Q,J,Y,0,K):r.framebufferTexture2D(r.FRAMEBUFFER,Q,J,Y,0);else if(x.depthTexture.format===zr)ue(x)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Q,J,Y,0,K):r.framebufferTexture2D(r.FRAMEBUFFER,Q,J,Y,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function It(P){let x=n.get(P),B=P.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==P.depthTexture){let H=P.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),H){let tt=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,H.removeEventListener("dispose",tt)};H.addEventListener("dispose",tt),x.__depthDisposeCallback=tt}x.__boundDepthTexture=H}if(P.depthTexture&&!x.__autoAllocateDepthBuffer)if(B)for(let H=0;H<6;H++)kt(x.__webglFramebuffer[H],P,H);else{let H=P.texture.mipmaps;H&&H.length>0?kt(x.__webglFramebuffer[0],P,0):kt(x.__webglFramebuffer,P,0)}else if(B){x.__webglDepthbuffer=[];for(let H=0;H<6;H++)if(e.bindFramebuffer(r.FRAMEBUFFER,x.__webglFramebuffer[H]),x.__webglDepthbuffer[H]===void 0)x.__webglDepthbuffer[H]=r.createRenderbuffer(),Ft(x.__webglDepthbuffer[H],P,!1);else{let tt=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Y=x.__webglDepthbuffer[H];r.bindRenderbuffer(r.RENDERBUFFER,Y),r.framebufferRenderbuffer(r.FRAMEBUFFER,tt,r.RENDERBUFFER,Y)}}else{let H=P.texture.mipmaps;if(H&&H.length>0?e.bindFramebuffer(r.FRAMEBUFFER,x.__webglFramebuffer[0]):e.bindFramebuffer(r.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=r.createRenderbuffer(),Ft(x.__webglDepthbuffer,P,!1);else{let tt=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Y=x.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,Y),r.framebufferRenderbuffer(r.FRAMEBUFFER,tt,r.RENDERBUFFER,Y)}}e.bindFramebuffer(r.FRAMEBUFFER,null)}function Gt(P,x,B){let H=n.get(P);x!==void 0&&gt(H.__webglFramebuffer,P,P.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),B!==void 0&&It(P)}function Kt(P){let x=P.texture,B=n.get(P),H=n.get(x);P.addEventListener("dispose",v);let tt=P.textures,Y=P.isWebGLCubeRenderTarget===!0,K=tt.length>1;if(K||(H.__webglTexture===void 0&&(H.__webglTexture=r.createTexture()),H.__version=x.version,a.memory.textures++),Y){B.__webglFramebuffer=[];for(let J=0;J<6;J++)if(x.mipmaps&&x.mipmaps.length>0){B.__webglFramebuffer[J]=[];for(let Q=0;Q<x.mipmaps.length;Q++)B.__webglFramebuffer[J][Q]=r.createFramebuffer()}else B.__webglFramebuffer[J]=r.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){B.__webglFramebuffer=[];for(let J=0;J<x.mipmaps.length;J++)B.__webglFramebuffer[J]=r.createFramebuffer()}else B.__webglFramebuffer=r.createFramebuffer();if(K)for(let J=0,Q=tt.length;J<Q;J++){let lt=n.get(tt[J]);lt.__webglTexture===void 0&&(lt.__webglTexture=r.createTexture(),a.memory.textures++)}if(P.samples>0&&ue(P)===!1){B.__webglMultisampledFramebuffer=r.createFramebuffer(),B.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let J=0;J<tt.length;J++){let Q=tt[J];B.__webglColorRenderbuffer[J]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,B.__webglColorRenderbuffer[J]);let lt=s.convert(Q.format,Q.colorSpace),vt=s.convert(Q.type),dt=y(Q.internalFormat,lt,vt,Q.normalized,Q.colorSpace,P.isXRRenderTarget===!0),ft=qt(P);r.renderbufferStorageMultisample(r.RENDERBUFFER,ft,dt,P.width,P.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+J,r.RENDERBUFFER,B.__webglColorRenderbuffer[J])}r.bindRenderbuffer(r.RENDERBUFFER,null),P.depthBuffer&&(B.__webglDepthRenderbuffer=r.createRenderbuffer(),Ft(B.__webglDepthRenderbuffer,P,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if(Y){e.bindTexture(r.TEXTURE_CUBE_MAP,H.__webglTexture),Ut(r.TEXTURE_CUBE_MAP,x);for(let J=0;J<6;J++)if(x.mipmaps&&x.mipmaps.length>0)for(let Q=0;Q<x.mipmaps.length;Q++)gt(B.__webglFramebuffer[J][Q],P,x,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+J,Q);else gt(B.__webglFramebuffer[J],P,x,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+J,0);m(x)&&M(r.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(K){for(let J=0,Q=tt.length;J<Q;J++){let lt=tt[J],vt=n.get(lt),dt=r.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(dt=P.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(dt,vt.__webglTexture),Ut(dt,lt),gt(B.__webglFramebuffer,P,lt,r.COLOR_ATTACHMENT0+J,dt,0),m(lt)&&M(dt)}e.unbindTexture()}else{let J=r.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(J=P.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(J,H.__webglTexture),Ut(J,x),x.mipmaps&&x.mipmaps.length>0)for(let Q=0;Q<x.mipmaps.length;Q++)gt(B.__webglFramebuffer[Q],P,x,r.COLOR_ATTACHMENT0,J,Q);else gt(B.__webglFramebuffer,P,x,r.COLOR_ATTACHMENT0,J,0);m(x)&&M(J),e.unbindTexture()}P.depthBuffer&&It(P)}function G(P){let x=P.textures;for(let B=0,H=x.length;B<H;B++){let tt=x[B];if(m(tt)){let Y=A(P),K=n.get(tt).__webglTexture;e.bindTexture(Y,K),M(Y),e.unbindTexture()}}}let Qt=[],fe=[];function ve(P){if(P.samples>0){if(ue(P)===!1){let x=P.textures,B=P.width,H=P.height,tt=r.COLOR_BUFFER_BIT,Y=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,K=n.get(P),J=x.length>1;if(J)for(let lt=0;lt<x.length;lt++)e.bindFramebuffer(r.FRAMEBUFFER,K.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+lt,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,K.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+lt,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,K.__webglMultisampledFramebuffer);let Q=P.texture.mipmaps;Q&&Q.length>0?e.bindFramebuffer(r.DRAW_FRAMEBUFFER,K.__webglFramebuffer[0]):e.bindFramebuffer(r.DRAW_FRAMEBUFFER,K.__webglFramebuffer);for(let lt=0;lt<x.length;lt++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(tt|=r.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(tt|=r.STENCIL_BUFFER_BIT)),J){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,K.__webglColorRenderbuffer[lt]);let vt=n.get(x[lt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,vt,0)}r.blitFramebuffer(0,0,B,H,0,0,B,H,tt,r.NEAREST),l===!0&&(Qt.length=0,fe.length=0,Qt.push(r.COLOR_ATTACHMENT0+lt),P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&(Qt.push(Y),fe.push(Y),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,fe)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Qt))}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),J)for(let lt=0;lt<x.length;lt++){e.bindFramebuffer(r.FRAMEBUFFER,K.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+lt,r.RENDERBUFFER,K.__webglColorRenderbuffer[lt]);let vt=n.get(x[lt]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,K.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+lt,r.TEXTURE_2D,vt,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,K.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&l){let x=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[x])}}}function qt(P){return Math.min(i.maxSamples,P.samples)}function ue(P){let x=n.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function U(P){let x=a.render.frame;h.get(P)!==x&&(h.set(P,x),P.update())}function Se(P,x){let B=P.colorSpace,H=P.format,tt=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||B!==Ya&&B!==hr&&(le.getTransfer(B)===me?(H!==yi||tt!==qn)&&Xt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Yt("WebGLTextures: Unsupported texture color space:",B)),x}function Wt(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=q,this.resetTextureUnits=V,this.getTextureUnits=I,this.setTextureUnits=z,this.setTexture2D=et,this.setTexture2DArray=Z,this.setTexture3D=C,this.setTextureCube=nt,this.rebindTextures=Gt,this.setupRenderTarget=Kt,this.updateRenderTargetMipmap=G,this.updateMultisampleRenderTarget=ve,this.setupDepthRenderbuffer=It,this.setupFrameBufferTexture=gt,this.useMultisampledRTT=ue,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function oM(r,t){function e(n,i=hr){let s,a=le.getTransfer(i);if(n===qn)return r.UNSIGNED_BYTE;if(n===vc)return r.UNSIGNED_SHORT_4_4_4_4;if(n===yc)return r.UNSIGNED_SHORT_5_5_5_1;if(n===Ku)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===Qu)return r.UNSIGNED_INT_10F_11F_11F_REV;if(n===Ju)return r.BYTE;if(n===$u)return r.SHORT;if(n===ha)return r.UNSIGNED_SHORT;if(n===xc)return r.INT;if(n===Ni)return r.UNSIGNED_INT;if(n===vi)return r.FLOAT;if(n===Ui)return r.HALF_FLOAT;if(n===ju)return r.ALPHA;if(n===tf)return r.RGB;if(n===yi)return r.RGBA;if(n===Gi)return r.DEPTH_COMPONENT;if(n===zr)return r.DEPTH_STENCIL;if(n===Sc)return r.RED;if(n===Mc)return r.RED_INTEGER;if(n===kr)return r.RG;if(n===bc)return r.RG_INTEGER;if(n===Tc)return r.RGBA_INTEGER;if(n===So||n===Mo||n===bo||n===To)if(a===me)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===So)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Mo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===bo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===To)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===So)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Mo)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===bo)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===To)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===wc||n===Ec||n===Ac||n===Cc)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===wc)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ec)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ac)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Cc)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Rc||n===Pc||n===Ic||n===Lc||n===Dc||n===wo||n===Nc)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Rc||n===Pc)return a===me?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Ic)return a===me?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===Lc)return s.COMPRESSED_R11_EAC;if(n===Dc)return s.COMPRESSED_SIGNED_R11_EAC;if(n===wo)return s.COMPRESSED_RG11_EAC;if(n===Nc)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Uc||n===Fc||n===Oc||n===Bc||n===zc||n===kc||n===Vc||n===Gc||n===Hc||n===Wc||n===Xc||n===qc||n===Yc||n===Zc)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Uc)return a===me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Fc)return a===me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Oc)return a===me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Bc)return a===me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===zc)return a===me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===kc)return a===me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Vc)return a===me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Gc)return a===me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Hc)return a===me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Wc)return a===me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Xc)return a===me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===qc)return a===me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Yc)return a===me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Zc)return a===me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Jc||n===$c||n===Kc)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===Jc)return a===me?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===$c)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Kc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Qc||n===jc||n===Eo||n===th)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===Qc)return s.COMPRESSED_RED_RGTC1_EXT;if(n===jc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Eo)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===th)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ua?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:e}}var lM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,cM=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Af=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new oo(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new ii({vertexShader:lM,fragmentShader:cM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Te(new ni(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Cf=class extends Hi{constructor(t,e){super();let n=this,i=null,s=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,g=null,_=typeof XRWebGLBinding<"u",p=new Af,m={},M=e.getContextAttributes(),A=null,y=null,S=[],T=[],E=new Lt,v=null,w=null,R=new an;R.viewport=new De;let N=new an;N.viewport=new De;let L=[R,N],V=new dc,I=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let it=S[j];return it===void 0&&(it=new na,S[j]=it),it.getTargetRaySpace()},this.getControllerGrip=function(j){let it=S[j];return it===void 0&&(it=new na,S[j]=it),it.getGripSpace()},this.getHand=function(j){let it=S[j];return it===void 0&&(it=new na,S[j]=it),it.getHandSpace()};function q(j){let it=T.indexOf(j.inputSource);if(it===-1)return;let mt=S[it];mt!==void 0&&(mt.update(j.inputSource,j.frame,c||a),mt.dispatchEvent({type:j.type,data:j.inputSource}))}function k(){i.removeEventListener("select",q),i.removeEventListener("selectstart",q),i.removeEventListener("selectend",q),i.removeEventListener("squeeze",q),i.removeEventListener("squeezestart",q),i.removeEventListener("squeezeend",q),i.removeEventListener("end",k),i.removeEventListener("inputsourceschange",et);for(let j=0;j<S.length;j++){let it=T[j];it!==null&&(T[j]=null,S[j].disconnect(it))}I=null,z=null,p.reset();for(let j in m)delete m[j];if(t.setRenderTarget(A),f=null,u=null,d=null,i=null,y=null,Ht.stop(),n.isPresenting=!1,t.setPixelRatio(v),t.setSize(E.width,E.height,!1),w!==null){let j=w.camera;j.fov=w.fov,j.zoom=w.zoom,j.updateProjectionMatrix(),w=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){s=j,n.isPresenting===!0&&Xt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){o=j,n.isPresenting===!0&&Xt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&_&&(d=new XRWebGLBinding(i,e)),d},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(j){if(i=j,i!==null){if(A=t.getRenderTarget(),i.addEventListener("select",q),i.addEventListener("selectstart",q),i.addEventListener("selectend",q),i.addEventListener("squeeze",q),i.addEventListener("squeezestart",q),i.addEventListener("squeezeend",q),i.addEventListener("end",k),i.addEventListener("inputsourceschange",et),M.xrCompatible!==!0&&await e.makeXRCompatible(),v=t.getPixelRatio(),t.getSize(E),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let mt=null,zt=null,gt=null;M.depth&&(gt=M.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,mt=M.stencil?zr:Gi,zt=M.stencil?ua:Ni);let Ft={colorFormat:e.RGBA8,depthFormat:gt,scaleFactor:s};d=this.getBinding(),u=d.createProjectionLayer(Ft),i.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),y=new Xn(u.textureWidth,u.textureHeight,{format:yi,type:qn,depthTexture:new Lr(u.textureWidth,u.textureHeight,zt,void 0,void 0,void 0,void 0,void 0,void 0,mt),stencilBuffer:M.stencil,colorSpace:t.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let mt={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,e,mt),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new Xn(f.framebufferWidth,f.framebufferHeight,{format:yi,type:qn,colorSpace:t.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),Ht.setContext(i),Ht.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function et(j){for(let it=0;it<j.removed.length;it++){let mt=j.removed[it],zt=T.indexOf(mt);zt>=0&&(T[zt]=null,S[zt].disconnect(mt))}for(let it=0;it<j.added.length;it++){let mt=j.added[it],zt=T.indexOf(mt);if(zt===-1){for(let Ft=0;Ft<S.length;Ft++)if(Ft>=T.length){T.push(mt),zt=Ft;break}else if(T[Ft]===null){T[Ft]=mt,zt=Ft;break}if(zt===-1)break}let gt=S[zt];gt&&gt.connect(mt)}}let Z=new O,C=new O;function nt(j,it,mt){Z.setFromMatrixPosition(it.matrixWorld),C.setFromMatrixPosition(mt.matrixWorld);let zt=Z.distanceTo(C),gt=it.projectionMatrix.elements,Ft=mt.projectionMatrix.elements,kt=gt[14]/(gt[10]-1),It=gt[14]/(gt[10]+1),Gt=(gt[9]+1)/gt[5],Kt=(gt[9]-1)/gt[5],G=(gt[8]-1)/gt[0],Qt=(Ft[8]+1)/Ft[0],fe=kt*G,ve=kt*Qt,qt=zt/(-G+Qt),ue=qt*-G;if(it.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(ue),j.translateZ(qt),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),gt[10]===-1)j.projectionMatrix.copy(it.projectionMatrix),j.projectionMatrixInverse.copy(it.projectionMatrixInverse);else{let U=kt+qt,Se=It+qt,Wt=fe-ue,P=ve+(zt-ue),x=Gt*It/Se*U,B=Kt*It/Se*U;j.projectionMatrix.makePerspective(Wt,P,x,B,U,Se),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function Mt(j,it){it===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(it.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(i===null)return;let it=j.near,mt=j.far;p.texture!==null&&(p.depthNear>0&&(it=p.depthNear),p.depthFar>0&&(mt=p.depthFar)),V.near=N.near=R.near=it,V.far=N.far=R.far=mt,(I!==V.near||z!==V.far)&&(i.updateRenderState({depthNear:V.near,depthFar:V.far}),I=V.near,z=V.far),V.layers.mask=j.layers.mask|6,R.layers.mask=V.layers.mask&-5,N.layers.mask=V.layers.mask&-3;let zt=j.parent,gt=V.cameras;Mt(V,zt);for(let Ft=0;Ft<gt.length;Ft++)Mt(gt[Ft],zt);gt.length===2?nt(V,R,N):V.projectionMatrix.copy(R.projectionMatrix),w===null&&j.isPerspectiveCamera&&(w={camera:j,fov:j.fov,zoom:j.zoom}),bt(j,V,zt)};function bt(j,it,mt){mt===null?j.matrix.copy(it.matrixWorld):(j.matrix.copy(mt.matrixWorld),j.matrix.invert(),j.matrix.multiply(it.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(it.projectionMatrix),j.projectionMatrixInverse.copy(it.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=$a*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return V},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(j){l=j,u!==null&&(u.fixedFoveation=j),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=j)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(V)},this.getCameraTexture=function(j){return m[j]};let Bt=null;function Ut(j,it){if(h=it.getViewerPose(c||a),g=it,h!==null){let mt=h.views;f!==null&&(t.setRenderTargetFramebuffer(y,f.framebuffer),t.setRenderTarget(y));let zt=!1;mt.length!==V.cameras.length&&(V.cameras.length=0,zt=!0);for(let It=0;It<mt.length;It++){let Gt=mt[It],Kt=null;if(f!==null)Kt=f.getViewport(Gt);else{let Qt=d.getViewSubImage(u,Gt);Kt=Qt.viewport,It===0&&(t.setRenderTargetTextures(y,Qt.colorTexture,Qt.depthStencilTexture),t.setRenderTarget(y))}let G=L[It];G===void 0&&(G=new an,G.layers.enable(It),G.viewport=new De,L[It]=G),G.matrix.fromArray(Gt.transform.matrix),G.matrix.decompose(G.position,G.quaternion,G.scale),G.projectionMatrix.fromArray(Gt.projectionMatrix),G.projectionMatrixInverse.copy(G.projectionMatrix).invert(),G.viewport.set(Kt.x,Kt.y,Kt.width,Kt.height),It===0&&(V.matrix.copy(G.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale)),zt===!0&&V.cameras.push(G)}let gt=i.enabledFeatures;if(gt&&gt.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&_){d=n.getBinding();let It=d.getDepthInformation(mt[0]);It&&It.isValid&&It.texture&&p.init(It,i.renderState)}if(gt&&gt.includes("camera-access")&&_){t.state.unbindTexture(),d=n.getBinding();for(let It=0;It<mt.length;It++){let Gt=mt[It].camera;if(Gt){let Kt=m[Gt];Kt||(Kt=new oo,m[Gt]=Kt);let G=d.getCameraImage(Gt);Kt.sourceTexture=G}}}}for(let mt=0;mt<S.length;mt++){let zt=T[mt],gt=S[mt];zt!==null&&gt!==void 0&&gt.update(zt,it,c||a)}Bt&&Bt(j,it),it.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:it}),g=null}let Ht=new Cm;Ht.setAnimationLoop(Ut),this.setAnimationLoop=function(j){Bt=j},this.dispose=function(){}}},hM=new _e,Nm=new Jt;Nm.set(-1,0,0,0,1,0,0,0,1);function uM(r,t){function e(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,sf(r)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function i(p,m,M,A,y){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?s(p,m):m.isMeshLambertMaterial?(s(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(s(p,m),d(p,m)):m.isMeshPhongMaterial?(s(p,m),h(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(s(p,m),u(p,m),m.isMeshPhysicalMaterial&&f(p,m,y)):m.isMeshMatcapMaterial?(s(p,m),g(p,m)):m.isMeshDepthMaterial?s(p,m):m.isMeshDistanceMaterial?(s(p,m),_(p,m)):m.isMeshNormalMaterial?s(p,m):m.isLineBasicMaterial?(a(p,m),m.isLineDashedMaterial&&o(p,m)):m.isPointsMaterial?l(p,m,M,A):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,e(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===Un&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,e(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===Un&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,e(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,e(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let M=t.get(m),A=M.envMap,y=M.envMapRotation;A&&(p.envMap.value=A,p.envMapRotation.value.setFromMatrix4(hM.makeRotationFromEuler(y)).transpose(),A.isCubeTexture&&A.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(Nm),p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,p.aoMapTransform))}function a(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform))}function o(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,M,A){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*M,p.scale.value=A*.5,m.map&&(p.map.value=m.map,e(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function d(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function u(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,M){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Un&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.retroreflectivity>0&&(p.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=M.texture,p.transmissionSamplerSize.value.set(M.width,M.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function _(p,m){let M=t.get(m).light;p.referencePosition.value.setFromMatrixPosition(M.matrixWorld),p.nearDistance.value=M.shadow.camera.near,p.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function fM(r,t,e,n){let i={},s={},a=[],o=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,S){let T=S.program;n.uniformBlockBinding(y,T)}function c(y,S){let T=i[y.id];T===void 0&&(p(y),T=h(y),i[y.id]=T,y.addEventListener("dispose",M));let E=S.program;n.updateUBOMapping(y,E);let v=t.render.frame;s[y.id]!==v&&(u(y),s[y.id]=v)}function h(y){let S=d();y.__bindingPointIndex=S;let T=r.createBuffer(),E=y.__size,v=y.usage;return r.bindBuffer(r.UNIFORM_BUFFER,T),r.bufferData(r.UNIFORM_BUFFER,E,v),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,S,T),T}function d(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return Yt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(y){let S=i[y.id],T=y.uniforms,E=y.__cache;r.bindBuffer(r.UNIFORM_BUFFER,S);for(let v=0,w=T.length;v<w;v++){let R=T[v];if(Array.isArray(R))for(let N=0,L=R.length;N<L;N++)f(R[N],v,N,E);else f(R,v,0,E)}r.bindBuffer(r.UNIFORM_BUFFER,null)}function f(y,S,T,E){if(_(y,S,T,E)===!0){let v=y.__offset,w=y.value;if(Array.isArray(w)){let R=0;for(let N=0;N<w.length;N++){let L=w[N],V=m(L);g(L,y.__data,R),typeof L!="number"&&typeof L!="boolean"&&!L.isMatrix3&&!ArrayBuffer.isView(L)&&(R+=V.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(w,y.__data,0);r.bufferSubData(r.UNIFORM_BUFFER,v,y.__data)}}function g(y,S,T){typeof y=="number"||typeof y=="boolean"?S[0]=y:y.isMatrix3?(S[0]=y.elements[0],S[1]=y.elements[1],S[2]=y.elements[2],S[3]=0,S[4]=y.elements[3],S[5]=y.elements[4],S[6]=y.elements[5],S[7]=0,S[8]=y.elements[6],S[9]=y.elements[7],S[10]=y.elements[8],S[11]=0):ArrayBuffer.isView(y)?S.set(new y.constructor(y.buffer,y.byteOffset,S.length)):y.toArray(S,T)}function _(y,S,T,E){let v=y.value,w=S+"_"+T;if(E[w]===void 0)return typeof v=="number"||typeof v=="boolean"?E[w]=v:ArrayBuffer.isView(v)?E[w]=v.slice():E[w]=v.clone(),!0;{let R=E[w];if(typeof v=="number"||typeof v=="boolean"){if(R!==v)return E[w]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(R.equals(v)===!1)return R.copy(v),!0}}return!1}function p(y){let S=y.uniforms,T=0,E=16;for(let w=0,R=S.length;w<R;w++){let N=Array.isArray(S[w])?S[w]:[S[w]];for(let L=0,V=N.length;L<V;L++){let I=N[L],z=Array.isArray(I.value)?I.value:[I.value];for(let q=0,k=z.length;q<k;q++){let et=z[q],Z=m(et),C=T%E,nt=C%Z.boundary,Mt=C+nt;T+=nt,Mt!==0&&E-Mt<Z.storage&&(T+=E-Mt),I.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=T,T+=Z.storage}}}let v=T%E;return v>0&&(T+=E-v),y.__size=T,y.__cache={},this}function m(y){let S={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(S.boundary=4,S.storage=4):y.isVector2?(S.boundary=8,S.storage=8):y.isVector3||y.isColor?(S.boundary=16,S.storage=12):y.isVector4?(S.boundary=16,S.storage=16):y.isMatrix3?(S.boundary=48,S.storage=48):y.isMatrix4?(S.boundary=64,S.storage=64):y.isTexture?Xt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(S.boundary=16,S.storage=y.byteLength):Xt("WebGLRenderer: Unsupported uniform value type.",y),S}function M(y){let S=y.target;S.removeEventListener("dispose",M);let T=a.indexOf(S.__bindingPointIndex);a.splice(T,1),r.deleteBuffer(i[S.id]),delete i[S.id],delete s[S.id]}function A(){for(let y in i)r.deleteBuffer(i[y]);a=[],i={},s={}}return{bind:l,update:c,dispose:A}}var dM=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Ji=null;function pM(){return Ji===null&&(Ji=new io(dM,16,16,kr,Ui),Ji.name="DFG_LUT",Ji.minFilter=dn,Ji.magFilter=dn,Ji.wrapS=Vi,Ji.wrapT=Vi,Ji.generateMipmaps=!1,Ji.needsUpdate=!0),Ji}var lh=class{constructor(t={}){let{canvas:e=jp(),context:n=null,depth:i=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=qn}=t;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;let _=f,p=new Set([Tc,bc,Mc]),m=new Set([qn,Ni,ha,ua,vc,yc]),M=new Uint32Array(4),A=new Int32Array(4),y=new O,S=null,T=null,E=[],v=[],w=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Di,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,N=!1,L=null,V=null,I=null,z=null;this._outputColorSpace=Sn;let q=0,k=0,et=null,Z=-1,C=null,nt=new De,Mt=new De,bt=null,Bt=new $t(0),Ut=0,Ht=e.width,j=e.height,it=1,mt=null,zt=null,gt=new De(0,0,Ht,j),Ft=new De(0,0,Ht,j),kt=!1,It=new ra,Gt=!1,Kt=!1,G=new _e,Qt=new O,fe=new De,ve={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},qt=!1;function ue(){return et===null?it:1}let U=n;function Se(b,F){return e.getContext(b,F)}let Wt,P,x,B,H,tt,Y,K,J,Q,lt,vt,dt,ft,ht,At,Ot,D,ut,rt,pt,_t,st;try{let b={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",Nt,!1),e.addEventListener("webglcontextrestored",ot,!1),e.addEventListener("webglcontextcreationerror",Vt,!1),U===null){let F="webgl2";if(U=Se(F,b),U===null)throw Se(F)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}ct()}catch(b){throw e.removeEventListener("webglcontextlost",Nt,!1),e.removeEventListener("webglcontextrestored",ot,!1),e.removeEventListener("webglcontextcreationerror",Vt,!1),Yt("WebGLRenderer: "+b.message),b}function ct(){Wt=new Sy(U),Wt.init(),pt=new oM(U,Wt),P=new uy(U,Wt,t,pt),x=new sM(U,Wt),P.reversedDepthBuffer&&u&&x.buffers.depth.setReversed(!0),V=U.createFramebuffer(),I=U.createFramebuffer(),z=U.createFramebuffer(),B=new Ty(U),H=new XS,tt=new aM(U,Wt,x,H,P,pt,B),Y=new yy(R),K=new E0(U),_t=new cy(U,K),J=new My(U,K,B,_t),Q=new Ey(U,J,K,_t,B),D=new wy(U,P,tt),ht=new fy(H),lt=new WS(R,Y,Wt,P,_t,ht),vt=new uM(R,H),dt=new YS,ft=new jS(Wt),Ot=new ly(R,Y,x,Q,g,l),At=new rM(R,Q,P),st=new fM(U,B,P,x),ut=new hy(U,Wt,B),rt=new by(U,Wt,B),B.programs=lt.programs,R.capabilities=P,R.extensions=Wt,R.properties=H,R.renderLists=dt,R.shadowMap=At,R.state=x,R.info=B}_!==qn&&(w=new Cy(_,e.width,e.height,o,i,s));let at=new Cf(R,U);this.xr=at,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){let b=Wt.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=Wt.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return it},this.setPixelRatio=function(b){b!==void 0&&(it=b,this.setSize(Ht,j,!1))},this.getSize=function(b){return b.set(Ht,j)},this.setSize=function(b,F,$=!0){if(at.isPresenting){Xt("WebGLRenderer: Can't change size while VR device is presenting.");return}Ht=b,j=F,e.width=Math.floor(b*it),e.height=Math.floor(F*it),$===!0&&(e.style.width=b+"px",e.style.height=F+"px"),w!==null&&w.setSize(e.width,e.height),this.setViewport(0,0,b,F)},this.getDrawingBufferSize=function(b){return b.set(Ht*it,j*it).floor()},this.setDrawingBufferSize=function(b,F,$){Ht=b,j=F,it=$,e.width=Math.floor(b*$),e.height=Math.floor(F*$),this.setViewport(0,0,b,F)},this.setEffects=function(b){if(_===qn){Yt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let F=0;F<b.length;F++)if(b[F].isOutputPass===!0){Xt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}w.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(nt)},this.getViewport=function(b){return b.copy(gt)},this.setViewport=function(b,F,$,W){b.isVector4?gt.set(b.x,b.y,b.z,b.w):gt.set(b,F,$,W),x.viewport(nt.copy(gt).multiplyScalar(it).round())},this.getScissor=function(b){return b.copy(Ft)},this.setScissor=function(b,F,$,W){b.isVector4?Ft.set(b.x,b.y,b.z,b.w):Ft.set(b,F,$,W),x.scissor(Mt.copy(Ft).multiplyScalar(it).round())},this.getScissorTest=function(){return kt},this.setScissorTest=function(b){x.setScissorTest(kt=b)},this.setOpaqueSort=function(b){mt=b},this.setTransparentSort=function(b){zt=b},this.getClearColor=function(b){return b.copy(Ot.getClearColor())},this.setClearColor=function(){Ot.setClearColor(...arguments)},this.getClearAlpha=function(){return Ot.getClearAlpha()},this.setClearAlpha=function(){Ot.setClearAlpha(...arguments)},this.clear=function(b=!0,F=!0,$=!0){let W=0;if(b){let X=!1;if(et!==null){let xt=et.texture.format;X=p.has(xt)}if(X){let xt=et.texture.type,wt=m.has(xt),St=Ot.getClearColor(),Rt=Ot.getClearAlpha(),Dt=St.r,jt=St.g,oe=St.b;wt?(M[0]=Dt,M[1]=jt,M[2]=oe,M[3]=Rt,U.clearBufferuiv(U.COLOR,0,M)):(A[0]=Dt,A[1]=jt,A[2]=oe,A[3]=Rt,U.clearBufferiv(U.COLOR,0,A))}else W|=U.COLOR_BUFFER_BIT}F&&(W|=U.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),$&&(W|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),W!==0&&U.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(b){b.setRenderer(this),L=b},this.dispose=function(){e.removeEventListener("webglcontextlost",Nt,!1),e.removeEventListener("webglcontextrestored",ot,!1),e.removeEventListener("webglcontextcreationerror",Vt,!1),Ot.dispose(),dt.dispose(),ft.dispose(),H.dispose(),Y.dispose(),Q.dispose(),_t.dispose(),st.dispose(),lt.dispose(),at.dispose(),at.removeEventListener("sessionstart",Pe),at.removeEventListener("sessionend",Me),ce.stop()};function Nt(b){b.preventDefault(),nf("WebGLRenderer: Context Lost."),N=!0}function ot(){nf("WebGLRenderer: Context Restored."),N=!1;let b=B.autoReset,F=At.enabled,$=At.autoUpdate,W=At.needsUpdate,X=At.type;ct(),B.autoReset=b,At.enabled=F,At.autoUpdate=$,At.needsUpdate=W,At.type=X}function Vt(b){Yt("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Ct(b){let F=b.target;F.removeEventListener("dispose",Ct),Zt(F)}function Zt(b){Xe(b),H.remove(b)}function Xe(b){let F=H.get(b).programs;F!==void 0&&(F.forEach(function($){lt.releaseProgram($)}),b.isShaderMaterial&&lt.releaseShaderCache(b))}this.renderBufferDirect=function(b,F,$,W,X,xt){F===null&&(F=ve);let wt=X.isMesh&&X.matrixWorld.determinantAffine()<0,St=rn(b,F,$,W,X);x.setMaterial(W,wt);let Rt=$.index,Dt=1;if(W.wireframe===!0){if(Rt=J.getWireframeAttribute($),Rt===void 0)return;Dt=2}let jt=$.drawRange,oe=$.attributes.position,Pt=jt.start*Dt,pe=(jt.start+jt.count)*Dt;xt!==null&&(Pt=Math.max(Pt,xt.start*Dt),pe=Math.min(pe,(xt.start+xt.count)*Dt)),Rt!==null?(Pt=Math.max(Pt,0),pe=Math.min(pe,Rt.count)):oe!=null&&(Pt=Math.max(Pt,0),pe=Math.min(pe,oe.count));let Ye=pe-Pt;if(Ye<0||Ye===1/0)return;_t.setup(X,W,St,$,Rt);let Ie,be=ut;if(Rt!==null&&(Ie=K.get(Rt),be=rt,be.setIndex(Ie)),X.isMesh)W.wireframe===!0?(x.setLineWidth(W.wireframeLinewidth*ue()),be.setMode(U.LINES)):be.setMode(U.TRIANGLES);else if(X.isLine){let xn=W.linewidth;xn===void 0&&(xn=1),x.setLineWidth(xn*ue()),X.isLineSegments?be.setMode(U.LINES):X.isLineLoop?be.setMode(U.LINE_LOOP):be.setMode(U.LINE_STRIP)}else X.isPoints?be.setMode(U.POINTS):X.isSprite&&be.setMode(U.TRIANGLES);if(X.isBatchedMesh)if(Wt.get("WEBGL_multi_draw"))be.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{let xn=X._multiDrawStarts,Tt=X._multiDrawCounts,Dn=X._multiDrawCount,de=Rt?K.get(Rt).bytesPerElement:1,pi=H.get(W).currentProgram.getUniforms();for(let zi=0;zi<Dn;zi++)pi.setValue(U,"_gl_DrawID",zi),be.render(xn[zi]/de,Tt[zi])}else if(X.isInstancedMesh)be.renderInstances(Pt,Ye,X.count);else if($.isInstancedBufferGeometry){let xn=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,Tt=Math.min($.instanceCount,xn);be.renderInstances(Pt,Ye,Tt)}else be.render(Pt,Ye)};function re(b,F,$,W){L!==null&&b.isNodeMaterial&&L.setObject(W,b),Gt===!0&&ht.setState(b,$,!1),b.transparent===!0&&b.side===qi&&b.forceSinglePass===!1?(b.side=Un,b.needsUpdate=!0,Be(b,F,W),b.side=Fr,b.needsUpdate=!0,Be(b,F,W),b.side=qi):Be(b,F,W)}this.compile=function(b,F,$=null){$===null&&($=b),L!==null&&L.renderStart(b,F,$),T=ft.get($),T.init(F),v.push(T),$.traverseVisible(function(X){X.isLight&&X.layers.test(F.layers)&&(T.pushLight(X),X.castShadow&&T.pushShadow(X))}),b!==$&&b.traverseVisible(function(X){X.isLight&&X.layers.test(F.layers)&&(T.pushLight(X),X.castShadow&&T.pushShadow(X))}),T.setupLights(),L!==null&&L.updateLights(T.state.lightsArray),Kt=this.localClippingEnabled,Gt=ht.init(this.clippingPlanes,Kt),Gt===!0&&ht.setGlobalState(this.clippingPlanes,F),L!==null&&At.render(T.state.shadowsArray,$,F);let W=new Set;return b.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;let xt=X.material;if(xt)if(Array.isArray(xt))for(let wt=0;wt<xt.length;wt++){let St=xt[wt];re(St,$,F,X),W.add(St)}else re(xt,$,F,X),W.add(xt)}),T=v.pop(),L!==null&&L.renderEnd(),W},this.compileAsync=function(b,F,$=null){let W=this.compile(b,F,$);return new Promise(X=>{function xt(){if(W.forEach(function(wt){let Rt=H.get(wt).currentProgram;(Rt===void 0||Rt.isReady())&&W.delete(wt)}),W.size===0){X(b);return}setTimeout(xt,10)}Wt.get("KHR_parallel_shader_compile")!==null?xt():setTimeout(xt,10)})};let Re=null;function nn(b){Re&&Re(b)}function Pe(){ce.stop()}function Me(){ce.start()}let ce=new Cm;ce.setAnimationLoop(nn),typeof self<"u"&&ce.setContext(self),this.setAnimationLoop=function(b){Re=b,at.setAnimationLoop(b),b===null?ce.stop():ce.start()},at.addEventListener("sessionstart",Pe),at.addEventListener("sessionend",Me),this.render=function(b,F){if(F!==void 0&&F.isCamera!==!0){Yt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;L!==null&&L.renderStart(b,F);let $=at.enabled===!0&&at.isPresenting===!0,W=w!==null&&(et===null||$)&&w.begin(R,et);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),at.enabled===!0&&at.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(at.cameraAutoUpdate===!0&&at.updateCamera(F),F=at.getCamera()),b.isScene===!0&&b.onBeforeRender(R,b,F,et),T=ft.get(b,v.length),T.init(F),T.state.textureUnits=tt.getTextureUnits(),v.push(T),G.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),It.setFromProjectionMatrix(G,Ii,F.reversedDepth),Kt=this.localClippingEnabled,Gt=ht.init(this.clippingPlanes,Kt),S=dt.get(b,E.length),S.init(),E.push(S),at.enabled===!0&&at.isPresenting===!0){let wt=R.xr.getDepthSensingMesh();wt!==null&&In(wt,F,-1/0,R.sortObjects)}In(b,F,0,R.sortObjects),S.finish(),L!==null&&L.updateLights(T.state.lightsArray),R.sortObjects===!0&&S.sort(mt,zt),qt=at.enabled===!1||at.isPresenting===!1||at.hasDepthSensing()===!1,qt&&Ot.addToRenderList(S,b),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Gt===!0&&ht.beginShadows();let X=T.state.shadowsArray;if(At.render(X,b,F),Gt===!0&&ht.endShadows(),(W&&w.hasRenderPass())===!1){let wt=S.opaque,St=S.transmissive;if(T.setupLights(),F.isArrayCamera){let Rt=F.cameras;if(St.length>0)for(let Dt=0,jt=Rt.length;Dt<jt;Dt++){let oe=Rt[Dt];_n(wt,St,b,oe)}qt&&Ot.render(b);for(let Dt=0,jt=Rt.length;Dt<jt;Dt++){let oe=Rt[Dt];Ae(S,b,oe,oe.viewport)}}else St.length>0&&_n(wt,St,b,F),qt&&Ot.render(b),Ae(S,b,F)}et!==null&&k===0&&(tt.updateMultisampleRenderTarget(et),tt.updateRenderTargetMipmap(et)),W&&w.end(R),b.isScene===!0&&b.onAfterRender(R,b,F),_t.resetDefaultState(),Z=-1,C=null,v.pop(),v.length>0?(T=v[v.length-1],tt.setTextureUnits(T.state.textureUnits),Gt===!0&&ht.setGlobalState(R.clippingPlanes,T.state.camera)):T=null,E.pop(),E.length>0?S=E[E.length-1]:S=null,L!==null&&L.renderEnd()};function In(b,F,$,W){if(b.visible===!1)return;if(b.layers.test(F.layers)){if(b.isGroup)$=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(F);else if(b.isLightProbeGrid)T.pushLightProbeGrid(b);else if(b.isLight)T.pushLight(b),b.castShadow&&T.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||b.intersectsFrustum(It)){W&&fe.setFromMatrixPosition(b.matrixWorld).applyMatrix4(G);let wt=Q.update(b),St=b.material;St.visible&&S.push(b,wt,St,$,fe.z,null,F)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||b.intersectsFrustum(It))){let wt=Q.update(b),St=b.material;if(W&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),fe.copy(b.boundingSphere.center)):(wt.boundingSphere===null&&wt.computeBoundingSphere(),fe.copy(wt.boundingSphere.center)),fe.applyMatrix4(b.matrixWorld).applyMatrix4(G)),Array.isArray(St)){let Rt=wt.groups;for(let Dt=0,jt=Rt.length;Dt<jt;Dt++){let oe=Rt[Dt],Pt=St[oe.materialIndex];Pt&&Pt.visible&&S.push(b,wt,Pt,$,fe.z,oe,F)}}else St.visible&&S.push(b,wt,St,$,fe.z,null,F)}}let xt=b.children;for(let wt=0,St=xt.length;wt<St;wt++)In(xt[wt],F,$,W)}function Ae(b,F,$,W){let{opaque:X,transmissive:xt,transparent:wt}=b;T.setupLightsView($),Gt===!0&&ht.setGlobalState(R.clippingPlanes,$),W&&x.viewport(nt.copy(W)),X.length>0&&Ln(X,F,$),xt.length>0&&Ln(xt,F,$),wt.length>0&&Ln(wt,F,$),x.buffers.depth.setTest(!0),x.buffers.depth.setMask(!0),x.buffers.color.setMask(!0),x.setPolygonOffset(!1)}function _n(b,F,$,W){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[W.id]===void 0){let Pt=Wt.has("EXT_color_buffer_half_float")||Wt.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[W.id]=new Xn(1,1,{generateMipmaps:!0,type:Pt?Ui:qn,minFilter:Br,samples:Math.max(4,P.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:le.workingColorSpace})}let xt=T.state.transmissionRenderTarget[W.id],wt=W.viewport||nt;xt.setSize(wt.z*R.transmissionResolutionScale,wt.w*R.transmissionResolutionScale);let St=R.getRenderTarget(),Rt=R.getActiveCubeFace(),Dt=R.getActiveMipmapLevel();R.setRenderTarget(xt),R.getClearColor(Bt),Ut=R.getClearAlpha(),Ut<1&&R.setClearColor(16777215,.5),R.clear(),qt&&Ot.render($);let jt=R.toneMapping;R.toneMapping=Di;let oe=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),T.setupLightsView(W),Gt===!0&&ht.setGlobalState(R.clippingPlanes,W),Ln(b,$,W),tt.updateMultisampleRenderTarget(xt),tt.updateRenderTargetMipmap(xt),Wt.has("WEBGL_multisampled_render_to_texture")===!1){let Pt=!1;for(let pe=0,Ye=F.length;pe<Ye;pe++){let Ie=F[pe],{object:be,geometry:xn,material:Tt,group:Dn}=Ie;if(Tt.side===qi&&be.layers.test(W.layers)){let de=Tt.side;Tt.side=Un,Tt.needsUpdate=!0,qe(be,$,W,xn,Tt,Dn),Tt.side=de,Tt.needsUpdate=!0,Pt=!0}}Pt===!0&&(tt.updateMultisampleRenderTarget(xt),tt.updateRenderTargetMipmap(xt))}R.setRenderTarget(St,Rt,Dt),R.setClearColor(Bt,Ut),oe!==void 0&&(W.viewport=oe),R.toneMapping=jt}function Ln(b,F,$){let W=F.isScene===!0?F.overrideMaterial:null;for(let X=0,xt=b.length;X<xt;X++){let wt=b[X],{object:St,geometry:Rt,group:Dt}=wt,jt=wt.material;jt.allowOverride===!0&&W!==null&&(jt=W),St.layers.test($.layers)&&qe(St,F,$,Rt,jt,Dt)}}function qe(b,F,$,W,X,xt){L!==null&&X.isNodeMaterial&&L.setObject(b,X),b.onBeforeRender(R,F,$,W,X,xt),b.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),X.onBeforeRender(R,F,$,W,b,xt),X.transparent===!0&&X.side===qi&&X.forceSinglePass===!1?(X.side=Un,X.needsUpdate=!0,R.renderBufferDirect($,F,W,X,b,xt),X.side=Fr,X.needsUpdate=!0,R.renderBufferDirect($,F,W,X,b,xt),X.side=qi):R.renderBufferDirect($,F,W,X,b,xt),b.onAfterRender(R,F,$,W,X,xt)}function Be(b,F,$){F.isScene!==!0&&(F=ve);let W=H.get(b),X=T.state.lights,xt=T.state.shadowsArray,wt=X.state.version,St=lt.getParameters(b,X.state,xt,F,$,T.state.lightProbeGridArray),Rt=lt.getProgramCacheKey(St),Dt=W.programs;W.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?F.environment:null,W.fog=F.fog;let jt=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;W.envMap=Y.get(b.envMap||W.environment,jt),W.envMapRotation=W.environment!==null&&b.envMap===null?F.environmentRotation:b.envMapRotation,Dt===void 0&&(b.addEventListener("dispose",Ct),Dt=new Map,W.programs=Dt);let oe=Dt.get(Rt);if(oe!==void 0){if(W.currentProgram===oe&&W.lightsStateVersion===wt)return Bi(b,St),oe}else St.uniforms=lt.getUniforms(b),L!==null&&b.isNodeMaterial&&L.build(b,$,St),b.onBeforeCompile(St,R),oe=lt.acquireProgram(St,Rt),Dt.set(Rt,oe),W.uniforms=St.uniforms;let Pt=W.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Pt.clippingPlanes=ht.uniform),Bi(b,St),W.needsLights=di(b),W.lightsStateVersion=wt,W.needsLights&&(Pt.ambientLightColor.value=X.state.ambient,Pt.lightProbe.value=X.state.probe,Pt.sunLights.value=X.state.sun,Pt.sunLightShadows.value=X.state.sunShadow,Pt.directionalLights.value=X.state.directional,Pt.directionalLightShadows.value=X.state.directionalShadow,Pt.spotLights.value=X.state.spot,Pt.spotLightShadows.value=X.state.spotShadow,Pt.rectAreaLights.value=X.state.rectArea,Pt.ltc_1.value=X.state.rectAreaLTC1,Pt.ltc_2.value=X.state.rectAreaLTC2,Pt.pointLights.value=X.state.point,Pt.pointLightShadows.value=X.state.pointShadow,Pt.hemisphereLights.value=X.state.hemi,Pt.sunShadowMatrix.value=X.state.sunShadowMatrix,Pt.sunShadowCascade.value=X.state.sunShadowCascade,Pt.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Pt.spotLightMatrix.value=X.state.spotLightMatrix,Pt.spotLightMap.value=X.state.spotLightMap,Pt.pointShadowMatrix.value=X.state.pointShadowMatrix),W.lightProbeGrid=T.state.lightProbeGridArray.length>0,W.currentProgram=oe,W.uniformsList=null,oe}function Ke(b){if(b.uniformsList===null){let F=b.currentProgram.getUniforms();b.uniformsList=pa.seqWithValue(F.seq,b.uniforms)}return b.uniformsList}function Bi(b,F){let $=H.get(b);$.outputColorSpace=F.outputColorSpace,$.batching=F.batching,$.batchingColor=F.batchingColor,$.instancing=F.instancing,$.instancingColor=F.instancingColor,$.instancingMorph=F.instancingMorph,$.skinning=F.skinning,$.morphTargets=F.morphTargets,$.morphNormals=F.morphNormals,$.morphColors=F.morphColors,$.morphTargetsCount=F.morphTargetsCount,$.numClippingPlanes=F.numClippingPlanes,$.numIntersection=F.numClipIntersection,$.vertexAlphas=F.vertexAlphas,$.vertexTangents=F.vertexTangents,$.toneMapping=F.toneMapping}function Ds(b,F){if(b.length===0)return null;if(b.length===1)return b[0].texture!==null?b[0]:null;y.setFromMatrixPosition(F.matrixWorld);for(let $=0,W=b.length;$<W;$++){let X=b[$];if(X.texture!==null&&X.boundingBox.containsPoint(y))return X}return null}function rn(b,F,$,W,X){F.isScene!==!0&&(F=ve),tt.resetTextureUnits();let xt=F.fog,wt=W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial?F.environment:null,St=et===null?R.outputColorSpace:et.isXRRenderTarget===!0?et.texture.colorSpace:le.workingColorSpace,Rt=W.isMeshStandardMaterial||W.isMeshLambertMaterial&&!W.envMap||W.isMeshPhongMaterial&&!W.envMap,Dt=Y.get(W.envMap||wt,Rt),jt=W.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,oe=!!$.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Pt=!!$.morphAttributes.position,pe=!!$.morphAttributes.normal,Ye=!!$.morphAttributes.color,Ie=Di;W.toneMapped&&(et===null||et.isXRRenderTarget===!0)&&(Ie=R.toneMapping);let be=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,xn=be!==void 0?be.length:0,Tt=H.get(W),Dn=T.state.lights;if(Gt===!0&&(Kt===!0||b!==C)){let Ce=b===C&&W.id===Z;ht.setState(W,b,Ce)}let de=!1;W.version===Tt.__version?(Tt.needsLights&&Tt.lightsStateVersion!==Dn.state.version||Tt.outputColorSpace!==St||X.isBatchedMesh&&Tt.batching===!1||!X.isBatchedMesh&&Tt.batching===!0||X.isBatchedMesh&&Tt.batchingColor===!0&&X._colorsTexture===null||X.isBatchedMesh&&Tt.batchingColor===!1&&X._colorsTexture!==null||X.isInstancedMesh&&Tt.instancing===!1||!X.isInstancedMesh&&Tt.instancing===!0||X.isSkinnedMesh&&Tt.skinning===!1||!X.isSkinnedMesh&&Tt.skinning===!0||X.isInstancedMesh&&Tt.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&Tt.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&Tt.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&Tt.instancingMorph===!1&&X.morphTexture!==null||Tt.envMap!==Dt||W.fog===!0&&Tt.fog!==xt||Tt.numClippingPlanes!==void 0&&(Tt.numClippingPlanes!==ht.numPlanes||Tt.numIntersection!==ht.numIntersection)||Tt.vertexAlphas!==jt||Tt.vertexTangents!==oe||Tt.morphTargets!==Pt||Tt.morphNormals!==pe||Tt.morphColors!==Ye||Tt.toneMapping!==Ie||Tt.morphTargetsCount!==xn||!!Tt.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(de=!0):(de=!0,Tt.__version=W.version);let pi=Tt.currentProgram;de===!0&&(pi=Be(W,F,X),L&&W.isNodeMaterial&&L.onUpdateProgram(W,pi,Tt));let zi=!1,Sr=!1,Us=!1,ye=pi.getUniforms(),He=Tt.uniforms;if(x.useProgram(pi.program)&&(zi=!0,Sr=!0,Us=!0),W.id!==Z&&(Z=W.id,Sr=!0),Tt.needsLights){let Ce=Ds(T.state.lightProbeGridArray,X);Tt.lightProbeGrid!==Ce&&(Tt.lightProbeGrid=Ce,Sr=!0)}if(zi||C!==b){x.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),ye.setValue(U,"projectionMatrix",b.projectionMatrix),ye.setValue(U,"viewMatrix",b.matrixWorldInverse);let br=ye.map.cameraPosition;br!==void 0&&br.setValue(U,Qt.setFromMatrixPosition(b.matrixWorld)),P.logarithmicDepthBuffer&&ye.setValue(U,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&ye.setValue(U,"isOrthographic",b.isOrthographicCamera===!0),C!==b&&(C=b,Sr=!0,Us=!0)}if(Tt.needsLights&&(Dn.state.sunShadowMap.length>0&&ye.setValue(U,"sunShadowMap",Dn.state.sunShadowMap,tt),Dn.state.directionalShadowMap.length>0&&ye.setValue(U,"directionalShadowMap",Dn.state.directionalShadowMap,tt),Dn.state.spotShadowMap.length>0&&ye.setValue(U,"spotShadowMap",Dn.state.spotShadowMap,tt),Dn.state.pointShadowMap.length>0&&ye.setValue(U,"pointShadowMap",Dn.state.pointShadowMap,tt)),X.isSkinnedMesh){ye.setOptional(U,X,"bindMatrix"),ye.setOptional(U,X,"bindMatrixInverse");let Ce=X.skeleton;Ce&&(Ce.boneTexture===null&&Ce.computeBoneTexture(),ye.setValue(U,"boneTexture",Ce.boneTexture,tt))}X.isBatchedMesh&&(ye.setOptional(U,X,"batchingTexture"),ye.setValue(U,"batchingTexture",X._matricesTexture,tt),ye.setOptional(U,X,"batchingIdTexture"),ye.setValue(U,"batchingIdTexture",X._indirectTexture,tt),ye.setOptional(U,X,"batchingColorTexture"),X._colorsTexture!==null&&ye.setValue(U,"batchingColorTexture",X._colorsTexture,tt));let Mr=$.morphAttributes;if((Mr.position!==void 0||Mr.normal!==void 0||Mr.color!==void 0)&&D.update(X,$,pi),(Sr||Tt.receiveShadow!==X.receiveShadow)&&(Tt.receiveShadow=X.receiveShadow,ye.setValue(U,"receiveShadow",X.receiveShadow)),(W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial)&&W.envMap===null&&F.environment!==null&&(He.envMapIntensity.value=F.environmentIntensity),He.dfgLUT!==void 0&&(He.dfgLUT.value=pM()),Sr){if(ye.setValue(U,"toneMappingExposure",R.toneMappingExposure),Tt.needsLights&&Ge(He,Us),xt&&W.fog===!0&&vt.refreshFogUniforms(He,xt),vt.refreshMaterialUniforms(He,W,it,j,T.state.transmissionRenderTarget[b.id]),Tt.needsLights&&Tt.lightProbeGrid){let Ce=Tt.lightProbeGrid;He.probesSH.value=Ce.texture,He.probesMin.value.copy(Ce.boundingBox.min),He.probesMax.value.copy(Ce.boundingBox.max),He.probesResolution.value.copy(Ce.resolution)}pa.upload(U,Ke(Tt),He,tt)}if(W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(pa.upload(U,Ke(Tt),He,tt),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&ye.setValue(U,"center",X.center),ye.setValue(U,"modelViewMatrix",X.modelViewMatrix),ye.setValue(U,"normalMatrix",X.normalMatrix),ye.setValue(U,"modelMatrix",X.matrixWorld),W.uniformsGroups!==void 0){let Ce=W.uniformsGroups;for(let br=0,Fs=Ce.length;br<Fs;br++){let qd=Ce[br];st.update(qd,pi),st.bind(qd,pi)}}return pi}function Ge(b,F){b.ambientLightColor.needsUpdate=F,b.lightProbe.needsUpdate=F,b.sunLights.needsUpdate=F,b.sunLightShadows.needsUpdate=F,b.directionalLights.needsUpdate=F,b.directionalLightShadows.needsUpdate=F,b.pointLights.needsUpdate=F,b.pointLightShadows.needsUpdate=F,b.spotLights.needsUpdate=F,b.spotLightShadows.needsUpdate=F,b.rectAreaLights.needsUpdate=F,b.hemisphereLights.needsUpdate=F}function di(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return q},this.getActiveMipmapLevel=function(){return k},this.getRenderTarget=function(){return et},this.setRenderTargetTextures=function(b,F,$){let W=H.get(b);W.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,W.__autoAllocateDepthBuffer===!1&&(W.__useRenderToTexture=!1),H.get(b.texture).__webglTexture=F,H.get(b.depthTexture).__webglTexture=W.__autoAllocateDepthBuffer?void 0:$,W.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,F){let $=H.get(b);$.__webglFramebuffer=F,$.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(b,F=0,$=0){et=b,q=F,k=$;let W=null,X=!1,xt=!1;if(b){let St=H.get(b);if(St.__useDefaultFramebuffer!==void 0){x.bindFramebuffer(U.FRAMEBUFFER,St.__webglFramebuffer),nt.copy(b.viewport),Mt.copy(b.scissor),bt=b.scissorTest,x.viewport(nt),x.scissor(Mt),x.setScissorTest(bt),Z=-1;return}else if(St.__webglFramebuffer===void 0)tt.setupRenderTarget(b);else if(St.__hasExternalTextures)tt.rebindTextures(b,H.get(b.texture).__webglTexture,H.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){let jt=b.depthTexture;if(St.__boundDepthTexture!==jt){if(jt!==null&&H.has(jt)&&(b.width!==jt.image.width||b.height!==jt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");tt.setupDepthRenderbuffer(b)}}let Rt=b.texture;(Rt.isData3DTexture||Rt.isDataArrayTexture||Rt.isCompressedArrayTexture)&&(xt=!0);let Dt=H.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Dt[F])?W=Dt[F][$]:W=Dt[F],X=!0):b.samples>0&&tt.useMultisampledRTT(b)===!1?W=H.get(b).__webglMultisampledFramebuffer:Array.isArray(Dt)?W=Dt[$]:W=Dt,nt.copy(b.viewport),Mt.copy(b.scissor),bt=b.scissorTest}else nt.copy(gt).multiplyScalar(it).floor(),Mt.copy(Ft).multiplyScalar(it).floor(),bt=kt;if($!==0&&(W=V),x.bindFramebuffer(U.FRAMEBUFFER,W)&&x.drawBuffers(b,W),x.viewport(nt),x.scissor(Mt),x.setScissorTest(bt),X){let St=H.get(b.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+F,St.__webglTexture,$)}else if(xt){let St=F;for(let Rt=0;Rt<b.textures.length;Rt++){let Dt=H.get(b.textures[Rt]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+Rt,Dt.__webglTexture,$,St)}}else if(b!==null&&$!==0){let St=H.get(b.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,St.__webglTexture,$)}Z=-1};function Ns(b){let F=H.get(b);return(F.__readFormat!==b.format||F.__readType!==b.type)&&(F.__readFormat=b.format,F.__readType=b.type,F.__formatReadable=P.textureFormatReadable(b.format),F.__typeReadable=P.textureTypeReadable(b.type)),F}this.readRenderTargetPixels=function(b,F,$,W,X,xt,wt,St=0){if(!(b&&b.isWebGLRenderTarget)){Yt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Rt=H.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&wt!==void 0&&(Rt=Rt[wt]),Rt){x.bindFramebuffer(U.FRAMEBUFFER,Rt);try{let Dt=b.textures[St],jt=Dt.format,oe=Dt.type;b.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+St);let Pt=Ns(Dt);if(Pt.__formatReadable===!1){Yt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Pt.__typeReadable===!1){Yt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=b.width-W&&$>=0&&$<=b.height-X&&U.readPixels(F,$,W,X,pt.convert(jt),pt.convert(oe),xt)}finally{let Dt=et!==null?H.get(et).__webglFramebuffer:null;x.bindFramebuffer(U.FRAMEBUFFER,Dt)}}},this.readRenderTargetPixelsAsync=async function(b,F,$,W,X,xt,wt,St=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Rt=H.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&wt!==void 0&&(Rt=Rt[wt]),Rt)if(F>=0&&F<=b.width-W&&$>=0&&$<=b.height-X){x.bindFramebuffer(U.FRAMEBUFFER,Rt);let Dt=b.textures[St],jt=Dt.format,oe=Dt.type;b.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+St);let Pt=Ns(Dt);if(Pt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Pt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let pe=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,pe),U.bufferData(U.PIXEL_PACK_BUFFER,xt.byteLength,U.STREAM_READ),U.readPixels(F,$,W,X,pt.convert(jt),pt.convert(oe),0),U.bindBuffer(U.PIXEL_PACK_BUFFER,null);let Ye=et!==null?H.get(et).__webglFramebuffer:null;x.bindFramebuffer(U.FRAMEBUFFER,Ye);let Ie=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await em(U,Ie,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,pe),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,xt),U.bindBuffer(U.PIXEL_PACK_BUFFER,null),U.deleteBuffer(pe),U.deleteSync(Ie),xt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,F=null,$=0){let W=Math.pow(2,-$),X=Math.floor(b.image.width*W),xt=Math.floor(b.image.height*W),wt=F!==null?F.x:0,St=F!==null?F.y:0;tt.setTexture2D(b,0),U.copyTexSubImage2D(U.TEXTURE_2D,$,0,0,wt,St,X,xt),x.unbindTexture()},this.copyTextureToTexture=function(b,F,$=null,W=null,X=0,xt=0){let wt,St,Rt,Dt,jt,oe,Pt,pe,Ye,Ie=b.isCompressedTexture?b.mipmaps[xt]:b.image;if($!==null)wt=$.max.x-$.min.x,St=$.max.y-$.min.y,Rt=$.isBox3?$.max.z-$.min.z:1,Dt=$.min.x,jt=$.min.y,oe=$.isBox3?$.min.z:0;else{let He=Math.pow(2,-X);wt=Math.floor(Ie.width*He),St=Math.floor(Ie.height*He),b.isDataArrayTexture?Rt=Ie.depth:b.isData3DTexture?Rt=Math.floor(Ie.depth*He):Rt=1,Dt=0,jt=0,oe=0}W!==null?(Pt=W.x,pe=W.y,Ye=W.z):(Pt=0,pe=0,Ye=0);let be=pt.convert(F.format),xn=pt.convert(F.type),Tt;F.isData3DTexture?(tt.setTexture3D(F,0),Tt=U.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(tt.setTexture2DArray(F,0),Tt=U.TEXTURE_2D_ARRAY):(tt.setTexture2D(F,0),Tt=U.TEXTURE_2D),x.activeTexture(U.TEXTURE0),x.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,F.flipY),x.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),x.pixelStorei(U.UNPACK_ALIGNMENT,F.unpackAlignment);let Dn=x.getParameter(U.UNPACK_ROW_LENGTH),de=x.getParameter(U.UNPACK_IMAGE_HEIGHT),pi=x.getParameter(U.UNPACK_SKIP_PIXELS),zi=x.getParameter(U.UNPACK_SKIP_ROWS),Sr=x.getParameter(U.UNPACK_SKIP_IMAGES);x.pixelStorei(U.UNPACK_ROW_LENGTH,Ie.width),x.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Ie.height),x.pixelStorei(U.UNPACK_SKIP_PIXELS,Dt),x.pixelStorei(U.UNPACK_SKIP_ROWS,jt),x.pixelStorei(U.UNPACK_SKIP_IMAGES,oe);let Us=b.isDataArrayTexture||b.isData3DTexture,ye=F.isDataArrayTexture||F.isData3DTexture;if(b.isDepthTexture){let He=H.get(b),Mr=H.get(F),Ce=H.get(He.__renderTarget),br=H.get(Mr.__renderTarget);x.bindFramebuffer(U.READ_FRAMEBUFFER,Ce.__webglFramebuffer),x.bindFramebuffer(U.DRAW_FRAMEBUFFER,br.__webglFramebuffer);for(let Fs=0;Fs<Rt;Fs++)Us&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,H.get(b).__webglTexture,X,oe+Fs),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,H.get(F).__webglTexture,xt,Ye+Fs)),U.blitFramebuffer(Dt,jt,wt,St,Pt,pe,wt,St,U.DEPTH_BUFFER_BIT,U.NEAREST);x.bindFramebuffer(U.READ_FRAMEBUFFER,null),x.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(X!==0||b.isRenderTargetTexture||H.has(b)){let He=H.get(b),Mr=H.get(F);x.bindFramebuffer(U.READ_FRAMEBUFFER,I),x.bindFramebuffer(U.DRAW_FRAMEBUFFER,z);for(let Ce=0;Ce<Rt;Ce++)Us?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,He.__webglTexture,X,oe+Ce):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,He.__webglTexture,X),ye?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Mr.__webglTexture,xt,Ye+Ce):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Mr.__webglTexture,xt),X!==0?U.blitFramebuffer(Dt,jt,wt,St,Pt,pe,wt,St,U.COLOR_BUFFER_BIT,U.NEAREST):ye?U.copyTexSubImage3D(Tt,xt,Pt,pe,Ye+Ce,Dt,jt,wt,St):U.copyTexSubImage2D(Tt,xt,Pt,pe,Dt,jt,wt,St);x.bindFramebuffer(U.READ_FRAMEBUFFER,null),x.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else ye?b.isDataTexture||b.isData3DTexture?U.texSubImage3D(Tt,xt,Pt,pe,Ye,wt,St,Rt,be,xn,Ie.data):F.isCompressedArrayTexture?U.compressedTexSubImage3D(Tt,xt,Pt,pe,Ye,wt,St,Rt,be,Ie.data):U.texSubImage3D(Tt,xt,Pt,pe,Ye,wt,St,Rt,be,xn,Ie):b.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,xt,Pt,pe,wt,St,be,xn,Ie.data):b.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,xt,Pt,pe,Ie.width,Ie.height,be,Ie.data):U.texSubImage2D(U.TEXTURE_2D,xt,Pt,pe,wt,St,be,xn,Ie);x.pixelStorei(U.UNPACK_ROW_LENGTH,Dn),x.pixelStorei(U.UNPACK_IMAGE_HEIGHT,de),x.pixelStorei(U.UNPACK_SKIP_PIXELS,pi),x.pixelStorei(U.UNPACK_SKIP_ROWS,zi),x.pixelStorei(U.UNPACK_SKIP_IMAGES,Sr),xt===0&&F.generateMipmaps&&U.generateMipmap(Tt),x.unbindTexture()},this.initRenderTarget=function(b){H.get(b).__webglFramebuffer===void 0&&tt.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?tt.setTextureCube(b,0):b.isData3DTexture?tt.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?tt.setTexture2DArray(b,0):tt.setTexture2D(b,0),x.unbindTexture()},this.resetState=function(){q=0,k=0,et=null,x.reset(),_t.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ii}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=le._getDrawingBufferColorSpace(t),e.unpackColorSpace=le._getUnpackColorSpace()}};function ur(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function Hm(r,t){r.prototype=Object.create(t.prototype),r.prototype.constructor=r,r.__proto__=t}var $n={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Fo={duration:.5,overwrite:!1,delay:0},qf,pn,Ne,Mi=1e8,Ee=1/Mi,Ff=Math.PI*2,mM=Ff/4,gM=0,Wm=Math.sqrt,_M=Math.cos,xM=Math.sin,tn=function(t){return typeof t=="string"},ze=function(t){return typeof t=="function"},dr=function(t){return typeof t=="number"},yh=function(t){return typeof t>"u"},ji=function(t){return typeof t=="object"},Jn=function(t){return t!==!1},Yf=function(){return typeof window<"u"},uh=function(t){return ze(t)||tn(t)},Xm=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Tn=Array.isArray,vM=/random\([^)]+\)/g,yM=/,\s*/g,Um=/(?:-?\.?\d|\.)+/gi,Zf=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,_s=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Rf=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Jf=/[+-]=-?[.\d]+/,SM=/[^,'"\[\]\s]+/gi,MM=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Fe,Ki,Of,$f,ai={},mh={},qm,Ym=function(t){return(mh=_a(t,ai))&&wn},Sh=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},Oo=function(t,e){return!e&&console.warn(t)},Zm=function(t,e){return t&&(ai[t]=e)&&mh&&(mh[t]=e)||ai},Bo=function(){return 0},bM={suppressEvents:!0,isStart:!0,kill:!1},fh={suppressEvents:!0,kill:!1},TM={suppressEvents:!0},Kf={},Gr=[],Bf={},Jm,Yn={},Pf={},Fm=30,dh=[],Qf="",jf=function(t){var e=t[0],n,i;if(ji(e)||ze(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(i=dh.length;i--&&!dh[i].targetTest(e););n=dh[i]}for(i=t.length;i--;)t[i]&&(t[i]._gsap||(t[i]._gsap=new id(t[i],n)))||t.splice(i,1);return t},Hr=function(t){return t._gsap||jf(bi(t))[0]._gsap},td=function(t,e,n){return(n=t[e])&&ze(n)?t[e]():yh(n)&&t.getAttribute&&t.getAttribute(e)||n},Fn=function(t,e){return(t=t.split(",")).forEach(e)||t},ke=function(t){return Math.round(t*1e5)/1e5||0},Ue=function(t){return Math.round(t*1e7)/1e7||0},xs=function(t,e){var n=e.charAt(0),i=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+i:n==="-"?t-i:n==="*"?t*i:t/i},wM=function(t,e){for(var n=e.length,i=0;t.indexOf(e[i])<0&&++i<n;);return i<n},gh=function(){var t=Gr.length,e=Gr.slice(0),n,i;for(Bf={},Gr.length=0,n=0;n<t;n++)i=e[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},ed=function(t){return!!(t._initted||t._startAt||t.add)},$m=function(t,e,n,i){Gr.length&&!pn&&gh(),t.render(e,n,i||!!(pn&&e<0&&ed(t))),Gr.length&&!pn&&gh()},Km=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(SM).length<2?e:tn(t)?t.trim():t},Qm=function(t){return t},oi=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},EM=function(t){return function(e,n){for(var i in n)i in e||i==="duration"&&t||i==="ease"||(e[i]=n[i])}},_a=function(t,e){for(var n in e)t[n]=e[n];return t},Om=function r(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=ji(e[n])?r(t[n]||(t[n]={}),e[n]):e[n]);return t},_h=function(t,e){var n={},i;for(i in t)i in e||(n[i]=t[i]);return n},Do=function(t){var e=t.parent||Fe,n=t.keyframes?EM(Tn(t.keyframes)):oi;if(Jn(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},AM=function(t,e){for(var n=t.length,i=n===e.length;i&&n--&&t[n]===e[n];);return n<0},jm=function(t,e,n,i,s){n===void 0&&(n="_first"),i===void 0&&(i="_last");var a=t[i],o;if(s)for(o=e[s];a&&a[s]>o;)a=a._prev;return a?(e._next=a._next,a._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[i]=e,e._prev=a,e.parent=e._dp=t,e},Mh=function(t,e,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=e._prev,a=e._next;s?s._next=a:t[n]===e&&(t[n]=a),a?a._prev=s:t[i]===e&&(t[i]=s),e._next=e._prev=e.parent=null},Wr=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},ps=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},CM=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},zf=function(t,e,n,i){return t._startAt&&(pn?t._startAt.revert(fh):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,i))},RM=function r(t){return!t||t._ts&&r(t.parent)},Bm=function(t){return t._repeat?xa(t._tTime,t=t.duration()+t._rDelay)*t:0},xa=function(t,e){var n=Math.floor(t=Ue(t/e));return t&&n===t?n-1:n},xh=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},bh=function(t){return t._end=Ue(t._start+(t._tDur/Math.abs(t._ts||t._rts||Ee)||0))},Th=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=Ue(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),bh(t),n._dirty||ps(n,t)),t},tg=function(t,e){var n;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(n=xh(t.rawTime(),e),(!e._dur||Vo(0,e.totalDuration(),n)-e._tTime>Ee)&&e.render(n,!0)),ps(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-Ee}},Qi=function(t,e,n,i){return e.parent&&Wr(e),e._start=Ue((dr(n)?n:n||t!==Fe?Si(t,n,e):t._time)+e._delay),e._end=Ue(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),jm(t,e,"_first","_last",t._sort?"_start":0),kf(e)||(t._recent=e),i||tg(t,e),t._ts<0&&Th(t,t._tTime),t},eg=function(t,e){return(ai.ScrollTrigger||Sh("scrollTrigger",e))&&ai.ScrollTrigger.create(e,t)},ng=function(t,e,n,i,s){if(ad(t,e,s),!t._initted)return 1;if(!n&&t._pt&&!pn&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&Jm!==Zn.frame)return Gr.push(t),t._lazy=[s,i],1},PM=function r(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||r(e))},kf=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},IM=function(t,e,n,i){var s=t.ratio,a=e<0||!e&&(!t._start&&PM(t)&&!(!t._initted&&kf(t))||(t._ts<0||t._dp._ts<0)&&!kf(t))?0:1,o=t._rDelay,l=0,c,h,d;if(o&&t._repeat&&(l=Vo(0,t._tDur,e),h=xa(l,o),t._yoyo&&h&1&&(a=1-a),h!==xa(t._tTime,o)&&(s=1-a,t.vars.repeatRefresh&&t._initted&&t.invalidate())),a!==s||pn||i||t._zTime===Ee||!e&&t._zTime){if(!t._initted&&ng(t,e,i,n,l))return;for(d=t._zTime,t._zTime=e||(n?Ee:0),n||(n=e&&!d),t.ratio=a,t._from&&(a=1-a),t._time=0,t._tTime=l,c=t._pt;c;)c.r(a,c.d),c=c._next;e<0&&zf(t,e,n,!0),t._onUpdate&&!n&&si(t,"onUpdate"),l&&t._repeat&&!n&&t.parent&&si(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===a&&(a&&Wr(t,1),!n&&!pn&&(si(t,a?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},LM=function(t,e,n){var i;if(n>e)for(i=t._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<e)return i;i=i._prev}},va=function(t,e,n,i){var s=t._repeat,a=Ue(e)||0,o=t._tTime/t._tDur;return o&&!i&&(t._time*=a/t._dur),t._dur=a,t._tDur=s?s<0?1e10:Ue(a*(s+1)+t._rDelay*s):a,o>0&&!i&&Th(t,t._tTime=t._tDur*o),t.parent&&bh(t),n||ps(t.parent,t),t},zm=function(t){return t instanceof bn?ps(t):va(t,t._dur)},DM={_start:0,endTime:Bo,totalDuration:Bo},Si=function r(t,e,n){var i=t.labels,s=t._recent||DM,a=t.duration()>=Mi?s.endTime(!1):t._dur,o,l,c;return tn(e)&&(isNaN(e)||e in i)?(l=e.charAt(0),c=e.substr(-1)==="%",o=e.indexOf("="),l==="<"||l===">"?(o>=0&&(e=e.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(e.substr(1))||0)*(c?(o<0?s:n).totalDuration()/100:1)):o<0?(e in i||(i[e]=a),i[e]):(l=parseFloat(e.charAt(o-1)+e.substr(o+1)),c&&n&&(l=l/100*(Tn(n)?n[0]:n).totalDuration()),o>1?r(t,e.substr(0,o-1),n)+l:a+l)):e==null?a:+e},No=function(t,e,n){var i=dr(e[1]),s=(i?2:1)+(t<2?0:1),a=e[s],o,l;if(i&&(a.duration=e[1]),a.parent=n,t){for(o=a,l=n;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=Jn(l.vars.inherit)&&l.parent;a.immediateRender=Jn(o.immediateRender),t<2?a.runBackwards=1:a.startAt=e[s-1]}return new We(e[0],a,e[s+1])},Xr=function(t,e){return t||t===0?e(t):e},Vo=function(t,e,n){return n<t?t:n>e?e:n},mn=function(t,e){return!tn(t)||!(e=MM.exec(t))?"":e[1]},NM=function(t,e,n){return Xr(n,function(i){return Vo(t,e,i)})},Vf=[].slice,ig=function(t,e){return t&&ji(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&ji(t[0]))&&!t.nodeType&&t!==Ki},UM=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(i){var s;return tn(i)&&!e||ig(i,1)?(s=n).push.apply(s,bi(i)):n.push(i)})||n},bi=function(t,e,n){return Ne&&!e&&Ne.selector?Ne.selector(t):tn(t)&&!n&&(Of||!ya())?Vf.call((e||$f).querySelectorAll(t),0):Tn(t)?UM(t,n):ig(t)?Vf.call(t,0):t?[t]:[]},Gf=function(t){return t=bi(t)[0]||Oo("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return bi(e,n.querySelectorAll?n:n===t?Oo("Invalid scope")||$f.createElement("div"):t)}},rg=function(t){return t.sort(function(){return .5-Math.random()})},sg=function(t){if(ze(t))return t;var e=ji(t)?t:{each:t},n=ms(e.ease),i=e.from||0,s=parseFloat(e.base)||0,a={},o=i>0&&i<1,l=isNaN(i)||o,c=e.axis,h=i,d=i;return tn(i)?h=d={center:.5,edges:.5,end:1}[i]||0:!o&&l&&(h=i[0],d=i[1]),function(u,f,g){var _=(g||e).length,p=a[_],m,M,A,y,S,T,E,v,w;if(!p){if(w=e.grid==="auto"?0:(e.grid||[1,Mi])[1],!w){for(E=-Mi;E<(E=g[w++].getBoundingClientRect().left)&&w<_;);w<_&&w--}for(p=a[_]=[],m=l?Math.min(w,_)*h-.5:i%w,M=w===Mi?0:l?_*d/w-.5:i/w|0,E=0,v=Mi,T=0;T<_;T++)A=T%w-m,y=M-(T/w|0),p[T]=S=c?Math.abs(c==="y"?y:A):Wm(A*A+y*y),S>E&&(E=S),S<v&&(v=S);i==="random"&&rg(p),p.max=E-v,p.min=v,p.v=_=(parseFloat(e.amount)||parseFloat(e.each)*(w>_?_-1:c?c==="y"?_/w:w:Math.max(w,_/w))||0)*(i==="edges"?-1:1),p.b=_<0?s-_:s,p.u=mn(e.amount||e.each)||0,n=n&&_<0?ZM(n):n}return _=(p[u]-p.min)/p.max||0,Ue(p.b+(n?n(_):_)*p.v)+p.u}},Hf=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var i=Ue(Math.round(parseFloat(n)/t)*t*e);return(i-i%1)/e+(dr(n)?0:mn(n))}},ag=function(t,e){var n=Tn(t),i,s;return!n&&ji(t)&&(i=n=t.radius||Mi,t.values?(t=bi(t.values),(s=!dr(t[0]))&&(i*=i)):t=Hf(t.increment)),Xr(e,n?ze(t)?function(a){return s=t(a),Math.abs(s-a)<=i?s:a}:function(a){for(var o=parseFloat(s?a.x:a),l=parseFloat(s?a.y:0),c=Mi,h=0,d=t.length,u,f;d--;)s?(u=t[d].x-o,f=t[d].y-l,u=u*u+f*f):u=Math.abs(t[d]-o),u<c&&(c=u,h=d);return h=!i||c<=i?t[h]:a,s||h===a||dr(a)?h:h+mn(a)}:Hf(t))},og=function(t,e,n,i){return Xr(Tn(t)?!e:n===!0?!!(n=0):!i,function(){return Tn(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*i)/i})},FM=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(i){return e.reduce(function(s,a){return a(s)},i)}},OM=function(t,e){return function(n){return t(parseFloat(n))+(e||mn(n))}},BM=function(t,e,n){return cg(t,e,0,1,n)},lg=function(t,e,n){return Xr(n,function(i){return t[~~e(i)]})},zM=function r(t,e,n){var i=e-t;return Tn(t)?lg(t,r(0,t.length),e):Xr(n,function(s){return(i+(s-t)%i)%i+t})},kM=function r(t,e,n){var i=e-t,s=i*2;return Tn(t)?lg(t,r(0,t.length-1),e):Xr(n,function(a){return a=(s+(a-t)%s)%s||0,t+(a>i?s-a:a)})},Sa=function(t){return t.replace(vM,function(e){var n=e.indexOf("[")+1,i=e.substring(n||7,n?e.indexOf("]"):e.length-1).split(yM);return og(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},cg=function(t,e,n,i,s){var a=e-t,o=i-n;return Xr(s,function(l){return n+((l-t)/a*o||0)})},VM=function r(t,e,n,i){var s=isNaN(t+e)?0:function(f){return(1-f)*t+f*e};if(!s){var a=tn(t),o={},l,c,h,d,u;if(n===!0&&(i=1)&&(n=null),a)t={p:t},e={p:e};else if(Tn(t)&&!Tn(e)){for(h=[],d=t.length,u=d-2,c=1;c<d;c++)h.push(r(t[c-1],t[c]));d--,s=function(g){g*=d;var _=Math.min(u,~~g);return h[_](g-_)},n=e}else i||(t=_a(Tn(t)?[]:{},t));if(!h){for(l in e)rd.call(o,t,l,"get",e[l]);s=function(g){return cd(g,o)||(a?t.p:t)}}}return Xr(n,s)},km=function(t,e,n){var i=t.labels,s=Mi,a,o,l;for(a in i)o=i[a]-e,o<0==!!n&&o&&s>(o=Math.abs(o))&&(l=a,s=o);return l},si=function(t,e,n){var i=t.vars,s=i[e],a=Ne,o=t._ctx,l,c,h;if(s)return l=i[e+"Params"],c=i.callbackScope||t,n&&Gr.length&&gh(),o&&(Ne=o),h=l?s.apply(c,l):s.call(c),Ne=a,h},Io=function(t){return Wr(t),t.scrollTrigger&&t.scrollTrigger.kill(!!pn),t.progress()<1&&si(t,"onInterrupt"),t},ga,hg=[],ug=function(t){if(t)if(t=!t.name&&t.default||t,Yf()||t.headless){var e=t.name,n=ze(t),i=e&&!n&&t.init?function(){this._props=[]}:t,s={init:Bo,render:cd,add:rd,kill:rb,modifier:ib,rawVars:0},a={targetTest:0,get:0,getSetter:wh,aliases:{},register:0};if(ya(),t!==i){if(Yn[e])return;oi(i,oi(_h(t,s),a)),_a(i.prototype,_a(s,_h(t,a))),Yn[i.prop=e]=i,t.targetTest&&(dh.push(i),Kf[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}Zm(e,i),t.register&&t.register(wn,i,On)}else hg.push(t)},we=255,Lo={aqua:[0,we,we],lime:[0,we,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,we],navy:[0,0,128],white:[we,we,we],olive:[128,128,0],yellow:[we,we,0],orange:[we,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[we,0,0],pink:[we,192,203],cyan:[0,we,we],transparent:[we,we,we,0]},If=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*we+.5|0},fg=function(t,e,n){var i=t?dr(t)?[t>>16,t>>8&we,t&we]:0:Lo.black,s,a,o,l,c,h,d,u,f,g;if(!i){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),Lo[t])i=Lo[t];else if(t.charAt(0)==="#"){if(t.length<6&&(s=t.charAt(1),a=t.charAt(2),o=t.charAt(3),t="#"+s+s+a+a+o+o+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return i=parseInt(t.substr(1,6),16),[i>>16,i>>8&we,i&we,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),i=[t>>16,t>>8&we,t&we]}else if(t.substr(0,3)==="hsl"){if(i=g=t.match(Um),!e)l=+i[0]%360/360,c=+i[1]/100,h=+i[2]/100,a=h<=.5?h*(c+1):h+c-h*c,s=h*2-a,i.length>3&&(i[3]*=1),i[0]=If(l+1/3,s,a),i[1]=If(l,s,a),i[2]=If(l-1/3,s,a);else if(~t.indexOf("="))return i=t.match(Zf),n&&i.length<4&&(i[3]=1),i}else i=t.match(Um)||Lo.transparent;i=i.map(Number)}return e&&!g&&(s=i[0]/we,a=i[1]/we,o=i[2]/we,d=Math.max(s,a,o),u=Math.min(s,a,o),h=(d+u)/2,d===u?l=c=0:(f=d-u,c=h>.5?f/(2-d-u):f/(d+u),l=d===s?(a-o)/f+(a<o?6:0):d===a?(o-s)/f+2:(s-a)/f+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(h*100+.5)),n&&i.length<4&&(i[3]=1),i},dg=function(t){var e=[],n=[],i=-1;return t.split(fr).forEach(function(s){var a=s.match(_s)||[];e.push.apply(e,a),n.push(i+=a.length+1)}),e.c=n,e},Vm=function(t,e,n){var i="",s=(t+i).match(fr),a=e?"hsla(":"rgba(",o=0,l,c,h,d;if(!s)return t;if(s=s.map(function(u){return(u=fg(u,e,1))&&a+(e?u[0]+","+u[1]+"%,"+u[2]+"%,"+u[3]:u.join(","))+")"}),n&&(h=dg(t),l=n.c,l.join(i)!==h.c.join(i)))for(c=t.replace(fr,"1").split(_s),d=c.length-1;o<d;o++)i+=c[o]+(~l.indexOf(o)?s.shift()||a+"0,0,0,0)":(h.length?h:s.length?s:n).shift());if(!c)for(c=t.split(fr),d=c.length-1;o<d;o++)i+=c[o]+s[o];return i+c[d]},fr=(function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in Lo)r+="|"+t+"\\b";return new RegExp(r+")","gi")})(),GM=/hsl[a]?\(/,nd=function(t){var e=t.join(" "),n;if(fr.lastIndex=0,fr.test(e))return n=GM.test(e),t[1]=Vm(t[1],n),t[0]=Vm(t[0],n,dg(t[1])),!0},zo,Zn=(function(){var r=Date.now,t=500,e=33,n=r(),i=n,s=1e3/240,a=s,o=[],l,c,h,d,u,f,g=function _(p){var m=r()-i,M=p===!0,A,y,S,T;if((m>t||m<0)&&(n+=m-e),i+=m,S=i-n,A=S-a,(A>0||M)&&(T=++d.frame,u=S-d.time*1e3,d.time=S=S/1e3,a+=A+(A>=s?4:s-A),y=1),M||(l=c(_)),y)for(f=0;f<o.length;f++)o[f](S,u,T,p)};return d={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(p){return u/(1e3/(p||60))},wake:function(){qm&&(!Of&&Yf()&&(Ki=Of=window,$f=Ki.document||{},ai.gsap=wn,(Ki.gsapVersions||(Ki.gsapVersions=[])).push(wn.version),Ym(mh||Ki.GreenSockGlobals||!Ki.gsap&&Ki||{}),hg.forEach(ug)),h=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&d.sleep(),c=h||function(p){return setTimeout(p,a-d.time*1e3+1|0)},zo=1,g(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(l),zo=0,c=Bo},lagSmoothing:function(p,m){t=p||1/0,e=Math.min(m||33,t)},fps:function(p){s=1e3/(p||240),a=d.time*1e3+s},add:function(p,m,M){var A=m?function(y,S,T,E){p(y,S,T,E),d.remove(A)}:p;return d.remove(p),o[M?"unshift":"push"](A),ya(),A},remove:function(p,m){~(m=o.indexOf(p))&&o.splice(m,1)&&f>=m&&f--},_listeners:o},d})(),ya=function(){return!zo&&Zn.wake()},he={},HM=/^[\d.\-M][\d.\-,\s]/,WM=/["']/g,XM=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),i=n[0],s=1,a=n.length,o,l,c;s<a;s++)l=n[s],o=s!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),e[i]=isNaN(c)?c.replace(WM,"").trim():+c,i=l.substr(o+1).trim();return e},qM=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<n?t.indexOf(")",n+1):n)},YM=function(t){var e=(t+"").split("("),n=he[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[XM(e[1])]:qM(t).split(",").map(Km)):he._CE&&HM.test(t)?he._CE("",t):n},ZM=function(t){return function(e){return 1-t(1-e)}},ms=function(t,e){return t&&(ze(t)?t:he[t]||YM(t))||e},vs=function(t,e,n,i){n===void 0&&(n=function(l){return 1-e(1-l)}),i===void 0&&(i=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var s={easeIn:e,easeOut:n,easeInOut:i},a;return Fn(t,function(o){he[o]=ai[o]=s,he[a=o.toLowerCase()]=n;for(var l in s)he[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=he[o+"."+l]=s[l]}),s},pg=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},Lf=function r(t,e,n){var i=e>=1?e:1,s=(n||(t?.3:.45))/(e<1?e:1),a=s/Ff*(Math.asin(1/i)||0),o=function(h){return h===1?1:i*Math.pow(2,-10*h)*xM((h-a)*s)+1},l=t==="out"?o:t==="in"?function(c){return 1-o(1-c)}:pg(o);return s=Ff/s,l.config=function(c,h){return r(t,c,h)},l},Df=function r(t,e){e===void 0&&(e=1.70158);var n=function(a){return a?--a*a*((e+1)*a+e)+1:0},i=t==="out"?n:t==="in"?function(s){return 1-n(1-s)}:pg(n);return i.config=function(s){return r(t,s)},i};Fn("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,t){var e=t<5?t+1:t;vs(r+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});he.Linear.easeNone=he.none=he.Linear.easeIn;vs("Elastic",Lf("in"),Lf("out"),Lf());(function(r,t){var e=1/t,n=2*e,i=2.5*e,s=function(o){return o<e?r*o*o:o<n?r*Math.pow(o-1.5/t,2)+.75:o<i?r*(o-=2.25/t)*o+.9375:r*Math.pow(o-2.625/t,2)+.984375};vs("Bounce",function(a){return 1-s(1-a)},s)})(7.5625,2.75);vs("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});vs("Circ",function(r){return-(Wm(1-r*r)-1)});vs("Sine",function(r){return r===1?1:-_M(r*mM)+1});vs("Back",Df("in"),Df("out"),Df());he.SteppedEase=he.steps=ai.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,i=t+(e?0:1),s=e?1:0,a=1-Ee;return function(o){return((i*Vo(0,a,o)|0)+s)*n}}};Fo.ease=he["quad.out"];Fn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return Qf+=r+","+r+"Params,"});var id=function(t,e){this.id=gM++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:td,this.set=e?e.getSetter:wh},ko=(function(){function r(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,va(this,+e.duration,1,1),this.data=e.data,Ne&&(this._ctx=Ne,Ne.data.push(this)),zo||Zn.wake()}var t=r.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,va(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,i){if(ya(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Th(this,n),!s._dp||s.parent||tg(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Qi(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===Ee||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),$m(this,n,i)),this},t.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Bm(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},t.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Bm(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?xa(this._tTime,s)+1:1},t.timeScale=function(n,i){if(!arguments.length)return this._rts===-Ee?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?xh(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-Ee?0:this._rts,this.totalTime(Vo(-Math.abs(this._delay),this.totalDuration(),s),i!==!1),bh(this),CM(this)},t.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(ya(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Ee&&(this._tTime-=Ee)))),this):this._ps},t.startTime=function(n){if(arguments.length){this._start=Ue(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Qi(i,this,this._start-this._delay),this}return this._start},t.endTime=function(n){return this._start+(Jn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?xh(i.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=TM);var i=pn;return pn=n,ed(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),pn=i,this},t.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,zm(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,zm(this),i?this.time(i):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,i){return this.totalTime(Si(this,n),Jn(i))},t.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Jn(i)),this._dur||(this._zTime=-Ee),this},t.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},t.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},t.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Ee:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-Ee,this},t.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-Ee)},t.eventCallback=function(n,i,s){var a=this.vars;return arguments.length>1?(i?(a[n]=i,s&&(a[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete a[n],this):a[n]},t.then=function(n){var i=this,s=i._prom;return new Promise(function(a){var o=ze(n)?n:Qm,l=function(){var h=i.then;i.then=null,s&&s(),ze(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=h),a(o),i.then=h};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},t.kill=function(){Io(this)},r})();oi(ko.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Ee,_prom:0,_ps:!1,_rts:1});var bn=(function(r){Hm(t,r);function t(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=Jn(n.sortChildren),Fe&&Qi(n.parent||Fe,ur(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&eg(ur(s),n.scrollTrigger),s}var e=t.prototype;return e.to=function(i,s,a){return No(0,arguments,this),this},e.from=function(i,s,a){return No(1,arguments,this),this},e.fromTo=function(i,s,a,o){return No(2,arguments,this),this},e.set=function(i,s,a){return s.duration=0,s.parent=this,Do(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new We(i,s,Si(this,a),1),this},e.call=function(i,s,a){return Qi(this,We.delayedCall(0,i,s),a)},e.staggerTo=function(i,s,a,o,l,c,h){return a.duration=s,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=h,a.parent=this,new We(i,a,Si(this,l)),this},e.staggerFrom=function(i,s,a,o,l,c,h){return a.runBackwards=1,Do(a).immediateRender=Jn(a.immediateRender),this.staggerTo(i,s,a,o,l,c,h)},e.staggerFromTo=function(i,s,a,o,l,c,h,d){return o.startAt=a,Do(o).immediateRender=Jn(o.immediateRender),this.staggerTo(i,s,o,l,c,h,d)},e.render=function(i,s,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,h=i<=0?0:Ue(i),d=this._zTime<0!=i<0&&(this._initted||!c),u,f,g,_,p,m,M,A,y,S,T,E;if(this!==Fe&&h>l&&i>=0&&(h=l),h!==this._tTime||a||d){if(o!==this._time&&c&&(h+=this._time-o,i+=this._time-o),u=h,y=this._start,A=this._ts,m=!A,d&&(c||(o=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(T=this._yoyo,p=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(p*100+i,s,a);if(u=Ue(h%p),h===l?(_=this._repeat,u=c):(S=Ue(h/p),_=~~S,_&&_===S&&(u=c,_--),u>c&&(u=c)),S=xa(this._tTime,p),!o&&this._tTime&&S!==_&&this._tTime-S*p-this._dur<=0&&(S=_),T&&_&1&&(u=c-u,E=1),_!==S&&!this._lock){var v=T&&S&1,w=v===(T&&_&1);if(_<S&&(v=!v),o=v?0:h%c?c:h,this._lock=1,this.render(o||(E?0:Ue(_*p)),s,!c)._lock=0,this._tTime=h,!s&&this.parent&&si(this,"onRepeat"),this.vars.repeatRefresh&&!E&&(this.invalidate()._lock=1,S=_),o&&o!==this._time||m!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,w&&(this._lock=2,o=v?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!E&&this.invalidate()),this._lock=0,!this._ts&&!m)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(M=LM(this,Ue(o),Ue(u)),M&&(h-=u-(u=M._start))),this._tTime=h,this._time=u,this._act=!!A,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,o=0),!o&&h&&c&&!s&&!S&&(si(this,"onStart"),this._tTime!==h))return this;if(u>=o&&i>=0)for(f=this._first;f;){if(g=f._next,(f._act||u>=f._start)&&f._ts&&M!==f){if(f.parent!==this)return this.render(i,s,a);if(f.render(f._ts>0?(u-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(u-f._start)*f._ts,s,a),u!==this._time||!this._ts&&!m){M=0,g&&(h+=this._zTime=-Ee);break}}f=g}else{f=this._last;for(var R=i<0?i:u;f;){if(g=f._prev,(f._act||R<=f._end)&&f._ts&&M!==f){if(f.parent!==this)return this.render(i,s,a);if(f.render(f._ts>0?(R-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(R-f._start)*f._ts,s,a||pn&&ed(f)),u!==this._time||!this._ts&&!m){M=0,g&&(h+=this._zTime=R?-Ee:Ee);break}}f=g}}if(M&&!s&&(this.pause(),M.render(u>=o?0:-Ee)._zTime=u>=o?1:-1,this._ts))return this._start=y,bh(this),this.render(i,s,a);this._onUpdate&&!s&&si(this,"onUpdate",!0),(h===l&&this._tTime>=this.totalDuration()||!h&&o)&&(y===this._start||Math.abs(A)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(h===l&&this._ts>0||!h&&this._ts<0)&&Wr(this,1),!s&&!(i<0&&!o)&&(h||o||!l)&&(si(this,h===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(i,s){var a=this;if(dr(s)||(s=Si(this,s,i)),!(i instanceof ko)){if(Tn(i))return i.forEach(function(o){return a.add(o,s)}),this;if(tn(i))return this.addLabel(i,s);if(ze(i))i=We.delayedCall(0,i);else return this}return this!==i?Qi(this,i,s):this},e.getChildren=function(i,s,a,o){i===void 0&&(i=!0),s===void 0&&(s=!0),a===void 0&&(a=!0),o===void 0&&(o=-Mi);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof We?s&&l.push(c):(a&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,a)))),c=c._next;return l},e.getById=function(i){for(var s=this.getChildren(1,1,1),a=s.length;a--;)if(s[a].vars.id===i)return s[a]},e.remove=function(i){return tn(i)?this.removeLabel(i):ze(i)?this.killTweensOf(i):(i.parent===this&&Mh(this,i),i===this._recent&&(this._recent=this._last),ps(this))},e.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Ue(Zn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},e.addLabel=function(i,s){return this.labels[i]=Si(this,s),this},e.removeLabel=function(i){return delete this.labels[i],this},e.addPause=function(i,s,a){var o=We.delayedCall(0,s||Bo,a);return o.data="isPause",this._hasPause=1,Qi(this,o,Si(this,i))},e.removePause=function(i){var s=this._first;for(i=Si(this,i);s;)s._start===i&&s.data==="isPause"&&Wr(s),s=s._next},e.killTweensOf=function(i,s,a){for(var o=this.getTweensOf(i,a),l=o.length;l--;)Vr!==o[l]&&o[l].kill(i,s);return this},e.getTweensOf=function(i,s){for(var a=[],o=bi(i),l=this._first,c=dr(s),h;l;)l instanceof We?wM(l._targets,o)&&(c?(!Vr||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&a.push(l):(h=l.getTweensOf(o,s)).length&&a.push.apply(a,h),l=l._next;return a},e.tweenTo=function(i,s){s=s||{};var a=this,o=Si(a,i),l=s,c=l.startAt,h=l.onStart,d=l.onStartParams,u=l.immediateRender,f,g=We.to(a,oi({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||Ee,onStart:function(){if(a.pause(),!f){var p=s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());g._dur!==p&&va(g,p,0,1).render(g._time,!0,!0),f=1}h&&h.apply(g,d||[])}},s));return u?g.render(0):g},e.tweenFromTo=function(i,s,a){return this.tweenTo(s,oi({startAt:{time:Si(this,i)}},a))},e.recent=function(){return this._recent},e.nextLabel=function(i){return i===void 0&&(i=this._time),km(this,Si(this,i))},e.previousLabel=function(i){return i===void 0&&(i=this._time),km(this,Si(this,i),1)},e.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+Ee)},e.shiftChildren=function(i,s,a){a===void 0&&(a=0);var o=this._first,l=this.labels,c;for(i=Ue(i);o;)o._start>=a&&(o._start+=i,o._end+=i),o=o._next;if(s)for(c in l)l[c]>=a&&(l[c]+=i);return ps(this)},e.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},e.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,a;s;)a=s._next,this.remove(s),s=a;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),ps(this)},e.totalDuration=function(i){var s=0,a=this,o=a._last,l=Mi,c,h,d;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-i:i));if(a._dirty){for(d=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),h=o._start,h>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,Qi(a,o,h-o._delay,1)._lock=0):l=h,h<0&&o._ts&&(s-=h,(!d&&!a._dp||d&&d.smoothChildTiming)&&(a._start+=Ue(h/a._ts),a._time-=h,a._tTime-=h),a.shiftChildren(-h,!1,-1/0),l=0),o._end>s&&o._ts&&(s=o._end),o=c;va(a,a===Fe&&a._time>s?a._time:s,1,1),a._dirty=0}return a._tDur},t.updateRoot=function(i){if(Fe._ts&&($m(Fe,xh(i,Fe)),Jm=Zn.frame),Zn.frame>=Fm){Fm+=$n.autoSleep||120;var s=Fe._first;if((!s||!s._ts)&&$n.autoSleep&&Zn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Zn.sleep()}}},t})(ko);oi(bn.prototype,{_lock:0,_hasPause:0,_forcing:0});var JM=function(t,e,n,i,s,a,o){var l=new On(this._pt,t,e,0,1,ld,null,s),c=0,h=0,d,u,f,g,_,p,m,M;for(l.b=n,l.e=i,n+="",i+="",(m=~i.indexOf("random("))&&(i=Sa(i)),a&&(M=[n,i],a(M,t,e),n=M[0],i=M[1]),u=n.match(Rf)||[];d=Rf.exec(i);)g=d[0],_=i.substring(c,d.index),f?f=(f+1)%5:_.substr(-5)==="rgba("&&(f=1),g!==u[h++]&&(p=parseFloat(u[h-1])||0,l._pt={_next:l._pt,p:_||h===1?_:",",s:p,c:g.charAt(1)==="="?xs(p,g)-p:parseFloat(g)-p,m:f&&f<4?Math.round:0},c=Rf.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=o,(Jf.test(i)||m)&&(l.e=0),this._pt=l,l},rd=function(t,e,n,i,s,a,o,l,c,h){ze(i)&&(i=i(s||0,t,a));var d=t[e],u=n!=="get"?n:ze(d)?c?t[e.indexOf("set")||!ze(t["get"+e.substr(3)])?e:"get"+e.substr(3)](c):t[e]():d,f=ze(d)?c?tb:_g:od,g;if(tn(i)&&(~i.indexOf("random(")&&(i=Sa(i)),i.charAt(1)==="="&&(g=xs(u,i)+(mn(u)||0),(g||g===0)&&(i=g))),!h||u!==i||Wf)return!isNaN(u*i)&&i!==""?(g=new On(this._pt,t,e,+u||0,i-(u||0),typeof d=="boolean"?nb:xg,0,f),c&&(g.fp=c),o&&g.modifier(o,this,t),this._pt=g):(!d&&!(e in t)&&Sh(e,i),JM.call(this,t,e,u,i,f,l||$n.stringFilter,c))},$M=function(t,e,n,i,s){if(ze(t)&&(t=Uo(t,s,e,n,i)),!ji(t)||t.style&&t.nodeType||Tn(t)||Xm(t))return tn(t)?Uo(t,s,e,n,i):t;var a={},o;for(o in t)a[o]=Uo(t[o],s,e,n,i);return a},sd=function(t,e,n,i,s,a){var o,l,c,h;if(Yn[t]&&(o=new Yn[t]).init(s,o.rawVars?e[t]:$M(e[t],i,s,a,n),n,i,a)!==!1&&(n._pt=l=new On(n._pt,s,t,0,1,o.render,o,0,o.priority),n!==ga))for(c=n._ptLookup[n._targets.indexOf(s)],h=o._props.length;h--;)c[o._props[h]]=l;return o},Vr,Wf,ad=function r(t,e,n){var i=t.vars,s=i.ease,a=i.startAt,o=i.immediateRender,l=i.lazy,c=i.onUpdate,h=i.runBackwards,d=i.yoyoEase,u=i.keyframes,f=i.autoRevert,g=t._dur,_=t._startAt,p=t._targets,m=t.parent,M=m&&m.data==="nested"?m.vars.targets:p,A=t._overwrite==="auto"&&!qf,y=t.timeline,S=i.easeReverse||d,T,E,v,w,R,N,L,V,I,z,q,k,et;if(y&&(!u||!s)&&(s="none"),t._ease=ms(s,Fo.ease),t._rEase=S&&(ms(S)||t._ease),t._from=!y&&!!i.runBackwards,t._from&&(t.ratio=1),!y||u&&!i.stagger){if(V=p[0]?Hr(p[0]).harness:0,k=V&&i[V.prop],T=_h(i,Kf),_&&(_._zTime<0&&_.progress(1),e<0&&h&&o&&!f?_.render(-1,!0):_.revert(h&&g?fh:bM),_._lazy=0),a){if(Wr(t._startAt=We.set(p,oi({data:"isStart",overwrite:!1,parent:m,immediateRender:!0,lazy:!_&&Jn(l),startAt:null,delay:0,onUpdate:c&&function(){return si(t,"onUpdate")},stagger:0},a))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(pn||!o&&!f)&&t._startAt.revert(fh),o&&g&&e<=0&&n<=0){e&&(t._zTime=e);return}}else if(h&&g&&!_){if(e&&(o=!1),v=oi({overwrite:!1,data:"isFromStart",lazy:o&&!_&&Jn(l),immediateRender:o,stagger:0,parent:m},T),k&&(v[V.prop]=k),Wr(t._startAt=We.set(p,v)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(pn?t._startAt.revert(fh):t._startAt.render(-1,!0)),t._zTime=e,!o)r(t._startAt,Ee,Ee);else if(!e)return}for(t._pt=t._ptCache=0,l=g&&Jn(l)||l&&!g,E=0;E<p.length;E++){if(R=p[E],L=R._gsap||jf(p)[E]._gsap,t._ptLookup[E]=z={},Bf[L.id]&&Gr.length&&gh(),q=M===p?E:M.indexOf(R),V&&(I=new V).init(R,k||T,t,q,M)!==!1&&(t._pt=w=new On(t._pt,R,I.name,0,1,I.render,I,0,I.priority),I._props.forEach(function(Z){z[Z]=w}),I.priority&&(N=1)),!V||k)for(v in T)Yn[v]&&(I=sd(v,T,t,q,R,M))?I.priority&&(N=1):z[v]=w=rd.call(t,R,v,"get",T[v],q,M,0,i.stringFilter);t._op&&t._op[E]&&t.kill(R,t._op[E]),A&&t._pt&&(Vr=t,Fe.killTweensOf(R,z,t.globalTime(e)),et=!t.parent,Vr=0),t._pt&&l&&(Bf[L.id]=1)}N&&hd(t),t._onInit&&t._onInit(t)}t._onUpdate=c,t._initted=(!t._op||t._pt)&&!et,u&&e<=0&&y.render(Mi,!0,!0)},KM=function(t,e,n,i,s,a,o,l){var c=(t._pt&&t._ptCache||(t._ptCache={}))[e],h,d,u,f;if(!c)for(c=t._ptCache[e]=[],u=t._ptLookup,f=t._targets.length;f--;){if(h=u[f][e],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==e&&h.fp!==e;)h=h._next;if(!h)return Wf=1,t.vars[e]="+=0",ad(t,o),Wf=0,l?Oo(e+" not eligible for reset. Try splitting into individual properties"):1;c.push(h)}for(f=c.length;f--;)d=c[f],h=d._pt||d,h.s=(i||i===0)&&!s?i:h.s+(i||0)+a*h.c,h.c=n-h.s,d.e&&(d.e=ke(n)+mn(d.e)),d.b&&(d.b=h.s+mn(d.b))},QM=function(t,e){var n=t[0]?Hr(t[0]).harness:0,i=n&&n.aliases,s,a,o,l;if(!i)return e;s=_a({},e);for(a in i)if(a in s)for(l=i[a].split(","),o=l.length;o--;)s[l[o]]=s[a];return s},jM=function(t,e,n,i){var s=e.ease||i||"power1.inOut",a,o;if(Tn(e))o=n[t]||(n[t]=[]),e.forEach(function(l,c){return o.push({t:c/(e.length-1)*100,v:l,e:s})});else for(a in e)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(t),v:e[a],e:s})},Uo=function(t,e,n,i,s){return ze(t)?t.call(e,n,i,s):tn(t)&&~t.indexOf("random(")?Sa(t):t},mg=Qf+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",gg={};Fn(mg+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return gg[r]=1});var We=(function(r){Hm(t,r);function t(n,i,s,a){var o;typeof i=="number"&&(s.duration=i,i=s,s=null),o=r.call(this,a?i:Do(i))||this;var l=o.vars,c=l.duration,h=l.delay,d=l.immediateRender,u=l.stagger,f=l.overwrite,g=l.keyframes,_=l.defaults,p=l.scrollTrigger,m=i.parent||Fe,M=(Tn(n)||Xm(n)?dr(n[0]):"length"in i)?[n]:bi(n),A,y,S,T,E,v,w,R;if(o._targets=M.length?jf(M):Oo("GSAP target "+n+" not found. https://gsap.com",!$n.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=f,g||u||uh(c)||uh(h)){i=o.vars;var N=i.easeReverse||i.yoyoEase;if(A=o.timeline=new bn({data:"nested",defaults:_||{},targets:m&&m.data==="nested"?m.vars.targets:M}),A.kill(),A.parent=A._dp=ur(o),A._start=0,u||uh(c)||uh(h)){if(T=M.length,w=u&&sg(u),ji(u))for(E in u)~mg.indexOf(E)&&(R||(R={}),R[E]=u[E]);for(y=0;y<T;y++)S=_h(i,gg),S.stagger=0,N&&(S.easeReverse=N),R&&_a(S,R),v=M[y],S.duration=+Uo(c,ur(o),y,v,M),S.delay=(+Uo(h,ur(o),y,v,M)||0)-o._delay,!u&&T===1&&S.delay&&(o._delay=h=S.delay,o._start+=h,S.delay=0),A.to(v,S,w?w(y,v,M):0),A._ease=he.none;A.duration()?c=h=0:o.timeline=0}else if(g){Do(oi(A.vars.defaults,{ease:"none"})),A._ease=ms(g.ease||i.ease||"none");var L=0,V,I,z;if(Tn(g))g.forEach(function(q){return A.to(M,q,">")}),A.duration();else{S={};for(E in g)E==="ease"||E==="easeEach"||jM(E,g[E],S,g.easeEach);for(E in S)for(V=S[E].sort(function(q,k){return q.t-k.t}),L=0,y=0;y<V.length;y++)I=V[y],z={ease:I.e,duration:(I.t-(y?V[y-1].t:0))/100*c},z[E]=I.v,A.to(M,z,L),L+=z.duration;A.duration()<c&&A.to({},{duration:c-A.duration()})}}c||o.duration(c=A.duration())}else o.timeline=0;return f===!0&&!qf&&(Vr=ur(o),Fe.killTweensOf(M),Vr=0),Qi(m,ur(o),s),i.reversed&&o.reverse(),i.paused&&o.paused(!0),(d||!c&&!g&&o._start===Ue(m._time)&&Jn(d)&&RM(ur(o))&&m.data!=="nested")&&(o._tTime=-Ee,o.render(Math.max(0,-h)||0)),p&&eg(ur(o),p),o}var e=t.prototype;return e.render=function(i,s,a){var o=this._time,l=this._tDur,c=this._dur,h=i<0,d=i>l-Ee&&!h?l:i<Ee?0:i,u,f,g,_,p,m,M,A;if(!c)IM(this,i,s,a);else if(d!==this._tTime||!i||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h||this._lazy){if(u=d,A=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&h)return this.totalTime(_*100+i,s,a);if(u=Ue(d%_),d===l?(g=this._repeat,u=c):(p=Ue(d/_),g=~~p,g&&g===p?(u=c,g--):u>c&&(u=c)),m=this._yoyo&&g&1,m&&(u=c-u),p=xa(this._tTime,_),u===o&&!a&&this._initted&&g===p)return this._tTime=d,this;g!==p&&this.vars.repeatRefresh&&!m&&!this._lock&&u!==_&&this._initted&&(this._lock=a=1,this.render(Ue(_*g),!0).invalidate()._lock=0)}if(!this._initted){if(ng(this,h?i:u,a,s,d))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&g!==p))return this;if(c!==this._dur)return this.render(i,s,a)}if(this._rEase){var y=u<o;if(y!==this._inv){var S=y?o:c-o;this._inv=y,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=o,this._invRecip=S?(y?-1:1)/S:0,this._invScale=y?-this.ratio:1-this.ratio,this._invEase=y?this._rEase:this._ease}this.ratio=M=this._invRatio+this._invScale*this._invEase((u-this._invTime)*this._invRecip)}else this.ratio=M=this._ease(u/c);if(this._from&&(this.ratio=M=1-M),this._tTime=d,this._time=u,!this._act&&this._ts&&(this._act=1,this._lazy=0),!o&&d&&!s&&!p&&(si(this,"onStart"),this._tTime!==d))return this;for(f=this._pt;f;)f.r(M,f.d),f=f._next;A&&A.render(i<0?i:A._dur*A._ease(u/this._dur),s,a)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(h&&zf(this,i,s,a),si(this,"onUpdate")),this._repeat&&g!==p&&this.vars.onRepeat&&!s&&this.parent&&si(this,"onRepeat"),(d===this._tDur||!d)&&this._tTime===d&&(h&&!this._onUpdate&&zf(this,i,!0,!0),(i||!c)&&(d===this._tDur&&this._ts>0||!d&&this._ts<0)&&Wr(this,1),!s&&!(h&&!o)&&(d||o||m)&&(si(this,d===l?"onComplete":"onReverseComplete",!0),this._prom&&!(d<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},e.resetTo=function(i,s,a,o,l){zo||Zn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||ad(this,c),h=this._ease(c/this._dur),KM(this,i,s,a,o,h,c,l)?this.resetTo(i,s,a,o,1):(Th(this,0),this.parent||jm(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Io(this):this.scrollTrigger&&this.scrollTrigger.kill(!!pn),this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,Vr&&Vr.vars.overwrite!==!0)._first||Io(this),this.parent&&a!==this.timeline.totalDuration()&&va(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=i?bi(i):o,c=this._ptLookup,h=this._pt,d,u,f,g,_,p,m;if((!s||s==="all")&&AM(o,l))return s==="all"&&(this._pt=0),Io(this);for(d=this._op=this._op||[],s!=="all"&&(tn(s)&&(_={},Fn(s,function(M){return _[M]=1}),s=_),s=QM(o,s)),m=o.length;m--;)if(~l.indexOf(o[m])){u=c[m],s==="all"?(d[m]=s,g=u,f={}):(f=d[m]=d[m]||{},g=s);for(_ in g)p=u&&u[_],p&&((!("kill"in p.d)||p.d.kill(_)===!0)&&Mh(this,p,"_pt"),delete u[_]),f!=="all"&&(f[_]=1)}return this._initted&&!this._pt&&h&&Io(this),this},t.to=function(i,s){return new t(i,s,arguments[2])},t.from=function(i,s){return No(1,arguments)},t.delayedCall=function(i,s,a,o){return new t(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},t.fromTo=function(i,s,a){return No(2,arguments)},t.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new t(i,s)},t.killTweensOf=function(i,s,a){return Fe.killTweensOf(i,s,a)},t})(ko);oi(We.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Fn("staggerTo,staggerFrom,staggerFromTo",function(r){We[r]=function(){var t=new bn,e=Vf.call(arguments,0);return e.splice(r==="staggerFromTo"?5:4,0,0),t[r].apply(t,e)}});var od=function(t,e,n){return t[e]=n},_g=function(t,e,n){return t[e](n)},tb=function(t,e,n,i){return t[e](i.fp,n)},eb=function(t,e,n){return t.setAttribute(e,n)},wh=function(t,e){return ze(t[e])?_g:yh(t[e])&&t.setAttribute?eb:od},xg=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},nb=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},ld=function(t,e){var n=e._pt,i="";if(!t&&e.b)i=e.b;else if(t===1&&e.e)i=e.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+i,n=n._next;i+=e.c}e.set(e.t,e.p,i,e)},cd=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},ib=function(t,e,n,i){for(var s=this._pt,a;s;)a=s._next,s.p===i&&s.modifier(t,e,n),s=a},rb=function(t){for(var e=this._pt,n,i;e;)i=e._next,e.p===t&&!e.op||e.op===t?Mh(this,e,"_pt"):e.dep||(n=1),e=i;return!n},sb=function(t,e,n,i){i.mSet(t,e,i.m.call(i.tween,n,i.mt),i)},hd=function(t){for(var e=t._pt,n,i,s,a;e;){for(n=e._next,i=s;i&&i.pr>e.pr;)i=i._next;(e._prev=i?i._prev:a)?e._prev._next=e:s=e,(e._next=i)?i._prev=e:a=e,e=n}t._pt=s},On=(function(){function r(e,n,i,s,a,o,l,c,h){this.t=n,this.s=s,this.c=a,this.p=i,this.r=o||xg,this.d=l||this,this.set=c||od,this.pr=h||0,this._next=e,e&&(e._prev=this)}var t=r.prototype;return t.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=sb,this.m=n,this.mt=s,this.tween=i},r})();Fn(Qf+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(r){return Kf[r]=1});ai.TweenMax=ai.TweenLite=We;ai.TimelineLite=ai.TimelineMax=bn;Fe=new bn({sortChildren:!1,defaults:Fo,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});$n.stringFilter=nd;var gs=[],ph={},ab=[],Gm=0,ob=0,Nf=function(t){return(ph[t]||ab).map(function(e){return e()})},Xf=function(){var t=Date.now(),e=[];t-Gm>2&&(Nf("matchMediaInit"),gs.forEach(function(n){var i=n.queries,s=n.conditions,a,o,l,c;for(o in i)a=Ki.matchMedia(i[o]).matches,a&&(l=1),a!==s[o]&&(s[o]=a,c=1);c&&(n.revert(),l&&e.push(n))}),Nf("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),Gm=t,Nf("matchMedia"))},vg=(function(){function r(e,n){this.selector=n&&Gf(n),this.data=[],this._r=[],this.isReverted=!1,this.id=ob++,e&&this.add(e)}var t=r.prototype;return t.add=function(n,i,s){ze(n)&&(s=i,i=n,n=ze);var a=this,o=function(){var c=Ne,h=a.selector,d;return c&&c!==a&&c.data.push(a),s&&(a.selector=Gf(s)),Ne=a,d=i.apply(a,arguments),ze(d)&&a._r.push(d),Ne=c,a.selector=h,a.isReverted=!1,d};return a.last=o,n===ze?o(a,function(l){return a.add(null,l)}):n?a[n]=o:o},t.ignore=function(n){var i=Ne;Ne=null,n(this),Ne=i},t.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof We&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,i){var s=this;if(n?(function(){for(var o=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(h){return o.splice(o.indexOf(h),1)}));for(o.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}}).sort(function(h,d){return d.g-h.g||-1/0}).forEach(function(h){return h.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof bn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof We)&&c.revert&&c.revert(n);s._r.forEach(function(h){return h(n,s)}),s.isReverted=!0})():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),i)for(var a=gs.length;a--;)gs[a].id===this.id&&gs.splice(a,1)},t.revert=function(n){this.kill(n||{})},r})(),lb=(function(){function r(e){this.contexts=[],this.scope=e,Ne&&Ne.data.push(this)}var t=r.prototype;return t.add=function(n,i,s){ji(n)||(n={matches:n});var a=new vg(0,s||this.scope),o=a.conditions={},l,c,h;Ne&&!a.selector&&(a.selector=Ne.selector),this.contexts.push(a),i=a.add("onMatch",i),a.queries=n;for(c in n)c==="all"?h=1:(l=Ki.matchMedia(n[c]),l&&(gs.indexOf(a)<0&&gs.push(a),(o[c]=l.matches)&&(h=1),l.addListener?l.addListener(Xf):l.addEventListener("change",Xf)));return h&&i(a,function(d){return a.add(null,d)}),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r})(),vh={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(i){return ug(i)})},timeline:function(t){return new bn(t)},getTweensOf:function(t,e){return Fe.getTweensOf(t,e)},getProperty:function(t,e,n,i){tn(t)&&(t=bi(t)[0]);var s=Hr(t||{}).get,a=n?Qm:Km;return n==="native"&&(n=""),t&&(e?a((Yn[e]&&Yn[e].get||s)(t,e,n,i)):function(o,l,c){return a((Yn[o]&&Yn[o].get||s)(t,o,l,c))})},quickSetter:function(t,e,n){if(t=bi(t),t.length>1){var i=t.map(function(h){return wn.quickSetter(h,e,n)}),s=i.length;return function(h){for(var d=s;d--;)i[d](h)}}t=t[0]||{};var a=Yn[e],o=Hr(t),l=o.harness&&(o.harness.aliases||{})[e]||e,c=a?function(h){var d=new a;ga._pt=0,d.init(t,n?h+n:h,ga,0,[t]),d.render(1,d),ga._pt&&cd(1,ga)}:o.set(t,l);return a?c:function(h){return c(t,l,n?h+n:h,o,1)}},quickTo:function(t,e,n){var i,s=wn.to(t,oi((i={},i[e]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),a=function(l,c,h){return s.resetTo(e,l,c,h)};return a.tween=s,a},isTweening:function(t){return Fe.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=ms(t.ease,Fo.ease)),Om(Fo,t||{})},config:function(t){return Om($n,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,i=t.plugins,s=t.defaults,a=t.extendTimeline;(i||"").split(",").forEach(function(o){return o&&!Yn[o]&&!ai[o]&&Oo(e+" effect requires "+o+" plugin.")}),Pf[e]=function(o,l,c){return n(bi(o),oi(l||{},s),c)},a&&(bn.prototype[e]=function(o,l,c){return this.add(Pf[e](o,ji(l)?l:(c=l)&&{},this),c)})},registerEase:function(t,e){he[t]=ms(e)},parseEase:function(t,e){return arguments.length?ms(t,e):he},getById:function(t){return Fe.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new bn(t),i,s;for(n.smoothChildTiming=Jn(t.smoothChildTiming),Fe.remove(n),n._dp=0,n._time=n._tTime=Fe._time,i=Fe._first;i;)s=i._next,(e||!(!i._dur&&i instanceof We&&i.vars.onComplete===i._targets[0]))&&Qi(n,i,i._start-i._delay),i=s;return Qi(Fe,n,0),n},context:function(t,e){return t?new vg(t,e):Ne},matchMedia:function(t){return new lb(t)},matchMediaRefresh:function(){return gs.forEach(function(t){var e=t.conditions,n,i;for(i in e)e[i]&&(e[i]=!1,n=1);n&&t.revert()})||Xf()},addEventListener:function(t,e){var n=ph[t]||(ph[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=ph[t],i=n&&n.indexOf(e);i>=0&&n.splice(i,1)},utils:{wrap:zM,wrapYoyo:kM,distribute:sg,random:og,snap:ag,normalize:BM,getUnit:mn,clamp:NM,splitColor:fg,toArray:bi,selector:Gf,mapRange:cg,pipe:FM,unitize:OM,interpolate:VM,shuffle:rg},install:Ym,effects:Pf,ticker:Zn,updateRoot:bn.updateRoot,plugins:Yn,globalTimeline:Fe,core:{PropTween:On,globals:Zm,Tween:We,Timeline:bn,Animation:ko,getCache:Hr,_removeLinkedListItem:Mh,reverting:function(){return pn},context:function(t){return t&&Ne&&(Ne.data.push(t),t._ctx=Ne),Ne},suppressOverwrites:function(t){return qf=t}}};Fn("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return vh[r]=We[r]});Zn.add(bn.updateRoot);ga=vh.to({},{duration:0});var cb=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},hb=function(t,e){var n=t._targets,i,s,a;for(i in e)for(s=n.length;s--;)a=t._ptLookup[s][i],a&&(a=a.d)&&(a._pt&&(a=cb(a,i)),a&&a.modifier&&a.modifier(e[i],t,n[s],i))},Uf=function(t,e){return{name:t,headless:1,rawVars:1,init:function(i,s,a){a._onInit=function(o){var l,c;if(tn(s)&&(l={},Fn(s,function(h){return l[h]=1}),s=l),e){l={};for(c in s)l[c]=e(s[c]);s=l}hb(o,s)}}}},wn=vh.registerPlugin({name:"attr",init:function(t,e,n,i,s){var a,o,l;this.tween=n;for(a in e)l=t.getAttribute(a)||"",o=this.add(t,"setAttribute",(l||0)+"",e[a],i,s,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(t,e){for(var n=e._pt;n;)pn?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",headless:1,init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},Uf("roundProps",Hf),Uf("modifiers"),Uf("snap",ag))||vh;We.version=bn.version=wn.version="3.15.0";qm=1;Yf()&&ya();var ub=he.Power0,fb=he.Power1,db=he.Power2,pb=he.Power3,mb=he.Power4,gb=he.Linear,_b=he.Quad,xb=he.Cubic,vb=he.Quart,yb=he.Quint,Sb=he.Strong,Mb=he.Elastic,bb=he.Back,Tb=he.SteppedEase,wb=he.Bounce,Eb=he.Sine,Ab=he.Expo,Cb=he.Circ;var yg,qr,ba,gd,bs,Rb,Sg,_d,Pb=function(){return typeof window<"u"},mr={},Ms=180/Math.PI,Ta=Math.PI/180,Ma=Math.atan2,Mg=1e8,xd=/([A-Z])/g,Ib=/(left|right|width|margin|padding|x)/i,Lb=/[\s,\(]\S/,tr={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},fd=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},Db=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},Nb=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},Ub=function(t,e){return e.set(e.t,e.p,t===1?e.e:t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},Fb=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},Pg=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},Ig=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},Ob=function(t,e,n){return t.style[e]=n},Bb=function(t,e,n){return t.style.setProperty(e,n)},zb=function(t,e,n){return t._gsap[e]=n},kb=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},Vb=function(t,e,n,i,s){var a=t._gsap;a.scaleX=a.scaleY=n,a.renderTransform(s,a)},Gb=function(t,e,n,i,s){var a=t._gsap;a[e]=n,a.renderTransform(s,a)},Oe="transform",Kn=Oe+"Origin",Hb=function r(t,e){var n=this,i=this.target,s=i.style,a=i._gsap;if(t in mr&&s){if(this.tfm=this.tfm||{},t!=="transform")t=tr[t]||t,~t.indexOf(",")?t.split(",").forEach(function(o){return n.tfm[o]=pr(i,o)}):this.tfm[t]=a.x?a[t]:pr(i,t),t===Kn&&(this.tfm.zOrigin=a.zOrigin);else return tr.transform.split(",").forEach(function(o){return r.call(n,o,e)});if(this.props.indexOf(Oe)>=0)return;a.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(Kn,e,"")),t=Oe}(s||e)&&this.props.push(t,e,s[t])},Lg=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},Wb=function(){var t=this.props,e=this.target,n=e.style,i=e._gsap,s,a;for(s=0;s<t.length;s+=3)t[s+1]?t[s+1]===2?e[t[s]](t[s+2]):e[t[s]]=t[s+2]:t[s+2]?n[t[s]]=t[s+2]:n.removeProperty(t[s].substr(0,2)==="--"?t[s]:t[s].replace(xd,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)i[a]=this.tfm[a];i.svg&&(i.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),s=_d(),(!s||!s.isStart)&&!n[Oe]&&(Lg(n),i.zOrigin&&n[Kn]&&(n[Kn]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},Dg=function(t,e){var n={target:t,props:[],revert:Wb,save:Hb};return t._gsap||wn.core.getCache(t),e&&t.style&&t.nodeType&&e.split(",").forEach(function(i){return n.save(i)}),n},Ng,dd=function(t,e){var n=qr.createElementNS?qr.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):qr.createElement(t);return n&&n.style?n:qr.createElement(t)},li=function r(t,e,n){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(xd,"-$1").toLowerCase())||i.getPropertyValue(e)||!n&&r(t,wa(e)||e,1)||""},bg="O,Moz,ms,Ms,Webkit".split(","),wa=function(t,e,n){var i=e||bs,s=i.style,a=5;if(t in s&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);a--&&!(bg[a]+t in s););return a<0?null:(a===3?"ms":a>=0?bg[a]:"")+t},pd=function(){Pb()&&window.document&&(yg=window,qr=yg.document,ba=qr.documentElement,bs=dd("div")||{style:{}},Rb=dd("div"),Oe=wa(Oe),Kn=Oe+"Origin",bs.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Ng=!!wa("perspective"),_d=wn.core.reverting,gd=1)},Tg=function(t){var e=t.ownerSVGElement,n=dd("svg",e&&e.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=t.cloneNode(!0),s;i.style.display="block",n.appendChild(i),ba.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),ba.removeChild(n),s},wg=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},Ug=function(t){var e,n;try{e=t.getBBox()}catch{e=Tg(t),n=1}return e&&(e.width||e.height)||n||(e=Tg(t)),e&&!e.width&&!e.x&&!e.y?{x:+wg(t,["x","cx","x1"])||0,y:+wg(t,["y","cy","y1"])||0,width:0,height:0}:e},Fg=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&Ug(t))},Zr=function(t,e){if(e){var n=t.style,i;e in mr&&e!==Kn&&(e=Oe),n.removeProperty?(i=e.substr(0,2),(i==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(i==="--"?e:e.replace(xd,"-$1").toLowerCase())):n.removeAttribute(e)}},Yr=function(t,e,n,i,s,a){var o=new On(t._pt,e,n,0,1,a?Ig:Pg);return t._pt=o,o.b=i,o.e=s,t._props.push(n),o},Eg={deg:1,rad:1,turn:1},Xb={grid:1,flex:1},Jr=function r(t,e,n,i){var s=parseFloat(n)||0,a=(n+"").trim().substr((s+"").length)||"px",o=bs.style,l=Ib.test(e),c=t.tagName.toLowerCase()==="svg",h=(c?"client":"offset")+(l?"Width":"Height"),d=100,u=i==="px",f=i==="%",g,_,p,m;if(i===a||!s||Eg[i]||Eg[a])return s;if(a!=="px"&&!u&&(s=r(t,e,n,"px")),m=t.getCTM&&Fg(t),(f||a==="%")&&(mr[e]||~e.indexOf("adius")))return g=m?t.getBBox()[l?"width":"height"]:t[h],ke(f?s/g*d:s/100*g);if(o[l?"width":"height"]=d+(u?a:i),_=i!=="rem"&&~e.indexOf("adius")||i==="em"&&t.appendChild&&!c?t:t.parentNode,m&&(_=(t.ownerSVGElement||{}).parentNode),(!_||_===qr||!_.appendChild)&&(_=qr.body),p=_._gsap,p&&f&&p.width&&l&&p.time===Zn.time&&!p.uncache)return ke(s/p.width*d);if(f&&(e==="height"||e==="width")){var M=t.style[e];t.style[e]=d+i,g=t[h],M?t.style[e]=M:Zr(t,e)}else(f||a==="%")&&!Xb[li(_,"display")]&&(o.position=li(t,"position")),_===t&&(o.position="static"),_.appendChild(bs),g=bs[h],_.removeChild(bs),o.position="absolute";return l&&f&&(p=Hr(_),p.time=Zn.time,p.width=_[h]),ke(u?g*s/d:g&&s?d/g*s:0)},pr=function(t,e,n,i){var s;return gd||pd(),e in tr&&e!=="transform"&&(e=tr[e],~e.indexOf(",")&&(e=e.split(",")[0])),mr[e]&&e!=="transform"?(s=Wo(t,i),s=e!=="transformOrigin"?s[e]:s.svg?s.origin:Ah(li(t,Kn))+" "+s.zOrigin+"px"):(s=t.style[e],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=Eh[e]&&Eh[e](t,e,n)||li(t,e)||td(t,e)||(e==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?Jr(t,e,s,n)+n:s},qb=function(t,e,n,i){if(!n||n==="none"){var s=wa(e,t,1),a=s&&li(t,s,1);a&&a!==n?(e=s,n=a):e==="borderColor"&&(n=li(t,"borderTopColor"))}var o=new On(this._pt,t.style,e,0,1,ld),l=0,c=0,h,d,u,f,g,_,p,m,M,A,y,S;if(o.b=n,o.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=li(t,i.substring(4,i.indexOf(")")))),i==="auto"&&(_=t.style[e],t.style[e]=i,i=li(t,e)||i,_?t.style[e]=_:Zr(t,e)),h=[n,i],nd(h),n=h[0],i=h[1],u=n.match(_s)||[],S=i.match(_s)||[],S.length){for(;d=_s.exec(i);)p=d[0],M=i.substring(l,d.index),g?g=(g+1)%5:(M.substr(-5)==="rgba("||M.substr(-5)==="hsla(")&&(g=1),p!==(_=u[c++]||"")&&(f=parseFloat(_)||0,y=_.substr((f+"").length),p.charAt(1)==="="&&(p=xs(f,p)+y),m=parseFloat(p),A=p.substr((m+"").length),l=_s.lastIndex-A.length,A||(A=A||$n.units[e]||y,l===i.length&&(i+=A,o.e+=A)),y!==A&&(f=Jr(t,e,_,A)||0),o._pt={_next:o._pt,p:M||c===1?M:",",s:f,c:m-f,m:g&&g<4||e==="zIndex"?Math.round:0});o.c=l<i.length?i.substring(l,i.length):""}else o.r=e==="display"&&i==="none"?Ig:Pg;return Jf.test(i)&&(o.e=0),this._pt=o,o},Ag={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Yb=function(t){var e=t.split(" "),n=e[0],i=e[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(t=n,n=i,i=t),e[0]=Ag[n]||n,e[1]=Ag[i]||i,e.join(" ")},Zb=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,i=n.style,s=e.u,a=n._gsap,o,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)o=s[c],mr[o]&&(l=1,o=o==="transformOrigin"?Kn:Oe),Zr(n,o);l&&(Zr(n,Oe),a&&(a.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",Wo(n,1),a.uncache=1,Lg(i)))}},Eh={clearProps:function(t,e,n,i,s){if(s.data!=="isFromStart"){var a=t._pt=new On(t._pt,e,n,0,0,Zb);return a.u=i,a.pr=-10,a.tween=s,t._props.push(n),1}}},Ho=[1,0,0,1,0,0],Og={},Bg=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},Cg=function(t){var e=li(t,Oe);return Bg(e)?Ho:e.substr(7).match(Zf).map(ke)},vd=function(t,e){var n=t._gsap||Hr(t),i=t.style,s=Cg(t),a,o,l,c;return n.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Ho:s):(s===Ho&&!t.offsetParent&&t!==ba&&!n.svg&&(l=i.display,i.display="block",a=t.parentNode,(!a||!t.offsetParent&&!t.getBoundingClientRect().width)&&(c=1,o=t.nextElementSibling,ba.appendChild(t)),s=Cg(t),l?i.display=l:Zr(t,"display"),c&&(o?a.insertBefore(t,o):a?a.appendChild(t):ba.removeChild(t))),e&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},md=function(t,e,n,i,s,a){var o=t._gsap,l=s||vd(t,!0),c=o.xOrigin||0,h=o.yOrigin||0,d=o.xOffset||0,u=o.yOffset||0,f=l[0],g=l[1],_=l[2],p=l[3],m=l[4],M=l[5],A=e.split(" "),y=parseFloat(A[0])||0,S=parseFloat(A[1])||0,T,E,v,w;n?l!==Ho&&(E=f*p-g*_)&&(v=y*(p/E)+S*(-_/E)+(_*M-p*m)/E,w=y*(-g/E)+S*(f/E)-(f*M-g*m)/E,y=v,S=w):(T=Ug(t),y=T.x+(~A[0].indexOf("%")?y/100*T.width:y),S=T.y+(~(A[1]||A[0]).indexOf("%")?S/100*T.height:S)),i||i!==!1&&o.smooth?(m=y-c,M=S-h,o.xOffset=d+(m*f+M*_)-m,o.yOffset=u+(m*g+M*p)-M):o.xOffset=o.yOffset=0,o.xOrigin=y,o.yOrigin=S,o.smooth=!!i,o.origin=e,o.originIsAbsolute=!!n,t.style[Kn]="0px 0px",a&&(Yr(a,o,"xOrigin",c,y),Yr(a,o,"yOrigin",h,S),Yr(a,o,"xOffset",d,o.xOffset),Yr(a,o,"yOffset",u,o.yOffset)),t.setAttribute("data-svg-origin",y+" "+S)},Wo=function(t,e){var n=t._gsap||new id(t);if("x"in n&&!e&&!n.uncache)return n;var i=t.style,s=n.scaleX<0,a="px",o="deg",l=getComputedStyle(t),c=li(t,Kn)||"0",h,d,u,f,g,_,p,m,M,A,y,S,T,E,v,w,R,N,L,V,I,z,q,k,et,Z,C,nt,Mt,bt,Bt,Ut;return h=d=u=_=p=m=M=A=y=0,f=g=1,n.svg=!!(t.getCTM&&Fg(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Oe]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Oe]!=="none"?l[Oe]:"")),i.scale=i.rotate=i.translate="none"),E=vd(t,n.svg),n.svg&&(n.uncache?(et=t.getBBox(),c=n.xOrigin-et.x+"px "+(n.yOrigin-et.y)+"px",k=""):k=!e&&t.getAttribute("data-svg-origin"),md(t,k||c,!!k||n.originIsAbsolute,n.smooth!==!1,E)),S=n.xOrigin||0,T=n.yOrigin||0,E!==Ho&&(N=E[0],L=E[1],V=E[2],I=E[3],h=z=E[4],d=q=E[5],E.length===6?(f=Math.sqrt(N*N+L*L),g=Math.sqrt(I*I+V*V),_=N||L?Ma(L,N)*Ms:0,M=V||I?Ma(V,I)*Ms+_:0,M&&(g*=Math.abs(Math.cos(M*Ta))),n.svg&&(h-=S-(S*N+T*V),d-=T-(S*L+T*I))):(Ut=E[6],bt=E[7],C=E[8],nt=E[9],Mt=E[10],Bt=E[11],h=E[12],d=E[13],u=E[14],v=Ma(Ut,Mt),p=v*Ms,v&&(w=Math.cos(-v),R=Math.sin(-v),k=z*w+C*R,et=q*w+nt*R,Z=Ut*w+Mt*R,C=z*-R+C*w,nt=q*-R+nt*w,Mt=Ut*-R+Mt*w,Bt=bt*-R+Bt*w,z=k,q=et,Ut=Z),v=Ma(-V,Mt),m=v*Ms,v&&(w=Math.cos(-v),R=Math.sin(-v),k=N*w-C*R,et=L*w-nt*R,Z=V*w-Mt*R,Bt=I*R+Bt*w,N=k,L=et,V=Z),v=Ma(L,N),_=v*Ms,v&&(w=Math.cos(v),R=Math.sin(v),k=N*w+L*R,et=z*w+q*R,L=L*w-N*R,q=q*w-z*R,N=k,z=et),p&&Math.abs(p)+Math.abs(_)>359.9&&(p=_=0,m=180-m),f=ke(Math.sqrt(N*N+L*L+V*V)),g=ke(Math.sqrt(q*q+Ut*Ut)),v=Ma(z,q),M=Math.abs(v)>2e-4?v*Ms:0,y=Bt?1/(Bt<0?-Bt:Bt):0),n.svg&&(k=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!Bg(li(t,Oe)),k&&t.setAttribute("transform",k))),Math.abs(M)>90&&Math.abs(M)<270&&(s?(f*=-1,M+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,M+=M<=0?180:-180)),e=e||n.uncache,n.x=h-((n.xPercent=h&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-h)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+a,n.y=d-((n.yPercent=d&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-d)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+a,n.z=u+a,n.scaleX=ke(f),n.scaleY=ke(g),n.rotation=ke(_)+o,n.rotationX=ke(p)+o,n.rotationY=ke(m)+o,n.skewX=M+o,n.skewY=A+o,n.transformPerspective=y+a,(n.zOrigin=parseFloat(c.split(" ")[2])||!e&&n.zOrigin||0)&&(i[Kn]=Ah(c)),n.xOffset=n.yOffset=0,n.force3D=$n.force3D,n.renderTransform=n.svg?$b:Ng?zg:Jb,n.uncache=0,n},Ah=function(t){return(t=t.split(" "))[0]+" "+t[1]},ud=function(t,e,n){var i=mn(e);return ke(parseFloat(e)+parseFloat(Jr(t,"x",n+"px",i)))+i},Jb=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,zg(t,e)},ys="0deg",Go="0px",Ss=") ",zg=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.z,c=n.rotation,h=n.rotationY,d=n.rotationX,u=n.skewX,f=n.skewY,g=n.scaleX,_=n.scaleY,p=n.transformPerspective,m=n.force3D,M=n.target,A=n.zOrigin,y="",S=m==="auto"&&t&&t!==1||m===!0;if(A&&(d!==ys||h!==ys)){var T=parseFloat(h)*Ta,E=Math.sin(T),v=Math.cos(T),w;T=parseFloat(d)*Ta,w=Math.cos(T),a=ud(M,a,E*w*-A),o=ud(M,o,-Math.sin(T)*-A),l=ud(M,l,v*w*-A+A)}p!==Go&&(y+="perspective("+p+Ss),(i||s)&&(y+="translate("+i+"%, "+s+"%) "),(S||a!==Go||o!==Go||l!==Go)&&(y+=l!==Go||S?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+Ss),c!==ys&&(y+="rotate("+c+Ss),h!==ys&&(y+="rotateY("+h+Ss),d!==ys&&(y+="rotateX("+d+Ss),(u!==ys||f!==ys)&&(y+="skew("+u+", "+f+Ss),(g!==1||_!==1)&&(y+="scale("+g+", "+_+Ss),M.style[Oe]=y||"translate(0, 0)"},$b=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.rotation,c=n.skewX,h=n.skewY,d=n.scaleX,u=n.scaleY,f=n.target,g=n.xOrigin,_=n.yOrigin,p=n.xOffset,m=n.yOffset,M=n.forceCSS,A=parseFloat(a),y=parseFloat(o),S,T,E,v,w;l=parseFloat(l),c=parseFloat(c),h=parseFloat(h),h&&(h=parseFloat(h),c+=h,l+=h),l||c?(l*=Ta,c*=Ta,S=Math.cos(l)*d,T=Math.sin(l)*d,E=Math.sin(l-c)*-u,v=Math.cos(l-c)*u,c&&(h*=Ta,w=Math.tan(c-h),w=Math.sqrt(1+w*w),E*=w,v*=w,h&&(w=Math.tan(h),w=Math.sqrt(1+w*w),S*=w,T*=w)),S=ke(S),T=ke(T),E=ke(E),v=ke(v)):(S=d,v=u,T=E=0),(A&&!~(a+"").indexOf("px")||y&&!~(o+"").indexOf("px"))&&(A=Jr(f,"x",a,"px"),y=Jr(f,"y",o,"px")),(g||_||p||m)&&(A=ke(A+g-(g*S+_*E)+p),y=ke(y+_-(g*T+_*v)+m)),(i||s)&&(w=f.getBBox(),A=ke(A+i/100*w.width),y=ke(y+s/100*w.height)),w="matrix("+S+","+T+","+E+","+v+","+A+","+y+")",f.setAttribute("transform",w),M&&(f.style[Oe]=w)},Kb=function(t,e,n,i,s){var a=360,o=tn(s),l=parseFloat(s)*(o&&~s.indexOf("rad")?Ms:1),c=l-i,h=i+c+"deg",d,u;return o&&(d=s.split("_")[1],d==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),d==="cw"&&c<0?c=(c+a*Mg)%a-~~(c/a)*a:d==="ccw"&&c>0&&(c=(c-a*Mg)%a-~~(c/a)*a)),t._pt=u=new On(t._pt,e,n,i,c,Db),u.e=h,u.u="deg",t._props.push(n),u},Rg=function(t,e){for(var n in e)t[n]=e[n];return t},Qb=function(t,e,n){var i=Rg({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",a=n.style,o,l,c,h,d,u,f,g;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),a[Oe]=e,o=Wo(n,1),Zr(n,Oe),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Oe],a[Oe]=e,o=Wo(n,1),a[Oe]=c);for(l in mr)c=i[l],h=o[l],c!==h&&s.indexOf(l)<0&&(f=mn(c),g=mn(h),d=f!==g?Jr(n,l,c,g):parseFloat(c),u=parseFloat(h),t._pt=new On(t._pt,o,l,d,u-d,fd),t._pt.u=g||0,t._props.push(l));Rg(o,i)};Fn("padding,margin,Width,Radius",function(r,t){var e="Top",n="Right",i="Bottom",s="Left",a=(t<3?[e,n,i,s]:[e+s,e+n,i+n,i+s]).map(function(o){return t<2?r+o:"border"+o+r});Eh[t>1?"border"+r:r]=function(o,l,c,h,d){var u,f;if(arguments.length<4)return u=a.map(function(g){return pr(o,g,c)}),f=u.join(" "),f.split(u[0]).length===5?u[0]:f;u=(h+"").split(" "),f={},a.forEach(function(g,_){return f[g]=u[_]=u[_]||u[(_-1)/2|0]}),o.init(l,f,d)}});var yd={name:"css",register:pd,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,i,s){var a=this._props,o=t.style,l=n.vars.startAt,c,h,d,u,f,g,_,p,m,M,A,y,S,T,E,v,w;gd||pd(),this.styles=this.styles||Dg(t),v=this.styles.props,this.tween=n;for(_ in e)if(_!=="autoRound"&&(h=e[_],!(Yn[_]&&sd(_,e,n,i,t,s)))){if(f=typeof h,g=Eh[_],f==="function"&&(h=h.call(n,i,t,s),f=typeof h),f==="string"&&~h.indexOf("random(")&&(h=Sa(h)),g)g(this,t,_,h,n)&&(E=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(t).getPropertyValue(_)+"").trim(),h+="",fr.lastIndex=0,fr.test(c)||(p=mn(c),m=mn(h),m?p!==m&&(c=Jr(t,_,c,m)+m):p&&(h+=p)),this.add(o,"setProperty",c,h,i,s,0,0,_),a.push(_),v.push(_,0,o[_]);else if(f!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,i,t,s):l[_],tn(c)&&~c.indexOf("random(")&&(c=Sa(c)),mn(c+"")||c==="auto"||(c+=$n.units[_]||mn(pr(t,_))||""),(c+"").charAt(1)==="="&&(c=pr(t,_))):c=pr(t,_),u=parseFloat(c),M=f==="string"&&h.charAt(1)==="="&&h.substr(0,2),M&&(h=h.substr(2)),d=parseFloat(h),_ in tr&&(_==="autoAlpha"&&(u===1&&pr(t,"visibility")==="hidden"&&d&&(u=0),v.push("visibility",0,o.visibility),Yr(this,o,"visibility",u?"inherit":"hidden",d?"inherit":"hidden",!d)),_!=="scale"&&_!=="transform"&&(_=tr[_],~_.indexOf(",")&&(_=_.split(",")[0]))),A=_ in mr,A){if(this.styles.save(_),w=h,f==="string"&&h.substring(0,6)==="var(--"){if(h=li(t,h.substring(4,h.indexOf(")"))),h.substring(0,5)==="calc("){var R=t.style.perspective;t.style.perspective=h,h=li(t,"perspective"),R?t.style.perspective=R:Zr(t,"perspective")}d=parseFloat(h)}if(y||(S=t._gsap,S.renderTransform&&!e.parseTransform||Wo(t,e.parseTransform),T=e.smoothOrigin!==!1&&S.smooth,y=this._pt=new On(this._pt,o,Oe,0,1,S.renderTransform,S,0,-1),y.dep=1),_==="scale")this._pt=new On(this._pt,S,"scaleY",S.scaleY,(M?xs(S.scaleY,M+d):d)-S.scaleY||0,fd),this._pt.u=0,a.push("scaleY",_),_+="X";else if(_==="transformOrigin"){v.push(Kn,0,o[Kn]),h=Yb(h),S.svg?md(t,h,0,T,0,this):(m=parseFloat(h.split(" ")[2])||0,m!==S.zOrigin&&Yr(this,S,"zOrigin",S.zOrigin,m),Yr(this,o,_,Ah(c),Ah(h)));continue}else if(_==="svgOrigin"){md(t,h,1,T,0,this);continue}else if(_ in Og){Kb(this,S,_,u,M?xs(u,M+h):h);continue}else if(_==="smoothOrigin"){Yr(this,S,"smooth",S.smooth,h);continue}else if(_==="force3D"){S[_]=h;continue}else if(_==="transform"){Qb(this,h,t);continue}}else _ in o||(_=wa(_)||_);if(A||(d||d===0)&&(u||u===0)&&!Lb.test(h)&&_ in o)p=(c+"").substr((u+"").length),d||(d=0),m=mn(h)||(_ in $n.units?$n.units[_]:p),p!==m&&(u=Jr(t,_,c,m)),this._pt=new On(this._pt,A?S:o,_,u,(M?xs(u,M+d):d)-u,!A&&(m==="px"||_==="zIndex")&&e.autoRound!==!1?Fb:fd),this._pt.u=m||0,A&&w!==h?(this._pt.b=c,this._pt.e=w,this._pt.r=Ub):p!==m&&m!=="%"&&(this._pt.b=c,this._pt.r=Nb);else if(_ in o)qb.call(this,t,_,c,M?M+h:h);else if(_ in t)this.add(t,_,c||t[_],M?M+h:h,i,s);else if(_!=="parseTransform"){Sh(_,h);continue}A||(_ in o?v.push(_,0,o[_]):typeof t[_]=="function"?v.push(_,2,t[_]()):v.push(_,1,c||t[_])),a.push(_)}}E&&hd(this)},render:function(t,e){if(e.tween._time||!_d())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:pr,aliases:tr,getSetter:function(t,e,n){var i=tr[e];return i&&i.indexOf(",")<0&&(e=i),e in mr&&e!==Kn&&(t._gsap.x||pr(t,"x"))?n&&Sg===n?e==="scale"?kb:zb:(Sg=n||{})&&(e==="scale"?Vb:Gb):t.style&&!yh(t.style[e])?Ob:~e.indexOf("-")?Bb:wh(t,e)},core:{_removeProperty:Zr,_getMatrix:vd}};wn.utils.checkPrefix=wa;wn.core.getStyleSaver=Dg;(function(r,t,e,n){var i=Fn(r+","+t+","+e,function(s){mr[s]=1});Fn(t,function(s){$n.units[s]="deg",Og[s]=1}),tr[i[13]]=r+","+t,Fn(n,function(s){var a=s.split(":");tr[a[1]]=i[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Fn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){$n.units[r]="px"});wn.registerPlugin(yd);var Ch=wn.registerPlugin(yd)||wn,$E=Ch.core.Tween;function kg(r,t){for(var e=0;e<t.length;e++){var n=t[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function jb(r,t,e){return t&&kg(r.prototype,t),e&&kg(r,e),r}var gn,Ih,t1,ci,$r,Kr,Aa,Gg,Ts,Ca,Hg,gr,Fi,Wg,Xg=function(){return gn||typeof window<"u"&&(gn=window.gsap)&&gn.registerPlugin&&gn},qg=1,Ea=[],ne=[],Oi=[],qo=Date.now,Sd=function(t,e){return e},e1=function(){var t=Ca.core,e=t.bridge||{},n=t._scrollers,i=t._proxies;n.push.apply(n,ne),i.push.apply(i,Oi),ne=n,Oi=i,Sd=function(a,o){return e[a](o)}},xr=function(t,e){return~Oi.indexOf(t)&&Oi[Oi.indexOf(t)+1][e]},Yo=function(t){return!!~Hg.indexOf(t)},zn=function(t,e,n,i,s){return t.addEventListener(e,n,{passive:i!==!1,capture:!!s})},Bn=function(t,e,n,i){return t.removeEventListener(e,n,!!i)},Rh="scrollLeft",Ph="scrollTop",Md=function(){return gr&&gr.isPressed||ne.cache++},Lh=function(t,e){var n=function i(s){if(s||s===0){qg&&(ci.history.scrollRestoration="manual");var a=gr&&gr.isPressed;s=i.v=Math.round(s)||(gr&&gr.iOS?1:0),t(s),i.cacheID=ne.cache,a&&Sd("ss",s)}else(e||ne.cache!==i.cacheID||Sd("ref"))&&(i.cacheID=ne.cache,i.v=t());return i.v+i.offset};return n.offset=0,t&&n},En={s:Rh,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:Lh(function(r){return arguments.length?ci.scrollTo(r,Je.sc()):ci.pageXOffset||$r[Rh]||Kr[Rh]||Aa[Rh]||0})},Je={s:Ph,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:En,sc:Lh(function(r){return arguments.length?ci.scrollTo(En.sc(),r):ci.pageYOffset||$r[Ph]||Kr[Ph]||Aa[Ph]||0})},kn=function(t,e){return(e&&e._ctx&&e._ctx.selector||gn.utils.toArray)(t)[0]||(typeof t=="string"&&gn.config().nullTargetWarn!==!1?console.warn("Element not found:",t):null)},n1=function(t,e){for(var n=e.length;n--;)if(e[n]===t||e[n].contains(t))return!0;return!1},_r=function(t,e){var n=e.s,i=e.sc;Yo(t)&&(t=$r.scrollingElement||Kr);var s=ne.indexOf(t),a=i===Je.sc?1:2;!~s&&(s=ne.push(t)-1),ne[s+a]||zn(t,"scroll",Md);var o=ne[s+a],l=o||(ne[s+a]=Lh(xr(t,n),!0)||(Yo(t)?i:Lh(function(c){return arguments.length?t[n]=c:t[n]})));return l.target=t,o||(l.smooth=gn.getProperty(t,"scrollBehavior")==="smooth"),l},Dh=function(t,e,n){var i=t,s=t,a=qo(),o=a,l=e||50,c=Math.max(500,l*3),h=function(g,_){var p=qo();_||p-a>l?(s=i,i=g,o=a,a=p):n?i+=g:i=s+(g-s)/(p-o)*(a-o)},d=function(){s=i=n?0:i,o=a=0},u=function(g){var _=o,p=s,m=qo();return(g||g===0)&&g!==i&&h(g),a===o||m-o>c?0:(i+(n?p:-p))/((n?m:a)-_)*1e3};return{update:h,reset:d,getVelocity:u}},Xo=function(t,e){return e&&!t._gsapAllow&&t.cancelable!==!1&&t.preventDefault(),t.changedTouches?t.changedTouches[0]:t},Vg=function(t){var e=Math.max.apply(Math,t),n=Math.min.apply(Math,t);return Math.abs(e)>=Math.abs(n)?e:n},Yg=function(){Ca=gn.core.globals().ScrollTrigger,Ca&&Ca.core&&e1()},Zg=function(t){return gn=t||Xg(),!Ih&&gn&&typeof document<"u"&&document.body&&(ci=window,$r=document,Kr=$r.documentElement,Aa=$r.body,Hg=[ci,$r,Kr,Aa],t1=gn.utils.clamp,Wg=gn.core.context||function(){},Ts="onpointerenter"in Aa?"pointer":"mouse",Gg=Ve.isTouch=ci.matchMedia&&ci.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in ci||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Fi=Ve.eventTypes=("ontouchstart"in Kr?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Kr?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return qg=0},500),Ih=1),Ca||Yg(),Ih};En.op=Je;ne.cache=0;var Ve=(function(){function r(e){this.init(e)}var t=r.prototype;return t.init=function(n){Ih||Zg(gn)||console.warn("Please gsap.registerPlugin(Observer)"),Ca||Yg();var i=n.tolerance,s=n.dragMinimum,a=n.type,o=n.target,l=n.lineHeight,c=n.debounce,h=n.preventDefault,d=n.onStop,u=n.onStopDelay,f=n.ignore,g=n.wheelSpeed,_=n.event,p=n.onDragStart,m=n.onDragEnd,M=n.onDrag,A=n.onPress,y=n.onRelease,S=n.onRight,T=n.onLeft,E=n.onUp,v=n.onDown,w=n.onChangeX,R=n.onChangeY,N=n.onChange,L=n.onToggleX,V=n.onToggleY,I=n.onHover,z=n.onHoverEnd,q=n.onMove,k=n.ignoreCheck,et=n.isNormalizer,Z=n.onGestureStart,C=n.onGestureEnd,nt=n.onWheel,Mt=n.onEnable,bt=n.onDisable,Bt=n.onClick,Ut=n.scrollSpeed,Ht=n.capture,j=n.allowClicks,it=n.lockAxis,mt=n.onLockAxis;this.target=o=kn(o)||Kr,this.vars=n,f&&(f=gn.utils.toArray(f)),i=i||1e-9,s=s||0,g=g||1,Ut=Ut||1,a=a||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(ci.getComputedStyle(Aa).lineHeight)||22);var zt,gt,Ft,kt,It,Gt,Kt,G=this,Qt=0,fe=0,ve=n.passive||!h&&n.passive!==!1,qt=_r(o,En),ue=_r(o,Je),U=qt(),Se=ue(),Wt=~a.indexOf("touch")&&!~a.indexOf("pointer")&&Fi[0]==="pointerdown",P=Yo(o),x=o.ownerDocument||$r,B=[0,0,0],H=[0,0,0],tt=0,Y=function(){return tt=qo()},K=function(at,Nt){return(G.event=at)&&f&&n1(at.target,f)||Nt&&Wt&&at.pointerType!=="touch"||k&&k(at,Nt)},J=function(){G._vx.reset(),G._vy.reset(),gt.pause(),d&&d(G)},Q=function(){var at=G.deltaX=Vg(B),Nt=G.deltaY=Vg(H),ot=Math.abs(at)>=i,Vt=Math.abs(Nt)>=i;N&&(ot||Vt)&&N(G,at,Nt,B,H),ot&&(S&&G.deltaX>0&&S(G),T&&G.deltaX<0&&T(G),w&&w(G),L&&G.deltaX<0!=Qt<0&&L(G),Qt=G.deltaX,B[0]=B[1]=B[2]=0),Vt&&(v&&G.deltaY>0&&v(G),E&&G.deltaY<0&&E(G),R&&R(G),V&&G.deltaY<0!=fe<0&&V(G),fe=G.deltaY,H[0]=H[1]=H[2]=0),(kt||Ft)&&(q&&q(G),Ft&&(p&&Ft===1&&p(G),M&&M(G),Ft=0),kt=!1),Gt&&!(Gt=!1)&&mt&&mt(G),It&&(nt(G),It=!1),zt=0},lt=function(at,Nt,ot){B[ot]+=at,H[ot]+=Nt,G._vx.update(at),G._vy.update(Nt),c?zt||(zt=requestAnimationFrame(Q)):Q()},vt=function(at,Nt){it&&!Kt&&(G.axis=Kt=Math.abs(at)>Math.abs(Nt)?"x":"y",Gt=!0),Kt!=="y"&&(B[2]+=at,G._vx.update(at,!0)),Kt!=="x"&&(H[2]+=Nt,G._vy.update(Nt,!0)),c?zt||(zt=requestAnimationFrame(Q)):Q()},dt=function(at){if(!K(at,1)){at=Xo(at,h);var Nt=at.clientX,ot=at.clientY,Vt=Nt-G.x,Ct=ot-G.y,Zt=G.isDragging;G.x=Nt,G.y=ot,(Zt||(Vt||Ct)&&(Math.abs(G.startX-Nt)>=s||Math.abs(G.startY-ot)>=s))&&(Ft||(Ft=Zt?2:1),Zt||(G.isDragging=!0),vt(Vt,Ct))}},ft=G.onPress=function(ct){K(ct,1)||ct&&ct.button||(G.axis=Kt=null,gt.pause(),G.isPressed=!0,ct=Xo(ct),Qt=fe=0,G.startX=G.x=ct.clientX,G.startY=G.y=ct.clientY,G._vx.reset(),G._vy.reset(),zn(et?o:x,Fi[1],dt,ve,!0),G.deltaX=G.deltaY=0,A&&A(G))},ht=G.onRelease=function(ct){if(!K(ct,1)){Bn(et?o:x,Fi[1],dt,!0);var at=!isNaN(G.y-G.startY),Nt=G.isDragging,ot=Nt&&(Math.abs(G.x-G.startX)>3||Math.abs(G.y-G.startY)>3),Vt=Xo(ct);!ot&&at&&(G._vx.reset(),G._vy.reset(),h&&j&&gn.delayedCall(.08,function(){if(qo()-tt>300&&!ct.defaultPrevented){if(ct.target.click)ct.target.click();else if(x.createEvent){var Ct=x.createEvent("MouseEvents");Ct.initMouseEvent("click",!0,!0,ci,1,Vt.screenX,Vt.screenY,Vt.clientX,Vt.clientY,!1,!1,!1,!1,0,null),ct.target.dispatchEvent(Ct)}}})),G.isDragging=G.isGesturing=G.isPressed=!1,d&&Nt&&!et&&gt.restart(!0),Ft&&Q(),m&&Nt&&m(G),y&&y(G,ot)}},At=function(at){return at.touches&&at.touches.length>1&&(G.isGesturing=!0)&&Z(at,G.isDragging)},Ot=function(){return(G.isGesturing=!1)||C(G)},D=function(at){if(!K(at)){var Nt=qt(),ot=ue();lt((Nt-U)*Ut,(ot-Se)*Ut,1),U=Nt,Se=ot,d&&gt.restart(!0)}},ut=function(at){if(!K(at)){at=Xo(at,h),nt&&(It=!0);var Nt=(at.deltaMode===1?l:at.deltaMode===2?ci.innerHeight:1)*g;lt(at.deltaX*Nt,at.deltaY*Nt,0),d&&!et&&gt.restart(!0)}},rt=function(at){if(!K(at)){var Nt=at.clientX,ot=at.clientY,Vt=Nt-G.x,Ct=ot-G.y;G.x=Nt,G.y=ot,kt=!0,d&&gt.restart(!0),(Vt||Ct)&&vt(Vt,Ct)}},pt=function(at){G.event=at,I(G)},_t=function(at){G.event=at,z(G)},st=function(at){return K(at)||Xo(at,h)&&Bt(G)};gt=G._dc=gn.delayedCall(u||.25,J).pause(),G.deltaX=G.deltaY=0,G._vx=Dh(0,50,!0),G._vy=Dh(0,50,!0),G.scrollX=qt,G.scrollY=ue,G.isDragging=G.isGesturing=G.isPressed=!1,Wg(this),G.enable=function(ct){return G.isEnabled||(zn(P?x:o,"scroll",Md),a.indexOf("scroll")>=0&&zn(P?x:o,"scroll",D,ve,Ht),a.indexOf("wheel")>=0&&zn(o,"wheel",ut,ve,Ht),(a.indexOf("touch")>=0&&Gg||a.indexOf("pointer")>=0)&&(zn(o,Fi[0],ft,ve,Ht),zn(x,Fi[2],ht),zn(x,Fi[3],ht),j&&zn(o,"click",Y,!0,!0),Bt&&zn(o,"click",st),Z&&zn(x,"gesturestart",At),C&&zn(x,"gestureend",Ot),I&&zn(o,Ts+"enter",pt),z&&zn(o,Ts+"leave",_t),q&&zn(o,Ts+"move",rt)),G.isEnabled=!0,G.isDragging=G.isGesturing=G.isPressed=kt=Ft=!1,G._vx.reset(),G._vy.reset(),U=qt(),Se=ue(),ct&&ct.type&&ft(ct),Mt&&Mt(G)),G},G.disable=function(){G.isEnabled&&(Ea.filter(function(ct){return ct!==G&&Yo(ct.target)}).length||Bn(P?x:o,"scroll",Md),G.isPressed&&(G._vx.reset(),G._vy.reset(),Bn(et?o:x,Fi[1],dt,!0)),Bn(P?x:o,"scroll",D,Ht),Bn(o,"wheel",ut,Ht),Bn(o,Fi[0],ft,Ht),Bn(x,Fi[2],ht),Bn(x,Fi[3],ht),Bn(o,"click",Y,!0),Bn(o,"click",st),Bn(x,"gesturestart",At),Bn(x,"gestureend",Ot),Bn(o,Ts+"enter",pt),Bn(o,Ts+"leave",_t),Bn(o,Ts+"move",rt),G.isEnabled=G.isPressed=G.isDragging=!1,bt&&bt(G))},G.kill=G.revert=function(){G.disable();var ct=Ea.indexOf(G);ct>=0&&Ea.splice(ct,1),gr===G&&(gr=0)},Ea.push(G),et&&Yo(o)&&(gr=G),G.enable(_)},jb(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r})();Ve.version="3.15.0";Ve.create=function(r){return new Ve(r)};Ve.register=Zg;Ve.getAll=function(){return Ea.slice()};Ve.getById=function(r){return Ea.filter(function(t){return t.vars.id===r})[0]};Xg()&&gn.registerPlugin(Ve);var Et,La,se,xe,fi,ge,Fd,Jh,ol,tl,Jo,Nh,An,Qh,Rd,Gn,Jg,$g,Da,f_,bd,d_,Vn,Pd,p_,m_,Qr,Id,Od,Na,Bd,el,Ld,Td,Uh=1,Cn=Date.now,wd=Cn(),Ei=0,$o=0,Kg=function(t,e,n){var i=ui(t)&&(t.substr(0,6)==="clamp("||t.indexOf("max")>-1);return n["_"+e+"Clamp"]=i,i?t.substr(6,t.length-7):t},Qg=function(t,e){return e&&(!ui(t)||t.substr(0,6)!=="clamp(")?"clamp("+t+")":t},i1=function r(){return $o&&requestAnimationFrame(r)},jg=function(){return Qh=1},t_=function(){return Qh=0},er=function(t){return t},Ko=function(t){return Math.round(t*1e5)/1e5||0},g_=function(){return typeof window<"u"},__=function(){return Et||g_()&&(Et=window.gsap)&&Et.registerPlugin&&Et},Ps=function(t){return!!~Fd.indexOf(t)},x_=function(t){return(t==="Height"?Bd:se["inner"+t])||fi["client"+t]||ge["client"+t]},v_=function(t){return xr(t,"getBoundingClientRect")||(Ps(t)?function(){return Zh.width=se.innerWidth,Zh.height=Bd,Zh}:function(){return vr(t)})},r1=function(t,e,n){var i=n.d,s=n.d2,a=n.a;return(a=xr(t,"getBoundingClientRect"))?function(){return a()[i]}:function(){return(e?x_(s):t["client"+s])||0}},s1=function(t,e){return!e||~Oi.indexOf(t)?v_(t):function(){return Zh}},nr=function(t,e){var n=e.s,i=e.d2,s=e.d,a=e.a;return Math.max(0,(n="scroll"+i)&&(a=xr(t,n))?a()-v_(t)()[s]:Ps(t)?(fi[n]||ge[n])-x_(i):t[n]-t["offset"+i])},Fh=function(t,e){for(var n=0;n<Da.length;n+=3)(!e||~e.indexOf(Da[n+1]))&&t(Da[n],Da[n+1],Da[n+2])},ui=function(t){return typeof t=="string"},Rn=function(t){return typeof t=="function"},Qo=function(t){return typeof t=="number"},ws=function(t){return typeof t=="object"},Zo=function(t,e,n){return t&&t.progress(e?0:1)&&n&&t.pause()},Ra=function(t,e,n){if(t.enabled){var i=t._ctx?t._ctx.add(function(){return e(t,n)}):e(t,n);i&&i.totalTime&&(t.callbackAnimation=i)}},Pa=Math.abs,y_="left",S_="top",zd="right",kd="bottom",As="width",Cs="height",nl="Right",il="Left",rl="Top",sl="Bottom",$e="padding",Ti="margin",Fa="Width",Vd="Height",en="px",wi=function(t){return se.getComputedStyle(t.nodeType===Node.DOCUMENT_NODE?t.scrollingElement:t)},a1=function(t){var e=wi(t).position;t.style.position=e==="absolute"||e==="fixed"?e:"relative"},e_=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},vr=function(t,e){var n=e&&wi(t)[Rd]!=="matrix(1, 0, 0, 1, 0, 0)"&&Et.to(t,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=t.getBoundingClientRect?t.getBoundingClientRect():t.scrollingElement.getBoundingClientRect();return n&&n.progress(0).kill(),i},$h=function(t,e){var n=e.d2;return t["offset"+n]||t["client"+n]||0},M_=function(t){var e=[],n=t.labels,i=t.duration(),s;for(s in n)e.push(n[s]/i);return e},o1=function(t){return function(e){return Et.utils.snap(M_(t),e)}},Gd=function(t){var e=Et.utils.snap(t),n=Array.isArray(t)&&t.slice(0).sort(function(i,s){return i-s});return n?function(i,s,a){a===void 0&&(a=.001);var o;if(!s)return e(i);if(s>0){for(i-=a,o=0;o<n.length;o++)if(n[o]>=i)return n[o];return n[o-1]}else for(o=n.length,i+=a;o--;)if(n[o]<=i)return n[o];return n[0]}:function(i,s,a){a===void 0&&(a=.001);var o=e(i);return!s||Math.abs(o-i)<a||o-i<0==s<0?o:e(s<0?i-t:i+t)}},l1=function(t){return function(e,n){return Gd(M_(t))(e,n.direction)}},Oh=function(t,e,n,i){return n.split(",").forEach(function(s){return t(e,s,i)})},un=function(t,e,n,i,s){return t.addEventListener(e,n,{passive:!i,capture:!!s})},hn=function(t,e,n,i){return t.removeEventListener(e,n,!!i)},Bh=function(t,e,n){n=n&&n.wheelHandler,n&&(t(e,"wheel",n),t(e,"touchmove",n))},n_={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},zh={toggleActions:"play",anticipatePin:0},Kh={top:0,left:0,center:.5,bottom:1,right:1},Wh=function(t,e){if(ui(t)){var n=t.indexOf("="),i=~n?+(t.charAt(n-1)+1)*parseFloat(t.substr(n+1)):0;~n&&(t.indexOf("%")>n&&(i*=e/100),t=t.substr(0,n-1)),t=i+(t in Kh?Kh[t]*e:~t.indexOf("%")?parseFloat(t)*e/100:parseFloat(t)||0)}return t},kh=function(t,e,n,i,s,a,o,l){var c=s.startColor,h=s.endColor,d=s.fontSize,u=s.indent,f=s.fontWeight,g=xe.createElement("div"),_=Ps(n)||xr(n,"pinType")==="fixed",p=t.indexOf("scroller")!==-1,m=_?ge:n.tagName==="IFRAME"?n.contentDocument.body:n,M=t.indexOf("start")!==-1,A=M?c:h,y="border-color:"+A+";font-size:"+d+";color:"+A+";font-weight:"+f+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return y+="position:"+((p||l)&&_?"fixed;":"absolute;"),(p||l||!_)&&(y+=(i===Je?zd:kd)+":"+(a+parseFloat(u))+"px;"),o&&(y+="box-sizing:border-box;text-align:left;width:"+o.offsetWidth+"px;"),g._isStart=M,g.setAttribute("class","gsap-marker-"+t+(e?" marker-"+e:"")),g.style.cssText=y,g.innerText=e||e===0?t+"-"+e:t,m.children[0]?m.insertBefore(g,m.children[0]):m.appendChild(g),g._offset=g["offset"+i.op.d2],Xh(g,0,i,M),g},Xh=function(t,e,n,i){var s={display:"block"},a=n[i?"os2":"p2"],o=n[i?"p2":"os2"];t._isFlipped=i,s[n.a+"Percent"]=i?-100:0,s[n.a]=i?"1px":0,s["border"+a+Fa]=1,s["border"+o+Fa]=0,s[n.p]=e+"px",Et.set(t,s)},ie=[],Dd={},ll,i_=function(){return Cn()-Ei>34&&(ll||(ll=requestAnimationFrame(yr)))},Ia=function(){(!Vn||!Vn.isPressed||Vn.startX>ge.clientWidth)&&(ne.cache++,Vn?ll||(ll=requestAnimationFrame(yr)):yr(),Ei||Ls("scrollStart"),Ei=Cn())},Ed=function(){m_=se.innerWidth,p_=se.innerHeight},jo=function(t){ne.cache++,(t===!0||!An&&!d_&&!xe.fullscreenElement&&!xe.webkitFullscreenElement&&(!Pd||m_!==se.innerWidth||Math.abs(se.innerHeight-p_)>se.innerHeight*.25))&&Jh.restart(!0)},Is={},c1=[],b_=function r(){return hn(ae,"scrollEnd",r)||Es(!0)},Ls=function(t){return Is[t]&&Is[t].map(function(e){return e()})||c1},hi=[],T_=function(t){for(var e=0;e<hi.length;e+=5)(!t||hi[e+4]&&hi[e+4].query===t)&&(hi[e].style.cssText=hi[e+1],hi[e].getBBox&&hi[e].setAttribute("transform",hi[e+2]||""),hi[e+3].uncache=1)},w_=function(){return ne.forEach(function(t){return Rn(t)&&++t.cacheID&&(t.rec=t())})},Hd=function(t,e){var n;for(Gn=0;Gn<ie.length;Gn++)n=ie[Gn],n&&(!e||n._ctx===e)&&(t?n.kill(1):n.revert(!0,!0));el=!0,e&&T_(e),e||Ls("revert")},E_=function(t,e){ne.cache++,(e||!Hn)&&ne.forEach(function(n){return Rn(n)&&n.cacheID++&&(n.rec=0)}),ui(t)&&(se.history.scrollRestoration=Od=t)},Hn,Rs=0,r_,h1=function(){if(r_!==Rs){var t=r_=Rs;requestAnimationFrame(function(){return t===Rs&&Es(!0)})}},A_=function(){ge.appendChild(Na),Bd=!Vn&&Na.offsetHeight||se.innerHeight,ge.removeChild(Na)},s_=function(t){return ol(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(e){return e.style.display=t?"none":"block"})},Es=function(t,e){if(fi=xe.documentElement,ge=xe.body,Fd=[se,xe,fi,ge],Ei&&!t&&!el){un(ae,"scrollEnd",b_);return}A_(),Hn=ae.isRefreshing=!0,el||w_();var n=Ls("refreshInit");f_&&ae.sort(),e||Hd(),ne.forEach(function(i){Rn(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),ie.slice(0).forEach(function(i){return i.refresh()}),el=!1,ie.forEach(function(i){if(i._subPinOffset&&i.pin){var s=i.vars.horizontal?"offsetWidth":"offsetHeight",a=i.pin[s];i.revert(!0,1),i.adjustPinSpacing(i.pin[s]-a),i.refresh()}}),Ld=1,s_(!0),ie.forEach(function(i){var s=nr(i.scroller,i._dir),a=i.vars.end==="max"||i._endClamp&&i.end>s,o=i._startClamp&&i.start>=s;(a||o)&&i.setPositions(o?s-1:i.start,a?Math.max(o?s:i.start+1,s):i.end,!0)}),s_(!1),Ld=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),ne.forEach(function(i){Rn(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),E_(Od,1),Jh.pause(),Rs++,Hn=2,yr(2),ie.forEach(function(i){return Rn(i.vars.onRefresh)&&i.vars.onRefresh(i)}),Hn=ae.isRefreshing=!1,Ls("refresh")},Nd=0,qh=1,al,yr=function(t){if(t===2||!Hn&&!el){ae.isUpdating=!0,al&&al.update(0);var e=ie.length,n=Cn(),i=n-wd>=50,s=e&&ie[0].scroll();if(qh=Nd>s?-1:1,Hn||(Nd=s),i&&(Ei&&!Qh&&n-Ei>200&&(Ei=0,Ls("scrollEnd")),Jo=wd,wd=n),qh<0){for(Gn=e;Gn-- >0;)ie[Gn]&&ie[Gn].update(0,i);qh=1}else for(Gn=0;Gn<e;Gn++)ie[Gn]&&ie[Gn].update(0,i);ae.isUpdating=!1}ll=0},Ud=[y_,S_,kd,zd,Ti+sl,Ti+nl,Ti+rl,Ti+il,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Yh=Ud.concat([As,Cs,"boxSizing","max"+Fa,"max"+Vd,"position",Ti,$e,$e+rl,$e+nl,$e+sl,$e+il]),u1=function(t,e,n){Ua(n);var i=t._gsap;if(i.spacerIsNative)Ua(i.spacerState);else if(t._gsap.swappedIn){var s=e.parentNode;s&&(s.insertBefore(t,e),s.removeChild(e))}t._gsap.swappedIn=!1},Ad=function(t,e,n,i){if(!t._gsap.swappedIn){for(var s=Ud.length,a=e.style,o=t.style,l;s--;)l=Ud[s],a[l]=n[l];a.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(a.display="inline-block"),o[kd]=o[zd]="auto",a.flexBasis=n.flexBasis||"auto",a.overflow="visible",a.boxSizing="border-box",a[As]=$h(t,En)+en,a[Cs]=$h(t,Je)+en,a[$e]=o[Ti]=o[S_]=o[y_]="0",Ua(i),o[As]=o["max"+Fa]=n[As],o[Cs]=o["max"+Vd]=n[Cs],o[$e]=n[$e],t.parentNode!==e&&(t.parentNode.insertBefore(e,t),e.appendChild(t)),t._gsap.swappedIn=!0}},f1=/([A-Z])/g,Ua=function(t){if(t){var e=t.t.style,n=t.length,i=0,s,a;for((t.t._gsap||Et.core.getCache(t.t)).uncache=1;i<n;i+=2)a=t[i+1],s=t[i],a?e[s]=a:e[s]&&e.removeProperty(s.replace(f1,"-$1").toLowerCase())}},Vh=function(t){for(var e=Yh.length,n=t.style,i=[],s=0;s<e;s++)i.push(Yh[s],n[Yh[s]]);return i.t=t,i},d1=function(t,e,n){for(var i=[],s=t.length,a=n?8:0,o;a<s;a+=2)o=t[a],i.push(o,o in e?e[o]:t[a+1]);return i.t=t.t,i},Zh={left:0,top:0},a_=function(t,e,n,i,s,a,o,l,c,h,d,u,f,g){Rn(t)&&(t=t(l)),ui(t)&&t.substr(0,3)==="max"&&(t=u+(t.charAt(4)==="="?Wh("0"+t.substr(3),n):0));var _=f?f.time():0,p,m,M;if(f&&f.seek(0),isNaN(t)||(t=+t),Qo(t))f&&(t=Et.utils.mapRange(f.scrollTrigger.start,f.scrollTrigger.end,0,u,t)),o&&Xh(o,n,i,!0);else{Rn(e)&&(e=e(l));var A=(t||"0").split(" "),y,S,T,E;M=kn(e,l)||ge,y=vr(M)||{},(!y||!y.left&&!y.top)&&wi(M).display==="none"&&(E=M.style.display,M.style.display="block",y=vr(M),E?M.style.display=E:M.style.removeProperty("display")),S=Wh(A[0],y[i.d]),T=Wh(A[1]||"0",n),t=y[i.p]-c[i.p]-h+S+s-T,o&&Xh(o,T,i,n-T<20||o._isStart&&T>20),n-=n-T}if(g&&(l[g]=t||-.001,t<0&&(t=0)),a){var v=t+n,w=a._isStart;p="scroll"+i.d2,Xh(a,v,i,w&&v>20||!w&&(d?Math.max(ge[p],fi[p]):a.parentNode[p])<=v+1),d&&(c=vr(o),d&&(a.style[i.op.p]=c[i.op.p]-i.op.m-a._offset+en))}return f&&M&&(p=vr(M),f.seek(u),m=vr(M),f._caScrollDist=p[i.p]-m[i.p],t=t/f._caScrollDist*u),f&&f.seek(_),f?t:Math.round(t)},p1=/(webkit|moz|length|cssText|inset)/i,o_=function(t,e,n,i){if(t.parentNode!==e){var s=t.style,a,o;if(e===ge){t._stOrig=s.cssText,o=wi(t);for(a in o)!+a&&!p1.test(a)&&o[a]&&typeof s[a]=="string"&&a!=="0"&&(s[a]=o[a]);s.top=n,s.left=i}else s.cssText=t._stOrig;Et.core.getCache(t).uncache=1,e.appendChild(t)}},C_=function(t,e,n){var i=e,s=i;return function(a){var o=Math.round(t());return o!==i&&o!==s&&Math.abs(o-i)>3&&Math.abs(o-s)>3&&(a=o,n&&n()),s=i,i=Math.round(a),i}},Gh=function(t,e,n){var i={};i[e.p]="+="+n,Et.set(t,i)},l_=function(t,e){var n=_r(t,e),i="_scroll"+e.p2,s=function a(o,l,c,h,d){var u=a.tween,f=l.onComplete,g={};c=c||n();var _=C_(n,c,function(){u.kill(),a.tween=0});return d=h&&d||0,h=h||o-c,u&&u.kill(),l[i]=o,l.inherit=!1,l.modifiers=g,g[i]=function(){return _(c+h*u.ratio+d*u.ratio*u.ratio)},l.onUpdate=function(){ne.cache++,a.tween&&yr()},l.onComplete=function(){a.tween=0,f&&f.call(u)},u=a.tween=Et.to(t,l),u};return t[i]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},un(t,"wheel",n.wheelHandler),ae.isTouch&&un(t,"touchmove",n.wheelHandler),s},ae=(function(){function r(e,n){La||r.register(Et)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),Id(this),this.init(e,n)}var t=r.prototype;return t.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!$o){this.update=this.refresh=this.kill=er;return}n=e_(ui(n)||Qo(n)||n.nodeType?{trigger:n}:n,zh);var s=n,a=s.onUpdate,o=s.toggleClass,l=s.id,c=s.onToggle,h=s.onRefresh,d=s.scrub,u=s.trigger,f=s.pin,g=s.pinSpacing,_=s.invalidateOnRefresh,p=s.anticipatePin,m=s.onScrubComplete,M=s.onSnapComplete,A=s.once,y=s.snap,S=s.pinReparent,T=s.pinSpacer,E=s.containerAnimation,v=s.fastScrollEnd,w=s.preventOverlaps,R=n.horizontal||n.containerAnimation&&n.horizontal!==!1?En:Je,N=!d&&d!==0,L=kn(n.scroller||se),V=Et.core.getCache(L),I=Ps(L),z=("pinType"in n?n.pinType:xr(L,"pinType")||I&&"fixed")==="fixed",q=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],k=N&&n.toggleActions.split(" "),et="markers"in n?n.markers:zh.markers,Z=I?0:parseFloat(wi(L)["border"+R.p2+Fa])||0,C=this,nt=n.onRefreshInit&&function(){return n.onRefreshInit(C)},Mt=r1(L,I,R),bt=s1(L,I),Bt=0,Ut=0,Ht=0,j=_r(L,R),it,mt,zt,gt,Ft,kt,It,Gt,Kt,G,Qt,fe,ve,qt,ue,U,Se,Wt,P,x,B,H,tt,Y,K,J,Q,lt,vt,dt,ft,ht,At,Ot,D,ut,rt,pt,_t;if(C._startClamp=C._endClamp=!1,C._dir=R,p*=45,C.scroller=L,C.scroll=E?E.time.bind(E):j,gt=j(),C.vars=n,i=i||n.animation,"refreshPriority"in n&&(f_=1,n.refreshPriority===-9999&&(al=C)),V.tweenScroll=V.tweenScroll||{top:l_(L,Je),left:l_(L,En)},C.tweenTo=it=V.tweenScroll[R.p],C.scrubDuration=function(ot){At=Qo(ot)&&ot,At?ht?ht.duration(ot):ht=Et.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:At,paused:!0,onComplete:function(){return m&&m(C)}}):(ht&&ht.progress(1).kill(),ht=0)},i&&(i.vars.lazy=!1,i._initted&&!C.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),C.animation=i.pause(),i.scrollTrigger=C,C.scrubDuration(d),dt=0,l||(l=i.vars.id)),y&&((!ws(y)||y.push)&&(y={snapTo:y}),"scrollBehavior"in ge.style&&Et.set(I?[ge,fi]:L,{scrollBehavior:"auto"}),ne.forEach(function(ot){return Rn(ot)&&ot.target===(I?xe.scrollingElement||fi:L)&&(ot.smooth=!1)}),zt=Rn(y.snapTo)?y.snapTo:y.snapTo==="labels"?o1(i):y.snapTo==="labelsDirectional"?l1(i):y.directional!==!1?function(ot,Vt){return Gd(y.snapTo)(ot,Cn()-Ut<500?0:Vt.direction)}:Et.utils.snap(y.snapTo),Ot=y.duration||{min:.1,max:2},Ot=ws(Ot)?tl(Ot.min,Ot.max):tl(Ot,Ot),D=Et.delayedCall(y.delay||At/2||.1,function(){var ot=j(),Vt=Cn()-Ut<500,Ct=it.tween;if((Vt||Math.abs(C.getVelocity())<10)&&!Ct&&!Qh&&Bt!==ot){var Zt=(ot-kt)/qt,Xe=i&&!N?i.totalProgress():Zt,re=Vt?0:(Xe-ft)/(Cn()-Jo)*1e3||0,Re=Et.utils.clamp(-Zt,1-Zt,Pa(re/2)*re/.185),nn=Zt+(y.inertia===!1?0:Re),Pe,Me,ce=y,In=ce.onStart,Ae=ce.onInterrupt,_n=ce.onComplete;if(Pe=zt(nn,C),Qo(Pe)||(Pe=nn),Me=Math.max(0,Math.round(kt+Pe*qt)),ot<=It&&ot>=kt&&Me!==ot){if(Ct&&!Ct._initted&&Ct.data<=Pa(Me-ot))return;y.inertia===!1&&(Re=Pe-Zt),it(Me,{duration:Ot(Pa(Math.max(Pa(nn-Xe),Pa(Pe-Xe))*.185/re/.05||0)),ease:y.ease||"power3",data:Pa(Me-ot),onInterrupt:function(){return D.restart(!0)&&Ae&&Ra(C,Ae)},onComplete:function(){C.update(),Bt=j(),i&&!N&&(ht?ht.resetTo("totalProgress",Pe,i._tTime/i._tDur):i.progress(Pe)),dt=ft=i&&!N?i.totalProgress():C.progress,M&&M(C),_n&&Ra(C,_n)}},ot,Re*qt,Me-ot-Re*qt),In&&Ra(C,In,it.tween)}}else C.isActive&&Bt!==ot&&D.restart(!0)}).pause()),l&&(Dd[l]=C),u=C.trigger=kn(u||f!==!0&&f),_t=u&&u._gsap&&u._gsap.stRevert,_t&&(_t=_t(C)),f=f===!0?u:kn(f),ui(o)&&(o={targets:u,className:o}),f&&(g===!1||g===Ti||(g=!g&&f.parentNode&&f.parentNode.style&&wi(f.parentNode).display==="flex"?!1:$e),C.pin=f,mt=Et.core.getCache(f),mt.spacer?ue=mt.pinState:(T&&(T=kn(T),T&&!T.nodeType&&(T=T.current||T.nativeElement),mt.spacerIsNative=!!T,T&&(mt.spacerState=Vh(T))),mt.spacer=Wt=T||xe.createElement("div"),Wt.classList.add("pin-spacer"),l&&Wt.classList.add("pin-spacer-"+l),mt.pinState=ue=Vh(f)),n.force3D!==!1&&Et.set(f,{force3D:!0}),C.spacer=Wt=mt.spacer,vt=wi(f),Y=vt[g+R.os2],x=Et.getProperty(f),B=Et.quickSetter(f,R.a,en),Ad(f,Wt,vt),Se=Vh(f)),et){fe=ws(et)?e_(et,n_):n_,G=kh("scroller-start",l,L,R,fe,0),Qt=kh("scroller-end",l,L,R,fe,0,G),P=G["offset"+R.op.d2];var st=kn(xr(L,"content")||L);Gt=this.markerStart=kh("start",l,st,R,fe,P,0,E),Kt=this.markerEnd=kh("end",l,st,R,fe,P,0,E),E&&(pt=Et.quickSetter([Gt,Kt],R.a,en)),!z&&!(Oi.length&&xr(L,"fixedMarkers")===!0)&&(a1(I?ge:L),Et.set([G,Qt],{force3D:!0}),J=Et.quickSetter(G,R.a,en),lt=Et.quickSetter(Qt,R.a,en))}if(E){var ct=E.vars.onUpdate,at=E.vars.onUpdateParams;E.eventCallback("onUpdate",function(){C.update(0,0,1),ct&&ct.apply(E,at||[])})}if(C.previous=function(){return ie[ie.indexOf(C)-1]},C.next=function(){return ie[ie.indexOf(C)+1]},C.revert=function(ot,Vt){if(!Vt)return C.kill(!0);var Ct=ot!==!1||!C.enabled,Zt=An;Ct!==C.isReverted&&(Ct&&(ut=Math.max(j(),C.scroll.rec||0),Ht=C.progress,rt=i&&i.progress()),Gt&&[Gt,Kt,G,Qt].forEach(function(Xe){return Xe.style.display=Ct?"none":"block"}),Ct&&(An=C,C.update(Ct)),f&&(!S||!C.isActive)&&(Ct?u1(f,Wt,ue):Ad(f,Wt,wi(f),K)),Ct||C.update(Ct),An=Zt,C.isReverted=Ct)},C.refresh=function(ot,Vt,Ct,Zt){if(!((An||!C.enabled)&&!Vt)){if(f&&ot&&Ei){un(r,"scrollEnd",b_);return}!Hn&&nt&&nt(C),An=C,it.tween&&!Ct&&(it.tween.kill(),it.tween=0),ht&&ht.pause(),_&&i&&(i.revert({kill:!1}).invalidate(),i.getChildren?i.getChildren(!0,!0,!1).forEach(function(xt){return xt.vars.immediateRender&&xt.render(0,!0,!0)}):i.vars.immediateRender&&i.render(0,!0,!0)),C.isReverted||C.revert(!0,!0),C._subPinOffset=!1;var Xe=Mt(),re=bt(),Re=E?E.duration():nr(L,R),nn=qt<=.01||!qt,Pe=0,Me=Zt||0,ce=ws(Ct)?Ct.end:n.end,In=n.endTrigger||u,Ae=ws(Ct)?Ct.start:n.start||(n.start===0||!u?0:f?"0 0":"0 100%"),_n=C.pinnedContainer=n.pinnedContainer&&kn(n.pinnedContainer,C),Ln=u&&Math.max(0,ie.indexOf(C))||0,qe=Ln,Be,Ke,Bi,Ds,rn,Ge,di,Ns,b,F,$,W,X;for(et&&ws(Ct)&&(W=Et.getProperty(G,R.p),X=Et.getProperty(Qt,R.p));qe-- >0;)Ge=ie[qe],Ge.end||Ge.refresh(0,1)||(An=C),di=Ge.pin,di&&(di===u||di===f||di===_n)&&!Ge.isReverted&&(F||(F=[]),F.unshift(Ge),Ge.revert(!0,!0)),Ge!==ie[qe]&&(Ln--,qe--);for(Rn(Ae)&&(Ae=Ae(C)),Ae=Kg(Ae,"start",C),kt=a_(Ae,u,Xe,R,j(),Gt,G,C,re,Z,z,Re,E,C._startClamp&&"_startClamp")||(f?-.001:0),Rn(ce)&&(ce=ce(C)),ui(ce)&&!ce.indexOf("+=")&&(~ce.indexOf(" ")?ce=(ui(Ae)?Ae.split(" ")[0]:"")+ce:(Pe=Wh(ce.substr(2),Xe),ce=ui(Ae)?Ae:(E?Et.utils.mapRange(0,E.duration(),E.scrollTrigger.start,E.scrollTrigger.end,kt):kt)+Pe,In=u)),ce=Kg(ce,"end",C),It=Math.max(kt,a_(ce||(In?"100% 0":Re),In,Xe,R,j()+Pe,Kt,Qt,C,re,Z,z,Re,E,C._endClamp&&"_endClamp"))||-.001,Pe=0,qe=Ln;qe--;)Ge=ie[qe]||{},di=Ge.pin,di&&Ge.start-Ge._pinPush<=kt&&!E&&Ge.end>0&&(Be=Ge.end-(C._startClamp?Math.max(0,Ge.start):Ge.start),(di===u&&Ge.start-Ge._pinPush<kt||di===_n)&&isNaN(Ae)&&(Pe+=Be*(1-Ge.progress)),di===f&&(Me+=Be));if(kt+=Pe,It+=Pe,C._startClamp&&(C._startClamp+=Pe),C._endClamp&&!Hn&&(C._endClamp=It||-.001,It=Math.min(It,nr(L,R))),qt=It-kt||(kt-=.01)&&.001,nn&&(Ht=Et.utils.clamp(0,1,Et.utils.normalize(kt,It,ut))),C._pinPush=Me,Gt&&Pe&&(Be={},Be[R.a]="+="+Pe,_n&&(Be[R.p]="-="+j()),Et.set([Gt,Kt],Be)),f&&!(Ld&&C.end>=nr(L,R)))Be=wi(f),Ds=R===Je,Bi=j(),H=parseFloat(x(R.a))+Me,!Re&&It>1&&($=(I?xe.scrollingElement||fi:L).style,$={style:$,value:$["overflow"+R.a.toUpperCase()]},I&&wi(ge)["overflow"+R.a.toUpperCase()]!=="scroll"&&($.style["overflow"+R.a.toUpperCase()]="scroll")),Ad(f,Wt,Be),Se=Vh(f),Ke=vr(f,!0),Ns=z&&_r(L,Ds?En:Je)(),g?(K=[g+R.os2,qt+Me+en],K.t=Wt,qe=g===$e?$h(f,R)+qt+Me:0,qe&&(K.push(R.d,qe+en),Wt.style.flexBasis!=="auto"&&(Wt.style.flexBasis=qe+en)),Ua(K),_n&&ie.forEach(function(xt){xt.pin===_n&&xt.vars.pinSpacing!==!1&&(xt._subPinOffset=!0)}),z&&j(ut)):(qe=$h(f,R),qe&&Wt.style.flexBasis!=="auto"&&(Wt.style.flexBasis=qe+en)),z&&(rn={top:Ke.top+(Ds?Bi-kt:Ns)+en,left:Ke.left+(Ds?Ns:Bi-kt)+en,boxSizing:"border-box",position:"fixed"},rn[As]=rn["max"+Fa]=Math.ceil(Ke.width)+en,rn[Cs]=rn["max"+Vd]=Math.ceil(Ke.height)+en,rn[Ti]=rn[Ti+rl]=rn[Ti+nl]=rn[Ti+sl]=rn[Ti+il]="0",rn[$e]=Be[$e],rn[$e+rl]=Be[$e+rl],rn[$e+nl]=Be[$e+nl],rn[$e+sl]=Be[$e+sl],rn[$e+il]=Be[$e+il],U=d1(ue,rn,S),Hn&&j(0)),i?(b=i._initted,bd(1),i.render(i.duration(),!0,!0),tt=x(R.a)-H+qt+Me,Q=Math.abs(qt-tt)>1,z&&Q&&U.splice(U.length-2,2),i.render(0,!0,!0),b||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),bd(0)):tt=qt,$&&($.value?$.style["overflow"+R.a.toUpperCase()]=$.value:$.style.removeProperty("overflow-"+R.a));else if(u&&j()&&!E)for(Ke=u.parentNode;Ke&&Ke!==ge;)Ke._pinOffset&&(kt-=Ke._pinOffset,It-=Ke._pinOffset),Ke=Ke.parentNode;F&&F.forEach(function(xt){return xt.revert(!1,!0)}),C.start=kt,C.end=It,gt=Ft=Hn?ut:j(),!E&&!Hn&&(gt<ut&&j(ut),C.scroll.rec=0),C.revert(!1,!0),Ut=Cn(),D&&(Bt=-1,D.restart(!0)),An=0,i&&N&&(i._initted||rt)&&i.progress()!==rt&&i.progress(rt||0,!0).render(i.time(),!0,!0),(nn||Ht!==C.progress||E||_||i&&!i._initted)&&(i&&!N&&(i._initted||Ht||i.vars.immediateRender!==!1)&&i.totalProgress(E&&kt<-.001&&!Ht?Et.utils.normalize(kt,It,0):Ht,!0),C.progress=nn||(gt-kt)/qt===Ht?0:Ht),f&&g&&(Wt._pinOffset=Math.round(C.progress*tt)),ht&&ht.invalidate(),isNaN(W)||(W-=Et.getProperty(G,R.p),X-=Et.getProperty(Qt,R.p),Gh(G,R,W),Gh(Gt,R,W-(Zt||0)),Gh(Qt,R,X),Gh(Kt,R,X-(Zt||0))),nn&&!Hn&&C.update(),h&&!Hn&&!ve&&(ve=!0,h(C),ve=!1)}},C.getVelocity=function(){return(j()-Ft)/(Cn()-Jo)*1e3||0},C.endAnimation=function(){Zo(C.callbackAnimation),i&&(ht?ht.progress(1):i.paused()?N||Zo(i,C.direction<0,1):Zo(i,i.reversed()))},C.labelToScroll=function(ot){return i&&i.labels&&(kt||C.refresh()||kt)+i.labels[ot]/i.duration()*qt||0},C.getTrailing=function(ot){var Vt=ie.indexOf(C),Ct=C.direction>0?ie.slice(0,Vt).reverse():ie.slice(Vt+1);return(ui(ot)?Ct.filter(function(Zt){return Zt.vars.preventOverlaps===ot}):Ct).filter(function(Zt){return C.direction>0?Zt.end<=kt:Zt.start>=It})},C.update=function(ot,Vt,Ct){if(!(E&&!Ct&&!ot)){var Zt=Hn===!0?ut:C.scroll(),Xe=ot?0:(Zt-kt)/qt,re=Xe<0?0:Xe>1?1:Xe||0,Re=C.progress,nn,Pe,Me,ce,In,Ae,_n,Ln;if(Vt&&(Ft=gt,gt=E?j():Zt,y&&(ft=dt,dt=i&&!N?i.totalProgress():re)),p&&f&&!An&&!Uh&&Ei&&(!re&&kt<Zt+(Zt-Ft)/(Cn()-Jo)*p?re=1e-4:re===1&&It>Zt+(Zt-Ft)/(Cn()-Jo)*p&&(re=.9999)),re!==Re&&C.enabled){if(nn=C.isActive=!!re&&re<1,Pe=!!Re&&Re<1,Ae=nn!==Pe,In=Ae||!!re!=!!Re,C.direction=re>Re?1:-1,C.progress=re,In&&!An&&(Me=re&&!Re?0:re===1?1:Re===1?2:3,N&&(ce=!Ae&&k[Me+1]!=="none"&&k[Me+1]||k[Me],Ln=i&&(ce==="complete"||ce==="reset"||ce in i))),w&&(Ae||Ln)&&(Ln||d||!i)&&(Rn(w)?w(C):C.getTrailing(w).forEach(function(Bi){return Bi.endAnimation()})),N||(ht&&!An&&!Uh?(ht._dp._time-ht._start!==ht._time&&ht.render(ht._dp._time-ht._start),ht.resetTo?ht.resetTo("totalProgress",re,i._tTime/i._tDur):(ht.vars.totalProgress=re,ht.invalidate().restart())):i&&i.totalProgress(re,!!(An&&(Ut||ot)))),f){if(ot&&g&&(Wt.style[g+R.os2]=Y),!z)B(Ko(H+tt*re));else if(In){if(_n=!ot&&re>Re&&It+1>Zt&&Zt+1>=nr(L,R),S)if(!ot&&(nn||_n)){var qe=vr(f,!0),Be=Zt-kt;o_(f,ge,qe.top+(R===Je?Be:0)+en,qe.left+(R===Je?0:Be)+en)}else o_(f,Wt);Ua(nn||_n?U:Se),Q&&re<1&&nn||B(H+(re===1&&!_n?tt:0))}}y&&!it.tween&&!An&&!Uh&&D.restart(!0),o&&(Ae||A&&re&&(re<1||!Td))&&ol(o.targets).forEach(function(Bi){return Bi.classList[nn||A?"add":"remove"](o.className)}),a&&!N&&!ot&&a(C),In&&!An?(N&&(Ln&&(ce==="complete"?i.pause().totalProgress(1):ce==="reset"?i.restart(!0).pause():ce==="restart"?i.restart(!0):i[ce]()),a&&a(C)),(Ae||!Td)&&(c&&Ae&&Ra(C,c),q[Me]&&Ra(C,q[Me]),A&&(re===1?C.kill(!1,1):q[Me]=0),Ae||(Me=re===1?1:3,q[Me]&&Ra(C,q[Me]))),v&&!nn&&Math.abs(C.getVelocity())>(Qo(v)?v:2500)&&(Zo(C.callbackAnimation),ht?ht.progress(1):Zo(i,ce==="reverse"?1:!re,1))):N&&a&&!An&&a(C)}if(lt){var Ke=E?Zt/E.duration()*(E._caScrollDist||0):Zt;J(Ke+(G._isFlipped?1:0)),lt(Ke)}pt&&pt(-Zt/E.duration()*(E._caScrollDist||0))}},C.enable=function(ot,Vt){C.enabled||(C.enabled=!0,un(L,"resize",jo),I||un(L,"scroll",Ia),nt&&un(r,"refreshInit",nt),ot!==!1&&(C.progress=Ht=0,gt=Ft=Bt=j()),Vt!==!1&&C.refresh())},C.getTween=function(ot){return ot&&it?it.tween:ht},C.setPositions=function(ot,Vt,Ct,Zt){if(E){var Xe=E.scrollTrigger,re=E.duration(),Re=Xe.end-Xe.start;ot=Xe.start+Re*ot/re,Vt=Xe.start+Re*Vt/re}C.refresh(!1,!1,{start:Qg(ot,Ct&&!!C._startClamp),end:Qg(Vt,Ct&&!!C._endClamp)},Zt),C.update()},C.adjustPinSpacing=function(ot){if(K&&ot){var Vt=K.indexOf(R.d)+1;K[Vt]=parseFloat(K[Vt])+ot+en,K[1]=parseFloat(K[1])+ot+en,Ua(K)}},C.disable=function(ot,Vt){if(ot!==!1&&C.revert(!0,!0),C.enabled&&(C.enabled=C.isActive=!1,Vt||ht&&ht.pause(),ut=0,mt&&(mt.uncache=1),nt&&hn(r,"refreshInit",nt),D&&(D.pause(),it.tween&&it.tween.kill()&&(it.tween=0)),!I)){for(var Ct=ie.length;Ct--;)if(ie[Ct].scroller===L&&ie[Ct]!==C)return;hn(L,"resize",jo),I||hn(L,"scroll",Ia)}},C.kill=function(ot,Vt){C.disable(ot,Vt),ht&&!Vt&&ht.kill(),l&&delete Dd[l];var Ct=ie.indexOf(C);Ct>=0&&ie.splice(Ct,1),Ct===Gn&&qh>0&&Gn--,Ct=0,ie.forEach(function(Zt){return Zt.scroller===C.scroller&&(Ct=1)}),Ct||Hn||(C.scroll.rec=0),i&&(i.scrollTrigger=null,ot&&i.revert({kill:!1}),Vt||i.kill()),Gt&&[Gt,Kt,G,Qt].forEach(function(Zt){return Zt.parentNode&&Zt.parentNode.removeChild(Zt)}),al===C&&(al=0),f&&(mt&&(mt.uncache=1),Ct=0,ie.forEach(function(Zt){return Zt.pin===f&&Ct++}),Ct||(mt.spacer=0)),n.onKill&&n.onKill(C)},ie.push(C),C.enable(!1,!1),_t&&_t(C),i&&i.add&&!qt){var Nt=C.update;C.update=function(){C.update=Nt,ne.cache++,kt||It||C.refresh()},Et.delayedCall(.01,C.update),qt=.01,kt=It=0}else C.refresh();f&&h1()},r.register=function(n){return La||(Et=n||__(),g_()&&window.document&&r.enable(),La=$o),La},r.defaults=function(n){if(n)for(var i in n)zh[i]=n[i];return zh},r.disable=function(n,i){$o=0,ie.forEach(function(a){return a[i?"kill":"disable"](n)}),hn(se,"wheel",Ia),hn(xe,"scroll",Ia),clearInterval(Nh),hn(xe,"touchcancel",er),hn(ge,"touchstart",er),Oh(hn,xe,"pointerdown,touchstart,mousedown",jg),Oh(hn,xe,"pointerup,touchend,mouseup",t_),Jh.kill(),Fh(hn);for(var s=0;s<ne.length;s+=3)Bh(hn,ne[s],ne[s+1]),Bh(hn,ne[s],ne[s+2])},r.enable=function(){if(se=window,xe=document,fi=xe.documentElement,ge=xe.body,Et){if(ol=Et.utils.toArray,tl=Et.utils.clamp,Id=Et.core.context||er,bd=Et.core.suppressOverwrites||er,Od=se.history.scrollRestoration||"auto",Nd=se.pageYOffset||0,Et.core.globals("ScrollTrigger",r),ge){$o=1,Na=document.createElement("div"),Na.style.height="100vh",Na.style.position="absolute",A_(),i1(),Ve.register(Et),r.isTouch=Ve.isTouch,Qr=Ve.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Pd=Ve.isTouch===1,un(se,"wheel",Ia),Fd=[se,xe,fi,ge],Et.matchMedia?(r.matchMedia=function(h){var d=Et.matchMedia(),u;for(u in h)d.add(u,h[u]);return d},Et.addEventListener("matchMediaInit",function(){w_(),Hd()}),Et.addEventListener("matchMediaRevert",function(){return T_()}),Et.addEventListener("matchMedia",function(){Es(0,1),Ls("matchMedia")}),Et.matchMedia().add("(orientation: portrait)",function(){return Ed(),Ed})):console.warn("Requires GSAP 3.11.0 or later"),Ed(),un(xe,"scroll",Ia);var n=ge.hasAttribute("style"),i=ge.style,s=i.borderTopStyle,a=Et.core.Animation.prototype,o,l;for(a.revert||Object.defineProperty(a,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",o=vr(ge),Je.m=Math.round(o.top+Je.sc())||0,En.m=Math.round(o.left+En.sc())||0,s?i.borderTopStyle=s:i.removeProperty("border-top-style"),n||(ge.setAttribute("style",""),ge.removeAttribute("style")),Nh=setInterval(i_,250),Et.delayedCall(.5,function(){return Uh=0}),un(xe,"touchcancel",er),un(ge,"touchstart",er),Oh(un,xe,"pointerdown,touchstart,mousedown",jg),Oh(un,xe,"pointerup,touchend,mouseup",t_),Rd=Et.utils.checkPrefix("transform"),Yh.push(Rd),La=Cn(),Jh=Et.delayedCall(.2,Es).pause(),Da=[xe,"visibilitychange",function(){var h=se.innerWidth,d=se.innerHeight;xe.hidden?(Jg=h,$g=d):(Jg!==h||$g!==d)&&jo()},xe,"DOMContentLoaded",Es,se,"load",Es,se,"resize",jo],Fh(un),ie.forEach(function(h){return h.enable(0,1)}),l=0;l<ne.length;l+=3)Bh(hn,ne[l],ne[l+1]),Bh(hn,ne[l],ne[l+2])}else if(xe){var c=function h(){r.enable(),xe.removeEventListener("DOMContentLoaded",h)};xe.addEventListener("DOMContentLoaded",c)}}},r.config=function(n){"limitCallbacks"in n&&(Td=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(Nh)||(Nh=i)&&setInterval(i_,i),"ignoreMobileResize"in n&&(Pd=r.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(Fh(hn)||Fh(un,n.autoRefreshEvents||"none"),d_=(n.autoRefreshEvents+"").indexOf("resize")===-1)},r.scrollerProxy=function(n,i){var s=kn(n),a=ne.indexOf(s),o=Ps(s);~a&&ne.splice(a,o?6:2),i&&(o?Oi.unshift(se,i,ge,i,fi,i):Oi.unshift(s,i))},r.clearMatchMedia=function(n){ie.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},r.isInViewport=function(n,i,s){var a=(ui(n)?kn(n):n).getBoundingClientRect(),o=a[s?As:Cs]*i||0;return s?a.right-o>0&&a.left+o<se.innerWidth:a.bottom-o>0&&a.top+o<se.innerHeight},r.positionInViewport=function(n,i,s){ui(n)&&(n=kn(n));var a=n.getBoundingClientRect(),o=a[s?As:Cs],l=i==null?o/2:i in Kh?Kh[i]*o:~i.indexOf("%")?parseFloat(i)*o/100:parseFloat(i)||0;return s?(a.left+l)/se.innerWidth:(a.top+l)/se.innerHeight},r.killAll=function(n){if(ie.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var i=Is.killAll||[];Is={},i.forEach(function(s){return s()})}},r})();ae.version="3.15.0";ae.saveStyles=function(r){return r?ol(r).forEach(function(t){if(t&&t.style){var e=hi.indexOf(t);e>=0&&hi.splice(e,5),hi.push(t,t.style.cssText,t.getBBox&&t.getAttribute("transform"),Et.core.getCache(t),Id())}}):hi};ae.revert=function(r,t){return Hd(!r,t)};ae.create=function(r,t){return new ae(r,t)};ae.refresh=function(r){return r?jo(!0):(La||ae.register())&&Es(!0)};ae.update=function(r){return++ne.cache&&yr(r===!0?2:0)};ae.clearScrollMemory=E_;ae.maxScroll=function(r,t){return nr(r,t?En:Je)};ae.getScrollFunc=function(r,t){return _r(kn(r),t?En:Je)};ae.getById=function(r){return Dd[r]};ae.getAll=function(){return ie.filter(function(r){return r.vars.id!=="ScrollSmoother"})};ae.isScrolling=function(){return!!Ei};ae.snapDirectional=Gd;ae.addEventListener=function(r,t){var e=Is[r]||(Is[r]=[]);~e.indexOf(t)||e.push(t)};ae.removeEventListener=function(r,t){var e=Is[r],n=e&&e.indexOf(t);n>=0&&e.splice(n,1)};ae.batch=function(r,t){var e=[],n={},i=t.interval||.016,s=t.batchMax||1e9,a=function(c,h){var d=[],u=[],f=Et.delayedCall(i,function(){h(d,u),d=[],u=[]}).pause();return function(g){d.length||f.restart(!0),d.push(g.trigger),u.push(g),s<=d.length&&f.progress(1)}},o;for(o in t)n[o]=o.substr(0,2)==="on"&&Rn(t[o])&&o!=="onRefreshInit"?a(o,t[o]):t[o];return Rn(s)&&(s=s(),un(ae,"refresh",function(){return s=t.batchMax()})),ol(r).forEach(function(l){var c={};for(o in n)c[o]=n[o];c.trigger=l,e.push(ae.create(c))}),e};var c_=function(t,e,n,i){return e>i?t(i):e<0&&t(0),n>i?(i-e)/(n-e):n<0?e/(e-n):1},Cd=function r(t,e){e===!0?t.style.removeProperty("touch-action"):t.style.touchAction=e===!0?"auto":e?"pan-"+e+(Ve.isTouch?" pinch-zoom":""):"none",t===fi&&r(ge,e)},Hh={auto:1,scroll:1},m1=function(t){var e=t.event,n=t.target,i=t.axis,s=(e.changedTouches?e.changedTouches[0]:e).target,a=s._gsap||Et.core.getCache(s),o=Cn(),l;if(!a._isScrollT||o-a._isScrollT>2e3){for(;s&&s!==ge&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(Hh[(l=wi(s)).overflowY]||Hh[l.overflowX]));)s=s.parentNode;a._isScroll=s&&s!==n&&!Ps(s)&&(Hh[(l=wi(s)).overflowY]||Hh[l.overflowX]),a._isScrollT=o}(a._isScroll||i==="x")&&(e.stopPropagation(),e._gsapAllow=!0)},R_=function(t,e,n,i){return Ve.create({target:t,capture:!0,debounce:!1,lockAxis:!0,type:e,onWheel:i=i&&m1,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&un(xe,Ve.eventTypes[0],u_,!1,!0)},onDisable:function(){return hn(xe,Ve.eventTypes[0],u_,!0)}})},g1=/(input|label|select|textarea)/i,h_,u_=function(t){var e=g1.test(t.target.tagName);(e||h_)&&(t._gsapAllow=!0,h_=e)},_1=function(t){ws(t)||(t={}),t.preventDefault=t.isNormalizer=t.allowClicks=!0,t.type||(t.type="wheel,touch"),t.debounce=!!t.debounce,t.id=t.id||"normalizer";var e=t,n=e.normalizeScrollX,i=e.momentum,s=e.allowNestedScroll,a=e.onRelease,o,l,c=kn(t.target)||fi,h=Et.core.globals().ScrollSmoother,d=h&&h.get(),u=Qr&&(t.content&&kn(t.content)||d&&t.content!==!1&&!d.smooth()&&d.content()),f=_r(c,Je),g=_r(c,En),_=1,p=(Ve.isTouch&&se.visualViewport?se.visualViewport.scale*se.visualViewport.width:se.outerWidth)/se.innerWidth,m=0,M=Rn(i)?function(){return i(o)}:function(){return i||2.8},A,y,S=R_(c,t.type,!0,s),T=function(){return y=!1},E=er,v=er,w=function(){l=nr(c,Je),v=tl(Qr?1:0,l),n&&(E=tl(0,nr(c,En))),A=Rs},R=function(){u._gsap.y=Ko(parseFloat(u._gsap.y)+f.offset)+"px",u.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(u._gsap.y)+", 0, 1)",f.offset=f.cacheID=0},N=function(){if(y){requestAnimationFrame(T);var et=Ko(o.deltaY/2),Z=v(f.v-et);if(u&&Z!==f.v+f.offset){f.offset=Z-f.v;var C=Ko((parseFloat(u&&u._gsap.y)||0)-f.offset);u.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+C+", 0, 1)",u._gsap.y=C+"px",f.cacheID=ne.cache,yr()}return!0}f.offset&&R(),y=!0},L,V,I,z,q=function(){w(),L.isActive()&&L.vars.scrollY>l&&(f()>l?L.progress(1)&&f(l):L.resetTo("scrollY",l))};return u&&Et.set(u,{y:"+=0"}),t.ignoreCheck=function(k){return Qr&&k.type==="touchmove"&&N(k)||_>1.05&&k.type!=="touchstart"||o.isGesturing||k.touches&&k.touches.length>1},t.onPress=function(){y=!1;var k=_;_=Ko((se.visualViewport&&se.visualViewport.scale||1)/p),L.pause(),k!==_&&Cd(c,_>1.01?!0:n?!1:"x"),V=g(),I=f(),w(),A=Rs},t.onRelease=t.onGestureStart=function(k,et){if(f.offset&&R(),!et)z.restart(!0);else{ne.cache++;var Z=M(),C,nt;n&&(C=g(),nt=C+Z*.05*-k.velocityX/.227,Z*=c_(g,C,nt,nr(c,En)),L.vars.scrollX=E(nt)),C=f(),nt=C+Z*.05*-k.velocityY/.227,Z*=c_(f,C,nt,nr(c,Je)),L.vars.scrollY=v(nt),L.invalidate().duration(Z).play(.01),(Qr&&L.vars.scrollY>=l||C>=l-1)&&Et.to({},{onUpdate:q,duration:Z})}a&&a(k)},t.onWheel=function(){L._ts&&L.pause(),Cn()-m>1e3&&(A=0,m=Cn())},t.onChange=function(k,et,Z,C,nt){if(Rs!==A&&w(),et&&n&&g(E(C[2]===et?V+(k.startX-k.x):g()+et-C[1])),Z){f.offset&&R();var Mt=nt[2]===Z,bt=Mt?I+k.startY-k.y:f()+Z-nt[1],Bt=v(bt);Mt&&bt!==Bt&&(I+=Bt-bt),f(Bt)}(Z||et)&&yr()},t.onEnable=function(){Cd(c,n?!1:"x"),ae.addEventListener("refresh",q),un(se,"resize",q),f.smooth&&(f.target.style.scrollBehavior="auto",f.smooth=g.smooth=!1),S.enable()},t.onDisable=function(){Cd(c,!0),hn(se,"resize",q),ae.removeEventListener("refresh",q),S.kill()},t.lockAxis=t.lockAxis!==!1,o=new Ve(t),o.iOS=Qr,Qr&&!f()&&f(1),Qr&&Et.ticker.add(er),z=o._dc,L=Et.to(o,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:C_(f,f(),function(){return L.pause()})},onUpdate:yr,onComplete:z.vars.onComplete}),o};ae.sort=function(r){if(Rn(r))return ie.sort(r);var t=se.pageYOffset||0;return ae.getAll().forEach(function(e){return e._sortY=e.trigger?t+e.trigger.getBoundingClientRect().top:e.start+se.innerHeight}),ie.sort(r||function(e,n){return(e.vars.refreshPriority||0)*-1e6+(e.vars.containerAnimation?1e6:e._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};ae.observe=function(r){return new Ve(r)};ae.normalizeScroll=function(r){if(typeof r>"u")return Vn;if(r===!0&&Vn)return Vn.enable();if(r===!1){Vn&&Vn.kill(),Vn=r;return}var t=r instanceof Ve?r:_1(r);return Vn&&Vn.target===t.target&&Vn.kill(),Ps(t.target)&&(Vn=t),t};ae.core={_getVelocityProp:Dh,_inputObserver:R_,_scrollers:ne,_proxies:Oi,bridge:{ss:function(){Ei||Ls("scrollStart"),Ei=Cn()},ref:function(){return An}}};__()&&Et.registerPlugin(ae);var jr=53866,P_=329223,x1=r=>Math.min(1,Math.max(0,r)),fn=(r,t,e)=>x1((r-t)/(e-t)),Pn=r=>r*r*(3-2*r),I_=r=>r<.5?4*r*r*r:1-Math.pow(-2*r+2,3)/2;function N_(r,t){let e=document.createElement("canvas");e.width=e.height=r,t(e.getContext("2d"),r);let n=new ao(e);return n.colorSpace=Sn,n}var L_=(r,t,e)=>N_(512,(n,i)=>{let s=i/8;for(let a=0;a<8;a++)for(let o=0;o<8;o++)n.fillStyle=(o+a)%2?r:t,n.fillRect(o*s,a*s,s,s);e&&(n.strokeStyle=e,n.lineWidth=2,n.strokeRect(1,1,i-2,i-2))}),v1=()=>N_(128,(r,t)=>{let e=r.createRadialGradient(t/2,t/2,0,t/2,t/2,t/2);e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.25,"rgba(255,255,255,0.45)"),e.addColorStop(1,"rgba(255,255,255,0)"),r.fillStyle=e,r.fillRect(0,0,t,t)}),y1=(r,t=.55)=>new co(r.map(([e,n])=>new Lt(e*t,n*t)),48),Wd=(r,t,e,n=-90,i=90,s=8)=>Array.from({length:s+1},(a,o)=>{let l=(n+(i-n)*o/s)*Math.PI/180;return[r+e*Math.cos(l),t+e*Math.sin(l)]}),jh=[[0,0],[.6,0],[.62,.06],[.58,.12],[.54,.15],[.56,.2],[.46,.27],[.34,.34]],S1={k:[...jh,[.28,.5],[.25,.9],[.23,1.26],[.35,1.32],[.38,1.37],[.26,1.42],[.28,1.56],[.36,1.84],[.4,1.92],[.32,1.99],[.13,2.04],[0,2.06]],q:[...jh,[.28,.5],[.24,.9],[.22,1.2],[.33,1.26],[.36,1.31],[.25,1.36],[.27,1.5],[.38,1.82],[.3,1.86],[.1,1.9],...Wd(0,2,.11,-90,90,6)],b:[...jh,[.26,.48],[.22,.82],[.32,.88],[.34,.93],[.22,.98],[.27,1.12],[.3,1.3],[.24,1.48],[.1,1.6],...Wd(0,1.66,.08,-90,90,6)],r:[...jh,[.32,.46],[.3,.9],[.34,.96],[.4,1.02],[.4,1.26],[.3,1.26],[.3,1.18],[0,1.18]],p:[[0,0],[.5,0],[.52,.05],[.47,.11],[.44,.14],[.46,.18],[.34,.26],[.24,.36],[.19,.62],[.3,.68],[.32,.72],[.18,.76],...Wd(0,.95,.2,-70,90,8)]};function D_(r,t,e){let n=new Li;if(n.add(new Te(e[r],t)),r==="k"){let i=new Te(e.crossV,t);i.position.y=2.06*.55+.12;let s=new Te(e.crossH,t);s.position.y=2.06*.55+.15,n.add(i,s)}return n}var tu=(r,t)=>new O("abcdefgh".indexOf(r)-3.5,0,8-t-3.5),Xd=[[0,[5.2,2.5,9.6],[0,.35,0]],[.1,[7.4,3.6,11.2],[0,.3,0]],[.3,[0,96,58],[0,0,-8]],[.43,[0,84,34],[0,0,0]],[.55,[0,14,11.5],[0,0,0]],[.66,[-2.6,7.6,9.4],[.4,.2,-.4]],[.78,[3.4,5.2,6.2],[1.4,.4,-2.4]],[.9,[5.6,3.1,-.4],[2.4,.5,-3.4]],[1,[6.8,4.4,2.8],[1.5,.4,-2.4]]];function rA({canvas:r,film:t,chapters:e=[],anchors:n=[],toggles:i=[],bar:s=null,reduceMotion:a=!1,still:o=null}){let l=new lh({canvas:r,antialias:!0,powerPreference:"high-performance"}),c=Math.min(window.innerWidth,window.innerHeight)<700;l.setPixelRatio(Math.min(window.devicePixelRatio||1,c?1.6:2)),l.outputColorSpace=Sn,l.toneMapping=xo,l.toneMappingExposure=1.1,l.setClearColor(P_,1);let h=new to;h.fog=new ja(P_,.012);let d=new an(36,1,.1,600);h.add(new fo(10134709,0,.22));let u=new oa(14674175,3.2);u.position.set(-7,7,-9);let f=new oa(jr,2.2);f.position.set(8,4,-6);let g=new mo(16777215,16,40,.5,1,1.6);g.position.set(0,12,7),g.target.position.set(0,0,-.5);let _=new go(jr,0,14,1.6);_.position.copy(tu("g",8)).add(new O(0,2.2,1)),h.add(u,f,g,g.target,_);let p=new Li,m=new Te(new _i(8.9,.42,8.9),new ls({color:789776,roughness:.32,metalness:.25,clearcoat:.7,clearcoatRoughness:.2}));m.position.y=-.21;let M=new Te(new ni(8,8),new os({map:L_("#08090b","#1b1e22"),roughness:.38,metalness:.15}));M.rotation.x=-Math.PI/2,M.position.y=.002,p.add(m,M);let A=new ei({color:jr,transparent:!0,opacity:0,blending:Zi,depthWrite:!1});for(let[Y,K,J,Q]of[[8.9,.05,0,4.45],[8.9,.05,0,-4.45],[.05,8.9,4.45,0],[.05,8.9,-4.45,0]]){let lt=new Te(new _i(Y,.05,K),A);lt.position.set(J,.01,Q),p.add(lt)}let y=v1(),S=new Te(new ni(18,18),new ei({map:y,color:jr,transparent:!0,opacity:0,blending:Zi,depthWrite:!1}));S.rotation.x=-Math.PI/2,S.position.y=-.4,p.add(S);let T=(Y,K,J)=>{let Q=new Te(new ni(1,1),new ei({color:J,transparent:!0,opacity:0,blending:Zi,depthWrite:!1}));return Q.rotation.x=-Math.PI/2,Q.position.copy(tu(Y,K)).setY(.006),p.add(Q),Q},E=T("d",1,jr),v=T("d",8,jr);h.add(p);let w=Object.fromEntries(Object.entries(S1).map(([Y,K])=>[Y,y1(K)]));w.crossV=new _i(.065,.27,.065),w.crossH=new _i(.19,.065,.065);let R=new ls({color:15262940,roughness:.3,clearcoat:1,clearcoatRoughness:.08,sheen:.3}),N=new ls({color:1052947,roughness:.2,metalness:.1,clearcoat:1,clearcoatRoughness:.06}),L=new ei({map:y,color:0,transparent:!0,opacity:.75,depthWrite:!1}),V=(Y,K,J,Q)=>{let lt=D_(Y,K?R:N,w);lt.position.copy(tu(J,Q)),lt.rotation.y=Math.random()*Math.PI;let vt=new Te(new ni(1.1,1.1),L);return vt.rotation.x=-Math.PI/2,vt.position.copy(lt.position).setY(.004),p.add(lt,vt),{piece:lt,shadow:vt}};for(let[Y,K,J,Q]of[["k",1,"g",1],["p",1,"a",3],["p",1,"f",2],["p",1,"g",2],["p",1,"h",2],["b",1,"b",2],["p",0,"a",7],["p",0,"b",6],["b",0,"b",7],["r",0,"c",2],["p",0,"f",7],["p",0,"g",7],["p",0,"h",7]])V(Y,K,J,Q);let I=V("q",1,"d",1),z=D_("k",N,w),q=new Li,k=tu("g",8);q.position.set(k.x+.33,0,k.z),z.position.set(-.33,0,0),q.add(z);let et=new Te(new ni(1.1,1.1),L);et.rotation.x=-Math.PI/2,et.position.copy(k).setY(.004),p.add(q,et);let Z=15,C=12,nt=[];for(let Y=-C;Y<=C;Y++)for(let K=-C;K<=C;K++)Y===0&&K===0||Math.hypot(Y,K)>C+.5||Math.abs(Y)<=1&&Math.abs(K)<=1||nt.push([Y*Z+(Math.random()-.5)*5,K*Z+(Math.random()-.5)*5]);let Mt=L_("#0d0e11","#2a2e34"),bt=new ia(new _i(8.9,.42,8.9),new os({map:Mt,emissiveMap:Mt,emissive:8257472,emissiveIntensity:.05,roughness:.5,metalness:.1}),nt.length),Bt=new ia(new ni(1,1),new ei({map:y,transparent:!0,blending:Zi,depthWrite:!1}),nt.length),Ut=new _e,Ht=[];nt.forEach(([Y,K],J)=>{Ut.makeRotationY((Math.random()-.5)*.5).setPosition(Y,-.21,K),bt.setMatrixAt(J,Ut);let Q=13+Math.random()*6;Ut.makeRotationX(-Math.PI/2).scale(new O(Q,Q,1)).setPosition(Y,.3,K),Bt.setMatrixAt(J,Ut),Ht.push([Math.random()*Math.PI*2,.25+Math.random()*.6,Math.random()<.82]),Bt.setColorAt(J,new $t(0,0,0))}),h.add(bt,Bt);let j=r.clientHeight>r.clientWidth,it=j?new O(-9,0,26):new O(-30,0,15),mt=j?new O(10,0,-28):new O(32,0,-19),zt=new ei({color:jr,transparent:!0,opacity:.95,blending:Zi,depthWrite:!1}),gt=[it,mt].map(Y=>{let K=Y.clone().multiplyScalar(.5).setY(20),J=new ho(new as(Y,K,new O(0,.4,0)),96,.22,6,!1),Q=new Te(J,zt);return J.setDrawRange(0,0),h.add(Q),Q}),Ft=Y=>{let K=new Te(new ni(22,22),new ei({map:y,color:jr,transparent:!0,opacity:0,blending:Zi,depthWrite:!1}));return K.rotation.x=-Math.PI/2,K.position.copy(Y).setY(.5),h.add(K),K},kt=[Ft(it),Ft(mt)],It={ny:it.clone().setY(2),seoul:mt.clone().setY(2)},Gt=Xd.map(Y=>Y[0]),Kt=new ss(Xd.map(Y=>new O(...Y[1])),!1,"centripetal"),G=new ss(Xd.map(Y=>new O(...Y[2])),!1,"centripetal"),Qt=Y=>{let K=0;for(;K<Gt.length-2&&Y>Gt[K+1];)K++;let J=Pn(fn(Y,Gt[K],Gt[K+1]));return(K+J)/(Gt.length-1)},fe=new O,ve=new O,qt=new $t,ue={p:o?o.progress:0},U=1,Se=()=>{let Y=r.clientWidth,K=r.clientHeight;!Y||!K||(l.setSize(Y,K,!1),U=Y/K,d.aspect=U,d.fov=U<.8?48:36,d.updateProjectionMatrix())},Wt=(Y,K)=>{let J=Qt(Y);Kt.getPoint(J,d.position),G.getPoint(J,fe),U<.8&&d.position.multiplyScalar(1.12),d.position.x+=Math.sin(K*25e-5)*.15,d.position.y+=Math.sin(K*3e-4)*.08;let Q=1-Pn(fn(Y,.07,.2));U>=1?fe.x-=3.4*Q:fe.y-=2.8*Q,d.lookAt(fe);let lt=Pn(fn(Y,.1,.24))*(1-Pn(fn(Y,.5,.6)));h.fog.density=.006+(1-lt)*.05;for(let D=0;D<Ht.length;D++){let[ut,rt,pt]=Ht[D],st=(pt?rt*(.75+.25*Math.sin(K*.0012+ut)):.08)*(.25+lt*.75);qt.setRGB(st*.05,st*1.15,st*.62),Bt.setColorAt(D,qt)}Bt.instanceColor.needsUpdate=!0,bt.material.emissiveIntensity=.04+lt*.22;let vt=Pn(fn(Y,.3,.46)),dt=1-Pn(fn(Y,.52,.6));gt.forEach(D=>{D.geometry.setDrawRange(0,Math.floor(D.geometry.index.count*vt)),D.material.opacity=.95*dt}),kt.forEach(D=>D.material.opacity=Pn(fn(Y,.28,.36))*dt);let ft=Pn(fn(Y,.58,.64));A.opacity=ft*(.85+.15*Math.sin(K*.004)),S.material.opacity=ft*.35;let ht=I_(fn(Y,.68,.76));I.piece.position.z=3.5-7*ht,I.piece.position.y=Math.sin(ht*Math.PI)*.35,I.shadow.position.z=I.piece.position.z,E.material.opacity=Pn(fn(Y,.69,.73))*.3,v.material.opacity=Pn(fn(Y,.74,.77))*.45;let At=I_(fn(Y,.77,.85));q.rotation.z=-At*(Math.PI/2-.1),et.scale.set(1+At*1.4,1,1),et.position.x=k.x+At*.6;let Ot=Pn(fn(Y,.84,.9));_.intensity=Ot*26,f.intensity=2.2+Ot*1.6},P=Y=>{for(let K of i)K.classList.toggle("on",Y>=Number(K.dataset.onAfter));s&&(s.style.transform=`scaleX(${Y.toFixed(4)})`);for(let K of e){let J=Number(K.dataset.from),Q=Number(K.dataset.to),lt=.025,vt=J===0?1-Pn(fn(Y,Q-lt,Q)):Pn(fn(Y,J,J+lt))*(1-Pn(fn(Y,Q-lt,Q)));K.style.opacity=vt.toFixed(3),K.style.transform=`translate3d(0, ${((1-vt)*12).toFixed(1)}px, 0)`,K.style.visibility=vt<.01?"hidden":"visible"}for(let K of n){let J=It[K.dataset.anchor];ve.copy(J).project(d);let Q=Pn(fn(Y,.33,.37))*(1-Pn(fn(Y,.48,.52)));K.style.opacity=ve.z<1?Q.toFixed(3):"0",K.style.transform=`translate3d(${((ve.x*.5+.5)*r.clientWidth).toFixed(1)}px, ${((-ve.y*.5+.5)*r.clientHeight).toFixed(1)}px, 0) translate(-50%, -140%)`}};if(Se(),new ResizeObserver(Se).observe(r),o||a){let Y=o?o.progress:.92;return Wt(Y,0),l.render(h,d),o&&P(Y),{renderer:l}}Ch.registerPlugin(ae),Ch.to(ue,{p:1,ease:"none",scrollTrigger:{trigger:t,start:"top top",end:"bottom bottom",scrub:.6}});let x=!1,B=!0,H=Y=>{Wt(ue.p,Y),P(ue.p),l.render(h,d),x&&requestAnimationFrame(H)},tt=()=>{let Y=B&&!document.hidden;Y&&!x?(x=!0,requestAnimationFrame(H)):Y||(x=!1)};return new IntersectionObserver(Y=>{B=Y[0].isIntersecting,tt()}).observe(t),document.addEventListener("visibilitychange",tt),tt(),{renderer:l}}export{rA as mountFilm};
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)

gsap/gsap-core.js:
  (*!
   * GSAP 3.15.0
   * https://gsap.com
   *
   * @license Copyright 2008-2026, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/CSSPlugin.js:
  (*!
   * CSSPlugin 3.15.0
   * https://gsap.com
   *
   * Copyright 2008-2026, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/Observer.js:
  (*!
   * Observer 3.15.0
   * https://gsap.com
   *
   * @license Copyright 2008-2026, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/ScrollTrigger.js:
  (*!
   * ScrollTrigger 3.15.0
   * https://gsap.com
   *
   * @license Copyright 2008-2026, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)
*/
