export interface HttpResponse {

    statusCode: number;
    body: any;
    
}


const ok = async (data: any, message: string) : Promise<HttpResponse> => {

    return {

        statusCode: 200,
        body: { data, message }
    };
};

const noContent = async (message: string = "Sem conteúdo"): Promise<HttpResponse> => {

        return {

        statusCode: 200,
        body: { message }
    };
};


const badRequest = async ( message: string) : Promise<HttpResponse> => {

    return {

        statusCode: 400,
        body: { message }
    };
};

const notFound = async ( message: string) : Promise<HttpResponse> => {

    return {

        statusCode: 404,
        body: { message }
    };
};

export { ok, noContent, badRequest, notFound }