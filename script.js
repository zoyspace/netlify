// import dotenv from "dotenv";
// const env = process.env
// console.log(env.SERVICE_DOMAIN)
// console.log(env.GET_API_KEY)

const heading = document.querySelector('#animation');

const keyframes = {
        opacity: [0,1],
        translate:['-50px 100px','0 0']
}
const options ={
        duration: 5000,
        // iterations: Infinity,
        easing:'ease'
}
heading.animate(keyframes,options);


 //get image.json
var nogizka_blog_images = 'global';
var tags_info = [];
let requestURL = 'https://spa.microcms.io/api/v1/blogs/' + process.env.SERVICE_DOMAIN;
// let requestURL = 'https://spa.microcms.io/api/v1/blogs/13itqumhf4';

function deltags(obj) {
    work_str = obj.replace(/<br>/g, "\n").replace(/<p>/g,"").replace(/<\/p>/g,"").replace(/&nbsp;/g," ");
    return(work_str);
  }

function makeImageList(obj) {
  var i = 0;
    work_image_list = [];
    for (let key in nogizka_blog_images){
        // 出力件数を絞って、開発する。
        i = i +1;
        if (i >3) {break;}
        if (key != '五百城茉央') {continue;}

        // console.log(key);
        // console.log(nogizka_blog_images[key]);
        // console.log(nogizka_blog_images[key]['page_info']);
        for (numPage in nogizka_blog_images[key]['page_info']){
          // console.log(nogizka_blog_images[key]['page_info'][numPage]['title']);
          for (numImage in nogizka_blog_images[key]['page_info'][numPage]['image_urls']){
            workImageUrl = nogizka_blog_images[key]['page_info'][numPage]['image_urls'][numImage];
            // console.log(workImageUrl);
            work_image_list.push(workImageUrl);
          }
        }
    }
    return(work_image_list);
 }
 function makeImageTag(imgList) {
  const dev_blog_images = document.querySelector('.blog_images');
    
    for (i in imgList){
      let img_element = document.createElement('img');
      img_element.src = imgList[i]; // 画像パス
      dev_blog_images.appendChild(img_element);
    }
 }
let request = new XMLHttpRequest();
request.open('GET', requestURL);
//
request.setRequestHeader('X-MICROCMS-API-KEY', process.env.GET_API_KEY); 
// request.setRequestHeader('X-MICROCMS-API-KEY', 'zQziGptrT1wUApcuwKTjzKLRMVPturQvFouy'); 
request.responseType = 'json';
request.send();
request.onload = function() {
    const re_json = request.response;
    nogizka_blog_images = JSON.parse(deltags(re_json.content));
    image_list = makeImageList(nogizka_blog_images);
    // console.log(image_list);
    makeImageTag(image_list);
    


  }
// for (let info in nogizka_blog_images){
//   var work_list = [];
//   work_list.push(info[]);
// }

console.log('test');
// console.log(nogizka_blog_images);

// tag作成
