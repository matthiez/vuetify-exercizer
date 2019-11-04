<template>
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
                        <v-list subheader width="100%">
                            <v-subheader class="justify-center">
                                {{$t(weekdays[bodyPartIndex])}}
                            </v-subheader>

                            <v-list-item text-center
                                         v-for="(bp, i) in bodyPart"
                                         :key="i">
                                <v-list-item-content>
                                    <v-list-item-title class="text-xs-center">
                                        {{$t(bp.text)}}
                                    </v-list-item-title>
                                </v-list-item-content>
                            </v-list-item>
                        </v-list>
                    </v-flex>
                </v-layout>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator'
    import {Combo, ComboEvent, ISetCombo} from "@/types";

    @Component
    export default class SetCombo extends Vue implements ISetCombo {
        @Prop({default: () => []}) combos!: Combo[];
        @Prop({default: () => []}) weekdays!: string[];

        onSetCombo(comboIndex: number): void {
            this.$emit('set-combo', {comboIndex} as ComboEvent);
        }
    }
</script>