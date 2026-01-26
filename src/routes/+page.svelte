<script lang="ts">

    // Я знаю про `$lib`, но WebStorm это не знает
    import type {ProjectInfoType, ProjectSize} from "../lib/lib/types";
    import ProjectCard from "../lib/widgets/ProjectCard.svelte";
    import "../lib/scss/projects.scss";
    import {PROJECTS} from "../lib/lib/main_info";


    let projectsBySize: Record<ProjectSize, ProjectInfoType[]> = {
        "Main": [],
        "Big": [],
        "Medium": [],
        "Small": [],
        "Library": [],
        "File": [],
        "Idea": [],
    }

    for (const project of Object.values(PROJECTS)) {
        projectsBySize[project.size].push(project);
    }

    const projectsSizeInfo: Record<ProjectSize, { title: string, description: string }> = {
        "Main": {
            title: "Основные проекты",
            description: "Проекты в продакшене, которые активно используются и имеют практическую ценность",
        },
        "Big": {
            title: "Крупные проекты",
            description: "Крупные по архитектуре и объёму проекты, но не находящиеся в продакшене или не имеющие активных пользователей",
        },
        "Medium": {
            title: "Средние проекты",
            description: "Проекты средней технической сложности, обычно находящиеся в разработке или ограниченном использовании",
        },
        "Small": {
            title: "Маленькие проекты",
            description: "Небольшие по масштабу проекты, предназначенные для решения узких задач или экспериментов",
        },
        "Library": {
            title: "Библиотеки",
            description: "Вспомогательные проекты, предназначенные для повторного использования в других проектах или публики",
        },
        "File": {
            title: "Файлы",
            description: "Отдельные файлы или минимальные заготовки, не оформленные как самостоятельные проекты",
        },
        "Idea": {
            title: "Идеи",
            description: "Концепции и проектные заготовки без реализованного или завершённого кода",
        },
    };
</script>

<!-- todo: Добавить примечание по типу: "Если вы работодатель, то проекты ниже не так важны, как верхние" -->

<div class="main_content_projects">

    {#each Object.entries(projectsBySize) as [size, projects] (size)}
        {#if projects.length > 0}
            <div class="project_category_header">
                <span class="project_category_title">{projectsSizeInfo[size].title}</span>
                <span class="project_category_description">{projectsSizeInfo[size].description}</span>
            </div>

            <div class="projects_category">
                {#each projects as project (project.name)}
                    <ProjectCard {project}/>
                {/each}
            </div>
        {/if}
    {/each}
</div>
