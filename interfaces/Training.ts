export interface ITraining{
    name:string|undefined,
    Userid:string,
    date:string,
    week:IWeek[],
    comment:string|null
}

export interface IWeek{
    exerciseId:string|undefined,
    date:string,
    numberOfSeries:number,
    numberOfReplication:number,
    weight:number,
    comment:string
}

export interface IAddExercise{
    id:string,
    name:string,
    comment:string|null,
}

