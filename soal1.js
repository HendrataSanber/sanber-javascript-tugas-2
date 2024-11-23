const prompt = require('prompt-sync')();

const input = prompt('Masukkan angka: ');
const angka = Number(input);

if (angka < 0) {
    console.log("Tidak bisa input bilangan negatif");
}
else if (angka % 2 !== 0) {
    console.log("Tidak bisa input bilangan ganjil");
} 
else {
    const akar = Math.sqrt(angka)
    console.log("Hasilnya adalah "+akar);
}