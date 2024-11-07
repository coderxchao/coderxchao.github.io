import { defineThemeConfig } from "vuepress-theme-plume";
import { navbar } from "./navbar";
import { notes } from "./notes";

/**
 * @see https://theme-plume.vuejs.press/config/basic/
 */
export default defineThemeConfig({
  logo: "/header.png",
  // your git repo url
  docsRepo: "",
  docsDir: "docs",
  footer: false,
  appearance: true,

  profile: {
    avatar: "/header.png",
    name: "coderchao",
    description: "好学若饥，谦卑若愚",

    // circle: true,
    // location: '',
    // organization: '',
  },

  navbar,
  notes,
  social: [{ icon: "github", link: "https://github.com/coderxchao" }],
});
