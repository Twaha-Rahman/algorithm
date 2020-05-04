function isBadVersion(versionNumber) {
  if (versionNumber >= 4) {
    return true;
  }

  return false;
}

function checker(versions) {
  let low = 1;
  let high = versions;
  let middle;

  while (low < high) {
    middle = (low + high) / 2;

    const isBad = isBadVersion(middle);

    if (isBad) {
      high = middle;
    } else {
      low = middle + 1;
    }
  }

  return parseInt(low);
}

console.log(checker(8));
