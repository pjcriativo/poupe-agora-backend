export interface SendTextPayload {
    number: string;
    text: string;
}

export interface SendMediaPayload {
    number: string;
    caption?: string;
    base64: string;
    mimetype: string;
}

export interface EvolutionStatus {
    instance: string;
    status: "connected" | "disconnected" | "loading";
    qrcode?: string;
}
