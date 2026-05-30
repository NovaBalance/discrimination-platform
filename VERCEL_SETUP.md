# БЫСТРОЕ РАЗВЁРТЫВАНИЕ НА VERCEL

## Способ 1: Через GitHub (самый простой) ⭐

### Шаг 1: Создать GitHub репозиторий

```bash
cd C:\discrimination-platform

# Инициализировать Git
git init
git add .
git commit -m "Initial commit: AI Discrimination Lawsuit Platform"

# Создать на GitHub (https://github.com/new)
git remote add origin https://github.com/YOUR_USERNAME/discrimination-platform.git
git branch -M main
git push -u origin main
```

### Шаг 2: Подключить к Vercel

1. Перейти на https://vercel.com/dilshodnovabalance-4721s-projects
2. Нажать **"Add New..."** → **"Project"**
3. Выбрать репозиторий **"discrimination-platform"**
4. Vercel автоматически обнаружит конфигурацию
5. Нажать **"Deploy"**

### Шаг 3: Добавить переменные окружения

В Vercel Dashboard:
1. Перейти в Settings проекта
2. Environment Variables
3. Добавить:

```
DB_HOST = your-railway-db-host
DB_PORT = 5432
DB_USER = postgres
DB_PASSWORD = your-password
DB_NAME = discrimination_db
JWT_SECRET = your-secret-key-here
```

### Шаг 4: Получить БД

**Используйте Railway для PostgreSQL:**

1. Зайти на https://railway.app
2. Создать новый проект
3. Добавить PostgreSQL
4. Скопировать connection string
5. Добавить в Vercel Environment Variables

---

## Способ 2: Через Vercel CLI

```bash
# Установить Vercel CLI
npm install -g vercel

# Логиниться
vercel login

# Развернуть
cd C:\discrimination-platform
vercel --prod
```

---

## Способ 3: Через Docker на Railway

1. Зайти на https://railway.app
2. Нажать **"New Project"** → **"Deploy from GitHub"**
3. Выбрать репозиторий
4. Railway автоматически обнаружит `docker-compose.yml`
5. Развернуть!

---

## ✅ Что получится

После развёртывания ваше приложение будет доступно на:

```
https://discrimination-platform.vercel.app
```

Или на вашем custom домене:
- Добавить домен в Vercel Settings
- Обновить DNS записи

---

## 🔗 Полезные ссылки

- Vercel Dashboard: https://vercel.com/dilshodnovabalance-4721s-projects
- Railway: https://railway.app
- GitHub: https://github.com/new
- Supabase (БД): https://supabase.com

---

## 💾 Развёртывание БД

Используйте Railway + PostgreSQL:

```
1. railway.app → New Project → PostgreSQL
2. Скопировать DATABASE_URL
3. В Vercel Settings добавить переменные
4. Готово!
```

---

## 📝 Команды для развёртывания

```bash
# Инициализировать Git
cd C:\discrimination-platform
git init
git add .
git commit -m "AI Discrimination Lawsuit Platform"

# Создать репозиторий на GitHub и push
git remote add origin https://github.com/YOUR_USERNAME/discrimination-platform.git
git push -u origin main

# Затем просто connect к Vercel через UI
```

---

**Готово! Ваша платформа будет live за 5 минут! 🚀**
