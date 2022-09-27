var nama = 'Bus Transjakarta';
var tugas = 'beroperasi dengan baik';
var cuti = 'sedang tidak beroperasi'
var lembur = 'sedang lembur'

for(noBus = 1; noBus <= 10; noBus++) {
    if (noBus <= 6) {
        console.log(nama, noBus, tugas);
    } else if (noBus > 6 && noBus <= 10 && noBus !== 8) {
        console.log(nama, noBus, cuti);
    } else {
        console.log(nama, noBus, lembur);
    }
}