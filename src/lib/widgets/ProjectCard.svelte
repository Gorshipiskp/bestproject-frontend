<script lang="ts">

    import type {ProjectInfoType, ProjectSize} from "../lib/types";
    import "../scss/project_card.scss"
    import {goto} from "$app/navigation";
    import {constructProjectGradient} from "../lib/misc";

    export let project: ProjectInfoType


    const sizesWithoutLogo: ProjectSize[] = ["Library", "Idea", "File"];

    if (!project) {
        throw new Error("Project is not defined (ProjectCard.svelte)");
    }

    const gradient: string = constructProjectGradient(project.gradient)


    console.log(project.name, sizesWithoutLogo.includes(project.size))
</script>


<div class="project_card" class:no_logo={sizesWithoutLogo.includes(project.size)} on:click={() => goto(`/projects/${project.name}`, {replaceState: false, noScroll: false})}

     role="button"
     style="background: {gradient}">
    {#if project.media?.logo}
        <div class="project_card_logo">
            <img src="/projects/{project.name}/{project.media.logo}" alt="Логотип {project.name}"/>
        </div>
    {/if}


    <h2 class="project_card_title">{project.display_name}</h2>
    <span class="project_card_description">{project.description_short}</span>
</div>
