import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Menu, { MenuProps } from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import Setting from "../../images/templateImages/setting.png"
import Logout from "../../images/templateImages/logout.png"
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { ThemeProvider, createTheme} from '@mui/material'
import { UserContext } from '../../contexts/UserContext';
import { useContext } from "react"
import { useNavigate } from 'react-router-dom';
import * as S from './styles'
import { UserLoggedType } from '../../types/UserType'
const finalTheme = createTheme({
  components:{
    MuiButton:{
      styleOverrides:{
        root: {
          color: '#212121',
          backgroundColor: 'transparent',
          '&:hover': {
            backgroundColor: 'inherit',
          },
        }  
      }
    }
  }
})

const StyledMenu = styled((props: MenuProps) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '4px 0',
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      '&:active': {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity,
        ), 
      },
    },
  },
}));

export default function MenuLoginUser({nome, email}: UserLoggedType ) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const authUser = useContext(UserContext)
  const navigate = useNavigate()
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  
  const handleLogout = () => {
    authUser.logout()
    navigate('/')
  }
  return (
    <div>
      <ThemeProvider theme={finalTheme}>
        <Button
          id="demo-customized-button"
          aria-controls={open ? 'demo-customized-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          variant="contained"
          disableElevation
          onClick={handleClick}
          endIcon={<KeyboardArrowDownIcon />}
        >
          <div>
            <S.NameUser>{nome}</S.NameUser>
            <S.EmailUser>{email}</S.EmailUser>
          </div>
        </Button>
      </ThemeProvider>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          'aria-labelledby': 'demo-customized-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <S.ContainerMenu>
          <MenuItem onClick={handleClose} disableRipple>
            <S.IconMenu src={Setting} alt="Configurações" />
            Configurações
          </MenuItem>
          <Divider sx={{ my: 0.5 }} />
          <MenuItem onClick={handleLogout} disableRipple>
            <S.IconMenu src={Logout} alt="Sair" />
            Sair
          </MenuItem>
        </S.ContainerMenu>
      </StyledMenu>
    </div>
  );
}