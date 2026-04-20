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
 * Retorna dados junto com mensagem de sucesso
 * Message é obrigatória
 */
export const ok = async (data: any, message: string): Promise<HttpResponse> => {
    return {
        statusCode: 200,
        body: { data, message }
    };
};

/**
 * Helper que retorna uma resposta HTTP 204 (No Content)
 * Retorna mensagem de sucesso sem conteúdo
 */
export const noContent = async (message: string = "Sem conteúdo"): Promise<HttpResponse> => {
    return {
        statusCode: 204,
        body: { message }
    };
};

/**
 * Helper que retorna uma resposta HTTP 400 (Bad Request)
 * Retorna mensagem de erro
 */
export const badRequest = async (message: string): Promise<HttpResponse> => {
    return {
        statusCode: 400,
        body: { message }
    };
};

/**
 * Helper que retorna uma resposta HTTP 404 (Not Found)
 * Retorna mensagem de erro
 */
export const notFound = async (message: string): Promise<HttpResponse> => {
    return {
        statusCode: 404,
        body: { message }
    };
};

