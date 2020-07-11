let hasil = '';
function cetak_gambar(param) {
    for (let i=0; i<param; i++) {
        if (i%2 === 0) {
            for (let j=0; j<param; j++) {
                if (j%2 === 0) {
                    hasil += '=' + ' ' + ' ';
                } else {
                    hasil += '*' + ' ' + ' ';
                }
                if (j === param-1) {
                    hasil += '\n';
                }
            }
        } else {
            for (let k=0; k<param; k++) {
                if (k%2 === 0) {
                    hasil += '*' + ' ' + ' ';
                } else {
                    hasil += '=' + ' ' + ' ';
                }
                if (k === param-1) {
                    hasil += '\n';
                }
            }
        }
    }
    console.log(hasil);
}
cetak_gambar(5);