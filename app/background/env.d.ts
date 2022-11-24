declare function importScripts(s: string);
declare const AWS;
declare global {
  interface Window {
    clients: any;
  }
}
declare module "canvas-confetti" {
  export default function confetti(opts: any);
}
