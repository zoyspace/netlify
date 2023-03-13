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