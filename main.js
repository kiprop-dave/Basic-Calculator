function printDetails() {
  for (let i = 0; i < 5; i++) {
    document.getElementsByClassName("item1")[0].innerHTML =
      document.getElementsByClassName("item2")[0].value;
  }
}
