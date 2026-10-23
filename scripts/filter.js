/* ==============================================
   2. МАССИВ МЕРОПРИЯТИЙ
============================================== */

const eventsStore = [
  {
    title: "INFJ Personality Type - Coffee Shop Meet & Greet",
    description: "Being an INFJ",
    date: new Date(2026, 2, 23, 15),
    image:
      "https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=1037&auto=format&fit=crop",
    type: "offline",
    attendees: 99,
    category: "Hobbies and Passions",
    distance: 50,
  },
  {
    title:
      "NYC AI Users - AI Tech Talks, Demo & Social: RAG Search and Customer Experience",
    description: "New York AI Users",
    date: new Date(2026, 2, 23, 11, 30),
    image:
      "https://images.unsplash.com/photo-1696258686454-60082b2c33e2?q=80&w=870&auto=format&fit=crop",
    type: "offline",
    attendees: 43,
    category: "Technology",
    distance: 25,
  },
  {
    title: "Book 40+ Appointments Per Month Using AI and Automation",
    description: "New Jersey Business Network",
    date: new Date(2026, 2, 16, 14),
    image:
      "https://images.unsplash.com/photo-1674027444485-cec3da58eef4?q=80&w=1032&auto=format&fit=crop",
    type: "online",
    category: "Technology",
    distance: 10,
  },
  {
    title: "Dump writing group weekly meetup",
    description: "Dump writing group",
    date: new Date(2024, 2, 13, 11),
    image:
      "https://images.unsplash.com/photo-1678453146992-b80d66df9152?q=80&w=870&auto=format&fit=crop",
    type: "online",
    attendees: 77,
    category: "Business",
    distance: 100,
  },
  {
    title: "Over 40s, 50s, & 60s Senior Singles Chat, Meet & Dating Community",
    description: "Over 40s, 50s, 60s Singles Chat, Meet & Dating Community",
    date: new Date(2026, 2, 14, 11),
    image:
      "https://images.unsplash.com/photo-1706005542509-a460d6efecb0?q=80&w=870&auto=format&fit=crop",
    type: "online",
    attendees: 140,
    category: "Social Activities",
    distance: 75,
  },
  {
    title: "All Nations - Manhattan Missions Church Bible Study",
    description: "Manhattan Bible Study Meetup Group",
    date: new Date(2026, 2, 14, 11),
    image:
      "https://images.unsplash.com/photo-1679488248784-65a638a3d3fc?q=80&w=870&auto=format&fit=crop",
    type: "offline",
    category: "Health and Wellbeing",
    distance: 15,
  },
  {
    title: "INFJ Personality Type - Coffee Shop Meet & Greet",
    description: "Being an INFJ",
    date: new Date(2026, 2, 23, 15, 0),
    image:
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&h=340&fit=crop&auto=format",
    type: "offline",
    attendees: 99,
    category: "Hobbies and Passions",
    distance: 50,
  },

  {
    title: "NYC AI Users - AI Tech Talks, Demo & Social",
    description: "New York AI Users",
    date: new Date(2026, 2, 23, 11, 30),
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=340&fit=crop&auto=format",
    type: "offline",
    attendees: 43,
    category: "Technology",
    distance: 25,
  },

  {
    title: "Book 40+ Appointments Using AI and Automation",
    description: "New Jersey Business Network",
    date: new Date(2026, 2, 16, 14, 0),
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=340&fit=crop&auto=format",
    type: "online",
    category: "Technology",
    distance: 10,
  },

  {
    title: "Dump Writing Group Weekly Meetup",
    description: "Dump Writing Group",
    date: new Date(2024, 2, 13, 11, 0),
    image:
      "https://images.unsplash.com/photo-1456324504439-367cee3b3c32?w=600&h=340&fit=crop&auto=format",
    type: "online",
    attendees: 77,
    category: "Business",
    distance: 100,
  },

  {
    title: "Over 40s, 50s, & 60s Senior Singles Chat",
    description: "Singles Chat, Meet & Dating Community",
    date: new Date(2026, 2, 14, 11, 0),
    image:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&h=340&fit=crop&auto=format",
    type: "online",
    attendees: 140,
    category: "Social Activities",
    distance: 75,
  },
  {
    title: "All Nations - Manhattan Missions Church Bible Study",
    description: "Manhattan Bible Study Meetup Group",
    date: new Date(2026, 2, 14, 11, 0),
    image:
      "https://images.unsplash.com/photo-1507699622108-4be3abd695ad?w=600&h=340&fit=crop&auto=format",
    type: "offline",
    category: "Health and Wellbeing",
    distance: 15,
  },
  {
    title: "Morning Fitness & Wellness Meetup",
    description: "New York Fitness Community",
    date: new Date(2026, 10, 7, 9, 30),
    image:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&h=340&fit=crop&auto=format",
    type: "offline",
    attendees: 65,
    category: "Sports and Fitness",
    distance: 10,
  },
  {
    title: "New York Art & Culture Workshop",
    description: "Creative Artists Meetup NYC",
    date: new Date(2026, 10, 12, 14, 0),
    image:
      "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=600&h=340&fit=crop&auto=format",
    type: "offline",
    attendees: 38,
    category: "Art and Culture",
    distance: 25,
  },
  {
    title: "Weekend Outdoor Adventure & Hiking",
    description: "New York Travel and Outdoor Group",
    date: new Date(2026, 10, 21, 10, 0),
    image:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&h=340&fit=crop&auto=format",
    type: "offline",
    attendees: 82,
    category: "Travel and Outdoor",
    distance: 50,
  },
];

/* ==============================================
   3. ПОЛУЧАЕМ ЭЛЕМЕНТЫ HTML
============================================== */

const typeFilter = document.getElementById("type_filter");

const dateFilter = document.getElementById("date_filter");

const distanceFilter = document.getElementById("distance_filter");

const categoryFilter = document.getElementById("category_filter");

const eventsResults = document.getElementById("eventsResults");

const resultsCount = document.getElementById("resultsCount");

/* ==============================================
   4. РАБОТА С ДАТАМИ
============================================== */

// Преобразуем дату в формат YYYY-MM-DD

function dateKey(date) {
  const year = date.getFullYear();

  const month = String(date.getMonth() + 1).padStart(2, "0");

  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

// Форматируем дату для карточки мероприятия

function formatDate(date) {
  return date.toLocaleString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });
}

/* ==============================================
   5. ЗАПОЛНЯЕМ ФИЛЬТР ДАТ
============================================== */

function populateDateFilter() {
  // Берём даты из массива мероприятий
  const dates = eventsStore.map((event) => dateKey(event.date));

  // Убираем повторяющиеся даты
  const uniqueDates = [...new Set(dates)];

  // Сортируем даты по возрастанию
  uniqueDates.sort();

  // Очищаем select, оставляем Any date
  dateFilter.replaceChildren(new Option("Any date", ""));

  // Добавляем каждую уникальную дату
  uniqueDates.forEach((dateValue) => {
    const [year, month, day] = dateValue.split("-").map(Number);

    const date = new Date(year, month - 1, day);

    const formattedDate = date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });

    const option = document.createElement("option");

    option.value = dateValue;

    option.textContent = formattedDate;

    dateFilter.append(option);
  });
}

/* ==============================================
   6. СОЗДАЁМ КАРТОЧКУ МЕРОПРИЯТИЯ
============================================== */

function createEventRow(event) {
  // Основной блок карточки
  const article = document.createElement("article");
  article.className = "event_row";

  // Изображение
  const image = document.createElement("img");
  image.className = "event_image";
  image.src = event.image;
  image.alt = event.title;
  image.loading = "lazy";

  image.onerror = function () {
    this.onerror = null;
    this.src = "https://placehold.co/600x340/e7edf0/212121?text=No+Image";
  };

  // Обёртка изображения нужна для значка поверх фото на экранах > 768px.
  const media = document.createElement("div");
  media.className = "event_media";
  media.append(image);

  // Контейнер с текстом
  const content = document.createElement("div");

  // Дата
  const date = document.createElement("p");
  date.className = "event_date";
  date.textContent = formatDate(event.date).toUpperCase();

  // Название мероприятия
  const title = document.createElement("h2");
  title.className = "event_title";
  title.textContent = event.title;

  // Описание
  const description = document.createElement("p");
  description.className = "event_description";
  description.textContent = event.description;

  // Категория и расстояние; у онлайн-событий — значок камеры.
  const meta = document.createElement("p");
  meta.className = "event_meta";
  meta.textContent =
    event.type === "offline" && Number.isFinite(event.distance)
      ? `${event.category} · ${event.distance} km`
      : event.category;

  if (event.type === "online") {
    const online = document.createElement("p");
    online.className = "event_online_label";

    const camera = document.createElement("img");
    camera.src = "assets/icons/camera.svg"; // Иконка уже используется в main.html
    camera.alt = "";
    camera.className = "events_online__icon";

    online.append(camera, document.createTextNode("Online Event"));

    // На десктопе показываем копию надписи поверх фотографии.
    const overlay = online.cloneNode(true);
    overlay.classList.add("event_online_overlay", "events_online");
    media.append(overlay);

    // На телефоне та же надпись остаётся под категорией.
    content.append(date, title, description, meta, online);
  } else {
    content.append(date, title, description, meta);
  }

  // Добавляем основные элементы
  // Количество участников
  if (typeof event.attendees === "number") {
    const attendees = document.createElement("p");

    attendees.className = "event_meta";

    attendees.textContent = `${event.attendees} attendees`;

    content.append(attendees);
  }

  // Собираем карточку
  article.append(media, content);

  return article;
}

/* ==============================================
   7. ФИЛЬТРАЦИЯ МЕРОПРИЯТИЙ
============================================== */

function renderEvents() {
  // Получаем значения всех фильтров
  const selectedType = typeFilter.value;
  const selectedDate = dateFilter.value;
  const selectedDistance = distanceFilter.value;
  const selectedCategory = categoryFilter.value;

  // Фильтруем мероприятия
  const filteredEvents = eventsStore.filter((event) => {
    // 1. Фильтр по типу
    const matchesType = !selectedType || event.type === selectedType;

    // 2. Фильтр по дате
    const matchesDate = !selectedDate || dateKey(event.date) === selectedDate;

    // 3. Фильтр по расстоянию
    // Онлайн-мероприятия не имеют физического расстояния
    const matchesDistance =
      !selectedDistance ||
      event.type === "online" ||
      event.distance <= Number(selectedDistance);

    // 4. Фильтр по категории
    const matchesCategory =
      !selectedCategory || event.category === selectedCategory;

    // Проверяем все условия
    return matchesType && matchesDate && matchesDistance && matchesCategory;
  });

  // Удаляем старые карточки
  eventsResults.replaceChildren();

  // Показываем количество результатов
  resultsCount.textContent = `${filteredEvents.length} ${
    filteredEvents.length === 1 ? "event" : "events"
  }`;

  // Если ничего не найдено
  if (filteredEvents.length === 0) {
    const message = document.createElement("p");
    message.className = "empty_results";
    message.textContent = "No events found. Try changing your filters.";

    eventsResults.append(message);
    return;
  }

  // Создаём новые карточки
  filteredEvents.forEach((event) => {
    eventsResults.append(createEventRow(event));
  });
}

/* ==============================================
   8. СОБЫТИЯ И ЗАПУСК ФИЛЬТРОВ
============================================== */

// Собираем все select в один массив
const filters = [typeFilter, dateFilter, distanceFilter, categoryFilter];

// Следим за изменением каждого фильтра
filters.forEach((filter) => {
  filter.addEventListener("change", renderEvents);
});

// Заполняем даты
populateDateFilter();

// Показываем все мероприятия при первой загрузке
renderEvents();

/* ==============================================
   9. ЗАКРЫТИЕ КАРТЫ
============================================== */

const dismissMapButton = document.getElementById("dismissMap");

const mapArea = document.querySelector(".map_area");

if (dismissMapButton && mapArea) {
  dismissMapButton.addEventListener("click", () => {
    mapArea.hidden = true;
  });
}
