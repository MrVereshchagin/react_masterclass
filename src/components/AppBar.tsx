import { Icon, IconButton, AppBar as MuiAppBar, Toolbar, Typography} from "@mui/material";
import { useNavigate } from "react-router-dom";

export interface AppBarProps {

}

export function AppBar({}: AppBarProps) {
    const navigate = useNavigate();

    return(
        <MuiAppBar component="nav">
            <Toolbar>
                <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
                    Система курсов
                </Typography>
                <IconButton size="large" color="inherit" onClick={() => navigate('/login')}>
                    <Icon>logout</Icon>
                </IconButton>
            </Toolbar>
        </MuiAppBar>
    )
}