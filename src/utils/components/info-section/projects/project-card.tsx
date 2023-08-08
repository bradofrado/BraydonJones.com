import { ProjectItem } from "~/utils/types/project"
import { BaseCard } from "../base-card"
import Image from "next/image"

export type ProjectCardProps = {
    item: ProjectItem
}
export const ProjectCard = ({item}: ProjectCardProps) => {
    return <>
        <BaseCard title={item.title} description={item.description} link={item.link} tags={item.tags}>
            <img src={item.image} alt="alt"/>
        </BaseCard>
    </>
}