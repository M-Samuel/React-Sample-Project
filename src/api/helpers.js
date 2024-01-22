
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
    else if(response.status === '400')
        value.badRequestValue = await response.json()
    else
        value.errorValue = await response.json()

    dispatchReceivingFunc(value);
}