/* ==============================================
   1. ЗАГРУЗКА HEADER И FOOTER
============================================== */

async function loadComponent(placeholderId, filePath) {
  const placeholder = document.getElementById(placeholderId);

  if (!placeholder) return;

  const response = await fetch(filePath);

  if (!response.ok) {
    throw new Error(`Не удалось загрузить ${filePath}`);
  }

  placeholder.innerHTML = await response.text();
}

async function loadLayout() {
  try {
    await Promise.all([
      loadComponent("header", "components/header.html"),
      loadComponent("footer", "components/footer.html"),
    ]);
  } catch (error) {
    console.error("Ошибка загрузки компонентов:", error);
  }
}

loadLayout();
