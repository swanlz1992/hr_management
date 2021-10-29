var menuList = document.querySelectorAll('.m-menu__title')
var footerBtn = document.querySelector('.u-footer')
var sideBar = document.querySelector('.g-hr__sider')
var menuBars = document.querySelectorAll('.m-menu')
var arrowAll = document.querySelectorAll('.arrow')
var slidePart = document.querySelector('.u-hr__slidePart')
var slideBtn = document.querySelector('.u-hr__slidePart__btn')
var mask = document.querySelector('.u-mask')
var themes = document.querySelectorAll('.u-hr__slidePart__color li')
var slideSwitch = document.querySelectorAll('.u-hr__slidePart__switch')
var headControl = document.querySelector('.head__control')
var head = document.querySelector('.g-hr__main__title')
var sideControl = document.querySelector('.side__control')
var side = document.querySelector('.g-hr__wrap')
var headShow = document.querySelector('.head__show')
var sideShow = document.querySelector('.side__show')
// 左侧菜单切换
for (var i = 0; i < menuList.length; i++) {
  menuList[i].onclick = function () {
    var menu = this.parentElement;
    menu.classList.toggle('m-menu-selected')
    var arrow = this.querySelector('.arrow')
    if (menu.className.includes('m-menu-selected')) {
      arrow.innerHTML = '&#xe743'
    } else {
      arrow.innerHTML = '&#xe7b2'
    }
  }
}
// 点击左侧菜单收放
footerBtn.onclick = function () {
  sideBar.classList.toggle('g-hr__sider--closed')
  // 恢复到原始状态

  for (var i = 0; i < menuBars.length; i++) {
    menuBars[i].classList.remove('m-menu-selected')
    arrowAll[i].innerHTML = '&#xe7b2'
  }
  menuBars[0].classList.add('m-menu-selected')
  arrowAll[0].innerHTML = '&#xe743'


}
// 改变主题色
slideBtn.onclick = function () {
  slidePart.classList.toggle('u-hr__slidePart--show')
}

for (var i = 0; i < themes.length; i++) {
  themes[i].onclick = function () {
    for (var i = 0; i < themes.length; i++) {
      themes[i].innerHTML = ''
    }
    this.innerHTML = '&#xe600;'
    // 获取当前元素的背景颜色
    var color = getComputedStyle(this).backgroundColor;
    // 更改根元素的属性值
    document.documentElement.style.setProperty('--theme', color)
  }
}
for (var i = 0; i < slideSwitch.length; i++) {
  slideSwitch[i].addEventListener('click', function () {
    this.classList.toggle('u-hr__slidePart__switch--open')
  })
}
headControl.onclick = function(){
  head.classList.toggle('g-hr__main__title--fixed')
}
sideControl.onclick = function(){
  side.classList.toggle('g-hr__wrap--fixed')
}
headShow.onclick = function(){
  head.classList.toggle('hide')
}
sideShow.onclick = function(){
  sideBar.classList.toggle('hide')
}
