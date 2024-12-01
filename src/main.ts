import { fight_baron, find_baron } from "./Baron";
import { completeFirstQuest, completeSecondQuest, getQuest, unlockGuild } from "./Guild";
import { getPhotoBoothSupplyList } from "./photobooth";

export function main(): void {
  getPhotoBoothSupplyList()
  find_baron()
  fight_baron()
  unlockGuild()
  getQuest()
  completeFirstQuest()
  getQuest()
  completeSecondQuest()
}
