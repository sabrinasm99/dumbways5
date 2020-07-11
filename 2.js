let jumlahIkan = 1476;
let jumlahIkanMati;
let jumlahIkanMelahirkan;
const n = 471;
const kelipatan = 46;
const looping = parseInt(n/kelipatan);
for (let i=0; i<looping; i++) {
  jumlahIkanMati = Math.ceil(0.06 * jumlahIkan);
  jumlahIkanMelahirkan = jumlahIkan - jumlahIkanMati;
  jumlahIkan = jumlahIkanMelahirkan * 5
}
console.log(jumlahIkan)