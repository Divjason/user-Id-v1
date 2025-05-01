const form = document.getElementById("signupForm");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const userId = document.getElementById("userId").value.trim();
  const password = document.getElementById("password").value.trim();
  const confirmPassword = document
    .getElementById("confirmPassword")
    .value.trim();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();

  if (password !== confirmPassword) {
    alert("비밀번호가 일치하지 않습니다.");
    return;
  }

  const userData = {
    userId,
    password,
    name,
    email,
    phone,
    createdAt: new Date().toISOString(),
  };

  // localStorage 저장
  localStorage.setItem("user_" + userId, JSON.stringify(userData));
  alert(`${userId}님, 회원가입이 완료되었습니다.`);

  // GA4로 user_id 전송
  gtag("config", "G-XXXXXXX", {
    user_id: userId,
  });

  // 폼 초기화
  form.reset();
});
