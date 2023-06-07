window.onscroll = function () {
  if (document.documentElement.scrollTop > 30) {
    document.getElementById("topHeader").classList.add("fix__top");
  } else {
    document.getElementById("topHeader").classList.remove("fix__top");
  }
};

function getAllProduct() {
  let promise = axios({
    url: "https://shop.cyberlearn.vn/api/Product",
    method: "get",
    ResponseType: JSON,
  });
  promise.then(function (res) {
    console.log(res);
    renderProduct(res.data.content);
    console.log(renderProduct(res.data.content));
  });
  promise.catch(function (erro) {
    console.log(erro);
  });
}
getAllProduct();

function renderProduct(arr) {
  let contentHTML = "";
  for (let i = 0; i < arr.length; i++) {
    let productServer = arr[i];

    contentHTML += `
    <div class="product__item">
              <img
                src="${productServer.image}"
                alt=""
              />
              <div class="product__text">
                <div class="product__text_left">
                  <h3>${productServer.name}</h3>
                  <h5>${productServer.price}$</h5>
                </div>
                <div class="product__text__right">
                  <a href="./detail.html?productid=${productServer.id}">
                    <button>Xem Chi Tiết</button>
                  </a>
                </div>
              </div>
            </div>
    `;
  }
  document.getElementById("hienThiKetQua").innerHTML = contentHTML;
}
