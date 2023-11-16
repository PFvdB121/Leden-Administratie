const notFound = import("./pages/NotFound.vue");

const routes = [
    {
        path: "/:catchAll(.*)",
        component: notFound
    }
]

export default routes;