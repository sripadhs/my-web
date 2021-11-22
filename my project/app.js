function storevisible() {
    var s=document.getElementById("store");
    s.setAttribute('style','display:inline')


}
function loading() {
    var s=document.getElementById("store");
    s.setAttribute('style','display:none')



    var c=document.getElementById("divgame");
    c.setAttribute('style','display:none');

    var setings=document.getElementById("settings");
    setings.setAttribute('style','display:none')

}
function settingsvisible(){
  var setings=document.getElementById("settings");
  setings.setAttribute('style','display:inline')
}
function game(){
  var c=document.getElementById("divgame");
  c.setAttribute('style','display:inline')
}
function gameinvisible(){
  var c=document.getElementById("divgame");
  c.setAttribute('style','display:none');
}
function settingsinvisible(){
  var c=document.getElementById("settings");
  c.setAttribute('style','display:none');
}
function helpcentere(){
  alert("to creating a folder or file click on google drive icon given in navigation bar then upload or create a file or folder")
  alert("you can acceses games and apps in websites.when you using websites it speed up your works")
  alert("using this operating you can work very fast by using a small amount of interenet")
  alert("for business:you can use mailchimp available on apps and for developers you can use codepen or other resources available on google ")
  alert("by using this operating you can get enough storage and internet and full fill your needs by browsing")
}
function storeinvisible() {
    var s=document.getElementById("store");
    s.setAttribute('style','display:none')


}
