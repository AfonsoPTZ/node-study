/**
 * Interface padrão para respostas HTTP
 * Sempre retorna um statusCode e um body
 */
export interface HttpResponse {
    statusCode: number;
    body: any;
}

/**
 * Helper que retorna uma resposta HTTP 200 (OK)
 * Usado quando a operação foi bem-sucedida
 */
export const ok = async (data: any): Promise<HttpResponse> => {
    return {
        statusCode: 200,
        body: data
    };
};

/**
 * Helper que retorna uma resposta HTTP 204 (No Content)
 * Usado quando a operação foi bem-sucedida mas não há conteúdo para retornar
 */
export const noContent = async (): Promise<HttpResponse> => {
    return {
        statusCode: 204,
        body: null
    };
};

/**
 * Helper que retorna uma resposta HTTP 400 (Bad Request)
 * Usado quando há erro na validação ou dados inválidos
 */
export const badRequest = async (error: string): Promise<HttpResponse> => {
    return {
        statusCode: 400,
        body: { error }
    };
};

/**
 * Helper que retorna uma resposta HTTP 404 (Not Found)
 * Usado quando o recurso solicitado não foi encontrado
 */
export const notFound = async (error: string): Promise<HttpResponse> => {
    return {
        statusCode: 404,
        body: { error }
    };
};

