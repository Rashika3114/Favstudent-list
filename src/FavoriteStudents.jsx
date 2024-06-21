const FavoriteStudents = ({ favoriteStudents, removeFromFavorites }) => {
  return (
    <ul className="space-y-2 px-10">
      {favoriteStudents.map((student, index) => (
        <li key={index} className="flex items-center space-x-4">
          <span className="flex-grow">{student}</span>
          <button 
            onClick={() => removeFromFavorites(student)} 
            className="px-5 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          >
            Remove
          </button>
        </li>
      ))}
    </ul>
  );
};

export default FavoriteStudents;