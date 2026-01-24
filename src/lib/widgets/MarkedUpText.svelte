<<<<<<< HEAD
<script lang="ts">
    import type {MarkedUpTextType} from "../lib/misc";
    import {markupText} from "../lib/misc";
    import "$lib/scss/widgets/markedup_text.scss";
    import {curProject} from "../lib/stores";
    import {PROJECTS} from "../lib/main_info";

    export let textToMarkup: string | string[] = "";
    export let defaultTextTag: "code" | "span" = "span";
    export let wrappers: Record<string, [prefix: string, suffix: string]> = {};

    const markedText: MarkedUpTextType | MarkedUpTextType[] = Array.isArray(textToMarkup) ? textToMarkup.map(markupText) : markupText(textToMarkup);

    function getProjectNameByDisplayName(displayName: string): string {
        return Object.values(PROJECTS).find((project) => project.display_name.toLowerCase() === displayName.toLowerCase())?.name ?? "";
    }
</script>

{#each markedText as {type, text}, i (i)}
    {@const wrap = wrappers[type] ?? wrappers["all"] ?? ["", ""]}
    {@const wrappedText = `${wrap[0]}${text}${wrap[1]}`}

    {#if type === "code"}
        <code class="markup_code">{wrappedText}</code>
    {:else if type === "project_reference"}
        {@const isCurProject = wrappedText.toLowerCase() === $curProject.toLowerCase()}

        {#if isCurProject}
            <a style="text-decoration: underline" target="_blank">
                <code>{wrappedText}</code>
            </a>
        {:else}
            <a href={`/projects/${getProjectNameByDisplayName(text)}`} target="_blank">
                <code>{wrappedText}</code>
            </a>
        {/if}
    {:else if type === "italic"}
        <i>{wrappedText}</i>
    {:else if type === "text"}
        {#if defaultTextTag === "code"}
            <code>{wrappedText}</code>
        {:else}
            <span>{wrappedText}</span>
        {/if}
    {:else}
        {@debug type, text}
    {/if}
{/each}
=======
<script lang="ts">
    import type {MarkedUpTextType} from "../codelib/misc";
    import {markupText} from "../codelib/misc";
    import "$lib/scss/widgets/markedup_text.scss";
    import {curProject} from "../codelib/stores";

    export let textToMarkup: string | string[] = "";
    export let defaultTextTag: "code" | "span" = "span";
    export let wrappers: Record<string, [prefix: string, suffix: string]> = {};

    const markedText: MarkedUpTextType | MarkedUpTextType[] = Array.isArray(textToMarkup) ? textToMarkup.map(markupText) : markupText(textToMarkup);
</script>

{#each markedText as {type, text}, i (i)}
    {@const wrap = wrappers[type] ?? wrappers["all"] ?? ["", ""]}
    {@const wrappedText = `${wrap[0]}${text}${wrap[1]}`}

    {#if type === "code"}
        <code class="markup_code">{wrappedText}</code>
    {:else if type === "project_reference"}
        {@const isCurProject = wrappedText.toLowerCase() === $curProject.toLowerCase()}

        {wrap[0]}
        {#if isCurProject}
            <a style="text-decoration: underline" target="_blank">
                <code>{text}</code>
            </a>
        {:else}
            <a href={`/projects/${text}`} target="_blank">
                <code>{text}</code>
            </a>
        {/if}
        {wrap[1]}
    {:else if type === "italic"}
        <i>{wrappedText}</i>
    {:else if type === "text"}
        {#if defaultTextTag === "code"}
            <code>{wrappedText}</code>
        {:else}
            <span>{wrappedText}</span>
        {/if}
    {:else}
        {@debug type, text}
    {/if}
{/each}
>>>>>>> origin/main
