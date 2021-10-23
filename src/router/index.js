import intro from "@/components/intro";
import VueRouter from "vue-router";

const routes = [
    {
        path: "/",
        component: intro,
    }
];

export default new VueRouter({
    routes,
    mode: "history",
});