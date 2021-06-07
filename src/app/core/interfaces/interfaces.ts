export interface Schedule {
    id: number
    departureDay: string
    arrivalDay: string
    departureDate: string
    arrivalDate: string
    routeId: RouteInterface
    locomotiveId: Locomotive
}

export interface Employee {
    id: number
    fullName: string
    age: number
    brigadeId: {
        departmentId: {
            id: number
            region: string
        }
        locomotiveId: {
            id: number,
            numberWagons: number,
            type: string,
            condition: string
        }
        type: string
    }
    categoryId: {
        id: number
        name: string
        function: string
    }
    childrenNumber: number
    gender: string
    salary: number
    skills: string
    town: string
}

export interface RouteInterface {
    finalDestination: string
    id: number
    initialDestination: string
    mainStations: string
    race: string
}

export interface Locomotive {
    id: number
    numberWagons: number
    type: string
    condition: string
    prepare?: {
        id: number
        service: string
        technical: string
    }
    repair?: {
        id: number
        kind: string
    }
}

export interface Passenger {
    id: number
    weightGoods: number
    phone: string
    fullName: string
    luggageCompartment: string
    ticketId: {
        id: number
        price: number
        purchaseMethod: string
        ticketStatus: string
    }
}
