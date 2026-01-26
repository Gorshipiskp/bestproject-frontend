<script lang="ts">
    import "$lib/scss/project_page/project_additional_info.scss";
    import type {ProjectInfoType} from "../../lib/types";
    import ProjectTechnologiesBlock from "./ProjectTechnologiesBlock.svelte";
    import AdditionalSmallInfo from "./AdditionalSmallInfo.svelte";
    import ProjectTags from "./ProjectTags.svelte";

    export let projectInfo: ProjectInfoType;
    export let accentColor: string;
    const backgroundImage: string = `linear-gradient(#232323, #232323), ${accentColor}`
</script>

<div class="additional_info_content" style="background-image: {backgroundImage}">
    <h2 style="background: {accentColor}">Техническая информация</h2>
    <div class="project_technologies">
        <ProjectTechnologiesBlock technologies={projectInfo.technologies?.backend} title="Backend"/>
        <ProjectTechnologiesBlock technologies={projectInfo.technologies?.frontend} title="Frontend"/>
        <ProjectTechnologiesBlock technologies={projectInfo.technologies?.infrastructure} title="Infrastructure"/>
        <ProjectTechnologiesBlock technologies={projectInfo.technologies?.design} title="Design"/>
    </div>

    <AdditionalSmallInfo projectInfo={projectInfo}/>
    <ProjectTags tags={projectInfo.tags}/>
</div>
