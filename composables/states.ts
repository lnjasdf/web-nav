export const useOpenDrawer = () => {
  return useState<boolean>("openDrawer", () => false);
};

export const useLargeDrawer = () => {
  return useState<boolean>("largeDrawer", () => true);
};