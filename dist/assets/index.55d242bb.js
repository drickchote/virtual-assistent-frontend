import { R as r, a as i } from "./vendor.cd7509fb.js"; const a = function () { const o = document.createElement("link").relList; if (o && o.supports && o.supports("modulepreload")) return; for (const e of document.querySelectorAll('link[rel="modulepreload"]')) l(e); new MutationObserver(e => { for (const t of e) if (t.type === "childList") for (const n of t.addedNodes) n.tagName === "LINK" && n.rel === "modulepreload" && l(n) }).observe(document, { childList: !0, subtree: !0 }); function s(e) { const t = {}; return e.integrity && (t.integrity = e.integrity), e.referrerpolicy && (t.referrerPolicy = e.referrerpolicy), e.crossorigin === "use-credentials" ? t.credentials = "include" : e.crossorigin === "anonymous" ? t.credentials = "omit" : t.credentials = "same-origin", t } function l(e) { if (e.ep) return; e.ep = !0; const t = s(e); fetch(e.href, t) } }; a(); var c = "./assets/assistente.01800c25.png"; function u() { return r.createElement("div", { className: "App" }, r.createElement("header", { className: "App-header" }, r.createElement("img", { src: c, className: "App-logo", alt: "logo" }), r.createElement("h1", { className: "App-Title" }, "IC-Talk"))) } i.render(r.createElement(r.StrictMode, null, r.createElement(u, null)), document.getElementById("root"));
