function addUser() {
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
  });
  promise.catch(function (erro) {
    console.log(erro);
  });
}
