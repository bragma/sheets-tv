// Do not remove this import. If you do Vite will think your styles are dead
// code and not include them in the build output.
import "../styles/style.scss";
import SheetsTV from "./app/sheetsTV";
import { moduleId } from "./constants";
import { ISheetsTV } from "./types";

let module: ISheetsTV;

Hooks.once("init", () => {
  console.log(`Initializing ${moduleId}`);
  module = (game as Game).modules.get(moduleId) as ISheetsTV;
  module.sheetsTV = new SheetsTV();
});
