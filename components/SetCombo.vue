<template>
    <div>
        <v-container grid-list-md>
            <v-layout row wrap>
                <v-flex
                        fill-height
                        d-flex
                        xs12
                        v-for="(combo, comboIndex) in combos"
                        :key="comboIndex"
                        @click="onSetCombo(comboIndex)"
                        :style="{cursor: 'grab', border: comboIndex % 2 === 0 ? '1px solid #fff' : 'none'}">
                    <v-layout row wrap>
                        <v-flex d-flex xs6
                                v-for="(bodyPart, bodyPartIndex) in combo"
                                :key="bodyPartIndex">
                            <v-list subheader>
                                <v-subheader class="justify-center">
                                    {{$t(weekdays[bodyPartIndex])}}
                                </v-subheader>

                                <v-list-tile text-center
                                             v-for="bp in bodyPart"
                                             :key="bp.text">
                                    <v-list-tile-content>
                                        <v-list-tile-title class="text-xs-center">
                                            {{$t(bp.text)}}
                                        </v-list-tile-title>
                                    </v-list-tile-content>
                                </v-list-tile>
                            </v-list>
                        </v-flex>
                    </v-layout>
                </v-flex>
            </v-layout>
        </v-container>

    </div>
</template>

<script>
    export default {
        props: {
            combos: {
                type: Array,
                default: () => []
            },
            weekdays: {
                type: Array,
                default: () => []
            }
        },

        methods: {
            onSetCombo(comboIndex) {
                this.$emit('step3', {comboIndex});
            },
        },
    };
</script>