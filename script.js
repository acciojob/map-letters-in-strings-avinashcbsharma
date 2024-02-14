function createIndexObject(word) {
  const indexObject = {};

  for (let i = 0; i < word.length; i++) {
    const letter = Symbol.for(word[i]);

    if (!indexObject[letter]) {
      indexObject[letter] = [];
    }

    indexObject[letter].push(i);
  }

  return indexObject;
}
