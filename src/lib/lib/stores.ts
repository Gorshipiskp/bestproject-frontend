import type {Writable} from "svelte/store";
import {writable} from "svelte/store";
import {browser} from "$app/environment";

export const NONE_PROJECT: "NONE_PROJECT" = "NONE_PROJECT" as const;
export let curProject: Writable<string> = writable(NONE_PROJECT)
export let curCSSVars: Writable<Record<string, string>> = writable({});


if (browser) {
    curCSSVars.subscribe((value: Record<string, string>): void => {
        if (!browser) return

        document.documentElement.style.cssText = Object.entries(value).map(
            ([key, value]: [string, string]): string => `${key}:${value}`
        ).join(';');
    })
}
