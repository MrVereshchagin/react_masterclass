import { Box, Button, Card, TextField, Typography } from '@mui/material';
import classes from './LoginPage.module.scss';
import { useNavigate } from 'react-router-dom';

export interface LoginPageProps {
    
}

export function LoginPage({}: LoginPageProps) {
    const navigate = useNavigate();

    const onSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
        evt.preventDefault();
        navigate('/courses');
    }

    return (
        <div className={classes['login-page']}>
            <Card variant='outlined' sx={{p: 2}}>
                <Typography variant='h4' component='h1'>
                    Вход
                </Typography>
                <Box component='form' onSubmit={onSubmit} sx={{maxWidth: 600}}>
                    <TextField label='Email' variant='outlined' fullWidth margin='normal' />
                    <TextField label='Пароль' variant='outlined' fullWidth margin='normal' />
                    <Button type='submit' sx={{mt: 1, display: 'block', ml: 'auto'}} variant='outlined'>
                        Подтвердить
                    </Button>
                </Box>
            </Card>
        </div>
    )
}