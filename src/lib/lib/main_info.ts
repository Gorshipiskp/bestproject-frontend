import type {PeopleType, ProjectsInfoType} from "./types";
import {BestAccounts} from "./projects/bestaccounts";
import {BestStorage} from "./projects/beststorage";
import {BestSupport} from "./projects/bestsupport";
import {BestMemories} from "./projects/bestmemories";
import {BestRP} from "./projects/bestrp";
import {BestFetch} from "./projects/bestfetch";
import {BestTvGU} from "./projects/besttvgu";
import {TvGUDataHub} from "./projects/tvgu_data_hub";
import {BestBlockBlastFucker} from "./projects/bestblockblastfucker";

// Почему не `.json`? Потому что TS в IDE не считывает нормально литералы из JSON

export const PEOPLE: PeopleType = {
    "vertain": {
        "name": "Verta1n",
        "description": "Мой друг-музыкант, с которым мы иногда отдыхаем в играх и делаем совместные творческие проекты",
        "avatar": "https://yt3.googleusercontent.com/3gLMbK3FDnxfx_XkGwA0MkV-jK91R-Gn53t-0yMxxf_V5Ma5ggfaPlybRQuk9964MtfI1qcugA=s160-c-k-c0x00ffffff-no-rj",
        "links": {
            "Youtube": "https://youtube.com/@ivanezdarkholm",
            "Telegram-канал": "https://t.me/ivanezdrkhlm",
        }
    }
}


// `...` - Мелкий код
// i/.../i - Курсив
// НАЗВАНИЕ_ПРОЕКТА - Автоматически делает ссылку на страницу проекта

export const PROJECTS: ProjectsInfoType = {
    "besttvgu": BestTvGU,
    "bestaccounts": BestAccounts,
    "beststorage": BestStorage,
    "bestsupport": BestSupport,
    "bestrp": BestRP,
    "bestmemories": BestMemories,
    "bestfetch": BestFetch,
    "bestblockblastfucker": BestBlockBlastFucker,
    "tvgu_data_hub": TvGUDataHub
}
