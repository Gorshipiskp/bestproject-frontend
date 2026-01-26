<script lang="ts">
    import "../scss/widgets/tabs.scss"

    export let tabs: Record<string, InstanceType<HTMLElement>>

    let curIndex: number = 0

    function insertElement(el: HTMLElement, content: HTMLElement) {
        el.appendChild(content);
    }
</script>

<div class="tabs_wrapper">
    <div class="tabs_headers">
        {#each Object.keys(tabs) as tabKey, i (i)}
            <button class="tab" class:tab_active={i === curIndex} class:tab_inactive={i !== curIndex}
                    on:click={() => curIndex = i}>
                <span>{tabKey}</span>
            </button>
        {/each}
    </div>
    <div class="tabs_content">
        {#each Object.values(tabs) as tabElement, i (i)}
            {@const isDisplayed = i === curIndex ? "block" : "none"}

            <div class="content_wrapper" style="display: {isDisplayed}" use:insertElement={tabElement}></div>
        {/each}
    </div>
</div>
