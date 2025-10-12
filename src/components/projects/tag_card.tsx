// Update the import path to the correct location of Tag type
import type { Tag } from "../../types/tag";

type TagCardProps = {
    tag: Tag;
};

function TagCard({ tag }: TagCardProps) {
    return (
        <div className="flex items-center pl-2">
            <span 
                className="rounded-lg pl-2 pr-2 text-white text-sm bg-ctp-base font-medium"
                style={{ border: `2px solid ${tag.color}` }}
            >
                {tag.name}
            </span>
        </div>
    );
}

export default TagCard;
