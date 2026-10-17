"use client";

import type { SortType } from "../types";

type SortButtonsProps = {
    sortType: SortType;
    onSortChange: (value: SortType) => void;
};

function SortButtons({ sortType, onSortChange }: SortButtonsProps) {
    return (
        <div className="sort-buttons">
            <button
                className={sortType === "recommended" ? "sort-btn active" : "sort-btn"}
                onClick={() => onSortChange("recommended")}
            >
                추천순
            </button>

            <button
                className={sortType === "nameAsc" ? "sort-btn active" : "sort-btn"}
                onClick={() => onSortChange("nameAsc")}
            >
                이름순
            </button>

            <button
                className={sortType === "yearDesc" ? "sort-btn active" : "sort-btn"}
                onClick={() => onSortChange("yearDesc")}
            >
                최신순
            </button>
        </div>
    );
}

export default SortButtons;