import CartList from '../components/CartList';
import Layout from '../components/Layout';

export default function cart() {
  return (
    <Layout title="Your Cart" subtitle="Items: 0">
      <CartList/>
    </Layout>
  )
}
