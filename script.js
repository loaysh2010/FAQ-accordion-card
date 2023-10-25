let line = document.querySelectorAll(".container .faq  .line");

line.forEach(function(ele){
    ele.onclick=function(){
        ele.classList.toggle('active');
    }
});

