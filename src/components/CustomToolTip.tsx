import { format } from "date-fns"
import { TooltipProps } from 'recharts'

import {
    ValueType,
    NameType,
} from 'recharts/types/component/DefaultTooltipContent'

const CustomTooltip = ({
    active,
    payload,
    label,
}: TooltipProps<ValueType, NameType>) => {
    if (active) {
        return (
            <div style={{ backgroundColor: "white", padding: "10px", borderRadius: "5px", border: "1px solid lightgrey" }}>
                <h5>{format(Date.parse(label), "dd.MM, HH:mm")}</h5>
                <p style={{ padding: "0px", margin: "0px" }}>{payload !== undefined && parseFloat(payload[0].value!.toString()).toFixed(2)} c/kWh</p>
            </div>
        )
    }

    return null
}

export default CustomTooltip