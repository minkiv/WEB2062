import style from "./header.module.css";
const header = () => {
  return `<div class = "${style.grid}"><h4>Admin</h4>
  <ul>
    <li><a href="/">Trang chủ</a></li>
    <li><a href="/products">Sản Phẩm</a></li>
    <li><a href="/products/add">Thêm Sản Phẩm</a></li>
  </ul>
  
  </div>`;
};

export default header;
