
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import StudentList from './StudentList';
import FavoriteStudents from './FavoriteStudents';


const App = () => {

  const [students] = useState(["Apple", "Orange", "Banana", "Graps", "Mango", "Jackfruit", "Papaya"]);

  const [favoriteStudents, setFavoriteStudents] = useState([]);
  const handleAddToFavorites = (student) => {
    if (!favoriteStudents.includes(student)) {
      setFavoriteStudents([...favoriteStudents, student]);
    }
  };


  const removeFromFavorites = (student) => {
    setFavoriteStudents(favoriteStudents.filter(favStudent => favStudent !== student));
  };

  return (

    <BrowserRouter>
      <div className='bg-pink-500 text-4xl text-center p-5'>
        <h1>Student List</h1>
        <div className='flex justify-around '>
          <div>
            <Link to="/" className='underline text-3xl'>Student</Link>
          </div>
          <div>
            <Link to="/favorites" className='underline text-3xl'>Favorite</Link>
          </div>
        </div>

      </div>

      <Routes>
        <Route
          path="/"
          element={
            <div className="p-10">
              <h1 className="p-3 text-4xl text-center text-green-900">Students List</h1>
              <StudentList students={students} favoriteStudents={favoriteStudents} addToFavorites={handleAddToFavorites} />

            </div>
          }
        />
        <Route
          path="/favorites"
          element={
            <div className="p-10">
              <h2 className="p-3 text-4xl text-center  text-green-900">Favorite Students</h2>
              <FavoriteStudents favoriteStudents={favoriteStudents} removeFromFavorites={removeFromFavorites} />
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};




export default App;