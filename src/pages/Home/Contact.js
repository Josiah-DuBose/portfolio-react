import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { get } from 'lodash';
import { sendEmail } from '../../helpers/email';
import Loading from '../../components/Loading';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
};

const defaultForm = { from_name: '', from_email: '', message: '' }

const ContactModal = ({ open, handleClose }) => {
    const [form, setForm] = React.useState({ ...defaultForm });
    const [loading, setLoading] = React.useState(false);
    const [msgSent, setMsgSent] = React.useState(false);

    const handleChange = (e) => {
        const val = get(e, 'target.value');
        const key = get(e, 'target.id');
        setForm({ ...form, [key]: val });
    };

    const handleSubmit = async () => {
        try {
            setLoading(true);
            await sendEmail(form);
            setMsgSent(true);
            setForm(defaultForm);
            await new Promise(r => setTimeout(r, 1200));
        } catch (err) {
            console.error('Error sending email: ', err)
        } finally {
            setLoading(false);
            setMsgSent(false);
            handleClose();
        }
    };

    return (
        <Modal open={open} onClose={handleClose}>
            <Box sx={style}>
                <Typography color="dark" variant="h5">
                    Contact
                </Typography>
                {!loading && !msgSent && (
                    <Box>
                        <TextField
                            id="from_name"
                            label="Name"
                            value={form.name}
                            onChange={handleChange}
                            variant="outlined"
                            sx={{
                                mr: 4,
                                mt: 4,
                                width: '100%'
                            }}
                        />
                        <TextField
                            id="from_email"
                            label="Email"
                            value={form.email}
                            onChange={handleChange}
                            type="email"
                            variant="outlined"
                            sx={{
                                width: '100%',
                                mt: 4,
                            }}
                        />
                        <TextField
                            id="message"
                            label="Message"
                            value={form.message}
                            onChange={handleChange}
                            multiline
                            rows={8}
                            sx={{
                                width: '100%',
                                mt: 4,
                            }}
                            variant="outlined"
                        />
                        <Stack
                            sx={{
                                float: 'right',
                                mt: 4,
                            }}
                            spacing={2}
                            direction="row"
                        >
                            <Button
                                onClick={handleClose}
                                color="dark"
                                variant="outlined"
                            >
                                Cancel
                            </Button>
                            <Button
                                sx={{ color: 'white' }}
                                variant="contained"
                                onClick={handleSubmit}
                            >
                                Submit
                            </Button>
                        </Stack>
                    </Box>
                )}
                {loading && !msgSent && <Loading styles={{  mt: '10%', mb: '10%', }} msg="Sending email" />}
                {msgSent && (
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            mt: '10%',
                            mb: '10%',
                        }}
                    >
                        <Typography color="dark" variant="body1">
                            <CheckCircleIcon color="primary" /> Message sent
                        </Typography>
                    </Box>
                )}
            </Box>
        </Modal>
    );
};

export default ContactModal;
