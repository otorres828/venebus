export function isAuthenticated(): boolean {
  if (typeof document === "undefined") return false;

  const cookies = document.cookie ?? "";
  const hasCookieSession = /(laravel_session|auth_token|access_token|XSRF-TOKEN)=/.test(cookies);
  const token = localStorage.getItem("auth_token") || localStorage.getItem("access_token");
  return Boolean(hasCookieSession || token);
}
