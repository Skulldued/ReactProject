import { Opacity } from "@mui/icons-material"
import { duration } from "@mui/material"
import { del } from "motion/react-client"

 export const fadeIn = (direction, delay)=>{
    return{
        hidden:{
            y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
            Opacity: 0,
            x : direction === "left" ? 40 : direction === "right" ? -40 : 0,
        },
        show : {
            y : 0,
            x : 0,
            Opacity : 1,
            transition : {
                type : "tween",
                duration : 1.2,
                delay : delay,
                else : [0.25, 0.25, 0.25, 0.75]
            }
        }
    }
 }