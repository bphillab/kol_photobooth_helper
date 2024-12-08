import { cliExecute, equip, getProperty, setProperty, toItem, visitUrl } from "kolmafia";

export function find_baron():void{
    cliExecute("baron");
    return;
}

export function fight_baron():void {
    const baron_location = 1 + getProperty("tavernLayout").indexOf("6");
    equip(toItem("photo booth supply list"))
    visitUrl( `cellar.php?action=explore&whichspot=${baron_location}` );
    setProperty("choiceAdventure511","0");
    return;
}
