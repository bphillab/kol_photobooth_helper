import { availableAmount, print, runChoice, toItem, visitUrl } from "kolmafia";

export function hasItem(itemName: string): boolean {
  const item = toItem(itemName); // Converts the name to an item object
  return availableAmount(item) > 0; // Returns true if you have at least one
}

export function getPhotoBoothSupplyList():void {
  if (hasItem("photo booth supply")) {
      print("You already have the photo booth supply.");
  }
  else {
    visitUrl("clan_viplounge.php?action=photobooth");
    runChoice(2);
    runChoice(1);
  }
}
