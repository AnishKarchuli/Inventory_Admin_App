import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Inventory from './pages/Inventory'
import RemovedItems from './pages/RemovedItems';
import RemainingItems from './pages/RemainingItems'
import InventoryForm from './pages/InventoryForm'

const App = () => {
  return (
    <div>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to='/inventory'>Inventory</Link>
              </li>
              <li>
                <Link to='/removedItems'>Removed Items</Link>
              </li>
              <li>
                <Link to='/remainingItems'>Remaining Items</Link>
              </li>
              <li>
                <Link to='/'>Add New Items</Link>
              </li>
            </ul>
          </nav>

          <Routes>
            <Route path='/inventory' element={<Inventory />} />
            <Route path='/removedItems' element={<RemovedItems />} />
            <Route path='/remainingItems' element={<RemainingItems />} />
            <Route path='/' element={<InventoryForm />} />
          </Routes>
        </div>
      </Router>
    </div>
  )
}

export default App;