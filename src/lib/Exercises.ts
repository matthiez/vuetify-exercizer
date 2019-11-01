import {Exercise} from "@/types";
import {getMuscleGroupByText} from "@/lib/getMuscleGroupByText";

export const Exercises: Exercise[] = [
    {
        id: 1,
        name: 'exercizer.exercises.seatedLatRaise',
        muscleGroups: [getMuscleGroupByText('back')]
    },
    {
        id: 2,
        name: 'exercizer.exercises.bentOverRow',
        muscleGroups: [getMuscleGroupByText('back')],
    },
    {
        id: 3, name: 'exercizer.exercises.standingLatRaise',
        muscleGroups: [getMuscleGroupByText('back')],
    },
    {
        id: 4,
        name: 'exercizer.exercises.tBarRow',
        muscleGroups: [getMuscleGroupByText('back')]
    },
    {
        id: 5,
        name: 'exercizer.exercises.dumbbellBenchPress',
        muscleGroups: [
            getMuscleGroupByText('chest'),
            getMuscleGroupByText('triceps'),
        ]
    },
    {
        id: 6,
        name: 'exercizer.exercises.benchPress',
        muscleGroups: [
            getMuscleGroupByText('chest'),
            getMuscleGroupByText('triceps'),
        ]
    },
    {
        id: 7,
        name: 'exercizer.exercises.chins',
        muscleGroups: [getMuscleGroupByText('back')]
    },
    {
        id: 8,
        name: 'exercizer.exercises.deadlift',
        muscleGroups: [
            getMuscleGroupByText('back'),
            getMuscleGroupByText('neck'),
            getMuscleGroupByText('legs'),
        ]
    },
    {
        id: 9,
        name: 'exercizer.exercises.squat',
        muscleGroups: [getMuscleGroupByText('legs')]
    },
    {
        id: 10,
        name: 'exercizer.exercises.bicepsCurl',
        muscleGroups: [getMuscleGroupByText('biceps')]
    },
    {
        id: 11,
        name: 'exercizer.exercises.shrugs',
        muscleGroups: [getMuscleGroupByText('neck'), getMuscleGroupByText('shoulders')]
    },
    {
        id: 12,
        name: 'exercizer.exercises.dumbbellShoulderPress',
        muscleGroups: [getMuscleGroupByText('shoulders'), getMuscleGroupByText('neck'), getMuscleGroupByText('triceps')]
    },
    {
        id: 13,
        name: 'exercizer.exercises.seatedCalveRaises',
        muscleGroups: [getMuscleGroupByText('calves')]
    },
    {
        id: 14,
        name: 'exercizer.exercises.frenchPress',
        muscleGroups: [getMuscleGroupByText('triceps')]
    },
    {
        id: 15,
        name: 'exercizer.exercises.dips',
        muscleGroups: [getMuscleGroupByText('triceps'), getMuscleGroupByText('shoulders')]
    },
    {
        id: 16,
        name: 'exercizer.exercises.crunches',
        muscleGroups: [getMuscleGroupByText('abs'),]
    },
    {
        id: 17,
        name: 'exercizer.exercises.romanianDeadlift',
        muscleGroups: [
            getMuscleGroupByText('legs'),
            getMuscleGroupByText('neck'),
            getMuscleGroupByText('back'),
        ]
    },
    {
        id: 18,
        name: 'exercizer.exercises.standingSideLateralRaise',
        muscleGroups: [
            getMuscleGroupByText('shoulders'),
        ]
    },
    {
        id: 19,
        name: 'exercizer.exercises.frontRaise',
        muscleGroups: [
            getMuscleGroupByText('shoulders'),
        ]
    },
    {
        id: 20,
        name: 'exercizer.exercises.cableFlies',
        muscleGroups: [
            getMuscleGroupByText('chest'),
            getMuscleGroupByText('shoulders'),
        ]
    },
    {
        id: 21,
        name: 'exercizer.exercises.standingCalveRaise',
        muscleGroups: [getMuscleGroupByText('calves')]
    },
    {
        id: 22,
        name: 'exercizer.exercises.militaryPress',
        muscleGroups: [getMuscleGroupByText('shoulders'), getMuscleGroupByText('neck'), getMuscleGroupByText('triceps')]
    },
    {
        id: 23,
        name: 'exercizer.exercises.legPress',
        muscleGroups: [getMuscleGroupByText('legs'), getMuscleGroupByText('calves')]
    },
    {
        id: 24,
        name: 'exercizer.exercises.dumbbellPullOvers',
        muscleGroups: [getMuscleGroupByText('back'), getMuscleGroupByText('chest'), getMuscleGroupByText('triceps'), getMuscleGroupByText('serratusAnterior')]
    },
];