export const addClasses = (element: any, classes: string[]): any => {
    const newElement = element
    if (newElement) {
        newElement.className = `${element.className} ${classes.join(' ')}`
    }
    return newElement
}

export const convertDateIntoRightFormat = (departureDate: string, returnDate: string): string => {
    const departureArray = departureDate.split(" - ")
    const returnArray = returnDate.split(" - ")
    let arrayOfDates = [departureArray[1], returnArray[1]]

    let newArray = arrayOfDates.map((val: any) => {
        return val.split("-").join("").slice(2)
    })

    return newArray.join("/")

}

export const chooseBackgroundColorAccordingToPrice = (el: number, max: number, min: number) => {
    if (el < min * 1.3) {
        return "rgb(158, 226, 158)"
    }
    if (el > max * 0.7) {
        return "rgb(245, 194, 175)"
    }
    if (el > min * 1.3 && el < max * 0.8) {
        return "RGB(192, 227, 235)"
    }
    return "white"
}

