const staticPaths = new Set(["/jon-blank-music/","/jon-blank-music/contact/","/jon-blank-music/favicon.svg","/jon-blank-music/lessons/","/jon-blank-music/manifest.json","/jon-blank-music/music/","/jon-blank-music/q-manifest.json","/jon-blank-music/robots.txt","/jon-blank-music/sitemap.xml"]);
function isStaticPath(method, url) {
  if (method.toUpperCase() !== 'GET') {
    return false;
  }
  const p = url.pathname;
  if (p.startsWith("/jon-blank-music/build/")) {
    return true;
  }
  if (p.startsWith("/jon-blank-music/assets/")) {
    return true;
  }
  if (staticPaths.has(p)) {
    return true;
  }
  if (p.endsWith('/q-data.json')) {
    const pWithoutQdata = p.replace(/\/q-data.json$/, '');
    if (staticPaths.has(pWithoutQdata + '/')) {
      return true;
    }
    if (staticPaths.has(pWithoutQdata)) {
      return true;
    }
  }
  return false;
}
export { isStaticPath };