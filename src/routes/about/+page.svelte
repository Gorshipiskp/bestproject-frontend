<<<<<<< HEAD
<script lang="ts">
    import "$lib/scss/about.scss";
    import {onMount} from "svelte";
    import PlaceholderRect from "../../lib/widgets/PlaceholderRect.svelte";

    type ImagesExtensions = "jpg" | "jpeg" | "png";
    type ImagePath = `${string}.${ImagesExtensions}` | "";
    const possiblePhotos: ImagePath[] = [
        "photo_2025-07-12_21-03-01.jpg",
        "set-00482.jpg",
        "set-00094.jpg",
        "photo_2025-07-08_13-18-57.jpg",
        "photo_2025-05-24_16-28-02.jpg",
        "photo_2025-11-09_14-31-06_.jpg"
    ]

    let curPhoto: ImagePath = ""
    let curPhotoIndex: number | undefined

    let deltaDate = new Date() - new Date(2007, 6 - 1, 5)  // Нумерация месяца с нуля, а не единицы
    const curAge = deltaDate / 1000 / 3600 / 24 / 365.25

    onMount(() => {
        curPhotoIndex = Math.floor(Math.random() * (possiblePhotos.length - 1)) // -1, чтобы было без последней фотки (пасхалка)
        curPhoto = possiblePhotos[curPhotoIndex];
    });

    $: curPhoto = typeof curPhotoIndex === "number" ? possiblePhotos[curPhotoIndex] : "";
</script>

<div class="main_content">
    <h1 class="title_ahahaah_che_ti_tut_delaesh">Обо мне</h1>
    <div class="photo_of_me_yopta">
        {#if curPhoto === ""}
            <PlaceholderRect width="100%" height="700px"/>
        {:else}
            <figure class="photo_of_me_yeah"
                    on:click={() => curPhotoIndex = (curPhotoIndex + 1) % possiblePhotos.length}>
                <img importance="high" loading="eager"
                     src={"/itsme/" + curPhoto} alt="Фото меня"/>
                <figcaption>На фотографию можно кликнуть</figcaption>
            </figure>
        {/if}
    </div>
    <div class="text_about_me_suka">
        <h2>Опа, привет, меня зовут Никита</h2>

        <p>
            Мне {Math.floor(curAge)} лет, и я делаю разные проекты — от игровых серверов
            и телеграм-ботов до студенческих платформ и собственных сервисов.
            Это всегда вещи, которыми я сам бы хотел пользоваться.
            Люблю аккуратный, понятный и не мешающий думать код.
        </p>

        <p>
            Конкретной роли в разработке продукта у меня нет.
            Если задача интересная, могу быть кем угодно: продумывать архитектуру,
            разбираться в алгоритмах, общаться с людьми, собирать продукт целиком
            или закрывать странные пробелы, которые "вроде бы не моя зона ответственности".
        </p>

        <p>
            Больше всего мне нравится момент, когда система начинает жить сама:
            отдельные части делают свою работу почти независимо,
            а вместе получается сервис, которым кто-то реально пользуется.
            Наверное, поэтому мне ближе архитектура и проектирование,
            чем бесконечная полировка одной конкретной детали, хотя блеск важен для людей.
        </p>

        <p>
            Мои проекты сделаны в соло и сделаны добросовестно в меру навыков на момент создания.
            Я развиваю их постепенно, пробую разные решения,
            иногда экспериментирую, а потом оставляю только то,
            что прижилось и не мешает остальному. BestTvGU — один из таких проектов.
        </p>

        <p>
            При этом мне интересно работать и в команде.
            Опыт хакатона показал, что мне комфортно обсуждать идеи,
            рассуждать про архитектуру и приходить к решениям без лишнего напряжения даже с
            людьми, которых я никогда не видел прежде. Главное, чтобы они были готовы к нормальному диалогу
        </p>

        <p>
            Пишу на Lua, Python, JavaScript (+TypeScript), Svelte (+SvelteKit),
            Django и FastAPI.
            После поступления в ТвГУ добавились C и C++, но не на постоянке.
            Также немного касался Java, React и Unreal Engine 5.
        </p>

        <p>
            Этот сайт — скорее архив и точка сборки:
            место, где лежит всё, что я сделал,
            и куда можно заглянуть, чтобы понять,
            как я думаю и что умею.
        </p>
    </div>
</div>
=======
<script lang="ts">
    import "$lib/scss/about.scss";
    import {onMount} from "svelte";
    import PlaceholderRect from "../../lib/widgets/PlaceholderRect.svelte";

    type ImagesExtensions = "jpg" | "jpeg" | "png";
    type ImagePath = `${string}.${ImagesExtensions}` | "";
    const possiblePhotos: ImagePath[] = [
        "photo_2025-07-12_21-03-01.jpg",
        "set-00482.jpg",
        "set-00094.jpg",
        "photo_2025-07-08_13-18-57.jpg",
        "photo_2025-05-24_16-28-02.jpg",
    ]

    let curPhoto: ImagePath = ""
    let curPhotoIndex: number | undefined

    let deltaDate = new Date() - new Date(2007, 6 - 1, 5)  // Нумерация месяца с нуля, а не единицы
    const curAge = deltaDate / 1000 / 3600 / 24 / 365.25

    onMount(() => {
        curPhotoIndex = Math.floor(Math.random() * (possiblePhotos.length - 1)) // -1, чтобы было без последней фотки (пасхалка)
        curPhoto = possiblePhotos[curPhotoIndex];
    });

    $: curPhoto = typeof curPhotoIndex === "number" ? possiblePhotos[curPhotoIndex] : "";
</script>

<div class="main_content">
    <h1 class="title_ahahaah_che_ti_tut_delaesh">Обо мне</h1>
    <div class="photo_of_me_yopta">
        {#if curPhoto === ""}
            <PlaceholderRect width="100%" height="700px"/>
        {:else}
            <figure class="photo_of_me_yeah"
                    on:click={() => curPhotoIndex = (curPhotoIndex + 1) % possiblePhotos.length}>
                <img importance="high" loading="eager"
                     src={"/itsme/" + curPhoto} alt="Фото меня"/>
                <figcaption>На фотографию можно кликнуть</figcaption>
            </figure>
        {/if}
    </div>
    <div class="text_about_me_suka">
        <h2>Опа, привет, меня зовут Никита</h2>
        <p>Мне {Math.floor(curAge)} лет, и я создаю полезные и разнотипные проекты — от
            игровых серверов и телеграмм ботов до симуляторов эмерджентных систем и математических движков.
            Люблю строгий и чистый, гибкий и производительный код.</p>
        <p>Пишу на Lua, Python, JavaScript (+TypeScript), Svelte (+SvelteKit), Django, FastAPI. Ввиду поступления в ТвГУ
            теперь пишу на C и C++. Немного касался Java, React, Unreal Engine 5.</p>
    </div>
</div>
>>>>>>> origin/main
