import {
    Box,
    IconButton,
    InputBase,
    Stack,
    styled,
    Toolbar,
    useTheme,
} from "@mui/material";
import MuiAppBar from "@mui/material/AppBar";
import MenuIcon from "@mui/icons-material/Menu";
import { alpha } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from "react-router-dom";


const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
    
    shouldForwardProp: (prop) => prop !== "open",
// @ts-ignore
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing(3),
        width: "auto",
    },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create("width"),
        width: "100%",
        [theme.breakpoints.up("md")]: {
            width: "20ch",
        },
    },
}));

const TopPar = ({ open, handleDrawerOpen,setMode }) => {
    const theme = useTheme()
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("authToken");
        navigate('/Login')
    };
    return (
        <AppBar position="fixed" 
// @ts-ignore
        open={open}>
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={handleDrawerOpen}
                    edge="start"
                    sx={{
                        marginRight: 5,
                        ...(open && { display: "none" }),
                    }}
                >
                    <MenuIcon />
                </IconButton>

                <Search>
                    <SearchIconWrapper>
                        <SearchIcon />
                    </SearchIconWrapper>
                    <StyledInputBase
                        placeholder="Search…"
                        inputProps={{ "aria-label": "search" }}
                    />
                </Search>

                <Box flexGrow={1} />
                <Stack direction={"row"}>

                    {theme.palette.mode === "light" ? (
                        <IconButton onClick={() => {
                            localStorage.setItem("currentMode", theme.palette.mode === "dark" ? "light" : "dark")
                            setMode((prevMode) =>
                                prevMode === 'light' ? 'dark' : 'light',
                            );
                        }} color="inherit">
                            <LightModeOutlinedIcon fontSize="inherit" />
                        </IconButton>)
                        :
                        (<IconButton onClick={() => {
                            localStorage.setItem("currentMode", theme.palette.mode === "dark" ? "light" : "dark")
                            setMode((prevMode) =>
                                prevMode === 'light' ? 'dark' : 'light',
                            );
                        }} color="inherit">
                            <DarkModeOutlinedIcon fontSize="inherit" />
                        </IconButton>)}


                    <IconButton color="inherit">
                        <NotificationsOutlinedIcon fontSize="inherit" />
                    </IconButton>
                    <IconButton color="inherit">
                        <SettingsOutlinedIcon fontSize="inherit" />
                    </IconButton>
                    <IconButton color="inherit">
                        <Person2OutlinedIcon fontSize="inherit" />
                    </IconButton>
                    <IconButton color="inherit" onClick={handleLogout}>
                        <LogoutIcon fontSize="inherit" />
                    </IconButton>
                </Stack>
            </Toolbar>
        </AppBar>
    );
};

export default TopPar;
