import { runChoice, visitUrl } from "kolmafia";

export function getPhotoBoothSupplyList():void {
  visitUrl("clan_viplounge.php?action=photobooth");
  runChoice(2);
  runChoice(1);
}
