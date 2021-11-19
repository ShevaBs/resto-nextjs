import Layout from "../components/Layout";
import Products from "../components/Products";

export default function dishes() {
  return (
    <Layout>
      <div className="bg-gray-300 text-center h-full py-5">
          <h2 className="text-secondary text-xl font-semibold">Our Dishes</h2>
          <h3 className="text-primary text-3xl font-semibold uppercase">Popular Dishes</h3>
        <div className="container-wrapper">
          <Products />
        </div>
      </div>
    </Layout>
  )
}
