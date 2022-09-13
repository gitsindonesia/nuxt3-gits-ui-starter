export default defineNuxtRouteMiddleware((to, from) => {
  const auth = useAuthStore();
  const router = useRouter();

  if (!auth.loggedIn) {
    return router.push({
      path: '/auth/login',
      query: {
        next: to.path,
      },
    });
  }
});
