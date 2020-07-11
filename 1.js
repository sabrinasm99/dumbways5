const data = [
  ["a", "c", "b", "e", "d"],
  ["g", "e", "f"],
  ["b", "c", "a"]
];
let newData = [];
let hasil = [];

function sortArray(data) {
  for (let i=0; i<data.length; i++) {
    let dataAscii = data[i].map(val => val.charCodeAt());
    let newDataAscii = [];
    while (dataAscii.length) {
      const min = Math.min(...dataAscii);
      const index = dataAscii.indexOf(min);
      dataAscii.splice(index, 1);
      newDataAscii.push(min);
    }
    let arr = newDataAscii.map((val) => String.fromCharCode(val));
    newData.push(arr);
  }
  const hasil = [];
  while(newData.length){
    const min = Math.min(...newData.map(val => val.length))
    const index = newData.findIndex(val => val.length === min)
    hasil.push(newData[index])
    newData.splice(index, 1)
  }
  console.log(hasil)
}
sortArray(data);
