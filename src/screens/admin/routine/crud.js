class crudList {
    constructor (initialValues) {
        this.list = initialValues;
    }

    update(element) {
        if (element.id) {
            return this.list.map(item => {
                if (item.id === element.id) return value;
                return item;
            });
        }
        return this.list.push(element)
    }

    remove(element) {
        return this.list.filter(item => item.id !== element.id)
    }

}

export default crudList;