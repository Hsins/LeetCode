const isIsomorphic = function (s, t) {
  const charToIndex_s = {};
  const charToIndex_t = {};

  for (let i = 0; i < s.length; ++i) {
    if (charToIndex_s[s[i]] != charToIndex_t[t[i]]) {
      return false;
    }

    charToIndex_s[s[i]] = i;
    charToIndex_t[t[i]] = i;
  }

  return true;
};
