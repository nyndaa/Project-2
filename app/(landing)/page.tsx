import HeroSection from "./components/home/hero";
import CategoriesSection from "./components/home/categories";
import ProductsSection from "./components/home/products";
import { getAllCategories } from "../services/category.service";
import { getAllProducts } from "../services/product.service";

export default async function Home() {
  const categories = await getAllCategories();

  return (
    <main>
      <HeroSection />
      <CategoriesSection categories={categories} />
      <h1>Hello World</h1>
    </main>
  );
}