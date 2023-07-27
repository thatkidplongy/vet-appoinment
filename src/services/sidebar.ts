import { tabs } from "@/definitions/tabs";
import { veterinaries } from "@/definitions/veterinaries";
import { TabsModel } from "@/interface/tabs";
import { VetsModel } from "@/interface/vets";

export function getVets() {
  return JSON.parse(veterinaries) as VetsModel[];
}
