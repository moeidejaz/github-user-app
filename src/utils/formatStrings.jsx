export default function formatStrings(str) {
    if (str.length <= 17) {
      return str;
    } else {
      let string = "";
      for (let i = 0; i <= 16; i++) {
        string += str[i];
      }
      return string + "...";
    }
  }