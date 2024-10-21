const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');
const menuIcon = menuToggle.querySelector('i');

menuToggle.addEventListener('click', () => {
  const isActive = navMenu.classList.toggle('active');

  // เปลี่ยนไอคอนจาก hamburger เป็น X
  if (isActive) {
    menuIcon.classList.remove('fa-bars');
    menuIcon.classList.add('fa-times');
  } else {
    menuIcon.classList.remove('fa-times');
    menuIcon.classList.add('fa-bars');
  }
});

function switchlg(lang) {
    const thItems = document.querySelectorAll('.TH');
    const enItems = document.querySelectorAll('.EN');
  
    if (lang === 1) {
      // แสดงเมนูภาษาไทย ซ่อนภาษาอังกฤษ
      thItems.forEach(item => item.style.display = 'block');
      enItems.forEach(item => item.style.display = 'none');
    } else if (lang === 2) {
      // แสดงเมนูภาษาอังกฤษ ซ่อนภาษาไทย
      thItems.forEach(item => item.style.display = 'none');
      enItems.forEach(item => item.style.display = 'block');
    }
  }
