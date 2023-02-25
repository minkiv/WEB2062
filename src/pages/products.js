import header from "../components/header";
import { useEffect, useState } from "../lib";

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);
  useEffect(() => {
    const btns = document.querySelectorAll(".btn-remove");
    for (let btn of btns) {
      btn.addEventListener("click", function () {
        const id = this.dataset.id;
        const newProducts = products.filter((product) => product.id != id);
        setProducts(newProducts);
        fetch(`http://localhost:3000/products/${id}`, {
          method: "DELETE",
        }).then(() => alert("Xóa thành công!"));
      });
    }
  });
  return `${header()}
  <h1>Products Page</h1>
  <table class="table table-light">
  <thead>
    <tr>
    <td>ID</td>
    <td>Tên sản phẩm</td>
    <td>Hình ảnh</td>
    <td>Giá</td>
    <td>Số Lượng</td>
    <td>Mô tả</td>
    <td>Hành Động</td>
    </tr>
  </thead>
  <tbody>
  ${products.map(
    (product) => `
  <tr>
  <td>${product.id}</td>
  <td>${product.name}</td>
  <td><img src="${product.image}" alt=""></td>
  <td>${product.price}</td>
  <td>${product.quality}</td>
  <td>${product.desc}</td>
      <td><button data-id = "${product.id}" class = "btn btn-remove btn-danger">Xóa</button>
      <a href = "/products/${product.id}/edit"><button class = "btn btn-primary">Sửa</button></a>
      </td>
    </tr>
  </tbody>
  `
  )}
    `;
};

export default ProductsPage;
