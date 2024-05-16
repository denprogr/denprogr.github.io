const nama = "WARMINX";
let usia = 19 ;

let biodata = document.getElementById('biodata');

function generateBiodata(){
    let golongan;
    if ( usia > 13 && usia < 18) {
        //INI KONDISI PERTAMA
       golongan = 'remaja';
    } 
    
    else if (usia > 5 && usia < 10) {
        //INI KONDISI KEDUA
        golongan = 'bocil';
    }
    
    else if (usia < 25) {
        //INI KONDISI KETIGA
        golongan = 'dewasa';
    }

    else if (usia > 30) {
        //INI KONDISI KEEMPAT
        golongan = 'kolot';
    }

    else{
        //INI KONDISI JIKA TIDAK TERPENUHI
        golongan = 'antah berantah';
    }
    return biodata.innerHTML = golongan;
}

console.log(nama);
console.log(usia);
generateBiodata();