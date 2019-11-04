<template>
    <v-container grid-list-md>
        <v-layout row wrap>
            <v-flex xs12 md6 v-for='(day, n) in weekdays' :key='n'>
                <v-autocomplete
                        class="mx-3"
                        item-text="name"
                        item-value="id"
                        :items="getExercises(n)"
                        :label.once="$t(day)"
                        multiple
                        v-model="selected[n]"
                ></v-autocomplete>

                <v-container grid-list-md>
                    <v-layout row wrap>
                        <v-flex
                                fill-height
                                d-flex
                                xs12
                                v-for="(exercise, i) in selected[n].map(eid => exercizer.EXERCISES.filter(({id}) => id === eid)[0])"
                                :key="i"
                                class="eoo-xrczr-daily-exercise">
                            <v-list subheader width="100%">
                                <v-subheader class="justify-center headline">
                                    {{exercise.name}}
                                </v-subheader>

                                <v-list-item text-center>
                                    <v-list-item-content
                                            v-for="(muscleGroup, k) in exercise.muscleGroups"
                                            :key="k">
                                        <v-list-item-title class="text-xs-center">
                                            {{$t(muscleGroup.text)}}
                                        </v-list-item-title>
                                    </v-list-item-content>
                                </v-list-item>
                            </v-list>
                        </v-flex>
                    </v-layout>
                </v-container>
            </v-flex>

            <v-flex xs12 md6 text-xs-center>
                <v-btn color="primary" @click="downloadXlsx">
                    {{$t('exercizer.ui.download')}} Excel
                </v-btn>
            </v-flex>

            <v-flex xs12 md6>
                <v-text-field
                        :label="$t('exercizer.ui.fileName')"
                        v-model="fileName"
                ></v-text-field>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script lang="ts">
    import {Vue, Component, Prop, Inject} from 'vue-property-decorator'

    const XLSX = require('xlsx/dist/xlsx.mini.min');
    import {Combo, Exercise, IExercizer, MuscleGroup} from "@/types";

    @Component
    export default class SetExercises extends Vue {
        @Prop({default: () => []}) combo!: Combo;
        readonly defaultFileName = 'exercizer.setExercises.fileNameDefault';
        @Inject() readonly exercizer!: IExercizer;
        userFileName: string = this.defaultFileName;
        @Prop({default: () => []}) weekdays!: string[];

        get fileName(): string {
            return this.defaultFileName === this.userFileName
                ? this.$t(this.userFileName) as string
                : this.userFileName;
        };

        set fileName(fileName: string) {
            this.userFileName = fileName;
        };

        get selected() {
            return this.weekdays.map((w, i) => this.getExercises(i)
                .filter(e => this.combo[i].map(c => this.$t(c.text))
                    .includes(this.$t(e.muscleGroups[0].text)))
                .map(({id}: Exercise) => id)
                .slice(0, 5))
        }

        async downloadXlsx() {
            const wb = XLSX.utils.book_new();

            for (let [i, day] of this.weekdays.entries()) {
                day = String(this.$t(day));

                const getIndexedCombo = (n: number) => this.$t((this.combo[i][n] || {}).text);
                const rows = [
                    {S: day},
                    {
                        S: getIndexedCombo(0), //muscle group 1
                        h: getIndexedCombo(1), //muscle group 2
                        e: getIndexedCombo(2), //muscle group 3
                        e_1: getIndexedCombo(3), //muscle group 4
                        e_2: getIndexedCombo(4) //muscle group 5
                    },
                    {},
                    {},
                ];

                for (const add of (this.selected[i] || [])) {
                    rows.push({
                        S: String(this.$t(this.exercizer.EXERCISES.filter((e: Exercise) => e.id === add)[0].name))
                    });
                }

                XLSX.utils.book_append_sheet(
                    wb,
                    XLSX.utils.json_to_sheet(rows, {skipHeader: true}),
                    day as string);
            }

            XLSX.writeFile(wb, `${this.fileName}.xlsx`);
        }

        getExercises(index: number): Exercise[] {
            const ex = [];

            const muscleGroups = this.combo[index].map((r: MuscleGroup) => this.$t(r.text));

            for (const exercise of this.exercizer.EXERCISES) {
                const filtered =
                    exercise.muscleGroups.filter(m => muscleGroups.includes(this.$t(m.text)));

                if (filtered.length) {
                    const eindex = this.exercizer.EXERCISES.findIndex(({id}) => id == exercise.id);

                    const _ex = this.exercizer.EXERCISES[eindex];

                    _ex.name = String(this.$t(_ex.name));

                    ex.push(_ex);
                }
            }

            return ex
        }
    }
</script>

<style>
    .eoo-xrczr-daily-exercise {
        cursor: grab;
        border: 1px solid #fff;
    }
</style>