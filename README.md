
- Превью: https://kseylo.github.io/ping-single-column/
## Установка:

Установка зависимостей
```
pnpm install
```

Запуск
```
pnpm dev
```

## Скриншоты:
### ПК:
![desktop](screenshots/desktop.jpeg)
### Планшет:
![tablet](screenshots/tablet.jpeg)
### Телефон:
![phone](screenshots/phone.jpeg)
## Технологии которые использовал:
- HTML
- Tailwindcss
- Typescript

## Проблемы с которыми столкнулся:
- Валидация сабмита формы средствами TS
  Решение к которому я пришел:
```html
<!-- Для формы указать атрибут novalidate -->
<form novalidate>
	
</form>
```
TS:
```typescript
const form = document.getElementById('email-form')  
const email = document.getElementById('email-input') as HTMLInputElement | null  
const error = document.getElementById('email-error')  

// Слушаем событие на каждое нажатие, проверяем если форма валидная, то убираем стили для ошибки
email?.addEventListener('input', function () {  
    if (email.validity.valid) {  
        error?.classList.add('invisible')  
        email?.classList.remove('border-secondary-red')  
    }  
})  

// Слушатель события на сабмит
form?.addEventListener('submit', function (event) {
	// Если форма невалидна, вызываем ф-ию showError
    if (!email?.validity.valid) {  
        showError()  
        event.preventDefault()  
    }  
})  

// Добавляет стили для ошибки и текстовый контент в зависимости от типа ошибки
function showError() {  
    if (error) {  
        email?.classList.add('border-secondary-red')  
        error.classList.remove('invisible')
        // Если инпут пустой  
        if (email?.validity.valueMissing) {  
            error.textContent =  
                'Whoops! It looks like you forgot to add your email'  
        }
        //  Если пользователь ввел не email  
        if (email?.validity.typeMismatch) {  
            error.textContent = 'Please provide a valid email address'  
        }  
    }  
}
```

- Использование цветов style.guide в Tailwindcss
```javascript
/** @type {import('tailwindcss').Config} */  
export default {  
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],  
    theme: {  
        extend: {  
            colors: {  
                primary: {  
                    blue: 'hsl(223, 87%, 63%)',  
                },  
                secondary: {  
                    blue: 'hsl(223, 100%, 88%)',  
                    red: 'hsl(354, 100%, 66%)',  
                },  
                neutral: {  
                    gray: 'hsl(0, 0%, 59%)',  
                    blue: 'hsl(209, 33%, 12%)',  
                },  
            },  
        },  
    },  
    plugins: [],  
}
```