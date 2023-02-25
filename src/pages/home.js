import header from "../components/header";
import { useEffect, useState } from "../lib";

const HomePage = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);
  return `
  ${header()}
   <h1>Danh sách sản phẩm</h1>
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
          <td>${product.image}</td>
          <td>${product.price}</td>
          <td>${product.quality}</td>
          <td>${product.desc}</td>
          <td><button data-id = "${product.id}" class = "btn btn-remove btn-danger">Xóa</button>
          <a href = "/products/${product.id}/edit"><button class = "btn btn-primary">Sửa</button></a></td>
        </tr>

      `
      )}
        
      </tbody>
    </table>
  `;
};

export default HomePage;
