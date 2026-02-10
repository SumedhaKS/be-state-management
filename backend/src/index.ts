import { games } from "./store";
import { startLogger } from "./logger";

startLogger();

setInterval(() => {
    games.push({
        id: Math.random().toString(),
        whitePlayer: 'whity',
        blackPlayer: 'blacky',
        moves: [],
    })
}, 5000)
