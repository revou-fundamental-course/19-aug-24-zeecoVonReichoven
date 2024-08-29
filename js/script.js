//opening speech
const userName = document.querySelector('#user-name');
const nameFill = prompt("Please insert your name");
userName.innerHTML = nameFill;

//slide hero

var slideIndex = 0;
showDivs();

function showDivs() {
  var i;
  const x = document.querySelectorAll(".hero");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1} 
  x[slideIndex-1].style.display = "block";  
  setTimeout(showDivs, 2000); // Change image every 2 seconds
}

//Auto

function plusDivs(n) {
  showDiv(slideIndex += n);
}

function showDiv(n) {
  var i;
  const x = document.querySelectorAll(".hero");  if (n > x.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}

//Validasi

// document.addEventListener("DOMContentLoaded", function() {
//     const tombol = document.getElementById("tombol");
//     tombol.addEventListener("click", function() {
//       const nNama = document.getElementById("nama").value;
//       const nBulan = document.getElementById("bulan").value;
//       const nHari = document.getElementById("hari").value;
//       const nTahun = document.getElementById("tahun").value;
//       const nLaki = document.getElementById("gender-l").value;
//       const nPerempuan = document.getElementById("gender-p").value;
//       const nPesan = document.getElementById("pesan").value;
//       console.log(nNama);
//       console.log(nBulan);
//       console.log(nHari);
//       console.log(nTahun);
//       console.log(nLaki);
//       console.log(nPerempuan);
//       console.log(nPesan);
//     });
//   });
// //
  document.addEventListener("DOMContentLoaded", function() {
    const tombol = document.getElementById("tombol");
    tombol.addEventListener("click", function() {
      const nNama = document.getElementById("nama").value;
      const nBulan = document.getElementById("bulan").value;
      const nHari = document.getElementById("hari").value;
      const nTahun = document.getElementById("tahun").value;
      const nLaki = document.getElementById("gender-l").checked;
      const nPerempuan = document.getElementById("gender-p").checked;
      const nPesan = document.getElementById("pesan").value;
  
      const container = document.getElementById("hasil-form");
  
      const hasilNama = document.createElement("div");
      hasilNama.className = "hasil-nama";
      hasilNama.textContent = `Nama: ${nNama}`;
      container.appendChild(hasilNama);
  
      const hasilLahir = document.createElement("div");
      hasilLahir.className = "hasil-lahir";
      hasilLahir.textContent = `Tanggal Lahir: ${nBulan}/${nHari}/${nTahun}`;
      container.appendChild(hasilLahir);
  
      const hasilGender = document.createElement("div");
      hasilGender.className = "hasil-gender";
      if (nLaki) {
        hasilGender.textContent = `Jenis Kelamin: Laki-laki`;
      } else {
        hasilGender.textContent = `Jenis Kelamin: Perempuan`;
      }
      container.appendChild(hasilGender);
  
      const hasilPesan = document.createElement("div");
      hasilPesan.className = "hasil-pesan";
      hasilPesan.textContent = `Pesan: ${nPesan}`;
      container.appendChild(hasilPesan);
      container.style.display = "block";
    });
  });