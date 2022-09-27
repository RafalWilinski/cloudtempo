export function getOS() {
  return window.navigator.platform;
}

export function isOnMacOS() {
  return getOS().startsWith("Mac");
}

export function isOnWindows() {
  return getOS().startsWith("Win");
}

export function cmdOrCtrl() {
  return isOnMacOS() ? "⌘" : "Ctrl";
}
