import {MuscleGroup} from "@/types";
import {MuscleGroups} from "@/lib/MuscleGroups";

export function getMuscleGroupByText(text: string): MuscleGroup {
    const key = `exercizer.muscleGroups.${text}`;

    return MuscleGroups.filter(({text}) => text === key)[0];
}