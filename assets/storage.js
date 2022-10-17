// input data dari form Saran Review Buku ke localStorage
const form = document.querySelector("form");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const judul = document.querySelector("#judulBuku").value;
  const penulis = document.querySelector("#penulis").value;
  const data = {
    judul,
    penulis,
  };
  let buku = [];
  if (localStorage.getItem("buku") === null) {
    buku = [];
  } else {
    buku = JSON.parse(localStorage.getItem("buku"));
  }
  buku.push(data);
  localStorage.setItem("buku", JSON.stringify(buku));
  alert("Terima kasih atas saran dan review bukunya!");
  form.reset();
  // refresh page saat klik alert
  window.location.reload();
});
// menampilkan data dari localStorage ke tabel
const buku = JSON.parse(localStorage.getItem("buku"));
const listBuku = document.querySelector("#listBuku");
buku.forEach(function (buku) {
  const row = document.createElement("tr");
  row.innerHTML = `
    <td>${buku.judul}</td>
    <td>${buku.penulis}</td>
  `;
  listBuku.appendChild(row);
});
