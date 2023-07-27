import { StaticImport } from "next/dist/shared/lib/get-img-props";

export interface TabsModel {
  title: string;
  href: string;
  tabLogo: string | StaticImport;
}
