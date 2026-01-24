import type {PageLoad} from './$types';
import {curProject} from "../../../lib/lib/stores";

export const load: PageLoad = ({params}): { project: string } => {
    curProject.set(params.slug.toLowerCase());

    return {"project": params.slug.toLowerCase()};
};
