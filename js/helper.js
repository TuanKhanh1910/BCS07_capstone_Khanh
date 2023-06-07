// lấy giá trị người dùng

function layGiaTriInput() {
  let valid = true;
  valid =
    regexEmail("email", "kiemTraEmail") &
    regexPass("pass", "kiemTraPass") &
    regexPassConfirm("pass", "passConfirm", "kiemTraPassConfirm") &
    regexName("name", "kiemTraname") &
    regexPhone("phone", "kiemTraPhone") &
    regexGender("male", "female", "kiemTraGender");

  if (!valid) {
    console.log("first");
    return;
  }
}
