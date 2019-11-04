export type ISetCombo = {
    combos: Combo[]
    weekdays: string[]
}

export type MuscleGroup = {
    id: number;
    text: string;
    workouts: (number[])[];
}

export type Exercise = {
    id: number;
    name: string;
    muscleGroups: MuscleGroup[];
}

export type Split = {
    id: number;
    text: string;
    subheading: string;
    combos: Combo[]
}

export type Combo = (MuscleGroup[])[]

export type ComboEvent = {
    comboIndex: number
}
export type SplitEvent = {
    splitIndex: number
}
export type WeekdayEvent = { weekdays: string[] }

export type IExercizer = {
    MUSCLE_GROUPS: MuscleGroup[]
    EXERCISES: Exercise[]
    SPLITS: Split[]
}