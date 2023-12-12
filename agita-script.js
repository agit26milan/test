//1. Buatlah fungsi dengan parameter berapa banyak angka yg akan ditampilkan secara looping, dimana jika angka tersebut habis dibagi 3 cetak "fish" jika habis dibagi 5 cetak "bash" dan jika habis dibagi 15 cetak "fish bash", cetak cukup salah satu dari kondisi tersebut, cetak menggunakan console log atau sejenisnya.
function fishBash(arr = []) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 3 === 0) {
      console.log("fish");
    }
    if (arr[i] % 5 === 0) {
      console.log("bash");
    }
    if (arr[i] % 15 === 0) {
      console.log("fish bash");
    }
  }
}

//2. Buatlah fungsi dengan input array integer untuk mengurutkan angka dari kecil kebesar dan besar kekecil dengan manual tanpa fungsi bawaan javascript,

function sort(arr = [], type = "asc") {
  var input = arr;
  var output = [];
  for (var i = 0, ii = input.length; i < ii; i++) {
    let isInserted = false;
    for (var j = 0, jj = output.length; j < jj; j++) {
      if (type === "asc") {
        if (input[i] < output[j]) {
          isInserted = true;
          output.splice(j, 0, input[i]);
          break;
        }
      } else {
        if (input[i] > output[j]) {
          isInserted = true;
          output.splice(j, 0, input[i]);
          break;
        }
      }
    }

    if (!isInserted) output.push(input[i]);
  }
  return output;
}

//3. Buatlah fungsi dengan input string jika string tersebut dibalik dan tetap sama dengan string yang diinputkan maka return true jika tidak return false

function reverseString(string = "") {
  const reverseWord = string.split("").reverse().join("");
  if (reverseWord === string) return true;
  return false;
}
fishBash([1, 2, 3, 4, 5, 6]);
console.log(sort([3, 1, 2, 5, 4, 10, 7], "dsc"));

console.log(reverseString("aya"));
