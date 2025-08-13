function firstWord(s) {
  // your code here
	let isMatch = s.match(/^\S+/);
	return isMatch ? isMatch[0] : '';
}

// Do not change the code below


