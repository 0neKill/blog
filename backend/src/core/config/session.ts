export type SessionConfiguration = {
    total: number,
}
export const getSessionConfiguration = (): SessionConfiguration => ({
    total: Number(process.env.SESSION_TOTAL),
});