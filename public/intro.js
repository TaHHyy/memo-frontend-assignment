// 다크모드 버튼: 누를 때마다 body의 dark 클래스를 켰다 끈다
const btn = document.querySelector("#theme-btn");
btn.addEventListener("click", () => {
  const isDark = document.body.classList.toggle("dark");
  btn.textContent = isDark ? "라이트모드 전환" : "다크모드 전환";
});
