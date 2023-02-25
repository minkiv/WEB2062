import header from "../components/header";
import { useEffect, useState } from "../lib";
import style from "./productsEdit.module.css";
const ProductEditPage = ({ id }) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/products/" + id)
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);
  useEffect(() => {
    const form = document.querySelector("#form-edit");
    const name = document.querySelector("#name");
    const image = document.querySelector("#image");
    const price = document.querySelector("#price");
    const quality = document.querySelector("#quality");
    const desc = document.querySelector("#desc");

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const formData = {
        name: name.value,
        image: image.value,
        price: price.value,
        quality: quality.value,
        desc: desc.value,
      };
      fetch("http://localhost:3000/products/" + id, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then(() => alert("Cập nhật thành công!"))
        .then(() => router.navigate("/products"))
        .catch((error) => console.log(error));
    });
  }, []);
  return `
  ${header()}
  <div class = "${style.grid}">
  <img width = "360px" src = "${products.img}">
  <form id = "form-edit">
  <h6>Form Cập Nhật sản phẩm </h6>
  <div class="form-group">
            <label for="exampleInput">Tên sản phẩm</label>
            <input type="text" class="form-control" id="name" value="${
              products.name
            }" placeholder="Example input placeholder">
        </div>
        <div class="form-group">
            <label for="exampleInput">Hình ảnh</label>
            <input type="text" class="form-control" id="image" value="${
              products.image
            }" placeholder="Example input placeholder">
        </div>
        <div class="form-group">
            <label for="exampleInput">Giá</label>
            <input type="text" class="form-control" id="price" value="${
              products.price
            }" placeholder="Example input placeholder">
        </div>
        <div class="form-group">
            <label for="exampleInput">Số lượng</label>
            <input type="number" class="form-control" id="quality" value="${
              products.quality
            }" placeholder="Example input placeholder">

        </div>
        <div class="form-group">
        <label for="exampleInput">Mô tả</label>
        <textarea name="" id="desc" cols="30" rows="10">${
          products.desc
        }</textarea>
    </div>
        <button class = "btn btn-primary">Sửa</button>
        </form></div>`;
};

export default ProductEditPage;
