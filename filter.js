function filter() {
  let Filtervalue;
  let input;
  let ul;
  let li;
  let i;
  input = document.getElementById("search");
  Filtervalue = input.value.toUpperCase();
  ul = document.getElementById("menu");
  li = ul.getElementsByTagName("li");

  for (i = 0; i < li.length; i++) {
    let a = li[i].getElementsByTagName("a")[0];
    if (a.innerHTML.toLocaleUpperCase().indexOf(Filtervalue) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}
