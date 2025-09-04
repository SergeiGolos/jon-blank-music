const staticPaths = new Set(["/","/contact/","/jon-blank-music/assets/2fczHu5i-style.css","/jon-blank-music/assets/CCcGD9RY-bundle-graph.json","/jon-blank-music/build/q-31cycsdL.js","/jon-blank-music/build/q-8NiIFudP.js","/jon-blank-music/build/q-B1K8BF-I.js","/jon-blank-music/build/q-BkH32bk2.js","/jon-blank-music/build/q-Bm-FuoCu.js","/jon-blank-music/build/q-C9yIxFSe.js","/jon-blank-music/build/q-CBClpSF7.js","/jon-blank-music/build/q-CM3bPnLs.js","/jon-blank-music/build/q-CbN8g7tr.js","/jon-blank-music/build/q-Cd4CjTpU.js","/jon-blank-music/build/q-CdWkqRsZ.js","/jon-blank-music/build/q-Cw-gJNeZ.js","/jon-blank-music/build/q-DYdjQpMf.js","/jon-blank-music/build/q-De0Wsg-_.js","/jon-blank-music/build/q-DjMIbXvJ.js","/jon-blank-music/build/q-DvJblmpV.js","/jon-blank-music/build/q-DxOpay-y.js","/jon-blank-music/build/q-GW3TF-He.js","/jon-blank-music/build/q-Gi3G6X44.js","/jon-blank-music/build/q-LQIQ74oA.js","/jon-blank-music/build/q-Z1um14Fu.js","/jon-blank-music/build/q-bgXc4z-x.js","/jon-blank-music/build/q-istiA8xF.js","/jon-blank-music/build/q-pLIxelCT.js","/jon-blank-music/favicon.svg","/jon-blank-music/manifest.json","/jon-blank-music/q-manifest.json","/jon-blank-music/robots.txt","/lessons/","/music/","/sitemap.xml"]);
function isStaticPath(method, url) {
  if (method.toUpperCase() !== 'GET') {
    return false;
  }
  const p = url.pathname;
  if (p.startsWith("/build/")) {
    return true;
  }
  if (p.startsWith("/assets/")) {
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