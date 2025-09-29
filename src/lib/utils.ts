import { clsx, type ClassValue } from "clsx";
import { formatDistanceToNow } from "date-fns";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function getInitials(name: string): string {
    if (!name) return "";
    const nameArr = name.split(" ");

    if (nameArr.length === 1) return (name[0] + name[1]).toUpperCase();
    return (nameArr[0][0] + nameArr[1][0]).toUpperCase();
}

export function getFormattedDate(date: Date) {
    return formatDistanceToNow(new Date(date), {
        addSuffix: true,
    });
}

export function getWordColor(word: string) {
    const greenWords = ["active", "published", "completed", "normal"];
    const redWords = ["blocked", "reported"];
    const orangeWords = ["pending"];

    const lowerCaseWord = word.toLowerCase();
    if (greenWords.includes(lowerCaseWord)) return "text-primary-main";
    if (redWords.includes(lowerCaseWord)) return "text-error-800";
    if (orangeWords.includes(lowerCaseWord)) return "text-orange-100";
}
