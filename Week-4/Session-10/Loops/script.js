function drawTriangle(triangleSize) {
  for (let i = 1; i <= triangleSize; i++) {
    let asteriskLine = ""; // String to store the asterisk line

    for (let j = 1; j <= i; j++) {
      asteriskLine += "*";
    }

    console.log(asteriskLine);
  }
}
