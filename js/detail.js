function getAllProduct() {
  let promise = axios({
    url: "https://shop.cyberlearn.vn/api/Product",
    method: "get",
    ResponseType: JSON,
  });
  promise.then(function (res) {
    console.log(res);
    renderProduct(res.data.content);
    // console.log(renderProduct(res.data.content));
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

window.onload = function () {
  const urlParams = new URLSearchParams(window.location.search);
  const myParam = urlParams.get("productid");
  console.log("params", myParam);

  let promise = axios({
    url: `https://shop.cyberlearn.vn/api/Product/getbyid?id=${myParam}`,
    method: "get",
    ResponseType: JSON,
  });
  promise.then(function (res) {
    console.log(res);
    let showProduct = `
    <div class="intro__left">
    <img
      src="${res.data.content.image}"
      alt=""
    />
  </div>
  <div class="intro__right">
    <h3>Product name</h3>
    <p>
      ${res.data.content.name}
    </p>
    <h5 class="size">Size</h5>
    <div class="intro__size">
      <button>36</button>
      <button>37</button>
      <button>38</button>
      <button>39</button>
      <button>40</button>
      <button>41</button>
      <button>42</button>
    </div>
    <h4>${res.data.content.price}$</h4>
    <div class="intro__buy">
      <button><i class="fa-solid fa-plus"></i></button>
      <span>1</span>
      <button><i class="fa-solid fa-minus"></i></button>
    </div>
    <button class="btn_buy">Thêm vào giỏ hàng</button>
    <p id="addThanhCong"></p>
  </div>
</div>`;
    document.querySelector(".intro__content").innerHTML = showProduct;
  });
  promise.catch(function (erro) {
    console.log("SUn", erro);
    //     <div class="intro__left">
    //     <img
    //       src="${res.data.content.image}"
    //       alt=""
    //     />
    //   </div>
    //   <div class="intro__right">
    //     <h3>Product name</h3>
    //     <p>
    //       ${res.data.content.name}
    //     </p>
    //     <h5 class="size">Size</h5>
    //     <div class="intro__size">
    //       <button>36</button>
    //       <button>37</button>
    //       <button>38</button>
    //       <button>39</button>
    //       <button>40</button>
    //       <button>41</button>
    //       <button>42</button>
    //     </div>
    //     <h4>${res.data.content.price}$</h4>
    //     <div class="intro__buy">
    //       <button><i class="fa-solid fa-plus"></i></button>
    //       <span>1</span>
    //       <button><i class="fa-solid fa-minus"></i></button>
    //     </div>
    //     <button class="btn_buy">Thêm vào giỏ hàng</button>
    //     <p id="addThanhCong"></p>
    //   </div>
    // </div>`;
    //     document.querySelector(".intro__content").innerHTML = showErro;
  });
};
