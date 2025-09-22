

const Search = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="flex items-center gap-2 ml-10">
      <input
        className="inputbar border border-gray-300 rounded px-4 py-2 w-[500px] h-10 text-black"
        type="text"
        size="80"
        placeholder="Search for template"
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
      />
    </div>
  );
};


export default Search