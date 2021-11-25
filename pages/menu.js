import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux'
import Layout from '../components/Layout'
import Products from '../components/Products';
import { initMenu } from '../features/menuSlice';

export const getStaticProps = async () => {
  const res = await fetch(`https://api.spoonacular.com/food/menuItems/search?apiKey=${process.env.API_KEY}&query=all&number=20`);
  const data = await res.json();
  return {
    props: {
      products: data
    }
  }
}

export default function menu({products}) {
  const dispatch = useDispatch();
  const menu = useSelector(state => state.menu.menu);

  useEffect(() => {

    const menuProducts = products.menuItems.map(item => ({
      ...item,
      price: (Math.random() * (30 - 10) + 10).toFixed(2),
      rating: Math.floor(Math.random() * (6 - 3) + 3)
    }))

    dispatch(initMenu(menuProducts));
  }, [products])

  return (
    <Layout title="Our Menu" subtitle="Today's Speciality">
      <Products items={menu}/>
    </Layout>
  )
}
