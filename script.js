(function () {
  const d = window.PORTFOLIO;
  const $ = (id) => document.getElementById(id);

  const el = (tag, cls, text) => {
    const n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  };

  const link = (url, text, cls) => {
    const a = el("a", cls, text);
    a.href = url;
    if (/^https?:/.test(url)) {
      a.target = "_blank";
      a.rel = "noopener";
    }
    return a;
  };

  const hideSection = (id) => {
    $(id).hidden = true;
    const navItem = document.querySelector(`.nav-links a[href="#${id}"]`);
    if (navItem) navItem.parentElement.hidden = true;
  };

  const initials = d.name
    .split(/\s+/)
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  // Head + hero
  document.title = `${d.name} | ${d.role}`;
  $("logo").textContent = initials;
  $("hero-name").textContent = d.name;
  $("hero-role").textContent = d.role;
  $("hero-tagline").textContent = d.tagline;
  $("hero-location").textContent = d.location ? `📍 ${d.location}` : "";

  if (d.resumeUrl) $("resume-btn").href = d.resumeUrl;
  else $("resume-btn").remove();

  const photo = $("hero-photo");
  if (d.photo) {
    const img = el("img");
    img.src = d.photo;
    img.alt = `Photo of ${d.name}`;
    photo.append(img);
  } else {
    photo.append(el("span", "initials", initials));
  }

  const renderSocials = (target) => {
    (d.socials || []).forEach((s) => {
      const li = el("li");
      li.append(link(s.url, s.label));
      target.append(li);
    });
  };
  renderSocials($("hero-socials"));
  renderSocials($("contact-socials"));

  // About
  (d.about || []).forEach((p) => $("about-text").append(el("p", null, p)));
  (d.highlights || []).forEach((h) => {
    const box = el("div", "highlight");
    box.append(el("strong", null, h.value), el("span", null, h.label));
    $("highlights").append(box);
  });

  // Skills
  if (!d.skills?.length) hideSection("skills");
  (d.skills || []).forEach((g) => {
    const card = el("div", "card");
    card.append(el("h4", null, g.group));
    const ul = el("ul", "chips");
    g.items.forEach((s) => ul.append(el("li", null, s)));
    card.append(ul);
    $("skills-grid").append(card);
  });

  // Experience
  if (!d.experience?.length) hideSection("experience");
  (d.experience || []).forEach((job) => {
    const li = el("li", "timeline-item");
    const head = el("div", "timeline-head");
    const left = el("div");
    left.append(el("h4", null, job.title), el("p", "muted", [job.company, job.location].filter(Boolean).join(" · ")));
    head.append(left, el("span", "period", job.period));
    const ul = el("ul", "achievements");
    (job.achievements || []).forEach((a) => ul.append(el("li", null, a)));
    li.append(head, ul);
    $("timeline").append(li);
  });

  // Projects
  if (!d.projects?.length) hideSection("projects");
  (d.projects || []).forEach((p) => {
    const card = el("article", "card project");
    card.append(el("h4", null, p.name), el("p", null, p.description));
    const tags = el("ul", "chips small");
    (p.tags || []).forEach((t) => tags.append(el("li", null, t)));
    card.append(tags);
    if (p.link) card.append(link(p.link, "View project →", "card-link"));
    $("projects-grid").append(card);
  });

  // Education
  if (!d.education?.length) hideSection("education");
  (d.education || []).forEach((e) => {
    const card = el("div", "card");
    card.append(el("h4", null, e.degree), el("p", "muted", `${e.school} · ${e.period}`));
    if (e.note) card.append(el("p", null, e.note));
    if (e.highlights?.length) {
      const ul = el("ul", "achievements");
      e.highlights.forEach((h) => ul.append(el("li", null, h)));
      card.append(ul);
    }
    $("education-grid").append(card);
  });

  // Interests
  if (!d.interests?.length) hideSection("interests");
  (d.interests || []).forEach((i) => {
    const card = el("div", "card interest");
    card.append(el("span", "emoji", i.emoji), el("h4", null, i.name), el("p", null, i.description));
    $("interests-grid").append(card);
  });

  // Contact + footer
  const mail = $("contact-email");
  mail.href = `mailto:${d.email}`;
  mail.textContent = d.email;
  $("footer-text").textContent = `© ${new Date().getFullYear()} ${d.name}`;

  // Theme toggle
  $("theme-toggle").addEventListener("click", () => {
    const root = document.documentElement;
    const dark =
      root.dataset.theme === "dark" ||
      (!root.dataset.theme && matchMedia("(prefers-color-scheme: dark)").matches);
    root.dataset.theme = dark ? "light" : "dark";
    try {
      localStorage.setItem("theme", root.dataset.theme);
    } catch (e) {}
  });

  // Mobile menu
  const menuBtn = $("menu-toggle");
  const navLinks = $("nav-links");
  menuBtn.addEventListener("click", () => {
    const open = navLinks.classList.toggle("open");
    menuBtn.setAttribute("aria-expanded", open);
  });
  navLinks.addEventListener("click", (e) => {
    if (e.target.tagName === "A") {
      navLinks.classList.remove("open");
      menuBtn.setAttribute("aria-expanded", "false");
    }
  });

  // Fade sections in as they scroll into view
  const io = new IntersectionObserver(
    (entries) =>
      entries.forEach((en) => {
        if (en.isIntersecting) {
          en.target.classList.add("visible");
          io.unobserve(en.target);
        }
      }),
    { threshold: 0.1 }
  );
  document.querySelectorAll(".section").forEach((s) => io.observe(s));
})();
