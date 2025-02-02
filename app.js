// ฟังก์ชันเปิด modal และแสดงข้อมูล
function openModal() {
  // ดึงค่าจาก input fields
  const salary = document.getElementById('salary').value;
  const allowance = document.getElementById('allowance').value;
  const insurance = document.getElementById('insurance').value;
  const utilities = document.getElementById('utilities').value;

  if (salary === '' || allowance === '' || insurance === '' || utilities === '') {
    alert('กรุณากรอกข้อมูลให้ครบ');
    return
  }
  // คำนวณภาษี (ตัวอย่างการคำนวณง่ายๆ)
  const totalIncome = parseFloat(salary) + parseFloat(allowance);
  const totalDeductions = parseFloat(insurance) + parseFloat(utilities);
  const taxableIncome = totalIncome - totalDeductions - 60000; // ตัวอย่างการหักค่าลดหย่อน 60000 บาท  
  const taxRate = 0.1; // 10%
  const tax = taxableIncome * taxRate;
  const refund = taxableIncome > 50000 ? 5000 : 0; // ตัวอย่างเงื่อนไขเงินคืน

  // ตรวจสอบและปรับค่าติดลบให้เป็น 0
  const displayTax = Math.max(tax, 0); // หาก tax ติดลบ จะแสดงเป็น 0
  const displayRefund = Math.max(refund, 0); // หาก refund ติดลบ จะแสดงเป็น 0

  // แสดงข้อมูลใน modal
  document.getElementById('modalSalary').textContent = salary;
  document.getElementById('modalAllowance').textContent = allowance;
  document.getElementById('modalInsurance').textContent = insurance;
  document.getElementById('modalUtilities').textContent = utilities;
  document.getElementById('modalTax').textContent = displayTax.toFixed(2);
  // document.getElementById('modalRefund').textContent = displayRefund.toFixed(2);

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