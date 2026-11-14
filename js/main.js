/* =========================================================================
   Portfolio de Xavier Trudel : scripts
   ========================================================================= */
(function () {
  "use strict";

  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));
  const reduitMouvement = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- Utilitaires ---------- */
  const echapper = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  // Transforme [[terme|définition]] en infobulle accessible
  const termes = (html) =>
    String(html).replace(/\[\[([^|\]]+)\|([^\]]+)\]\]/g, (_, t, d) =>
      `<span class="terme" tabindex="0" data-def="${echapper(d)}">${t}</span>`);

  const projetsTries = () =>
    (typeof PROJETS !== "undefined" ? PROJETS.slice() : []).sort((a, b) => b.tri.localeCompare(a.tri));

  const icone = (nom) => `<svg aria-hidden="true" viewBox="0 0 24 24"><use href="#i-${nom === "github" ? "github" : nom === "jeu" ? "jeu" : "lien"}"/></svg>`;

  /* ---------- Année du pied de page ---------- */
  $$("#annee").forEach((el) => (el.textContent = new Date().getFullYear()));

  /* ---------- Mode clair / sombre ---------- */
  const themeBouton = $("#theme-bouton");
  const majTheme = (sombre) => {
    if (sombre) {
      document.documentElement.dataset.theme = "sombre";
    } else {
      delete document.documentElement.dataset.theme;
    }
    if (themeBouton) {
      themeBouton.setAttribute("aria-label", sombre ? "Activer le mode clair" : "Activer le mode sombre");
      themeBouton.setAttribute("aria-pressed", String(sombre));
    }
  };
  majTheme(document.documentElement.dataset.theme === "sombre");
  if (themeBouton) {
    themeBouton.addEventListener("click", () => {
      const sombre = document.documentElement.dataset.theme !== "sombre";
      majTheme(sombre);
      try { localStorage.setItem("theme", sombre ? "sombre" : "clair"); } catch (e) {}
    });
  }

  /* ---------- En-tête : ombre au défilement + menu mobile ---------- */
  const entete = $("#entete");
  const surDefilement = () => entete && entete.classList.toggle("defile", window.scrollY > 10);
  window.addEventListener("scroll", surDefilement, { passive: true });
  surDefilement();

  const navBouton = $(".nav-bouton");
  const navLiens = $("#nav-liens");
  if (navBouton && navLiens) {
    navBouton.addEventListener("click", () => {
      const ouvert = navBouton.getAttribute("aria-expanded") === "true";
      navBouton.setAttribute("aria-expanded", String(!ouvert));
      navBouton.setAttribute("aria-label", ouvert ? "Ouvrir le menu" : "Fermer le menu");
      navLiens.classList.toggle("ouvert", !ouvert);
    });
    $$("a", navLiens).forEach((a) =>
      a.addEventListener("click", () => {
        navBouton.setAttribute("aria-expanded", "false");
        navLiens.classList.remove("ouvert");
      }));
  }

  /* ---------- Particules lumineuses ---------- */
  const particules = $(".particules");
  if (particules && !reduitMouvement) {
    for (let i = 0; i < 34; i++) {
      const p = document.createElement("span");
      const taille = 4 + Math.random() * 5.5;
      p.style.cssText = `left:${Math.random() * 100}%;width:${taille}px;height:${taille}px;` +
        `animation-duration:${14 + Math.random() * 18}s;animation-delay:${-Math.random() * 30}s;` +
        `opacity:${0.65 + Math.random() * 0.35}`;
      particules.appendChild(p);
    }
  }

  /* ---------- Apparition au défilement ---------- */
  const observerReveal = () => {
    const elements = $$(".reveal:not(.visible)");
    if (reduitMouvement || !("IntersectionObserver" in window)) {
      elements.forEach((el) => el.classList.add("visible"));
      return;
    }
    const io = new IntersectionObserver((entrees) => {
      entrees.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add("visible"); io.unobserve(e.target); }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    elements.forEach((el) => io.observe(el));
  };

  /* ---------- Lien actif dans le menu (page d'accueil) ---------- */
  const sections = $$("main section[id]");
  if (sections.length && navLiens && "IntersectionObserver" in window) {
    const io = new IntersectionObserver((entrees) => {
      entrees.forEach((e) => {
        if (!e.isIntersecting) return;
        $$("a", navLiens).forEach((a) => a.classList.toggle("actif", a.getAttribute("href") === "#" + e.target.id));
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    sections.forEach((s) => io.observe(s));
  }

  /* =======================================================================
     PAGE D'ACCUEIL : liste des réalisations + filtres
     ======================================================================= */
  const liste = $("#liste-projets");
  if (liste) {
    const projets = projetsTries();
    const filtres = $(".filtres");
    const toutes = ["Tout", ...new Set(projets.flatMap((p) => p.etiquettes))];

    const rendreListe = (filtre = "Tout") => {
      const visibles = filtre === "Tout" ? projets : projets.filter((p) => p.etiquettes.includes(filtre));
      liste.innerHTML = visibles.map((p, i) => `
        <li class="projet reveal" style="--delai:${i * 70}ms">
          <a class="projet-carte" href="projet.html?id=${encodeURIComponent(p.id)}" aria-label="${echapper(p.titre)} : voir la réalisation détaillée">
            <div class="projet-image">
              <img src="${p.couverture}" alt="${echapper(p.couvertureAlt)}" loading="lazy" width="1600" height="900">
              ${p.statut && p.statut.startsWith("En cours") ? '<span class="badge badge-or projet-statut">En cours</span>' : ""}
            </div>
            <div class="projet-corps">
              <p class="projet-meta"><time>${echapper(p.date)}</time><span aria-hidden="true"> · </span>${echapper(p.duree.split("(")[0].trim())}</p>
              <h3>${echapper(p.titre)}</h3>
              <p class="projet-type">${echapper(p.type)}</p>
              <p>${echapper(p.accroche)}</p>
              <ul class="etiquettes" aria-label="Étiquettes">${p.etiquettes.map((e) => `<li>${echapper(e)}</li>`).join("")}</ul>
              <span class="projet-lien">Lire la réalisation <span aria-hidden="true">→</span></span>
            </div>
          </a>
        </li>`).join("");
      observerReveal();
    };

    if (filtres) {
      filtres.innerHTML = toutes.map((e, i) =>
        `<button type="button" class="filtre${i === 0 ? " actif" : ""}" aria-pressed="${i === 0}" data-filtre="${echapper(e)}">${echapper(e)}</button>`).join("");
      filtres.addEventListener("click", (ev) => {
        const b = ev.target.closest(".filtre");
        if (!b) return;
        $$(".filtre", filtres).forEach((x) => { x.classList.toggle("actif", x === b); x.setAttribute("aria-pressed", String(x === b)); });
        rendreListe(b.dataset.filtre);
      });
    }
    rendreListe();
  }

  /* =======================================================================
     CONTACT : copier le courriel + formulaire (mailto)
     ======================================================================= */
  const COURRIEL = "xaviertrud2006@gmail.com";
  const copier = $("#copier-courriel");
  if (copier) {
    copier.addEventListener("click", async () => {
      const statut = $("#copie-statut");
      try {
        await navigator.clipboard.writeText(COURRIEL);
        statut.textContent = "Adresse copiée !";
      } catch {
        statut.textContent = COURRIEL;
      }
      setTimeout(() => (statut.textContent = ""), 3000);
    });
  }

  const form = $("#form-contact");
  if (form) {
    form.addEventListener("submit", (ev) => {
      ev.preventDefault();
      const erreur = $("#form-erreur");
      const champs = ["nom", "courriel", "sujet", "message"].map((n) => form.elements[n]);
      champs.forEach((c) => c.removeAttribute("aria-invalid"));
      const invalides = champs.filter((c) => !c.value.trim() || (c.type === "email" && !c.checkValidity()));
      if (invalides.length) {
        invalides.forEach((c) => c.setAttribute("aria-invalid", "true"));
        erreur.textContent = "Veuillez remplir correctement tous les champs.";
        invalides[0].focus();
        return;
      }
      erreur.textContent = "";
      const [nom, courriel, sujet, message] = champs.map((c) => c.value.trim());
      const corps = `${message}\n\n${nom}\n${courriel}`;
      window.location.href = `mailto:${COURRIEL}?subject=${encodeURIComponent(sujet)}&body=${encodeURIComponent(corps)}`;
    });
  }

  /* =======================================================================
     PAGE PROJET : rendu détaillé à partir de projets.js
     ======================================================================= */
  const detail = $(".projet-detail");
  if (detail) {
    const projets = projetsTries();
    const id = new URLSearchParams(window.location.search).get("id");
    const index = projets.findIndex((p) => p.id === id);

    if (index === -1) {
      detail.innerHTML = `<section class="section introuvable"><h1>Projet introuvable</h1><p>Ce projet n'existe pas ou a été déplacé.</p><a class="btn btn-or" href="index.html#realisations">Voir toutes les réalisations</a></section>`;
    } else {
      const p = projets[index];
      const prec = projets[index - 1]; // plus récent
      const suiv = projets[index + 1]; // plus ancien
      document.title = `${p.titre} · Réalisations · Xavier Trudel`;
      const meta = document.querySelector('meta[name="description"]');
      if (meta) meta.setAttribute("content", `${p.titre} : ${p.accroche}`);

      detail.innerHTML = `
        <nav class="fil" aria-label="Fil d'Ariane">
          <a href="index.html">Accueil</a><span aria-hidden="true">/</span><a href="index.html#realisations">Réalisations</a><span aria-hidden="true">/</span><span aria-current="page">${echapper(p.titre)}</span>
        </nav>

        <header class="projet-hero reveal">
          <p class="surtitre">${echapper(p.type)}</p>
          <h1>${echapper(p.titre)}</h1>
          <p class="projet-accroche">${echapper(p.accroche)}</p>
          <ul class="etiquettes etiquettes-grandes" aria-label="Étiquettes">${p.etiquettes.map((e) => `<li>${echapper(e)}</li>`).join("")}</ul>
        </header>

        <figure class="projet-couverture reveal">
          <img src="${p.couverture}" alt="${echapper(p.couvertureAlt)}" width="1600" height="900">
        </figure>

        <div class="projet-grille">
          <aside class="carte fiche reveal" aria-label="Fiche du projet">
            <h2>Fiche du projet</h2>
            <dl>
              <div><dt>Date</dt><dd>${echapper(p.date)}</dd></div>
              <div><dt>Durée</dt><dd>${echapper(p.duree)}</dd></div>
              <div><dt>Contexte</dt><dd>${echapper(p.contexte)}</dd></div>
              <div><dt>Équipe</dt><dd>${echapper(p.equipe)}</dd></div>
              <div><dt>Statut</dt><dd>${echapper(p.statut)}</dd></div>
              <div><dt>Technologies</dt><dd><ul class="etiquettes">${p.technologies.map((t) => `<li>${echapper(t)}</li>`).join("")}</ul></dd></div>
            </dl>
            ${p.liens.length ? `<div class="fiche-liens">${p.liens.map((l) => `<a class="btn ${l.icone === "jeu" ? "btn-or" : "btn-ligne"} btn-petit" href="${l.url}" target="_blank" rel="noopener">${icone(l.icone)}${echapper(l.label)}</a>`).join("")}</div>` : ""}
          </aside>

          <article class="projet-texte">
            <section class="bloc bloc-bref reveal">
              <h2><span class="num">01</span> En bref</h2>
              <p>${termes(p.enBref)}</p>
            </section>

            <section class="bloc reveal">
              <h2><span class="num">02</span> Attentes et objectifs</h2>
              ${p.objectifs.map((o) => (o.trim().startsWith("<ul") ? termes(o) : `<p>${termes(o)}</p>`)).join("")}
            </section>

            <section class="bloc reveal">
              <h2><span class="num">03</span> Ce que j'ai réalisé</h2>
              <div class="realisations">
                ${p.realisations.map((r) => `<div class="realisation"><h3>${echapper(r.titre)}</h3><p>${termes(r.texte)}</p></div>`).join("")}
              </div>
            </section>

            <section class="bloc reveal">
              <h2><span class="num">04</span> Résultats</h2>
              <p>${termes(p.resultats)}</p>
            </section>

            <section class="bloc reveal">
              <h2><span class="num">05</span> Apprentissages</h2>
              <p>${termes(p.apprentissages)}</p>
            </section>
          </article>
        </div>

        ${p.videos.length ? `
        <section class="section-medias reveal">
          <h2>Vidéo${p.videos.length > 1 ? "s" : ""}</h2>
          <div class="videos">
            ${p.videos.map((v) => `<figure class="video carte"><video controls preload="none" playsinline poster="${v.poster}"><source src="${v.src}" type="video/mp4">Votre navigateur ne peut pas lire cette vidéo.</video><figcaption>${echapper(v.legende)}</figcaption></figure>`).join("")}
          </div>
        </section>` : ""}

        ${p.galerie.length ? `
        <section class="section-medias reveal">
          <h2>Galerie</h2>
          <ul class="galerie">
            ${p.galerie.map((g, i) => `<li><button type="button" class="galerie-item" data-index="${i}" aria-label="Agrandir : ${echapper(g.legende)}"><img src="${g.src}" alt="${echapper(g.alt)}" loading="lazy"><span>${echapper(g.legende)}</span></button></li>`).join("")}
          </ul>
        </section>` : ""}

        <nav class="projet-nav" aria-label="Autres réalisations">
          ${prec ? `<a class="carte projet-nav-lien" href="projet.html?id=${prec.id}"><span>← Plus récent</span><strong>${echapper(prec.titre)}</strong></a>` : "<span></span>"}
          <a class="btn btn-ligne" href="index.html#realisations">Toutes les réalisations</a>
          ${suiv ? `<a class="carte projet-nav-lien droite" href="projet.html?id=${suiv.id}"><span>Plus ancien →</span><strong>${echapper(suiv.titre)}</strong></a>` : "<span></span>"}
        </nav>`;

      /* Visionneuse d'images */
      const vis = $("#visionneuse");
      if (vis && p.galerie.length) {
        const img = $("img", vis), cap = $("figcaption", vis);
        let courant = 0, declencheur = null;
        const afficher = (i) => {
          courant = (i + p.galerie.length) % p.galerie.length;
          img.src = p.galerie[courant].src; img.alt = p.galerie[courant].alt; cap.textContent = p.galerie[courant].legende;
        };
        const fermer = () => { vis.hidden = true; document.body.classList.remove("bloque"); declencheur && declencheur.focus(); };
        $$(".galerie-item", detail).forEach((b) => b.addEventListener("click", () => {
          declencheur = b; afficher(+b.dataset.index); vis.hidden = false; document.body.classList.add("bloque"); $(".visionneuse-fermer", vis).focus();
        }));
        $(".visionneuse-fermer", vis).addEventListener("click", fermer);
        $(".prec", vis).addEventListener("click", () => afficher(courant - 1));
        $(".suiv", vis).addEventListener("click", () => afficher(courant + 1));
        vis.addEventListener("click", (e) => { if (e.target === vis) fermer(); });
        document.addEventListener("keydown", (e) => {
          if (vis.hidden) return;
          if (e.key === "Escape") fermer();
          if (e.key === "ArrowLeft") afficher(courant - 1);
          if (e.key === "ArrowRight") afficher(courant + 1);
        });
      }
    }
  }

  observerReveal();
})();
