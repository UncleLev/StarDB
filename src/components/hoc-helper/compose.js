const compose = (...fun) => (comp) => {
    return fun.reduceRight((prevValue,f)=>f(prevValue),comp);
};

export default compose;