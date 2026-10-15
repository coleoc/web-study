const games = ["Dead Cells", "Hollow Knight", "Death's Gambit"];

games.forEach((game, index) => {
    console.log(`${index + 1}. ${game}`);
});

console.log("총", games.length, "개");