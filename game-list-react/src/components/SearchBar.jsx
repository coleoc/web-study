function SearchBar({ keyword, onKeywordChange }) {
    return (
        <input
            className="search"
            value={keyword}
            onChange={(e) => onKeywordChange(e.target.value)}
            placeholder="게임 이름 검색 (한글/영어)"
        />
    );
}

export default SearchBar;