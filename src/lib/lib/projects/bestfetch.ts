import type {ProjectInfoType} from "../types";

export const BestFetch: ProjectInfoType = {
    "available": true,
    "close_year": false,
    "creators": [],
    "description": {
        "Основное": [
            "BestFetch — это типобезопасная обёртка над стандартным `fetch`, написанная на `TypeScript` и предназначенная для сложных frontend-приложений i/(Пока что недоделана, но да ладно)/i.",
            "Проект создавался как инфраструктурная библиотека для решения проблем масштабирования сетевого слоя, повторного использования логики запросов и строгой типизации."
        ],
        "Типизация": [
            "Тип результата запроса выводится из типа конвертации ответа и возвращаемого значения `onSuccess`.",
            "При необходимости тип результата может быть явно задан через дженерики, так что с типизацией будет всё ок."
        ],
        "Архитектура": [
            "Проект имеет чёткое разделение ответственности между core-логикой, утилитами и публичным API.",
            "BestFetch не привязан к конкретному фреймворку и не использует сторонние библиотеки"
        ]
    },
    "description_short": "Типобезопасная обёртка над fetch с поддержкой middleware, retry-логики и централизованной обработки запросов",
    "display_name": "BestFetch",
    "features": {
        "requests": {
            "featureName": "HTTP-запросы",
            "description": [
                "Поддержка всех основных HTTP-методов (`GET`, `POST`, `PUT`, `PATCH`, `DELETE`).",
                "Единый внутренний механизм выполнения запросов."
            ]
        },
        "callbacks": {
            "featureName": "Callbacks-система",
            "description": [
                "Разделение обработки ответа на `onSuccess`, `onError` и `onNetworkError`.",
                "Каждый коллбэк может управлять повторными попытками запроса. Можно также задавать дефолтные, которые будут срабатывать, если при запросе не будут указаны иные"
            ]
        },
        "retry": {
            "featureName": "Retry-механизм",
            "description": [
                "Автоматические повторные попытки запросов с возможностью настройки количества попыток, стратегии задержки и джиттером.",
                "Поддержка `Retry-After` и настройки кодов ответа."
            ]
        },
        "middlewares": {
            "featureName": "Middleware",
            "description": [
                "Поддержка цепочки middleware с управляемым порядком выполнения.",
                "Возможность динамического подключения и отключения middleware.",
                "Пока есть лишь middleware, который формирует запрос i/(модифицирует request перед отправкой)/i"
            ]
        },
        "typing": {
            "featureName": "Типобезопасность",
            "description": [
                "Глубокая интеграция с TypeScript.",
                "Можно указать, какие данные приходят с эндпоинта и как их нужно обработать"
            ]
        }
    },
    "github_link": "https://github.com/Gorshipiskp/bestfetch",
    "gradient": [
        [70, 110, 235],
        [100, 160, 235]
    ],
    "license": "MIT",
    "monetized": "No",
    "name": "bestfetch",
    "prehistory": [
        "Идея проекта появилась в процессе разработки BestTvGU.",
        "Стандартный `fetch` и сторонние библиотеки не давали достаточного контроля над типами и повторным использованием логики.",
    ],
    "release_year": 2025,
    "roadmap": false,
    "size": "Library",
    "stack": [
        "TypeScript"
    ],
    "tag_development": "Production",
    "tags": [
        "TypeScript",
        "HTTP",
        "Fetch",
        "Middleware",
        "Retry",
        "Callbacks",
        "Strong Typing"
    ],
    "technologies": {
        "frontend": [
            "TypeScript",
            "Fetch API",
            "AbortController",
        ],
        "design": [],
        "infrastructure": []
    },
    "using": "Используется как внутренняя библиотека в нескольких проектах",
    "website_link": false
}
