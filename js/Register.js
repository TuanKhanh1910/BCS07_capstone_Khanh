function addUser() {
  let valid = true;
  valid =
    regexEmail("email", "kiemTraEmail") &
    regexPass("pass", "kiemTraPass") &
    regexPassConfirm("pass", "passConfirm", "kiemTraPassConfirm") &
    regexName("name", "kiemTraname") &
    regexPhone("phone", "kiemTraPhone");

  if (!valid) {
    console.log(valid);
    // document.getElementById(
    //   "hienThiRegister"
    // ).innerHTML = `<p style="color: red;">Vui lòng điền đầy đủ thông tin</p>`;
    return;
  }
  let infoUser = new User();
  infoUser.email = document.getElementById("email").value;
  infoUser.password = document.getElementById("pass").value;
  infoUser.name = document.getElementById("name").value;
  let Male = document.getElementById("men").checked;
  if (Male) {
    infoUser.gender = true;
  } else {
    infoUser.gender = false;
  }
  infoUser.phone = document.getElementById("phone").value;

  ganGiaTriChoInput("", "", "", "", "", "");

  console.log(infoUser);

  let promise = axios({
    url: `https://shop.cyberlearn.vn/api/Users/signup
    `,
    method: "POST",
    ResponseType: JSON,
    data: infoUser,
  });
  promise.then(function (res) {
    console.log(res);
    let show = `
    <p>${res.data.message}</p>
    `;
    document.getElementById("hienThiRegister").innerHTML = show;
    // document.querySelectorAll("#hienThiRegister p").style.color = "blue";
  });
  promise.catch(function (erro) {
    console.log(erro);
    let show = `
    <p style="color: red;">${erro.response.data.message}</p>
    `;
    document.getElementById("hienThiRegister").innerHTML = show;
    // document.querySelectorAll("#hienThiRegister p").style.color = "red";
  });
}
