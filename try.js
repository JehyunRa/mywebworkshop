function goMain01() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
function goMain02() {
  var elmnt = document.getElementById("main02");
  elmnt.scrollIntoView();
  window.scrollBy(0, -60);
}
function goMain03() {
  var elmnt = document.getElementById("main03");
  elmnt.scrollIntoView();
  window.scrollBy(0, -60);
}