//for mobile
function copyMenu(){
    //copy inside dpt-catto departments
    var dptCatagory = document.querySelector('.dpt-cat');
    var dptPlace = document.querySelector('.departments');
    dptPlace.innerHTML = dptCatagory.innerHTML;
    
    //copy nav to vav
    var mainNav = document.querySelector('.header-nav nav');
    var navPlace = document.querySelector('.off-canvas nav');
    navPlace.innerHTML = mainNav.innerHTML;

    //copy header-top wrapper to thetop-nav
    var topNav =document.querySelector('.header-top .wrapper');
    var topPlace = document.querySelector('.off-canvas .thetop-nav');
    topPlace.innerHTML = topNav.innerHTML;
}
copyMenu();

//mobile menu

const menuButton = document.querySelector('.trigger');
closeButton = document.querySelector('.t-close');
addclass = document.querySelector('.site');
menuButton.addEventListener('click', function() {
    addclass.classList.toggle('showmenu')
})
closeButton.addEventListener('click', function(){
    addclass.classList.remove('showmenu');
})


//sub menu

const submenu = document.querySelectorAll('.has-child .icon-small');
submenu.forEach((menu) => menu.addEventListener('click', toggle));
function toggle(e){
    e.preventDefault();
    submenu.forEach((item) => item != this ? item.closest('.has-child').classList.remove('expand') : null);
    if(this.closest('.has-child').classList != 'expand');
    this.closest('.has-child').classList.toggle('expand');
}

//slider

const swiper = new Swiper('.swiper', {
    loop: true,
    
    pagination: {
      el: '.swiper-pagination',
    },
  });

  //search
  const searchButton = document.querySelector('.t-search'),
  tclose = document.querySelector('.search-close'),
  showClass = document.querySelector('.site');
  searchButton.addEventListener('click', function() {
    showClass.classList.toggle('showsearch')
  })
  tclose.addEventListener('click', function() {
    showClass.classList.remove('showsearch')
  })

  //show dpt menu
  const dptButton = document.querySelector('.dpt-cat .dpt-trigger'),
  dptClass = document.querySelector('.site');
  dptButton.addEventListener('click', function() {
    dptClass.classList.toggle('showdpt')
  })