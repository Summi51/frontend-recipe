import { Route, Routes } from "react-router-dom";

import React from "react";
import Favourite from "./Favourite";
import PrivateRoute from "./PrivateRoute";
import RecipeApp from "./RecipeApp";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<RecipeApp />} />
        <Route
          path="/fav"
          element={
            <PrivateRoute>
              <Favourite />
            </PrivateRoute>
          }
        />
      </Routes>
    </div>
  );
};

export default AllRoutes;
