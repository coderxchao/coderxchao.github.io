import { defineNavbarConfig } from "vuepress-theme-plume";

export const navbar = defineNavbarConfig([
  { text: "首页", link: "/", icon: "fluent-color:home-32" },
  { text: "知识库", link: "/blog/", icon: "noto:books" },
  { text: "标签", link: "/blog/tags/", icon: "fluent-emoji:keycap-hashtag" },
  {
    text: "归档",
    link: "/blog/archives/",
    icon: "emojione:closed-mailbox-with-lowered-flag",
  },
  // {
  //   text: "面试系列",
  //   icon: "logos:codeigniter-icon",
  //   items: [
  //     {
  //       text: "JavaScript高级",
  //       link: "/notes/面试系列/JavaScript高级.md",
  //       icon: "skill-icons:javascript",
  //     },
  //     {
  //       text: "Vue",
  //       link: "/notes/面试系列/Vue.md",
  //       icon: "logos:vue",
  //     },
  //     {
  //       text: "React",
  //       link: "/notes/面试系列/React.md",
  //       icon: "skill-icons:react-dark",
  //     },
  //     {
  //       text: "开发问题",
  //       link: "/notes/面试系列/开发问题.md",
  //       icon: "emojione-v1:question-mark",
  //     },
  //   ],
  // },
]);
