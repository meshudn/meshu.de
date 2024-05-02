// show customised outline when an element has focus (but only if the user is
// using the keyboard)
// TODO: move this to a global css rule
export const FOCUS_VISIBLE_OUTLINE = `focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500/70`

export const LINK_STYLES = `text-rose-200 underline decoration-rose-200/20 underline-offset-2 transition-all hover:text-rose-100 hover:decoration-rose-100/40`

export const LINK_SUBTLE_STYLES = `hover:underline hover:decoration-rose-300/30 hover:underline-offset-2 hover:text-rose-200/90`

export const HEADING_LINK_ANCHOR = `before:content-['#'] before:absolute before:-ml-[1em] before:text-rose-100/0 hover:before:text-rose-200/50 pl-[1em] -ml-[1em]`

export const OOF_GRAD = `bg-gradient-to-br from-rose-200 to-rose-200/30 bg-clip-text text-transparent`

export const meta = {
  name: "meshu",
  twitterHandle: "@meshudn",
  domain: "meshu.de",
  tagline: "",
  description:{
    en : "Meet a enthusiastic generalist software professional—an expat in Germany. Always looking to learn and take on new challenges. Excited to grow my skills and make a real impact with a great team!",
    de: "Hier ist eine enthusiastische Generalistin in der Softwareentwicklung—eine Expat in Deutschland. Immer bereit, Neues zu lernen und neue Herausforderungen anzunehmen. Ich freue mich darauf, meine Fähigkeiten weiterzuentwickeln und im Team einen echten Unterschied zu machen!"
  }
}
