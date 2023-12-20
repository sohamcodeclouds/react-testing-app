import Counter from './Counter'
import Comments from './Comments'
import Item from './components/Item'
import Cart from './components/Cart'
function App() {
  return (
    <>
      <Counter />
      <Comments />
      <Item name='iphone-15' price={40000} />
      <Item name='Macbook Air' price={100500} />
      <Item name='SSD' price={4400} />
      <Cart />
    </>
  )
}

export default App
