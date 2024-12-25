export interface Task {
    id: number;
    title: string;
    description: string;
    dueDate: Date | string;
    completed: boolean;
}