export const getItems = () =>{
    const store = localStorage.getItem('store')
    if(store){
        const values = JSON.parse(store)
        return values.theme
    }
    return false
}

export const setItems = (value) =>{
    const data = JSON.stringify({theme:value})
    localStorage.setItem('store',data)
}

