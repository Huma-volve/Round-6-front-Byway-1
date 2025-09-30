import { Save, X } from "lucide-react";

type EditActionsProps = {
    rowId: number;
    onCancel: () => void;
    onSave: (rowId: number) => void;
};

function EditActions({ rowId, onCancel, onSave }: EditActionsProps) {
    return (
        <div className="flex items-center justify-center gap-2">
            <button
                className="text-error-800 cursor-pointer hover:scale-110 transition-all"
                title="Cancel"
                onClick={onCancel}
            >
                <X size={20} />
            </button>
            <button
                className="text-green-500 cursor-pointer hover:scale-110 transition-all"
                title="Save"
                onClick={() => onSave(rowId)}
            >
                <Save size={20} />
            </button>
        </div>
    );
}
export default EditActions;
