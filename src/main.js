import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { render, router } from "./lib";
import HomePage from "./pages/home";
import ProductsPage from "./pages/products";
import ProductAddPage from "./pages/products-add";
import ProductEditPage from "./pages/products-edit";

const app = document.querySelector("#app");

router.on("/", () => render(HomePage, app));
router.on("/products", () => render(ProductsPage, app));
router.on("/products/add", () => render(ProductAddPage, app));
router.on("/products/:id/edit", ({ data }) =>
  render(() => ProductEditPage(data), app)
);
router.notFound(() => console.log("not found page"));
router.resolve();
