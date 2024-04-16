import { ScreenTypeEnum } from "@/interface/sidebar";
export const useOpenDrawer = () => {
  return useState<boolean>("openDrawer", () => false);
};

export const useSmallDrawer = () => {
  return useState<boolean>("smallDrawer", () => false);
};

export const useScreenType = () => {
  return useState<ScreenTypeEnum>("screenSize", () => ScreenTypeEnum.small);
};
