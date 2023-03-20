import { ModuleData } from "@league-of-foundry-developers/foundry-vtt-types/src/foundry/common/packages.mjs";
import SheetsTV from "./app/sheetsTV";

export interface ISheetsTV extends Game.ModuleData<ModuleData> {
	sheetsTV: SheetsTV
}
