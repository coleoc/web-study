"use client";

type SearchBarProps = {
    keyword: string;
    onKeywordChange: (value: string) => void;
};

function SearchBar({ keyword, onKeywordChange }: SearchBarProps) {
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