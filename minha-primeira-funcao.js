function recursiveLoop(count) {
  if (count <= 0) {
    return;
  }

  console.log('Looping... ' + count);

  recursiveLoop(count - 1);
}

recursiveLoop(5);
