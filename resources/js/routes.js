const notFound = () => import("./pages/NotFound.vue");
const contributies = () => import("./pages/Contributies.vue");
const leden = () => import("./pages/Leden.vue");
const families = () => import("./pages/Families.vue");

const routes = [
    {
        path: "/:catchAll(.*)",
        component: notFound,
        props: {
            get: true,
        }
    },
    {
        path: "/app/contributies",
        component: contributies,
        props: {
            get: true,
        }
    },
    {
        path: "/app/leden",
        component: leden,
        props: {
            get: true,
        }
    },
    {
        path: "/app/families",
        component: families,
        props: {
            get: true,
        }
    },
    {
        path: "/app/"
    }
]

export default routes;