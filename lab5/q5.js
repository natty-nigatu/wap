function reverse(str) {
  if (str == null || str.length == 0) return "";

  return str[str.length - 1] + reverse(str.slice(0, str.length - 1));
}
