window.onload = function () {
  // 상단의 마이페이지 리스트
  const click = document.querySelector(".click");
  const submenu = document.querySelector(".mypage-list");
  click.onclick = function () {
    submenu.classList.toggle("showlist");
  };
};
