// const nav = document.querySelectorAll(".nav-link");
// nav.forEach((e) => {
//   e.addEventListener("click", () => {
//     // Hapus kelas 'active' dari semua elemen
//     nav.forEach((item) => item.classList.remove("active"));

//     // Tambahkan kelas 'active' ke elemen yang diklik
//     e.classList.add("active");
//   });
// });

document.addEventListener("DOMContentLoaded", function () {
  const dropdownSubmenus = document.querySelectorAll(".dropdown-submenu");

  dropdownSubmenus.forEach(function (submenu) {
    submenu.addEventListener("mouseenter", function () {
      const dropdown = this.querySelector(".dropdown-menu");
      dropdown.classList.add("show");
    });

    console.log({ submenu });

    submenu.addEventListener("mouseleave", function () {
      const dropdown = this.querySelector(".dropdown-menu");
      dropdown.classList.remove("show");
    });
  });
});
