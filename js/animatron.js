window.onscroll = () => {
  const row_1 = document.getElementById('row-1');
  const button = document.getElementById('menu-button');
  if (distanceBetweenElems(row_1,button)<1040.70){
    button.innerHTML= "<span aria-hidden=true></span>";
    button.classList.add("curve_the_button");
    
}
else{
  button.innerHTML = "MENU <span aria-hidden=true></span>";
  button.classList.remove("curve_the_button");
}
};

function distanceBetweenElems(elem1, elem2) {
  var e1Rect = elem1.getBoundingClientRect();
  var e2Rect = elem2.getBoundingClientRect();
  var dx = (e1Rect.left+(e1Rect.right-e1Rect.left)/2) - (e2Rect.left+(e2Rect.right-e2Rect.left)/2);
  var dy = (e1Rect.top+(e1Rect.bottom-e1Rect.top)/2) - (e2Rect.top+(e2Rect.bottom-e2Rect.top)/2);
  var dist = Math.sqrt(dx * dx + dy * dy);
  return dist;
}