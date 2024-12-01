import {adv1, cliExecute, equip, getProperty, toItem, toLocation, visitUrl} from "kolmafia";

export function unlockGuild(): void
{
    cliExecute("guild")
    return;
}

export function getQuest():void
{
    visitUrl( "guild.php?place=scg" ); // Talk to guild member to get welcome message
    visitUrl( "guild.php?place=scg" ); // Get first quest
    return;
}

export function completeFirstQuest():void {
    let adv_used = 0;
    while (getProperty("questG04Nemesis") === "step1" && adv_used < 10) {
        adv_used++; // increment to sanity check/not use all adventures on this part
        adv1(toLocation(21)) // adventure in the unquiet garves
        //Add break condition!
    }
    if (getProperty("questG04Nemesis") === "step2") {
        visitUrl("guild.php?place=scg"); // Get base weapon if you don't have it
        visitUrl("place.php?whichplace=cemetery&action=cem_advtomb"); //adventure at tomb of the unknown etc
    }
    if (getProperty("questG04Nemesis") === "step4") {
        visitUrl("guild.php?place=scg");
    } // Complete quest 1
    return;
}

export function getSecondQuest():void {
    visitUrl("guild.php?place=scg");
    visitUrl("guild.php?place=scg");
}

export function completeSecondQuest():void {
    cliExecute("maximize clownosity");
    equip(toItem("photo booth supply list"));
    // adventure in fun house until you hit beelzebozo
    // start fight with beelzebozo by searching for supplies then beat him up
    return;
}
