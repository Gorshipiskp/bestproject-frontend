<script lang="ts">
    import "../app.scss";
    import Header from "../lib/widgets/Header.svelte";
    import {onMount} from "svelte";
    import {browser} from "$app/environment";
    import {curCSSVars} from "../lib/lib/stores";

    export function setCSSVars(vars: Record<string, string>): void {
        curCSSVars.update((value: Record<string, string>): Record<string, string> => {
            return {...value, ...vars}
        })
    }


    function changeHeightNWidth(newWidth: number, newHeight: number) {
        if (!browser) return

        setCSSVars({
            "--current-width": `${newWidth}`,
            "--current-height": `${newHeight}`,
        });
    }

    onMount(() => {
        window.addEventListener('resize', () => changeHeightNWidth(window.innerWidth, window.innerHeight));
        changeHeightNWidth(window.innerWidth, window.innerHeight);
    });
</script>

<svelte:head>
    <title>Проекты Gorshipisk</title>
</svelte:head>

<Header/>
<slot/>
