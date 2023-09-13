export function toBase64(file: File) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = () => resolve(reader.result)
        reader.onerror = (error) => reject(error)
    })
}

export function parsearErroresApi(response: any): string[] {
    const resultado: string[] = []
    if (response.error) {
        if (typeof response.error === 'string') {
            resultado.push(response.error)
        } else if (Array.isArray(response.error)) {
            response.error.forEach((valor: any) => { resultado.push(valor.description) })
        } else {
            const mapErrores = response.error.errors
            const entradas = Object.entries(mapErrores)
            //console.log(entradas)
            entradas.forEach((arreglo: any[]) => {
                //console.log(arreglo[0])
                const campo = arreglo[0]
                //console.log(arreglo[1])
                arreglo[1].forEach((mensajeDeError: string) => {
                    resultado.push(campo + ": " + mensajeDeError)
                })
            })
        }
    }
    //console.log(resultado)
    return resultado
}

export function formatearFecha(date: Date) {
    date = new Date(date);
    const formato = new Intl.DateTimeFormat('en', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
    });

    const [
        { value: month }, ,
        { value: day }, ,
        { value: year }
    ] = formato.formatToParts(date);

    return `${year}-${month}-${day}`;
}