import { ThemeOptions } from "@mui/material";

declare module '@mui/material'{

    interface Theme{
        status:{
            danger:string
        }
    }

    interface ThemeOptions{
        status:{
            danger:React.CSSProperties['color']
        }
    }
}