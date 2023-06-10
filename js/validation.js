function regexEmail(id, idThongBao) {
  let checkEmail = document.getElementById(id).value;
  if (checkEmail == "") {
    document.getElementById(idThongBao).innerHTML = "Vui lòng nhập đầy đủ";
  } else {
    let mauRegexEmail =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    let mailHopLe = mauRegexEmail.test(checkEmail);
    if (mailHopLe) {
      document.getElementById(idThongBao).innerHTML = "";
    } else {
      document.getElementById(idThongBao).innerHTML =
        "Vui lòng nhập email hợp lệ";
    }
  }
}

function regexPass(id, idThongBao) {
  let checkPass = document.getElementById(id).value;
  if (checkPass == "") {
    document.getElementById(idThongBao).innerHTML = "Vui lòng nhập đầy đủ";
  } else {
    let mauRegexPass = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    let hopLe = mauRegexPass.test(checkPass);
    if (hopLe == true && checkPass.length >= 6) {
      document.getElementById(idThongBao).innerHTML = "";
    } else {
      document.getElementById(idThongBao).innerHTML =
        "Mật khẩu ít nhất 1 ký tự số, 1 ký tự in hoa, 1 ký tự đặc biệt";
    }
  }
}

function regexPassConfirm(idPass, idPassConfirm, idThongBao) {
  let pass = document.getElementById(idPass).value;
  let passConfirm = document.getElementById(idPassConfirm).value;
  if (passConfirm == "") {
    document.getElementById(idThongBao).innerHTML = "Vui lòng nhập trường này";
    return false;
  } else {
    if (passConfirm != pass) {
      document.getElementById(idThongBao).innerHTML = "Mật khẩu không khớp";
      return false;
    } else {
      document.getElementById(idThongBao).innerHTML = "";
      return true;
    }
  }
}
// Check name
function regexName(id, idThongBao) {
  let checkName = document.getElementById(id).value;
  if (checkName == "") {
    document.getElementById(idThongBao).innerHTML = "Vui lòng nhập đầy đủ";
  } else {
    let chiLayChu = /^[\p{L} ]+$/u;
    let nameHopLe = chiLayChu.test(checkName);
    if (nameHopLe) {
      document.getElementById(idThongBao).innerHTML = "";
    } else {
      document.getElementById(idThongBao).innerHTML =
        "Vui lòng nhập tên chỉ chứa ký tự chữ";
    }
  }
}

// Check phone
function regexPhone(id, idThongBao) {
  let checkPhone = document.getElementById(id).value;
  if (checkPhone == "") {
    document.getElementById(idThongBao).innerHTML = "Vui lòng nhập đầy đủ";
  } else {
    let chiLaySo = /[0-9]/g;
    let phoneHopLe = chiLaySo.test(checkPhone);
    if (phoneHopLe) {
      if (checkPhone.length == 10) {
        document.getElementById(idThongBao).innerHTML = "";
      } else {
        document.getElementById(idThongBao).innerHTML =
          "Vui lòng nhập số phone hợp lệ";
      }
    } else {
      document.getElementById(idThongBao).innerHTML =
        "Vui lòng nhập phone chỉ chứa ký tự số";
    }
  }
}

// function regexGender(idMale, idFemale, idThongBao) {
//   let checkMale = document.getElementById(idMale).checked;
//   let checkFemale = document.getElementById(idFemale).checked;
//   console.log(checkMale);
//   console.log(checkFemale);
//   if (checkMale == false && checkFemale == false) {
//     document.getElementById(idThongBao).innerHTML = "Vui lòng chọn giới tính";
//     return false;
//   } else {
//     document.getElementById(idThongBao).innerHTML = "";
//     return true;
//   }
// }

// check gender
//   function regexGender(id, idThongBao) {
//     let checkGender = document.querySelectorAll(id);
//     checkGender.forEach((checkbox) => {
//       checkbox.addEventListener("click", function () {
//         if (this.checked) {
//           checkGender.forEach((otherCheckbox) => {
//             if (otherCheckbox !== this) {
//               otherCheckbox.disabled = true;
//             }
//           });
//         } else {
//           checkGender.forEach((otherCheckbox)) => {

//           }
//         }
//       });
//     });
//     // console.log(checkGender);
//     if (checkGender == true) {
//       document.getElementById(idThongBao).innerHTML = "";
//     } else {
//       document.getElementById(idThongBao).innerHTML = "Vui lòng chọn giới tính";
//     }
//   }
