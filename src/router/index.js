import { createRouter, createWebHistory } from "vue-router";
import Home from "@/pages/Home.vue";
import ThreadShow from "@/pages/ThreadShow.vue";
import ThreadCreate from "../pages/ThreadCreate.vue";
import ThreadEdit from "../pages/ThreadEdit.vue";
import NotFound from "@/pages/NotFound.vue";
import Forum from "@/pages/Forum.vue";
import Category from "@/pages/Category.vue";
import sorceData from "@/data.json";
import Profile from "@/pages/Profile.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/category/:id",
    name: "Category",
    component: Category,
    props: true,
  },
  {
    path: "/forum/:id",
    name: "Forum",
    component: Forum,
    props: true,
  },
  {
    path: "/me/edit",
    name: "ProfileEdit",
    component: Profile,
    props: {edit: true}
  },
  {
    path: "/me",
    name: "Profile",
    component: Profile,
    meta: { toTop: true, smoothScroll: true }
  },
  {
    path: "/thread/:id",
    name: "Thread",
    component: ThreadShow,
    props: true,
    beforeEnter(to, from, next) {
      const threadExist = sorceData.threads.find(
        (thread) => thread.id === to.params.id
      );
      if (threadExist) {
        return next();
      } else {
        next({
          name: "404",
          params: {
            pathMatch: to.path.split("/"),
          },
          query: to.query,
          hash: to.hash,
        });
      }
    },
  },
  {
    path: '/forum/:forumId/thread/create',
    name: 'ThreadCreate',
    component: ThreadCreate,
    props: true
  },
  {
    path: '/thread/:id/edit',
    name: 'ThreadEdit',
    component: ThreadEdit,
    props: true
  },
  {
    path: "/:patchMatch(.*)*",
    name: "404",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to){
    const scroll = {}
    if(to.meta.toTop) scroll.top = 0;
    if(to.meta.smoothScroll) scroll.behavior = 'smooth'
    return scroll
  }
});

export default router;
