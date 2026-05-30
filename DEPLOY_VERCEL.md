# Развёртывание на Vercel

## Шаг 1: Установить Vercel CLI

```bash
npm install -g vercel
```

## Шаг 2: Залогиниться в Vercel

```bash
vercel login
```

## Шаг 3: Развернуть проект

```bash
# Перейти в папку проекта
cd C:\discrimination-platform

# Развернуть
vercel
```

## Шаг 4: Подключить базу данных

Vercel не поддерживает PostgreSQL напрямую. Используйте облачные сервисы:

### Вариант 1: Railway (рекомендуется)
1. Зарегистрироваться на https://railway.app
2. Создать PostgreSQL базу
3. Скопировать connection string
4. Добавить в Vercel переменные окружения

### Вариант 2: Supabase
1. Зарегистрироваться на https://supabase.com
2. Создать проект
3. Получить PostgreSQL URL
4. Добавить в Vercel

### Вариант 3: AWS RDS
1. Создать RDS PostgreSQL instance
2. Получить connection string
3. Добавить в Vercel

## Шаг 5: Добавить переменные окружения в Vercel

```bash
vercel env add DB_HOST
vercel env add DB_PORT
vercel env add DB_USER
vercel env add DB_PASSWORD
vercel env add DB_NAME
vercel env add JWT_SECRET
```

Или через панель Vercel:
- Перейти на https://vercel.com/dilshodnovabalance-4721s-projects
- Settings → Environment Variables
- Добавить переменные

## Шаг 6: Развернуть с переменными

```bash
vercel --prod
```

---

## Локально (для тестирования):

```bash
cd C:\discrimination-platform

# Запустить как обычно
docker-compose up -d

# Открыть
http://localhost:3001
```

---

## Проблемы и решения

### "Cannot find module"
```bash
npm install
cd frontend
npm install
```

### "Build failed"
```bash
npm run build
```

### "Database connection error"
Проверить переменные окружения в Vercel Settings

---

## Дополнительно

Для production рекомендуется:
- ✅ Использовать HTTPS
- ✅ Добавить SSL сертификат (автоматически на Vercel)
- ✅ Включить CORS
- ✅ Настроить rate limiting
- ✅ Добавить мониторинг
