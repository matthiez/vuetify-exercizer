<template>
    <v-container grid-list-md>
        <v-layout row wrap>
            <v-flex d-flex xs12 md6 v-for='(day, n) in weekdays' :key='n'>
                <div>
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
                                    v-for="(exercise, i) in selected[n].map(eid => $root.$exercizer.EXERCISES.filter(({id}) => id === eid)[0])"
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
                </div>
            </v-flex>

            <v-flex xs12 md6 text-xs-center>
                <v-btn
                        color="primary"
                        @click="downloadXlsx"
                >
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

<script>
    import XLSX from 'xlsx';

    export default {
        props: {
            combo: {
                type: Array,
                default: () => []
            },
            weekdays: {
                type: Array,
                default: () => []
            },
        },

        data() {
            return {
                selected: this.weekdays.map((w, i) =>
                    this.getExercises(i)
                        .filter(e => this.combo[i].map(c => this.$t(c.text))
                            .includes(this.$t(e.muscleGroups[0].text)))
                        .map(({id}) => id)
                        .slice(0, 5)),
                fileName: this.$t('exercizer.setExercises.fileNameDefault')
            };
        },

        methods: {
            getExercises(index) {
                const muscleGroups = this.combo[index].map(r => this.$t(r.text));

                const ex = [];

                for (const exercise of this.$root.$exercizer.EXERCISES) {
                    const filtered =
                        exercise.muscleGroups.filter(
                            m => muscleGroups.includes(this.$t(m.text)));

                    if (filtered.length) {
                        const eindex = this.$root.$exercizer.EXERCISES.findIndex(({id}) => id == exercise.id);

                        const _ex = this.$root.$exercizer.EXERCISES[eindex]

                        _ex.name = this.$t(_ex.name);

                        ex.push(_ex);
                    }
                }


                return ex
            },

            async downloadXlsx() {
                const wb = XLSX.utils.book_new();

                for (let [i, day] of this.weekdays.entries()) {
                    day = this.$t(day);

                    const getIndexedCombo = n => this.$t((this.combo[i][n] || {}).text);
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
                        rows.push({S: this.$t(this.$root.$exercizer.EXERCISES.filter(e => e.id === add)[0].name)});
                    }

                    XLSX.utils.book_append_sheet(
                        wb,
                        XLSX.utils.json_to_sheet(rows, {skipHeader: true}),
                        day);
                }

                XLSX.writeFile(wb, this.fileName + '.xlsx');
            },
        }
    };
</script>

<style>
    .eoo-xrczr-daily-exercise {
        cursor: grab;
        border: 1px solid #fff;
    }
</style>