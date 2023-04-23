import { defineStore } from 'pinia'
import { Sensors } from '@/pages/sensors/composables/useSensors'

export const useSensorStore = defineStore('sensorStore', () => {
    const sensorList = ref<Sensors>({
        "@iot.count": 0,
        "value": []
    })

    const getSensors = async() => {
        const sensorData:Sensors = await $fetch('api/v1.0/Sensors')

        sensorList.value["@iot.count"] = sensorData["@iot.count"]
        sensorList.value.value.push(...sensorData.value)

    }

    return { getSensors, sensorList }
})
