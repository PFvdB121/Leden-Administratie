const notFound = import("./pages/NotFound.vue");

const routes = [
    {
        path: "/:catchAll(.*)",
        component: notFound
    },
    {
        path: "/app"
    }
]

export default routes;