import { defineNotesConfig } from "vuepress-theme-plume";

// const jsNote = defineNoteConfig({
//   dir: "js",
//   link: "/js",
// });

// const vueNote = defineNoteConfig({
//   dir: "vue",
//   link: "/vue",
// });

// const reactNote = defineNoteConfig({
//   dir: "react",
//   link: "/react",
//   // sidebar: ["js", "vue", "react"],
// });

export const notes = defineNotesConfig({
  dir: "notes",
  link: "/",
  notes: [
    /* jsNote, vueNote, reactNote */
  ],
});
