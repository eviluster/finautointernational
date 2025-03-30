import type { MenuItem } from "@/layouts/default-layout/config/types";

const useDynamicMenu: Array<MenuItem> = [
  {
    pages: [
      {
        heading: "Dashboard",
        route: "/dashboard",
        keenthemesIcon: "element-11",
        bootstrapIcon: "bi-app-indicator",
      },
    ],
  },
];

export default useDynamicMenu;
