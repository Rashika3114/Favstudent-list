

const StudentList = ({ students, favoriteStudents, addToFavorites }) => {


    const handleAddToFavorites = (student) => {
      if (!favoriteStudents.includes(student)) {
       
        addToFavorites(student);
      }
    };
  
    return (
      <ul className="space-y-2 px-10 xs:mr-0 xs:ml-0 sm:mr-96 sm:ml-96 md:mr-0 md:ml-0">
        {students.map((student, index) => (
          <li key={index} className="flex items-center space-x-4">
            <span className="flex-grow">{student}</span>
            <button 
              onClick={() => handleAddToFavorites(student)}
              className="px-5 py-2 bg-blue-500 text-white rounded hover:bg-orange-600 disabled:bg-gray-400"
              disabled={favoriteStudents.includes(student)}
            >
              {favoriteStudents.includes(student) ? 'Added to Favorites' : 'Add to Favorite'}
            </button>
          </li>
        ))}
      </ul>
    );
  };
  
  export default StudentList;

