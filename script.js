const phone = "6287711401840";

function formatDate(dateString){

const options = {
day:'numeric',
month:'long',
year:'numeric'
};

return new Date(dateString)
.toLocaleDateString('id-ID', options);

}

function sendWA(){

const hotel =
document.getElementById("hotel").value;

const checkin =
document.getElementById("checkin").value;

const checkout =
document.getElementById("checkout").value;

const room =
document.getElementById("room").value;

let request =
document.getElementById("request").value;

if(!checkin || !checkout){

alert("Silakan pilih tanggal.");

return;

}

if(request=="")
request="-";

const text =
`Halo Admin Aksara Global, saya ingin cek ketersediaan hotel berikut:

*Reservation Hotel Makkah*

Nama Hotel : ${hotel}
Check In : ${formatDate(checkin)}
Check Out : ${formatDate(checkout)}
Jumlah Room : ${room}
Request Hotel Lainnya : ${request}

Mohon dibantu cek ketersediaannya.
Terima kasih.`;

const url =
`https://wa.me/${phone}?text=${encodeURIComponent(text)}`;

window.open(url,"_blank");

}