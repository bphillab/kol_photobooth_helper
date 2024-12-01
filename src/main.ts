import { myMp, print } from "kolmafia";

export function checkMP(): string {
  if (myMp() < 200) {
    return "Your MP is less than 200.";
  } else {
    return "Your MP is greater than or equal to 200.";
  }
}

export function main(): void {
  print(checkMP());

  // Step 1: Get photobooth supply list
  // Step 2: Find baron
  // Step 3: Fight baron, first check for photobooth supplies then autokill
  // Step 4: Find Beelzebozo
  //  Unlock Guild?
  //  Start first quest
  //  Finish first quest
  //  Start second quest
  //  Reach Beelzebozo
  //  Fight Beelzebozo, first check for photobooth supplies then autokill
}
