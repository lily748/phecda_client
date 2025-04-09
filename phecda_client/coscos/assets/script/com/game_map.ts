
import { _decorator } from 'cc';
const { ccclass, property } = _decorator;



@ccclass('GameMap')
export class GameMap {

    public static curGameID = 0

    private static config = {


        "10000010": {
            bundleName: "csfff",
            gameName: "csfff"
        },
    }

    public static getGameDataByID(gameID: number) {
        if (this.config[gameID]) {
            this.curGameID = gameID
            return this.config[gameID]
        } else {
            // console.error("canot fin game by id:", gameID)
            return null
        }
    }

}


