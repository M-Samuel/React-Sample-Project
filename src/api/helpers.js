
export async function fetchApi(fetchFunc, dispatchRequestFunc, dispatchReceivingFunc){
    dispatchRequestFunc();
    const response = await fetchFunc()
    const value = {
        okValue: null,
        badRequestValue: null,
        errorValue: null
    };
    if(response.ok)
        value.okValue = await response.json()
    else{
        const error = await response.json()
        if(response.status === 400 && Array.isArray(error))
            value.badRequestValue = error
        else
            value.errorValue = error
    }

    dispatchReceivingFunc(value);
}