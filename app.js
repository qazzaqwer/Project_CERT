// ฟังก์ชันเปิด modal และแสดงข้อมูล
function openModal() {
  // ดึงค่าจาก input fields
  const salary = document.getElementById('salary').value;
  const allowance = document.getElementById('allowance').value;
  const insurance = document.getElementById('insurance').value;
  const utilities = document.getElementById('utilities').value;

  // คำนวณภาษี (ตัวอย่างการคำนวณง่ายๆ)
  const totalIncome = parseFloat(salary) + parseFloat(allowance);
  const totalDeductions = parseFloat(insurance) + parseFloat(utilities);
  const taxableIncome = totalIncome - totalDeductions;
  const taxRate = 0.1; // 10%
  const tax = taxableIncome * taxRate;
  const refund = totalDeductions > 50000 ? 5000 : 0; // ตัวอย่างเงื่อนไขเงินคืน

  // แสดงข้อมูลใน modal
  document.getElementById('modalSalary').textContent = salary;
  document.getElementById('modalAllowance').textContent = allowance;
  document.getElementById('modalInsurance').textContent = insurance;
  document.getElementById('modalUtilities').textContent = utilities;
  document.getElementById('modalTax').textContent = tax.toFixed(2);
  document.getElementById('modalRefund').textContent = refund.toFixed(2);

  // แสดง modal
  document.getElementById('myModal').style.display = 'block';
}

// ฟังก์ชันปิด modal
function closeModal() {
  document.getElementById('myModal').style.display = 'none';
}

// ปิด modal เมื่อคลิกที่พื้นหลัง
window.onclick = function (event) {
  const modal = document.getElementById('myModal');
  if (event.target === modal) {
    modal.style.display = 'none';
  }
};