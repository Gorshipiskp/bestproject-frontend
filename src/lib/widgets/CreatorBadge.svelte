<script lang="ts">
    import type {PersonType} from "../lib/types";
    import {PEOPLE} from "../lib/main_info";
    import "$lib/scss/widgets/creator_badge.scss";

    export let creator: string = "";

    if (!PEOPLE.hasOwnProperty(creator.toLowerCase())) {
        console.warn("Unknown creator: " + creator)
    }
    const creatorInfo: PersonType = PEOPLE[creator.toLowerCase()]
</script>

<div class="person_badge">
    <span>{creatorInfo.name}</span>

    <div class="on_hover_info">
        <span class="creator_name">{creatorInfo.name}</span>
        <span class="creator_description">{creatorInfo.description}</span>
        <img alt="Аватарка {creatorInfo.name}" class="creator_avatar" src="{creatorInfo.avatar}"/>
        <ul class="creator_links">
            {#each Object.entries(creatorInfo.links ?? {}) as [serviceName, link], i (i)}
                <li><a target="_blank" class="creator_link" href="{link}">{serviceName}</a></li>
            {/each}
        </ul>
    </div>
</div>
