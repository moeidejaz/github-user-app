const lightTheme = [
  "--body-color: #F6F8FF",
  "--main-color: #FFFFFF",
  "--heading-color: #222731",
  "--mode-color: #697C9A;",
  "--stats-bg-color: #F6F8FF",
  "--text-color: #FFFFFF",
  "--btn-bg-color: #0079ff",
  "--btn-hover-color: #60ABFF",
  "--placeholder-color: #222731",
  "--social-icon-color : #000000",
  "--error-color:#f74646",
];

const darkTheme = [
  "--body-color: #141D2F",
  "--main-color: #1E2A47",
  "--heading-color: #FFFFFF",
  "--mode-color: #FFFFFF;",
  "--stats-bg-color: #141D2F",
  "--text-color: #FFFFFF",
  "--btn-bg-color: #0079ff",
  "--btn-hover-color: #60ABFF",
  "--placeholder-color: #FFFFFF",
  "--social-icon-color:#FFFFFF",
  "--error-color:#f74646",
];

export default function SwitchTheme(change) {
  const root = document.getElementsByTagName("html")[0];
  let theme;

  if (change) theme = darkTheme;
  else theme = lightTheme;

  root.style.cssText += theme.join(";");
}
