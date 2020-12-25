const winW = window.innerWidth;
const winH = window.innerHeight;
let canvasScaleFlag = 0;
let page2Flag = 0;
let imgDetail = 0;
let imgWrite = 0;
let dropMM = 0;
// let imgMeg = ['1111','222','333','44','55','66','77','88'];
// let imgUrl = ["img/memory (1).jpg",'img/memory \(2\).jpg','img/memory \(3\).jpg','img/memory (4).jpg','img/memory (5).jpg','img/memory (6).jpg','img/memory (7).jpg','img/memory (8).jpg'];
// let imgColor = ['#ad4','red','#eee','#555','#3ed','#e41','yellow','blue'];
let timeid = null;
let currentPage = 0;
document.body.onclick = function(e){
  if(canvasScaleFlag == 0 && page2Flag == 0 && dropMM == 0){
    // $('#bd').trigger("click");
    timeid = setInterval(()=>{
      let r = parseInt($('#circle1').attr('r'));
      r += 100;
      $('#circle1').attr('r',r);
      if(r >= winW){
        page2.style.display = 'block';
        $('svg').css('display','none');
        $('#mouseD').css('display','block');
        $('#mouseD p').css('right','60px');
        drawM.style.display = 'block';
        page2Flag = 1;
        clearInterval(timeid);
      }
    },200);
    $('#mouseD').css('display','none');
    $('#mouseD p').html('DRAW MEMORIES');
    // $('#mouseD p').css('right','120px');
    page1.style.display = 'none';
    canvasScaleFlag = 1;
  }else if(page2Flag && imgDetail == 0 && imgWrite == 0 && dropMM == 0){ //宫格放图片
    canvasScaleFlag = 0;
    drawM.style.display = 'none';
    $('.picall').css('display','flex');
    $('.logoNav').css('display','none');
    if($('.rightPic ul li').length < pic.length){
      $('.rightPic ul').empty();
      console.log(pic[0].imgUrl,pic)
      for(let i = 0; i < pic.length;i++){
        $('.rightPic ul').append(`<li><a href="#" style="background-image: url('${pic[i].imgUrl}')";></a><span></span></li>`);
        $('.rightPic ul span').eq(i).css('background',pic[i].imgColor);
      }
    }
  }else if(dropMM == 1){
    mouseD.style.display = 'none';
    $('#mouseD span').css('display','none');
    $('#mouseD p').css('display','none');
    $('#mouseD p').html('DRAW MEMORIES');
    $('#page3').css('display','block');
    $('.picWrite .top .ttop .file img').css('display','none');
    $('.picWrite .top .ttop .file .bb').css('display','block');
    $('.picWrite .top .ttop .file img').attr('src','');
    $('.picWrite .top textarea').val('Write something');

    $('#page2').css('display','none');
    $('svg').css('display','block');
    $('#circle1').css('display','none');
    $('rect').css('display','block');
    console.log($('rect'));
    $('rect').eq(1).attr('x',winW * 0.1);
    $('rect').eq(1).attr('y',winH * 0.11);
    $('.logoNav').css('display','none');
    $('.logoBlack').css('display','block');
  }
}
$(".mCustomScrollbar").mCustomScrollbar();
/*--------------------------------About Page----------------------------*/
$('.aboutw span').click(function(e){
  e.stopPropagation();
  if($('.aboutw span').attr('class').indexOf('icon-wenhao') != -1){
    $('.aboutpage').css('display','block');
    $('.aboutw span').removeClass('icon-wenhao');
    $('.aboutw span').addClass('icon-guanbi');
    $('.aboutw p').html('CLOSE');
    for(let i = 1; i <= 3; i++){
      if($('#page'+i).css('display') == 'block'){
        currentPage = i -1;
      }
    }
    $('section').css('display','none');
    $('svg').css('display','none');
  }else if($('.aboutw span').attr('class').indexOf('icon-guanbi') != -1){
    e.stopPropagation();
    $('.aboutpage').css('display','none');
    $('.aboutw span').removeClass('icon-guanbi');
    $('.aboutw span').addClass('icon-wenhao');
    $('.aboutw p').html('ABOUT');
    $('section').eq(currentPage).css('display','block');
    if(currentPage == 0) $('svg').css('display','block');
    if(currentPage == 2) $('svg').css('display','block');
  }
  

  // $(".icon-guanbi").unbind('click').on('click',function(e){
    
  //   // console.log('ss');
  // });
});

$('.leftButton p').mouseover(function(){
  mouseD.style.display = 'none';
});
$('.leftButton p').mouseleave(()=>{
  if(imgDetail == 0 && imgWrite == 0)
  mouseD.style.display = 'block';
});  
$('.rightPic').mouseover(function(){
  mouseD.style.display = 'none';
}); 
$('.rightPic').mouseleave(()=>{
  if(imgDetail == 0 && imgWrite == 0)
  mouseD.style.display = 'block';
}); 
/*--------------------------------最后界面LOAD CURRENT IMG----------------------------*/
$('#page3 .toDrop').click(function(e){
  e.stopPropagation();
  $('svg').css('display','none');
  $('#page3').css('display','none');
  page2.style.display = 'block';
  drawM.style.display = 'block';
  $('#mouseD').css('display','block');
  $('#mouseD p').css('display','block');
  $('.logoNav').css('display','block');
  $('.logoBlack').css('display','none');
  $('#mouseD p').html('DRAW MEMORIES');
  page2Flag = 1;
  dropMM = 0;
});
$('.shareCreat p').eq(0).click(function(e){
  e.stopPropagation();
  let timers=new Date();
  let fullYear=timers.getFullYear();
  let month=timers.getMonth()+1;
  let date=timers.getDate();
  let randoms=Math.random()+'';
  let numberFileName=fullYear+''+month+date+randoms.slice(3,10);//年月日加上随机数
  let imgData=canvas.toDataURL();
  //保存图片
  let saveFile = function(data, filename){
      let save_link = document.createElement('a');
      let p = document.createElement('p');
      save_link.append(p);
      save_link.id = 'downloadimg';
      save_link.href = data;
      save_link.download = filename;
      document.body.append(save_link);
  };
  let filename = numberFileName + '.png';//最终文件名+文件格式
  saveFile(imgData,filename);
  $('#downloadimg p').trigger("click");
  alert('shoot');
});
$('.shareCreat p').eq(1).click(function(e){
  e.stopPropagation();
  $('canvas').css('display','none');
  $('#page1').css('display','none');
  $('#page2').css('display','none');
  $('#page3').css('display','none');
  $('.share').css('display','flex');
  dropMM = 0;
});
/*--------------------------------保存自己的记忆----------------------------*/
$('.toDrop').eq(0).click(function(e){
  e.stopPropagation();
  let saveColor = $('.picWrite .top').css('background-color');
  let saveMeg = $('.picWrite .top .ttop textarea').val();
  let saveimg = $('.picWrite .top .ttop .file img').attr('src');
  let time = new Date();
  pic.push({
    "imgMeg":saveMeg,
    "time":`${time.getFullYear}-${time.getMonth + 1}-${time.getDate},`,
    "location":"Beijing, China",
    "imgUrl":saveimg,
    "imgColor":saveColor
  });
  console.log(`${time.getDate}.${time.getMonth}.${time.getFullYear}`);
  $('.picWrite').css('display','none');
  mouseD.style.display = 'block';
  $('#mouseD span').css('background-color',saveColor);
  $('#mouseD p').css('display','block');
  $('#mouseD p').css('right','0px');
  $('#mouseD p').html('CLICK AND DROP MEMORY');
  dropMM = 1;
  imgWrite = 0;
  console.log(saveColor, saveMeg);
});
/*------------------------------------选色器----------------------------*/
$("#pickColor").spectrum({
  color: "#008040"
});

/*----------------------------上传图片页面及上传图片显示----------------------------*/
$('.leftButton p').eq(0).click(function(e){
  e.stopPropagation();
  $('#mouseD').css('display','none');
  $('.picall').css('display','none');
  $('.logoNav').css('display','block');
  $('.picWrite').css('display','block');
  mouseD.style.display = 'none !important';
  imgWrite = 1;
});

$('.leftButton p').eq(1).click(function(e){
  e.stopPropagation();
  $('#mouseD').css('display','block');
  $('#mouseD p').css('display','block');
  $('.picall').css('display','none');
  $('.logoNav').css('display','block');
  imgWrite = 0;
});

let file = document.querySelector("input[type=file]");
file.onchange = () => {
    let fileData = file.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(fileData);
    //读取文件成功后执行的方法函数
    reader.onload = function(e) {
        console.log(e);
        //选择所要显示图片的img，要赋值给img的src就是e中target下result里面的base64编码格式的地址
        $('.picWrite .top .ttop .file img').css('display','block');
        $('.picWrite .top .ttop .file .bb').css('display','none');
        $('.picWrite .top .ttop .file img').attr('src',e.target.result);
    }
}
/*------------------------------关闭图片事件----------------------------*/
$('.closeblack').click(function(e){
  e.stopPropagation();
  $('.picShow').css('display','none');
  $('.picall').css('display','flex');
  $('.logoNav').css('display','none');
  mouseD.style.display = 'block';
  imgDetail = 0;
});
/*----------------------------点击宫格图片事件----------------------------*/
$('.rightPic ul').on('click','a',function(e){
  e.stopPropagation();
  let index = $('.rightPic ul li a').index(this);
  $('#mouseD').css('display','none');
  $('.picShow').css('display','block');
  $('.picShow .top').css('background',pic[index].imgColor);
  if(pic[index].imgColor == '#000000'){
    $('.picShow .top p').css('color','#fff');
  }
  $('.picShow .top img').attr('src',pic[index].imgUrl);
  $('.picShow .top p').eq(0).html(pic[index].imgMeg);
  $('.picShow .top p').eq(1).html(pic[index].time);
  $('.picShow .top p').eq(2).html(pic[index].location);
  $('.picall').css('display','none');
  $('.logoNav').css('display','block');
  mouseD.style.display = 'none !important';
  imgDetail = 1;
});
// /*----------------------------BG SCALE----------------------------*/
// let targetNode = $('#canvas')[0];//content监听的元素id
// let options = { attributes: true};
// //回调事件
// function callback(mutationsList, observer) {
//   if(canvasScaleFlag == 1 && page2Flag == 0){
//     let rd = $('#canvas').css('border-radius');
//     if(rd == '0px' || rd == '0'|| rd == '0%'){
//       page2.style.display = 'block';
//       drawM.style.display = 'block';
//       page2Flag = 1;
//     }
//   }
// }
// let mutationObserver = new MutationObserver(callback);
// mutationObserver.observe(targetNode, options);
/*--------------------------  鼠标链接滴管-------------------------------*/
document.body.onmousemove = function(e) {
  let left = e.clientX - 40;
  let top = e.clientY - 90;
  
  mouseD.style.left=left + "px";
  mouseD.style.top=top + "px";
  $('#circle1').attr('cx',left);
  $('#circle1').attr('cy',top + 120);
  if(left > winW - 100 && left < winW - 60 && top < 0){
    $('#mouseD').css('display','none');
  }else if(page2Flag == 0 || page2Flag && imgDetail == 0 && imgWrite == 0 && dropMM == 0){
    $('#mouseD').css('display','block');
  }
}
/*-------------------------------------BG-------------------------------*/
// Initialize the GL context
let gl = canvas.getContext("experimental-webgl", {preserveDrawingBuffer:true});
if(!gl){
  console.error("Unable to initialize WebGL.");
}

//Time step
let dt = 0.01;
//Time
let time = 0.0;

//************** Shader sources **************

let vertexSource = `
attribute vec2 position;
void main() {
  gl_Position = vec4(position, 0.0, 1.0);
}
`;

let fragmentSource = `
precision highp float;

uniform float width;
uniform float height;
vec2 resolution = vec2(width, height);

uniform float time;
uniform float arr[12];
void main(){

	//Normalized pixel coordinates (from 0 to 1)
  vec2 uv = gl_FragCoord.xy/resolution.xy;

	float t = time/6.0;
    
  vec2 pos = uv;
  pos.y /= resolution.x/resolution.y;
  pos = 4.0*(vec2(0.5, 0.5) - pos);
    
  float strength = 0.4;
  for(float i = 1.0; i < 7.0; i+=1.0){ 
  	pos.x += strength * sin(2.0*t+i*1.5 * pos.y)+t*0.5;
    pos.y += strength * cos(2.0*t+i*1.5 * pos.x);
	}
	
	
	//Time varying pixel colour
  vec3 col = 0.5 + 0.5*cos(time/2.1+pos.xyx+vec3(0,2,4));
	
  //Fragment colour
	
	gl_FragColor = vec4(col,1);
  
}
`;

// vec3 col = 0.6 + 0.4*cos(time/2.0+pos.xyx+vec3(1,1,1));
//************** Utility functions **************

window.addEventListener( 'resize', onWindowResize, false );
function onWindowResize(){
  canvas.width  = window.innerWidth;
  canvas.height = window.innerHeight;
	gl.viewport(0, 0, canvas.width, canvas.height);
  gl.uniform1f(widthHandle, window.innerWidth);
  gl.uniform1f(heightHandle, window.innerHeight);
}


//Compile shader and combine with source
function compileShader(shaderSource, shaderType){
  let shader = gl.createShader(shaderType);
  gl.shaderSource(shader, shaderSource);
  gl.compileShader(shader);
  if(!gl.getShaderParameter(shader, gl.COMPILE_STATUS)){
  	throw "Shader compile failed with: " + gl.getShaderInfoLog(shader);
  }
  return shader;
}


function getAttribLocation(program, name) {
  let attributeLocation = gl.getAttribLocation(program, name);
  if (attributeLocation === -1) {
  	throw 'Cannot find attribute ' + name + '.';
  }
  return attributeLocation;
}

function getUniformLocation(program, name) {
  let attributeLocation = gl.getUniformLocation(program, name);
  if (attributeLocation === -1) {
  	throw 'Cannot find uniform ' + name + '.';
  }
  return attributeLocation;
}

//************** Create shaders **************

//Create vertex and fragment shaders
let vertexShader = compileShader(vertexSource, gl.VERTEX_SHADER);
let fragmentShader = compileShader(fragmentSource, gl.FRAGMENT_SHADER);

//Create shader programs
let program = gl.createProgram();
gl.attachShader(program, vertexShader);
gl.attachShader(program, fragmentShader);
gl.linkProgram(program);

gl.useProgram(program);

//Set up rectangle covering entire canvas 
let vertexData = new Float32Array([
  -1.0,  1.0, 	// top left
  -1.0, -1.0, 	// bottom left
   1.0,  1.0, 	// top right
   1.0, -1.0, 	// bottom right
]);

//Create vertex buffer
let vertexDataBuffer = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, vertexDataBuffer);
gl.bufferData(gl.ARRAY_BUFFER, vertexData, gl.STATIC_DRAW);

// Layout of our data in the vertex buffer
let positionHandle = getAttribLocation(program, 'position');

gl.enableVertexAttribArray(positionHandle);
gl.vertexAttribPointer(positionHandle,
  2, 				// position is a vec2 (2 values per component)
  gl.FLOAT, // each component is a float
  false, 		// don't normalize values
  2 * 4, 		// two 4 byte float components per vertex (32 bit float is 4 bytes)
  0 				// how many bytes inside the buffer to start from
  );

//Set uniform handle
let timeHandle = getUniformLocation(program, 'time');
let widthHandle = getUniformLocation(program, 'width');
let heightHandle = getUniformLocation(program, 'height');

gl.uniform1f(widthHandle, window.innerWidth);
gl.uniform1f(heightHandle, window.innerHeight);

function draw(){
  onWindowResize();

  //Update time
  time += dt;

	//Send uniforms to program
  gl.uniform1f(timeHandle, time);
  //Draw a triangle strip connecting vertices 0-4
  gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
  
  requestAnimationFrame(draw);
}

draw();
