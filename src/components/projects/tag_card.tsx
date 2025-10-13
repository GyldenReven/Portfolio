// Update the import path to the correct location of Tag type
import type { Tag } from "../../types/tag";
import gear from "../../assets/gear.svg";

type TagCardProps = {
    tag: Tag;
};

function TagCard({ tag }: TagCardProps) {
    return (
        <div className="flex items-center pl-2">
            <img
            src={gear}
            alt='Gear icon'
            className="w-4 h-4 mr-1 mt-1 rounded-full"
            style={{ backgroundColor: tag.color }}
            />
            <span>
            {tag.name}
            </span>
        </div>
    );
}

export default TagCard;
