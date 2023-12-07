const lightTheme = [
  "--body-bg-color: #F6F8FF",
  "--main-bg-color: #FFFFFF",
  "--heading-color: #222731",
  "--mode-color: #697C9A;",
  "--username-color: #0079ff",
  "--stats-bg-color: #F6F8FF",
  "--text-color: #4b6a9b",
  "--grey-text-color: #2b3442",
  "--btn-bg-color: #0079ff",
  "--btn-hover-color: #60ABFF",
  "--placeholder-color: #222731",
  "--social-icon-color : #000000",
  "--error-color:#f74646",
];

const darkTheme = [
  "--body-bg-color: #141D2F",
  "--main-bg-color: #1E2A47",
  "--heading-color: #FFFFFF",
  "--mode-color: #FFFFFF;",
  "--username-color: #0079ff",
  "--stats-bg-color: #141D2F",
  "--text-color: #FFFFFF",
  "--grey-text-color: #FFFFFF",
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
