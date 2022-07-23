declare namespace AuthRoute {
    type Role = ('user'|'admin')
    type RouteMeta = {
        title: string,
        icon?: string,
        requiresAuth?: boolean,
        role?: Role[],
        keepAlive?: boolean,
        hide?: boolean,
        href?: string,
        order?: number
    }
}