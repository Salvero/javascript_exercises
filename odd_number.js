for (j = 0; j <= 20; j++ ) {

  if((j % 2) === 0){
    continue;
  }

  if(j === 15) {
    break;
  }

  document.write(j + "<br/>");
}

// 1
// 3
// 5
// 7
// 9
// 11
// 13
