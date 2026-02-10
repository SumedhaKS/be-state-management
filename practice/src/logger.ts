// import { gameManager } from "./store";

import { GameManager } from "./store";      

const gameManager = GameManager.getInstance();       //gets the same instance

export function startLogger(){
    setInterval(()=>{
        gameManager.log();
    }, 5000)
}
