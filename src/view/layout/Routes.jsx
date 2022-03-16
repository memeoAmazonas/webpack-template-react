import React from 'react';
import { Route, Routes as Rou, Navigate } from 'react-router-dom';
import { Login, Home, Query } from 'Views';

function Routes() {
  return (
    <Rou>
      <Route
        path="/"
        element={<Login />}
      />
      <Route
        path="/home"
        element={<Home />}
      />
      <Route
        path="/query"
        element={<Query />}
      />
      <Route path="*" element={<Navigate to="/" />} />
    </Rou>
  );
}

export default Routes;
