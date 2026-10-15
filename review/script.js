let games = [];

let keyword = "";
let sortType = "recommended";
let dataStatus = "loading";
const gamesDatajson = "games.json";

const renderGames = (list) => {

    const gameList = document.querySelector(".game-list");
    if (dataStatus === "loading") {
        gameList.innerHTML = "<p>불러오는 중...</p>";
    }
    else if (dataStatus === "error") {
        gameList.innerHTML = "<p>게임 목록을 불러오지 못했습니다.</p>";
    }
    else if (list.length === 0) {
        gameList.innerHTML = "<p>검색 결과가 없습니다.</p>";
    }
    else {
        gameList.innerHTML = list.map(({ title, year, image, description, url }) => `
            <div class="game">
            <img src="${image}" alt="${title}">
            <h3>${title}</h3>
            <p class="year">${year}</p>
            <button class="toggle-btn">설명 열기</button>
            <p class="description">${description}</p>
            <a href="${url}" target="_blank">게임 사이트로 이동</a>
            </div>`).join("");

        const cards = document.querySelectorAll(".game");

        cards.forEach((card) => {
            const button = card.querySelector(".toggle-btn");   // 이 카드 안의 버튼

            button.addEventListener("click", () => {             // 버튼에만 이벤트
                card.classList.toggle("open");
                const isOpen = card.classList.contains("open");
                button.textContent = isOpen ? "설명 닫기" : "설명 열기";
            });
        });
    }
};

const loadGames = async () => {
    try {
        const response = await fetch(gamesDatajson);
        if (!response.ok) {
            throw new Error("games.json 응답 실패: " + response.status);
        }
        const data = await response.json();
        games = data;
        dataStatus = "success";
    } catch (error) {
        dataStatus = "error";
        console.error(error);
    }
    update();
};

const update = () => {
    // 1. 검색: 원본에서 출발 (검색어가 ""면 includes("")는 항상 true라서 전부 남아요)
    let list = games.filter((game) =>
        game.title.toLowerCase().includes(keyword) ||
        game.titleKo.toLowerCase().includes(keyword)
    );

    // 2. 정렬: 거른 결과를 복사해서 정렬
    if (sortType === "nameAsc") {
        list = [...list].sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortType === "yearDesc") {
        list = [...list].sort((a, b) => b.year - a.year);
    }
    // recommended는 아무것도 안 함 → filter 결과가 원래 순서 그대로

    // 3. 그리기
    renderGames(list);
};

document.querySelectorAll(".sort-btn").forEach((button) => {
    button.addEventListener("click", () => {
        sortType = button.dataset.sort;
        update();
    });
});


document.querySelector("#search").addEventListener("input", (e) => {
    keyword = e.target.value.toLowerCase();
    update();
});

update();
loadGames();