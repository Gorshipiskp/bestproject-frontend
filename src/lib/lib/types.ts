export type ProjectTagsDevelopmentType = "Production" | "In Progress" | "Planning" | "Archived" | "Frozen"
export type RoadmapDateType = `20${number}${number}` | `20${number}${number} Q${1 | 2 | 3 | 4}` | "Будущее"
export type RoadmapType = Record<RoadmapDateType, [target: string, isCompleted: boolean][]>
export type FeaturesThingsType = Record<string, { featureName: string, description: string[] }>

export type ProjectSize = "Idea" | "File" | "Library" | "Small" | "Medium" | "Big" | "Main"
export type RGB = [R: number, G: number, B: number]
export type ProjectGradientType = [from: RGB, to: RGB]
export type ProjectImageType = { src: string, description: string }
export type DescriptionType = Record<string, string[]>
export type LicenseType = "MIT" | "Apache 2.0" | "LGPL" | "GNU GPL" | "CC0" | "Private" | "Unlicensed"
export type MonetizeType = "No" | "Yes" | "Planned" | "Freemium"

export type PersonType = { name: string, description: string, links?: Record<string, string>, avatar?: string }
export type PeopleType = Record<string, PersonType>

export type ProjectInfoType = {
    available: boolean,
    close_year: number | false,
    creators: string[],
    description: DescriptionType,
    description_short: string,
    display_name: string,
    features: FeaturesThingsType,
    github_link: `https://${string}` | false,
    gradient: ProjectGradientType,
    license: LicenseType,
    media?: {
        logo?: string,
        images?: ProjectImageType[],
        videos?: string[]
    },
    monetized: MonetizeType,
    name: string,
    prehistory: string[],
    release_year: number | false,

    roadmap: RoadmapType | false,
    size: ProjectSize,
    stack: string[],
    tag_development: ProjectTagsDevelopmentType,
    tags: string[],
    technologies?: {
        backend?: string[],
        frontend?: string[],
        design?: string[],
        infrastructure?: string[]
    },
    using: string,
    website_link: `https://${string}` | false
}

export type ProjectsInfoType = Record<string, ProjectInfoType>
