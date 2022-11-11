import { createWebHistory, createRouter } from "vue-router";
import HomePage from "@/views/HomePage.vue";
import EducationPage from "@/views/EducationPage.vue";
import ExperiencePage from "@/views/ExperiencePage.vue";
import ProjectsPage from "@/views/ProjectsPage.vue";
import NotFound from "@/views/NotFound.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomePage,
  },

  {
    path: "/education",
    name: "Education",
    component: EducationPage,
  },

  {
    path: "/experience",
    name: "Experience",
    component: ExperiencePage,
  },

  {
    path: "/projects",
    name: "Projects",
    component: ProjectsPage,
  },

  {
    path: "/:catchAll(.*)",
    component: NotFound,
  },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;