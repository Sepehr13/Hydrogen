export interface HydrogenResponse<T> {
    data: T;
    status: number;
    statusText: string
}