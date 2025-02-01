
// ฟังก์ชันเปิด Modal
function openModal() {
  document.getElementById("myModal").style.display = "block";
}

// ฟังก์ชันปิด Modal
function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

// ปิด Modal เมื่อคลิกนอกกล่องเนื้อหา
window.onclick = function (event) {
  let modal = document.getElementById("myModal");
  if (event.target === modal) {
    modal.style.display = "none";
  }
}