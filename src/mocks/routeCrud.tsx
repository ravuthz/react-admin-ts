function routeList(resource: string) {
    return (schema: any, request: any) => {
        return schema[resource].all();
    }
}

function routeFind(resource: string) {
    return (schema: any, request: any) => {
        let id = request.params.id;
        return schema[resource].find(id);
    }
}

function routeSave(resource: string) {
    return (schema: any, request: any) => {
        let attrs = JSON.parse(request.requestBody);
        let id = request.params.id;
        if (id) {
            let entity = schema[resource].find(id);
            return entity.update(attrs);
        }
        return schema[resource].create(attrs);
    }
}

function routeDelete(resource: string) {
    return (schema: any, request: any) => {
        let id = request.params.id;
        let entity = schema[resource].find(id);
        return entity.destroy();
    }
}

export {
    routeList,
    routeFind,
    routeSave,
    routeDelete
}

export default function (prefix: string, resource: string) {

};