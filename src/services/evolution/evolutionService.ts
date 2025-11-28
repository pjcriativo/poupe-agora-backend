import { evolutionAPI } from "./evolutionClient";
import { env } from "../../config/env";
import { SendTextPayload, SendMediaPayload } from "./evolutionTypes";

export const evolutionService = {
    async sendText({ number, text }: SendTextPayload) {
        const url = `/message/sendText/${env.EVOLUTION_INSTANCE_NAME}`;

        const response = await evolutionAPI.post(url, {
            number,
            text,
        });

        return response.data;
    },

    async sendMedia({ number, caption, base64, mimetype }: SendMediaPayload) {
        const url = `/message/sendMedia/${env.EVOLUTION_INSTANCE_NAME}`;

        const response = await evolutionAPI.post(url, {
            number,
            caption,
            base64,
            mimetype,
        });

        return response.data;
    },

    async getStatus() {
        const url = `/instance/status/${env.EVOLUTION_INSTANCE_NAME}`;
        const response = await evolutionAPI.get(url);
        return response.data;
    },

    async getQRCode() {
        const url = `/instance/qr/${env.EVOLUTION_INSTANCE_NAME}`;
        const response = await evolutionAPI.get(url);
        return response.data;
    },

    async restartInstance() {
        const url = `/instance/restart/${env.EVOLUTION_INSTANCE_NAME}`;
        const response = await evolutionAPI.get(url);
        return response.data;
    }
};
