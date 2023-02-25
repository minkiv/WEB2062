import header from "../components/header";
import { router, useEffect, useState } from "../lib";
import style from "./product-add.module.css";
const ProductAddPage = () => {
  // const [products, setProducts] = useState([]);
  useEffect(() => {
    const form = document.querySelector("#form-add");
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
      fetch("http://localhost:3000/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })
        .then(() => alert("Thêm thành công"))
        .then(() => router.navigate("/products"));
    });
  });
  return `${header()}
  <h1>Thêm Sản Phẩm</h1>
<form id = "form-add" class= "${style.add}">
  <div class="form-group">
            <label for="exampleInput">Tên sản phẩm</label>
            <input type="text" class="form-control" id="name">
        </div>
        <div class="form-group">
            <label for="exampleInput">Hình ảnh</label>
            <input type="file" class="form-control" id="image">
        </div>
        <div class="form-group">
            <label for="exampleInput">Giá sản phẩm</label>
            <input type="text" class="form-control" id="price">
        </div>
        <div class="form-group">
            <label for="exampleInput">Số lượng sản phẩm</label>
            <input type="number" class="form-control" id="quality">
        </div>
        <div class="form-group">
            <label for="exampleInput">Mô tả</label>
            <textarea name="" id="desc" cols="30" rows="10"></textarea>
        </div>
        <button class = "btn btn-primary">Thêm</button>
        </form>
  `;
};

export default ProductAddPage;
