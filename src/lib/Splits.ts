import {Split} from "@/types";
import {getMuscleGroupByText} from "@/lib/getMuscleGroupByText";

export const Splits: Split[] = [
    {
        id: 2,
        text: '2er-Split',
        subheading: 'für schwer Beschäftigte',
        combos: [
            [
                [getMuscleGroupByText('legs'), getMuscleGroupByText('calves'), getMuscleGroupByText('shoulders'), getMuscleGroupByText('biceps')],
                [getMuscleGroupByText('chest'), getMuscleGroupByText('triceps'), getMuscleGroupByText('back')]
            ],
            [
                [getMuscleGroupByText('legs'), getMuscleGroupByText('calves'), getMuscleGroupByText('chest'), getMuscleGroupByText('triceps')],
                [getMuscleGroupByText('shoulders'), getMuscleGroupByText('biceps'), getMuscleGroupByText('back'), getMuscleGroupByText('abs')]
            ]
        ]
    },
    {
        id: 3,
        text: '3er-Split',
        subheading: 'für Normaltrainierende',
        combos: [
            [
                [getMuscleGroupByText('legs'), getMuscleGroupByText('calves')],
                [getMuscleGroupByText('chest'), getMuscleGroupByText('triceps'), getMuscleGroupByText('shoulders')],
                [getMuscleGroupByText('biceps'), getMuscleGroupByText('neck'), getMuscleGroupByText('back')]
            ]
        ]
    },
    {
        id: 4,
        text: '4er-Split',
        subheading: 'für Fortgeschrittene',
        combos: [
            [
                [getMuscleGroupByText('back'), getMuscleGroupByText('calves')],
                [getMuscleGroupByText('neck'), getMuscleGroupByText('shoulders')],
                [getMuscleGroupByText('legs'), getMuscleGroupByText('biceps')],
                [getMuscleGroupByText('chest'), getMuscleGroupByText('triceps')]
            ],
            [
                [getMuscleGroupByText('shoulders'), getMuscleGroupByText('calves')],
                [getMuscleGroupByText('neck'), getMuscleGroupByText('back')],
                [getMuscleGroupByText('legs'), getMuscleGroupByText('triceps')],
                [getMuscleGroupByText('chest'), getMuscleGroupByText('biceps')]
            ]
        ]
    },
    {
        id: 5,
        text: '5er-Split',
        subheading: 'für Wettkampfambitionierte',
        combos: [
            [
                [getMuscleGroupByText('back')],
                [getMuscleGroupByText('chest')],
                [getMuscleGroupByText('biceps'), getMuscleGroupByText('shoulders')],
                [getMuscleGroupByText('triceps'), getMuscleGroupByText('neck')],
                [getMuscleGroupByText('legs'), getMuscleGroupByText('calves')]
            ]
        ]
    },
    {
        id: 6,
        text: '6er-Split',
        subheading: 'für Hardcore-Bodybuilder',
        combos: [
            [
                [getMuscleGroupByText('back')],
                [getMuscleGroupByText('chest')],
                [getMuscleGroupByText('biceps'), getMuscleGroupByText('calves')],
                [getMuscleGroupByText('triceps'), getMuscleGroupByText('neck')],
                [getMuscleGroupByText('legs')],
                [getMuscleGroupByText('shoulders')]
            ]
        ]
    }
];