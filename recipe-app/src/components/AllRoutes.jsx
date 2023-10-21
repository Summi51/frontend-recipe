import {Routes, Route} from 'react-router-dom'

import React from 'react'
import RecipeApp from './RecipeApp'
import Favourite from './Favourite'
import PrivateRoute from './PrivateRoute'

const AllRoutes = () => {
  return (
    <div>
      <Routes>
    
        <Route path='/' element={<RecipeApp/>}/>
        <Route path ='/fav' element={<PrivateRoute>
          <Favourite />
        </PrivateRoute>} />
        
      </Routes>
    </div>
  )
}

export default AllRoutes
