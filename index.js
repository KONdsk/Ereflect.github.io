console.log('你好啊')
let doms = document.querySelectorAll('.nav ul li a')
let defaultKey = 0; 
doms.forEach((element, key) => {
    element.onmouseover = () => {
        doms[defaultKey].className = ''
        element.className = 'active'
        defaultKey = key;
    }
});
doms[defaultKey].className = 'active'
