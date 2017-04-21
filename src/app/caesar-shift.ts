export class CaesarShift {
    shift(text, totalShift) {
        if (totalShift < 0){
          return this.shift(text, totalShift + 26);
        }
        var result = '';
        for (var x = 0; x < text.length; x++) {
          var char = text[x];
          if (char.match(/[a-z]/i)) {
            var value = text.charCodeAt(x);
            if ((value >= 65) && (value <= 90)){
              char = String.fromCharCode(((value - 65 + totalShift) % 26) + 65);
            }
            else if ((value >= 97) && (value <= 122)){
              char = String.fromCharCode(((value - 97 + totalShift) % 26) + 97);
            }
          }
          result += char;
        }
        return result;
      }
}
