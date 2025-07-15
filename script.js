// Scroll smooth
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
  });
});
let paketDipilih = "";

function bukaModal(namaPaket) {
  paketDipilih = namaPaket;
  document.getElementById("modalPaketNama").innerText = namaPaket;
  document.getElementById("modalPaket").style.display = "block";
}

function tutupModal() {
  document.getElementById("modalPaket").style.display = "none";
}

function isiBookingPaket() {
  document.getElementById("paket").value = paketDipilih;
  tutupModal();
}
