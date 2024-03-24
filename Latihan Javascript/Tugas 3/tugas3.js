function dataPerson() {
    let form = document.getElementById("form");
    let nama = form.nama.value;
    let pekerjaan = form.pekerjaan.value;
    let hobi = form.hobi.value;
  
    let input = "Perkenalkan nama saya " + nama + "<br> Pekerjaan: " + pekerjaan + "<br> Hobi: " + hobi;
    let no_input = "Maaf Tolong Isi Semua Data";
    let hasil = (nama && pekerjaan && hobi != '') ? input : no_input;
  
    document.getElementById("hasil").innerHTML = hasil;
}