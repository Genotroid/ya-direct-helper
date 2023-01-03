export interface ICampaign {
    id: number;
    name: string;
    status: "ACCEPTED" | "DRAFT" | "MODERATION" | "REJECTED" | "UNKNOWN";
    statistics: {
        clicks: number,
        impressions: number
    };
    client: string
}
