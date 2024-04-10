export const useOpenDrawer = () => {
  return useState<boolean>("openDrawer", () => false);
};

export const useSmallDrawer = () => {
  return useState<boolean>("smallDrawer", () => false);
};