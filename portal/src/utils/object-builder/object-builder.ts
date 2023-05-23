export class ObjectBuilder {
    private data: Record<string, any>;

    constructor() {
        this.data = {}
    }

    build() {
        return this.data;
    }

    add(newData: Record<string, any> | any) {
        if(!newData || !Object.keys(newData).length) return this;

        this.data = {
            ...this.data,
            ...newData
        };

        return this;
    }
}