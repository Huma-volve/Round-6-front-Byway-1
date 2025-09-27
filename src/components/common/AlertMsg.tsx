import { AlertCircleIcon } from "lucide-react";
import { Alert, AlertTitle } from "../ui/alert";

type AlertMsgProps = {
    message: string;
    className?: string;
};

function AlertMsg({ message, className }: AlertMsgProps) {
    return (
        <Alert
            variant="destructive"
            className={`w-fit border-0 p-0 text-error-800 font-semibold ${className}`}
        >
            <AlertCircleIcon />
            <AlertTitle>{message}</AlertTitle>
        </Alert>
    );
}

export default AlertMsg;
