// script.js
window.addEventListener('load',()=>{
    let allTab = document.querySelectorAll('.tab');
    let allproject = document.querySelectorAll('.project');
 
    // remove-TabActive........
    const removeActive=()=> allTab.forEach(tab=>{
       tab.classList.remove('tab-active')
    });
    
    allTab.forEach(tab=>{
        //Add-TabActive.........
        tab.addEventListener('click',(event)=>{
            removeActive();
            tab.classList.add('tab-active');
 
            let filterName =event.target.getAttribute('data-name');
 
            allproject.forEach(project=>{
                let projectName = project.getAttribute('data-name');
                if((projectName == filterName) || filterName == 'All'){
                    project.style.display = 'block';
                }else{
                    project.style.display = 'none';
                }
            });
        });
    });
 });
 
 //nav scroll............................................
 window.addEventListener('scroll',()=>{
     let nav = document.querySelector('nav');
 
     nav.classList.toggle('nav-scroll',window.scroll>0);
 });
 
 //typed js..............................................
 let typed = new Typed('.typed-text',{
     strings: ['Web developer','Apps Developer'],
     typeSpeed: 100,
     backSpeed: 50,
     backDelay: 1000,
     loop:true,
 });
 
 //menu bar js............
 let menubar = document.querySelector('.menu-bar');
 let menubutton = document.querySelector('.menu-button');
 
 menubutton.addEventListener('click',()=>{
     menubar.classList.toggle('.menu-none');
 });
 