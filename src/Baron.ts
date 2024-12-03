import { cliExecute, equip, toItem } from "kolmafia";

export function find_baron():void{
    cliExecute("baron");
    return;
}

export function fight_baron():void {
    equip(toItem("photo booth supply list"))
    return;
}
