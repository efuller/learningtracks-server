export default function(err) {
    const result = {};
    for (const prop in err) {
        result.prop = err[prop];
    }
    return result;
};