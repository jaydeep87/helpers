const removeENUKeys = (o) => {
    Object.keys(o).forEach(k => (o[k] === undefined || o[k] === null || o[k] === '') && delete o[k]);
    return o;
};

const getDuplicateData = (data) => {
    return data.filter((item, index, self) => {
        item.errorMessage = 'Duplicate record, line No. : ' + (index + 2);
        return index !== self.findIndex((e) => (
            e.cmatId === item.cmatId && e.domainName === item.domainName && e.partyType === item.partyType
        ))
    });
}

const getUniqueData = (data) => {
    return data.filter((item, index, self) =>
        index === self.findIndex((e) => (
            e.cmatId === item.cmatId && e.domainName === item.domainName && e.partyType === item.partyType
        )));
}
