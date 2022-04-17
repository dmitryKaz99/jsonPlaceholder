interface IRoutesConfig {
  path: string;
  text: string;
}

export const routesConfig: IRoutesConfig[] = [
  { path: "/create", text: "Создание" },
  { path: "/manager", text: "Управлениe" },
];
