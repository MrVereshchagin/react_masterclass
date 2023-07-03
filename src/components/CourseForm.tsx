import { useState } from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, TextField, Button } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

import { Dayjs } from 'dayjs';
import 'dayjs/locale/ru';

export interface CourseFormProps {
    open: boolean,
    onClose: () => void,
    onSubmit: () => void,
    edit?: boolean
}

export function CourseForm({ open, onClose, onSubmit, edit }: CourseFormProps) {
    const formTypeText = edit ? 'Изменить' : 'Создать';
    const submitAndClose = () => {
        onSubmit();
        onClose();
    }

    const [date, setDate] = useState <Dayjs | null>(null);

    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>{formTypeText} курс</DialogTitle>
            <DialogContent>
                <TextField label='Название' variant='outlined' fullWidth margin='normal'></TextField>
                <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale='ru'>
                    <DatePicker
                    label='Дата проведения'
                    value={date}
                    onChange={setDate}
                    renderInput={(params) => <TextField {...params} fullWidth margin='normal'/>}/>
                </LocalizationProvider>
                <TextField label='Описание' variant='outlined' fullWidth margin='normal' multiline rows={6}></TextField>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose}>Отмена</Button>
                <Button onClick={submitAndClose}>{formTypeText}</Button>
            </DialogActions>
        </Dialog>
    )
}