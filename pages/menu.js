import { useSelector } from 'react-redux'
import Layout from '../components/Layout'
import Products from '../components/Products';

export default function menu() {
  const menu = useSelector(state => state.menu);

  return (
    <Layout title="Our Menu" subtitle="Today's Speciality">
      <Products items={menu}/>
    </Layout>
  )
}
